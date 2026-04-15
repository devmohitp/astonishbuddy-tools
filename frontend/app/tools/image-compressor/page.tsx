"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import imageCompression from "browser-image-compression";
import RelatedTools from "../../components/RelatedTools";

function formatBytes(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

export default function ImageCompressor() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [quality, setQuality] = useState(80);
  const [result, setResult] = useState<{
    originalSize: number;
    compressedSize: number;
    savingsPercent: string;
    compressedFile: File;
    previewUrl: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (file.size > 100 * 1024 * 1024) {
      setError("Photo must be under 100 MB");
      setImage(null);
      setPreview(null);
      return;
    }
    setImage(file);
    setResult(null);
    setError("");
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) handleFile(file);
  };

  const compress = async () => {
    if (!image) return;
    setLoading(true);
    setError("");
    
    if (result?.previewUrl) {
      URL.revokeObjectURL(result.previewUrl);
    }

    try {
      const options = {
        maxSizeMB: image.size / (1024 * 1024),
        maxWidthOrHeight: 4096,
        useWebWorker: true,
        initialQuality: quality / 100,
      };

      const compressedFile = await imageCompression(image, options);
      
      const originalSize = image.size;
      const compressedSize = compressedFile.size;
      const savingsPercent = (((originalSize - compressedSize) / originalSize) * 100).toFixed(1);
      
      const previewUrl = URL.createObjectURL(compressedFile);

      setResult({
        originalSize,
        compressedSize,
        savingsPercent,
        compressedFile,
        previewUrl
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Compression failed. Please try a different image.");
    } finally {
      setLoading(false);
    }
  };

  const download = () => {
    if (!result) return;
    const link = document.createElement("a");
    link.href = result.previewUrl;
    link.download = `compressed_${image?.name || "image"}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
                background: "linear-gradient(135deg, #6c63ff22, #6c63ff44)",
                border: "1px solid #6c63ff33",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px",
              }}
            >🖼️</div>
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                Image Compressor
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Reduce file size without compromising quality
              </p>
            </div>
          </div>
        </div>

        {/* Upload Area */}
        <div
          className="tool-section"
          style={{ marginBottom: "20px", cursor: "pointer" }}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp,image/gif,image/bmp,image/tiff"
            style={{ display: "none" }}
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
          {preview ? (
            <div style={{ textAlign: "center" }}>
              <img
                src={preview}
                alt="Preview"
                style={{ maxHeight: "280px", maxWidth: "100%", borderRadius: "12px", objectFit: "contain" }}
              />
              <p style={{ marginTop: "12px", color: "var(--text-secondary)", fontSize: "14px" }}>
                📄 {image?.name} · {formatBytes(image?.size || 0)}
              </p>
              <p style={{ color: "var(--accent-1)", fontSize: "13px", marginTop: "6px" }}>
                Click or drop to change image
              </p>
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>📁</div>
              <p style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "8px" }}>
                Drop your image here or click to browse
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Supports JPG, PNG, WebP · Max 100MB
              </p>
            </div>
          )}
        </div>

        {/* Quality Settings */}
        {image && (
          <div className="tool-section animate-fade-in" style={{ marginBottom: "20px" }}>
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}
            >
              <span className="label" style={{ margin: 0 }}>Compression Quality</span>
              <span
                style={{
                  padding: "4px 12px",
                  borderRadius: "8px",
                  background: quality > 70 ? "rgba(16,185,129,0.15)" : quality > 40 ? "rgba(245,158,11,0.15)" : "rgba(236,72,153,0.15)",
                  color: quality > 70 ? "#34d399" : quality > 40 ? "#fbbf24" : "#f472b6",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                {quality}%
              </span>
            </div>
            <input
              type="range"
              min={10}
              max={100}
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="range-slider"
            />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
              <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>Max Compression</span>
              <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>Highest Quality</span>
            </div>
          </div>
        )}

        {image && (
          <button className="btn-primary" onClick={compress} disabled={loading} style={{ width: "100%", justifyContent: "center", marginBottom: "20px" }}>
            {loading ? "Compressing..." : "🚀 Compress Image"}
          </button>
        )}

        {error && (
          <div
            style={{
              padding: "14px 18px", borderRadius: "12px",
              background: "rgba(236,72,153,0.12)", border: "1px solid rgba(236,72,153,0.25)",
              color: "#f472b6", fontSize: "14px", marginBottom: "20px",
            }}
          >
            ⚠️ {error}
          </div>
        )}

        {result && (
          <div className="glass-card animate-fade-in" style={{ padding: "24px" }}>
            <h3 style={{ marginBottom: "16px", color: "var(--text-primary)" }}>✅ Compression Result</h3>
            <div className="responsive-stats-grid" style={{ marginBottom: "20px" }}>
              {[
                { label: "Original Size", value: formatBytes(result.originalSize), type: "info" },
                { label: "Compressed Size", value: formatBytes(result.compressedSize), type: "success" },
                { label: "Space Saved", value: `${result.savingsPercent}%`, type: result.savingsPercent.startsWith('-') ? "warning" : "success" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    textAlign: "center", padding: "16px",
                    background: "var(--bg-secondary)", borderRadius: "12px", border: "1px solid var(--border)",
                  }}
                >
                  <div style={{ fontSize: "22px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>
            {result.previewUrl && (
              <div style={{ marginBottom: "16px" }}>
                <img
                  src={result.previewUrl}
                  alt="Compressed"
                  style={{ maxWidth: "100%", maxHeight: "250px", borderRadius: "10px", objectFit: "contain" }}
                />
              </div>
            )}
            <button className="btn-primary" onClick={download}>⬇️ Download Compressed Image</button>
          </div>
        )}
        <RelatedTools tools={[
          { href: "/tools/qr-generator", label: "QR Code Generator", icon: "📱", desc: "Generate QR codes for any URL or text" },
          { href: "/tools/bulk-qrcode-generator", label: "Bulk QR Generator", icon: "🗂️", desc: "Create multiple QR codes at once" },
          { href: "/tools/password-generator", label: "Password Generator", icon: "🔐", desc: "Generate strong, secure passwords" },
          { href: "/tools/color-converter", label: "Color Converter", icon: "🎨", desc: "Convert between HEX, RGB, HSL" },
        ]} />
      </div>
      {loading && (
        <div
          style={{
            position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
            background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            zIndex: 1000, color: "white"
          }}
        >
          <div className="loader" style={{ marginBottom: "20px" }}></div>
          <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "8px" }}>Compressing...</h2>
          <p style={{ opacity: 0.7 }}>This happens locally in your browser</p>
        </div>
      )}
    </main>
  );
}
