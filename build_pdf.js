const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const htmlPath = path.join(__dirname, 'brochure_resume.html');
const photoPath = path.join('c:', 'Users', 'Нюся', 'Desktop', 'фото для резюме.jpg');
const outputPath = path.join(__dirname, 'brochure_resume.pdf');

// Read photo as base64
const photoData = fs.readFileSync(photoPath);
const base64 = photoData.toString('base64');
const dataUri = `data:image/jpeg;base64,${base64}`;

// Read HTML and replace placeholder
let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace('PHOTO_BASE64_HERE', dataUri);

// Save temp HTML
const tempHtmlPath = path.join(__dirname, 'brochure_resume_final.html');
fs.writeFileSync(tempHtmlPath, html, 'utf8');
console.log('HTML с фото сохранён');

// Find Edge
const browsers = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
];

let browser = null;
for (const b of browsers) {
    if (fs.existsSync(b)) { browser = b; break; }
}

if (browser) {
    console.log('Браузер:', browser);
    const fileUrl = 'file:///' + tempHtmlPath.replace(/\\/g, '/');
    const cmd = `"${browser}" --headless --disable-gpu --print-to-pdf="${outputPath}" --no-margins "${fileUrl}"`;
    try {
        execSync(cmd, { timeout: 30000 });
        console.log('PDF создан:', outputPath);
    } catch (e) {
        console.log('Ошибка:', e.message);
    }
} else {
    execSync(`start "" "${tempHtmlPath}"`);
}