// Скрипт для получения реальных финансовых данных
// Источники: bo.nalog.gov.ru API + rusprofile.ru (парсинг)
const https = require('https');

const companies = [
  { brand: 'Knauf', legal_name: 'ООО «Кнауф Гипс»', inn: '5024051564' },
  { brand: 'Юнис', legal_name: 'ООО «Инвест Центр»', inn: '5013053873' },
  { brand: 'Weber/Vetonit', legal_name: 'ООО «Сен Гобен»', inn: '5011020537' },
  { brand: 'Старатели', legal_name: 'ООО «Старатели»', inn: '5026000614' },
  { brand: 'Bergauf', legal_name: 'ООО «Бергауф»', inn: '6670045047' },
  { brand: 'Плитонит', legal_name: 'ООО «Эм Си Баухеми»', inn: '4706015486' },
  { brand: 'Брозекс', legal_name: 'ООО «Брозекс»', inn: '6604011045' },
  { brand: 'Основит', legal_name: 'ООО «Седрус»', inn: '7709807968' },
  { brand: 'Litokol', legal_name: 'ООО «НКСС»', inn: '5031042874' },
  { brand: 'Ceresit', legal_name: 'ООО «Лаб Индастриз»', inn: '7702691545' },
  { brand: 'БАСФ', legal_name: 'ООО «Строительные системы»', inn: '5074024703' },
];

function fetch(url, followRedirects = 5) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const req = https.request({
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/json',
        'Accept-Language': 'ru-RU,ru;q=0.9',
      },
      timeout: 15000,
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && followRedirects > 0) {
        let newUrl = res.headers.location;
        if (!newUrl.startsWith('http')) {
          newUrl = `https://${urlObj.hostname}${newUrl}`;
        }
        return fetch(newUrl, followRedirects - 1).then(resolve).catch(reject);
      }
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: d }));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
    req.end();
  });
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&/g, '&').replace(/"/g, '"').replace(/\s+/g, ' ').trim();
}

async function tryRusprofile(inn) {
  const res = await fetch(`https://www.rusprofile.ru/search?query=${inn}`);
  
  if (res.status !== 200) return { error: `HTTP ${res.status}` };
  
  const result = {};
  
  // Check if redirected directly to company page
  const titleMatch = res.body.match(/<title[^>]*>(.*?)<\/title>/);
  if (titleMatch) result.title = titleMatch[1];
  
  // Try to find company name
  const nameMatch = res.body.match(/<span[^>]*class="company-name[^"]*"[^>]*>(.*?)<\/span>/s);
  if (nameMatch) result.companyName = stripTags(nameMatch[1]);
  
  // Try alternative name patterns
  if (!result.companyName) {
    const nameMatch2 = res.body.match(/class="cls-h1[^"]*"[^>]*>(.*?)<\/div>/s);
    if (nameMatch2) result.companyName = stripTags(nameMatch2[1]);
  }
  if (!result.companyName) {
    const nameMatch3 = res.body.match(/<h1[^>]*>(.*?)<\/h1>/s);
    if (nameMatch3) result.companyName = stripTags(nameMatch3[1]);
  }
  
  // Try to find revenue (Выручка / Доход)
  // Pattern: looking for financial indicators
  const revenuePatterns = [
    /Выручка[^<]*<[^>]*>[^<]*<[^>]*>([0-9\s,.]+)/s,
    /выручка[^<]*<[^>]*>[^<]*<[^>]*>([0-9\s,.]+)/s,
    /Доход[^<]*<[^>]*>[^<]*<[^>]*>([0-9\s,.]+)/s,
    /Revenue[^<]*<[^>]*>[^<]*<[^>]*>([0-9\s,.]+)/s,
    /(\d[\d\s]*\d)\s*(?:тыс\.?\s*руб|млн\s*руб|млрд\s*руб)/i,
  ];
  
  for (const pattern of revenuePatterns) {
    const m = res.body.match(pattern);
    if (m) {
      result.revenueRaw = m[1] || m[0];
      break;
    }
  }
  
  // Extract all financial data section
  const financeIdx = res.body.indexOf('finance');
  if (financeIdx > -1) {
    result.financeContext = stripTags(res.body.substring(Math.max(0, financeIdx - 200), financeIdx + 500)).substring(0, 500);
  }
  
  // Try to find OKVED
  const okvedMatch = res.body.match(/ОКВЭД[^<]*<[^>]*>[^<]*<[^>]*>([^<]+)/s);
  if (okvedMatch) result.okved = stripTags(okvedMatch[1]);
  
  // Try to find CEO
  const ceoMatch = res.body.match(/Руководитель[^<]*<[^>]*>[^<]*<[^>]*>([^<]+)/s);
  if (ceoMatch) result.ceo = stripTags(ceoMatch[1]);
  
  // Try to find address
  const addrMatch = res.body.match(/Адрес[^<]*<[^>]*>[^<]*<[^>]*>([^<]+)/s);
  if (addrMatch) result.address = stripTags(addrMatch[1]);
  
  // Try to find status (active/liquidated)
  const statusMatch = res.body.match(/class="status[^"]*"[^>]*>(.*?)<\/span>/s);
  if (statusMatch) result.status = stripTags(statusMatch[1]);
  
  // Extract all text content for debugging (first 2000 chars)
  const textContent = stripTags(res.body);
  result.textContent = textContent.substring(0, 3000);
  
  // Look for any numbers that could be revenue
  const numMatches = textContent.match(/(?:выручк|доход|revenue)[^.;]{0,50}(\d[\d\s,.]+)/gi);
  if (numMatches) result.revenueLines = numMatches.slice(0, 3);
  
  return result;
}

async function main() {
  console.log('=== Получение данных из rusprofile.ru ===\n');
  
  const results = [];
  
  for (const company of companies) {
    console.log(`\n--- ${company.brand} (ИНН: ${company.inn}) ---`);
    
    try {
      const data = await tryRusprofile(company.inn);
      
      if (data.error) {
        console.log(`  Ошибка: ${data.error}`);
        results.push({ ...company, error: data.error });
      } else {
        if (data.companyName) console.log(`  Компания: ${data.companyName}`);
        if (data.title) console.log(`  Заголовок: ${data.title}`);
        if (data.status) console.log(`  Статус: ${data.status}`);
        if (data.address) console.log(`  Адрес: ${data.address}`);
        if (data.ceo) console.log(`  Руководитель: ${data.ceo}`);
        if (data.okved) console.log(`  ОКВЭД: ${data.okved}`);
        if (data.revenueRaw) console.log(`  Выручка (raw): ${data.revenueRaw}`);
        if (data.revenueLines) console.log(`  Строки с выручкой: ${JSON.stringify(data.revenueLines)}`);
        if (data.financeContext) console.log(`  Финансы: ${data.financeContext}`);
        
        results.push({ ...company, data });
      }
    } catch(e) {
      console.log(`  Ошибка: ${e.message}`);
      results.push({ ...company, error: e.message });
    }
    
    // Pause between requests to avoid blocking
    await new Promise(r => setTimeout(r, 2000));
  }
  
  console.log('\n\n========== ИТОГ ==========\n');
  for (const r of results) {
    if (r.error) {
      console.log(`${r.brand}: ОШИБКА - ${r.error}`);
    } else {
      const name = r.data?.companyName || r.data?.title || '?';
      console.log(`${r.brand}: ${name}`);
    }
  }
}

main().catch(console.error);