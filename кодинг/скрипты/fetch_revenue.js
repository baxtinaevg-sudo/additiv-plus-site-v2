// Быстрое извлечение точной выручки с единицами измерения
const https = require('https');

const companies = [
  { brand: 'Knauf', inn: '5024051564' },
  { brand: 'Юнис', inn: '5013053873' },
  { brand: 'Weber', inn: '5011020537' },
  { brand: 'Старатели', inn: '5026000614' },
  { brand: 'Bergauf', inn: '6670045047' },
  { brand: 'Плитонит', inn: '4706015486' },
  { brand: 'Брозекс', inn: '6604011045' },
  { brand: 'Основит', inn: '7709807968' },
  { brand: 'Litokol', inn: '5031042874' },
  { brand: 'Ceresit', inn: '7702691545' },
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
  return html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&/g, '&').replace(/"/g, '"').replace(/</g, '<').replace(/>/g, '>').replace(/\s+/g, ' ').trim();
}

async function main() {
  for (const c of companies) {
    try {
      const html = await fetch(`https://www.rusprofile.ru/search?query=${c.inn}`);
      const text = strip(html);
      
      // Find all occurrences of "Выручка" and get context
      let idx = 0;
      const contexts = [];
      while ((idx = text.indexOf('Выручк', idx)) !== -1 && contexts.length < 3) {
        contexts.push(text.substring(Math.max(0, idx), idx + 100));
        idx += 10;
      }
      
      // Also find company name and location
      const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/);
      const title = titleMatch ? strip(titleMatch[1]) : '?';
      
      console.log(`${c.brand}|${c.inn}|${title}`);
      for (const ctx of contexts) {
        console.log(`  > ${ctx}`);
      }
      console.log('');
    } catch(e) {
      console.log(`${c.brand}: Error ${e.message}\n`);
    }
    await new Promise(r => setTimeout(r, 1500));
  }
}

main().catch(console.error);