const https = require('https');
const http = require('http');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// ==================== НАСТРОЙКИ ====================
const DELAY_MS = 10000;       // задержка между запросами (мс) — 10 сек
const RATE_LIMIT_DELAY = 300000; // пауза при 429 — 5 минут
const MAX_RETRIES = 3;
const TIMEOUT_MS = 15000;
const RESULTS_FILE = path.join(__dirname, 'verify_results.json');
const MFG_RESULTS_FILE = path.join(__dirname, 'verify_mfg_results.json');
const OUTPUT_DIR = __dirname;

// ==================== HTTP КЛИЕНТ ====================
function fetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const req = proto.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'ru-RU,ru;q=0.9,en;q=0.8',
      },
      timeout: options.timeout || TIMEOUT_MS,
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (!loc.startsWith('http')) {
          loc = new URL(loc, url).href;
        }
        return fetch(loc, options).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data, url }));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function strip(html) {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&/g, '&')
    .replace(/"/g, '"')
    .replace(/&#43;/g, '+')
    .replace(/&#8212;/g, '—')
    .replace(/&#8211;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&laquo;/g, '«')
    .replace(/&raquo;/g, '»')
    .replace(/\s+/g, ' ')
    .trim();
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// ==================== CHECKO.RU ПАРСЕР (с обработкой 429) ====================
async function searchChecko(query, retryCount = 0) {
  try {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://checko.ru/search?query=${encodedQuery}`;
    const res = await fetch(url);
    
    // Handle rate limiting
    if (res.status === 429) {
      const waitTime = RATE_LIMIT_DELAY * (retryCount + 1);
      console.log(`   ⏳ Rate limit (429). Ждём ${waitTime/1000}с...`);
      await sleep(waitTime);
      return searchChecko(query, retryCount + 1);
    }
    
    if (res.status !== 200) {
      return { error: `HTTP ${res.status}`, query };
    }
    
    const result = { query, source: 'checko.ru' };
    const text = strip(res.body);
    
    // Title
    const titleMatch = res.body.match(/<title[^>]*>(.*?)<\/title>/);
    if (titleMatch) {
      result.title = titleMatch[1]
        .replace(/&/g, '&')
        .replace(/"/g, '"')
        .replace(/&laquo;/g, '«')
        .replace(/&raquo;/g, '»');
    }

    // Company slug
    const companySlug = res.body.match(/company\/([a-z0-9-]+-(\d+))/);
    if (!companySlug) {
      result.found = false;
      return result;
    }
    result.found = true;
    result.ogrn = companySlug[2];
    result.checkoUrl = `https://checko.ru/company/${companySlug[1]}`;

    // Status
    if (text.includes('ликвидирова') || text.includes('Ликвидирова') || text.includes('ЛИКВИДИРОВА')) {
      result.status = 'ликвидирована';
    } else if (text.includes('банкрот')) {
      result.status = 'банкрот';
    } else if (text.includes('действующ')) {
      result.status = 'действующая';
    } else {
      result.status = 'не определён';
    }

    // Revenue
    const revMatch = text.match(/Выручк[а-я]*\s*(?:=\s*)?(?:выросла до |понизилась до |составила )?([\d,.\s]+\s*(?:млн|млрд|тыс)?\s*руб\.?)\s*([+-]?\s*\d+\s*%)?/i);
    if (revMatch) {
      result.revenue = revMatch[1].trim();
      result.revenueChange = revMatch[2] ? revMatch[2].trim() : '';
    }

    // Net profit
    const profitMatch = text.match(/Чистая прибыль\s*(?:=\s*)?(?:выросла до |понизилась до |составила )?([\d,.\s]+\s*(?:млн|млрд|тыс)?\s*руб\.?)\s*([+-]?\s*\d+\s*%)?/i);
    if (profitMatch) {
      result.profit = profitMatch[1].trim();
    }

    // INN
    const innMatch = text.match(/ИНН[:\s]*(\d{10,12})/);
    if (innMatch) result.inn = innMatch[1];

    // Address
    const addrIdx = text.indexOf('Юридический адрес');
    if (addrIdx > -1) {
      result.address = text.substring(addrIdx + 18, addrIdx + 250).trim().split(/\s{3,}/)[0];
    }

    // Phones
    const phoneMatches = text.match(/\+7[\s(]\d{3}[\s)]\s*[\d\s-]{7,10}/g);
    if (phoneMatches && phoneMatches.length > 0) {
      result.phones = [...new Set(phoneMatches.map(p => p.trim()))].slice(0, 5);
    }

    // Email
    const emailsAll = text.match(/[\w.-]+@[\w.-]+\.\w{2,}/g);
    if (emailsAll) {
      result.email = [...new Set(emailsAll)][0];
    }

    // Website
    const siteMatch = text.match(/(?:https?:\/\/)([\w.-]+\.\w{2,})/);
    if (siteMatch) result.site = siteMatch[0].replace(/\/$/, '');

    // Director
    const dirMatch = text.match(/(?:Руководитель|Директор)[:\s]*([А-ЯЁ][а-яё]+\s+[А-ЯЁ]\.\s*[А-ЯЁ]\.)/);
    if (dirMatch) result.director = dirMatch[1];

    return result;
  } catch (e) {
    if (retryCount < MAX_RETRIES) {
      console.log(`  Повтор (${retryCount + 1}) для: ${query} — ${e.message}`);
      await sleep(5000);
      return searchChecko(query, retryCount + 1);
    }
    return { error: e.message, query };
  }
}

// ==================== КОНТАКТЫ С САЙТА ====================
async function fetchSiteContacts(siteUrl, retryCount = 0) {
  try {
    if (!siteUrl) return {};
    if (!siteUrl.startsWith('http')) siteUrl = 'https://' + siteUrl;
    
    const result = { source: siteUrl };
    const contactPaths = ['/kontakty', '/contacts', '/o-kompanii'];
    
    // Main page
    let res = await fetch(siteUrl);
    if (res.status !== 200) return result;
    const mainText = strip(res.body);
    
    const emails = mainText.match(/[\w.-]+@[\w.-]+\.\w{2,}/g);
    if (emails) {
      result.emails = [...new Set(emails)].filter(e => 
        !e.includes('example.com') && !e.includes('yoursite')
      ).slice(0, 5);
    }

    const phones = mainText.match(/\+7[\s(]\d{3}[\s)]\s*[\d\s-]{7,10}/g);
    if (phones) {
      result.phones = [...new Set(phones.map(p => p.trim()))].slice(0, 5);
    }

    // Contact pages
    for (const p of contactPaths) {
      try {
        await sleep(500);
        const cRes = await fetch(siteUrl.replace(/\/$/, '') + p);
        if (cRes.status === 200) {
          const cText = strip(cRes.body);
          const cEmails = cText.match(/[\w.-]+@[\w.-]+\.\w{2,}/g);
          if (cEmails && cEmails.length > 0) {
            const unique = [...new Set(cEmails)].filter(e => !e.includes('example.com'));
            if (!result.emails || unique.length > (result.emails.length || 0)) {
              result.emails = unique.slice(0, 5);
            }
          }
          const cPhones = cText.match(/\+7[\s(]\d{3}[\s)]\s*[\d\s-]{7,10}/g);
          if (cPhones && cPhones.length > 0) {
            const unique = [...new Set(cPhones.map(ph => ph.trim()))];
            if (!result.phones || unique.length > (result.phones.length || 0)) {
              result.phones = unique.slice(0, 5);
            }
          }
        }
      } catch (e) { /* skip */ }
    }

    return result;
  } catch (e) {
    if (retryCount < 1) {
      await sleep(2000);
      return fetchSiteContacts(siteUrl, retryCount + 1);
    }
    return { error: e.message, source: siteUrl };
  }
}

// ==================== ЧТЕНИЕ ДАННЫХ ====================
function readCompaniesToCheck() {
  const wb = XLSX.readFile(path.join(OUTPUT_DIR, 'база_компаний_к_проверке.xlsx'));
  const ws = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
  
  const companies = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (!row || !row[1]) continue;
    companies.push({
      num: row[0],
      name: String(row[1]).trim(),
      status: row[2] || 'проверить',
      category: row[3] || '',
      address: row[4] || '',
      phones: row[5] || '',
      email: row[6] || '',
      site: row[7] || '',
      revenue: row[8] || '',
      notes: row[9] || '',
      source: row[10] || '',
    });
  }
  return companies;
}

// ==================== СОХРАНЕНИЕ ====================
function saveJSON(results, file) {
  fs.writeFileSync(file, JSON.stringify(results, null, 2), 'utf8');
}

function loadJSON(file) {
  if (fs.existsSync(file)) {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  }
  return [];
}

function saveXLSX(results, filename) {
  const data = results.map((r, idx) => ({
    '№': r.num || idx + 1,
    'Название': r.name || '',
    'Статус (было)': r.originalStatus || 'проверить',
    'Статус (checko)': r.checkoStatus || '',
    'ИНН': r.inn || '',
    'Категория': r.category || '',
    'Адрес': r.checkoAddress || '',
    'Телефоны (checko)': Array.isArray(r.checkoPhones) ? r.checkoPhones.join('\n') : '',
    'Email (checko)': r.checkoEmail || '',
    'Сайт (checko)': r.checkoSite || '',
    'Телефоны (сайт)': r.sitePhones ? r.sitePhones.join('\n') : '',
    'Email (сайт)': r.siteEmails ? r.siteEmails.join('\n') : '',
    'Выручка': r.checkoRevenue || '',
    'Прибыль': r.profit || '',
    'Руководитель': r.director || '',
    'checko.ru': r.checkoUrl || '',
    'Источник': r.dataSource || '',
    'Примечания': r.notes || '',
  }));

  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Данные');
  
  ws['!cols'] = [
    {wch:4},{wch:40},{wch:12},{wch:15},{wch:14},{wch:25},{wch:45},
    {wch:25},{wch:25},{wch:30},{wch:25},{wch:25},{wch:15},{wch:15},
    {wch:25},{wch:45},{wch:20},{wch:30},
  ];
  
  XLSX.writeFile(wb, path.join(OUTPUT_DIR, filename));
  console.log(`✅ Сохранено: ${filename} (${data.length} компаний)`);
}

// ==================== ВЕРИФИКАЦИЯ ====================
async function verifyCompaniesList(companies, label, jsonFile) {
  const allResults = loadJSON(jsonFile);
  // Удаляем записи с ошибками — их нужно перепроверить
  const erroredNames = new Set(
    allResults.filter(r => r.checkoStatus?.includes('ошибка')).map(r => r.name)
  );
  const cleanResults = allResults.filter(r => !erroredNames.has(r.name));
  const processedNames = new Set(cleanResults.map(r => r.name));
  
  // Заменяем allResults на clean (без ошибок)
  allResults.length = 0;
  allResults.push(...cleanResults);
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`${label}: ${companies.length} компаний | Готово: ${processedNames.size} | На повтор: ${erroredNames.size}`);
  console.log(`${'='.repeat(60)}\n`);

  for (let i = 0; i < companies.length; i++) {
    const company = companies[i];
    const searchName = company.searchName || company.name;
    
    if (processedNames.has(company.name)) {
      console.log(`⏭️  [${i+1}/${companies.length}] ${company.name} — готово`);
      continue;
    }

    console.log(`🔍 [${i+1}/${companies.length}] ${company.name} → ${searchName}`);

    const checkoData = await searchChecko(searchName);
    
    const result = {
      num: company.num || i + 1,
      name: company.name,
      originalStatus: company.status || 'проверить',
      category: company.category || '',
      notes: company.notes || '',
      source: company.source || '',
    };

    if (checkoData.error) {
      console.log(`   ❌ ${checkoData.error}`);
      result.checkoStatus = 'ошибка: ' + checkoData.error;
    } else if (!checkoData.found) {
      console.log(`   ⚠️ Не найден`);
      result.checkoStatus = 'не найден';
    } else {
      result.checkoStatus = checkoData.status;
      result.inn = checkoData.inn || '';
      result.checkoAddress = checkoData.address || '';
      result.checkoPhones = checkoData.phones || [];
      result.checkoEmail = checkoData.email || '';
      result.checkoSite = checkoData.site || '';
      result.checkoRevenue = checkoData.revenue || '';
      result.profit = checkoData.profit || '';
      result.director = checkoData.director || '';
      result.checkoUrl = checkoData.checkoUrl || '';
      result.ogrn = checkoData.ogrn || '';
      
      const info = [];
      if (checkoData.status) info.push(checkoData.status);
      if (checkoData.inn) info.push('ИНН:' + checkoData.inn);
      if (checkoData.revenue) info.push('💰' + checkoData.revenue);
      console.log(`   ${info.join(' | ')}`);
    }

    // Website contacts
    const siteToCheck = result.checkoSite || company.site || '';
    if (siteToCheck && result.checkoStatus !== 'ликвидирована') {
      console.log(`   🌐 Сайт: ${siteToCheck}`);
      await sleep(1500);
      const siteData = await fetchSiteContacts(siteToCheck);
      if (siteData.phones?.length > 0) {
        result.sitePhones = siteData.phones;
        console.log(`   📞 ${siteData.phones.join(', ')}`);
      }
      if (siteData.emails?.length > 0) {
        result.siteEmails = siteData.emails;
        console.log(`   📧 ${siteData.emails.join(', ')}`);
      }
    }

    result.dataSource = 'checko.ru' + (siteToCheck && result.sitePhones ? ' + сайт' : '');

    allResults.push(result);
    processedNames.add(company.name);

    if (allResults.length % 5 === 0) {
      saveJSON(allResults, jsonFile);
      console.log(`   💾 Сохранено ${allResults.length} записей`);
    }

    // Пауза 2 минуты каждые 10 компаний для предотвращения 429
    const newInBatch = allResults.length - cleanResults.length;
    if (newInBatch > 0 && newInBatch % 10 === 0) {
      console.log(`\n   ⏸️ ПАКЕТНАЯ ПАУЗА: 120 сек (обработано ${newInBatch} в этом запуске)...\n`);
      saveJSON(allResults, jsonFile);
      await sleep(120000);
    } else {
      await sleep(DELAY_MS);
    }
  }

  saveJSON(allResults, jsonFile);
  return allResults;
}

// ==================== СПИСОК ПРОИЗВОДИТЕЛЕЙ ====================
const MAJOR_MANUFACTURERS = [
  { name: 'Knauf (Кнауф)', searchName: 'КНАУФ ГИПС', category: 'ССС, гипс, штукатурки', site: 'knauf.ru' },
  { name: 'Ceresit (Henkel)', searchName: 'Хенкель Рус', category: 'ССС, клей, затирки', site: 'ceresit.ru' },
  { name: 'Weber (Saint-Gobain)', searchName: 'Сен-Гобен Строительная Продукция Рус', category: 'ССС', site: 'weber-vetonit.ru' },
  { name: 'Bergauf (Бергауф)', searchName: 'Бергауф', category: 'ССС, клей, штукатурки', site: 'bergauf.ru' },
  { name: 'Старатели', searchName: 'Старатели', category: 'ССС, шпатлёвки', site: 'starateli.com' },
  { name: 'Основит', searchName: 'Основит', category: 'ССС, клей, штукатурки', site: 'osnovit.ru' },
  { name: 'Юнис', searchName: 'ЮНИС', category: 'ССС, клей, затирки', site: 'unis.ru' },
  { name: 'Плитонит', searchName: 'Плитонит', category: 'ССС, клей', site: 'plitonit.ru' },
  { name: 'Litokol', searchName: 'ЛИТОКОЛ', category: 'ССС, клей, затирки', site: 'litokol.ru' },
  { name: 'Брозекс', searchName: 'БРОЗЭКС', category: 'ССС, клей, штукатурки', site: 'brozex.ru' },
  { name: 'Волма', searchName: 'Волма', category: 'ССС, гипс', site: 'volma.ru' },
  { name: 'Геркулес', searchName: 'Геркулес Сибирь', category: 'ССС, клей', site: 'gerkules.info' },
  { name: 'Глимс', searchName: 'Глимс Продакшн', category: 'ССС, шпатлёвки', site: 'glims.ru' },
  { name: 'Гидрозо', searchName: 'ГИДРОЗО', category: 'ССС, гидроизоляция', site: 'gydrozo.ru' },
  { name: 'ЕК Кемикал', searchName: 'ЕК Кемикал', category: 'ССС, штукатурки', site: 'ek-kemical.ru' },
  { name: 'Быстрой', searchName: 'Быстрой', category: 'ССС', site: 'bystroy.ru' },
  { name: 'IV SIL (Ивсил)', searchName: 'ИВСИЛ', category: 'ССС, клей, затирки', site: 'ivsil.ru' },
  { name: 'МАГМА', searchName: 'МАГМА', category: 'ССС, штукатурки', site: 'magma-stroy.ru' },
  { name: 'Mapei (Мапей)', searchName: 'МАПЕИ РУС', category: 'ССС, клей', site: 'mapei.ru' },
  { name: 'Sika (Зика)', searchName: 'Sika', category: 'ССС, добавки', site: 'rus.sika.com' },
  { name: 'Ardex (Ардекс)', searchName: 'АРДЕКС', category: 'ССС, клей', site: 'ardex.ru' },
  { name: 'Бирсс', searchName: 'БИРСС', category: 'ССС, бетон', site: '' },
  { name: 'Будмар', searchName: 'Будмар', category: 'ССС', site: '' },
  { name: 'ГИПСОБЕТОН', searchName: 'ГИПСОБЕТОН', category: 'ССС, гипс', site: '' },
  { name: 'ДАВ Малино (Капарол)', searchName: 'Капарол ДЮФА', category: 'ЛКМ, ССС', site: 'caparol.ru' },
  { name: 'Екатеринодарские смеси', searchName: 'Екатеринодарские смеси', category: 'ССС', site: '' },
  { name: 'Ергач', searchName: 'Ергач', category: 'ССС', site: '' },
  { name: 'СУХИЕ СМЕСИ ТДСК', searchName: 'ТДСК Томск', category: 'ССС', site: 'bauenbesser.ru' },
  // Добавки для ССС (конкуренты)
  { name: 'ХИМСТАБ', searchName: 'ХИМСТАБ', category: 'добавки для ССС', site: 'himstab.ru' },
  { name: 'Пигмент (КРАТА)', searchName: 'Пигмент КРАТА Воронеж', category: 'добавки для ССС', site: 'krata.ru' },
  { name: 'Полипласт', searchName: 'Полипласт Новомосковск', category: 'добавки для ССС', site: 'polyplast-un.ru' },
  { name: 'Кубань-Полимер', searchName: 'Кубань-Полимер', category: 'добавки для ССС', site: 'epolymer.ru' },
  { name: 'Химпром Групп', searchName: 'Химпром Групп', category: 'добавки для ССС', site: 'himprom-group.ru' },
  { name: 'НД-Техник', searchName: 'НД-Техник', category: 'добавки для ССС', site: 'nd-t.pro' },
  { name: 'CEMMIX', searchName: 'CEMMIX', category: 'добавки для ССС', site: 'cemmix.ru' },
  { name: 'SAZI Group', searchName: 'SAZI Group', category: 'добавки для ССС', site: 'sazi-group.ru' },
  { name: 'ГК ЕТС', searchName: 'ЕТС', category: 'поставки химии', site: 'utsrus.com' },
  { name: 'Еврохим-1', searchName: 'Еврохим-1', category: 'поставки химии', site: 'eurohim.ru' },
  { name: 'Русхимсеть', searchName: 'Русхимсеть', category: 'поставки химии', site: 'rushimset.ru' },
  { name: 'Афива', searchName: 'Афива', category: 'сырьё для ССС', site: 'afiva.ru' },
  { name: 'К плюс', searchName: 'К плюс химия', category: 'добавки для ССС', site: 'kplus-chem.ru' },
  { name: 'СтройХимТрейд', searchName: 'СтройХимТрейд', category: 'поставки химии', site: 'sh-trade.ru' },
  { name: 'УралСтройГРУП', searchName: 'УралСтройГРУП', category: 'добавки для ССС', site: 'ursgroup.ru' },
  { name: 'БИПОЛЬ', searchName: 'БИПОЛЬ', category: 'крахмалы для ССС', site: '' },
  { name: 'Revada Group', searchName: 'Revada Group', category: 'поставки химии', site: 'revada-group.com' },
  { name: 'Promcoat', searchName: 'Promcoat', category: 'спец добавки', site: 'promcoat.ru' },
];

// ==================== MAIN ====================
async function main() {
  console.log('🚀 Запуск верификации...');
  console.log(`⏰ ${new Date().toLocaleString('ru-RU')}\n`);

  // ЧАСТЬ 1: 151 компаний «к проверке»
  console.log('📋 ЧАСТЬ 1: Компании «к проверке» (151 шт.)\n');
  
  const companiesToCheck = readCompaniesToCheck();
  console.log(`Прочитано: ${companiesToCheck.length} компаний\n`);

  const preparedCompanies = companiesToCheck.map(c => {
    let searchName = c.name;
    searchName = searchName.replace(/^ООО\s*["""]?\s*/i, '');
    searchName = searchName.replace(/^ЗАО\s*["""]?\s*/i, '');
    searchName = searchName.replace(/^ОАО\s*["""]?\s*/i, '');
    searchName = searchName.replace(/^АО\s*["""]?\s*/i, '');
    searchName = searchName.replace(/^ИП\s*/i, '');
    searchName = searchName.replace(/^ПБОЮЛ\s*/i, '');
    searchName = searchName.replace(/\s*["""]\s*$/g, '');
    searchName = searchName.replace(/\s*\(.*\)\s*$/, '');
    searchName = searchName.split('=')[0].split('(')[0].trim();
    return { ...c, searchName };
  });

  const checkResults = await verifyCompaniesList(preparedCompanies, 'Компании к проверке', RESULTS_FILE);

  // ЧАСТЬ 2: Крупные производители
  console.log('\n\n📋 ЧАСТЬ 2: Крупные производители ССС\n');
  
  const mfgResults = await verifyCompaniesList(MAJOR_MANUFACTURERS, 'Производители ССС', MFG_RESULTS_FILE);

  // СОХРАНЕНИЕ
  console.log('\n\n📊 Формирование файлов...\n');

  saveXLSX(checkResults, 'база_к проверке_результаты.xlsx');
  saveXLSX(mfgResults, 'база_крупные_производители_ссс.xlsx');
  
  const combined = [...checkResults, ...mfgResults];
  saveXLSX(combined, 'база_полная_верифицированная.xlsx');

  // Статистика
  console.log('\n' + '='.repeat(50));
  console.log('📊 ИТОГО');
  console.log('='.repeat(50));
  
  const all = combined;
  console.log(`Всего: ${all.length}`);
  console.log(`  🟢 Действующих: ${all.filter(r => r.checkoStatus === 'действующая').length}`);
  console.log(`  🟡 Не определён: ${all.filter(r => r.checkoStatus === 'не определён').length}`);
  console.log(`  🔴 Ликвидированных: ${all.filter(r => r.checkoStatus === 'ликвидирована').length}`);
  console.log(`  🔴 Банкротов: ${all.filter(r => r.checkoStatus === 'банкрот').length}`);
  console.log(`  ⚠️ Не найдено: ${all.filter(r => r.checkoStatus === 'не найден').length}`);
  console.log(`  ❌ Ошибок: ${all.filter(r => r.checkoStatus?.includes('ошибка')).length}`);
  console.log(`  📞 С телефонами: ${all.filter(r => r.checkoPhones?.length > 0 || r.sitePhones?.length > 0).length}`);
  console.log(`  📧 С email: ${all.filter(r => r.checkoEmail || r.siteEmails?.length > 0).length}`);
  console.log('✅ Готово!');
}

main().catch(err => {
  console.error('❌ Ошибка:', err);
  process.exit(1);
});