"use client";
import * as Lucide from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import CopyButton from "../../components/CopyButton";
import dynamic from "next/dynamic";

const RelatedTools = dynamic(() => import("../../components/RelatedTools"));
const ToolSEO = dynamic(() => import("../../components/ToolSEO"));

// Cryptographically secure integer generator using rejection sampling to eliminate modulo bias
function secureRandomInt(min: number, max: number): number {
  const range = max - min + 1;
  if (range <= 1) return min;

  // Max value divisible by range within 32-bit unsigned range (0 to 0xFFFFFFFF)
  const maxSafe = Math.floor(0x100000000 / range) * range;
  const buffer = new Uint32Array(1);

  while (true) {
    window.crypto.getRandomValues(buffer);
    const val = buffer[0];
    if (val < maxSafe) {
      return min + (val % range);
    }
  }
}

export default function RandomNumberGenerator() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [allowDuplicates, setAllowDuplicates] = useState(true);
  const [output, setOutput] = useState<number[]>([]);
  const [error, setError] = useState<string>("");

  const handleGenerate = () => {
    setError("");

    if (!Number.isSafeInteger(min) || !Number.isSafeInteger(max)) {
      setError("Minimum and maximum must be safe integers (between -(2^53 - 1) and 2^53 - 1).");
      return;
    }

    if (min > max) {
      setError("Minimum cannot be greater than maximum.");
      return;
    }

    const range = max - min + 1;
    const qty = Math.max(1, Math.min(10000, count));

    if (!allowDuplicates && qty > range) {
      setError(`Cannot generate ${qty} unique numbers from a range of only ${range} values.`);
      return;
    }

    try {
      let result: number[] = [];

      if (!allowDuplicates) {
        if (range <= 20000 && qty > range / 2) {
          // If selecting more than half of a reasonably sized range,
          // create the pool and perform a cryptographically secure Fisher-Yates partial shuffle
          const pool: number[] = [];
          for (let i = min; i <= max; i++) pool.push(i);
          for (let i = pool.length - 1; i > pool.length - 1 - qty; i--) {
            const j = secureRandomInt(0, i);
            [pool[i], pool[j]] = [pool[j], pool[i]];
          }
          result = pool.slice(pool.length - qty);
        } else {
          // Rejection-sampled Set for sparse selection
          const set = new Set<number>();
          while (set.size < qty) {
            set.add(secureRandomInt(min, max));
          }
          result = Array.from(set);
        }
      } else {
        for (let i = 0; i < qty; i++) {
          result.push(secureRandomInt(min, max));
        }
      }

      setOutput(result);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Random number generation failed.");
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
                background: "linear-gradient(135deg, #14b8a6, #0d9488)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px",
                boxShadow: "0 8px 20px rgba(20, 184, 166, 0.2)",
              }}
            ><Lucide.Dices size={24} style={{ color: "white" }} /></div>
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                Random Number Generator - Generate Numbers Online Free
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Generate cryptographically secure random integers using crypto.getRandomValues with rejection sampling
              </p>
            </div>
          </div>
        </div>

        <div className="tool-section" style={{ marginBottom: "24px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "16px",
            marginBottom: "20px"
          }}>
            <div>
              <label className="label">Minimum</label>
              <input
                type="number"
                value={min}
                onChange={(e) => setMin(Number(e.target.value))}
                className="input-field"
              />
            </div>
            <div>
              <label className="label">Maximum</label>
              <input
                type="number"
                value={max}
                onChange={(e) => setMax(Number(e.target.value))}
                className="input-field"
              />
            </div>
            <div>
              <label className="label">Amount to Generate</label>
              <input
                type="number"
                min="1"
                max="10000"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="input-field"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", paddingTop: "24px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", color: "var(--text-primary)", fontSize: "14px", fontWeight: 500 }}>
                <input
                  type="checkbox"
                  checked={allowDuplicates}
                  onChange={(e) => setAllowDuplicates(e.target.checked)}
                  style={{ accentColor: "#14b8a6" }}
                />
                Allow Duplicates
              </label>
            </div>
          </div>

          {error && (
            <div style={{
              padding: "12px 16px",
              marginBottom: "16px",
              borderRadius: "10px",
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.25)",
              color: "#f87171",
              fontSize: "14px"
            }}>
              ⚠️ {error}
            </div>
          )}

          <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={handleGenerate}>
            🎯 Generate Numbers
          </button>
        </div>

        {output.length > 0 && (
          <div className="tool-section animate-fade-in" style={{ padding: "20px", background: "var(--bg-card)", borderRadius: "16px", border: "1px solid var(--border)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span className="label" style={{ margin: 0, fontWeight: 600, color: "var(--text-primary)" }}>
                Result ({output.length} {output.length === 1 ? "number" : "numbers"})
              </span>
              <CopyButton
                textToCopy={output.join(", ")}
                style={{ padding: "6px 12px", fontSize: "12px" }}
                buttonText="Copy All"
              />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", maxHeight: "300px", overflowY: "auto", padding: "10px", background: "var(--bg-primary)", borderRadius: "8px", border: "1px solid var(--border)" }}>
              {output.map((num, i) => (
                <div key={i} style={{ padding: "8px 16px", background: "rgba(20, 184, 166, 0.1)", border: "1px solid rgba(20, 184, 166, 0.3)", borderRadius: "8px", color: "#0d9488", fontWeight: 700, fontSize: "18px" }}>
                  {num}
                </div>
              ))}
            </div>
          </div>
        )}
        <ToolSEO toolId="random-number-generator" />
        <RelatedTools tools={[
          { href: "/tools/word-counter", label: "Word Counter", icon: "📊", desc: "Count words, chars, reading time" },
          { href: "/tools/text-case-converter", label: "Text Case Converter", icon: "🔡", desc: "Convert letter casing" },
          { href: "/tools/lorem-ipsum-generator", label: "Lorem Ipsum Generator", icon: "📄", desc: "Generate placeholder text" },
          { href: "/tools/password-generator", label: "Password Generator", icon: "🔐", desc: "Generate strong, secure passwords" },
        ]} />
      </div>
    </main>
  );
}
