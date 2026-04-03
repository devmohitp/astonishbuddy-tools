"use client";
import { useState } from "react";
import Link from "next/link";
import CopyButton from "../../components/CopyButton";

export default function ColorConverter() {
  const [input, setInput] = useState("");
  const [hex, setHex] = useState("");
  const [rgb, setRgb] = useState("");
  const [hsl, setHsl] = useState("");
  const [error, setError] = useState("");

  const hexToRgb = (hex: string) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result && hex.length === 4) {
      result = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(hex);
      if (result) {
        result[1] += result[1];
        result[2] += result[2];
        result[3] += result[3];
      }
    }
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
  };

  const parseColor = (colorStr: string) => {
    let ctx = document.createElement("canvas").getContext("2d");
    if (!ctx) return null;
    ctx.fillStyle = colorStr;
    if (ctx.fillStyle === "#000000" && colorStr.trim().toLowerCase() !== "black" && colorStr.trim() !== "#000" && colorStr.trim() !== "#000000") {
      return null; // Invalid color fallback in canvas is usually black
    }
    return ctx.fillStyle; // Always returns #RRGGBB
  };

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255; g /= 255; b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  };

  const handleConvert = () => {
    setError("");
    const parsedHex = parseColor(input);
    if (!parsedHex) {
      setError("Invalid color format. Try HEX, RGB, or color names.");
      setHex(""); setRgb(""); setHsl("");
      return;
    }
    setHex(parsedHex.toUpperCase());
    
    const rgbStr = hexToRgb(parsedHex);
    if (rgbStr) {
      setRgb(rgbStr);
      let match = rgbStr.match(/\d+/g);
      if (match && match.length === 3) {
        setHsl(rgbToHsl(parseInt(match[0]), parseInt(match[1]), parseInt(match[2])));
      }
    }
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
                background: "linear-gradient(135deg, #f43f5e22, #f43f5e44)",
                border: "1px solid #f43f5e33",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px",
              }}
            >🎨</div>
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                Color Code Converter
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Convert colors between HEX, RGB, and HSL
              </p>
            </div>
          </div>
        </div>

        <div className="tool-section" style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
             <span className="label" style={{ margin: 0, fontWeight: 600, color: "var(--text-primary)" }}>Input Color (HEX, RGB, HSL, or Name)</span>
             <button className="btn-secondary" style={{ padding: "6px 12px", fontSize: "12px" }} onClick={() => {setInput(""); setHex(""); setRgb(""); setHsl("");}}>
              Clear
            </button>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <input
              type="text"
              placeholder="#FF5733 or rgb(255, 87, 51)"
              style={{ flex: 1, padding: "14px", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text-primary)", fontSize: "16px" }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleConvert()}
            />
            <button style={{ padding: "14px 24px", background: "#f43f5e", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: 600, letterSpacing: "0.5px" }} onClick={handleConvert}>
              Convert
            </button>
          </div>
          {error && <p style={{ color: "#ef4444", fontSize: "14px", marginTop: "10px" }}>{error}</p>}
        </div>

        {hex && (
          <div className="tool-section animate-fade-in" style={{ padding: "20px", background: "var(--bg-card)", borderRadius: "16px", border: "1px solid var(--border)" }}>
             <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
               <div style={{ width: "80px", height: "80px", borderRadius: "16px", background: hex, border: "2px solid var(--border)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}></div>
               <div>
                 <h3 style={{ margin: 0, fontSize: "20px", color: "var(--text-primary)" }}>Color Preview</h3>
               </div>
             </div>
             
             <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
               <ColorRow label="HEX" value={hex} />
               <ColorRow label="RGB" value={rgb} />
               <ColorRow label="HSL" value={hsl} />
             </div>
          </div>
        )}
      </div>
    </main>
  );
}

function ColorRow({ label, value }: { label: string, value: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "var(--bg-primary)", borderRadius: "8px", border: "1px solid var(--border)" }}>
      <span style={{ fontWeight: 600, color: "var(--text-secondary)", width: "50px" }}>{label}</span>
      <span style={{ flex: 1, color: "var(--text-primary)", fontFamily: "monospace", fontSize: "16px", paddingLeft: "16px" }}>{value}</span>
      <CopyButton textToCopy={value} style={{ padding: "6px 12px", fontSize: "12px" }} />
    </div>
  );
}
