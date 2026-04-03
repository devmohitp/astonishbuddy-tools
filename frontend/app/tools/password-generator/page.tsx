"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import CopyButton from "../../components/CopyButton";

const CHAR_SETS = {
  uppercase: { label: "Uppercase (A-Z)", chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  lowercase: { label: "Lowercase (a-z)", chars: "abcdefghijklmnopqrstuvwxyz" },
  numbers: { label: "Numbers (0-9)", chars: "0123456789" },
  symbols: { label: "Symbols (!@#$...)", chars: "!@#$%^&*()_+-=[]{}|;':\",./<>?" },
  ambiguous: { label: "Exclude ambiguous (0,O,l,1,I)", chars: "" },
};

function getStrength(pwd: string): { label: string; color: string; score: number } {
  let score = 0;
  if (pwd.length >= 8) score++;
  if (pwd.length >= 12) score++;
  if (pwd.length >= 16) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[a-z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  if (score <= 2) return { label: "Weak", color: "#ef4444", score };
  if (score <= 4) return { label: "Fair", color: "#f59e0b", score };
  if (score <= 5) return { label: "Good", color: "#3b82f6", score };
  return { label: "Strong", color: "#10b981", score };
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({ uppercase: true, lowercase: true, numbers: true, symbols: true, ambiguous: false });
  const [passwords, setPasswords] = useState<string[]>([]);
  const [count, setCount] = useState(5);

  const generate = useCallback(() => {
    let chars = "";
    if (options.uppercase) chars += CHAR_SETS.uppercase.chars;
    if (options.lowercase) chars += CHAR_SETS.lowercase.chars;
    if (options.numbers) chars += CHAR_SETS.numbers.chars;
    if (options.symbols) chars += CHAR_SETS.symbols.chars;
    if (options.ambiguous) {
      chars = chars.replace(/[0OlI1]/g, "");
    }
    if (!chars) return;
    const generated: string[] = [];
    for (let n = 0; n < count; n++) {
      let pwd = "";
      for (let i = 0; i < length; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      generated.push(pwd);
    }
    setPasswords(generated);
  }, [options, length, count]);

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <div className="page-container">
        <Link href="/" className="back-btn">← Back to Tools</Link>

        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
            <div
              style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: "linear-gradient(135deg, #ec489922, #ec489944)",
                border: "1px solid #ec489933",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px",
              }}
            >🔐</div>
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                Password Generator
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Generate strong, secure passwords instantly
              </p>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="tool-section" style={{ marginBottom: "20px" }}>
          <h3 style={{ color: "var(--text-primary)", marginBottom: "20px" }}>Settings</h3>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span className="label" style={{ margin: 0 }}>Password Length</span>
              <span style={{ color: "#ec4899", fontWeight: 700, fontSize: "16px" }}>{length}</span>
            </div>
            <input type="range" min={6} max={64} value={length} onChange={(e) => setLength(Number(e.target.value))} className="range-slider" />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px", fontSize: "11px", color: "var(--text-muted)" }}>
              <span>6</span><span>64</span>
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span className="label" style={{ margin: 0 }}>Number of Passwords</span>
              <span style={{ color: "#ec4899", fontWeight: 700 }}>{count}</span>
            </div>
            <input type="range" min={1} max={20} value={count} onChange={(e) => setCount(Number(e.target.value))} className="range-slider" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {Object.entries(CHAR_SETS).map(([key, val]) => (
              <label key={key} style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", padding: "10px 14px", borderRadius: "10px", background: "var(--bg-secondary)", border: `1px solid ${options[key as keyof typeof options] ? "#ec489944" : "var(--border)"}`, transition: "all 0.2s" }}>
                <input
                  type="checkbox"
                  className="checkbox-custom"
                  checked={options[key as keyof typeof options]}
                  onChange={(e) => setOptions((o) => ({ ...o, [key]: e.target.checked }))}
                />
                <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{val.label}</span>
              </label>
            ))}
          </div>
        </div>

        <button className="btn-primary" onClick={generate} style={{ width: "100%", justifyContent: "center", marginBottom: "20px" }}>
          🔑 Generate Passwords
        </button>

        {passwords.length > 0 && (
          <div className="animate-fade-in">
            <h3 style={{ color: "var(--text-secondary)", fontSize: "13px", fontWeight: 600, marginBottom: "14px", letterSpacing: "1px", textTransform: "uppercase" }}>
              Generated Passwords
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {passwords.map((pwd, idx) => {
                const strength = getStrength(pwd);
                return (
                  <div key={idx} className="glass-card" style={{ padding: "14px 18px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <code style={{ flex: 1, fontSize: "15px", color: "var(--text-primary)", wordBreak: "break-all", marginRight: "12px", letterSpacing: "1px" }}>
                        {pwd}
                      </code>
                      <CopyButton textToCopy={pwd} style={{ padding: "7px 14px", fontSize: "13px", flexShrink: 0 }} />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
                      <div style={{ flex: 1, height: "4px", borderRadius: "2px", background: "var(--bg-secondary)", overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${(strength.score / 7) * 100}%`, background: strength.color, borderRadius: "2px", transition: "width 0.3s" }} />
                      </div>
                      <span style={{ fontSize: "12px", fontWeight: 600, color: strength.color }}>{strength.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="btn-secondary" style={{ marginTop: "12px", width: "100%", justifyContent: "center" }} onClick={() => { navigator.clipboard.writeText(passwords.join("\n")); }}>
              📋 Copy All Passwords
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
