/**
 * Верификация компаний через API ФНС (egrul.nalog.ru)
 * POST запрос + правильный парсинг rusprofile
 */
const https = require('https');
const http = require('http');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const RESULTS_FILE = path.join(DIR, 'verify_results_fns.json');
const MFG_RESULTS_FILE = path.join(DIR, 'verify_mfg_results_fns.json');
const DELAY_MS = 1500;

// ==================== HTTP ====================
function post(url, body) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const data = typeof body === 'string' ? body : JSON.stringify(body);
    const options = {
      hostname: u.hostname,
      port: 443,
      path: u.pathname + u.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data),
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
      }
    };
    const req = https.request(options, (res) => {
      let d = '';
      res.on('data', chunk => d += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: d }));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('timeout')); });
    req.write(data);
    req.end();
  });
}

function get(url) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const req = proto.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/json',
        'Accept-Language': 'ru-RU,ru;q=0.9',
      },
      timeout: 15000,
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (!loc.startsWith('http')) loc = new URL(loc, url).href;
        return get(loc).then(resolve).catch(reject);
      }
      let d = '';
      res.on('data', chunk => d += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: d }));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function strip(html) {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&/g, '&').replace(/</g, '<')
    .replace(/>/g, '>').replace(/"/g, '"').replace(/&#39;/g, "'")
    .replace(/&laquo;/g, '«').replace(/&raquo;/g, '»')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n))
    .replace(/\s+/g, ' ').trim();
}

// ==================== ФНС API (POST) ====================
async function searchFNS(query) {
  try {
    // Step 1: POST search
    const res = await post('https://egrul.nalog.ru/', `query=${encodeURIComponent(query)}&region=${encodeURIComponent('')}`);
    if (res.status !== 200) return { error: `HTTP ${res.status}` };
    
    let data;
    try { data = JSON.parse(res.body); } catch(e) { return { error: 'JSON parse' }; }
    
    // If have token, fetch results
    if (data.t) {
      await sleep(500);
      const res2 = await get(`https://egrul.nalog.ru/search-result/${data.t}`);
      if (res2.status !== 200) return { error: `Result HTTP ${res2.status}` };
      
      let results;
      try { results = JSON.parse(res2.body); } catch(e) { return { error: 'Result JSON parse' }; }
      
      if (results.rows && results.rows.length > 0) {
        return processFNSRow(results.rows[0], query);
      }
    }
    
    // Direct results?
    if (data.rows && data.rows.length > 0) {
      return processFNSRow(data.rows[0], query);
    }
    
    return { found: false, query };
  } catch(e) {
    return { error: e.message, query };
  }
}

function processFNSRow(row, query) {
  const result = { found: true, query, source: 'egrul.nalog.ru' };
  
  // FNS uses short keys: i=ИНН, o=ОГРН, n=short name, c=full name, a=address
  // e=termination date, d=reg date, g=director info, k=OKVED
  result.inn = row.i || '';
  result.ogrn = row.o || '';
  result.shortName = row.n || '';
  result.fullName = row.c || '';
  result.address = row.a || '';
  result.regDate = row.d || '';
  
  // Status - e field has termination date if liquidated
  if (row.e) {
    result.status = 'ликвидирована';
    result.terminationDate = row.e;
  } else {
    result.status = 'действующая';
  }
  
  // Director - g field
  if (row.g) {
    const dMatch = String(row.g).match(/([А-ЯЁ][а-яё]+\s+[А-ЯЁ]\.\s*[А-ЯЁ]\.)/);
    if (dMatch) result.director = dMatch[1];
    else result.director = String(row.g).substring(0, 80);
  }
  
  // OKVED
  if (row.k) result.okved = row.k;
  
  // Build reference URL
  if (result.inn) {
    result.egrulUrl = `https://egrul.nalog.ru/${result.inn}`;
  }
  
  return result;
}

