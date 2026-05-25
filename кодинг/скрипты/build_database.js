/**
 * Скрипт для создания базы данных компаний из анализа старой базы
 * Читает исходный Excel, парсит все листы, объединяет, дедуплицирует,
 * классифицирует и создаёт итоговые файлы
 */

const XLSX = require('xlsx');
const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

// Путь к исходному файлу - определяем динамически
const SRC_DIR = path.join('c:', 'Users', 'Нюся', 'Desktop', 'видео для ролика');
const OUT_DIR = path.join('c:', 'Users', 'Нюся', 'для обучения менеджера статиста');

let SRC = '';
const xlsxFiles = fs.readdirSync(SRC_DIR).filter(f => f.endsWith('.xlsx'));
if (xlsxFiles.length > 0) {
  SRC = path.join(SRC_DIR, xlsxFiles[0]);
} else {
  console.error('❌ XLSX файл не найден в:', SRC_DIR);
  process.exit(1);
}

// ============ УТИЛИТЫ ============

function cleanPhone(raw) {
  if (!raw) return '';
  let s = String(raw).trim();
  // убираем tel: ссылки
  s = s.replace(/\(tel:[^)]*\)/g, '');
  // убираем (tel:...)
  s = s.replace(/tel:/gi, '');
  // оставляем цифры, +, пробелы, дефисы, скобки
  s = s.replace(/[^0-9+\- ()]/g, '').trim();
  return s;
}

function extractPhones(text) {
  if (!text) return [];
  const results = [];
  // паттерн: +7 ... или 8 ... или (код) ... 
  const patterns = [
    /\+?\s*7\s*\d{3}\s*\d{3}[\s-]*\d{2}[\s-]*\d{2}/g,
    /\+?\s*7\s*\(\s*\d{3}\s*\)\s*\d{3}[\s-]*\d{2}[\s-]*\d{2}/g,
    /\(\d{3,5}\)\s*\d[\d\s-]{5,10}/g,
    /8\s*\(\s*\d{3}\s*\)\s*\d{3}[\s-]*\d{2}[\s-]*\d{2}/g,
    /\+7\s*\d{3}\s*\d{3}[\s-]*\d{2}[\s-]*\d{2}/g,
  ];
  for (const p of patterns) {
    const m = String(text).match(p);
    if (m) results.push(...m);
  }
  // также ищем телефоны с дефисами
  const phonePattern = /\+?\s*7[\s-]*\(?[\d]{3}\)?[\s\-]*[\d]{2,3}[\s\-]*[\d]{2}[\s\-]*[\d]{2}/g;
  const m2 = String(text).match(phonePattern);
  if (m2) results.push(...m2);
  
  // deduplicate
  const unique = [...new Set(results.map(p => p.replace(/\s+/g, ' ').trim()))];
  return unique.filter(p => p.length >= 7);
}

function extractEmail(text) {
  if (!text) return '';
  const m = String(text).match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  return m ? m[0] : '';
}

function extractWebsite(text) {
  if (!text) return '';
  const m = String(text).match(/https?:\/\/[^\s,\)]+|www\.[^\s,\)]+/);
  return m ? m[0] : '';
}

function cleanStr(v) {
  if (v === null || v === undefined) return '';
  return String(v).trim();
}

