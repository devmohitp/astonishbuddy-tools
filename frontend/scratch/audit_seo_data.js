const fs = require('fs');

const content = fs.readFileSync('./app/data/tools-seo-data.tsx', 'utf8');

// List of tools
const toolList = [
  "image-compressor",
  "text-case-converter",
  "password-generator",
  "json-formatter",
  "word-counter",
  "qr-generator",
  "base64-converter",
  "url-converter",
  "lorem-ipsum-generator",
  "random-number-generator",
  "text-sorter",
  "color-converter",
  "bulk-qrcode-generator",
  "pdf-compressor",
  "image-quality-enhancer",
  "bulk-image-converter",
  "sql-formatter",
  "uuid-generator",
  "markdown-converter",
  "diff-checker",
  "jwt-decoder",
  "ai-image-extender",
  "image-background-extender"
];

for (const t of toolList) {
  const startIdx = content.indexOf(`"${t}": {`);
  if (startIdx === -1) {
    console.log(`MISSING: ${t}`);
    continue;
  }
  // Find where this tool ends or next tool starts
  const nextIdx = content.indexOf(`\n  "`, startIdx + 10);
  const chunk = nextIdx === -1 ? content.slice(startIdx) : content.slice(startIdx, nextIdx);
  
  // Count words roughly (strip tags)
  const plainText = chunk.replace(/<[^>]+>/g, ' ').replace(/[{}\[\]",:]/g, ' ');
  const words = plainText.split(/\s+/).filter(w => w.length > 0).length;

  // Count FAQs
  const faqs = (chunk.match(/\{[\s\n]*["']?q["']?:/g) || []).length;
  console.log(`${t}: ~${words} words, ${faqs} FAQs`);
}
