const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '.business', 'marketing', 'catalog-sss');
const srcFile = path.join(srcDir, 'preview.html');
const logoFile = path.join(__dirname, 'logo.jpg');

// Read source HTML
let html = fs.readFileSync(srcFile, 'utf8');

// Read logo as base64
const logoData = fs.readFileSync(logoFile);
const logoBase64 = `data:image/jpeg;base64,${logoData.toString('base64')}`;

// ─── COMMON CHANGES (applied to all versions) ───

// 1. Replace logo src with base64
html = html.replace('src="../../../logo.jpg"', `src="${logoBase64}"`);

// 2. Remove additivplus.ru from all section footers
html = html.replace(/\s*<span>additivplus\.ru<\/span>/g, '');

// 3. Add brand-label for MAPF SE (section 09 - Эфиры крахмала)
html = html.replace(
    '(строка 910)\n    <div class="section-divider"></div>\n\n    <table class="product-table">',
    '<div class="section-divider"></div>\n\n    <div class="brand-label">MAPF SE</div>\n    <table class="product-table">'
);

// Better approach - find the exact pattern after section 09 header
html = html.replace(
    /<h2 class="section-title">Эфиры крахмала<\/h2>\s*<\/div>\s*<div class="section-divider"><\/div>\s*<table class="product-table">/,
    `<h2 class="section-title">Эфиры крахмала</h2>\n    </div>\n    <div class="section-divider"></div>\n\n    <div class="brand-label">MAPF SE</div>\n    <table class="product-table">`
);

// 4. Add brand-label for MAPF Disp (section 10 - Диспергаторы)
html = html.replace(
    /<h2 class="section-title">Диспергаторы \/ ПАВ<\/h2>\s*<\/div>\s*<div class="section-divider"><\/div>\s*<table class="product-table">/,
    `<h2 class="section-title">Диспергаторы / ПАВ</h2>\n    </div>\n    <div class="section-divider"></div>\n\n    <div class="brand-label">MAPF Disp</div>\n    <table class="product-table">`
);

// Extract catalog content (everything after </div> closing cover, before </body>)
const coverEndIdx = html.indexOf('<!-- ════════════════════════ 01');
const backPageStartIdx = html.lastIndexOf('<!-- ════════════════════════ ОБЛОЖКА');
const bodyCloseIdx = html.lastIndexOf('</body>');

const catalogContent = html.substring(coverEndIdx, bodyCloseIdx);
const backPageContent = catalogContent.substring(catalogContent.lastIndexOf('<!-- ════════════════════════ ОБЛОЖКА'));

