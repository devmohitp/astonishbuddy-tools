// scratch/audit_related_tools.js
const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('app/tools', { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

for (const dir of dirs) {
  let file = path.join('app/tools', dir, 'page.tsx');
  if (dir === 'base64-converter') {
    file = path.join('app/tools', dir, 'Base64ConverterClient.tsx');
  }
  let content = fs.readFileSync(file, 'utf8');

  // Check for any obsolete /tools/ai-image-extender link
  if (content.includes('/tools/ai-image-extender')) {
    console.log('Fixing obsolete extender link in', file);
    content = content.replace(/\/tools\/ai-image-extender/g, '/tools/image-background-extender');
    content = content.replace(/AI Image Extender/g, 'Image Background Extender');
    fs.writeFileSync(file, content, 'utf8');
  }

  // Count items inside <RelatedTools tools={[ ... ]}
  const idx = content.indexOf('<RelatedTools');
  if (idx !== -1) {
    const slice = content.slice(idx, idx + 1500);
    const end = slice.indexOf('/>');
    const relBlock = slice.slice(0, end);
    const items = (relBlock.match(/href:\s*["'][^"']+["']/g) || []).length;
    console.log(dir.padEnd(28), 'Related tools count:', items);
  } else {
    console.log(dir.padEnd(28), 'NO RelatedTools tag found!');
  }
}
