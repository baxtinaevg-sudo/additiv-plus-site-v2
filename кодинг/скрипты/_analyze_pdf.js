const fs = require('fs');
const buf = fs.readFileSync('C:/Users/Нюся/Desktop/видео для ролика/catalog-v3-gradient.pdf');
const text = buf.toString('utf8');

// Find all URLs
const urlMatches = text.match(/file:\/\/[^\s\n\r"'<>]+\.html/gi);
console.log('URLs:', urlMatches);

// Find all font names  
const fontMatches = text.match(/\/[A-Z][a-zA-Z]*\s*ABC/g);
console.log('Fonts sample:', fontMatches ? fontMatches.slice(0,10) : 'none');

// Find Creator/Producer
const creatorMatch = text.match(/\/Creator\s*\(([^)]+)\)/);
console.log('Creator:', creatorMatch ? creatorMatch[1] : 'none');

const producerMatch = text.match(/\/Producer\s*\(([^)]+)\)/);  
console.log('Producer:', producerMatch ? producerMatch[1] : 'none');