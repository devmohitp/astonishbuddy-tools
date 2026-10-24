const fs = require('fs');
const content = fs.readFileSync('./app/data/tools-seo-data.tsx', 'utf8');
const lines = content.split('\n');
const tools = [];
let currentTool = null;
let faqsCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const m = line.match(/^\s{2}"([a-z0-9-]+)":\s*\{/);
  if (m) {
    if (currentTool) {
      tools.push({ id: currentTool, faqs: faqsCount });
    }
    currentTool = m[1];
    faqsCount = 0;
  }
  if (line.includes('{ q:') || line.includes('"q":')) {
    faqsCount++;
  }
}
if (currentTool) {
  tools.push({ id: currentTool, faqs: faqsCount });
}

console.log('Total tools in tools-seo-data:', tools.length);
tools.forEach(t => console.log(`${t.id}: ${t.faqs} FAQs`));
