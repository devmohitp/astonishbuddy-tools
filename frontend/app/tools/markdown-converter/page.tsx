"use client";
import * as Lucide from "lucide-react";
import { useState, useCallback, useRef, useEffect } from "react";
import BackToTools from "../../components/BackToTools";
import dynamic from "next/dynamic";

const RelatedTools = dynamic(() => import("../../components/RelatedTools"));
const ToolSEO = dynamic(() => import("../../components/ToolSEO"));
const CopyButton = dynamic(() => import("../../components/CopyButton"));

// ─── Markdown → HTML ──────────────────────────────────────────────────────────

function mdToHtml(md: string): string {
  let html = md;

  // Preserve code blocks first (fenced)
  const codeBlocks: string[] = [];
  html = html.replace(/```(\w*)\n?([\s\S]*?)```/g, (_m, lang, code) => {
    const idx = codeBlocks.length;
    codeBlocks.push(
      `<pre><code${lang ? ` class="language-${lang}"` : ""}>${escapeHtml(code.trim())}</code></pre>`
    );
    return `\x00CODE${idx}\x00`;
  });

  // Inline code
  const inlineCodes: string[] = [];
  html = html.replace(/`([^`]+)`/g, (_m, code) => {
    const idx = inlineCodes.length;
    inlineCodes.push(`<code>${escapeHtml(code)}</code>`);
    return `\x00INLINE${idx}\x00`;
  });

  // Headings
  html = html.replace(/^(#{1,6})\s+(.+)$/gm, (_m, hashes, text) => {
    const level = hashes.length;
    return `<h${level}>${text.trim()}</h${level}>`;
  });

  // Horizontal rule
  html = html.replace(/^[-*_]{3,}\s*$/gm, "<hr />");

  // Blockquotes
  html = html.replace(/^>\s?(.*)$/gm, "<blockquote>$1</blockquote>");
  // Merge consecutive blockquotes
  html = html.replace(/<\/blockquote>\n<blockquote>/g, "\n");

  // Unordered lists
  html = html.replace(/((?:^[-*+]\s+.+\n?)+)/gm, (block) => {
    const items = block
      .trim()
      .split("\n")
      .map((line) => `<li>${line.replace(/^[-*+]\s+/, "")}</li>`)
      .join("\n");
    return `<ul>\n${items}\n</ul>`;
  });

  // Ordered lists
  html = html.replace(/((?:^\d+\.\s+.+\n?)+)/gm, (block) => {
    const items = block
      .trim()
      .split("\n")
      .map((line) => `<li>${line.replace(/^\d+\.\s+/, "")}</li>`)
      .join("\n");
    return `<ol>\n${items}\n</ol>`;
  });

  // Bold + Italic (***text***)
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/___(.+?)___/g, "<strong><em>$1</em></strong>");

  // Bold (**text** or __text__)
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__(.+?)__/g, "<strong>$1</strong>");

  // Italic (*text* or _text_)
  html = html.replace(/\*([^*\n]+?)\*/g, "<em>$1</em>");
  html = html.replace(/_([^_\n]+?)_/g, "<em>$1</em>");

  // Strikethrough
  html = html.replace(/~~(.+?)~~/g, "<del>$1</del>");

  // Images (before links)
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  // Tables
  html = html.replace(/((?:^\|.+\|\n)+)/gm, (tableBlock) => {
    const rows = tableBlock.trim().split("\n");
    if (rows.length < 2) return tableBlock;
    const headerRow = rows[0];
    const isSeparator = (r: string) => /^\|[-| :]+\|$/.test(r.trim());

    // Find separator row
    const sepIdx = rows.findIndex(isSeparator);
    if (sepIdx === -1) return tableBlock;

    const parseCells = (row: string) =>
      row
        .replace(/^\||\|$/g, "")
        .split("|")
        .map((c) => c.trim());

    const headers = parseCells(rows[0]);
    const bodyRows = rows.slice(sepIdx + 1);

    const thead =
      "<thead><tr>" +
      headers.map((h) => `<th>${h}</th>`).join("") +
      "</tr></thead>";
    const tbody =
      "<tbody>" +
      bodyRows
        .map((r) => "<tr>" + parseCells(r).map((c) => `<td>${c}</td>`).join("") + "</tr>")
        .join("") +
      "</tbody>";

    return `<table>\n${thead}\n${tbody}\n</table>`;
  });

  // Paragraphs \u2014wrap isolated lines not already wrapped
  const lines = html.split("\n");
  const result: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) { result.push(""); i++; continue; }

    // Already a block element
    if (
      /^<(h[1-6]|ul|ol|li|pre|blockquote|hr|table|thead|tbody|tr|th|td|div|p)/.test(trimmed) ||
      /\x00CODE\d+\x00/.test(trimmed)
    ) {
      result.push(line);
      i++;
      continue;
    }

    // Collect paragraph lines
    const para: string[] = [trimmed];
    i++;
    while (i < lines.length) {
      const next = lines[i].trim();
      if (
        !next ||
        /^<(h[1-6]|ul|ol|li|pre|blockquote|hr|table)/.test(next) ||
        /\x00CODE\d+\x00/.test(next)
      ) break;
      para.push(next);
      i++;
    }
    result.push(`<p>${para.join(" ")}</p>`);
  }
  html = result.join("\n");

  // Restore code blocks
  codeBlocks.forEach((code, idx) => {
    html = html.replace(`\x00CODE${idx}\x00`, code);
  });
  inlineCodes.forEach((code, idx) => {
    html = html.replace(`\x00INLINE${idx}\x00`, code);
  });

  return html.trim();
}

// ─── HTML → Markdown ──────────────────────────────────────────────────────────

function htmlToMd(html: string): string {
  // Use a DOM parser in browser context
  if (typeof window === "undefined") return html;

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  function nodeToMd(node: Node, opts: { listDepth?: number; ordered?: boolean; idx?: number } = {}): string {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent || "";
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return "";

    const el = node as HTMLElement;
    const tag = el.tagName.toLowerCase();
    const children = () =>
      Array.from(el.childNodes)
        .map((n) => nodeToMd(n, opts))
        .join("");

    switch (tag) {
      case "h1": return `# ${children().trim()}\n\n`;
      case "h2": return `## ${children().trim()}\n\n`;
      case "h3": return `### ${children().trim()}\n\n`;
      case "h4": return `#### ${children().trim()}\n\n`;
      case "h5": return `##### ${children().trim()}\n\n`;
      case "h6": return `###### ${children().trim()}\n\n`;
      case "p": return `${children().trim()}\n\n`;
      case "br": return "\n";
      case "hr": return "---\n\n";
      case "strong":
      case "b": return `**${children()}**`;
      case "em":
      case "i": return `*${children()}*`;
      case "del":
      case "s": return `~~${children()}~~`;
      case "code": {
        const parent = el.parentElement?.tagName.toLowerCase();
        if (parent === "pre") return el.textContent || "";
        return `\`${el.textContent}\``;
      }
      case "pre": {
        const codeEl = el.querySelector("code");
        const lang = codeEl?.className?.replace("language-", "") || "";
        const code = codeEl?.textContent || el.textContent || "";
        return `\`\`\`${lang}\n${code}\n\`\`\`\n\n`;
      }
      case "blockquote":
        return children()
          .trim()
          .split("\n")
          .map((l) => `> ${l}`)
          .join("\n") + "\n\n";
      case "ul": {
        const depth = (opts.listDepth || 0);
        const indent = "  ".repeat(depth);
        return Array.from(el.children)
          .map((li) => `${indent}- ${nodeToMd(li, { listDepth: depth + 1 }).trim()}`)
          .join("\n") + "\n\n";
      }
      case "ol": {
        const depth = (opts.listDepth || 0);
        const indent = "  ".repeat(depth);
        return Array.from(el.children)
          .map((li, i) => `${indent}${i + 1}. ${nodeToMd(li, { listDepth: depth + 1, ordered: true }).trim()}`)
          .join("\n") + "\n\n";
      }
      case "li": return children().trim();
      case "a": {
        const href = el.getAttribute("href") || "";
        return `[${children()}](${href})`;
      }
      case "img": {
        const src = el.getAttribute("src") || "";
        const alt = el.getAttribute("alt") || "";
        return `![${alt}](${src})`;
      }
      case "table": {
        const rows = Array.from(el.querySelectorAll("tr"));
        if (!rows.length) return "";
        const getCells = (row: Element, cellTag: string) =>
          Array.from(row.querySelectorAll(cellTag)).map((c) => (c as HTMLElement).innerText?.trim() || "");
        const headerCells = getCells(rows[0], "th").length
          ? getCells(rows[0], "th")
          : getCells(rows[0], "td");
        const headerRow = `| ${headerCells.join(" | ")} |`;
        const separator = `| ${headerCells.map(() => "---").join(" | ")} |`;
        const bodyRows = rows.slice(1).map((row) => {
          const cells = getCells(row, "td");
          return `| ${cells.join(" | ")} |`;
        });
        return [headerRow, separator, ...bodyRows].join("\n") + "\n\n";
      }
      case "div":
      case "section":
      case "article":
      case "main":
      case "span":
        return children();
      default:
        return children();
    }
  }

  const md = nodeToMd(doc.body);
  return md.replace(/\n{3,}/g, "\n\n").trim();
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const SAMPLE_MARKDOWN = `# Hello, Markdown!

Welcome to the **Markdown ↔ HTML Converter**. This tool converts Markdown to HTML and back instantly.

## Features

- ✅ Live preview as you type
- 🔄 Bidirectional conversion
- 📋 One-click copy
- 🎨 Syntax highlighting

## Code Example

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

## Table

| Feature | Status |
| ------- | ------ |
| Markdown → HTML | ✅ Done |
| HTML → Markdown | ✅ Done |
| Live Preview | ✅ Done |

> **Tip:** Edit either panel and the output updates instantly.

Visit [AstonishBuddy](https://astonishbuddy.com) for more free tools.
`;

