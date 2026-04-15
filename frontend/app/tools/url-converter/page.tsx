"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import CopyButton from "../../components/CopyButton";
import RelatedTools from "../../components/RelatedTools";

export default function UrlConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
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

  const handleEncode = () => {
    try {
      setOutput(encodeURIComponent(input));
    } catch (e) {
      setOutput("Error encoding URL.");
    }
  };

  const handleDecode = () => {
    try {
      setOutput(decodeURIComponent(input));
    } catch (e) {
      setOutput("Error decoding URL. Ensure it is a valid encoded string.");
    }
  };

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <div className="page-container">
        <Link href="/" className="back-btn">← Back to Tools</Link>

        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
            <div
              style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: "linear-gradient(135deg, #3b82f622, #3b82f644)",
                border: "1px solid #3b82f633",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px",
              }}
            >🔗</div>
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                URL Encoder / Decoder
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Encode text for use in URLs or decode URL-encoded text
              </p>
            </div>
          </div>
        </div>

        <div className="tool-section" style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <span className="label" style={{ margin: 0, fontWeight: 600, color: "var(--text-primary)" }}>Input Text</span>
            <div style={{ display: "flex", gap: "8px" }}>
              <button className="btn-secondary" style={{ padding: "6px 12px", fontSize: "12px" }} onClick={handlePaste}>📋 Paste</button>
              <button className="btn-secondary" style={{ padding: "6px 12px", fontSize: "12px" }} onClick={() => {setInput(""); setOutput("");}}>Clear</button>
            </div>
          </div>
          <textarea
            ref={textareaRef}
            className="input-field"
            placeholder="Type or paste text/URL here..."
            style={{ width: "100%", minHeight: "150px", fontFamily: "inherit", fontSize: "15px", lineHeight: "1.8", marginBottom: "16px", padding: "16px", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text-primary)" }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={{ flex: 1, padding: "12px", background: "#3b82f6", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: 600 }} onClick={handleEncode}>
              Encode URL
            </button>
            <button style={{ flex: 1, padding: "12px", background: "var(--bg-card)", color: "var(--text-primary)", border: "1px solid var(--border)", borderRadius: "8px", cursor: "pointer", fontWeight: 600 }} onClick={handleDecode}>
              Decode URL
            </button>
          </div>
        </div>

        {output && (
          <div className="tool-section animate-fade-in" style={{ padding: "20px", background: "var(--bg-card)", borderRadius: "16px", border: "1px solid var(--border)" }}>
             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span className="label" style={{ margin: 0, fontWeight: 600, color: "var(--text-primary)" }}>Output</span>
              <CopyButton textToCopy={output} style={{ padding: "6px 12px", fontSize: "12px" }} />
            </div>
            <textarea
              readOnly
              value={output}
              style={{ width: "100%", minHeight: "150px", fontFamily: "inherit", fontSize: "15px", lineHeight: "1.8", background: "var(--bg-primary)", border: "1px solid var(--border)", padding: "16px", borderRadius: "12px", color: "var(--text-primary)", resize: "none" }}
            />
          </div>
        )}
        <RelatedTools tools={[
          { href: "/tools/base64-converter", label: "Base64 Encoder", icon: "🔄", desc: "Encode/decode Base64 strings" },
          { href: "/tools/json-formatter", label: "JSON Formatter", icon: "{ }", desc: "Format & validate JSON" },
          { href: "/tools/word-counter", label: "Word Counter", icon: "📊", desc: "Count words, chars, reading time" },
          { href: "/tools/text-case-converter", label: "Text Case Converter", icon: "🔡", desc: "Convert text casing instantly" },
        ]} />
      </div>
    </main>
  );
}
