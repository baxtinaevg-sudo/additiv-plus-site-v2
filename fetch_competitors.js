// Скрипт для сбора данных по 27 конкурентам АП через rusprofile
const https = require('https');

const competitors = [
  'ГК ПОЛИПЛАСТ Новомосковск',
  'Химпром Пермь',
  'Чжичжэн Групп',
  'Ларчфилд ЛСН Москва',
  'Анцелл Москва',
  'Гапри Москва',
  'Еврохим-1 ФД Москва',
  'ЕМКемикалс Москва',
  'ЕТС-Казань',
  'ЕТС-М Москва',
  'ЕТС-Химические материалы Санкт-Петербург',
  'ЕТС-Юг Ростов',
  'Новый мир Екатеринбург химия',
  'Нортекс Москва химия',
  'Омиа Алгол Рус Москва',
  'Пауэрстиил Технолоджи Санкт-Петербург',
  'Пигмент Тамбов',
  'Поливерс Кемикал Чебоксары',
  'Ревада Москва',
  'Реттенмайер Рус Москва',
  'Тригал Санкт-Петербург',
  'ХимИнТех Пермь',
  'Химстройкомплект Москва',
  'Чайна Бентон Про Москва',
  'Юсиджи Москва',
  'Промкоут',
  'Афая Санкт-Петербург',
];

function fetch(url, redirects = 5) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const req = https.request({
      hostname: u.hostname,
      path: u.pathname + u.search,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html',
      },
      timeout: 15000,
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
  return html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&/g, '&')
    .replace(/"/g, '"').replace(/</g, '<').replace(/>/g, '>').replace(/\s+/g, ' ').trim();
}

async function main() {
  console.log('=== КОНКУРЕНТЫ АП: СБОР ДАННЫХ ИЗ RUSPROFILE ===\n');
  
  for (const name of competitors) {
    try {
      const query = encodeURIComponent(name);
      const html = await fetch(`https://www.rusprofile.ru/search?query=${query}&type=ul`);
      const text = strip(html);
      
      // Extract company title
      const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/);
      const title = titleMatch ? strip(titleMatch[1]) : '?';
      
      // Extract INN
      const innMatch = text.match(/ИНН[:\s]*(\d{10,12})/i) || text.match(/(\d{10,12})/);
      const inn = innMatch ? innMatch[1] : 'не найден';
      
      // Extract revenue
      const revenueContexts = [];
      let idx = 0;
      while ((idx = text.indexOf('Выручк', idx)) !== -1 && revenueContexts.length < 2) {
        revenueContexts.push(text.substring(Math.max(0, idx), idx + 80));
        idx += 10;
      }
      
      // Extract OKVED
      let okved = '';
      const okvedMatch = text.match(/ОКВЭД[\s\-]*(\d{2}\.\d+)/);
      if (okvedMatch) okved = okvedMatch[1];
      
      // Extract status/activity
      let status = '';
      if (text.includes('действующ')) status = 'действующая';
      if (text.includes('ликвид')) status = 'ликвидирована';
      
      // Extract address
      let address = '';
      const addrMatch = text.match(/(\d{6},\s*[А-ЯЁ][а-яё].{10,80})/u);
      if (addrMatch) address = addrMatch[1].substring(0, 80);
      
      console.log(`--- ${name} ---`);
      console.log(`  Title: ${title}`);
      console.log(`  ИНН: ${inn}`);
      console.log(`  ОКВЭД: ${okved || 'не найден'}`);
      console.log(`  Статус: ${status || 'не определён'}`);
      if (address) console.log(`  Адрес: ${address}`);
      for (const ctx of revenueContexts) {
        console.log(`  > ${ctx}`);
      }
      console.log('');
    } catch (e) {
      console.log(`--- ${name} ---`);
      console.log(`  ОШИБКА: ${e.message}\n`);
    }
    
    // Pause to avoid rate limiting
    await new Promise(r => setTimeout(r, 2000));
  }
}

main().catch(console.error);