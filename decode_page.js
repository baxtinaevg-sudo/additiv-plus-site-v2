const fs = require('fs');
const buf = fs.readFileSync('c:/Users/Нюся/для обучения менеджера статиста/bestresearch.html');

// Detect charset
const head = buf.toString('ascii', 0, 2000);
const charsetMatch = head.match(/charset=([^"\s'>]+)/i);
console.log('Charset:', charsetMatch ? charsetMatch[1] : 'unknown');

// Try windows-1251 via TextDecoder
try {
  const decoder = new TextDecoder('windows-1251');
  const text = decoder.decode(buf).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(text.substring(0, 5000));
} catch(e) {
  console.log('TextDecoder error:', e.message);
  // Fallback: manual cp1251 to utf8 mapping for key chars
  console.log(buf.toString('utf8').substring(0, 500));
}