// Нормализация названия для дедупликации
function normalize(name) {
  if (!name) return '';
  let s = String(name).toLowerCase()
    .replace(/["«»]/g, '')
    .replace(/\s+(ооо|зао|оао|ао|ип|пбоюл|тд|тм|оо|пкф|пк|сп|нпк)\b/gi, ' ')
    .replace(/[",\.]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return s;
}

// ============ ПАРСЕР ЛИСТОВ ============

function parseInteresnoe(rows) {
  const companies = [];
  let current = null;
  let currentName = '';

  for (const row of rows) {
    const cells = row;
    // Ячейки: A=пометка, B=название, C=адрес, D=категория, E=телефон, F=сайт/email, G=примечания, H=доп
    const a = cleanStr(cells[0]);
    const b = cleanStr(cells[1]);
    const c = cleanStr(cells[2]);
    const d = cleanStr(cells[3]);
    const e = cleanStr(cells[4]);
    const f = cleanStr(cells[5]);
    const g = cleanStr(cells[6]);
    const h = cleanStr(cells[7]);

    // Определяем, это новая компания или продолжение
    if (b && b.length > 1) {
      // Новая компания
      if (current) companies.push(current);
      currentName = b;
      current = {
        name: b,
        address: c || '',
        category: d || '',
        phones: extractPhones(e),
        emails: [extractEmail(e || f)],
        websites: [],
        notes: (g || '') + (h ? ' | ' + h : ''),
        revenue: '',
        status: a === 'не особо' ? 'проверить' : 'активна',
        source: 'интересное',
      };
      // сайт
      const ws = extractWebsite(f);
      if (ws) current.websites.push(ws);
      // Выручка из notes
      const revMatch = (g + ' ' + h).match(/([\d,]+)\s*(млр|млн|млрд)/i);
      if (revMatch) current.revenue = revMatch[0];
    } else if (current) {
      // Продолжение - телефоны
      if (e && e.length > 3) {
        const ph = extractPhones(e);
        current.phones.push(...ph);
      }
      if (f && f.length > 3) {
        const ws = extractWebsite(f);
        if (ws && !current.websites.includes(ws)) current.websites.push(ws);
        const em = extractEmail(f);
        if (em && !current.emails.includes(em)) current.emails.push(em);
      }
      if (g) {
        current.notes += ' | ' + g;
        const revMatch = String(g).match(/([\d,]+)\s*(млр|млн|млрд)/i);
        if (revMatch) current.revenue = revMatch[0];
      }
    }
  }
  if (current) companies.push(current);
  return companies;
}

function parseNelikvid(rows) {
  const companies = [];
  for (const row of rows) {
    const a = cleanStr(row[0]); // название
    const b = cleanStr(row[1]); // статус
    const c = cleanStr(row[2]); // выручка
    const d = cleanStr(row[3]); // доп
    const e = cleanStr(row[4]); // адрес

    if (!a || a.length < 2) continue;
    
    // Пропускаем заголовки URL
    if (a.startsWith('http')) continue;

    let status = 'неактивна';
    if (b.includes('ликвидир')) status = 'ликвидирована';
    else if (b.includes('банкрот')) status = 'банкрот';
    else if (b.includes('не интерес') || b.includes('не интересно')) status = 'неинтересна';
    else if (b.includes('не понятно') || b.includes('не знай')) status = 'проверить';
    else if (b.includes('нет данны') || b.includes('нет движени')) status = 'проверить';

    companies.push({
      name: a,
      address: e || '',
      category: d || '',
      phones: [],
      emails: [],
      websites: [],
      notes: b + (c ? ' | выручка: ' + c : '') + (d ? ' | ' + d : ''),
      revenue: c || '',
      status,
      source: 'неликвид',
    });
  }
  return companies;
}

function parseList2(rows) {
  const companies = [];
  let current = null;
  let currentName = '';

  for (const row of rows) {
    const a = cleanStr(row[0]); // название
    const b = cleanStr(row[1]); // поле (Адрес/Телефон/Факс/E-mail)
    const c = cleanStr(row[2]); // значение
    const d = cleanStr(row[3]); // примечание

    if (!a || a.length < 2) continue;
    if (a === 'Имя' && b === 'Связь') continue;

    if (a !== currentName) {
      if (current) companies.push(current);
      currentName = a;
      current = {
        name: a,
        address: '',
        category: d || '',
        phones: [],
        emails: [],
        websites: [],
        notes: d || '',
        revenue: '',
        status: 'проверить',
        source: 'Лист2',
      };
    }

    // Заполняем в зависимости от типа строки
    const val = c || '';
    if (b.startsWith('Адрес') || b === 'Адрес') {
      current.address = val;
    } else if (b.startsWith('Телефон')) {
      const ph = extractPhones(val);
      current.phones.push(...ph);
    } else if (b.startsWith('Факс')) {
      const ph = extractPhones(val);
      current.phones.push(...ph);
    } else if (b.startsWith('E-mail') || b.startsWith('Email')) {
      const em = extractEmail(val);
      if (em) current.emails.push(em);
      const ws = extractWebsite(val);
      if (ws) current.websites.push(ws);
    }
    
    // Примечание
    if (d && !current.notes.includes(d)) {
      current.notes += (current.notes ? ' | ' : '') + d;
    }
  }
  if (current) companies.push(current);
  return companies;
}

function parseVostok(rows) {
  const companies = [];
  for (const row of rows) {
    if (!row || row.length < 2) continue;
    const sphere = cleanStr(row[0]);
    const orgType = cleanStr(row[1]);
    const activity = cleanStr(row[2]);
    const brand = cleanStr(row[3]);
    const products = cleanStr(row[4]);
    const region = cleanStr(row[5]);
    const city = cleanStr(row[6]);
    const phone = cleanStr(row[7]);
    const fax = cleanStr(row[8]);
    const email = cleanStr(row[9]);
    const website = cleanStr(row[10]);

    if (!sphere || sphere.length < 2) continue;
    // Пропускаем заголовок
    if (sphere === 'Сфера') continue;

    companies.push({
      name: orgType + ' ' + brand,
      address: region + ', ' + city,
      category: products || activity || '',
      phones: [...extractPhones(phone), ...extractPhones(fax)],
      emails: email ? email.split(/[,;]/).map(e => e.trim()).filter(Boolean) : [],
      websites: website ? [website] : [],
      notes: 'Бренд: ' + brand + ' | ' + activity + ' | Продукция: ' + products,
      revenue: '',
      status: 'проверить',
      source: 'восток',
    });
  }
  return companies;
}

function parseLime(rows) {
  const companies = [];
  let current = null;
  let buf = '';

  for (const row of rows) {
    const line = row.map(c => cleanStr(c)).join(' ');
    
    // Ищем название завода (в круглых скобках с типом)
    const nameMatch = line.match(/([А-ЯA-Z].*?(?:ЗАВОД|КОМБИНАТ|КОМПАНИЯ|ПРЕДПРИЯТИЕ|ОАО|ООО|ЗАО|АО)[^(]*\s*\([^)]+\))/);
    
    if (nameMatch) {
      if (current) companies.push(current);
      buf = '';
      current = {
        name: nameMatch[1].trim(),
        address: '',
        category: 'известь',
        phones: [],
        emails: [],
        websites: [],
        notes: '',
        revenue: '',
        status: 'проверить',
        source: 'Производители извести',
      };
    }

    if (!current) {
      buf += ' ' + line;
      continue;
    }

    // Извлекаем из строки
    if (line.includes('Почтовый адрес')) {
      const addr = line.replace(/Почтовый адрес:\s*/i, '').trim();
      current.address = addr;
    }
    if (line.includes('Руководитель')) {
      const boss = line.replace(/Руководитель\s*:\s*/i, '').trim();
      current.notes += 'Руководитель: ' + boss + '; ';
    }
    if (line.includes('Телефон')) {
      const phones = extractPhones(line.replace(/Телефон\s*:\s*/i, ''));
      current.phones.push(...phones);
    }
    if (line.includes('Факс')) {
      const faxes = extractPhones(line.replace(/Факс\s*:\s*/i, ''));
      current.phones.push(...faxes);
    }
    if (line.includes('Продукция')) {
      current.notes += 'Продукция: ' + line.replace(/Продукция и услуги:\s*/i, '') + '; ';
    }
    if (line.includes('Год основания')) {
      current.notes += line + '; ';
    }
  }
  if (current) companies.push(current);
  return companies;
}

// ============ ДЕДУПЛИКАЦИЯ ============

function deduplicate(allCompanies) {
  const map = new Map(); // normName -> company

  for (const comp of allCompanies) {
    const norm = normalize(comp.name);
    if (!norm || norm.length < 2) continue;

    // Ищем существующую запись
    let found = null;
    for (const [key, val] of map) {
      // Проверяем похожесть
      if (key.includes(norm) || norm.includes(key) || 
          levenshtein(key, norm) < Math.max(key.length, norm.length) * 0.4) {
        found = val;
        // Объединяем данные
        mergeCompanies(found, comp);
        break;
      }
    }

    if (!found) {
      map.set(norm, { ...comp, phones: [...comp.phones], emails: [...comp.emails], websites: [...comp.websites] });
    }
  }

  return Array.from(map.values());
}

function mergeCompanies(target, source) {
  // Объединяем телефоны
  for (const ph of source.phones) {
    const cleaned = ph.replace(/[\s\-()]/g, '');
    if (!target.phones.some(p => p.replace(/[\s\-()]/g, '') === cleaned)) {
      target.phones.push(ph);
    }
  }
  // Объединяем email
  for (const em of source.emails) {
    if (em && !target.emails.includes(em)) target.emails.push(em);
  }
  // Объединяем сайты
  for (const ws of source.websites) {
    if (ws && !target.websites.some(w => w.includes(ws) || ws.includes(w))) target.websites.push(ws);
  }
  // Адрес - берём более полный
  if (source.address && source.address.length > (target.address || '').length) {
    target.address = source.address;
  }
  // Категория
  if (source.category && !target.category.includes(source.category)) {
    target.category += (target.category ? ', ' : '') + source.category;
  }
  // Статус - приоритет активной
  const statusPriority = { 'активна': 0, 'проверить': 1, 'неинтересна': 2, 'неактивна': 3, 'ликвидирована': 4, 'банкрот': 5 };
  if ((statusPriority[source.status] || 3) < (statusPriority[target.status] || 3)) {
    target.status = source.status;
  }
  // Выручка
  if (source.revenue && !target.revenue) target.revenue = source.revenue;
  // Заметки
  if (source.notes && source.notes.length > 2) {
    target.notes += ' [' + source.source + ': ' + source.notes + ']';
  }
  // Источник
  if (!target.source.includes(source.source)) {
    target.source += ', ' + source.source;
  }
}

// Простая функция Левенштейна
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.min(
        dp[i-1][j] + 1,
        dp[i][j-1] + 1,
        dp[i-1][j-1] + (a[i-1] !== b[j-1] ? 1 : 0)
      );
    }
  }
  return dp[m][n];
}

// ============ ФОРМАТИРОВАНИЕ И ВЫВОД ============

async function writeExcel(filepath, data, sheetName) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet(sheetName);

  // Заголовки
  const headers = [
    '№', 'Название компании', 'Статус', 'Категория продукции', 
    'Адрес', 'Телефоны', 'Email', 'Сайт', 'Выручка', 'Примечания', 'Источник'
  ];
  
  ws.columns = [
    { header: headers[0], key: 'num', width: 5 },
    { header: headers[1], key: 'name', width: 40 },
    { header: headers[2], key: 'status', width: 16 },
    { header: headers[3], key: 'category', width: 25 },
    { header: headers[4], key: 'address', width: 50 },
    { header: headers[5], key: 'phones', width: 50 },
    { header: headers[6], key: 'emails', width: 30 },
    { header: headers[7], key: 'websites', width: 35 },
    { header: headers[8], key: 'revenue', width: 15 },
    { header: headers[9], key: 'notes', width: 50 },
    { header: headers[10], key: 'source', width: 20 },
  ];

  // Стили заголовков
  ws.getRow(1).font = { bold: true, size: 11 };
  ws.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4472C4' } };
  ws.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };

  // Раскрашиваем статусы
  const statusColors = {
    'активна': 'FF92D050',
    'проверить': 'FFFFFF00',
    'неинтересна': 'FFD9D9D9',
    'неактивна': 'FFC00000',
    'ликвидирована': 'FF000000',
    'банкрот': 'FFFF0000',
  };

  data.forEach((comp, i) => {
    const row = ws.addRow({
      num: i + 1,
      name: comp.name,
      status: comp.status,
      category: comp.category,
      address: comp.address,
      phones: comp.phones.filter(Boolean).join('\n'),
      emails: comp.emails.filter(Boolean).join('\n'),
      websites: comp.websites.filter(Boolean).join('\n'),
      revenue: comp.revenue,
      notes: comp.notes,
      source: comp.source,
    });

    // Цвет статуса
    const color = statusColors[comp.status] || 'FFFFFFFF';
    row.getCell(3).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: color } };
    if (comp.status === 'ликвидирована' || comp.status === 'банкрот') {
      row.getCell(3).font = { color: { argb: 'FFFFFFFF' } };
    }
    
    row.alignment = { wrapText: true, vertical: 'top' };
  });

  // Автофильтр
  ws.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: 1, column: headers.length },
  };

  await wb.xlsx.writeFile(filepath);
  console.log(`  ✅ Сохранён: ${filepath} (${data.length} компаний)`);
}

