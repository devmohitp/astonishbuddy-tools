"use client";
import * as Lucide from "lucide-react";
import { useState, useRef, useCallback } from "react";
import BackToTools from "../../components/BackToTools";
import dynamic from "next/dynamic";

const RelatedTools = dynamic(() => import("../../components/RelatedTools"));
const ToolSEO = dynamic(() => import("../../components/ToolSEO"));
const CopyButton = dynamic(() => import("../../components/CopyButton"));

// ─── SQL Keyword Sets ──────────────────────────────────────────────────────────

const SQL_KEYWORDS = new Set([
  "SELECT", "FROM", "WHERE", "AND", "OR", "NOT", "IN", "IS", "NULL", "LIKE",
  "BETWEEN", "EXISTS", "CASE", "WHEN", "THEN", "ELSE", "END", "AS", "ON",
  "JOIN", "INNER", "LEFT", "RIGHT", "FULL", "OUTER", "CROSS", "NATURAL",
  "INSERT", "INTO", "VALUES", "UPDATE", "SET", "DELETE", "CREATE", "TABLE",
  "ALTER", "DROP", "TRUNCATE", "INDEX", "VIEW", "DATABASE", "SCHEMA",
  "PRIMARY", "KEY", "FOREIGN", "REFERENCES", "UNIQUE", "CHECK", "DEFAULT",
  "NOT", "NULL", "AUTO_INCREMENT", "CONSTRAINT",
  "UNION", "ALL", "DISTINCT", "TOP", "LIMIT", "OFFSET", "FETCH", "NEXT",
  "ROWS", "ONLY", "ORDER", "BY", "ASC", "DESC", "GROUP", "HAVING",
  "WITH", "RECURSIVE", "CTE", "OVER", "PARTITION", "WINDOW", "ROWS",
  "RANGE", "UNBOUNDED", "PRECEDING", "FOLLOWING", "CURRENT", "ROW",
  "BEGIN", "COMMIT", "ROLLBACK", "TRANSACTION", "SAVEPOINT",
  "GRANT", "REVOKE", "DENY", "EXECUTE", "CALL", "PROCEDURE", "FUNCTION",
  "TRIGGER", "IF", "THEN", "ELSE", "ELSIF", "END", "LOOP", "WHILE",
  "FOR", "CURSOR", "DECLARE", "OPEN", "CLOSE", "FETCH", "RETURN",
  "USE", "SHOW", "DESCRIBE", "EXPLAIN", "ANALYZE",
  "REPLACE", "MERGE", "UPSERT", "INTERSECT", "EXCEPT",
  "INT", "INTEGER", "BIGINT", "SMALLINT", "TINYINT", "FLOAT", "DOUBLE",
  "DECIMAL", "NUMERIC", "CHAR", "VARCHAR", "TEXT", "BLOB", "DATE",
  "DATETIME", "TIMESTAMP", "BOOLEAN", "BOOL", "SERIAL", "UUID",
  "TRUE", "FALSE",
  "ADD", "COLUMN", "MODIFY", "RENAME", "TO", "OF",
]);

const SQL_FUNCTIONS = new Set([
  "COUNT", "SUM", "AVG", "MIN", "MAX", "COALESCE", "NULLIF", "ISNULL",
  "NVL", "IFNULL", "IIF", "CAST", "CONVERT", "ROUND", "FLOOR", "CEIL",
  "CEILING", "ABS", "MOD", "POWER", "SQRT", "LOG", "EXP",
  "NOW", "CURRENT_TIMESTAMP", "CURRENT_DATE", "CURRENT_TIME", "GETDATE",
  "SYSDATE", "DATE_FORMAT", "DATE_ADD", "DATE_SUB", "DATEDIFF", "DATEPART",
  "YEAR", "MONTH", "DAY", "HOUR", "MINUTE", "SECOND",
  "UPPER", "LOWER", "TRIM", "LTRIM", "RTRIM", "LENGTH", "LEN",
  "SUBSTRING", "SUBSTR", "LEFT", "RIGHT", "REPLACE", "CHARINDEX", "INSTR",
  "CONCAT", "CONCAT_WS", "STUFF", "LPAD", "RPAD", "REVERSE", "REPEAT",
  "STRING_AGG", "GROUP_CONCAT", "LISTAGG",
  "ROW_NUMBER", "RANK", "DENSE_RANK", "NTILE", "LAG", "LEAD",
  "FIRST_VALUE", "LAST_VALUE",
  "EXTRACT", "STRFTIME",
]);

