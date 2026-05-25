const sharp = require('sharp');

sharp('logo.jpg')
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    console.log('Image size:', info.width + 'x' + info.height);
    const counts = {};
    for (let i = 0; i < data.length; i += 3) {
      const r = data[i], g = data[i + 1], b = data[i + 2];
      // Skip white and near-white
      if (r > 230 && g > 230 && b > 230) continue;
      // Skip black and near-black
      if (r < 30 && g < 30 && b < 30) continue;
      const key = r + ',' + g + ',' + b;
      counts[key] = (counts[key] || 0) + 1;
    }
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    console.log('Top colors:');
    sorted.slice(0, 15).forEach(([c, n]) => {
      const parts = c.split(',');
      const hex = '#' + parts.map(v => parseInt(v).toString(16).padStart(2, '0')).join('');
      console.log('  ' + hex + ' rgb(' + c + ') - ' + n + 'px');
    });
  });