"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { PDFDocument } from "pdf-lib";
import RelatedTools from "../../components/RelatedTools";
import ToolSEO from "../../components/ToolSEO";

function formatBytes(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

const COMPRESSION_PRESETS = [
  {
    key: "low",
    label: "Low",
    description: "High quality, good size reduction (~20–40%)",
    imageQuality: 0.82,
    scale: 1.8,
    icon: "🟢",
  },
  {
    key: "medium",
    label: "Medium",
    description: "Balanced quality and file size (~40–60%)",
    imageQuality: 0.65,
    scale: 1.5,
    icon: "🟡",
  },
  {
    key: "high",
    label: "High",
    description: "Smallest file, reduced quality (~60–75%)",
    imageQuality: 0.45,
    scale: 1.2,
    icon: "🔴",
  },
];

export default function PDFCompressor() {
  const [file, setFile] = useState<File | null>(null);
  const [preset, setPreset] = useState("medium");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{
    originalSize: number;
    compressedSize: number;
    savingsPercent: string;
    compressedBytes: Uint8Array;
    fileName: string;
  } | null>(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File) => {
    if (!f.type.includes("pdf")) {
      setError("Please upload a valid PDF file.");
      return;
    }
    if (f.size > 100 * 1024 * 1024) {
      setError("File must be under 100 MB.");
      return;
    }
    setFile(f);
    setResult(null);
    setError("");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) handleFile(dropped);
  };

  const compress = async () => {
    if (!file) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const selectedPresetConfig = COMPRESSION_PRESETS.find((p) => p.key === preset)!;
      const { imageQuality, scale } = selectedPresetConfig;

      // Dynamically import pdfjs-dist (browser-only, avoids SSR crash)
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

      // Load the PDF with pdf.js for rendering
      const arrayBuffer = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
      const pdfJsDoc = await loadingTask.promise;
      const numPages = pdfJsDoc.numPages;

      // Create a new pdf-lib document to hold compressed pages
      const newPdfDoc = await PDFDocument.create();

      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const page = await pdfJsDoc.getPage(pageNum);
        const viewport = page.getViewport({ scale });

        // Render page to an offscreen canvas
        const canvas = document.createElement("canvas");
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        const ctx = canvas.getContext("2d")!;

        await page.render({ canvas, canvasContext: ctx, viewport }).promise;

        // Encode canvas as JPEG at the target quality
        const jpegDataUrl = canvas.toDataURL("image/jpeg", imageQuality);
        const base64 = jpegDataUrl.split(",")[1];
        const jpegBytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));

        // Embed the JPEG image into the new PDF
        const jpegImage = await newPdfDoc.embedJpg(jpegBytes);
        const pdfPage = newPdfDoc.addPage([canvas.width, canvas.height]);
        pdfPage.drawImage(jpegImage, {
          x: 0,
          y: 0,
          width: canvas.width,
          height: canvas.height,
        });
      }

      const compressedBytes = await newPdfDoc.save();
      const originalSize = file.size;
      const compressedSize = compressedBytes.length;
      const savingsPercent = (
        ((originalSize - compressedSize) / originalSize) *
        100
      ).toFixed(1);

      setResult({
        originalSize,
        compressedSize,
        savingsPercent,
        compressedBytes,
        fileName: file.name.replace(/\.pdf$/i, "_compressed.pdf"),
      });
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? `Compression failed: ${err.message}`
          : "Could not process this PDF. It may be encrypted or corrupted."
      );
    } finally {
      setLoading(false);
    }
  };

  const download = () => {
    if (!result) return;
    const blob = new Blob([new Uint8Array(result.compressedBytes)], {
      type: "application/pdf",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = result.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const selectedPreset = COMPRESSION_PRESETS.find((p) => p.key === preset)!;
  const savingsNum = result ? parseFloat(result.savingsPercent) : 0;

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <div className="page-container">
        <Link href="/" className="back-btn">
          ← Back to Tools
        </Link>

        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #ef444422, #ef444444)",
                border: "1px solid #ef444433",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              📄
            </div>
            <div>
              <h1
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.5px",
                }}
              >
                Free PDF Compressor Online — Reduce PDF File Size Instantly
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Compress PDF files in your browser — no upload to servers, 100%
                private
              </p>
            </div>
          </div>
        </div>

        {/* Upload Area */}
        <div
          className="tool-section"
          style={{
            marginBottom: "20px",
            cursor: "pointer",
            border: dragging
              ? "2px dashed #ef4444"
              : "2px dashed var(--border)",
            transition: "border-color 0.2s, background 0.2s",
            background: dragging
              ? "rgba(239,68,68,0.05)"
              : "var(--bg-card)",
          }}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            style={{ display: "none" }}
            onChange={(e) =>
              e.target.files?.[0] && handleFile(e.target.files[0])
            }
          />
          {file ? (
            <div style={{ textAlign: "center", padding: "24px 20px" }}>
              <div style={{ fontSize: "48px", marginBottom: "12px" }}>📄</div>
              <p
                style={{
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                {file.name}
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                {formatBytes(file.size)}
              </p>
              <p
                style={{
                  color: "#ef4444",
                  fontSize: "13px",
                  marginTop: "8px",
                }}
              >
                Click or drop to change file
              </p>
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "48px 20px" }}>
              <div style={{ fontSize: "56px", marginBottom: "16px" }}>📁</div>
              <p
                style={{
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  fontSize: "16px",
                  marginBottom: "8px",
                }}
              >
                Drop your PDF here or click to browse
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Supports PDF files · Max 100 MB
              </p>
            </div>
          )}
        </div>

        {/* Compression Level */}
        {file && (
          <div
            className="tool-section animate-fade-in"
            style={{ marginBottom: "20px" }}
          >
            <span className="label">Compression Level</span>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                marginTop: "12px",
              }}
            >
              {COMPRESSION_PRESETS.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setPreset(p.key)}
                  style={{
                    padding: "16px 12px",
                    borderRadius: "12px",
                    border:
                      preset === p.key
                        ? "2px solid #ef4444"
                        : "1px solid var(--border)",
                    background:
                      preset === p.key
                        ? "rgba(239,68,68,0.08)"
                        : "var(--bg-secondary)",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "6px" }}>
                    {p.icon}
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      color:
                        preset === p.key ? "#ef4444" : "var(--text-primary)",
                      fontSize: "14px",
                      marginBottom: "4px",
                    }}
                  >
                    {p.label}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    {p.description}
                  </div>
                </button>
              ))}
            </div>
            <p
              style={{
                marginTop: "12px",
                fontSize: "13px",
                color: "var(--text-muted)",
              }}
            >
              ⚡ Selected:{" "}
              <strong style={{ color: "var(--text-secondary)" }}>
                {selectedPreset.label} compression
              </strong>{" "}
              — {selectedPreset.description}
            </p>
          </div>
        )}

        {/* Compress Button */}
        {file && (
          <button
            className="btn-primary"
            onClick={compress}
            disabled={loading}
            style={{
              width: "100%",
              justifyContent: "center",
              marginBottom: "20px",
              background: loading
                ? "rgba(239,68,68,0.5)"
                : "linear-gradient(135deg, #ef4444, #dc2626)",
              boxShadow: loading
                ? "none"
                : "0 8px 24px rgba(239,68,68,0.35)",
            }}
          >
            {loading ? "⏳ Compressing PDF..." : "🗜️ Compress PDF"}
          </button>
        )}

        {/* Error */}
        {error && (
          <div
            style={{
              padding: "14px 18px",
              borderRadius: "12px",
              background: "rgba(239,68,68,0.12)",
              border: "1px solid rgba(239,68,68,0.25)",
              color: "#f87171",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            ⚠️ {error}
          </div>
        )}

        {/* Result */}
        {result && (
          <div
            className="glass-card animate-fade-in"
            style={{ padding: "28px" }}
          >
            <h3
              style={{
                marginBottom: "20px",
                color: "var(--text-primary)",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              ✅ Compression Complete
            </h3>

            <div
              className="responsive-stats-grid"
              style={{ marginBottom: "24px" }}
            >
              {[
                {
                  label: "Original Size",
                  value: formatBytes(result.originalSize),
                  color: "var(--text-secondary)",
                  bg: "var(--bg-secondary)",
                },
                {
                  label: "Compressed Size",
                  value: formatBytes(result.compressedSize),
                  color: "#34d399",
                  bg: "rgba(16,185,129,0.08)",
                },
                {
                  label: "Space Saved",
                  value:
                    savingsNum > 0
                      ? `${result.savingsPercent}%`
                      : "Optimized",
                  color:
                    savingsNum > 0
                      ? "#34d399"
                      : savingsNum < 0
                        ? "#f59e0b"
                        : "#818cf8",
                  bg:
                    savingsNum > 0
                      ? "rgba(16,185,129,0.08)"
                      : "rgba(245,158,11,0.08)",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    textAlign: "center",
                    padding: "20px 16px",
                    background: s.bg,
                    borderRadius: "14px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      color: s.color,
                      marginBottom: "6px",
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {savingsNum < 0 && (
              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: "10px",
                  background: "rgba(245,158,11,0.1)",
                  border: "1px solid rgba(245,158,11,0.25)",
                  color: "#fbbf24",
                  fontSize: "13px",
                  marginBottom: "20px",
                  lineHeight: 1.6,
                }}
              >
                ℹ️ This PDF is already well-optimized. The re-saved file may be
                slightly larger due to pdf-lib rebuilding the object structure.
                It is still safe to download.
              </div>
            )}

            <button
              className="btn-primary"
              onClick={download}
              style={{
                background: "linear-gradient(135deg, #ef4444, #dc2626)",
                boxShadow: "0 8px 24px rgba(239,68,68,0.35)",
              }}
            >
              ⬇️ Download Compressed PDF
            </button>
          </div>
        )}

        {/* Info Banner */}
        <div
          style={{
            marginTop: "24px",
            padding: "16px 20px",
            borderRadius: "12px",
            background: "rgba(239,68,68,0.05)",
            border: "1px solid rgba(239,68,68,0.15)",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "20px", flexShrink: 0 }}>🔒</span>
          <p
            style={{
              fontSize: "13px",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            <strong style={{ color: "var(--text-primary)" }}>
              100% Private:
            </strong>{" "}
            Your PDF is processed entirely inside your browser using
            WebAssembly. No file is ever uploaded to our servers. Your documents
            stay completely private.
          </p>
        </div>

        <ToolSEO toolId="pdf-compressor" />
        <RelatedTools
          tools={[
            {
              href: "/tools/image-compressor",
              label: "Image Compressor",
              icon: "🖼️",
              desc: "Reduce image file size without losing quality",
            },
            {
              href: "/tools/bulk-qrcode-generator",
              label: "Bulk QR Generator",
              icon: "🔳",
              desc: "Create hundreds of QR codes at once",
            },
            {
              href: "/tools/password-generator",
              label: "Password Generator",
              icon: "🔐",
              desc: "Generate strong, secure passwords",
            },
            {
              href: "/tools/base64-converter",
              label: "Base64 Converter",
              icon: "🔄",
              desc: "Encode and decode Base64 data",
            },
          ]}
        />
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(8px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            color: "white",
          }}
        >
          <div className="loader" style={{ marginBottom: "20px" }} />
          <h2
            style={{ fontSize: "24px", fontWeight: 800, marginBottom: "8px" }}
          >
            Compressing PDF...
          </h2>
          <p style={{ opacity: 0.7 }}>Processing locally in your browser</p>
        </div>
      )}
    </main>
  );
}
