"use client";
import * as Lucide from "lucide-react";
import { useState, useCallback, useRef } from "react";
import BackToTools from "../../components/BackToTools";
import dynamic from "next/dynamic";
import { saveAs } from "file-saver";

const RelatedTools = dynamic(() => import("../../components/RelatedTools"));
const ToolSEO = dynamic(() => import("../../components/ToolSEO"));
const CopyButton = dynamic(() => import("../../components/CopyButton"));

// ─── UUID generation ──────────────────────────────────────────────────────────

function generateUUIDv4(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Manual fallback
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function generateBulk(count: number): string[] {
  const out: string[] = [];
  for (let i = 0; i < count; i++) out.push(generateUUIDv4());
  return out;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const BULK_PRESETS = [1, 10, 50, 100, 500, 1000];

type OutputFormat = "plain" | "uppercase" | "braces" | "urn";

function applyFormat(uuid: string, fmt: OutputFormat): string {
  switch (fmt) {
    case "uppercase": return uuid.toUpperCase();
    case "braces": return `{${uuid.toUpperCase()}}`;
    case "urn": return `urn:uuid:${uuid}`;
    default: return uuid;
  }
}

const FORMAT_LABELS: Record<OutputFormat, string> = {
  plain: "lowercase",
  uppercase: "UPPERCASE",
  braces: "{BRACES}",
  urn: "urn:uuid:",
};

type CopyState = "idle" | "copied";

// ─── Main Component ───────────────────────────────────────────────────────────

export default function UUIDGenerator() {
  const [single, setSingle] = useState<string>("");
  const [bulkCount, setBulkCount] = useState<number>(10);
  const [customCount, setCustomCount] = useState<string>("");
  const [bulkUUIDs, setBulkUUIDs] = useState<string[]>([]);
  const [format, setFormat] = useState<OutputFormat>("plain");
  const [separator, setSeparator] = useState<"newline" | "comma" | "semicolon">("newline");
  const [includeIndex, setIncludeIndex] = useState(false);
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const [generating, setGenerating] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // ── Single UUID ─────────────────────────────────────────────────────────────

  const handleGenSingle = useCallback(() => {
    setSingle(applyFormat(generateUUIDv4(), format));
  }, [format]);

  // ── Bulk UUIDs ──────────────────────────────────────────────────────────────

  const effectiveCount = (): number => {
    const c = Number(customCount) || bulkCount;
    return Math.min(Math.max(1, c), 100_000);
  };

  const handleGenBulk = useCallback(async () => {
    setGenerating(true);
    const count = effectiveCount();

    // Chunk to avoid blocking UI for large counts
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        const uuids = generateBulk(count).map((u) => applyFormat(u, format));
        setBulkUUIDs(uuids);
        resolve();
      }, 0);
    });

    setGenerating(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bulkCount, customCount, format]);

  // ── Format bulk as string ───────────────────────────────────────────────────

  const bulkAsText = useCallback(
    (uuids: string[], sep: typeof separator, idx: boolean): string => {
      const sepChar = sep === "newline" ? "\n" : sep === "comma" ? ", " : "; ";
      return uuids
        .map((u, i) => (idx ? `${i + 1}. ${u}` : u))
        .join(sepChar);
    },
    []
  );

  const bulkText = bulkUUIDs.length > 0 ? bulkAsText(bulkUUIDs, separator, includeIndex) : "";

  // ── Copy all ────────────────────────────────────────────────────────────────

  const copyAll = async () => {
    if (!bulkText) return;
    try {
      await navigator.clipboard.writeText(bulkText);
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 1800);
    } catch { /* ignore */ }
  };

  // ── Download ────────────────────────────────────────────────────────────────

  const downloadAs = (type: "txt" | "csv" | "json") => {
    if (!bulkUUIDs.length) return;

    let content = "";
    let filename = `uuids-${bulkUUIDs.length}`;
    let mime = "text/plain;charset=utf-8";

    if (type === "txt") {
      content = bulkUUIDs.map((u, i) => (includeIndex ? `${i + 1}. ${u}` : u)).join("\n");
      filename += ".txt";
    } else if (type === "csv") {
      const header = includeIndex ? "index,uuid\n" : "uuid\n";
      const rows = bulkUUIDs.map((u, i) => (includeIndex ? `${i + 1},${u}` : u)).join("\n");
      content = header + rows;
      filename += ".csv";
      mime = "text/csv;charset=utf-8";
    } else {
      content = JSON.stringify(bulkUUIDs, null, 2);
      filename += ".json";
      mime = "application/json;charset=utf-8";
    }

    const blob = new Blob([content], { type: mime });
    saveAs(blob, filename);
  };

  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <div className="page-container">
        <BackToTools />

        {/* ── Header ── */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
            <div style={{
              width: "52px", height: "52px", borderRadius: "14px",
              background: "linear-gradient(135deg, #8b5cf622, #8b5cf644)",
              border: "1px solid #8b5cf633",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px",
            }}><Lucide.Key size={24} style={{ color: "#8b5cf622" }} /></div>
            <div>
              <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                Free UUID / GUID Generator Online
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Generate UUID v4 instantly Bulk generate up to 100,000 Export as TXT, CSV, JSON
              </p>
            </div>
          </div>
        </div>

        {/* ── Format & Options bar ── */}
        <div className="tool-section" style={{ marginBottom: "16px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>

            {/* Output format */}
            <div style={{ flex: "1 1 200px" }}>
              <p className="label">UUID Format</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {(Object.keys(FORMAT_LABELS) as OutputFormat[]).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFormat(f)}
                    style={{
                      padding: "7px 14px", borderRadius: "9px", fontSize: "12px",
                      fontWeight: 700, cursor: "pointer", border: "1px solid", fontFamily: "monospace",
                      background: format === f ? "rgba(139,92,246,0.2)" : "var(--bg-secondary)",
                      borderColor: format === f ? "#8b5cf6" : "var(--border)",
                      color: format === f ? "#c084fc" : "var(--text-secondary)",
                      transition: "all 0.2s",
                    }}
                  >
                    {FORMAT_LABELS[f]}
                  </button>
                ))}
              </div>
            </div>

            {/* Separator */}
            <div style={{ flex: "1 1 160px" }}>
              <p className="label">Separator</p>
              <div style={{ display: "flex", gap: "6px" }}>
                {(["newline", "comma", "semicolon"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSeparator(s)}
                    style={{
                      padding: "7px 12px", borderRadius: "9px", fontSize: "12px",
                      fontWeight: 600, cursor: "pointer", border: "1px solid",
                      background: separator === s ? "rgba(139,92,246,0.2)" : "var(--bg-secondary)",
                      borderColor: separator === s ? "#8b5cf6" : "var(--border)",
                      color: separator === s ? "#c084fc" : "var(--text-secondary)",
                      transition: "all 0.2s",
                    }}
                  >
                    {s === "newline" ? "↵ Line" : s === "comma" ? ", Comma" : "; Semi"}
                  </button>
                ))}
              </div>
            </div>

            {/* Include index */}
            <div style={{ display: "flex", alignItems: "flex-end", paddingBottom: "2px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={includeIndex}
                  onChange={(e) => setIncludeIndex(e.target.checked)}
                  className="checkbox-custom"
                />
                <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-secondary)" }}>
                  Include index (1. 2. 3.)
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* ── Single UUID ── */}
        <div className="tool-section" style={{ marginBottom: "16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-primary)" }}>
              ⚡ Single UUID v4
            </h3>
            <span style={{
              padding: "3px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: 700,
              background: "rgba(139,92,246,0.15)", color: "#c084fc",
              textTransform: "uppercase", letterSpacing: "1px",
            }}>v4</span>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "stretch" }}>
            <div
              onClick={handleGenSingle}
              style={{
                flex: 1, padding: "14px 18px", borderRadius: "12px",
                background: "var(--bg-secondary)", border: "1px solid var(--border)",
                fontFamily: "monospace", fontSize: "15px", letterSpacing: "0.5px",
                color: single ? "#c084fc" : "var(--text-muted)",
                cursor: "pointer", display: "flex", alignItems: "center",
                userSelect: "all",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#8b5cf6")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              {single || "Click Generate to create a UUID…"}
            </div>
            <button
              className="btn-primary"
              onClick={handleGenSingle}
              style={{ flexShrink: 0, padding: "12px 20px", whiteSpace: "nowrap" }}
            >
              🎲 Generate
            </button>
            {single && (
              <CopyButton
                textToCopy={single}
                style={{ flexShrink: 0, padding: "12px 16px" }}
              />
            )}
          </div>

          {single && (
            <div style={{ marginTop: "10px", display: "flex", gap: "16px", flexWrap: "wrap", fontSize: "12px", color: "var(--text-muted)" }}>
              <span>📏 {single.length} chars</span>
              <span>🔢 Version: 4 \u00B7Variant: RFC 4122</span>
              <span>🔀 ~5.3×10³⁶ possible values</span>
            </div>
          )}
        </div>

        {/* ── Bulk Generator ── */}
        <div className="tool-section" style={{ marginBottom: "16px" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "14px" }}>
            📦 Bulk UUID Generator
          </h3>

          {/* Count presets */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "14px" }}>
            {BULK_PRESETS.map((n) => (
              <button
                key={n}
                onClick={() => { setBulkCount(n); setCustomCount(""); }}
                style={{
                  padding: "8px 16px", borderRadius: "10px", fontSize: "13px",
                  fontWeight: 700, cursor: "pointer", border: "1px solid", transition: "all 0.2s",
                  background: bulkCount === n && !customCount ? "rgba(139,92,246,0.2)" : "var(--bg-secondary)",
                  borderColor: bulkCount === n && !customCount ? "#8b5cf6" : "var(--border)",
                  color: bulkCount === n && !customCount ? "#c084fc" : "var(--text-secondary)",
                }}
              >
                {n.toLocaleString()}
              </button>
            ))}

            {/* Custom count input */}
            <input
              type="number"
              min={1}
              max={100000}
              placeholder="Custom…"
              value={customCount}
              onChange={(e) => { setCustomCount(e.target.value); setBulkCount(0); }}
              className="input-field"
              style={{ width: "110px", padding: "8px 12px", fontSize: "13px" }}
            />
          </div>

          <button
            className="btn-primary"
            onClick={handleGenBulk}
            disabled={generating}
            style={{ width: "100%", justifyContent: "center", marginBottom: "4px" }}
          >
            {generating
              ? "\u23F3 Generating…"
              : `🚀 Generate ${(Number(customCount) || bulkCount).toLocaleString()} UUIDs`}
          </button>

          {/* Bulk output */}
          {bulkUUIDs.length > 0 && (
            <div className="animate-fade-in" style={{ marginTop: "16px" }}>
              {/* Stats row */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexWrap: "wrap", gap: "8px", marginBottom: "10px",
              }}>
                <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                  ✅ <strong style={{ color: "var(--text-primary)" }}>{bulkUUIDs.length.toLocaleString()}</strong> UUIDs generated
                </span>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  <button
                    onClick={copyAll}
                    style={{
                      padding: "6px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: 700,
                      cursor: "pointer", border: "1px solid", transition: "all 0.2s",
                      background: copyState === "copied" ? "rgba(52,211,153,0.15)" : "rgba(139,92,246,0.15)",
                      borderColor: copyState === "copied" ? "#34d399" : "#8b5cf6",
                      color: copyState === "copied" ? "#34d399" : "#c084fc",
                    }}
                  >
                    {copyState === "copied" ? "\u2705 Copied!" : "\uD83D\uDCCB Copy All"}
                  </button>
                  <button
                    onClick={() => downloadAs("txt")}
                    style={{
                      padding: "6px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: 600,
                      cursor: "pointer", background: "var(--bg-secondary)",
                      border: "1px solid var(--border)", color: "var(--text-secondary)",
                    }}
                  >
                    ⬇ TXT
                  </button>
                  <button
                    onClick={() => downloadAs("csv")}
                    style={{
                      padding: "6px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: 600,
                      cursor: "pointer", background: "var(--bg-secondary)",
                      border: "1px solid var(--border)", color: "var(--text-secondary)",
                    }}
                  >
                    ⬇ CSV
                  </button>
                  <button
                    onClick={() => downloadAs("json")}
                    style={{
                      padding: "6px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: 600,
                      cursor: "pointer", background: "var(--bg-secondary)",
                      border: "1px solid var(--border)", color: "var(--text-secondary)",
                    }}
                  >
                    ⬇ JSON
                  </button>
                </div>
              </div>

              {/* Textarea output */}
              <textarea
                ref={textareaRef}
                readOnly
                value={bulkText}
                className="input-field"
                style={{
                  minHeight: bulkUUIDs.length <= 20 ? `${Math.min(bulkUUIDs.length * 32 + 24, 480)}px` : "480px",
                  fontFamily: "'Monaco', 'Cascadia Code', 'Consolas', monospace",
                  fontSize: "12px",
                  lineHeight: "1.8",
                  resize: "vertical",
                  color: "#c084fc",
                }}
              />
            </div>
          )}
        </div>

        {/* ── What is UUID ── */}
        <div className="tool-section animate-fade-in">
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "14px" }}>
            📖 About UUID v4
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              {
                icon: "Lock",
                title: "Cryptographically Random",
                desc: "UUID v4 uses 122 bits of randomness from crypto.randomUUID() \u2014collision probability is astronomically small.",
              },
              {
                icon: "🌍",
                title: "RFC 4122 Compliant",
                desc: "Follows the official UUID specification. The 13th digit is always '4' (version) and the 17th is '8', '9', 'a', or 'b' (variant).",
              },
              {
                icon: "📐",
                title: "Standard Format",
                desc: "Always 36 chars: 8-4-4-4-12 hex groups separated by hyphens. Example: f47ac10b-58cc-4372-a567-0e02b2c3d479",
              },
              {
                icon: "⚡",
                title: "Use in Databases",
                desc: "Perfect as primary keys in PostgreSQL, MySQL, MongoDB, or any database. Globally unique without a central coordinator.",
              },
              {
                icon: "🔒",
                title: "100% Private",
                desc: "All UUIDs are generated in your browser. Nothing is sent to our servers \u2014generation is instant and offline-capable.",
              },
              {
                icon: "🆓",
                title: "Unlimited & Free",
                desc: "Generate up to 100,000 UUIDs in one click. No sign-up, no watermark, no limits on usage.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: "14px", borderRadius: "12px",
                  background: "var(--bg-secondary)", border: "1px solid var(--border)",
                }}
              >
                <div style={{ fontSize: "22px", marginBottom: "8px" }}>{item.icon}</div>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>
                  {item.title}
                </p>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <ToolSEO toolId="uuid-generator" />
        <RelatedTools tools={[
          { href: "/tools/password-generator", label: "Password Generator", icon: "Lock", desc: "Generate strong, secure passwords" },
          { href: "/tools/random-number-generator", label: "Random Number", icon: "Dices", desc: "Generate random numbers in any range" },
          { href: "/tools/json-formatter", label: "JSON Formatter", icon: "{ }", desc: "Format and validate JSON data" },
          { href: "/tools/sql-formatter", label: "SQL Formatter", icon: "Database", desc: "Format and beautify SQL queries" },
        ]} />
      </div>
    </main>
  );
}

