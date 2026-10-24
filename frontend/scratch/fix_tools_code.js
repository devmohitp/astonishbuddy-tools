const fs = require('fs');

// 1. Fix word-counter
{
  const p = './app/tools/word-counter/page.tsx';
  let c = fs.readFileSync(p, 'utf8');
  c = c.replace(
    'const readingTime = Math.max(1, Math.ceil(words / 200));',
    'const readingTime = words > 0 ? Math.ceil(words / 200) : 0;'
  );
  c = c.replace(
    'const speakingTime = Math.max(1, Math.ceil(words / 130));',
    'const speakingTime = words > 0 ? Math.ceil(words / 130) : 0;'
  );
  c = c.replace(
    'const lines = text.split("\\n").length;',
    'const lines = text.length > 0 ? text.split("\\n").length : 0;'
  );
  fs.writeFileSync(p, c, 'utf8');
  console.log('1. Updated word-counter/page.tsx');
}

// 2. Fix bulk-image-converter
{
  const p = './app/tools/bulk-image-converter/page.tsx';
  let c = fs.readFileSync(p, 'utf8');
  c = c.replace(
    '{ icon: "🖼️", title: "Convert Any Format", desc: "PNG, JPG, WebP, AVIF, BMP, GIF → any format" },',
    '{ icon: "🖼️", title: "Wide Input Support", desc: "Convert PNG, JPG, WebP, AVIF, BMP, GIF to JPG, PNG, or WebP" },'
  );
  c = c.replace(
    '{ icon: "⚡", title: "Fast & Free", desc: "No signup, no watermark, no limits" },',
    '{ icon: "⚡", title: "Fast & Private", desc: "No signup or watermark; client-side browser processing" },'
  );
  fs.writeFileSync(p, c, 'utf8');
  console.log('2. Updated bulk-image-converter/page.tsx');
}

// 3. Fix markdown-converter
{
  const p = './app/tools/markdown-converter/page.tsx';
  let c = fs.readFileSync(p, 'utf8');
  
  // Fix raw \u00B7
  c = c.replace('{input.length} chars \\u00B7{input.split("\\n").length} lines', '{input.length} chars · {input.split("\\n").length} lines');
  c = c.replace('{output.length} chars \\u00B7{output.split("\\n").length} lines', '{output.length} chars · {output.split("\\n").length} lines');

  // Add sanitizeHtml
  if (!c.includes('function sanitizeHtml(')) {
    const sanitizeFn = `
function sanitizeHtml(rawHtml: string): string {
  if (typeof window === "undefined") return rawHtml;
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(rawHtml, "text/html");
    const blockedTags = ["script", "iframe", "object", "embed", "base", "link", "meta", "style", "form", "input", "button"];
    blockedTags.forEach((tag) => {
      doc.querySelectorAll(tag).forEach((el) => el.remove());
    });
    doc.querySelectorAll("*").forEach((el) => {
      const attrs = Array.from(el.attributes);
      for (const attr of attrs) {
        const name = attr.name.toLowerCase();
        const val = attr.value.trim().toLowerCase();
        if (name.startsWith("on") || val.startsWith("javascript:") || val.startsWith("data:text/html")) {
          el.removeAttribute(attr.name);
        }
      }
    });
    return doc.body.innerHTML;
  } catch {
    return rawHtml;
  }
}
`;
    c = c.replace('// ─── Markdown → HTML ───', sanitizeFn + '\n// ─── Markdown → HTML ───');
    c = c.replace(
      'dangerouslySetInnerHTML={{ __html: output }}',
      'dangerouslySetInnerHTML={{ __html: sanitizeHtml(output) }}'
    );
  }

  fs.writeFileSync(p, c, 'utf8');
  console.log('3. Updated markdown-converter/page.tsx');
}

console.log('Done code fixes 1-3');