// ─── VERSION 2: Dark cover + SVG Flask ───
const v2Cover = `<!-- ════════════════════════ ОБЛОЖКА ════════════════════════ -->
<div class="cover" style="background:#1B2A3D;">
    <div class="cover-inner" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;max-width:600px;">
        <div style="flex:0 0 auto;margin-bottom:2.5rem;">
            <img src="${logoBase64}" alt="Аддитив Плюс" style="height:72px;width:auto;filter:brightness(1.1);">
        </div>
        <div style="width:80px;height:2px;background:#6C3FCD;margin-bottom:2.5rem;"></div>
        <div style="font-size:2.2rem;font-weight:700;letter-spacing:6px;text-transform:uppercase;color:#FFFFFF;margin-bottom:0.5rem;font-family:'Inter',sans-serif;">Мы творим</div>
        <div style="font-size:2.2rem;font-weight:700;letter-spacing:6px;text-transform:uppercase;color:#6C3FCD;margin-bottom:2rem;font-family:'Inter',sans-serif;">будущее</div>
        <div style="font-size:0.82rem;font-weight:400;color:#8C99A8;letter-spacing:2px;text-transform:uppercase;margin-bottom:4rem;font-family:'Inter',sans-serif;">Добавки для производства сухих строительных смесей</div>
        <!-- SVG Flask Illustration -->
        <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:280px;height:auto;opacity:0.7;">
            <!-- Round-bottom flask -->
            <path d="M140 20 L140 80 Q140 100 120 110 L80 140 Q50 170 60 200 Q70 230 110 235 L210 235 Q250 230 260 200 Q270 170 240 140 L200 110 Q180 100 180 80 L180 20" stroke="#6C3FCD" stroke-width="1.5" fill="none"/>
            <!-- Flask neck top -->
            <line x1="130" y1="20" x2="190" y2="20" stroke="#6C3FCD" stroke-width="1.5"/>
            <!-- Liquid inside -->
            <path d="M85 170 Q100 155 120 165 Q140 175 160 160 Q180 150 200 160 Q225 170 230 190 Q235 210 210 230 L110 230 Q85 225 80 200 Q78 185 85 170Z" fill="#6C3FCD" opacity="0.15"/>
            <!-- Bubbles -->
            <circle cx="120" cy="190" r="4" fill="#6C3FCD" opacity="0.25"/>
            <circle cx="155" cy="200" r="3" fill="#6C3FCD" opacity="0.2"/>
            <circle cx="180" cy="185" r="5" fill="#6C3FCD" opacity="0.15"/>
            <circle cx="140" cy="210" r="2.5" fill="#6C3FCD" opacity="0.3"/>
            <circle cx="195" cy="205" r="3.5" fill="#B8A0E3" opacity="0.2"/>
            <!-- Test tube left -->
            <rect x="30" y="100" width="16" height="60" rx="8" stroke="#B8A0E3" stroke-width="1" fill="none" opacity="0.5"/>
            <rect x="32" y="130" width="12" height="28" rx="6" fill="#6C3FCD" opacity="0.1"/>
            <!-- Test tube right -->
            <rect x="274" y="90" width="16" height="70" rx="8" stroke="#B8A0E3" stroke-width="1" fill="none" opacity="0.4"/>
            <rect x="276" y="125" width="12" height="32" rx="6" fill="#6C3FCD" opacity="0.1"/>
            <!-- Molecule dots -->
            <circle cx="50" cy="60" r="2" fill="#B8A0E3" opacity="0.3"/>
            <circle cx="270" cy="55" r="2" fill="#B8A0E3" opacity="0.3"/>
            <circle cx="60" cy="230" r="1.5" fill="#6C3FCD" opacity="0.2"/>
            <circle cx="260" cy="235" r="1.5" fill="#6C3FCD" opacity="0.2"/>
        </svg>
    </div>
</div>`;

