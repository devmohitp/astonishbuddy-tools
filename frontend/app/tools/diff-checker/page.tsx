"use client";
import * as Lucide from "lucide-react";
import { useState, useMemo, useRef } from "react";
import BackToTools from "../../components/BackToTools";
import dynamic from "next/dynamic";

const RelatedTools = dynamic(() => import("../../components/RelatedTools"));
const ToolSEO = dynamic(() => import("../../components/ToolSEO"));

// ─── Types ────────────────────────────────────────────────────────────────────

type OpType = "equal" | "insert" | "delete" | "replace";

interface LineDiff {
  type: OpType;
  leftLine: string;   // original (left side)
  rightLine: string;  // modified (right side)
  leftNum: number | null;
  rightNum: number | null;
}

interface WordToken {
  text: string;
  type: "equal" | "insert" | "delete";
}

// ─── LCS helpers ──────────────────────────────────────────────────────────────

/** Compute LCS edit script between two string arrays */
function diffLines(left: string[], right: string[]): LineDiff[] {
  const m = left.length;
  const n = right.length;

  // Build DP table
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (left[i] === right[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  // Backtrack to produce ops
  const ops: LineDiff[] = [];
  let i = 0, j = 0;
  let leftNum = 1, rightNum = 1;

  while (i < m || j < n) {
    if (i < m && j < n && left[i] === right[j]) {
      ops.push({ type: "equal", leftLine: left[i], rightLine: right[j], leftNum: leftNum++, rightNum: rightNum++ });
      i++; j++;
    } else if (j < n && (i >= m || dp[i][j + 1] >= dp[i + 1][j])) {
      ops.push({ type: "insert", leftLine: "", rightLine: right[j], leftNum: null, rightNum: rightNum++ });
      j++;
    } else {
      ops.push({ type: "delete", leftLine: left[i], rightLine: "", leftNum: leftNum++, rightNum: null });
      i++;
    }
  }

  // Merge consecutive delete+insert into replace
  const merged: LineDiff[] = [];
  let k = 0;
  while (k < ops.length) {
    const cur = ops[k];
    const nxt = ops[k + 1];
    if (cur.type === "delete" && nxt && nxt.type === "insert") {
      merged.push({
        type: "replace",
        leftLine: cur.leftLine,
        rightLine: nxt.rightLine,
        leftNum: cur.leftNum,
        rightNum: nxt.rightNum,
      });
      k += 2;
    } else {
      merged.push(cur);
      k++;
    }
  }

  return merged;
}

/** Word-level diff between two strings (for replace lines) */
function diffWords(left: string, right: string): { left: WordToken[]; right: WordToken[] } {
  const lw = tokenizeWords(left);
  const rw = tokenizeWords(right);

  const m = lw.length, n = rw.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (lw[i] === rw[j]) dp[i][j] = 1 + dp[i + 1][j + 1];
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  const leftToks: WordToken[] = [];
  const rightToks: WordToken[] = [];
  let i = 0, j = 0;

  while (i < m || j < n) {
    if (i < m && j < n && lw[i] === rw[j]) {
      leftToks.push({ text: lw[i], type: "equal" });
      rightToks.push({ text: rw[j], type: "equal" });
      i++; j++;
    } else if (j < n && (i >= m || dp[i][j + 1] >= dp[i + 1][j])) {
      rightToks.push({ text: rw[j], type: "insert" });
      j++;
    } else {
      leftToks.push({ text: lw[i], type: "delete" });
      i++;
    }
  }

  return { left: leftToks, right: rightToks };
}

/** Split a string into word + whitespace tokens for a finer diff */
function tokenizeWords(s: string): string[] {
  return s.match(/\S+|\s+/g) || [];
}

// ─── Rendering helpers ────────────────────────────────────────────────────────

function renderWordTokens(tokens: WordToken[], side: "left" | "right"): React.ReactNode[] {
  return tokens.map((t, i) => {
    if (t.type === "equal") {
      return <span key={i}>{t.text}</span>;
    }
    if (side === "left" && t.type === "delete") {
      return (
        <span key={i} style={{ background: "rgba(239,68,68,0.5)", borderRadius: "2px" }}>
          {t.text}
        </span>
      );
    }
    if (side === "right" && t.type === "insert") {
      return (
        <span key={i} style={{ background: "rgba(34,197,94,0.5)", borderRadius: "2px" }}>
          {t.text}
        </span>
      );
    }
    return <span key={i}>{t.text}</span>;
  });
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function computeStats(diffs: LineDiff[]) {
  let added = 0, removed = 0, changed = 0, unchanged = 0;
  for (const d of diffs) {
    if (d.type === "insert") added++;
    else if (d.type === "delete") removed++;
    else if (d.type === "replace") changed++;
    else unchanged++;
  }
  return { added, removed, changed, unchanged };
}

// ─── Sample texts ─────────────────────────────────────────────────────────────

const SAMPLE_LEFT = `function greet(name) {
  const message = "Hello, " + name;
  console.log(message);
  return message;
}

const result = greet("World");
console.log(result);`;

const SAMPLE_RIGHT = `function greet(name, greeting = "Hello") {
  const message = \`\${greeting}, \${name}!\`;
  console.log(message);
  return message;
}

// Call the function
const result = greet("World", "Hi");
console.log("Result:", result);`;

// ─── Main Component ───────────────────────────────────────────────────────────

type ViewMode = "split" | "inline";

export default function DiffChecker() {
  const [leftText, setLeftText] = useState(SAMPLE_LEFT);
  const [rightText, setRightText] = useState(SAMPLE_RIGHT);
  const [viewMode, setViewMode] = useState<ViewMode>("split");
  const [showEqual, setShowEqual] = useState(true);
  const [compared, setCompared] = useState(true); // show diff on mount
  const leftRef = useRef<HTMLTextAreaElement>(null);
  const rightRef = useRef<HTMLTextAreaElement>(null);

  // Compute diff
  const diffs = useMemo(() => {
    if (!compared) return [];
    const left = leftText.split("\n");
    const right = rightText.split("\n");
    return diffLines(left, right);
  }, [leftText, rightText, compared]);

  const stats = useMemo(() => computeStats(diffs), [diffs]);

  const handleCompare = () => setCompared(true);

  const handleSwap = () => {
    setLeftText(rightText);
    setRightText(leftText);
    setCompared(true);
  };

  const handleClear = () => {
    setLeftText("");
    setRightText("");
    setCompared(false);
  };

  // Filter lines for display
  const visibleDiffs = showEqual ? diffs : diffs.filter((d) => d.type !== "equal");

  // ─── Side-by-side view ──────────────────────────────────────────────────────

  function SplitView() {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden" }}>
        {/* Left header */}
        <div style={{
          padding: "10px 14px", background: "rgba(239,68,68,0.1)",
          borderBottom: "1px solid var(--border)", borderRight: "1px solid var(--border)",
          fontSize: "13px", fontWeight: 700, color: "#f87171",
          display: "flex", alignItems: "center", gap: "6px",
        }}>
          <span>📄 Original</span>
          <span style={{ marginLeft: "auto", fontWeight: 400, fontSize: "12px", color: "var(--text-muted)" }}>
            {leftText.split("\n").length} lines
          </span>
        </div>
        <div style={{
          padding: "10px 14px", background: "rgba(34,197,94,0.1)",
          borderBottom: "1px solid var(--border)",
          fontSize: "13px", fontWeight: 700, color: "#4ade80",
          display: "flex", alignItems: "center", gap: "6px",
        }}>
          <span>📄 Modified</span>
          <span style={{ marginLeft: "auto", fontWeight: 400, fontSize: "12px", color: "var(--text-muted)" }}>
            {rightText.split("\n").length} lines
          </span>
        </div>

        {/* Diff rows */}
        <div style={{ gridColumn: "span 2" }}>
          {visibleDiffs.map((d, idx) => {
            const wordDiff = d.type === "replace" ? diffWords(d.leftLine, d.rightLine) : null;

            const leftBg =
              d.type === "delete" || d.type === "replace" ? "rgba(239,68,68,0.12)" :
                d.type === "insert" ? "rgba(0,0,0,0)" : "transparent";
            const rightBg =
              d.type === "insert" || d.type === "replace" ? "rgba(34,197,94,0.12)" :
                d.type === "delete" ? "rgba(0,0,0,0)" : "transparent";

            const leftBorder =
              d.type === "delete" || d.type === "replace" ? "3px solid #ef4444" :
                d.type === "insert" ? "3px solid transparent" : "3px solid transparent";
            const rightBorder =
              d.type === "insert" || d.type === "replace" ? "3px solid #22c55e" :
                d.type === "delete" ? "3px solid transparent" : "3px solid transparent";

            return (
              <div key={idx} style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                {/* Left cell */}
                <div style={{
                  display: "flex", alignItems: "flex-start",
                  borderRight: "1px solid var(--border)",
                  borderTop: idx > 0 ? "1px solid var(--border)" : "none",
                  background: leftBg,
                  borderLeft: leftBorder,
                  minHeight: "28px",
                }}>
                  <span style={{
                    minWidth: "44px", padding: "4px 8px",
                    fontSize: "11px", color: "var(--text-muted)",
                    userSelect: "none", textAlign: "right",
                    borderRight: "1px solid var(--border)",
                    lineHeight: "20px", flexShrink: 0,
                    background: "rgba(0,0,0,0.15)",
                  }}>
                    {d.leftNum ?? ""}
                  </span>
                  <span style={{
                    padding: "4px 10px",
                    fontFamily: "monospace", fontSize: "13px",
                    lineHeight: "20px", whiteSpace: "pre-wrap",
                    wordBreak: "break-all",
                    color: d.type === "equal" ? "var(--text-secondary)" : "var(--text-primary)",
                    flex: 1,
                  }}>
                    {(d.type === "delete" || d.type === "equal") && d.leftLine}
                    {d.type === "replace" && wordDiff && renderWordTokens(wordDiff.left, "left")}
                    {d.type === "insert" && ""}
                  </span>
                </div>

                {/* Right cell */}
                <div style={{
                  display: "flex", alignItems: "flex-start",
                  borderTop: idx > 0 ? "1px solid var(--border)" : "none",
                  background: rightBg,
                  borderLeft: rightBorder,
                  minHeight: "28px",
                }}>
                  <span style={{
                    minWidth: "44px", padding: "4px 8px",
                    fontSize: "11px", color: "var(--text-muted)",
                    userSelect: "none", textAlign: "right",
                    borderRight: "1px solid var(--border)",
                    lineHeight: "20px", flexShrink: 0,
                    background: "rgba(0,0,0,0.15)",
                  }}>
                    {d.rightNum ?? ""}
                  </span>
                  <span style={{
                    padding: "4px 10px",
                    fontFamily: "monospace", fontSize: "13px",
                    lineHeight: "20px", whiteSpace: "pre-wrap",
                    wordBreak: "break-all",
                    color: d.type === "equal" ? "var(--text-secondary)" : "var(--text-primary)",
                    flex: 1,
                  }}>
                    {(d.type === "insert" || d.type === "equal") && d.rightLine}
                    {d.type === "replace" && wordDiff && renderWordTokens(wordDiff.right, "right")}
                    {d.type === "delete" && ""}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ─── Inline view ─────────────────────────────────────────────────────────────

  function InlineView() {
    return (
      <div style={{ border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden" }}>
        <div style={{
          padding: "10px 14px", background: "var(--bg-card)",
          borderBottom: "1px solid var(--border)",
          fontSize: "13px", fontWeight: 700, color: "var(--text-secondary)",
        }}>
          📋 Inline Diff
        </div>
        {visibleDiffs.map((d, idx) => {
          const wordDiff = d.type === "replace" ? diffWords(d.leftLine, d.rightLine) : null;

          if (d.type === "equal") {
            return (
              <div key={idx} style={{
                display: "flex", alignItems: "flex-start",
                borderTop: idx > 0 ? "1px solid var(--border)" : "none",
              }}>
                <span style={{ minWidth: "28px", padding: "4px 6px", fontSize: "11px", color: "var(--text-muted)", userSelect: "none", textAlign: "center", background: "rgba(0,0,0,0.1)" }}> </span>
                <span style={{ minWidth: "44px", padding: "4px 8px", fontSize: "11px", color: "var(--text-muted)", userSelect: "none", textAlign: "right", borderRight: "1px solid var(--border)", background: "rgba(0,0,0,0.1)" }}>{d.leftNum}</span>
                <span style={{ padding: "4px 10px", fontFamily: "monospace", fontSize: "13px", color: "var(--text-muted)", whiteSpace: "pre-wrap", wordBreak: "break-all" }}>{d.leftLine}</span>
              </div>
            );
          }

          const rows: React.ReactNode[] = [];

          // Delete row (or replace left side)
          if (d.type === "delete" || d.type === "replace") {
            rows.push(
              <div key={`${idx}-del`} style={{
                display: "flex", alignItems: "flex-start",
                background: "rgba(239,68,68,0.1)",
                borderLeft: "3px solid #ef4444",
                borderTop: idx > 0 ? "1px solid var(--border)" : "none",
              }}>
                <span style={{ minWidth: "28px", padding: "4px 6px", fontSize: "13px", color: "#f87171", userSelect: "none", textAlign: "center", fontWeight: 700, background: "rgba(239,68,68,0.1)" }}>−</span>
                <span style={{ minWidth: "44px", padding: "4px 8px", fontSize: "11px", color: "var(--text-muted)", userSelect: "none", textAlign: "right", borderRight: "1px solid var(--border)", background: "rgba(0,0,0,0.1)" }}>{d.leftNum}</span>
                <span style={{ padding: "4px 10px", fontFamily: "monospace", fontSize: "13px", color: "var(--text-primary)", whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
                  {d.type === "delete" ? d.leftLine : wordDiff && renderWordTokens(wordDiff.left, "left")}
                </span>
              </div>
            );
          }

          // Insert row (or replace right side)
          if (d.type === "insert" || d.type === "replace") {
            rows.push(
              <div key={`${idx}-ins`} style={{
                display: "flex", alignItems: "flex-start",
                background: "rgba(34,197,94,0.1)",
                borderLeft: "3px solid #22c55e",
                borderTop: "1px solid var(--border)",
              }}>
                <span style={{ minWidth: "28px", padding: "4px 6px", fontSize: "13px", color: "#4ade80", userSelect: "none", textAlign: "center", fontWeight: 700, background: "rgba(34,197,94,0.1)" }}>+</span>
                <span style={{ minWidth: "44px", padding: "4px 8px", fontSize: "11px", color: "var(--text-muted)", userSelect: "none", textAlign: "right", borderRight: "1px solid var(--border)", background: "rgba(0,0,0,0.1)" }}>{d.rightNum}</span>
                <span style={{ padding: "4px 10px", fontFamily: "monospace", fontSize: "13px", color: "var(--text-primary)", whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
                  {d.type === "insert" ? d.rightLine : wordDiff && renderWordTokens(wordDiff.right, "right")}
                </span>
              </div>
            );
          }

          return rows;
        })}
      </div>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <div className="page-container" style={{ maxWidth: "1200px" }}>
        <BackToTools />

        {/* ── Header ── */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
            <div style={{
              width: "52px", height: "52px", borderRadius: "14px",
              background: "linear-gradient(135deg, #ec489922, #8b5cf644)",
              border: "1px solid #ec489933",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px",
            }}>
              <Lucide.GitCompare size={24} style={{ color: "#ec4899" }} />
            </div>
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                Text Diff Checker - Compare Text & Find Differences
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Compare two texts or code files side-by-side or inline to highlight additions, deletions, and changes.
              </p>
            </div>
          </div>
        </div>

        {!compared ? (
          /* Editor View */
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }} className="diff-checker-grid">
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span className="label" style={{ margin: 0 }}>Original Text</span>
                  <button
                    className="btn-secondary"
                    style={{ padding: "6px 12px", fontSize: "12px" }}
                    onClick={() => {
                      navigator.clipboard.readText().then(text => setLeftText(text)).catch(() => {});
                    }}
                  >
                    <Lucide.Clipboard size={14} style={{ marginRight: "6px" }} /> Paste
                  </button>
                </div>
                <textarea
                  ref={leftRef}
                  className="input-field"
                  placeholder="Paste the original text here..."
                  style={{ minHeight: "400px", fontFamily: "monospace", fontSize: "13px" }}
                  value={leftText}
                  onChange={(e) => setLeftText(e.target.value)}
                />
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span className="label" style={{ margin: 0 }}>Modified Text</span>
                  <button
                    className="btn-secondary"
                    style={{ padding: "6px 12px", fontSize: "12px" }}
                    onClick={() => {
                      navigator.clipboard.readText().then(text => setRightText(text)).catch(() => {});
                    }}
                  >
                    <Lucide.Clipboard size={14} style={{ marginRight: "6px" }} /> Paste
                  </button>
                </div>
                <textarea
                  ref={rightRef}
                  className="input-field"
                  placeholder="Paste the modified text here..."
                  style={{ minHeight: "400px", fontFamily: "monospace", fontSize: "13px" }}
                  value={rightText}
                  onChange={(e) => setRightText(e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <button className="btn-primary" onClick={handleCompare}>
                🚀 Compare Texts
              </button>
              <button className="btn-secondary" onClick={() => { setLeftText(SAMPLE_LEFT); setRightText(SAMPLE_RIGHT); }}>
                Reset to Sample
              </button>
            </div>
          </div>
        ) : (
          /* Results View */
          <div>
            {/* View options toolbar */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              flexWrap: "wrap", gap: "12px", marginBottom: "20px",
              padding: "12px 16px", background: "var(--bg-card)",
              borderRadius: "12px", border: "1px solid var(--border)"
            }}>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {/* Split vs Inline */}
                <button
                  className={viewMode === "split" ? "btn-primary" : "btn-secondary"}
                  style={{ padding: "8px 14px", fontSize: "13px" }}
                  onClick={() => setViewMode("split")}
                >
                  <Lucide.Columns size={14} style={{ marginRight: "6px", display: "inline-block", verticalAlign: "middle" }} />
                  Split View
                </button>
                <button
                  className={viewMode === "inline" ? "btn-primary" : "btn-secondary"}
                  style={{ padding: "8px 14px", fontSize: "13px" }}
                  onClick={() => setViewMode("inline")}
                >
                  <Lucide.Rows size={14} style={{ marginRight: "6px", display: "inline-block", verticalAlign: "middle" }} />
                  Inline View
                </button>
                
                {/* Show/Hide Unchanged */}
                <button
                  className="btn-secondary"
                  style={{
                    padding: "8px 14px", fontSize: "13px",
                    background: showEqual ? "rgba(99, 102, 241, 0.1)" : "transparent",
                    borderColor: showEqual ? "var(--accent-1)" : "var(--border)",
                    color: showEqual ? "var(--accent-1)" : "var(--text-secondary)"
                  }}
                  onClick={() => setShowEqual(!showEqual)}
                >
                  {showEqual ? "Hide Unchanged Lines" : "Show Unchanged Lines"}
                </button>
              </div>

              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  className="btn-secondary"
                  style={{ padding: "8px 14px", fontSize: "13px" }}
                  onClick={handleSwap}
                  title="Swap left and right panels"
                >
                  <Lucide.RefreshCw size={14} style={{ marginRight: "6px", display: "inline-block", verticalAlign: "middle" }} />
                  Swap
                </button>
                <button
                  className="btn-secondary"
                  style={{ padding: "8px 14px", fontSize: "13px" }}
                  onClick={() => setCompared(false)}
                >
                  <Lucide.Edit2 size={14} style={{ marginRight: "6px", display: "inline-block", verticalAlign: "middle" }} />
                  Edit Text
                </button>
                <button
                  className="btn-secondary"
                  style={{ padding: "8px 14px", fontSize: "13px", color: "#f87171" }}
                  onClick={handleClear}
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Statistics */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "12px", marginBottom: "20px"
            }}>
              {[
                { label: "Lines Added", value: stats.added, color: "#22c55e", bg: "rgba(34,197,94,0.1)" },
                { label: "Lines Removed", value: stats.removed, color: "#ef4444", bg: "rgba(239,68,68,0.1)" },
                { label: "Lines Changed", value: stats.changed, color: "#eab308", bg: "rgba(234,179,8,0.1)" },
                { label: "Lines Unchanged", value: stats.unchanged, color: "var(--text-secondary)", bg: "var(--bg-secondary)" }
              ].map((s) => (
                <div key={s.label} style={{
                  padding: "12px 16px", borderRadius: "10px",
                  background: s.bg, border: `1px solid ${s.color}22`,
                  textAlign: "center"
                }}>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* View Container */}
            <div style={{ marginBottom: "24px" }}>
              {viewMode === "split" ? <SplitView /> : <InlineView />}
            </div>

            {/* Legend */}
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px", flexWrap: "wrap", borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
              {[
                { icon: "🟥", text: "Removed lines" },
                { icon: "🟩", text: "Added lines" },
                { icon: "🟨", text: "Changed words" },
                { icon: "⊟", text: "Side-by-side view" },
                { icon: "☰", text: "Inline view" },
              ].map((f) => (
                <div key={f.text} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--text-secondary)" }}>
                  <span>{f.icon}</span><span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <ToolSEO toolId="diff-checker" />
        <RelatedTools tools={[
          { href: "/tools/markdown-converter", label: "Markdown Converter", icon: "FileEdit", desc: "Convert Markdown ↔ HTML with preview" },
          { href: "/tools/json-formatter", label: "JSON Formatter", icon: "{ }", desc: "Format and validate JSON data" },
          { href: "/tools/sql-formatter", label: "SQL Formatter", icon: "Database", desc: "Format and beautify SQL queries" },
          { href: "/tools/word-counter", label: "Word Counter", icon: "FileDigit", desc: "Count words, characters, reading time" },
        ]} />
      </div>
    </main>
  );
}

