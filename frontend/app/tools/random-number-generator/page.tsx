"use client";
import { useState } from "react";
import Link from "next/link";
import CopyButton from "../../components/CopyButton";

export default function RandomNumberGenerator() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [allowDuplicates, setAllowDuplicates] = useState(true);
  const [output, setOutput] = useState<number[]>([]);

  const handleGenerate = () => {
    let result: number[] = [];
    if (!allowDuplicates && count > (max - min + 1)) {
      alert("Count cannot be greater than the range when duplicates are not allowed.");
      return;
    }

    if (!allowDuplicates) {
      let nums = new Set<number>();
      while (nums.size < count) {
        nums.add(Math.floor(Math.random() * (max - min + 1)) + min);
      }
      result = Array.from(nums);
    } else {
      for (let i = 0; i < count; i++) {
        result.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }
    }
    setOutput(result);
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
                background: "linear-gradient(135deg, #14b8a622, #14b8a644)",
                border: "1px solid #14b8a633",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px",
              }}
            >🎲</div>
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                Random Number Generator
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Generate random numbers with customizable ranges and quantities
              </p>
            </div>
          </div>
        </div>

        <div className="tool-section" style={{ marginBottom: "20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "14px" }}>Minimum</label>
              <input
                type="number"
                value={min}
                onChange={(e) => setMin(Number(e.target.value))}
                style={{ padding: "12px", borderRadius: "8px", border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text-primary)", fontSize: "16px" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "14px" }}>Maximum</label>
              <input
                type="number"
                value={max}
                onChange={(e) => setMax(Number(e.target.value))}
                style={{ padding: "12px", borderRadius: "8px", border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text-primary)", fontSize: "16px" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "14px" }}>Amount to Generate</label>
              <input
                type="number"
                min="1"
                max="10000"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                style={{ padding: "12px", borderRadius: "8px", border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text-primary)", fontSize: "16px" }}
              />
            </div>
             <div style={{ display: "flex", flexDirection: "column", gap: "8px", justifyContent: "center", paddingTop: "24px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", color: "var(--text-primary)", fontWeight: 500 }}>
                <input 
                  type="checkbox" 
                  checked={allowDuplicates} 
                  onChange={(e) => setAllowDuplicates(e.target.checked)}
                  style={{ width: "18px", height: "18px" }}
                />
                Allow Duplicates
              </label>
            </div>
          </div>
          
          <button style={{ width: "100%", padding: "14px", background: "#14b8a6", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: 700, fontSize: "16px" }} onClick={handleGenerate}>
            Generate Numbers
          </button>
        </div>

        {output.length > 0 && (
          <div className="tool-section animate-fade-in" style={{ padding: "20px", background: "var(--bg-card)", borderRadius: "16px", border: "1px solid var(--border)" }}>
             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span className="label" style={{ margin: 0, fontWeight: 600, color: "var(--text-primary)" }}>Result</span>
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
      </div>
    </main>
  );
}
