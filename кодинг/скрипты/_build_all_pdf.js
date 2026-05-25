const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const srcDir = path.join(__dirname, '.business', 'marketing', 'catalog-sss');
const outDir = 'C:\\Users\\Нюся\\Desktop\\видео для ролика';
const tmpDir = 'C:\\Temp';
const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

// Ensure dirs
if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const versions = [
    { src: 'preview.html',   out: 'catalog-v1-original.pdf',    label: 'V1 (оригинал)' },
    { src: 'preview_v2.html', out: 'catalog-v2-dark-flask.pdf', label: 'V2 (тёмная + колба)' },
    { src: 'preview_v3.html', out: 'catalog-v3-gradient.pdf',   label: 'V3 (градиент)' },
];

for (const v of versions) {
    const srcPath = path.join(srcDir, v.src);
    if (!fs.existsSync(srcPath)) {
        console.log(`❌ ${v.src} not found, skipping`);
        continue;
    }

    const tmpHtml = path.join(tmpDir, 'catalog_' + v.src);
    const tmpPdf = path.join(tmpDir, v.out);
    const finalPdf = path.join(outDir, v.out);

    // Copy HTML to temp
    fs.copyFileSync(srcPath, tmpHtml);
    console.log(`📄 Processing ${v.label}...`);

    // Generate PDF
    const url = 'file:///' + tmpHtml.replace(/\\/g, '/');
    const cmd = `"${edge}" --headless --disable-gpu --print-to-pdf="${tmpPdf}" --no-margins "${url}"`;
    
    try { execSync(cmd, { timeout: 30000 }); } catch (e) { /* stderr noise is normal */ }

    if (fs.existsSync(tmpPdf)) {
        const size = fs.statSync(tmpPdf).size;
        fs.copyFileSync(tmpPdf, finalPdf);
        console.log(`✅ ${v.out} — ${(size/1024).toFixed(0)} KB`);
        fs.unlinkSync(tmpPdf);
    } else {
        console.log(`❌ PDF not created for ${v.label}`);
    }

    fs.unlinkSync(tmpHtml);
}

console.log(`\n📁 Все PDF сохранены в: ${outDir}`);