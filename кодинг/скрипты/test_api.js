// Быстрый тест подключения к bo.nalog.ru
const https = require('https');

function fetch(url, followRedirects = 3) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const req = https.request({
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json, text/html',
      },
      timeout: 10000,
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && followRedirects > 0) {
        const newUrl = res.headers.location.startsWith('http') ? res.headers.location : `https://${urlObj.hostname}${res.headers.location}`;
        console.log(`  Redirect ${res.statusCode} -> ${newUrl}`);
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

async function main() {
  // Test 1: main page
  console.log('Test 1: bo.nalog.ru main page');
  try {
    const r = await fetch('https://bo.nalog.ru/');
    console.log(`  Status: ${r.status}`);
    console.log(`  Body (first 200): ${r.body.substring(0, 200)}`);
  } catch(e) {
    console.log(`  Error: ${e.message}`);
  }
  
  // Test 2: search API
  console.log('\nTest 2: search API');
  try {
    const r = await fetch('https://bo.nalog.ru/nbo/organizations/search?q=5024051564&page=0&size=5');
    console.log(`  Status: ${r.status}`);
    console.log(`  Body (first 500): ${r.body.substring(0, 500)}`);
  } catch(e) {
    console.log(`  Error: ${e.message}`);
  }

  // Test 3: rusprofile
  console.log('\nTest 3: rusprofile.ru');
  try {
    const r = await fetch('https://www.rusprofile.ru/search?query=5024051564');
    console.log(`  Status: ${r.status}`);
    const title = r.body.match(/<title[^>]*>(.*?)<\/title>/);
    if (title) console.log(`  Title: ${title[1]}`);
  } catch(e) {
    console.log(`  Error: ${e.message}`);
  }
}

main().catch(console.error);