// ==================== RUSPROFILE (улучшенный парсинг) ====================
async function searchRusprofile(query) {
  try {
    const url = `https://www.rusprofile.ru/search?query=${encodeURIComponent(query)}`;
    const res = await get(url);
    if (res.status !== 200) return { error: `HTTP ${res.status}` };
    
    const body = res.body;
    
    // Check for Cloudflare protection
    if (body.includes('Just a moment') || body.includes('cf-browser-verification')) {
      return { error: 'Cloudflare blocked' };
    }
    
    // Look for company links in search results
    // rusprofile uses /id/XXXXX or /ООО-НАЗВАНИЕ-ИНН format
    const companyLinks = body.match(/href="([^"]*(?:\/id\/\d+|\/ООО[^"]*|\/АО[^"]*|\/ПАО[^"]*))"/g);
    
    if (!companyLinks || companyLinks.length === 0) {
      return { found: false };
    }
    
    // Get first company link
    const linkMatch = companyLinks[0].match(/href="([^"]+)"/);
    if (!linkMatch) return { found: false };
    
    const companyUrl = 'https://www.rusprofile.ru' + linkMatch[1];
    
    // Fetch company page
    await sleep(1000);
    const compRes = await get(companyUrl);
    if (compRes.status !== 200) return { error: `Company page HTTP ${compRes.status}` };
    
    const compBody = compRes.body;
    const compText = strip(compBody);
    
    const result = { found: true, source: 'rusprofile.ru', rusprofileUrl: companyUrl };
    
    // Status - look for specific markers in company page
    if (compText.includes('Прекратило деятельность') || compText.includes('Ликвидировано') || 
        compText.includes('Исключен из ЕГРЮЛ')) {
      result.status = 'ликвидирована';
    } else if (compText.includes('Действующая организация') || compText.includes('Действующее')) {
      result.status = 'действующая';
    } else {
      result.status = 'не определён';
    }
    
    // Parse structured data from HTML
    // rusprofile uses <span class="company-info__text"> for values
    // and <dd> tags for data
    
    // INN
    const innPatterns = [
      /ИНН<\/dt>\s*<dd[^>]*>(\d{10,12})/,
      /inn[\s"]*[^>]*>.*?(\d{10,12})/i,
      /ИНН[\s:]*.*?(\d{10,12})/,
    ];
    for (const p of innPatterns) {
      const m = compBody.match(p) || compText.match(/ИНН\s*[:\s]*(\d{10,12})/);
      if (m) { result.inn = m[1]; break; }
    }
    
    // OGRN
    const ogrnMatch = compText.match(/ОГРН\s*[:\s]*(\d{13,15})/);
    if (ogrnMatch) result.ogrn = ogrnMatch[1];
    
    // Director - look in specific tags
    const dirPatterns = [
      /Руководитель<\/dt>\s*<dd[^>]*>\s*<a[^>]*>([^<]+)/,
      /Руководитель[^<]*<[^>]+>[^<]*<[^>]*>([^<]+)/,
      /Генеральный директор[^<]*<[^>]+>[^<]*<[^>]*>([^<]+)/,
    ];
    for (const p of dirPatterns) {
      const m = compBody.match(p);
      if (m) { result.director = m[1].trim(); break; }
    }
    if (!result.director) {
      const dM = compText.match(/(?:Руководитель|Генеральный директор|Директор)[:\s]*([А-ЯЁ][а-яё]+\s+[А-ЯЁ][а-яё]+\s+[А-ЯЁ][а-яё]+)/);
      if (dM) result.director = dM[1];
    }
    
    // Address
    const addrMatch = compText.match(/Юридический адрес[:\s]*([^.]*(?:г\.|ул\.|д\.|ш\.)[^.]*)/);
    if (addrMatch) result.address = addrMatch[1].trim().substring(0, 200);
    
    // OKVED
    const okvedMatch = compBody.match(/ОКВЭД[^<]*<[^>]*>[^<]*<[^>]*>(\d+\.\d+\.?\d*)/);
    if (okvedMatch) result.okved = okvedMatch[1];
    
    // Phone - only from actual company data, not widgets
    // rusprofile puts phones in specific divs
    const phoneBlock = compBody.match(/company-info__contacts[^>]*>([\s\S]{0,500})/);
    if (phoneBlock) {
      const pMatch = phoneBlock[1].match(/\+7[\s(]\d{3}[\s)]\s*[\d\s-]{7,10}/);
      if (pMatch) result.phones = [pMatch[0].trim()];
    }
    if (!result.phones) {
      // Try structured phone blocks
      const pMatch2 = compBody.match(/tel:[^"]*?(\+7[\d\s()-]{10,})/);
      if (pMatch2) result.phones = [pMatch2[1].trim()];
    }
    
    // Revenue
    const revMatch = compText.match(/Выручка[^0-9]*([\d,.\s]+\s*(?:руб|₽|млн|млрд|тыс)?)/i);
    if (revMatch) result.revenue = revMatch[1].trim();
    
    // Website from company page
    const siteMatch = compBody.match(/href="(https?:\/\/(?:www\.)?([\w-]+\.\w{2,}(?:\.\w{2})?)(?:\/[^"]*)?)"[^>]*>(?:\2|Сайт|Официальный)/i);
    if (siteMatch) result.site = siteMatch[1];
    
    // Also try: <a href="..." target="_blank"> with company domain
    if (!result.site) {
      const siteLinks = compBody.match(/<a[^>]*href="(https?:\/\/(?!(?:rusprofile|yandex|google|cloudflare))[\w.-]+\.\w{2,}[^"]*)"[^>]*>/gi);
      if (siteLinks) {
        for (const sl of siteLinks) {
          const m = sl.match(/href="([^"]+)"/);
          if (m && !m[1].includes('rusprofile')) {
            result.site = m[1];
            break;
          }
        }
      }
    }
    
    return result;
  } catch(e) {
    return { error: e.message };
  }
}

