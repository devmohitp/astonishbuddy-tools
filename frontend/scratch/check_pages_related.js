// scratch/check_pages_related.js
const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('app/tools', { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

for (const dir of dirs) {
  let p = path.join('app/tools', dir, 'page.tsx');
  let content = fs.readFileSync(p, 'utf8');
  if (dir === 'base64-converter') {
    p = path.join('app/tools', dir, 'Base64ConverterClient.tsx');
    content = fs.readFileSync(p, 'utf8');
  }

  const hasToolSEO = content.includes('<ToolSEO') || content.includes('toolId=');
  const hasRelatedTools = content.includes('<RelatedTools');
  
  // Find tools array
  let count = 0;
  const match = content.match(/<RelatedTools\s+tools=\{([A-Za-z0-9_]+)\}/) || content.match(/<RelatedTools\s+tools=\{([\[][\s\S]*?[\]])\}/);
  if (match) {
    const raw = match[1];
    if (raw.startsWith('[')) {
      count = (raw.match(/id:\s*["'][^"']+["']/g) || []).length;
    } else {
      const varName = raw.trim();
      const re = new RegExp('const\\s+' + varName + '[\\s\\S]*?=\\s*(\\[[\\s\\S]*?\\]);');
      const vMatch = content.match(re);
      if (vMatch) {
        count = (vMatch[1].match(/id:\s*["'][^"']+["']/g) || []).length;
      }
    }
  }

  console.log(dir.padEnd(28), 'ToolSEO:', hasToolSEO, 'RelatedTools:', hasRelatedTools, 'Count:', count);
}
