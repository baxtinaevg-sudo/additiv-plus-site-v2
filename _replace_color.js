const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '.business', 'marketing', 'catalog-sss', 'preview.html');

console.log('Reading from:', filePath);
console.log('File exists:', fs.existsSync(filePath));

let content = fs.readFileSync(filePath, 'utf8');

// Count before
const beforeCount = (content.match(/#2E6B8A/gi) || []).length;
console.log('Found #2E6B8A occurrences:', beforeCount);

// Replace accent color: #2E6B8A (teal) -> #6C3FCD (purple from logo)
content = content.replace(/#2E6B8A/gi, '#6C3FCD');

// Replace accent-light: #E3EDF3 -> #F0EAF8 (light lavender)
content = content.replace(/#E3EDF3/gi, '#F0EAF8');

// Replace accent-mid: #B8D4E3 -> #B8A0E3 (medium lavender)
content = content.replace(/#B8D4E3/gi, '#B8A0E3');

fs.writeFileSync(filePath, content, 'utf8');

// Verify
const verify = fs.readFileSync(filePath, 'utf8');
const count1 = (verify.match(/#6C3FCD/gi) || []).length;
const count2 = (verify.match(/#2E6B8A/gi) || []).length;
const count3 = (verify.match(/#F0EAF8/gi) || []).length;
const count4 = (verify.match(/#B8A0E3/gi) || []).length;
console.log('Done!');
console.log('#6C3FCD (accent):', count1);
console.log('#2E6B8A (old, should be 0):', count2);
console.log('#F0EAF8 (accent-light):', count3);
console.log('#B8A0E3 (accent-mid):', count4);