// ==================== КОНТАКТЫ С САЙТА ====================
const GARBAGE_DOMAINS = ['getsitecontrol.com', 'cloudflare.com', 'sentry.io', 'google.com', 
  'yandex.ru', 'facebook.com', 'vk.com', 'instagram.com', 'youtube.com', 'twitter.com',
  'mc.yandex', 'googletagmanager', 'google-analytics', 'doubleclick', 'hotjar.com',
  'jivosite', 'carrotquest', 'mindbox', 'mindbox.ru'];

function isCleanEmail(email) {
  return email && email.length > 5 && !GARBAGE_DOMAINS.some(d => email.includes(d));
}

function isCleanPhone(phone) {
  // Filter out obvious non-company numbers
  return phone && phone.replace(/\D/g, '').length >= 11;
}

async function fetchSiteContacts(siteUrl) {
  try {
    if (!siteUrl) return {};
    if (!siteUrl.startsWith('http')) siteUrl = 'https://' + siteUrl;
    // Clean URL
    siteUrl = siteUrl.replace(/\/$/, '');
    
    const result = {};
    const contactPaths = ['/kontakty', '/contacts', '/o-kompanii', '/about', '/o-nas'];
    
    // Main page
    let res;
    try {
      res = await get(siteUrl);
    } catch(e) {
      return result;
    }
    if (res.status !== 200) return result;
    
    // Remove scripts and styles before extracting
    const cleanBody = res.body
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    const mainText = strip(cleanBody);
    
    // Emails
    let emails = mainText.match(/[\w.-]+@[\w.-]+\.\w{2,}/g);
    if (emails) {
      result.emails = [...new Set(emails)].filter(isCleanEmail).slice(0, 5);
    }
    
    // Phones
    let phones = mainText.match(/\+7[\s(]\d{3}[\s)]\s*[\d\s-]{7,10}/g);
    if (phones) {
      result.phones = [...new Set(phones.map(p => p.trim()))].filter(isCleanPhone).slice(0, 5);
    }
    
    // 8-800 numbers
    let phones800 = mainText.match(/8[\s-]*800[\s-]*\d{3}[\s-]*\d{2}[\s-]*\d{2}[\s-]*\d{2}/g);
    if (phones800) {
      result.phones = [...new Set([...(result.phones || []), ...phones800.map(p => p.trim())])].slice(0, 5);
    }
    
    // Contact pages
    for (const p of contactPaths) {
      try {
        await sleep(500);
        const cRes = await get(siteUrl + p);
        if (cRes.status === 200) {
          const cClean = cRes.body.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
          const cText = strip(cClean);
          
          const cEmails = cText.match(/[\w.-]+@[\w.-]+\.\w{2,}/g);
          if (cEmails && cEmails.length > 0) {
            const unique = [...new Set(cEmails)].filter(isCleanEmail);
            if (!result.emails || unique.length > (result.emails.length || 0)) {
              result.emails = unique.slice(0, 5);
            }
          }
          const cPhones = cText.match(/\+7[\s(]\d{3}[\s)]\s*[\d\s-]{7,10}/g);
          if (cPhones && cPhones.length > 0) {
            const unique = [...new Set(cPhones.map(ph => ph.trim()))].filter(isCleanPhone);
            if (!result.phones || unique.length > (result.phones.length || 0)) {
              result.phones = unique.slice(0, 5);
            }
          }
          // 8-800 on contact page
          const c800 = cText.match(/8[\s-]*800[\s-]*\d{3}[\s-]*\d{2}[\s-]*\d{2}[\s-]*\d{2}/g);
          if (c800) {
            const unique800 = [...new Set(c800.map(ph => ph.trim()))];
            result.phones = [...new Set([...(result.phones || []), ...unique800])].slice(0, 5);
          }
        }
      } catch(e) { /* skip */ }
    }
    
    return result;
  } catch(e) {
    return { error: e.message };
  }
}

