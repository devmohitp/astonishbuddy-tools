"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import CopyButton from "../../components/CopyButton";
import RelatedTools from "../../components/RelatedTools";
import ToolSEO from "../../components/ToolSEO";

const conversions = [
  { id: "uppercase", label: "UPPERCASE", convert: (t: string) => t.toUpperCase() },
  { id: "lowercase", label: "lowercase", convert: (t: string) => t.toLowerCase() },
  { id: "title", label: "Title Case", convert: (t: string) => t.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()) },
  { id: "sentence", label: "Sentence case", convert: (t: string) => t.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase()) },
  { id: "camel", label: "camelCase", convert: (t: string) => t.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()) },
  { id: "pascal", label: "PascalCase", convert: (t: string) => t.toLowerCase().replace(/(^|\s|[^a-zA-Z0-9])\w/g, (c) => c.toUpperCase()).replace(/\s+/g, "") },
  { id: "snake", label: "snake_case", convert: (t: string) => t.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "") },
  { id: "kebab", label: "kebab-case", convert: (t: string) => t.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") },
  { id: "constant", label: "CONSTANT_CASE", convert: (t: string) => t.toUpperCase().replace(/\s+/g, "_").replace(/[^A-Z0-9_]/g, "") },
  { id: "inverse", label: "iNVERSE cASE", convert: (t: string) => t.split("").map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())).join("") },
  { id: "alternating", label: "aLtErNaTiNg", convert: (t: string) => t.split("").map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join("") },
];

export default function TextCaseConverter() {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInput((prev) => prev + text);
      textareaRef.current?.focus();
    } catch (err) {
      console.error("Failed to read clipboard:", err);
    }
  };


  const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0;
  const charCount = input.length;

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <div className="page-container">
        <Link href="/" className="back-btn">← Back to Tools</Link>

        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
            <div
              style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: "linear-gradient(135deg, #a855f722, #a855f744)",
                border: "1px solid #a855f733",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px",
              }}
            >🔤</div>
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                Text Case Converter
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Convert text to any case format instantly
              </p>
            </div>
          </div>
        </div>

        <div className="tool-section" style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <span className="label" style={{ margin: 0 }}>Input Text</span>
            <div style={{ display: "flex", gap: "10px" }}>
              <span className="stat-badge info">📝 {wordCount} words</span>
              <span className="stat-badge info">🔤 {charCount} chars</span>
            </div>
          </div>
          <textarea
            ref={textareaRef}
            className="input-field"
            placeholder="Type or paste your text here..."
            style={{ minHeight: "150px", fontFamily: "inherit" }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
            <button
              className="btn-secondary"
              style={{ fontSize: "13px", padding: "8px 14px" }}
              onClick={handlePaste}
            >
              📋 Paste
            </button>
            <button
              className="btn-secondary"
              style={{ fontSize: "13px", padding: "8px 14px" }}
              onClick={() => setInput("")}
            >
              🗑️ Clear
            </button>
          </div>
        </div>

        {input && (
          <div className="animate-fade-in">
            <h3 style={{ color: "var(--text-secondary)", fontSize: "13px", fontWeight: 600, marginBottom: "14px", letterSpacing: "1px", textTransform: "uppercase" }}>
              Converted Formats
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {conversions.map((conv) => {
                const converted = conv.convert(input);
                return (
                  <div
                    key={conv.id}
                    className="glass-card flex-responsive"
                    style={{ padding: "clamp(12px, 4vw, 18px) clamp(14px, 5vw, 20px)" }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, marginBottom: "4px", letterSpacing: "0.5px" }}>
                        {conv.label}
                      </div>
                      <div style={{ fontSize: "15px", color: "var(--text-primary)", fontFamily: "monospace", wordBreak: "break-all" }}>
                        {converted}
                      </div>
                    </div>
                    <CopyButton textToCopy={converted} style={{ padding: "8px 16px", fontSize: "13px", flexShrink: 0 }} />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {!input && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-muted)" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔤</div>
            <p>Enter some text above to see all conversion formats</p>
          </div>
        )}
        <ToolSEO toolId="text-case-converter" />
        <RelatedTools tools={[
          { href: "/tools/word-counter", label: "Word Counter", icon: "📊", desc: "Count words, chars, reading time" },
          { href: "/tools/text-sorter", label: "Text Sorter", icon: "📋", desc: "Sort and de-duplicate lines of text" },
          { href: "/tools/lorem-ipsum-generator", label: "Lorem Ipsum Generator", icon: "📄", desc: "Generate placeholder text" },
          { href: "/tools/base64-converter", label: "Base64 Encoder", icon: "🔄", desc: "Encode/decode Base64 strings" },
        ]} />
      </div>
    </main>
  );
}
