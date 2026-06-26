"use client";
import * as Lucide from "lucide-react";
import { useState, useRef, useCallback } from "react";
import BackToTools from "../../components/BackToTools";
import dynamic from "next/dynamic";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const RelatedTools = dynamic(() => import("../../components/RelatedTools"));
const ToolSEO = dynamic(() => import("../../components/ToolSEO"));

// ─── Types ────────────────────────────────────────────────────────────────────

type OutputFormat = "jpeg" | "png" | "webp";
type ConversionStatus = "pending" | "processing" | "done" | "error";

interface ImageItem {
  id: string;
  file: File;
  originalUrl: string;
  name: string;
  originalSize: number;
  convertedBlob: Blob | null;
  convertedSize: number;
  outputName: string;
  status: ConversionStatus;
  errorMsg: string;
  previewUrl: string | null;
}

interface Settings {
  outputFormat: OutputFormat;
  quality: number; // 0\u2013100 for jpeg/webp; ignored for png
  resizeEnabled: boolean;
  maxWidth: number;
  maxHeight: number;
  maintainAspectRatio: boolean;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatBytes(bytes: number) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function buildOutputName(originalName: string, fmt: OutputFormat) {
  const base = originalName.replace(/\.[^.]+$/, "");
  const ext = fmt === "jpeg" ? "jpg" : fmt;
  return `${base}.${ext}`;
}

const FORMAT_LABELS: Record<OutputFormat, string> = {
  jpeg: "JPG",
  png: "PNG",
  webp: "WebP",
};

const FORMAT_MIME: Record<OutputFormat, string> = {
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
};

const CONVERSION_PRESETS = [
  { label: "PNG → JPG", from: "PNG, WebP, AVIF, BMP", to: "jpeg" as OutputFormat },
  { label: "JPG → WebP", from: "JPG, PNG, BMP", to: "webp" as OutputFormat },
  { label: "Any → PNG", from: "JPG, WebP, AVIF, BMP, GIF", to: "png" as OutputFormat },
  { label: "Any → WebP", from: "JPG, PNG, AVIF, GIF", to: "webp" as OutputFormat },
];

// ─── Canvas converter ─────────────────────────────────────────────────────────

async function convertImage(
  item: ImageItem,
  settings: Settings
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;

      if (settings.resizeEnabled) {
        const mw = settings.maxWidth || width;
        const mh = settings.maxHeight || height;

        if (settings.maintainAspectRatio) {
          const ratio = Math.min(mw / width, mh / height, 1); // never upscale
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        } else {
          width = Math.min(mw, width);
          height = Math.min(mh, height);
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) { reject(new Error("Canvas not supported")); return; }

      // White background for JPEG (no transparency)
      if (settings.outputFormat === "jpeg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, width, height);

      const quality = settings.outputFormat === "png" ? undefined : settings.quality / 100;
      canvas.toBlob(
        (blob) => {
          if (!blob) { reject(new Error("Conversion failed")); return; }
          resolve(blob);
        },
        FORMAT_MIME[settings.outputFormat],
        quality
      );
    };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = item.originalUrl;
  });
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function BulkImageConverter() {
  const [items, setItems] = useState<ImageItem[]>([]);
  const [settings, setSettings] = useState<Settings>({
    outputFormat: "jpeg",
    quality: 90,
    resizeEnabled: false,
    maxWidth: 1920,
    maxHeight: 1080,
    maintainAspectRatio: true,
  });
  const [converting, setConverting] = useState(false);
  const [globalProgress, setGlobalProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── File handling ─────────────────────────────────────────────────────────

  const addFiles = useCallback((files: File[]) => {
    const imageFiles = files.filter((f) => f.type.startsWith("image/"));
    if (!imageFiles.length) return;

    const newItems: ImageItem[] = imageFiles.map((file) => ({
      id: uid(),
      file,
      originalUrl: URL.createObjectURL(file),
      name: file.name,
      originalSize: file.size,
      convertedBlob: null,
      convertedSize: 0,
      outputName: buildOutputName(file.name, settings.outputFormat),
      status: "pending" as ConversionStatus,
      errorMsg: "",
      previewUrl: null,
    }));

    setItems((prev) => [...prev, ...newItems]);
  }, [settings.outputFormat]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    addFiles(Array.from(e.dataTransfer.files));
  };

  const removeItem = (id: string) => {
    setItems((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item) {
        URL.revokeObjectURL(item.originalUrl);
        if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
      }
      return prev.filter((i) => i.id !== id);
    });
  };

  const clearAll = () => {
    items.forEach((i) => {
      URL.revokeObjectURL(i.originalUrl);
      if (i.previewUrl) URL.revokeObjectURL(i.previewUrl);
    });
    setItems([]);
    setGlobalProgress(0);
  };

  // ── Update output format in item names when format changes ────────────────

  const updateFormat = (fmt: OutputFormat) => {
    setSettings((s) => ({ ...s, outputFormat: fmt }));
    setItems((prev) =>
      prev.map((i) => ({
        ...i,
        outputName: buildOutputName(i.name, fmt),
        status: "pending",
        convertedBlob: null,
        convertedSize: 0,
        previewUrl: null,
      }))
    );
  };

  // ── Convert all ───────────────────────────────────────────────────────────

  const convertAll = async () => {
    if (!items.length || converting) return;
    setConverting(true);
    setGlobalProgress(0);

    const total = items.length;
    let done = 0;

    for (const item of items) {
      setItems((prev) =>
        prev.map((i) => i.id === item.id ? { ...i, status: "processing" } : i)
      );

      try {
        const blob = await convertImage(item, settings);
        const previewUrl = URL.createObjectURL(blob);
        setItems((prev) =>
          prev.map((i) =>
            i.id === item.id
              ? { ...i, status: "done", convertedBlob: blob, convertedSize: blob.size, previewUrl }
              : i
          )
        );
      } catch (err) {
        setItems((prev) =>
          prev.map((i) =>
            i.id === item.id
              ? { ...i, status: "error", errorMsg: err instanceof Error ? err.message : "Failed" }
              : i
          )
        );
      }

      done++;
      setGlobalProgress(Math.round((done / total) * 100));
    }

    setConverting(false);
  };

  // ── Download single ───────────────────────────────────────────────────────

  const downloadSingle = (item: ImageItem) => {
    if (!item.convertedBlob) return;
    saveAs(item.convertedBlob, item.outputName);
  };

  // ── Download all as ZIP ───────────────────────────────────────────────────

  const downloadZip = async () => {
    const done = items.filter((i) => i.status === "done" && i.convertedBlob);
    if (!done.length) return;

    const zip = new JSZip();
    const folder = zip.folder("converted-images")!;
    done.forEach((item) => {
      folder.file(item.outputName, item.convertedBlob!);
    });

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, "astonishbuddy-converted.zip");
  };

