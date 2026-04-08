"use client";
import { useState, useRef } from "react";
import Link from "next/link";

function analyze(text: string) {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, "").length;
  const sentences = text.trim() ? (text.match(/[.!?]+/g) || []).length || 1 : 0;
  const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter((p) => p.trim()).length : 0;
  const lines = text.split("\n").length;
  const readingTime = Math.max(1, Math.ceil(words / 200));
  const speakingTime = Math.max(1, Math.ceil(words / 130));

  // Top 5 most frequent words
  const wordFreq: Record<string, number> = {};
  text.toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 3)
    .forEach((w) => { wordFreq[w] = (wordFreq[w] || 0) + 1; });
  const topWords = Object.entries(wordFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return { words, chars, charsNoSpaces, sentences, paragraphs, lines, readingTime, speakingTime, topWords };
}

export default function WordCounter() {
  const [text, setText] = useState("");
  const stats = analyze(text);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setText((prev) => prev + text);
      textareaRef.current?.focus();
    } catch (err) {
      console.error("Failed to read clipboard:", err);
    }
  };

  const statItems = [
    { label: "Words", value: stats.words, icon: "📝", color: "#10b981" },
    { label: "Characters", value: stats.chars, icon: "🔤", color: "#6c63ff" },
    { label: "Chars (no spaces)", value: stats.charsNoSpaces, icon: "✂️", color: "#a855f7" },
    { label: "Sentences", value: stats.sentences, icon: ".", color: "#06b6d4" },
    { label: "Paragraphs", value: stats.paragraphs, icon: "¶", color: "#ec4899" },
    { label: "Lines", value: stats.lines, icon: "↕", color: "#f59e0b" },
    { label: "Reading Time", value: `~${stats.readingTime} min`, icon: "👁️", color: "#10b981" },
    { label: "Speaking Time", value: `~${stats.speakingTime} min`, icon: "🎙️", color: "#6c63ff" },
  ];

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
                background: "linear-gradient(135deg, #10b98122, #10b98144)",
                border: "1px solid #10b98133",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px",
              }}
            >📊</div>
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                Word Counter
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Count words, characters, sentences, and estimate reading time
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ gap: "12px", marginBottom: "20px" }} className="stat-grid-4">
          {statItems.map((s) => (
            <div
              key={s.label}
              style={{
                padding: "16px 14px",
                borderRadius: "14px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "10px", color: "var(--text-muted)", fontWeight: 600, marginBottom: "6px", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                {s.label}
              </div>
              <div style={{ fontSize: "22px", fontWeight: 800, color: s.color }}>
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* Text Input */}
        <div className="tool-section" style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <span className="label" style={{ margin: 0 }}>Your Text</span>
            <div style={{ display: "flex", gap: "8px" }}>
              <button className="btn-secondary" style={{ padding: "6px 12px", fontSize: "12px" }} onClick={handlePaste}>📋 Paste</button>
              <button className="btn-secondary" style={{ padding: "6px 12px", fontSize: "12px" }} onClick={() => setText("")}>Clear</button>
            </div>
          </div>
          <textarea
            ref={textareaRef}
            className="input-field"
            placeholder="Start typing or paste your text here..."
            style={{ minHeight: "300px", fontFamily: "inherit", fontSize: "15px", lineHeight: "1.8" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* Top Words */}
        {stats.topWords.length > 0 && (
          <div className="tool-section animate-fade-in">
            <h3 style={{ color: "var(--text-primary)", marginBottom: "16px", fontSize: "15px" }}>
              Most Frequent Words
            </h3>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {stats.topWords.map(([word, count], i) => (
                <div
                  key={word}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "100px",
                    background: `rgba(${i === 0 ? "108,99,255" : i === 1 ? "168,85,247" : i === 2 ? "236,72,153" : i === 3 ? "6,182,212" : "16,185,129"},0.15)`,
                    border: `1px solid rgba(${i === 0 ? "108,99,255" : i === 1 ? "168,85,247" : i === 2 ? "236,72,153" : i === 3 ? "6,182,212" : "16,185,129"},0.3)`,
                    fontSize: "14px",
                    fontWeight: 600,
                    color: ["#818cf8", "#c084fc", "#f472b6", "#22d3ee", "#34d399"][i],
                  }}
                >
                  &quot;{word}&quot;
                  <span style={{ marginLeft: "8px", opacity: 0.7 }}>×{count}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
