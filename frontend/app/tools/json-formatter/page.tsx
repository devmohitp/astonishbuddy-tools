"use client";
import { useState } from "react";
import Link from "next/link";
import CopyButton from "../../components/CopyButton";

function formatJSON(raw: string, spaces: number): { result: string; error: string | null } {
  try {
    const parsed = JSON.parse(raw);
    return { result: JSON.stringify(parsed, null, spaces), error: null };
  } catch (e) {
    return { result: "", error: (e as Error).message };
  }
}

function minifyJSON(raw: string): { result: string; error: string | null } {
  try {
    const parsed = JSON.parse(raw);
    return { result: JSON.stringify(parsed), error: null };
  } catch (e) {
    return { result: "", error: (e as Error).message };
  }
}

function colorizeJSON(json: string): string {
  return json
    .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      (match) => {
        if (/^"/.test(match)) {
          if (/:$/.test(match)) return `<span style="color:#79c0ff">${match}</span>`;
          return `<span style="color:#a5d6ff">${match}</span>`;
        } else if (/true|false/.test(match)) {
          return `<span style="color:#ff7b72">${match}</span>`;
        } else if (/null/.test(match)) {
          return `<span style="color:#ffa657">${match}</span>`;
        }
        return `<span style="color:#f2cc60">${match}</span>`;
      })
    .replace(/[{}\[\]]/g, (m) => `<span style="color:#8b949e">${m}</span>`);
}

export default function JSONFormatter() {
  const [input, setInput] = useState("");
  const [spaces, setSpaces] = useState(2);
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleFormat = () => {
    const { result, error } = formatJSON(input, spaces);
    setOutput(result);
    setError(error);
  };

  const handleMinify = () => {
    const { result, error } = minifyJSON(input);
    setOutput(result);
    setError(error);
  };

  const handleValidate = () => {
    const { error } = formatJSON(input, 2);
    if (!error) {
      setError(null);
      setOutput("✅ Valid JSON");
    } else {
      setError(error);
      setOutput("");
    }
  };

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <div className="page-container" style={{ maxWidth: "1000px" }}>
        <Link href="/" className="back-btn">← Back to Tools</Link>

        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
            <div
              style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: "linear-gradient(135deg, #06b6d422, #06b6d444)",
                border: "1px solid #06b6d433",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "20px", fontWeight: 800, color: "#06b6d4",
              }}
            >{"{ }"}</div>
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                JSON Formatter
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Format, validate, and minify JSON data with syntax highlighting
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {/* Input */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span className="label" style={{ margin: 0 }}>Input JSON</span>
              <div style={{ display: "flex", gap: "8px" }}>
                <button className="btn-secondary" style={{ padding: "6px 12px", fontSize: "12px" }} onClick={() => setInput("")}>Clear</button>
                <button className="btn-secondary" style={{ padding: "6px 12px", fontSize: "12px" }} onClick={() => { try { setInput(JSON.stringify(JSON.parse(input))); } catch {} }}>Raw</button>
              </div>
            </div>
            <textarea
              className="input-field"
              placeholder={'{\n  "name": "example",\n  "value": 42\n}'}
              style={{ minHeight: "350px", fontFamily: "monospace", fontSize: "13px" }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          {/* Output */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span className="label" style={{ margin: 0 }}>Output</span>
              {output && !error && (
                <CopyButton textToCopy={output} style={{ padding: "6px 12px", fontSize: "12px" }} />
              )}
            </div>
            {error ? (
              <div
                style={{
                  minHeight: "350px", padding: "16px", borderRadius: "12px",
                  background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)",
                  color: "#f87171", fontSize: "13px", fontFamily: "monospace",
                }}
              >
                ❌ {error}
              </div>
            ) : (
              <div
                className="code-display"
                style={{ minHeight: "350px" }}
                dangerouslySetInnerHTML={{ __html: output ? colorizeJSON(output.replace(/</g, "&lt;").replace(/>/g, "&gt;")) : '<span style="color:var(--text-muted)">Output will appear here...</span>' }}
              />
            )}
          </div>
        </div>

        {/* Controls */}
        <div style={{ marginTop: "16px", display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="label" style={{ margin: 0, fontSize: "13px" }}>Indent:</span>
            {[2, 4].map((s) => (
              <button
                key={s}
                onClick={() => setSpaces(s)}
                style={{
                  padding: "6px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: 600,
                  background: spaces === s ? "#06b6d422" : "var(--bg-card-hover)",
                  border: `1px solid ${spaces === s ? "#06b6d444" : "var(--border)"}`,
                  color: spaces === s ? "#06b6d4" : "var(--text-secondary)",
                  cursor: "pointer",
                }}
              >
                {s} spaces
              </button>
            ))}
          </div>
          <button className="btn-primary" style={{ padding: "10px 20px" }} onClick={handleFormat}>🎨 Format</button>
          <button className="btn-secondary" onClick={handleMinify}>⚡ Minify</button>
          <button className="btn-secondary" onClick={handleValidate}>✅ Validate</button>
        </div>
      </div>
    </main>
  );
}
