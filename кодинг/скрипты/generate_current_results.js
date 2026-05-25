const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const DIR = __dirname;

function loadJSON(file) {
  if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, 'utf8'));
  return [];
}

function saveXLSX(results, filename, sheetName) {
  const data = results.map((r, idx) => ({
    '№': r.num || idx + 1,
    'Название': r.name || '',
    'Статус (было)': r.originalStatus || 'проверить',
    'Статус (checko)': r.checkoStatus || '',
    'ИНН': r.inn || '',
    'Категория': r.category || '',
    'Адрес': r.checkoAddress || r.address || '',
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
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  
  ws['!cols'] = [
    {wch:4},{wch:40},{wch:12},{wch:18},{wch:14},{wch:25},{wch:45},
    {wch:25},{wch:25},{wch:30},{wch:25},{wch:25},{wch:15},{wch:15},
    {wch:25},{wch:45},{wch:20},{wch:30},
  ];
  
  XLSX.writeFile(wb, path.join(DIR, filename));
  console.log(`✅ ${filename} (${data.length} записей)`);
}

// Load existing results
const checkResults = loadJSON(path.join(DIR, 'verify_results.json'));
const mfgResults = loadJSON(path.join(DIR, 'verify_mfg_results.json'));

console.log(`\n📊 Генерация Excel из текущих данных`);
console.log(`   Компаний «к проверке»: ${checkResults.length}`);
console.log(`   Производители ССС: ${mfgResults.length}\n`);

// Separate successful and errors
const ok = checkResults.filter(r => !r.checkoStatus?.includes('ошибка'));
const err = checkResults.filter(r => r.checkoStatus?.includes('ошибка'));

console.log(`   Успешно обработано: ${ok.length}`);
console.log(`   С ошибками (429): ${err.length}`);

// Stats
const active = ok.filter(r => r.checkoStatus === 'действующая').length;
const undef = ok.filter(r => r.checkoStatus === 'не определён').length;
const liq = ok.filter(r => r.checkoStatus === 'ликвидирована').length;
const notFound = ok.filter(r => r.checkoStatus === 'не найден').length;
const withPhones = ok.filter(r => r.checkoPhones?.length > 0 || r.sitePhones?.length > 0).length;
const withEmail = ok.filter(r => r.checkoEmail || r.siteEmails?.length > 0).length;

console.log(`\n   📊 Статистика успешных:`);
console.log(`      🟢 Действующих: ${active}`);
console.log(`      🟡 Не определён: ${undef}`);
console.log(`      🔴 Ликвидированных: ${liq}`);
console.log(`      ⚠️ Не найдено: ${notFound}`);
console.log(`      📞 С телефонами: ${withPhones}`);
console.log(`      📧 С email: ${withEmail}`);

// Save files
if (ok.length > 0) saveXLSX(ok, 'база_к проверке_результаты.xlsx', 'Результаты');
if (err.length > 0) {
  // Save error list for retry
  const errList = err.map((r, i) => ({ num: r.num, name: r.name, originalStatus: r.originalStatus, error: r.checkoStatus }));
  const ws = XLSX.utils.json_to_sheet(errList);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Ошибки');
  XLSX.writeFile(wb, path.join(DIR, 'база_ошибки_для_повтора.xlsx'));
  console.log(`\n📋 Список ошибок: база_ошибки_для_повтора.xlsx (${err.length} компаний)`);
}
if (mfgResults.length > 0) saveXLSX(mfgResults, 'база_крупные_производители_ссс.xlsx', 'Производители');

// Combined
const all = [...ok, ...mfgResults];
if (all.length > 0) saveXLSX(all, 'база_полная_верифицированная.xlsx', 'Все данные');

console.log('\n✅ Готово!');