  // ── Stats ─────────────────────────────────────────────────────────────────

  const doneItems = items.filter((i) => i.status === "done");
  const pendingItems = items.filter((i) => i.status === "pending");
  const errorItems = items.filter((i) => i.status === "error");
  const originalTotal = items.reduce((s, i) => s + i.originalSize, 0);
  const convertedTotal = doneItems.reduce((s, i) => s + i.convertedSize, 0);
  const savings = originalTotal > 0
    ? (((originalTotal - convertedTotal) / originalTotal) * 100).toFixed(1)
    : "0";

  // ─────────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <div className="page-container">
        <BackToTools />

        {/* ── Header ── */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
            <div style={{
              width: "52px", height: "52px", borderRadius: "14px",
              background: "linear-gradient(135deg, #06b6d422, #06b6d444)",
              border: "1px solid #06b6d433",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px",
            }}><Lucide.RefreshCw size={24} style={{ color: "#06b6d422" }} /></div>
            <div>
              <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                Free Bulk Image Converter Online PNG, JPG, WebP
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Convert multiple images at once Resize Download as ZIP 100% in-browser
              </p>
            </div>
          </div>
        </div>

        {/* ── Conversion Presets ── */}
        <div className="tool-section" style={{ marginBottom: "16px" }}>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1px" }}>
            Quick Presets
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {CONVERSION_PRESETS.map((p) => (
              <button
                key={p.label}
                onClick={() => updateFormat(p.to)}
                style={{
                  padding: "8px 16px", borderRadius: "10px", fontSize: "13px", fontWeight: 600,
                  cursor: "pointer", transition: "all 0.2s",
                  background: settings.outputFormat === p.to ? "rgba(6,182,212,0.2)" : "var(--bg-secondary)",
                  border: settings.outputFormat === p.to ? "1px solid #06b6d4" : "1px solid var(--border)",
                  color: settings.outputFormat === p.to ? "#22d3ee" : "var(--text-secondary)",
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Settings Panel ── */}
        <div className="tool-section" style={{ marginBottom: "16px" }}>
          <h3 style={{ color: "var(--text-primary)", fontSize: "15px", fontWeight: 700, marginBottom: "18px" }}>
            ⚙️ Conversion Settings
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {/* Output Format */}
            <div>
              <p className="label">Output Format</p>
              <div style={{ display: "flex", gap: "8px" }}>
                {(["jpeg", "png", "webp"] as OutputFormat[]).map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => updateFormat(fmt)}
                    style={{
                      flex: 1, padding: "10px 8px", borderRadius: "10px",
                      fontSize: "13px", fontWeight: 700, cursor: "pointer",
                      transition: "all 0.2s", border: "1px solid",
                      background: settings.outputFormat === fmt ? "rgba(6,182,212,0.15)" : "var(--bg-secondary)",
                      borderColor: settings.outputFormat === fmt ? "#06b6d4" : "var(--border)",
                      color: settings.outputFormat === fmt ? "#22d3ee" : "var(--text-secondary)",
                    }}
                  >
                    {FORMAT_LABELS[fmt]}
                  </button>
                ))}
              </div>
            </div>

            {/* Quality */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <span className="label" style={{ margin: 0 }}>Quality {settings.outputFormat === "png" && "(lossless)"}</span>
                <span style={{
                  padding: "2px 10px", borderRadius: "6px", fontSize: "13px", fontWeight: 700,
                  background: "rgba(6,182,212,0.15)", color: "#22d3ee",
                  opacity: settings.outputFormat === "png" ? 0.4 : 1,
                }}>
                  {settings.quality}%
                </span>
              </div>
              <input
                type="range" min={10} max={100} value={settings.quality}
                disabled={settings.outputFormat === "png"}
                onChange={(e) => setSettings((s) => ({ ...s, quality: Number(e.target.value) }))}
                className="range-slider"
                style={{ accentColor: "#06b6d4", opacity: settings.outputFormat === "png" ? 0.4 : 1 }}
              />
            </div>
          </div>

          {/* Resize Options */}
          <div style={{ marginTop: "20px", borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <input
                type="checkbox" id="resizeEnabled"
                checked={settings.resizeEnabled}
                onChange={(e) => setSettings((s) => ({ ...s, resizeEnabled: e.target.checked }))}
                className="checkbox-custom"
              />
              <label htmlFor="resizeEnabled" style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", cursor: "pointer" }}>
                📐 Resize images while converting
              </label>
            </div>

            {settings.resizeEnabled && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", paddingLeft: "28px" }} className="animate-fade-in">
                <div>
                  <p className="label">Max Width (px)</p>
                  <input
                    type="number" value={settings.maxWidth} min={1} max={8000}
                    onChange={(e) => setSettings((s) => ({ ...s, maxWidth: Number(e.target.value) }))}
                    className="input-field"
                    style={{ padding: "8px 12px" }}
                  />
                </div>
                <div>
                  <p className="label">Max Height (px)</p>
                  <input
                    type="number" value={settings.maxHeight} min={1} max={8000}
                    onChange={(e) => setSettings((s) => ({ ...s, maxHeight: Number(e.target.value) }))}
                    className="input-field"
                    style={{ padding: "8px 12px" }}
                  />
                </div>
                <div style={{ gridColumn: "span 2", display: "flex", alignItems: "center", gap: "8px" }}>
                  <input
                    type="checkbox" id="aspectRatio"
                    checked={settings.maintainAspectRatio}
                    onChange={(e) => setSettings((s) => ({ ...s, maintainAspectRatio: e.target.checked }))}
                    className="checkbox-custom"
                  />
                  <label htmlFor="aspectRatio" style={{ fontSize: "13px", color: "var(--text-secondary)", cursor: "pointer" }}>
                    Maintain aspect ratio (never upscale)
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Drop Zone ── */}
        <div
          className="tool-section"
          style={{
            marginBottom: "16px", cursor: "pointer",
            border: "2px dashed var(--border)",
            background: "var(--bg-secondary)",
            transition: "all 0.2s",
          }}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            (e.currentTarget as HTMLDivElement).style.borderColor = "#06b6d4";
            (e.currentTarget as HTMLDivElement).style.background = "rgba(6,182,212,0.05)";
          }}
          onDragLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
            (e.currentTarget as HTMLDivElement).style.background = "var(--bg-secondary)";
          }}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            style={{ display: "none" }}
            onChange={(e) => addFiles(Array.from(e.target.files || []))}
          />
          <div style={{ textAlign: "center", padding: "32px 20px" }}>
            <div style={{ fontSize: "48px", marginBottom: "14px" }}><Lucide.FolderOpen size={48} style={{ color: "var(--accent-1)", marginBottom: "16px" }} /></div>
            <p style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "6px" }}>
              Drop images here or click to browse
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "13px" }}>
              Supports JPG, PNG, WebP, BMP, GIF, AVIF Multiple files at once
            </p>
          </div>
        </div>

        {/* ── File List ── */}
        {items.length > 0 && (
          <div className="animate-fade-in">
            {/* Summary bar */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "12px 16px", borderRadius: "12px",
              background: "var(--bg-card)", border: "1px solid var(--border)",
              marginBottom: "12px", flexWrap: "wrap", gap: "10px",
            }}>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                  📦 <strong style={{ color: "var(--text-primary)" }}>{items.length}</strong> files
                </span>
                {doneItems.length > 0 && (
                  <>
                    <span style={{ fontSize: "13px", color: "#34d399" }}>
                      ✅ {doneItems.length} converted
                    </span>
                    <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                      {formatBytes(originalTotal)} → {formatBytes(convertedTotal)}
                      {Number(savings) > 0 && <span style={{ color: "#34d399" }}> ({savings}% smaller)</span>}
                      {Number(savings) < 0 && <span style={{ color: "#fbbf24" }}> ({Math.abs(Number(savings))}% larger)</span>}
                    </span>
                  </>
                )}
                {errorItems.length > 0 && (
                  <span style={{ fontSize: "13px", color: "#f472b6" }}><Lucide.AlertTriangle size={16} style={{ marginRight: "8px", verticalAlign: "middle" }} />{errorItems.length} errors</span>
                )}
              </div>
              <button
                onClick={clearAll}
                style={{
                  padding: "6px 14px", borderRadius: "8px", fontSize: "12px",
                  background: "transparent", border: "1px solid var(--border)",
                  color: "var(--text-muted)", cursor: "pointer",
                }}
              >
                🗑 Clear All
              </button>
            </div>

            {/* Progress bar */}
            {converting && (
              <div style={{ marginBottom: "12px" }}>
                <div style={{
                  height: "6px", borderRadius: "3px",
                  background: "var(--bg-secondary)", overflow: "hidden",
                }}>
                  <div style={{
                    height: "100%", borderRadius: "3px",
                    width: `${globalProgress}%`,
                    background: "linear-gradient(90deg, #06b6d4, #6c63ff)",
                    transition: "width 0.3s ease",
                  }} />
                </div>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "6px" }}>
                  Converting... {globalProgress}%
                </p>
              </div>
            )}

            {/* File rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    padding: "12px 16px", borderRadius: "12px",
                    background: "var(--bg-card)", border: "1px solid",
                    borderColor:
                      item.status === "done" ? "rgba(52,211,153,0.2)"
                        : item.status === "error" ? "rgba(244,114,182,0.2)"
                          : item.status === "processing" ? "rgba(6,182,212,0.2)"
                            : "var(--border)",
                    transition: "border-color 0.3s",
                  }}
                >
                  {/* Thumbnail */}
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "8px",
                    overflow: "hidden", flexShrink: 0,
                    background: "var(--bg-secondary)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.previewUrl || item.originalUrl}
                      alt={item.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                      fontSize: "13px", fontWeight: 600, color: "var(--text-primary)",
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>
                      {item.name}
                    </p>
                    <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>
                      {formatBytes(item.originalSize)}
                      {item.status === "done" && (
                        <span style={{ color: "#34d399" }}>
                          {" "}→ {formatBytes(item.convertedSize)} \u00B7{item.outputName}
                        </span>
                      )}
                      {item.status === "error" && (
                        <span style={{ color: "#f472b6" }}> \u00B7{item.errorMsg}</span>
                      )}
                    </p>
                  </div>

                  {/* Status badge */}
                  <div style={{ flexShrink: 0 }}>
                    {item.status === "pending" && (
                      <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>Pending</span>
                    )}
                    {item.status === "processing" && (
                      <span style={{ fontSize: "12px", color: "#22d3ee" }}><Lucide.RefreshCw size={14} className="animate-spin" style={{ marginRight: "6px" }} />Converting ...</span>
                    )}
                    {item.status === "done" && (
                      <button
                        onClick={() => downloadSingle(item)}
                        style={{
                          padding: "5px 12px", borderRadius: "8px", fontSize: "12px", fontWeight: 600,
                          background: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.3)",
                          color: "#34d399", cursor: "pointer",
                        }}
                      >
                        ⬇ Save
                      </button>
                    )}
                    {item.status === "error" && (
                      <span style={{ fontSize: "12px", color: "#f472b6" }}>❌ Error</span>
                    )}
                  </div>

                  {/* Remove button */}
                  {!converting && (
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        width: "28px", height: "28px", borderRadius: "6px", flexShrink: 0,
                        background: "transparent", border: "1px solid var(--border)",
                        color: "var(--text-muted)", cursor: "pointer", fontSize: "14px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {pendingItems.length > 0 && (
                <button
                  className="btn-primary"
                  onClick={convertAll}
                  disabled={converting}
                  style={{ flex: 1, justifyContent: "center", minWidth: "180px" }}
                >
                  {converting ? "\u23F3 Converting..." : `🚀 Convert ${pendingItems.length > 0 ? `${items.length} Images` : "All"} to ${FORMAT_LABELS[settings.outputFormat]}`}
                </button>
              )}
              {!converting && items.length > 0 && pendingItems.length === 0 && (
                <button
                  className="btn-primary"
                  onClick={convertAll}
                  style={{ flex: 1, justifyContent: "center", minWidth: "180px" }}
                >
                  🔄 Re-convert All
                </button>
              )}
              {doneItems.length > 1 && !converting && (
                <button
                  className="btn-secondary"
                  onClick={downloadZip}
                  style={{ flex: 1, justifyContent: "center", minWidth: "180px" }}
                >
                  📦 Download ZIP ({doneItems.length} files)
                </button>
              )}
              {doneItems.length === 1 && !converting && (
                <button
                  className="btn-secondary"
                  onClick={() => downloadSingle(doneItems[0])}
                  style={{ flex: 1, justifyContent: "center", minWidth: "180px" }}
                >
                  ⬇️ Download Image
                </button>
              )}
            </div>
          </div>
        )}

        {/* ── Empty state features list ── */}
        {items.length === 0 && (
          <div className="tool-section animate-fade-in" style={{ marginTop: "16px" }}>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
              What you can do
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px" }}>
              {[
                { icon: "Image", title: "Convert Any Format", desc: "PNG, JPG, WebP, AVIF, BMP, GIF → any format" },
                { icon: "📦", title: "Bulk ZIP Download", desc: "Convert dozens of files and get them in one ZIP" },
                { icon: "📐", title: "Resize on Convert", desc: "Set max width/height while converting" },
                { icon: "🔒", title: "100% Private", desc: "All processing happens in your browser. No uploads." },
                { icon: "⚡", title: "Fast & Free", desc: "No signup, no watermark, no limits" },
                { icon: "Palette", title: "Quality Control", desc: "Adjust quality for JPG and WebP output" },
              ].map((f) => (
                <div key={f.title} style={{
                  padding: "14px", borderRadius: "12px",
                  background: "var(--bg-secondary)", border: "1px solid var(--border)",
                }}>
                  <div style={{ fontSize: "22px", marginBottom: "8px" }}>{f.icon}</div>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>{f.title}</p>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.5 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <ToolSEO toolId="bulk-image-converter" />
        <RelatedTools tools={[
          { href: "/tools/image-compressor", label: "Image Compressor", icon: "Image", desc: "Reduce image file size without losing quality" },
          { href: "/tools/image-quality-enhancer", label: "Image Quality Enhancer", icon: "Sparkles", desc: "Upscale & sharpen images online" },
          { href: "/tools/pdf-compressor", label: "PDF Compressor", icon: "File", desc: "Compress PDF files instantly" },
          { href: "/tools/bulk-qrcode-generator", label: "Bulk QR Generator", icon: "QrCode", desc: "Generate hundreds of QR codes" },
        ]} />
      </div>
    </main>
  );
}