// ============ ГЛАВНАЯ ФУНКЦИЯ ============

async function main() {
  console.log('📊 Чтение исходного файла...');
  console.log('  Путь:', SRC);
  
  if (!fs.existsSync(SRC)) {
    console.error('❌ Файл не найден:', SRC);
    process.exit(1);
  }

  const workbook = XLSX.readFile(SRC, { type: 'file' });
  console.log('  Листы:', workbook.SheetNames.join(', '));

  const allCompanies = [];

  // ---- Лист: интересное ----
  console.log('\n📋 Парсинг листа "интересное"...');
  const wsInt = workbook.Sheets['интересное'];
  const rowsInt = XLSX.utils.sheet_to_json(wsInt, { header: 1, defval: '' });
  const compInt = parseInteresnoe(rowsInt);
  console.log(`  Найдено: ${compInt.length} компаний`);
  allCompanies.push(...compInt);

  // ---- Лист: неликвид ----
  console.log('\n📋 Парсинг листа "неликвид"...');
  const wsNel = workbook.Sheets['неликвид'];
  const rowsNel = XLSX.utils.sheet_to_json(wsNel, { header: 1, defval: '' });
  const compNel = parseNelikvid(rowsNel);
  console.log(`  Найдено: ${compNel.length} компаний`);
  allCompanies.push(...compNel);

  // ---- Лист: Лист2 ----
  console.log('\n📋 Парсинг листа "Лист2"...');
  const wsL2 = workbook.Sheets['Лист2'];
  const rowsL2 = XLSX.utils.sheet_to_json(wsL2, { header: 1, defval: '' });
  const compL2 = parseList2(rowsL2);
  console.log(`  Найдено: ${compL2.length} компаний`);
  allCompanies.push(...compL2);

  // ---- Лист: восток ----
  console.log('\n📋 Парсинг листа "восток"...');
  const wsVost = workbook.Sheets['восток'];
  const rowsVost = XLSX.utils.sheet_to_json(wsVost, { header: 1, defval: '' });
  const compVost = parseVostok(rowsVost);
  console.log(`  Найдено: ${compVost.length} компаний`);
  allCompanies.push(...compVost);

  // ---- Лист: Производители извести ----
  console.log('\n📋 Парсинг листа "Производители извести"...');
  const wsLime = workbook.Sheets['Производители извести'];
  if (wsLime) {
    const rowsLime = XLSX.utils.sheet_to_json(wsLime, { header: 1, defval: '' });
    const compLime = parseLime(rowsLime);
    console.log(`  Найдено: ${compLime.length} компаний`);
    allCompanies.push(...compLime);
  } else {
    console.log('  ⚠️ Лист не найден');
  }

  console.log(`\n📊 Всего до дедупликации: ${allCompanies.length} записей`);

  // Дедупликация
  console.log('\n🔄 Дедупликация...');
  const deduped = deduplicate(allCompanies);
  console.log(`  После дедупликации: ${deduped.length} компаний`);

  // Фильтрация по статусам
  const active = deduped.filter(c => c.status === 'активна');
  const toCheck = deduped.filter(c => c.status === 'проверить');
  const inactive = deduped.filter(c => ['ликвидирована', 'банкрот', 'неактивна', 'неинтересна'].includes(c.status));

  console.log(`\n📊 По статусам:`);
  console.log(`  🟢 Активные: ${active.length}`);
  console.log(`  🟡 К проверке: ${toCheck.length}`);
  console.log(`  🔴 Неактивные: ${inactive.length}`);

  // Сохраняем файлы
  console.log('\n💾 Создание итоговых файлов...');

  // 1. Полная база
  await writeExcel(
    path.join(OUT_DIR, 'база_компаний_полная.xlsx'),
    deduped.sort((a, b) => a.name.localeCompare(b.name)),
    'Полная база'
  );

  // 2. Активные с контактами
  await writeExcel(
    path.join(OUT_DIR, 'база_компаний_активные.xlsx'),
    active.sort((a, b) => a.name.localeCompare(b.name)),
    'Активные'
  );

  // 3. К проверке
  await writeExcel(
    path.join(OUT_DIR, 'база_компаний_к_проверке.xlsx'),
    toCheck.sort((a, b) => a.name.localeCompare(b.name)),
    'К проверке'
  );

  // 4. Неактивные (справочно)
  await writeExcel(
    path.join(OUT_DIR, 'база_компаний_неактивные.xlsx'),
    inactive.sort((a, b) => a.name.localeCompare(b.name)),
    'Неактивные'
  );

  // 5. Сводка контактов снабжения (телефоны + email из активных и к проверке)
  const supplyContacts = [...active, ...toCheck]
    .filter(c => c.phones.length > 0 || c.emails.length > 0)
    .sort((a, b) => a.name.localeCompare(b.name));
  
  await writeExcel(
    path.join(OUT_DIR, 'контакты_снабжения.xlsx'),
    supplyContacts,
    'Контакты снабжения'
  );

  console.log('\n✅ Готово! Созданы файлы:');
  console.log('  📁 база_компаний_полная.xlsx — полная база (все компании)');
  console.log('  📁 база_компаний_активные.xlsx — активные компании');
  console.log('  📁 база_компаний_к_проверке.xlsx — требуют проверки');
  console.log('  📁 база_компаний_неактивные.xlsx — неактивные');
  console.log('  📁 контакты_снабжения.xlsx — контакты снабжения (телефоны + email)');
}

main().catch(err => {
  console.error('❌ Ошибка:', err);
  process.exit(1);
});