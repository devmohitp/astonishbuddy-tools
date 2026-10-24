// scratch/compile_seo_data.js
const fs = require('fs');
const path = require('path');
const { part1, part2 } = require('./build_clean_parts.js');
const p3 = require('./parts/part3.js');
const p4 = require('./parts/part4.js');

const combined = {};

function addTools(source) {
  for (const [key, tool] of Object.entries(source)) {
    const id = tool.id || key;
    const name = tool.name || tool.title.split('—')[0].trim();
    const shortIntro = tool.shortIntro || tool.intro;
    const features = tool.features || [];
    const steps = tool.steps || [];
    const examples = tool.examples || [];
    const mistakes = tool.mistakes || [];
    const privacy = tool.privacy || '';
    const faqs = (tool.faqs || []).map(f => ({
      q: f.q || f.question,
      a: f.a || f.answer
    }));
    const keywords = tool.keywords || [name.toLowerCase(), id.replace(/-/g, ' ')];

    combined[id] = { id, name, shortIntro, features, steps, examples, mistakes, privacy, faqs, keywords };
  }
}

addTools(part1);
addTools(part2);
addTools(p3);
addTools(p4);
combined['ai-image-extender'] = { ...combined['image-background-extender'], id: 'ai-image-extender' };

let code = 'import React from "react";\n\n' +
  'export interface FAQ {\n' +
  '  q: string;\n' +
  '  a: string;\n' +
  '}\n\n' +
  'export interface ToolSEOData {\n' +
  '  id: string;\n' +
  '  name: string;\n' +
  '  shortIntro: string;\n' +
  '  guideContent: React.ReactNode;\n' +
  '  faqs: FAQ[];\n' +
  '  keywords: string[];\n' +
  '}\n\n' +
  'export const toolsSEOData: Record<string, ToolSEOData> = {\n';

for (const [id, t] of Object.entries(combined)) {
  code += '  ' + JSON.stringify(id) + ': {\n';
  code += '    id: ' + JSON.stringify(t.id) + ',\n';
  code += '    name: ' + JSON.stringify(t.name) + ',\n';
  code += '    shortIntro: ' + JSON.stringify(t.shortIntro) + ',\n';
  code += '    keywords: ' + JSON.stringify(t.keywords) + ',\n';
  code += '    faqs: [\n';
  for (const f of t.faqs) {
    code += '      { q: ' + JSON.stringify(f.q) + ', a: ' + JSON.stringify(f.a) + ' },\n';
  }
  code += '    ],\n';
  code += '    guideContent: (\n';
  code += '      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>\n';
  code += '        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>\n';
  code += '          Key Features &amp; Technical Capabilities\n';
  code += '        </h3>\n';
  code += '        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>\n';
  for (const feat of t.features) {
    code += '          <li style={{ marginBottom: "8px" }}>{' + JSON.stringify(feat) + '}</li>\n';
  }
  code += '        </ul>\n\n';
  code += '        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>\n';
  code += '          Step-by-Step Usage Guide\n';
  code += '        </h3>\n';
  code += '        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>\n';
  for (const s of t.steps) {
    code += '          <li style={{ marginBottom: "8px" }}>{' + JSON.stringify(s) + '}</li>\n';
  }
  code += '        </ol>\n\n';
  code += '        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>\n';
  code += '          Verified Worked Examples\n';
  code += '        </h3>\n';
  code += '        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>\n';
  for (const ex of t.examples) {
    code += '          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>\n';
    code += '            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{' + JSON.stringify(ex.title) + '}</h4>\n';
    code += '            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{' + JSON.stringify(ex.input) + '}</code></div>\n';
    code += '            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{' + JSON.stringify(ex.output) + '}</pre></div>\n';
    code += '          </div>\n';
  }
  code += '        </div>\n\n';
  code += '        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>\n';
  code += '          Common Mistakes to Avoid\n';
  code += '        </h3>\n';
  code += '        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>\n';
  for (const m of t.mistakes) {
    code += '          <li style={{ marginBottom: "8px" }}>{' + JSON.stringify(m) + '}</li>\n';
  }
  code += '        </ul>\n\n';
  code += '        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>\n';
  code += '          Client-Side Security &amp; Privacy Guarantee\n';
  code += '        </h3>\n';
  code += '        <p style={{ marginBottom: "20px" }}>\n';
  code += '          {' + JSON.stringify(t.privacy) + '}\n';
  code += '        </p>\n';
  code += '      </div>\n';
  code += '    ),\n';
  code += '  },\n';
}

code += '};\n';

fs.writeFileSync(path.join(__dirname, '../app/data/tools-seo-data.tsx'), code, 'utf8');
console.log('Successfully re-compiled app/data/tools-seo-data.tsx (' + code.length + ' chars)');
