"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import CopyButton from "../../components/CopyButton";

export default function TextSorter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handlePaste = () => {
    textareaRef.current?.focus();
    document.execCommand("paste");
  };

  const getLines = () => input.split("\n").filter(line => line !== "");

  const sortAlphabetical = () => setOutput(getLines().sort((a, b) => a.localeCompare(b)).join("\n"));
  const sortReverse = () => setOutput(getLines().sort((a, b) => b.localeCompare(a)).join("\n"));
  const sortLength = () => setOutput(getLines().sort((a, b) => a.length - b.length || a.localeCompare(b)).join("\n"));
  const removeDuplicates = () => setOutput(Array.from(new Set(getLines())).join("\n"));
  const reverseList = () => setOutput(getLines().reverse().join("\n"));
  const shuffleList = () => setOutput(getLines().sort(() => Math.random() - 0.5).join("\n"));

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <div className="page-container">
        <Link href="/" className="back-btn">← Back to Tools</Link>

        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
            <div
              className="tool-header-icon"
              style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: "linear-gradient(135deg, #8b5cf622, #8b5cf644)",
                border: "1px solid #8b5cf633",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px",
              }}
            >🔤</div>
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                Text Sorter
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Sort lines of text alphabetically, by length, reverse, or remove duplicates
              </p>
            </div>
          </div>
        </div>

        <div className="tool-section" style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <span className="label" style={{ margin: 0, fontWeight: 600, color: "var(--text-primary)" }}>Input Text (One item per line)</span>
            <div style={{ display: "flex", gap: "8px" }}>
              <button className="btn-secondary" style={{ padding: "6px 12px", fontSize: "12px" }} onClick={handlePaste}>📋 Paste</button>
              <button className="btn-secondary" style={{ padding: "6px 12px", fontSize: "12px" }} onClick={() => {setInput(""); setOutput("");}}>Clear</button>
            </div>
          </div>
          <textarea
            ref={textareaRef}
            className="input-field"
            placeholder="Line 1&#10;Line 2&#10;Line 3..."
            style={{ width: "100%", minHeight: "150px", fontFamily: "inherit", fontSize: "15px", lineHeight: "1.8", marginBottom: "16px", padding: "16px", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text-primary)", resize: "vertical" }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onPaste={(e) => {
              e.preventDefault();
              const text = e.clipboardData.getData("text");
              setInput(text);
            }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }} className="sorter-btn-grid">
            <button style={btnStyle} onClick={sortAlphabetical}>A ➔ Z</button>
            <button style={btnStyle} onClick={sortReverse}>Z ➔ A</button>
            <button style={btnStyle} onClick={sortLength}>Sort by Length</button>
            <button style={btnStyle} onClick={removeDuplicates}>Remove Duplicates</button>
            <button style={btnStyle} onClick={reverseList}>Reverse Order</button>
            <button style={btnStyle} onClick={shuffleList}>Shuffle List</button>
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
              style={{ width: "100%", minHeight: "150px", fontFamily: "inherit", fontSize: "15px", lineHeight: "1.8", background: "var(--bg-primary)", border: "1px solid var(--border)", padding: "16px", borderRadius: "12px", color: "var(--text-primary)", resize: "vertical" }}
            />
          </div>
        )}
      </div>
    </main>
  );
}

const btnStyle = {
  flex: "1 0 calc(33.333% - 10px)",
  padding: "10px", 
  background: "var(--bg-card)", 
  color: "var(--text-primary)", 
  border: "1px solid #8b5cf6", 
  borderRadius: "8px", 
  cursor: "pointer", 
  fontWeight: 600,
  fontSize: "14px",
  transition: "all 0.2s"
};
