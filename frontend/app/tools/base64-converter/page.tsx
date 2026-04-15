"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import CopyButton from "../../components/CopyButton";
import RelatedTools from "../../components/RelatedTools";

export default function Base64Converter() {
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
      setOutput(btoa(input));
    } catch (e) {
      setOutput("Error: Invalid characters for Base64 encoding. Ensure input is valid text.");
    }
  };

  const handleDecode = () => {
    try {
      setOutput(atob(input));
    } catch (e) {
      setOutput("Error: Invalid Base64 string.");
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
                background: "linear-gradient(135deg, #06b6d422, #06b6d444)",
                border: "1px solid #06b6d433",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px",
              }}
            >🔄</div>
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                Base64 Encoder / Decoder
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Encode text to Base64 format or decode from Base64
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
            placeholder="Type or paste text here..."
            style={{ width: "100%", minHeight: "150px", fontFamily: "inherit", fontSize: "15px", lineHeight: "1.8", marginBottom: "16px", padding: "16px", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text-primary)" }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={{ flex: 1, padding: "12px", background: "#06b6d4", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: 600 }} onClick={handleEncode}>
              Encode to Base64
            </button>
            <button style={{ flex: 1, padding: "12px", background: "var(--bg-card)", color: "var(--text-primary)", border: "1px solid var(--border)", borderRadius: "8px", cursor: "pointer", fontWeight: 600 }} onClick={handleDecode}>
              Decode from Base64
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
          { href: "/tools/url-converter", label: "URL Encoder", icon: "🔗", desc: "Encode/decode URL special characters" },
          { href: "/tools/json-formatter", label: "JSON Formatter", icon: "{ }", desc: "Format & validate JSON" },
          { href: "/tools/word-counter", label: "Word Counter", icon: "📊", desc: "Count words, chars, reading time" },
          { href: "/tools/text-case-converter", label: "Text Case Converter", icon: "🔡", desc: "Convert text casing instantly" },
        ]} />
      </div>
    </main>
  );
}
