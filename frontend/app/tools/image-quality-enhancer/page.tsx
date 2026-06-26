"use client";
import * as Lucide from "lucide-react";
import { useState, useRef, useCallback } from "react";
import BackToTools from "../../components/BackToTools";
import dynamic from "next/dynamic";

const RelatedTools = dynamic(() => import("../../components/RelatedTools"));
const ToolSEO = dynamic(() => import("../../components/ToolSEO"));

function formatBytes(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

interface EnhanceSettings {
  scale: number;
  sharpness: number;
  brightness: number;
  contrast: number;
  saturation: number;
}

const DEFAULT_SETTINGS: EnhanceSettings = {
  scale: 2,
  sharpness: 50,
  brightness: 100,
  contrast: 110,
  saturation: 110,
};

function applyUnsharpMask(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  amount: number // 0\u2013100
) {
  if (amount === 0) return;
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const blurred = new Uint8ClampedArray(data);

  // Simple 3x3 Gaussian-like blur pass
  const kernel = [1, 2, 1, 2, 4, 2, 1, 2, 1];
  const kernelSum = 16;

  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      for (let c = 0; c < 3; c++) {
        let sum = 0;
        let ki = 0;
        for (let ky = -1; ky <= 1; ky++) {
          for (let kx = -1; kx <= 1; kx++) {
            const idx = ((y + ky) * width + (x + kx)) * 4 + c;
            sum += data[idx] * kernel[ki++];
          }
        }
        blurred[(y * width + x) * 4 + c] = Math.round(sum / kernelSum);
      }
    }
  }

  // Unsharp mask: original + amount * (original - blurred)
  const strength = (amount / 100) * 1.5;
  for (let i = 0; i < data.length; i += 4) {
    for (let c = 0; c < 3; c++) {
      const orig = data[i + c];
      const blur = blurred[i + c];
      const sharpened = orig + strength * (orig - blur);
      data[i + c] = Math.max(0, Math.min(255, Math.round(sharpened)));
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

export default function ImageQualityEnhancer() {
  const [image, setImage] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string | null>(null);
  const [settings, setSettings] = useState<EnhanceSettings>(DEFAULT_SETTINGS);
  const [result, setResult] = useState<{
    url: string;
    width: number;
    height: number;
    size: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid image file (JPG, PNG, WebP).");
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setError("Image must be under 20 MB.");
      return;
    }
    setImage(file);
    setResult(null);
    setError("");
    const reader = new FileReader();
    reader.onload = (e) => setOriginalPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const enhance = useCallback(async () => {
    if (!image || !originalPreview) return;
    setLoading(true);
    setError("");
    if (result?.url) URL.revokeObjectURL(result.url);

    try {
      await new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          try {
            const outW = Math.round(img.width * settings.scale);
            const outH = Math.round(img.height * settings.scale);

            // Guard against extreme sizes
            if (outW * outH > 40_000_000) {
              reject(new Error("Output resolution too large. Lower the scale factor."));
              return;
            }

            const canvas = document.createElement("canvas");
            canvas.width = outW;
            canvas.height = outH;
            const ctx = canvas.getContext("2d", { willReadFrequently: true });
            if (!ctx) { reject(new Error("Canvas not supported")); return; }

            // High-quality interpolation
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";

            // Apply CSS-filter-based brightness / contrast / saturation
            const b = settings.brightness;
            const c = settings.contrast;
            const s = settings.saturation;
            ctx.filter = `brightness(${b}%) contrast(${c}%) saturate(${s}%)`;
            ctx.drawImage(img, 0, 0, outW, outH);
            ctx.filter = "none";

            // Apply unsharp mask for sharpening
            applyUnsharpMask(ctx, outW, outH, settings.sharpness);

            canvas.toBlob(
              (blob) => {
                if (!blob) { reject(new Error("Failed to produce output image.")); return; }
                const url = URL.createObjectURL(blob);
                setResult({ url, width: outW, height: outH, size: blob.size });
                resolve();
              },
              "image/png"
            );
          } catch (err) {
            reject(err);
          }
        };
        img.onerror = () => reject(new Error("Failed to load image."));
        img.src = originalPreview;
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Enhancement failed. Try a smaller image or lower scale.");
    } finally {
      setLoading(false);
    }
  }, [image, originalPreview, settings, result]);

  const download = () => {
    if (!result) return;
    const a = document.createElement("a");
    a.href = result.url;
    a.download = `enhanced_${image?.name?.replace(/\.[^.]+$/, "") || "image"}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const Slider = ({
    label,
    key: _k,
    settingKey,
    min,
    max,
    step = 1,
    unit = "%",
    color,
  }: {
    label: string;
    key?: string;
    settingKey: keyof EnhanceSettings;
    min: number;
    max: number;
    step?: number;
    unit?: string;
    color: string;
  }) => {
    const val = settings[settingKey];
    return (
      <div style={{ marginBottom: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-secondary)" }}>{label}</span>
          <span
            style={{
              padding: "2px 10px",
              borderRadius: "6px",
              background: `${color}22`,
              color,
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            {val}{unit}
          </span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={val}
          onChange={(e) => setSettings((s) => ({ ...s, [settingKey]: Number(e.target.value) }))}
          className="range-slider"
          style={{ accentColor: color }}
        />
      </div>
    );
  };

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <div className="page-container">
        <BackToTools />

        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
            <div
              style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: "linear-gradient(135deg, #f59e0b22, #f59e0b44)",
                border: "1px solid #f59e0b33",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px",
              }}
            >
              <Lucide.Sparkles size={24} style={{ color: "#f59e0b" }} />
            </div>
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                Image Quality Enhancer - Upscale & Sharpen Photos
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Upscale, sharpen details, and adjust brightness, contrast, and saturation entirely in your browser.
              </p>
            </div>
          </div>
        </div>

        {/* Upload Area / Drop Zone */}
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
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
          {originalPreview ? (
            <div style={{ textAlign: "center" }}>
              <img
                src={originalPreview}
                alt="Original Preview"
                style={{ maxHeight: "280px", maxWidth: "100%", borderRadius: "12px", objectFit: "contain" }}
              />
              <p style={{ marginTop: "12px", color: "var(--text-secondary)", fontSize: "14px" }}>
                📄 {image?.name} · {formatBytes(image?.size || 0)}
              </p>
              <p style={{ color: "#f59e0b", fontSize: "13px", marginTop: "6px", fontWeight: 600 }}>
                Click or drop to change image
              </p>
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>
                <Lucide.FolderOpen size={48} style={{ color: "#f59e0b", marginBottom: "16px" }} />
              </div>
              <p style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "8px" }}>
                Drop your image here or click to browse
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Supports JPG, PNG, WebP · Max 20 MB
              </p>
            </div>
          )}
        </div>

        {/* Enhancement Settings */}
        {image && (
          <div className="tool-section animate-fade-in" style={{ marginBottom: "20px" }}>
            <h3 style={{ marginBottom: "20px", color: "var(--text-primary)", fontSize: "16px", fontWeight: 700 }}>
              🎛️ Enhancement Settings
            </h3>

            {/* Scale */}
            <div style={{ marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-secondary)" }}>Upscale Factor</span>
                <span style={{ padding: "2px 10px", borderRadius: "6px", background: "rgba(108,99,255,0.2)", color: "#818cf8", fontSize: "13px", fontWeight: 700 }}>
                  {settings.scale}×
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={4}
                step={0.5}
                value={settings.scale}
                onChange={(e) => setSettings((s) => ({ ...s, scale: Number(e.target.value) }))}
                className="range-slider"
                style={{ accentColor: "#818cf8" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
                <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>1× (original)</span>
                <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>4× (4K upscale)</span>
              </div>
            </div>

            <Slider label="Sharpness" settingKey="sharpness" min={0} max={100} unit="%" color="#f59e0b" />
            <Slider label="Brightness" settingKey="brightness" min={50} max={200} unit="%" color="#34d399" />
            <Slider label="Contrast" settingKey="contrast" min={50} max={200} unit="%" color="#60a5fa" />
            <Slider label="Saturation" settingKey="saturation" min={0} max={300} unit="%" color="#f472b6" />

            {/* Presets */}
            <div style={{ marginTop: "20px", borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "10px" }}>Quick Presets:</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {[
                  { label: "🔄 Reset", s: DEFAULT_SETTINGS },
                  { label: "🌟 Vivid", s: { scale: 2, sharpness: 60, brightness: 105, contrast: 120, saturation: 140 } },
                  { label: "🌙 Matte", s: { scale: 2, sharpness: 30, brightness: 95, contrast: 95, saturation: 70 } },
                  { label: "📸 Natural", s: { scale: 2, sharpness: 40, brightness: 100, contrast: 105, saturation: 105 } },
                  { label: "⚡ Ultra Sharp", s: { scale: 2, sharpness: 90, brightness: 100, contrast: 115, saturation: 110 } },
                ].map((p) => (
                  <button
                    key={p.label}
                    onClick={() => setSettings(p.s as EnhanceSettings)}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "8px",
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                      fontSize: "13px",
                      cursor: "pointer",
                      fontWeight: 500,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#6c63ff";
                      e.currentTarget.style.color = "#818cf8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Enhance Button */}
        {image && (
          <button
            className="btn-primary"
            onClick={enhance}
            disabled={loading}
            style={{ width: "100%", justifyContent: "center", marginBottom: "20px" }}
          >
            {loading ? "Enhancing..." : "✨ Enhance Image"}
          </button>
        )}

        {/* Error */}
        {error && (
          <div style={{
            padding: "14px 18px", borderRadius: "12px",
            background: "rgba(236,72,153,0.12)", border: "1px solid rgba(236,72,153,0.25)",
            color: "#f472b6", fontSize: "14px", marginBottom: "20px",
          }}>
            ⚠️ {error}
          </div>
        )}

        {/* Result */}
        {result && (
          <div className="glass-card animate-fade-in" style={{ padding: "24px" }}>
            <h3 style={{ marginBottom: "16px", color: "var(--text-primary)" }}><Lucide.CheckCircle2 size={16} style={{ marginRight: "8px", verticalAlign: "middle" }} />Enhanced Result</h3>

            {/* Before / After side-by-side */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>Before</p>
                <img
                  src={originalPreview!}
                  alt="Original"
                  style={{ width: "100%", borderRadius: "10px", objectFit: "contain", maxHeight: "200px" }}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "12px", color: "#f59e0b", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 700 }}>After ✨</p>
                <img
                  src={result.url}
                  alt="Enhanced"
                  style={{ width: "100%", borderRadius: "10px", objectFit: "contain", maxHeight: "200px", boxShadow: "0 0 20px rgba(245,158,11,0.2)" }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="responsive-stats-grid" style={{ marginBottom: "20px" }}>
              {[
                { label: "Output Resolution", value: `${result.width} × ${result.height}` },
                { label: "Enhanced Size", value: formatBytes(result.size) },
                { label: "Scale Applied", value: `${settings.scale}×` },
              ].map((s) => (
                <div key={s.label} style={{
                  textAlign: "center", padding: "14px",
                  background: "var(--bg-secondary)", borderRadius: "12px", border: "1px solid var(--border)",
                }}>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>{s.value}</div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>

            <button className="btn-primary" onClick={download}>⬇️ Download Enhanced Image</button>
          </div>
        )}

        <ToolSEO toolId="image-quality-enhancer" />
        <RelatedTools tools={[
          { href: "/tools/image-compressor", label: "Image Compressor", icon: "Image", desc: "Reduce image file size without losing quality" },
          { href: "/tools/pdf-compressor", label: "PDF Compressor", icon: "File", desc: "Compress PDF files instantly in browser" },
          { href: "/tools/qr-generator", label: "QR Code Generator", icon: "📱", desc: "Generate QR codes for any URL or text" },
          { href: "/tools/color-converter", label: "Color Converter", icon: "Palette", desc: "Convert between HEX, RGB, HSL" },
        ]} />
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          zIndex: 1000, color: "white",
        }}>
          <div className="loader" style={{ marginBottom: "20px" }} />
          <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "8px" }}>Enhancing Image...</h2>
          <p style={{ opacity: 0.7 }}>Processing locally {"\u2014"} no upload needed</p>
        </div>
      )}
    </main>
  );
}