// ==================== ЧТЕНИЕ/СОХРАНЕНИЕ ====================
function readCompaniesToCheck() {
  const wb = XLSX.readFile(path.join(DIR, 'база_компаний_к_проверке.xlsx'));
  const ws = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
  const companies = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (!row || !row[1]) continue;
    companies.push({
      num: row[0], name: String(row[1]).trim(), status: row[2] || 'проверить',
      category: row[3] || '', address: row[4] || '', phones: row[5] || '',
      email: row[6] || '', site: row[7] || '', revenue: row[8] || '',
      notes: row[9] || '', source: row[10] || '',
    });
  }
  return companies;
}

function saveJSON(results, file) { fs.writeFileSync(file, JSON.stringify(results, null, 2), 'utf8'); }
function loadJSON(file) {
  if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, 'utf8'));
  return [];
}

function saveXLSX(results, filename) {
  const data = results.map((r, idx) => ({
    '№': r.num || idx + 1,
    'Название': r.name || '',
    'Статус (было)': r.originalStatus || 'проверить',
    'Статус': r.verifiedStatus || '',
    'ИНН': r.inn || '',
    'ОГРН': r.ogrn || '',
    'Категория': r.category || '',
    'Адрес': r.address || '',
    'Телефоны': r.allPhones ? r.allPhones.join('\n') : '',
    'Email': r.allEmails ? r.allEmails.join('\n') : '',
    'Сайт': r.site || '',
    'Выручка': r.revenue || '',
    'Руководитель': r.director || '',
    'ОКВЭД': r.okved || '',
    'egrul.nalog.ru': r.egrulUrl || '',
    'rusprofile.ru': r.rusprofileUrl || '',
    'Источник': r.dataSource || '',
    'Примечания': r.notes || '',
  }));
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Данные');
  ws['!cols'] = [{wch:4},{wch:40},{wch:12},{wch:18},{wch:14},{wch:13},{wch:25},{wch:45},
    {wch:25},{wch:25},{wch:30},{wch:15},{wch:25},{wch:15},{wch:40},{wch:40},{wch:20},{wch:30}];
  XLSX.writeFile(wb, path.join(DIR, filename));
  console.log(`✅ ${filename} (${data.length} записей)`);
}

