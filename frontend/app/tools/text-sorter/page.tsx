"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import CopyButton from "../../components/CopyButton";
import RelatedTools from "../../components/RelatedTools";
import ToolSEO from "../../components/ToolSEO";

export default function TextSorter() {
  const [input, setInput] = useState("");
  const [originalInput, setOriginalInput] = useState("");
  const [mode, setMode] = useState<"lines" | "words">("lines");
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

  const transform = (fn: (items: string[]) => string[]) => {
    if (!input.trim()) return;

    // Save original for undo if not already saved
    if (!originalInput) setOriginalInput(input);

    const separator = mode === "lines" ? "\n" : " ";
    const items = input.split(mode === "lines" ? /\r?\n/ : /\s+/).filter(i => i.trim() !== "");
    const processed = fn(items);
    setInput(processed.join(separator));
  };

  const sortAZ = () => transform(items => [...items].sort((a, b) => a.localeCompare(b)));
  const sortZA = () => transform(items => [...items].sort((a, b) => b.localeCompare(a)));
  const sortLength = () => transform(items => [...items].sort((a, b) => a.length - b.length || a.localeCompare(b)));
  const removeDuplicates = () => transform(items => Array.from(new Set(items)));
  const reverseList = () => transform(items => [...items].reverse());
  const shuffleList = () => transform(items => {
    const arr = [...items];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  });

  const handleRestore = () => {
    if (originalInput) {
      setInput(originalInput);
      setOriginalInput("");
    }
  };

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <div className="page-container">
        <Link href="/" className="back-btn">← Back to Tools</Link>

        <div style={{ marginBottom: "32px" }}>
          <div className="icon-bounce" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
            <div
              style={{
                width: "56px", height: "56px", borderRadius: "16px",
                background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px",
                boxShadow: "0 8px 20px rgba(108, 99, 255, 0.2)",
              }}
            >🔤</div>
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                Text Sorter Online (Sort Text Alphabetically A-Z, Z-A)
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Sort, shuffle, and clean your text by lines or words
              </p>
            </div>
          </div>
        </div>

        <div className="tool-section" style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                className={mode === "lines" ? "stat-badge info" : "stat-badge"}
                style={{ cursor: "pointer", border: mode === "lines" ? "1px solid var(--accent-1)" : "1px solid var(--border)" }}
                onClick={() => setMode("lines")}
              >
                Line Mode
              </button>
              <button
                className={mode === "words" ? "stat-badge info" : "stat-badge"}
                style={{ cursor: "pointer", border: mode === "words" ? "1px solid var(--accent-1)" : "1px solid var(--border)" }}
                onClick={() => setMode("words")}
              >
                Word Mode
              </button>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button className="btn-secondary" style={{ padding: "6px 12px", fontSize: "12px" }} onClick={handlePaste}>📋 Paste</button>
              <button className="btn-secondary" style={{ padding: "6px 12px", fontSize: "12px" }} onClick={() => { setInput(""); setOriginalInput(""); }}>Clear</button>
            </div>
          </div>

          <textarea
            ref={textareaRef}
            className="input-field"
            placeholder={mode === "lines" ? "Line 1\nLine 2\nLine 3..." : "Word1 Word2 Word3..."}
            style={{ width: "100%", minHeight: "250px", fontFamily: "inherit", fontSize: "15px", lineHeight: "1.8", marginBottom: "20px", resize: "vertical" }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px" }}>
            <button className="btn-secondary" style={{ justifyContent: "center" }} onClick={sortAZ}>A ➔ Z</button>
            <button className="btn-secondary" style={{ justifyContent: "center" }} onClick={sortZA}>Z ➔ A</button>
            <button className="btn-secondary" style={{ justifyContent: "center" }} onClick={sortLength}>By Length</button>
            <button className="btn-secondary" style={{ justifyContent: "center" }} onClick={removeDuplicates}>No Duplicates</button>
            <button className="btn-secondary" style={{ justifyContent: "center" }} onClick={reverseList}>Reverse List</button>
            <button className="btn-secondary" style={{ justifyContent: "center" }} onClick={shuffleList}>Shuffle</button>
          </div>

          <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
            <div style={{ display: "flex", gap: "12px" }}>
              <CopyButton textToCopy={input} />
              {originalInput && (
                <button
                  className="btn-secondary"
                  style={{ background: "rgba(245, 158, 11, 0.1)", color: "#f59e0b", borderColor: "rgba(245, 158, 11, 0.2)" }}
                  onClick={handleRestore}
                >
                  ↩️ Undo Changes
                </button>
              )}
            </div>
            <div style={{ color: "var(--text-muted)", fontSize: "12px", fontWeight: 500 }}>
              {mode === "lines" ? `${input.split("\n").filter(l => l.trim()).length} lines` : `${input.split(/\s+/).filter(w => w.trim()).length} words`}
            </div>
          </div>
        </div>

        {/* Instructions/Tips Section */}
        <div style={{ padding: "16px", borderRadius: "12px", background: "var(--bg-secondary)", border: "1px solid var(--border)", color: "var(--text-secondary)", fontSize: "13px" }}>
          <p><strong>💡 Tip:</strong> Switch between <strong>Line Mode</strong> and <strong>Word Mode</strong> based on how your text is structured. Changes are applied instantly to the text area.</p>
        </div>
        <ToolSEO toolId="text-sorter" />
        <RelatedTools tools={[
          { href: "/tools/word-counter", label: "Word Counter", icon: "📊", desc: "Count words, chars, reading time" },
          { href: "/tools/text-case-converter", label: "Text Case Converter", icon: "🔡", desc: "Convert text to any letter case" },
          { href: "/tools/lorem-ipsum-generator", label: "Lorem Ipsum Generator", icon: "📄", desc: "Generate dummy text for designs" },
          { href: "/tools/json-formatter", label: "JSON Formatter", icon: "{ }", desc: "Format & validate JSON data" },
        ]} />
      </div>
    </main>
  );
}
