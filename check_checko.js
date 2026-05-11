// Полный парсинг checko.ru — все 11 компаний с годами выручки
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

function fetch(hostname, path, redirects = 5) {
  return new Promise((resolve, reject) => {
    const req = https.get({
      hostname: hostname,
      path: path,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html',
      },
      timeout: 10000,
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects > 0) {
        let loc = res.headers.location;
        if (!loc.startsWith('http')) loc = 'https://' + hostname + loc;
        const u = new URL(loc);
        return fetch(u.hostname, u.pathname + u.search, redirects - 1).then(resolve).catch(reject);
      }
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve({ status: res.statusCode, body: d }));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function strip(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&/g, '&').replace(/"/g, '"').replace(/&#43;/g, '+').replace(/\s+/g, ' ').trim();
}

async function getCompanyData(inn) {
  // Step 1: search redirects to company page
  const searchRes = await fetch('checko.ru', '/search?query=' + inn);
  
  const result = { inn };
  
  // Extract main revenue from search result page
  const text = strip(searchRes.body);
  
  // Revenue: "Выручка = выросла до 25,8 млрд руб. +7%"
  const revMatch = text.match(/Выручка\s*=\s*(?:выросла до |понизилась до |составила )?([\d,.\s]+\s*(?:млн|млрд|тыс)?\s*руб\.?)\s*([+-]?\d+\s*%)?/i);
  if (revMatch) {
    result.revenue = revMatch[1].trim();
    result.change = revMatch[2] || '';
  }
  
  // Net profit
  const profitMatch = text.match(/Чистая прибыль\s*=\s*(?:выросла до |понизилась до |составила )?([\d,.\s]+\s*(?:млн|млрд|тыс)?\s*руб\.?)\s*([+-]?\d+\s*%)?/i);
  if (profitMatch) {
    result.profit = profitMatch[1].trim();
    result.profitChange = profitMatch[2] || '';
  }
  
  // Find OGRN from redirect URL
  const redirectUrl = searchRes.body.match(/company\/[a-z0-9-]+-(\d+)/);
  if (redirectUrl) result.ogrn = redirectUrl[1];
  
  // Find title (company name + city)
  const titleMatch = searchRes.body.match(/<title[^>]*>(.*?)<\/title>/);
  if (titleMatch) result.title = titleMatch[1].replace(/"/g, '"').replace(/&/g, '&');
  
  // Step 2: Try to get financial details page
  // URL from search redirect: /company/knauf-gips-1025002863049
  const companySlug = searchRes.body.match(/company\/([a-z0-9-]+-\d+)/);
  if (companySlug) {
    // Try financial statements page
    try {
      const finRes = await fetch('checko.ru', '/company/' + companySlug[1] + '/finance');
      if (finRes.status === 200) {
        const finText = strip(finRes.body);
        
        // Look for year-specific revenue
        // Pattern: "2025" near "выручка" or financial tables
        const yearRev = finText.match(/(20[12]\d)[^\n]{0,30}выручк[а-я]*[^\n]{0,30}([\d,.\s]+)/gi);
        if (yearRev) result.yearRevenue = yearRev.slice(0, 3);
        
        // Look for "Бухгалтерская отчетность за YYYY"
        const reportYear = finText.match(/отчетность\s+за\s+(20[12]\d)/i);
        if (reportYear) result.reportYear = reportYear[1];
        
        // All years found on finance page
        const years = finText.match(/20[12]\d/g);
        if (years) result.financeYears = [...new Set(years)].sort().reverse();
        
        // Financial data context
        const finIdx = finText.indexOf('Бухгалтерск');
        if (finIdx > -1) result.financeContext = finText.substring(finIdx, finIdx + 500);
        
        // Revenue section context
        const revIdx = finText.indexOf('Выручк');
        if (revIdx > -1) result.revenueContext = finText.substring(revIdx, revIdx + 500);
      }
    } catch(e) {
      result.financeError = e.message;
    }
  }
  
  return result;
}

async function main() {
  console.log('=== Данные из checko.ru ===\n');
  
  for (const company of companies) {
    try {
      const data = await getCompanyData(company.inn);
      
      console.log(`\n--- ${company.brand} (ИНН: ${company.inn}) ---`);
      if (data.title) console.log(`  ${data.title}`);
      if (data.revenue) console.log(`  Выручка: ${data.revenue} ${data.change}`);
      if (data.profit) console.log(`  Прибыль: ${data.profit} ${data.profitChange}`);
      if (data.reportYear) console.log(`  Год отчётности: ${data.reportYear}`);
      if (data.financeYears) console.log(`  Года на стр. финансов: ${data.financeYears.join(', ')}`);
      if (data.yearRevenue) {
        console.log(`  Выручка по годам:`);
        data.yearRevenue.forEach(l => console.log(`    ${l}`));
      }
      if (data.revenueContext) console.log(`  Контекст выручки: ${data.revenueContext.substring(0, 300)}`);
      if (data.financeContext) console.log(`  Контекст финансов: ${data.financeContext.substring(0, 300)}`);
      if (data.financeError) console.log(`  Ошибка финансов: ${data.financeError}`);
      
    } catch(e) {
      console.log(`\n--- ${company.brand} ---\n  Ошибка: ${e.message}`);
    }
    
    await new Promise(r => setTimeout(r, 2000));
  }
}

main().catch(console.error);