// ==================== ВЕРИФИКАЦИЯ ====================
async function verifyList(companies, label, jsonFile) {
  let allResults = loadJSON(jsonFile);
  const processedNames = new Set(allResults.map(r => r.name));
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`${label}: ${companies.length} | Готово: ${processedNames.size}`);
  console.log(`${'='.repeat(60)}\n`);

  let batchCount = 0;

  for (let i = 0; i < companies.length; i++) {
    const company = companies[i];
    const searchName = company.searchName || company.name;
    
    if (processedNames.has(company.name)) {
      console.log(`⏭️  [${i+1}/${companies.length}] ${company.name}`);
      continue;
    }

    console.log(`🔍 [${i+1}/${companies.length}] ${company.name} → ${searchName}`);

    const result = {
      num: company.num || i + 1,
      name: company.name,
      originalStatus: company.status || 'проверить',
      category: company.category || '',
      notes: company.notes || '',
      source: company.source || '',
      site: company.site || '',
    };

    // Step 1: Try FNS
    let fnsData = await searchFNS(searchName);
    
    if (fnsData.found && fnsData.inn) {
      result.inn = fnsData.inn;
      result.ogrn = fnsData.ogrn || '';
      result.verifiedStatus = fnsData.status;
      result.address = fnsData.address || '';
      result.director = fnsData.director || '';
      result.egrulUrl = fnsData.egrulUrl || '';
      result.okved = fnsData.okved || '';
      
      console.log(`   ✅ ФНС: ${fnsData.status} | ИНН:${fnsData.inn}`);
    } else {
      // Step 2: Try rusprofile
      console.log(`   🔄 rusprofile...`);
      await sleep(1000);
      const rpData = await searchRusprofile(searchName);
      
      if (rpData.error) {
        console.log(`   ❌ rusprofile: ${rpData.error}`);
        result.verifiedStatus = 'не проверен (ошибка)';
      } else if (rpData.found) {
        result.inn = rpData.inn || '';
        result.ogrn = rpData.ogrn || '';
        result.verifiedStatus = rpData.status;
        result.address = rpData.address || '';
        result.director = rpData.director || '';
        result.revenue = rpData.revenue || '';
        result.rusprofileUrl = rpData.rusprofileUrl || '';
        result.okved = rpData.okved || '';
        if (rpData.phones) result.rusprofilePhones = rpData.phones;
        if (rpData.site && !result.site) result.site = rpData.site;
        console.log(`   ✅ rusprofile: ${rpData.status} | ИНН:${rpData.inn || '—'}`);
      } else {
        result.verifiedStatus = 'не найден';
        console.log(`   ⚠️ Не найден`);
      }
    }

    // Step 3: Website contacts
    const siteToCheck = result.site || company.site || '';
    if (siteToCheck && result.verifiedStatus !== 'ликвидирована') {
      console.log(`   🌐 Сайт: ${siteToCheck}`);
      await sleep(800);
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

    // Combine contacts
    const allPhones = [...new Set([
      ...(result.rusprofilePhones || []),
      ...(result.sitePhones || []),
    ])];
    const allEmails = [...new Set([
      ...(result.siteEmails || []),
    ])];
    if (allPhones.length > 0) result.allPhones = allPhones;
    if (allEmails.length > 0) result.allEmails = allEmails;

    // Source info
    const sources = [];
    if (result.egrulUrl) sources.push('ФНС');
    if (result.rusprofileUrl) sources.push('rusprofile');
    if (siteToCheck && result.sitePhones?.length) sources.push('сайт');
    result.dataSource = sources.join(', ') || 'не найден';

    allResults.push(result);
    processedNames.add(company.name);
    batchCount++;

    if (batchCount % 10 === 0) {
      saveJSON(allResults, jsonFile);
      console.log(`   💾 ${allResults.length} записей`);
    }

    await sleep(DELAY_MS);
  }

  saveJSON(allResults, jsonFile);
  return allResults;
}

