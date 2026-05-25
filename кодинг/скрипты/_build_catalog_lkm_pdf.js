const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const srcHtml = path.join(__dirname, '.business', 'marketing', 'catalog-lkm', 'preview.html');
const tmpDir = 'C:\\Temp';
const tmpHtml = path.join(tmpDir, 'catalog-lkm.html');
const tmpPdf = path.join(tmpDir, 'catalog-lkm-2026.pdf');
const finalPdf = path.join(__dirname, '.business', 'marketing', 'catalog-lkm', 'catalog-lkm-2026.pdf');

// Edge path
const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

// Step 1: Create temp dir
if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });

// Step 2: Copy HTML to temp (avoid cyrillic path issues)
fs.copyFileSync(srcHtml, tmpHtml);
console.log('1. Copied HTML to', tmpHtml);

// Step 3: Generate PDF via Edge headless
const cmd = `"${edge}" --headless --disable-gpu --print-to-pdf="${tmpPdf}" --no-margins "file:///C:/Temp/catalog-lkm.html"`;
console.log('2. Running Edge headless...');

try {
    execSync(cmd, { timeout: 30000 });
} catch (e) {
    console.log('Edge stderr (may be normal):', e.stderr?.toString().substring(0, 200));
}

// Step 4: Check result
if (fs.existsSync(tmpPdf)) {
    const size = fs.statSync(tmpPdf).size;
    console.log('3. PDF created, size:', (size / 1024).toFixed(1), 'KB');
    
    // Copy to project
    fs.copyFileSync(tmpPdf, finalPdf);
    console.log('4. Copied to', finalPdf);
    
    // Cleanup temp
    fs.unlinkSync(tmpHtml);
    fs.unlinkSync(tmpPdf);
    console.log('5. Temp files cleaned up');
    console.log('DONE! PDF:', finalPdf);
} else {
    console.error('ERROR: PDF was not created');
    process.exit(1);
}