// ─── VERSION 3: Gradient + Molecular hexagons ───
const v3Cover = `<!-- ════════════════════════ ОБЛОЖКА ════════════════════════ -->
<div class="cover" style="background:linear-gradient(160deg,#1B2A3D 0%,#2D1B4E 50%,#6C3FCD 100%);overflow:hidden;position:relative;">
    <!-- Hexagonal molecular background -->
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity:0.08;">
        <polygon points="400,50 450,75 450,125 400,150 350,125 350,75" stroke="#FFFFFF" stroke-width="1" fill="none"/>
        <polygon points="500,100 550,125 550,175 500,200 450,175 450,125" stroke="#FFFFFF" stroke-width="1" fill="none"/>
        <polygon points="300,120 350,145 350,195 300,220 250,195 250,145" stroke="#FFFFFF" stroke-width="1" fill="none"/>
        <polygon points="600,180 650,205 650,255 600,280 550,255 550,205" stroke="#FFFFFF" stroke-width="1" fill="none"/>
        <polygon points="200,250 250,275 250,325 200,350 150,325 150,275" stroke="#FFFFFF" stroke-width="1" fill="none"/>
        <polygon points="450,280 500,305 500,355 450,380 400,355 400,305" stroke="#FFFFFF" stroke-width="1" fill="none"/>
        <polygon points="650,320 700,345 700,395 650,420 600,395 600,345" stroke="#FFFFFF" stroke-width="1" fill="none"/>
        <polygon points="350,400 400,425 400,475 350,500 300,475 300,425" stroke="#FFFFFF" stroke-width="1" fill="none"/>
        <polygon points="150,400 200,425 200,475 150,500 100,475 100,425" stroke="#FFFFFF" stroke-width="1" fill="none"/>
        <polygon points="550,440 600,465 600,515 550,540 500,515 500,465" stroke="#FFFFFF" stroke-width="1" fill="none"/>
        <line x1="400" y1="150" x2="450" y2="175" stroke="#FFFFFF" stroke-width="0.5"/>
        <line x1="450" y1="125" x2="500" y2="100" stroke="#FFFFFF" stroke-width="0.5"/>
        <line x1="350" y1="195" x2="450" y2="305" stroke="#FFFFFF" stroke-width="0.5"/>
        <line x1="500" y1="200" x2="600" y2="180" stroke="#FFFFFF" stroke-width="0.5"/>
        <circle cx="400" cy="50" r="3" fill="#FFFFFF"/>
        <circle cx="500" cy="100" r="3" fill="#FFFFFF"/>
        <circle cx="300" cy="120" r="2" fill="#FFFFFF"/>
        <circle cx="600" cy="180" r="3" fill="#FFFFFF"/>
        <circle cx="200" cy="250" r="2" fill="#FFFFFF"/>
        <circle cx="450" cy="280" r="3" fill="#FFFFFF"/>
        <circle cx="650" cy="320" r="2" fill="#FFFFFF"/>
        <circle cx="350" cy="400" r="3" fill="#FFFFFF"/>
    </svg>
    <div style="position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;text-align:center;padding:4rem 2rem;">
        <div style="margin-bottom:2.5rem;">
            <img src="${logoBase64}" alt="Аддитив Плюс" style="height:72px;width:auto;filter:brightness(1.2);">
        </div>
        <div style="width:60px;height:2px;background:rgba(255,255,255,0.6);margin-bottom:3rem;"></div>
        <div style="font-size:2.4rem;font-weight:300;letter-spacing:4px;color:rgba(255,255,255,0.9);margin-bottom:0.8rem;font-family:'Inter',sans-serif;">МЫ ТВОРИМ</div>
        <div style="font-size:3rem;font-weight:700;letter-spacing:8px;text-transform:uppercase;color:#FFFFFF;margin-bottom:2.5rem;font-family:'Inter',sans-serif;">БУДУЩЕЕ</div>
        <div style="width:40px;height:1px;background:#B8A0E3;margin-bottom:2.5rem;"></div>
        <div style="font-size:0.78rem;font-weight:400;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;font-family:'Inter',sans-serif;">Добавки для производства сухих строительных смесей</div>
    </div>
</div>`;

// Get the CSS part and back page from original
const cssEnd = html.indexOf('</style>') + 8;
const cssPart = html.substring(0, cssEnd);

// Get everything from section 01 to end (catalog + back page)
const catalogPart = html.substring(coverEndIdx);

// Build V2
const v2Html = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Каталог — Аддитив Плюс</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        ${cssPart.substring(cssPart.indexOf('<style>') + 7)}
    </style>
</head>
<body>
${v2Cover}
${catalogPart}
</body>
</html>`;

// Build V3
const v3Html = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Каталог — Аддитив Плюс</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        ${cssPart.substring(cssPart.indexOf('<style>') + 7)}
    </style>
</head>
<body>
${v3Cover}
${catalogPart}
</body>
</html>`;

// Write files
fs.writeFileSync(path.join(srcDir, 'preview_v2.html'), v2Html, 'utf8');
console.log('✅ preview_v2.html created (dark cover + flask)');

fs.writeFileSync(path.join(srcDir, 'preview_v3.html'), v3Html, 'utf8');
console.log('✅ preview_v3.html created (gradient + hexagons)');

console.log('Done! Both versions saved.');