оюру// Извлечение точных годов выручки из rusprofile.ru
const https = require('https');

const companies = [
  { brand: 'Knauf', inn: '5024051564' },
  { brand: 'Ceresit', inn: '7702691545' },
  { brand: 'Weber', inn: '5011020537' },
  { brand: 'Bergauf', inn: '6670045047' },
  { brand: 'Litokol', inn: '5031042874' },
  { brand: 'Старатели', inn: '5026000614' },
  { brand: 'Основит', inn: '7709807968' },
  { brand: 'Плитонит', inn: '4706015486' },
  { brand: 'Брозекс', inn: '6604011045' },
  { brand: 'Юнис', inn: '5013053873' },
  { brand: 'БАСФ', inn: '5074024703' },
];

function fetch(url, redirects = 5) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const req = https.request({
      hostname: u.hostname, path: u.pathname + u.search, method: 'GET',
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', 'Accept': 'text/html' },
      timeout: 10000,
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects > 0) {
        let nu = res.headers.location;
        if (!nu.startsWith('http')) nu = `https://${u.hostname}${nu}`;
        return fetch(nu, redirects - 1).then(resolve).catch(reject);
      }
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(d));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
    req.end();
  });
}

function strip(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&/g, '&').replace(/"/g, '"').replace(/</g, '<').replace(/>/g, '>').replace(/&#43;/g, '+').replace(/&#8381;/g, 'руб').replace(/\s+/g, ' ').trim();
}

async function main() {
  for (const c of companies) {
    try {
      const html = await fetch(`https://www.rusprofile.ru/search?query=${c.inn}`);
      const text = strip(html);
      
      // 1. Find main revenue line: "Выручка XX млрд руб. ↑/↓ +/-N%"
      const mainRevMatch = text.match(/Выручка\s+([\d,.\s]+\s*(?:млн|млрд|тыс)?\s*руб\.)\s*([↑↓\u2191\u2193]|&[a-z]+;)?\s*([+-]?\s*\d+\s*%)?/);
      
      // 2. Find year context near "выручке за YYYY"
      const yearMatch = text.match(/выручке\s+за\s+(\d{4})/i);
      const yearMatch2 = text.match(/отчетност[ьяи\s]*за\s*(\d{4})/i);
      const yearMatch3 = text.match(/(\d{4})\s*год/i);
      
      // 3. Find detailed revenue: "25 784 892 000 руб."
      const detailedMatch = text.match(/(\d[\d\s]*\d)\s*руб\.\s*[↑↓]/);
      
      // 4. Find "Выручка и динамика" section with table
      const tableIdx = text.indexOf('Выручка (руб.)');
      let tableContext = '';
      if (tableIdx > -1) {
        tableContext = text.substring(tableIdx, tableIdx + 300);
      }
      
      // 5. Find period/year indicators in the financial section
      const financeSection = text.indexOf('Выручка');
      let financeText = '';
      if (financeSection > -1) {
        financeText = text.substring(financeSection, financeSection + 500);
      }
      
      // 6. Look for year patterns in the whole text
      const yearPatterns = text.match(/20[12]\d/g);
      const uniqueYears = [...new Set(yearPatterns || [])].sort().reverse();
      
      console.log(`\n=== ${c.brand} (ИНН: ${c.inn}) ===`);
      if (mainRevMatch) console.log(`  Основная выручка: ${mainRevMatch[0]}`);
      if (yearMatch) console.log(`  "выручке за ${yearMatch[1]}"`);
      if (yearMatch2) console.log(`  "отчетность за ${yearMatch2[1]}"`);
      if (detailedMatch) console.log(`  Точная сумма: ${detailedMatch[1]} руб.`);
      if (tableContext) console.log(`  Таблица: ${tableContext.substring(0, 200)}`);
      console.log(`  Года на странице: ${uniqueYears.join(', ')}`);
      
      // 7. Show raw finance section for debugging
      if (financeText) console.log(`  Финансы: ${financeText.substring(0, 300)}`);
      
    } catch(e) {
      console.log(`\n=== ${c.brand} ===\n  Error: ${e.message}`);
    }
    await new Promise(r => setTimeout(r, 2000));
  }
}

main().catch(console.error);