type Direction = "md2html" | "html2md";

// ─── Main Component ───────────────────────────────────────────────────────────

export default function MarkdownConverter() {
  const [direction, setDirection] = useState<Direction>("md2html");
  const [input, setInput] = useState(SAMPLE_MARKDOWN);
  const [output, setOutput] = useState("");
  const [showPreview, setShowPreview] = useState(true);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Convert ────────────────────────────────────────────────────────────────

  const convert = useCallback(
    (text: string, dir: Direction) => {
      if (!text.trim()) { setOutput(""); return; }
      try {
        if (dir === "md2html") {
          setOutput(mdToHtml(text));
        } else {
          setOutput(htmlToMd(text));
        }
      } catch {
        setOutput("\u26A0\uFE0F Conversion error. Please check your input.");
      }
    },
    []
  );

  // Live conversion with debounce
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => convert(input, direction), 150);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [input, direction, convert]);

  // Initial sample
  useEffect(() => {
    convert(SAMPLE_MARKDOWN, "md2html");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSwitch = () => {
    const newDir: Direction = direction === "md2html" ? "html2md" : "md2html";
    // Swap: put current output into input
    setInput(output);
    setDirection(newDir);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInput(text);
    } catch { /* clipboard not available */ }
  };

  const inputLabel = direction === "md2html" ? "Markdown Input" : "HTML Input";
  const outputLabel = direction === "md2html" ? "HTML Output" : "Markdown Output";
  const inputPlaceholder =
    direction === "md2html"
      ? "# Heading\n\nType your **Markdown** here…"
      : "<h1>Heading</h1>\n<p>Type your <strong>HTML</strong> here…";

  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <div className="page-container" style={{ maxWidth: "1100px" }}>
        <BackToTools />

        {/* ── Header ── */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
            <div style={{
              width: "52px", height: "52px", borderRadius: "14px",
              background: "linear-gradient(135deg, #f59e0b22, #ec489944)",
              border: "1px solid #f59e0b33",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px",
            }}><Lucide.FileEdit size={24} style={{ color: "#f59e0b22" }} /></div>
            <div>
              <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                Free Markdown ↔ HTML Converter Online
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Convert Markdown to HTML or HTML to Markdown Live preview Copy instantly
              </p>
            </div>
          </div>
        </div>

        {/* ── Direction & Options bar ── */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center",
          marginBottom: "14px", padding: "12px 16px",
          borderRadius: "12px", background: "var(--bg-card)", border: "1px solid var(--border)",
        }}>
          {/* Direction toggle */}
          <div style={{ display: "flex", gap: "6px" }}>
            <button
              onClick={() => { setDirection("md2html"); convert(input, "md2html"); }}
              style={{
                padding: "8px 16px", borderRadius: "10px", fontSize: "13px", fontWeight: 700,
                cursor: "pointer", border: "1px solid", transition: "all 0.2s",
                background: direction === "md2html" ? "rgba(245,158,11,0.2)" : "var(--bg-secondary)",
                borderColor: direction === "md2html" ? "#f59e0b" : "var(--border)",
                color: direction === "md2html" ? "#fbbf24" : "var(--text-secondary)",
              }}
            >
              📝 Markdown → HTML
            </button>
            <button
              onClick={() => { setDirection("html2md"); convert(input, "html2md"); }}
              style={{
                padding: "8px 16px", borderRadius: "10px", fontSize: "13px", fontWeight: 700,
                cursor: "pointer", border: "1px solid", transition: "all 0.2s",
                background: direction === "html2md" ? "rgba(245,158,11,0.2)" : "var(--bg-secondary)",
                borderColor: direction === "html2md" ? "#f59e0b" : "var(--border)",
                color: direction === "html2md" ? "#fbbf24" : "var(--text-secondary)",
              }}
            >
              🌐 HTML → Markdown
            </button>
          </div>

          {/* Swap button */}
          <button
            onClick={handleSwitch}
            title="Swap input/output"
            style={{
              padding: "8px 14px", borderRadius: "10px", fontSize: "13px", fontWeight: 700,
              cursor: "pointer", border: "1px solid var(--border)",
              background: "var(--bg-secondary)", color: "var(--text-secondary)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#f59e0b";
              (e.currentTarget as HTMLButtonElement).style.color = "#fbbf24";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
            }}
          >
            ⇄ Swap
          </button>

          {/* Preview toggle (only for md2html) */}
          {direction === "md2html" && (
            <button
              onClick={() => setShowPreview((v) => !v)}
              style={{
                padding: "8px 14px", borderRadius: "10px", fontSize: "13px", fontWeight: 700,
                cursor: "pointer", border: "1px solid", transition: "all 0.2s", marginLeft: "auto",
                background: showPreview ? "rgba(16,185,129,0.15)" : "var(--bg-secondary)",
                borderColor: showPreview ? "#10b981" : "var(--border)",
                color: showPreview ? "#34d399" : "var(--text-secondary)",
              }}
            >
              {showPreview ? "👁 Preview On" : "👁 Preview Off"}
            </button>
          )}
        </div>

        {/* ── Main editor layout ── */}
        {direction === "md2html" ? (
          /* Markdown → HTML: two panes + optional preview */
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

            {/* Top: input + output */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="json-formatter-grid">

              {/* Input */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span className="label" style={{ margin: 0 }}>📝 {inputLabel}</span>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <button className="btn-secondary" style={{ padding: "5px 10px", fontSize: "12px" }} onClick={handlePaste}><Lucide.Clipboard size={14} style={{ marginRight: "6px" }} />Paste</button>
                    <button className="btn-secondary" style={{ padding: "5px 10px", fontSize: "12px" }} onClick={() => setInput(SAMPLE_MARKDOWN)}>📄 Sample</button>
                    <button className="btn-secondary" style={{ padding: "5px 10px", fontSize: "12px" }} onClick={() => { setInput(""); setOutput(""); }}>Clear</button>
                  </div>
                </div>
                <textarea
                  className="input-field"
                  style={{
                    minHeight: "380px", resize: "vertical",
                    fontFamily: "'Monaco','Cascadia Code','Consolas',monospace",
                    fontSize: "13px", lineHeight: "1.7",
                  }}
                  placeholder={inputPlaceholder}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  spellCheck={false}
                />
                <div style={{ marginTop: "6px", fontSize: "12px", color: "var(--text-muted)" }}>
                  {input.length} chars \u00B7{input.split("\n").length} lines
                </div>
              </div>

              {/* HTML Output */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span className="label" style={{ margin: 0 }}>🌐 {outputLabel}</span>
                  {output && <CopyButton textToCopy={output} style={{ padding: "5px 10px", fontSize: "12px" }} />}
                </div>
                <div
                  className="code-display"
                  style={{ minHeight: "380px", lineHeight: "1.7", fontSize: "13px", whiteSpace: "pre-wrap", overflowY: "auto" }}
                >
                  {output || <span style={{ color: "var(--text-muted)" }}>HTML output will appear here…</span>}
                </div>
                {output && (
                  <div style={{ marginTop: "6px", fontSize: "12px", color: "var(--text-muted)" }}>
                    {output.length} chars \u00B7{output.split("\n").length} lines
                  </div>
                )}
              </div>
            </div>

            {/* Live Preview */}
            {showPreview && output && (
              <div className="animate-fade-in">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span className="label" style={{ margin: 0, color: "#34d399" }}>👁 Live Preview</span>
                  <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>Rendered HTML</span>
                </div>
                <div
                  style={{
                    padding: "24px 28px",
                    borderRadius: "14px",
                    background: "#fff",
                    border: "1px solid var(--border)",
                    color: "#111",
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: "15px",
                    lineHeight: "1.8",
                    minHeight: "200px",
                    overflowX: "auto",
                  }}
                  dangerouslySetInnerHTML={{ __html: output }}
                />
              </div>
            )}
          </div>
        ) : (
          /* HTML → Markdown: two panes */
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="json-formatter-grid">

            {/* HTML Input */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span className="label" style={{ margin: 0 }}>🌐 {inputLabel}</span>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button className="btn-secondary" style={{ padding: "5px 10px", fontSize: "12px" }} onClick={handlePaste}><Lucide.Clipboard size={14} style={{ marginRight: "6px" }} />Paste</button>
                  <button className="btn-secondary" style={{ padding: "5px 10px", fontSize: "12px" }} onClick={() => {
                    setInput("<h1>Hello World</h1>\n<p>This is a <strong>bold</strong> and <em>italic</em> paragraph.</p>\n<ul>\n  <li>Item one</li>\n  <li>Item two</li>\n</ul>\n<blockquote>A blockquote example</blockquote>\n<pre><code>console.log('hello');</code></pre>");
                  }}>📄 Sample</button>
                  <button className="btn-secondary" style={{ padding: "5px 10px", fontSize: "12px" }} onClick={() => { setInput(""); setOutput(""); }}>Clear</button>
                </div>
              </div>
              <textarea
                className="input-field"
                style={{
                  minHeight: "420px", resize: "vertical",
                  fontFamily: "'Monaco','Cascadia Code','Consolas',monospace",
                  fontSize: "13px", lineHeight: "1.7",
                }}
                placeholder={inputPlaceholder}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                spellCheck={false}
              />
            </div>

            {/* Markdown Output */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span className="label" style={{ margin: 0 }}>📝 {outputLabel}</span>
                {output && <CopyButton textToCopy={output} style={{ padding: "5px 10px", fontSize: "12px" }} />}
              </div>
              <textarea
                readOnly
                className="input-field"
                style={{
                  minHeight: "420px", resize: "vertical",
                  fontFamily: "'Monaco','Cascadia Code','Consolas',monospace",
                  fontSize: "13px", lineHeight: "1.7",
                  color: "var(--text-secondary)",
                }}
                value={output}
                placeholder="Markdown output will appear here…"
              />
            </div>
          </div>
        )}

        {/* ── Supported syntax ── */}
        <details style={{ marginTop: "20px" }}>
          <summary style={{
            cursor: "pointer", fontSize: "14px", fontWeight: 600,
            color: "var(--text-secondary)", padding: "12px 0",
            borderBottom: "1px solid var(--border)", userSelect: "none",
          }}>
            📖 Supported Markdown Syntax
          </summary>
          <div style={{
            marginTop: "16px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "12px",
          }}>
            {[
              { syntax: "# H1  ## H2  ### H3", label: "Headings" },
              { syntax: "**bold**  *italic*  ~~strike~~", label: "Inline formatting" },
              { syntax: "***bold italic***", label: "Bold + italic" },
              { syntax: "[text](url)  ![alt](img)", label: "Links & images" },
              { syntax: "- item  1. item", label: "Lists (unordered & ordered)" },
              { syntax: "> quote text", label: "Blockquotes" },
              { syntax: "`inline code`", label: "Inline code" },
              { syntax: "```js\ncode block\n```", label: "Fenced code blocks" },
              { syntax: "| Col | Col |\n| --- | --- |\n| A   | B   |", label: "Tables (GFM)" },
              { syntax: "---", label: "Horizontal rule" },
            ].map((item) => (
              <div key={item.label} style={{
                padding: "12px 14px", borderRadius: "10px",
                background: "var(--bg-secondary)", border: "1px solid var(--border)",
              }}>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.8px", fontWeight: 700 }}>
                  {item.label}
                </p>
                <code style={{ fontSize: "12px", color: "#f59e0b", whiteSpace: "pre" }}>{item.syntax}</code>
              </div>
            ))}
          </div>
        </details>

        <ToolSEO toolId="markdown-converter" />
        <RelatedTools tools={[
          { href: "/tools/json-formatter", label: "JSON Formatter", icon: "{ }", desc: "Format and validate JSON data" },
          { href: "/tools/sql-formatter", label: "SQL Formatter", icon: "Database", desc: "Format and beautify SQL queries" },
          { href: "/tools/word-counter", label: "Word Counter", icon: "FileDigit", desc: "Count words, characters, reading time" },
          { href: "/tools/text-case-converter", label: "Text Case Converter", icon: "Type", desc: "Transform text casing instantly" },
        ]} />
      </div>
    </main>
  );
}

