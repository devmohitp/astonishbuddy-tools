// scratch/check_claims.js
const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('app/tools', { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
const terms = ['no ads', 'without ads', 'ad-free', 'pricing', 'subscription', 'premium tier', 'paid plan'];

for (const dir of dirs) {
  const dirPath = path.join('app/tools', dir);
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));
  for (const f of files) {
    const content = fs.readFileSync(path.join(dirPath, f), 'utf8');
    for (const term of terms) {
      if (content.toLowerCase().includes(term)) {
        console.log(`Found "${term}" in ${path.join(dir, f)}`);
      }
    }
  }
}