// ==================== ПРОИЗВОДИТЕЛИ ====================
const MAJOR_MANUFACTURERS = [
  { name: 'Knauf (Кнауф)', searchName: 'КНАУФ ГИПС', category: 'ССС, гипс', site: 'knauf.ru' },
  { name: 'Ceresit (Henkel)', searchName: 'Хенкель Рус', category: 'ССС, клей', site: 'ceresit.ru' },
  { name: 'Weber (Saint-Gobain)', searchName: 'СЕН-ГОБЕН СТРОИТЕЛЬНАЯ ПРОДУКЦИЯ РУС', category: 'ССС', site: 'weber-vetonit.ru' },
  { name: 'Bergauf', searchName: 'БЕРГАУФ', category: 'ССС', site: 'bergauf.ru' },
  { name: 'Старатели', searchName: 'СТАРАТЕЛИ', category: 'ССС', site: 'starateli.com' },
  { name: 'Основит', searchName: 'ОСНОВИТ', category: 'ССС', site: 'osnovit.ru' },
  { name: 'Юнис', searchName: 'ЮНИС', category: 'ССС', site: 'unis.ru' },
  { name: 'Плитонит', searchName: 'ПЛИТОНИТ', category: 'ССС', site: 'plitonit.ru' },
  { name: 'Litokol', searchName: 'ЛИТОКОЛ РУС', category: 'ССС', site: 'litokol.ru' },
  { name: 'Брозекс', searchName: 'БРОЗЭКС', category: 'ССС', site: 'brozex.ru' },
  { name: 'Волма', searchName: 'ВОЛМА', category: 'ССС, гипс', site: 'volma.ru' },
  { name: 'Геркулес', searchName: 'ГЕРКУЛЕС СИБИРЬ', category: 'ССС', site: 'gerkules.info' },
  { name: 'Глимс', searchName: 'ГЛИМС ПРОДАКШН', category: 'ССС', site: 'glims.ru' },
  { name: 'ЕК Кемикал', searchName: 'ЕК КЕМИКАЛ', category: 'ССС', site: 'ek-kemical.ru' },
  { name: 'IV SIL', searchName: 'ИВСИЛ', category: 'ССС', site: 'ivsil.ru' },
  { name: 'Mapei', searchName: 'МАПЕИ РУС', category: 'ССС', site: 'mapei.ru' },
  { name: 'Sika', searchName: 'ЗИКА', category: 'ССС, добавки', site: 'rus.sika.com' },
  { name: 'Ardex', searchName: 'АРДЕКС РУС', category: 'ССС', site: 'ardex.ru' },
  { name: 'ХИМСТАБ', searchName: 'ХИМСТАБ', category: 'добавки для ССС', site: 'himstab.ru' },
  { name: 'КРАТА (Пигмент)', searchName: 'ПИГМЕНТ КРАТА ВОРОНЕЖ', category: 'добавки для ССС', site: 'krata.ru' },
  { name: 'Полипласт', searchName: 'ПОЛИПЛАСТ НОВОМОСКОВСК', category: 'добавки для ССС', site: 'polyplast-un.ru' },
  { name: 'CEMMIX', searchName: 'ЦЕММИКС', category: 'добавки для ССС', site: 'cemmix.ru' },
  { name: 'ГК ЕТС', searchName: 'ЕТС ЕВРОХИМТЕХСЕРВИС', category: 'поставки химии', site: 'utsrus.com' },
  { name: 'Афива', searchName: 'АФИВА', category: 'сырьё для ССС', site: 'afiva.ru' },
  { name: 'НД-Техник', searchName: 'НД ТЕХНИК', category: 'добавки для ССС', site: 'nd-t.pro' },
  { name: 'БИРСС', searchName: 'БИРСС', category: 'ССС, бетон', site: 'birss.ru' },
  { name: 'БИПОЛЬ', searchName: 'БИПОЛЬ', category: 'крахмалы для ССС', site: 'bipol.ru' },
];

