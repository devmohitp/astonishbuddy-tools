// scratch/check_sitemap.js
const fs = require('fs');

const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const dirs = fs.readdirSync('app/tools', { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

console.log('Checking tools in sitemap.xml:');
for (const dir of dirs) {
  const url = `https://www.astonishbuddy.com/tools/${dir}`;
  const present = sitemap.includes(url);
  console.log(dir.padEnd(28), present ? 'OK' : 'MISSING');
}

if (sitemap.includes('/tools/ai-image-extender')) {
  console.log('WARNING: /tools/ai-image-extender still present in sitemap.xml');
} else {
  console.log('OK: /tools/ai-image-extender is correctly excluded from sitemap.xml');
}