// ─── Tokenizer ─────────────────────────────────────────────────────────────────

type TokenType =
  | "keyword"
  | "function"
  | "string"
  | "number"
  | "comment"
  | "operator"
  | "punctuation"
  | "identifier"
  | "whitespace";

interface Token {
  type: TokenType;
  value: string;
}

function tokenize(sql: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  while (i < sql.length) {
    // Whitespace
    if (/\s/.test(sql[i])) {
      let j = i;
      while (j < sql.length && /\s/.test(sql[j])) j++;
      tokens.push({ type: "whitespace", value: sql.slice(i, j) });
      i = j;
      continue;
    }

    // Single-line comment
    if (sql[i] === "-" && sql[i + 1] === "-") {
      let j = i + 2;
      while (j < sql.length && sql[j] !== "\n") j++;
      tokens.push({ type: "comment", value: sql.slice(i, j) });
      i = j;
      continue;
    }

    // Multi-line comment
    if (sql[i] === "/" && sql[i + 1] === "*") {
      let j = i + 2;
      while (j < sql.length && !(sql[j] === "*" && sql[j + 1] === "/")) j++;
      j = Math.min(j + 2, sql.length);
      tokens.push({ type: "comment", value: sql.slice(i, j) });
      i = j;
      continue;
    }

    // String (single or double quote)
    if (sql[i] === "'" || sql[i] === '"' || sql[i] === "`") {
      const quote = sql[i];
      let j = i + 1;
      while (j < sql.length) {
        if (sql[j] === "\\" && j + 1 < sql.length) { j += 2; continue; }
        if (sql[j] === quote) { j++; break; }
        j++;
      }
      tokens.push({ type: "string", value: sql.slice(i, j) });
      i = j;
      continue;
    }

    // Number
    if (/[0-9]/.test(sql[i]) || (sql[i] === "." && /[0-9]/.test(sql[i + 1] || ""))) {
      let j = i;
      while (j < sql.length && /[0-9._eE+\-]/.test(sql[j])) j++;
      tokens.push({ type: "number", value: sql.slice(i, j) });
      i = j;
      continue;
    }

    // Identifier or keyword
    if (/[a-zA-Z_$]/.test(sql[i])) {
      let j = i;
      while (j < sql.length && /[a-zA-Z0-9_$]/.test(sql[j])) j++;
      const word = sql.slice(i, j);
      const upper = word.toUpperCase();
      let type: TokenType = "identifier";
      if (SQL_KEYWORDS.has(upper)) type = "keyword";
      else if (SQL_FUNCTIONS.has(upper)) type = "function";
      tokens.push({ type, value: word });
      i = j;
      continue;
    }

    // Operators
    if (/[=<>!+\-*/|^~%&]/.test(sql[i])) {
      let j = i + 1;
      if (
        (sql[i] === "<" && (sql[j] === "=" || sql[j] === ">")) ||
        (sql[i] === ">" && sql[j] === "=") ||
        (sql[i] === "!" && sql[j] === "=") ||
        (sql[i] === "=" && sql[j] === "=") ||
        (sql[i] === "|" && sql[j] === "|") ||
        (sql[i] === "&" && sql[j] === "&")
      ) j++;
      tokens.push({ type: "operator", value: sql.slice(i, j) });
      i = j;
      continue;
    }

    // Punctuation
    if (/[(),;.[\]{}]/.test(sql[i])) {
      tokens.push({ type: "punctuation", value: sql[i] });
      i++;
      continue;
    }

    // Unknown \u2014pass through
    tokens.push({ type: "identifier", value: sql[i] });
    i++;
  }

  return tokens;
}

