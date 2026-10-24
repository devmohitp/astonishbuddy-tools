const fs = require('fs');
const path = require('path');

function scanDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(scanDir(full));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(full);
    }
  }
  return results;
}

const names = ['RefreshCw', 'FileDigit', 'Link', 'Lock', 'Dices', 'Palette', 'Image', 'File', 'Key', 'Database', 'FileEdit', 'Type', 'Sparkles', 'QrCode'];
const files = scanDir('./app');
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  for (const n of names) {
    if (content.includes(`"${n}"`) || content.includes(`'${n}'`)) {
      console.log(f, n);
    }
  }
}
