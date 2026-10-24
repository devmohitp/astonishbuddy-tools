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

const files = scanDir('./app/tools');
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('<RelatedTools')) {
    const lines = content.split('\n');
    const startIdx = lines.findIndex(l => l.includes('<RelatedTools'));
    const slice = lines.slice(startIdx, startIdx + 12).join('\n');
    console.log('=== FILE:', f);
    console.log(slice);
  }
}