// ─── Syntax Highlighting ──────────────────────────────────────────────────────

const TOKEN_COLORS: Record<TokenType, string> = {
  keyword: "#ff7b72",       // red-ish (GitHub dark)
  function: "#d2a8ff",      // purple
  string: "#a5d6ff",        // light blue
  number: "#f2cc60",        // yellow
  comment: "#8b949e",       // gray
  operator: "#79c0ff",      // blue
  punctuation: "#e6edf3",   // near-white
  identifier: "#c9d1d9",    // light gray
  whitespace: "",           // no color
};

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function highlight(sql: string): string {
  const tokens = tokenize(sql);
  return tokens
    .map((t) => {
      const escaped = escapeHtml(t.value);
      if (t.type === "whitespace") return escaped;
      const color = TOKEN_COLORS[t.type];
      return `<span style="color:${color}">${escaped}</span>`;
    })
    .join("");
}

// ─── SQL Formatter ────────────────────────────────────────────────────────────

// Clause keywords that get their own line
const CLAUSE_KEYWORDS = new Set([
  "SELECT", "FROM", "WHERE", "JOIN", "INNER", "LEFT", "RIGHT", "FULL",
  "CROSS", "NATURAL", "OUTER", "ON", "GROUP", "ORDER", "HAVING", "LIMIT",
  "OFFSET", "UNION", "INTERSECT", "EXCEPT", "INSERT", "INTO", "VALUES",
  "UPDATE", "SET", "DELETE", "CREATE", "ALTER", "DROP", "TRUNCATE",
  "WITH", "MERGE", "USING", "WHEN", "THEN", "ELSE", "END", "RETURNS",
  "BEGIN", "COMMIT", "ROLLBACK",
]);

// Keywords that should have a newline after them
const NEWLINE_AFTER = new Set(["SELECT", "SET"]);

type KeywordCase = "upper" | "lower" | "preserve";