// ==================== MAIN ====================
async function main() {
  console.log('🚀 Верификация: ФНС (egrul.nalog.ru) + Rusprofile + сайты');
  console.log(`⏰ ${new Date().toLocaleString('ru-RU')}\n`);

  // Test FNS API first
  console.log('🧪 Тест API ФНС...');
  const testResult = await searchFNS('КНАУФ ГИПС');
  if (testResult.found) {
    console.log(`   ✅ ФНС работает! Тест: КНАУФ ГИПС → ИНН:${testResult.inn}, ${testResult.status}\n`);
  } else {
    console.log(`   ❌ ФНС не работает: ${testResult.error || 'не найден'}\n`);
  }
  await sleep(1000);

  // Merge previous checko data
  const prevChecko = loadJSON(path.join(DIR, 'verify_results.json'));
  const checkoMap = {};
  prevChecko.forEach(r => { 
    if (!r.checkoStatus?.includes('ошибка')) checkoMap[r.name] = r; 
  });
  console.log(`📦 Данные из checko.ru: ${Object.keys(checkoMap).length} записей\n`);

  // ЧАСТЬ 1: 151 компаний
  const companies = readCompaniesToCheck();
  console.log(`Прочитано: ${companies.length} компаний\n`);

  const prepared = companies.map(c => {
    let sn = c.name;
    sn = sn.replace(/^ООО\s*["""]?\s*/i, '').replace(/^ЗАО\s*["""]?\s*/i, '');
    sn = sn.replace(/^ОАО\s*["""]?\s*/i, '').replace(/^АО\s*["""]?\s*/i, '');
    sn = sn.replace(/^ИП\s*/i, '').replace(/^ПБОЮЛ\s*/i, '');
    sn = sn.replace(/\s*["""]\s*$/g, '').replace(/\s*\(.*\)\s*$/, '');
    sn = sn.split('=')[0].split('(')[0].trim();
    return { ...c, searchName: sn };
  });

  const checkResults = await verifyList(prepared, 'Компании к проверке', RESULTS_FILE);

  // Merge checko data into results
  checkResults.forEach(r => {
    const prev = checkoMap[r.name];
    if (prev) {
      if (!r.inn && prev.inn) r.inn = prev.inn;
      if (!r.verifiedStatus && prev.checkoStatus) r.verifiedStatus = prev.checkoStatus;
      if (!r.address && prev.checkoAddress) r.address = prev.checkoAddress;
      if (!r.director && prev.director) r.director = prev.director;
      if (prev.checkoRevenue) r.revenue = prev.checkoRevenue;
      if (prev.profit) r.profit = prev.profit;
      if (prev.checkoPhones?.length) {
        r.allPhones = [...new Set([...(r.allPhones || []), ...prev.checkoPhones])];
      }
      if (prev.checkoEmail) {
        r.allEmails = [...new Set([...(r.allEmails || []), prev.checkoEmail])];
      }
      if (prev.checkoSite && !r.site) r.site = prev.checkoSite;
    }
  });
  saveJSON(checkResults, RESULTS_FILE);

  // ЧАСТЬ 2: Производители
  console.log('\n\n📋 ЧАСТЬ 2: Производители ССС\n');
  const mfgResults = await verifyList(MAJOR_MANUFACTURERS, 'Производители ССС', MFG_RESULTS_FILE);

  // Сохранение
  console.log('\n\n📊 Сохранение...\n');
  saveXLSX(checkResults, 'база_к проверке_результаты.xlsx');
  saveXLSX(mfgResults, 'база_крупные_производители_ссс.xlsx');
  
  const combined = [...checkResults, ...mfgResults];
  saveXLSX(combined, 'база_полная_верифицированная.xlsx');

  // Stats
  const all = combined;
  console.log('\n' + '='.repeat(50));
  console.log('📊 ИТОГО');
  console.log('='.repeat(50));
  console.log(`Всего: ${all.length}`);
  console.log(`  🟢 Действующих: ${all.filter(r => r.verifiedStatus === 'действующая').length}`);
  console.log(`  🔴 Ликвидированных: ${all.filter(r => r.verifiedStatus === 'ликвидирована').length}`);
  console.log(`  ⚠️ Не найдено: ${all.filter(r => r.verifiedStatus === 'не найден').length}`);
  console.log(`  📞 С телефонами: ${all.filter(r => r.allPhones?.length > 0).length}`);
  console.log(`  📧 С email: ${all.filter(r => r.allEmails?.length > 0).length}`);
  console.log(`  🌐 С сайтами: ${all.filter(r => r.site).length}`);
  console.log('\n✅ Готово!');
}

main().catch(err => { console.error('❌', err); process.exit(1); });