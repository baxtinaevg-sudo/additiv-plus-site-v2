const ExcelJS = require('exceljs');
const XLSX = require('xlsx');
const path = require('path');

function cleanAddr(addr) {
  if (!addr) return '';
  return addr.replace(/Показать на карте/g, '').replace(/Юридический адрес.*?(?=\d|$)/gs, '').replace(/Налоговые задолженности.*$/gs, '').replace(/Отчет о факторах.*$/gs, '').replace(/В записях ЕГРЮЛ.*$/gs, '').replace(/^у\s*/, '').trim();
}

function cleanPhone(phone) {
  if (!phone) return '';
  return phone.replace(/\n/g, '; ').trim();
}

async function main() {
  // ===== ЧИТАЕМ ВСЕ БАЗЫ =====
  const verified = XLSX.utils.sheet_to_json(XLSX.readFile('база_полная_верифицированная.xlsx').Sheets['Данные']);
  const full = XLSX.utils.sheet_to_json(XLSX.readFile('база_компаний_полная.xlsx').Sheets['Полная база']);
  const active = XLSX.utils.sheet_to_json(XLSX.readFile('база_компаний_активные.xlsx').Sheets[Object.keys(XLSX.readFile('база_компаний_активные.xlsx').Sheets)[0]]);
  const inactive = XLSX.utils.sheet_to_json(XLSX.readFile('база_компаний_неактивные.xlsx').Sheets[Object.keys(XLSX.readFile('база_компаний_неактивные.xlsx').Sheets)[0]]);
  const sssLarge = XLSX.utils.sheet_to_json(XLSX.readFile('база_крупные_производители_ссс.xlsx').Sheets['Данные']);
  const supply = XLSX.utils.sheet_to_json(XLSX.readFile('контакты_снабжения.xlsx').Sheets[Object.keys(XLSX.readFile('контакты_снабжения.xlsx').Sheets)[0]]);

  console.log(`Загружено: верифиц.${verified.length}, полная${full.length}, активные${active.length}, неактивные${inactive.length}, ссс${sssLarge.length}, снабжение${supply.length}`);

  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Аддитив Плюс';
  workbook.created = new Date();

  // ===========================
  // ЛИСТ 1: ВСЕ КЛИЕНТЫ (верифицированные — 178)
  // ===========================
  const ws1 = workbook.addWorksheet('Все клиенты', {
    properties: { tabColor: { argb: '2563EB' } }
  });

  ws1.columns = [
    { header: '№', key: 'num', width: 5 },
    { header: 'Название', key: 'name', width: 40 },
    { header: 'Статус', key: 'status', width: 18 },
    { header: 'Категория', key: 'category', width: 18 },
    { header: 'ИНН', key: 'inn', width: 14 },
    { header: 'Адрес', key: 'address', width: 40 },
    { header: 'Телефоны', key: 'phones', width: 30 },
    { header: 'Email', key: 'email', width: 26 },
    { header: 'Сайт', key: 'site', width: 24 },
    { header: 'Выручка', key: 'revenue', width: 16 },
    { header: 'Руководитель', key: 'head', width: 34 },
    { header: 'egrul.nalog.ru', key: 'egrul', width: 14 },
  ];

  // Row 1: Title
  ws1.spliceRows(1, 0, []);
  ws1.spliceRows(1, 0, []);
  ws1.spliceRows(1, 0, []);
  ws1.getCell('A1').value = `📋 СПРАВОЧНИК КЛИЕНТОВ — ПРОИЗВОДИТЕЛИ ССС 2025 (${verified.length} компаний)`;
  ws1.getCell('A1').font = { size: 14, bold: true, color: { argb: 'FFFFFFFF' } };
  ws1.getCell('A1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF2563EB' } };
  ws1.mergeCells('A1:L1');
  ws1.getCell('A1').alignment = { horizontal: 'center', vertical: 'middle' };
  ws1.getRow(1).height = 36;

  ws1.getCell('A2').value = 'Источник: ФНС (egrul.nalog.ru), верифицированные данные | Аддитив Плюс — химические добавки для ССС';
  ws1.getCell('A2').font = { size: 9, italic: true, color: { argb: 'FF6B7280' } };
  ws1.mergeCells('A2:L2');
  ws1.getCell('A2').alignment = { horizontal: 'center' };

  // Row 3: Header
  const h1 = ws1.getRow(3);
  h1.values = ['№', 'Название', 'Статус', 'Категория', 'ИНН', 'Адрес', 'Телефоны', 'Email', 'Сайт', 'Выручка', 'Руководитель', 'ФНС'];
  h1.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 10 };
  h1.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF374151' } };
  h1.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  h1.height = 28;
  h1.eachCell((cell) => { cell.border = { bottom: { style: 'medium', color: { argb: 'FF2563EB' } } }; });

  // Data
  const statusColors = {
    'действующая': { bg: 'FFD1FAE5', font: 'FF059669' },
    'активна': { bg: 'FFD1FAE5', font: 'FF059669' },
    'ликвидирована': { bg: 'FFFEE2E2', font: 'FFDC2626' },
    'неактивна': { bg: 'FFF3F4F6', font: 'FF9CA3AF' },
    'конкурсное производство': { bg: 'FFFFFBEB', font: 'FFD97706' },
  };

  verified.forEach((item, i) => {
    const row = ws1.getRow(4 + i);
    const status = (item['Статус'] || '').toLowerCase();
    const sc = statusColors[status] || { bg: 'FFFFFFFF', font: 'FF374151' };
    const isEven = i % 2 === 0;

    row.values = [
      i + 1,
      item['Название'] || '',
      item['Статус'] || '',
      item['Категория'] || '',
      item['ИНН'] || '',
      cleanAddr(item['Адрес']),
      cleanPhone(item['Телефоны']),
      item['Email'] || '',
      item['Сайт'] || '',
      item['Выручка'] || '',
      (item['Руководитель'] || '').replace(/^(ГЕНЕРАЛЬНЫЙ ДИРЕКТОР:|ДИРЕКТОР:|Руководитель юридического лица:)\s*/i, ''),
      item['egrul.nalog.ru'] ? '✅' : '',
    ];

    row.height = 22;
    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
      const bg = isEven ? 'FFF9FAFB' : 'FFFFFFFF';
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
      cell.font = { size: 9, color: { argb: 'FF374151' } };
      cell.alignment = { vertical: 'middle', wrapText: true };
      cell.border = { bottom: { style: 'thin', color: { argb: 'FFE5E7EB' } } };

      if (colNumber === 1) cell.alignment = { horizontal: 'center', vertical: 'middle' };
      if (colNumber === 3) {
        cell.font = { size: 9, bold: true, color: { argb: sc.font } };
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: sc.bg } };
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
      }
      if (colNumber === 5) cell.alignment = { horizontal: 'center', vertical: 'middle' };
      if (colNumber === 9) cell.font = { size: 9, color: { argb: 'FF2563EB' }, underline: true };
      if (colNumber === 10) cell.alignment = { horizontal: 'right', vertical: 'middle' };
      if (colNumber === 12) cell.alignment = { horizontal: 'center', vertical: 'middle' };
    });
  });

  ws1.views = [{ state: 'frozen', ySplit: 3, xSplit: 0, activeCell: 'A4' }];
  ws1.autoFilter = { from: 'A3', to: 'L3' };

  // ===========================
  // ЛИСТ 2: АКТИВНЫЕ КЛИЕНТЫ
  // ===========================
  const ws2 = workbook.addWorksheet('Активные', {
    properties: { tabColor: { argb: '059669' } }
  });

  ws2.columns = [
    { header: '№', key: 'num', width: 5 },
    { header: 'Название компании', key: 'name', width: 42 },
    { header: 'Категория продукции', key: 'category', width: 20 },
    { header: 'Адрес', key: 'address', width: 40 },
    { header: 'Телефоны', key: 'phones', width: 30 },
    { header: 'Email', key: 'email', width: 26 },
    { header: 'Сайт', key: 'site', width: 26 },
    { header: 'Выручка', key: 'revenue', width: 16 },
    { header: 'Примечания', key: 'notes', width: 30 },
    { header: 'Источник', key: 'source', width: 14 },
  ];

  ws2.spliceRows(1, 0, []);
  ws2.spliceRows(1, 0, []);
  ws2.getCell('A1').value = `✅ АКТИВНЫЕ КЛИЕНТЫ (${active.length} компаний)`;
  ws2.getCell('A1').font = { size: 14, bold: true, color: { argb: 'FFFFFFFF' } };
  ws2.getCell('A1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF059669' } };
  ws2.mergeCells('A1:J1');
  ws2.getCell('A1').alignment = { horizontal: 'center', vertical: 'middle' };
  ws2.getRow(1).height = 36;

  ws2.getCell('A2').value = 'Компании с подтверждённой активностью — приоритетные клиенты для продаж химических добавок';
  ws2.getCell('A2').font = { size: 9, italic: true, color: { argb: 'FF6B7280' } };
  ws2.mergeCells('A2:J2');
  ws2.getCell('A2').alignment = { horizontal: 'center' };

  const h2 = ws2.getRow(2);
  // shift header to row 3 (after spliceRows added 2 rows, header is at row 2 but we need it at row 3)
  // Actually columns already set header, but spliceRows pushed them down. Let me fix:
  const h2r = ws2.getRow(3);
  h2r.values = ['№', 'Название компании', 'Категория продукции', 'Адрес', 'Телефоны', 'Email', 'Сайт', 'Выручка', 'Примечания', 'Источник'];
  h2r.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 10 };
  h2r.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF374151' } };
  h2r.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  h2r.height = 26;

  active.forEach((item, i) => {
    const row = ws2.getRow(4 + i);
    row.values = [
      i + 1,
      item['Название компании'] || '',
      item['Категория продукции'] || '',
      cleanAddr(item['Адрес']),
      cleanPhone(item['Телефоны']),
      item['Email'] || '',
      item['Сайт'] || '',
      item['Выручка'] || '',
      (item['Примечания'] || '').replace(/^\s*\|\s*/, ''),
      item['Источник'] || '',
    ];
    row.height = 22;
    const isEven = i % 2 === 0;
    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: isEven ? 'FFF0FDF4' : 'FFFFFFFF' } };
      cell.font = { size: 9, color: { argb: 'FF374151' } };
      cell.alignment = { vertical: 'middle', wrapText: true };
      cell.border = { bottom: { style: 'thin', color: { argb: 'FFE5E7EB' } } };
      if (colNumber === 1) cell.alignment = { horizontal: 'center', vertical: 'middle' };
      if (colNumber === 7) cell.font = { size: 9, color: { argb: 'FF059669' }, underline: true };
    });
  });

  ws2.views = [{ state: 'frozen', ySplit: 3, xSplit: 0, activeCell: 'A4' }];
  ws2.autoFilter = { from: 'A3', to: 'J3' };

  // ===========================
  // ЛИСТ 3: КРУПНЫЕ ПРОИЗВОДИТЕЛИ ССС
  // ===========================
  const ws3 = workbook.addWorksheet('Крупные ССС', {
    properties: { tabColor: { argb: '7C3AED' } }
  });

  ws3.columns = [
    { header: '№', key: 'num', width: 5 },
    { header: 'Название', key: 'name', width: 42 },
    { header: 'Статус', key: 'status', width: 18 },
    { header: 'Категория', key: 'category', width: 16 },
    { header: 'ИНН', key: 'inn', width: 14 },
    { header: 'Адрес', key: 'address', width: 40 },
    { header: 'Телефоны', key: 'phones', width: 30 },
    { header: 'Email', key: 'email', width: 26 },
    { header: 'Сайт', key: 'site', width: 24 },
    { header: 'Выручка', key: 'revenue', width: 16 },
    { header: 'Руководитель', key: 'head', width: 34 },
    { header: 'ФНС', key: 'egrul', width: 10 },
  ];

  ws3.spliceRows(1, 0, []);
  ws3.spliceRows(1, 0, []);
  ws3.getCell('A1').value = `🏆 КРУПНЕЙШИЕ ПРОИЗВОДИТЕЛИ ССС (${sssLarge.length} компаний)`;
  ws3.getCell('A1').font = { size: 14, bold: true, color: { argb: 'FFFFFFFF' } };
  ws3.getCell('A1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF7C3AED' } };
  ws3.mergeCells('A1:L1');
  ws3.getCell('A1').alignment = { horizontal: 'center', vertical: 'middle' };
  ws3.getRow(1).height = 36;

  ws3.getCell('A2').value = 'Верифицировано через ФНС (egrul.nalog.ru) — основные покупатели химических добавок';
  ws3.getCell('A2').font = { size: 9, italic: true, color: { argb: 'FF6B7280' } };
  ws3.mergeCells('A2:L2');
  ws3.getCell('A2').alignment = { horizontal: 'center' };

  const h3 = ws3.getRow(3);
  h3.values = ['№', 'Название', 'Статус', 'Категория', 'ИНН', 'Адрес', 'Телефоны', 'Email', 'Сайт', 'Выручка', 'Руководитель', 'ФНС'];
  h3.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 10 };
  h3.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF374151' } };
  h3.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  h3.height = 26;

  sssLarge.forEach((item, i) => {
    const row = ws3.getRow(4 + i);
    const status = (item['Статус'] || '').toLowerCase();
    const sc = statusColors[status] || { bg: 'FFFFFFFF', font: 'FF374151' };
    const isEven = i % 2 === 0;

    row.values = [
      i + 1,
      item['Название'] || '',
      item['Статус'] || '',
      item['Категория'] || '',
      item['ИНН'] || '',
      cleanAddr(item['Адрес']),
      cleanPhone(item['Телефоны']),
      item['Email'] || '',
      item['Сайт'] || '',
      item['Выручка'] || '',
      (item['Руководитель'] || '').replace(/^(ГЕНЕРАЛЬНЫЙ ДИРЕКТОР:|ДИРЕКТОР:|Руководитель юридического лица:)\s*/i, ''),
      item['egrul.nalog.ru'] ? '✅' : '',
    ];
    row.height = 22;
    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: isEven ? 'FFF5F3FF' : 'FFFFFFFF' } };
      cell.font = { size: 9, color: { argb: 'FF374151' } };
      cell.alignment = { vertical: 'middle', wrapText: true };
      cell.border = { bottom: { style: 'thin', color: { argb: 'FFE5E7EB' } } };
      if (colNumber === 1) cell.alignment = { horizontal: 'center', vertical: 'middle' };
      if (colNumber === 3) {
        cell.font = { size: 9, bold: true, color: { argb: sc.font } };
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: sc.bg } };
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
      }
      if (colNumber === 5) cell.alignment = { horizontal: 'center', vertical: 'middle' };
      if (colNumber === 9) cell.font = { size: 9, color: { argb: 'FF7C3AED' }, underline: true };
    });
  });

  ws3.views = [{ state: 'frozen', ySplit: 3, xSplit: 0, activeCell: 'A4' }];
  ws3.autoFilter = { from: 'A3', to: 'L3' };

  // ===========================
  // ЛИСТ 4: КОНТАКТЫ СНАБЖЕНИЯ
  // ===========================
  const ws4 = workbook.addWorksheet('Контакты снабжения', {
    properties: { tabColor: { argb: 'D97706' } }
  });

  ws4.columns = [
    { header: '№', key: 'num', width: 5 },
    { header: 'Название компании', key: 'name', width: 42 },
    { header: 'Категория продукции', key: 'category', width: 20 },
    { header: 'Адрес', key: 'address', width: 40 },
    { header: 'Телефоны', key: 'phones', width: 30 },
    { header: 'Email', key: 'email', width: 26 },
    { header: 'Сайт', key: 'site', width: 26 },
    { header: 'Выручка', key: 'revenue', width: 16 },
    { header: 'Примечания', key: 'notes', width: 30 },
  ];

  ws4.spliceRows(1, 0, []);
  ws4.spliceRows(1, 0, []);
  ws4.getCell('A1').value = `📞 КОНТАКТЫ СНАБЖЕНИЯ (${supply.length} компаний)`;
  ws4.getCell('A1').font = { size: 14, bold: true, color: { argb: 'FFFFFFFF' } };
  ws4.getCell('A1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD97706' } };
  ws4.mergeCells('A1:I1');
  ws4.getCell('A1').alignment = { horizontal: 'center', vertical: 'middle' };
  ws4.getRow(1).height = 36;

  ws4.getCell('A2').value = 'Отделы снабжения — прямые контакты для предложения химических добавок';
  ws4.getCell('A2').font = { size: 9, italic: true, color: { argb: 'FF6B7280' } };
  ws4.mergeCells('A2:I2');
  ws4.getCell('A2').alignment = { horizontal: 'center' };

  const h4 = ws4.getRow(3);
  h4.values = ['№', 'Название компании', 'Категория продукции', 'Адрес', 'Телефоны', 'Email', 'Сайт', 'Выручка', 'Примечания'];
  h4.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 10 };
  h4.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF374151' } };
  h4.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  h4.height = 26;

  supply.forEach((item, i) => {
    const row = ws4.getRow(4 + i);
    row.values = [
      i + 1,
      item['Название компании'] || '',
      item['Категория продукции'] || '',
      cleanAddr(item['Адрес']),
      cleanPhone(item['Телефоны']),
      item['Email'] || '',
      item['Сайт'] || '',
      item['Выручка'] || '',
      (item['Примечания'] || '').replace(/^\s*\|\s*/, ''),
    ];
    row.height = 22;
    const isEven = i % 2 === 0;
    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: isEven ? 'FFFFFBEB' : 'FFFFFFFF' } };
      cell.font = { size: 9, color: { argb: 'FF374151' } };
      cell.alignment = { vertical: 'middle', wrapText: true };
      cell.border = { bottom: { style: 'thin', color: { argb: 'FFE5E7EB' } } };
      if (colNumber === 1) cell.alignment = { horizontal: 'center', vertical: 'middle' };
      if (colNumber === 7) cell.font = { size: 9, color: { argb: 'FFD97706' }, underline: true };
    });
  });

  ws4.views = [{ state: 'frozen', ySplit: 3, xSplit: 0, activeCell: 'A4' }];
  ws4.autoFilter = { from: 'A3', to: 'I3' };

  // ===========================
  // ЛИСТ 5: НЕАКТИВНЫЕ
  // ===========================
  const ws5 = workbook.addWorksheet('Неактивные', {
    properties: { tabColor: { argb: 'EF4444' } }
  });

  ws5.columns = [
    { header: '№', key: 'num', width: 5 },
    { header: 'Название компании', key: 'name', width: 42 },
    { header: 'Категория продукции', key: 'category', width: 20 },
    { header: 'Адрес', key: 'address', width: 40 },
    { header: 'Телефоны', key: 'phones', width: 30 },
    { header: 'Email', key: 'email', width: 26 },
    { header: 'Сайт', key: 'site', width: 26 },
    { header: 'Выручка', key: 'revenue', width: 16 },
    { header: 'Примечания', key: 'notes', width: 30 },
  ];

  ws5.spliceRows(1, 0, []);
  ws5.spliceRows(1, 0, []);
  ws5.getCell('A1').value = `❌ НЕАКТИВНЫЕ / ЛИКВИДИРОВАННЫЕ (${inactive.length} компаний)`;
  ws5.getCell('A1').font = { size: 14, bold: true, color: { argb: 'FFFFFFFF' } };
  ws5.getCell('A1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEF4444' } };
  ws5.mergeCells('A1:I1');
  ws5.getCell('A1').alignment = { horizontal: 'center', vertical: 'middle' };
  ws5.getRow(1).height = 36;

  ws5.getCell('A2').value = 'Компании с ликвидированным юрлицом или недостоверными данными — не приоритет для продаж';
  ws5.getCell('A2').font = { size: 9, italic: true, color: { argb: 'FF6B7280' } };
  ws5.mergeCells('A2:I2');
  ws5.getCell('A2').alignment = { horizontal: 'center' };

  const h5 = ws5.getRow(3);
  h5.values = ['№', 'Название компании', 'Категория продукции', 'Адрес', 'Телефоны', 'Email', 'Сайт', 'Выручка', 'Примечания'];
  h5.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 10 };
  h5.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF374151' } };
  h5.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  h5.height = 26;

  inactive.forEach((item, i) => {
    const row = ws5.getRow(4 + i);
    row.values = [
      i + 1,
      item['Название компании'] || '',
      item['Категория продукции'] || '',
      cleanAddr(item['Адрес']),
      cleanPhone(item['Телефоны']),
      item['Email'] || '',
      item['Сайт'] || '',
      item['Выручка'] || '',
      (item['Примечания'] || '').replace(/^\s*\|\s*/, ''),
    ];
    row.height = 22;
    const isEven = i % 2 === 0;
    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: isEven ? 'FFFEE2E2' : 'FFFFFFFF' } };
      cell.font = { size: 9, color: { argb: 'FF9CA3AF' } };
      cell.alignment = { vertical: 'middle', wrapText: true };
      cell.border = { bottom: { style: 'thin', color: { argb: 'FFE5E7EB' } } };
      if (colNumber === 1) cell.alignment = { horizontal: 'center', vertical: 'middle' };
    });
  });

  ws5.views = [{ state: 'frozen', ySplit: 3, xSplit: 0, activeCell: 'A4' }];
  ws5.autoFilter = { from: 'A3', to: 'I3' };

  // ===========================
  // ЛИСТ 6: СВОДНАЯ СТАТИСТИКА
  // ===========================
  const ws6 = workbook.addWorksheet('Статистика', {
    properties: { tabColor: { argb: '10B981' } }
  });

  ws6.columns = [
    { header: 'Показатель', key: 'metric', width: 40 },
    { header: 'Значение', key: 'value', width: 20 },
  ];

  ws6.spliceRows(1, 0, []);
  ws6.spliceRows(1, 0, []);
  ws6.getCell('A1').value = '📊 СВОДНАЯ СТАТИСТИКА СПРАВОЧНИКА';
  ws6.getCell('A1').font = { size: 14, bold: true, color: { argb: 'FFFFFFFF' } };
  ws6.getCell('A1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF10B981' } };
  ws6.mergeCells('A1:B1');
  ws6.getCell('A1').alignment = { horizontal: 'center', vertical: 'middle' };
  ws6.getRow(1).height = 36;

  // Count by status
  const activeCount = verified.filter(r => (r['Статус'] || '').toLowerCase() === 'действующая').length;
  const liquidatedCount = verified.filter(r => (r['Статус'] || '').toLowerCase() === 'ликвидирована').length;
  const otherCount = verified.length - activeCount - liquidatedCount;

  // Count by category
  const catMap = {};
  verified.forEach(r => {
    const cat = r['Категория'] || 'не указана';
    catMap[cat] = (catMap[cat] || 0) + 1;
  });

  const stats = [
    ['📋 Всего компаний в верифицированной базе', verified.length],
    ['✅ Действующих', activeCount],
    ['❌ Ликвидированных', liquidatedCount],
    ['⚠️ Прочих статусов', otherCount],
    ['🏆 Крупных производителей ССС', sssLarge.length],
    ['📞 Контактов снабжения', supply.length],
    ['🟢 Активных из общей базы', active.length],
    ['🔴 Неактивных из общей базы', inactive.length],
    ['📁 Всего в полной базе (всех статусов)', full.length],
    ['', ''],
    ['📂 ПО КАТЕГОРИЯМ ПРОДУКЦИИ', ''],
  ];

  Object.entries(catMap).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
    stats.push([cat || '(без категории)', count]);
  });

  stats.forEach((item, i) => {
    const row = ws6.getRow(3 + i);
    row.values = item;
    row.height = 24;

    if (i === 0 || item[0] === '' || item[0].startsWith('📂')) {
      // Section headers
      row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        cell.font = { bold: true, size: 11, color: { argb: 'FFFFFFFF' } };
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF374151' } };
        cell.alignment = { vertical: 'middle' };
      });
    } else {
      const isEven = i % 2 === 0;
      row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: isEven ? 'FFF0FDF4' : 'FFFFFFFF' } };
        cell.font = { size: 10, color: { argb: 'FF374151' } };
        cell.alignment = { vertical: 'middle' };
        if (colNumber === 2) cell.alignment = { horizontal: 'center', vertical: 'middle' };
        cell.border = { bottom: { style: 'thin', color: { argb: 'FFE5E7EB' } } };
      });
    }
  });

  // ===== Save =====
  const outputPath = path.join(__dirname, 'Справочник_клиентов_ССС_2025.xlsx');
  await workbook.xlsx.writeFile(outputPath);
  console.log('✅ Справочник сохранён:', outputPath);
  console.log(`   Лист 1: Все клиенты (${verified.length})`);
  console.log(`   Лист 2: Активные (${active.length})`);
  console.log(`   Лист 3: Крупные ССС (${sssLarge.length})`);
  console.log(`   Лист 4: Контакты снабжения (${supply.length})`);
  console.log(`   Лист 5: Неактивные (${inactive.length})`);
  console.log(`   Лист 6: Статистика`);
}

main().catch(err => { console.error(err); process.exit(1); });