function formatSQL(sql: string, indent: number, keywordCase: KeywordCase): string {
  const tokens = tokenize(sql);
  const pad = " ".repeat(indent);
  let result = "";
  let depth = 0;
  let lineStart = true;
  let prevNonWs: Token | null = null;

  const applyCase = (word: string, type: TokenType): string => {
    if (type !== "keyword" && type !== "function") return word;
    if (keywordCase === "upper") return word.toUpperCase();
    if (keywordCase === "lower") return word.toLowerCase();
    return word;
  };

  for (let idx = 0; idx < tokens.length; idx++) {
    const t = tokens[idx];

    if (t.type === "whitespace") continue; // we manage whitespace ourselves

    // Open paren \u2014increase depth
    if (t.value === "(") {
      // Check if next non-ws token is SELECT (subquery)
      let nextKeyword = "";
      for (let k = idx + 1; k < tokens.length; k++) {
        if (tokens[k].type !== "whitespace") { nextKeyword = tokens[k].value.toUpperCase(); break; }
      }
      if (nextKeyword === "SELECT" || nextKeyword === "WITH") {
        result += " (\n" + pad.repeat(depth + 1);
        depth++;
        lineStart = true;
        prevNonWs = t;
        continue;
      }
      result += "(";
      prevNonWs = t;
      continue;
    }

    // Close paren
    if (t.value === ")") {
      if (depth > 0) {
        depth--;
        result += "\n" + pad.repeat(depth) + ")";
      } else {
        result += ")";
      }
      lineStart = false;
      prevNonWs = t;
      continue;
    }

    // Comma \u2014newline for top-level, space for inside parens
    if (t.value === ",") {
      if (depth === 0) {
        result += ",\n" + pad.repeat(depth);
        lineStart = true;
      } else {
        result += ", ";
        lineStart = false;
      }
      prevNonWs = t;
      continue;
    }

    // Semicolon
    if (t.value === ";") {
      result += ";\n\n";
      depth = 0;
      lineStart = true;
      prevNonWs = t;
      continue;
    }

    // Clause keyword
    if (t.type === "keyword" && CLAUSE_KEYWORDS.has(t.value.toUpperCase())) {
      const upper = t.value.toUpperCase();

      // AND / OR inside WHERE \u2014indent one extra level
      if (upper === "AND" || upper === "OR" || upper === "NOT") {
        result += "\n" + pad.repeat(depth) + "  " + applyCase(t.value, t.type) + " ";
        lineStart = false;
        prevNonWs = t;
        continue;
      }

      // JOIN variants
      if (
        upper === "JOIN" ||
        (upper === "INNER" && tokens[idx + 2]?.value.toUpperCase() === "JOIN") ||
        (["LEFT", "RIGHT", "FULL", "CROSS", "NATURAL"].includes(upper))
      ) {
        result += "\n" + pad.repeat(depth) + applyCase(t.value, t.type);
        lineStart = false;
        prevNonWs = t;
        continue;
      }

      // GROUP BY / ORDER BY \u2014keep on same line
      if (upper === "BY") {
        result += " " + applyCase(t.value, t.type) + " ";
        lineStart = false;
        prevNonWs = t;
        continue;
      }

      // Newline before clause, reset to base indent
      if (!lineStart) result += "\n";
      result += pad.repeat(depth) + applyCase(t.value, t.type);

      if (NEWLINE_AFTER.has(upper)) {
        result += "\n" + pad.repeat(depth) + pad;
      } else {
        result += " ";
      }
      lineStart = false;
      prevNonWs = t;
      continue;
    }

    // Everything else
    const word = applyCase(t.value, t.type);
    if (lineStart) {
      result += pad.repeat(depth) + word;
      lineStart = false;
    } else {
      // Add space unless prev was open paren or this is close paren
      const prevVal = prevNonWs?.value;
      const needsSpace =
        prevVal !== "(" &&
        t.value !== ")" &&
        t.value !== "," &&
        t.value !== ";" &&
        t.value !== "." &&
        prevVal !== ".";
      result += (needsSpace ? " " : "") + word;
    }

    prevNonWs = t;
  }

  return result.trim();
}

function minifySQL(sql: string, keywordCase: KeywordCase): string {
  const tokens = tokenize(sql);
  let result = "";
  let prevType: TokenType | null = null;

  for (const t of tokens) {
    if (t.type === "whitespace") {
      if (prevType !== null) result += " ";
      continue;
    }
    if (t.type === "comment") continue; // strip comments
    const val =
      t.type === "keyword"
        ? keywordCase === "upper"
          ? t.value.toUpperCase()
          : keywordCase === "lower"
            ? t.value.toLowerCase()
            : t.value
        : t.value;
    result += val;
    prevType = t.type;
  }

  return result.trim().replace(/\s+/g, " ");
}

// ─── Default SQL sample ───────────────────────────────────────────────────────

const SAMPLE_SQL = `SELECT u.id, u.name, u.email, COUNT(o.id) AS total_orders, SUM(o.amount) AS total_spent FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE u.created_at >= '2024-01-01' AND u.status = 'active' GROUP BY u.id, u.name, u.email HAVING COUNT(o.id) > 0 ORDER BY total_spent DESC LIMIT 50;`;

// ─── Main Component ───────────────────────────────────────────────────────────

type ViewMode = "formatted" | "highlighted";

