"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import RelatedTools from "../../components/RelatedTools";

const API_BASE = "/api";

const ECC_OPTIONS = [
  { value: "L", label: "L – Low (7%)", desc: "Best for clean environments" },
  { value: "M", label: "M – Medium (15%)", desc: "Good default choice" },
  { value: "Q", label: "Q – Quartile (25%)", desc: "Better error recovery" },
  { value: "H", label: "H – High (30%)", desc: "Best for logos overlay" },
];

export default function QRGenerator() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(300);
  const [ecc, setEcc] = useState("M");
  const [darkColor, setDarkColor] = useState("#000000");
  const [lightColor, setLightColor] = useState("#ffffff");
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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

  const generate = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/generate-qr`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, size, errorCorrectionLevel: ecc, darkColor, lightColor }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Generation failed");
      setQrCode(data.qrCode);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed. Is the backend server running?");
    } finally {
      setLoading(false);
    }
  };

  const download = () => {
    if (!qrCode) return;
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qrcode.png";
    link.click();
  };

  const presets = [
    { label: "URL", value: "https://example.com", icon: "🌐" },
    { label: "Email", value: "mailto:hello@example.com", icon: "📧" },
    { label: "Phone", value: "tel:+1234567890", icon: "📱" },
    { label: "WiFi", value: "WIFI:T:WPA;S:NetworkName;P:Password;;", icon: "📶" },
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
                background: "linear-gradient(135deg, #f59e0b22, #f59e0b44)",
                border: "1px solid #f59e0b33",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px",
              }}
            >⬛</div>
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                QR Code Generator
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Generate customizable QR codes for any text or URL
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "20px", alignItems: "start" }} className="qr-generator-grid">
          {/* Settings */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Text Input */}
            <div className="tool-section">
              <span className="label">Text / URL</span>
              <textarea
                ref={textareaRef}
                className="input-field"
                placeholder="Enter URL, text, email, phone..."
                style={{ minHeight: "100px", fontFamily: "inherit", resize: "vertical" }}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div style={{ display: "flex", gap: "8px", marginTop: "10px", flexWrap: "wrap" }}>
                <button className="btn-secondary" style={{ fontSize: "12px", padding: "6px 12px" }} onClick={handlePaste}>📋 Paste</button>
                {presets.map((p) => (
                  <button
                    key={p.label}
                    className="btn-secondary"
                    style={{ fontSize: "12px", padding: "6px 12px" }}
                    onClick={() => setText(p.value)}
                  >
                    {p.icon} {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="tool-section">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span className="label" style={{ margin: 0 }}>Size</span>
                <span style={{ color: "#f59e0b", fontWeight: 700 }}>{size}×{size}px</span>
              </div>
              <input type="range" min={100} max={600} step={50} value={size} onChange={(e) => setSize(Number(e.target.value))} className="range-slider" />
            </div>

            {/* Error Correction */}
            <div className="tool-section">
              <span className="label">Error Correction Level</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }} className="qr-ecc-grid">
                {ECC_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    style={{
                      padding: "10px 14px", borderRadius: "10px", cursor: "pointer",
                      background: ecc === opt.value ? "rgba(245,158,11,0.12)" : "var(--bg-secondary)",
                      border: `1px solid ${ecc === opt.value ? "#f59e0b44" : "var(--border)"}`,
                      display: "flex", alignItems: "flex-start", gap: "8px",
                    }}
                  >
                    <input type="radio" value={opt.value} checked={ecc === opt.value} onChange={() => setEcc(opt.value)} style={{ marginTop: "2px", accentColor: "#f59e0b" }} />
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: ecc === opt.value ? "#fbbf24" : "var(--text-primary)" }}>{opt.label}</div>
                      <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>{opt.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="tool-section">
              <span className="label">Colors</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="qr-colors-grid">
                {[
                  { label: "Dark Color", key: "dark", value: darkColor, set: setDarkColor },
                  { label: "Light Color", key: "light", value: lightColor, set: setLightColor },
                ].map((c) => (
                  <div key={c.key} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <input
                      type="color"
                      value={c.value}
                      onChange={(e) => c.set(e.target.value)}
                      style={{ width: "40px", height: "40px", borderRadius: "8px", cursor: "pointer", border: "1px solid var(--border)", background: "none" }}
                    />
                    <div>
                      <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{c.label}</div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", fontFamily: "monospace" }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="btn-primary" onClick={generate} disabled={loading || !text.trim()} style={{ width: "100%", justifyContent: "center" }}>
              {loading ? "Generating..." : "⬛ Generate QR Code"}
            </button>

            {error && (
              <div style={{ padding: "14px", borderRadius: "12px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", color: "#f87171", fontSize: "14px" }}>
                ⚠️ {error}
              </div>
            )}
          </div>

          {/* QR Preview */}
          <div
            className="qr-preview-sticky"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "24px",
              textAlign: "center",
              position: "sticky",
              top: "80px",
            }}
          >
            <h3 style={{ color: "var(--text-secondary)", fontSize: "13px", fontWeight: 600, marginBottom: "20px", letterSpacing: "1px", textTransform: "uppercase" }}>
              Preview
            </h3>
            {qrCode ? (
              <div className="animate-fade-in">
                <img src={qrCode} alt="QR Code" style={{ width: "100%", maxWidth: "280px", borderRadius: "12px" }} />
                <div className="divider" />
                <button className="btn-primary" onClick={download} style={{ width: "100%", justifyContent: "center" }}>
                  ⬇️ Download PNG
                </button>
              </div>
            ) : (
              <div style={{ padding: "60px 20px", color: "var(--text-muted)" }}>
                <div style={{ fontSize: "60px", marginBottom: "16px", filter: "grayscale(1)", opacity: 0.3 }}>⬛</div>
                <p style={{ fontSize: "13px" }}>Your QR code will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
        <RelatedTools tools={[
          { href: "/tools/bulk-qrcode-generator", label: "Bulk QR Generator", icon: "🗂️", desc: "Generate multiple QR codes at once" },
          { href: "/tools/image-compressor", label: "Image Compressor", icon: "🖼️", desc: "Reduce image file sizes" },
          { href: "/tools/password-generator", label: "Password Generator", icon: "🔐", desc: "Generate strong, secure passwords" },
          { href: "/tools/color-converter", label: "Color Converter", icon: "🎨", desc: "Convert between HEX, RGB, HSL" },
        ]} />
    </main>
  );
}
