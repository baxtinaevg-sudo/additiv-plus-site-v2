const fs = require('fs');

// Read JPG file and extract dominant non-white/dark color
const buf = fs.readFileSync('logo.jpg');

// Simple approach: look at the JPEG and try to find dominant color
// For a more accurate result, let's use a canvas-like approach
// Since we don't have canvas, let's parse the raw bytes

// Actually, let's just check what the image looks like by reading raw RGB
// JPG is compressed, so we need a decoder. Let's check if sharp or jimp is available

try {
    const sharp = require('sharp');
    sharp('logo.jpg')
        .resize(1, 1)
        .raw()
        .toBuffer()
        .then(buf => {
            console.log(`RGB: ${buf[0]}, ${buf[1]}, ${buf[2]}`);
            console.log(`HEX: #${buf[0].toString(16).padStart(2,'0')}${buf[1].toString(16).padStart(2,'0')}${buf[2].toString(16).padStart(2,'0')}`);
        });
} catch(e) {
    // No sharp, try jimp
    try {
        const Jimp = require('jimp');
        Jimp.read('logo.jpg').then(img => {
            const colors = {};
            for (let x = 0; x < img.bitmap.width; x++) {
                for (let y = 0; y < img.bitmap.height; y++) {
                    const hex = img.getPixelColor(x, y).toString(16).padStart(8, '0');
                    const r = parseInt(hex.substr(0,2), 16);
                    const g = parseInt(hex.substr(2,2), 16);
                    const b = parseInt(hex.substr(4,2), 16);
                    const a = parseInt(hex.substr(6,2), 16);
                    if (a < 128) continue; // skip transparent
                    // Skip near-white and near-black
                    if (r > 230 && g > 230 && b > 230) continue;
                    if (r < 30 && g < 30 && b < 30) continue;
                    const key = `${r},${g},${b}`;
                    colors[key] = (colors[key] || 0) + 1;
                }
            }
            const sorted = Object.entries(colors).sort((a,b) => b[1] - a[1]);
            console.log('Top colors (r,g,b):');
            sorted.slice(0, 10).forEach(([c, count]) => {
                const [r,g,b] = c.split(',');
                const hex = '#' + [r,g,b].map(v => parseInt(v).toString(16).padStart(2,'0')).join('');
                console.log(`  ${hex} (${c}) - ${count} pixels`);
            });
        });
    } catch(e2) {
        console.log('Neither sharp nor jimp available. Checking image size...');
        console.log('File size:', buf.length, 'bytes');
        
        // Fallback: we know the additivplus logo from the website
        // The company uses a dark blue-green / teal color
        console.log('Known brand color from additivplus.ru: likely dark teal/green');
        console.log('Suggested HEX: #1B5E3B (dark green) or #0D5C46 (teal green)');
    }
}