export default function SQLFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [indent, setIndent] = useState(2);
  const [keywordCase, setKeywordCase] = useState<KeywordCase>("upper");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"format" | "minify">("format");
  const [viewMode, setViewMode] = useState<ViewMode>("highlighted");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const process = useCallback(
    (sql: string, m: "format" | "minify" = mode) => {
      if (!sql.trim()) { setOutput(""); setError(""); return; }
      try {
        let result: string;
        if (m === "format") {
          result = formatSQL(sql, indent, keywordCase);
        } else {
          result = minifySQL(sql, keywordCase);
        }
        setOutput(result);
        setError("");
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to process SQL");
      }
    },
    [mode, indent, keywordCase]
  );

  const handleFormat = () => { setMode("format"); process(input, "format"); };
  const handleMinify = () => { setMode("minify"); process(input, "minify"); };

  const handleUppercase = () => {
    setKeywordCase("upper");
    if (output) {
      const re = new RegExp(`\\b(${Array.from(SQL_KEYWORDS).join("|")})\\b`, "gi");
      setOutput(output.replace(re, (m) => m.toUpperCase()));
    }
  };

  const handleLowercase = () => {
    setKeywordCase("lower");
    if (output) {
      const re = new RegExp(`\\b(${Array.from(SQL_KEYWORDS).join("|")})\\b`, "gi");
      setOutput(output.replace(re, (m) => m.toLowerCase()));
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInput((prev) => prev + text);
      setTimeout(() => textareaRef.current?.focus(), 50);
    } catch { /* clipboard API not available */ }
  };

  const loadSample = () => {
    setInput(SAMPLE_SQL);
    setOutput("");
    setError("");
  };

  const highlightedOutput = output
    ? highlight(output)
    : `<span style="color:var(--text-muted)">Output will appear here…</span>`;

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <div className="page-container" style={{ maxWidth: "1100px" }}>
        <BackToTools />

        {/* ── Header ── */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
            <div style={{
              width: "52px", height: "52px", borderRadius: "14px",
              background: "linear-gradient(135deg, #10b98122, #10b98144)",
              border: "1px solid #10b98133",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "22px", fontWeight: 800, color: "#10b981",
            }}>
              SQL
            </div>
            <div>
              <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                Free SQL Formatter &amp; Beautifier Online
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Format, minify, and highlight SQL with keyword casing 100% in-browser
              </p>
            </div>
          </div>
        </div>

        {/* ── Controls row ── */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center",
          marginBottom: "14px",
        }}>
          {/* Indent */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: 500 }}>Indent:</span>
            {[2, 4].map((n) => (
              <button
                key={n}
                onClick={() => setIndent(n)}
                style={{
                  padding: "6px 12px", borderRadius: "8px", fontSize: "12px", fontWeight: 600,
                  cursor: "pointer", border: "1px solid",
                  background: indent === n ? "rgba(16,185,129,0.15)" : "var(--bg-card-hover)",
                  borderColor: indent === n ? "#10b981" : "var(--border)",
                  color: indent === n ? "#34d399" : "var(--text-secondary)",
                }}
              >
                {n}sp
              </button>
            ))}
          </div>

          {/* Keyword case */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: 500 }}>Keywords:</span>
            {(["upper", "lower", "preserve"] as KeywordCase[]).map((c) => (
              <button
                key={c}
                onClick={() => { setKeywordCase(c); }}
                style={{
                  padding: "6px 12px", borderRadius: "8px", fontSize: "12px", fontWeight: 600,
                  cursor: "pointer", border: "1px solid",
                  background: keywordCase === c ? "rgba(16,185,129,0.15)" : "var(--bg-card-hover)",
                  borderColor: keywordCase === c ? "#10b981" : "var(--border)",
                  color: keywordCase === c ? "#34d399" : "var(--text-secondary)",
                  textTransform: c === "preserve" ? "none" : c,
                }}
              >
                {c === "upper" ? "UPPER" : c === "lower" ? "lower" : "Preserve"}
              </button>
            ))}
          </div>

          {/* View mode toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginLeft: "auto" }}>
            <span style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: 500 }}>Output:</span>
            {(["highlighted", "formatted"] as ViewMode[]).map((v) => (
              <button
                key={v}
                onClick={() => setViewMode(v)}
                style={{
                  padding: "6px 12px", borderRadius: "8px", fontSize: "12px", fontWeight: 600,
                  cursor: "pointer", border: "1px solid",
                  background: viewMode === v ? "rgba(16,185,129,0.15)" : "var(--bg-card-hover)",
                  borderColor: viewMode === v ? "#10b981" : "var(--border)",
                  color: viewMode === v ? "#34d399" : "var(--text-secondary)",
                }}
              >
                {v === "highlighted" ? "🎨 Highlighted" : "\uD83D\uDCCB Plain Text"}
              </button>
            ))}
          </div>
        </div>

        {/* ── Editor grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="json-formatter-grid">

          {/* Input pane */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span className="label" style={{ margin: 0 }}>SQL Input</span>
              <div style={{ display: "flex", gap: "6px" }}>
                <button
                  className="btn-secondary"
                  style={{ padding: "5px 10px", fontSize: "12px" }}
                  onClick={handlePaste}
                >
                  📋 Paste
                </button>
                <button
                  className="btn-secondary"
                  style={{ padding: "5px 10px", fontSize: "12px" }}
                  onClick={loadSample}
                >
                  📝 Sample
                </button>
                <button
                  className="btn-secondary"
                  style={{ padding: "5px 10px", fontSize: "12px" }}
                  onClick={() => { setInput(""); setOutput(""); setError(""); }}
                >
                  Clear
                </button>
              </div>
            </div>
            <textarea
              ref={textareaRef}
              className="input-field"
              placeholder={"SELECT * FROM users WHERE id = 1;"}
              style={{
                minHeight: "400px",
                fontFamily: "'Monaco', 'Cascadia Code', 'Consolas', monospace",
                fontSize: "13px",
                lineHeight: "1.7",
                resize: "vertical",
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              spellCheck={false}
            />
            {/* Input stats */}
            {input && (
              <div style={{ marginTop: "6px", fontSize: "12px", color: "var(--text-muted)" }}>
                {input.length} chars \u00B7{input.split(/\s+/).filter(Boolean).length} tokens
              </div>
            )}
          </div>

          {/* Output pane */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span className="label" style={{ margin: 0 }}>
                Output {mode === "format" ? "(Formatted)" : "(Minified)"}
              </span>
              <div style={{ display: "flex", gap: "6px" }}>
                {output && <CopyButton textToCopy={output} style={{ padding: "5px 10px", fontSize: "12px" }} />}
              </div>
            </div>

            {error ? (
              <div style={{
                minHeight: "400px", padding: "16px", borderRadius: "12px",
                background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)",
                color: "#f87171", fontSize: "13px",
                fontFamily: "'Monaco', 'Cascadia Code', monospace",
              }}>
                ❌ {error}
              </div>
            ) : viewMode === "highlighted" ? (
              <div
                className="code-display"
                style={{ minHeight: "400px", lineHeight: "1.7" }}
                dangerouslySetInnerHTML={{ __html: highlightedOutput }}
              />
            ) : (
              <textarea
                className="input-field"
                readOnly
                style={{
                  minHeight: "400px",
                  fontFamily: "'Monaco', 'Cascadia Code', 'Consolas', monospace",
                  fontSize: "13px",
                  lineHeight: "1.7",
                  resize: "vertical",
                  color: "var(--text-secondary)",
                }}
                value={output}
              />
            )}

            {/* Output stats */}
            {output && (
              <div style={{ marginTop: "6px", fontSize: "12px", color: "var(--text-muted)" }}>
                {output.length} chars \u00B7{output.split("\n").length} lines
              </div>
            )}
          </div>
        </div>

        {/* ── Action buttons ── */}
        <div style={{
          display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "16px",
          padding: "16px", borderRadius: "12px",
          background: "var(--bg-card)", border: "1px solid var(--border)",
        }}>
          <button
            className="btn-primary"
            style={{ padding: "10px 22px" }}
            onClick={handleFormat}
          >
            🎨 Format SQL
          </button>
          <button
            className="btn-secondary"
            onClick={handleMinify}
          >
            ⚡ Minify SQL
          </button>
          <div style={{ width: "1px", background: "var(--border)", margin: "0 4px" }} />
          <button
            className="btn-secondary"
            onClick={handleUppercase}
            title="Convert keywords to UPPERCASE in output"
          >
            UPPER Keywords
          </button>
          <button
            className="btn-secondary"
            onClick={handleLowercase}
            title="Convert keywords to lowercase in output"
          >
            lower keywords
          </button>
          <div style={{ width: "1px", background: "var(--border)", margin: "0 4px" }} />
          <button
            className="btn-secondary"
            onClick={() => {
              if (output) { setInput(output); setOutput(""); setError(""); }
            }}
            title="Use output as next input"
          >
            ↩ Use as Input
          </button>
        </div>

        {/* ── Cheat sheet ── */}
        <details style={{ marginTop: "20px" }}>
          <summary style={{
            cursor: "pointer", fontSize: "14px", fontWeight: 600,
            color: "var(--text-secondary)", padding: "12px 0",
            borderBottom: "1px solid var(--border)",
            userSelect: "none",
          }}>
            📖 SQL Quick Reference
          </summary>
          <div style={{
            marginTop: "16px", display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px",
          }}>
            {[
              { cat: "🔍 Query", keywords: "SELECT \u00B7FROM \u00B7WHERE \u00B7HAVING \u00B7GROUP BY \u00B7ORDER BY \u00B7LIMIT" },
              { cat: "🔗 Joins", keywords: "INNER JOIN \u00B7LEFT JOIN \u00B7RIGHT JOIN \u00B7FULL JOIN \u00B7CROSS JOIN" },
              { cat: "✍️ DML", keywords: "INSERT INTO \u00B7UPDATE SET \u00B7DELETE FROM \u00B7MERGE \u00B7REPLACE" },
              { cat: "🏗️ DDL", keywords: "CREATE TABLE \u00B7ALTER TABLE \u00B7DROP TABLE \u00B7TRUNCATE \u00B7CREATE INDEX" },
              { cat: "📊 Aggregates", keywords: "COUNT \u00B7SUM \u00B7AVG \u00B7MIN \u00B7MAX \u00B7STRING_AGG" },
              { cat: "🪟 Window", keywords: "ROW_NUMBER \u00B7RANK \u00B7DENSE_RANK \u00B7LAG \u00B7LEAD \u00B7OVER \u00B7PARTITION BY" },
              { cat: "🔤 Strings", keywords: "UPPER \u00B7LOWER \u00B7TRIM \u00B7CONCAT \u00B7SUBSTRING \u00B7LENGTH \u00B7REPLACE" },
              { cat: "📅 Dates", keywords: "NOW \u00B7CURRENT_DATE \u00B7DATE_ADD \u00B7DATEDIFF \u00B7EXTRACT \u00B7DATEPART" },
            ].map((c) => (
              <div key={c.cat} style={{
                padding: "14px", borderRadius: "12px",
                background: "var(--bg-secondary)", border: "1px solid var(--border)",
              }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>{c.cat}</p>
                <p style={{ fontSize: "12px", color: "#34d399", fontFamily: "monospace", lineHeight: 1.6 }}>{c.keywords}</p>
              </div>
            ))}
          </div>
        </details>

        <ToolSEO toolId="sql-formatter" />
        <RelatedTools tools={[
          { href: "/tools/json-formatter", label: "JSON Formatter", icon: "{ }", desc: "Format, validate & minify JSON" },
          { href: "/tools/base64-converter", label: "Base64 Converter", icon: "RefreshCw", desc: "Encode/decode Base64 strings" },
          { href: "/tools/url-converter", label: "URL Encoder", icon: "Link", desc: "Encode special characters in URLs" },
          { href: "/tools/word-counter", label: "Word Counter", icon: "FileDigit", desc: "Count words, characters, reading time" },
        ]} />
      </div>
    </main>
  );
}

