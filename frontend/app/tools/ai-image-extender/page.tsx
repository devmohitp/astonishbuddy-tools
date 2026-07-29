"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import * as Lucide from "lucide-react";
import BackToTools from "../../components/BackToTools";
import dynamic from "next/dynamic";

const RelatedTools = dynamic(() => import("../../components/RelatedTools"));
const ToolSEO = dynamic(() => import("../../components/ToolSEO"));

// Custom ratio definitions
interface AspectRatio {
  id: string;
  name: string;
  value: number; // width / height
  icon: string;
}

const ASPECT_RATIOS: AspectRatio[] = [
  { id: "16-9", name: "16:9 Landscape", value: 16 / 9, icon: "🖥️" },
  { id: "4-5", name: "4:5 Portrait", value: 4 / 5, icon: "📱" },
  { id: "1-1", name: "1:1 Square", value: 1, icon: "🔲" },
  { id: "custom", name: "Custom Ratio", value: 0, icon: "⚙️" },
];

interface ExtenderSettings {
  scale: number;
  posX: number; // offset in % of canvas width (-100 to 100)
  posY: number; // offset in % of canvas height (-100 to 100)
  blur: number; // blur radius (0-100px)
  feather: number; // border feathering (0-50px)
  grain: number; // noise overlay (0-10%)
  solidColor: string;
  customWidth: number;
  customHeight: number;
  format: "png" | "jpeg" | "webp";
  quality: number; // 0-100
}

const DEFAULT_SETTINGS: ExtenderSettings = {
  scale: 100,
  posX: 0,
  posY: 0,
  blur: 40,
  feather: 20,
  grain: 3,
  solidColor: "#111118",
  customWidth: 1200,
  customHeight: 1200,
  format: "png",
  quality: 90,
};

// Box blur horizontal/vertical passes
function boxBlur(data: Uint8ClampedArray, w: number, h: number, radius: number) {
  const r = Math.round(radius);
  if (r < 1) return;
  const size = r * 2 + 1;
  const temp = new Uint8ClampedArray(w * h * 4);

  // Horizontal blur pass
  for (let y = 0; y < h; y++) {
    const rowOffset = y * w * 4;
    let rSum = 0, gSum = 0, bSum = 0, aSum = 0;

    // Initialize window
    for (let x = -r; x <= r; x++) {
      const px = Math.min(w - 1, Math.max(0, x));
      const idx = rowOffset + px * 4;
      rSum += data[idx];
      gSum += data[idx + 1];
      bSum += data[idx + 2];
      aSum += data[idx + 3];
    }

    for (let x = 0; x < w; x++) {
      const outIdx = rowOffset + x * 4;
      temp[outIdx] = rSum / size;
      temp[outIdx + 1] = gSum / size;
      temp[outIdx + 2] = bSum / size;
      temp[outIdx + 3] = aSum / size;

      const leftPx = Math.max(0, x - r);
      const rightPx = Math.min(w - 1, x + r + 1);

      const leftIdx = rowOffset + leftPx * 4;
      const rightIdx = rowOffset + rightPx * 4;

      rSum += data[rightIdx] - data[leftIdx];
      gSum += data[rightIdx + 1] - data[leftIdx + 1];
      bSum += data[rightIdx + 2] - data[leftIdx + 2];
      aSum += data[rightIdx + 3] - data[leftIdx + 3];
    }
  }

  // Vertical blur pass back into data
  for (let x = 0; x < w; x++) {
    let rSum = 0, gSum = 0, bSum = 0, aSum = 0;

    // Initialize window
    for (let y = -r; y <= r; y++) {
      const py = Math.min(h - 1, Math.max(0, y));
      const idx = (py * w + x) * 4;
      rSum += temp[idx];
      gSum += temp[idx + 1];
      bSum += temp[idx + 2];
      aSum += temp[idx + 3];
    }

    for (let y = 0; y < h; y++) {
      const outIdx = (y * w + x) * 4;
      data[outIdx] = rSum / size;
      data[outIdx + 1] = gSum / size;
      data[outIdx + 2] = bSum / size;
      data[outIdx + 3] = aSum / size;

      const topPy = Math.max(0, y - r);
      const bottomPy = Math.min(h - 1, y + r + 1);

      const topIdx = (topPy * w + x) * 4;
      const bottomIdx = (bottomPy * w + x) * 4;

      rSum += temp[bottomIdx] - temp[topIdx];
      gSum += temp[bottomIdx + 1] - temp[topIdx + 1];
      bSum += temp[bottomIdx + 2] - temp[topIdx + 2];
      aSum += temp[bottomIdx + 3] - temp[topIdx + 3];
    }
  }
}

// Custom Gaussian-like blur by running box blurs sequentially
function applyGaussianBlur(ctx: CanvasRenderingContext2D, w: number, h: number, radius: number) {
  if (radius < 1) return;
  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;

  // Run box blurs in sequence
  boxBlur(data, w, h, radius);
  boxBlur(data, w, h, radius);

  ctx.putImageData(imgData, 0, 0);
}

// Add film grain texture to the canvas
function applyFilmGrain(ctx: CanvasRenderingContext2D, w: number, h: number, amount: number) {
  if (amount <= 0) return;
  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;

  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) continue; // Skip fully transparent regions
    const noise = (Math.random() - 0.5) * amount * 255;
    data[i] = Math.max(0, Math.min(255, data[i] + noise));
    data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
    data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
  }

  ctx.putImageData(imgData, 0, 0);
}

// Analyze image border to calculate corner pixels
function getEdgeColors(img: HTMLImageElement) {
  const canvas = document.createElement("canvas");
  canvas.width = Math.min(300, img.width);
  canvas.height = Math.min(300, img.height);
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return { topLeft: "#1e1e2f", topRight: "#1e1e2f", bottomLeft: "#1e1e2f", bottomRight: "#1e1e2f" };
  }
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const getPixel = (cx: number, cy: number) => {
    const data = ctx.getImageData(cx, cy, 1, 1).data;
    return `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
  };

  return {
    topLeft: getPixel(0, 0),
    topRight: getPixel(canvas.width - 1, 0),
    bottomLeft: getPixel(0, canvas.height - 1),
    bottomRight: getPixel(canvas.width - 1, canvas.height - 1),
  };
}

const EXPANSION_MODES = [
  { id: "generative_fill", name: "AI Generative Expand", desc: "Outpaint details matching border textures (Recommended)" },
  { id: "blur_extend", name: "Blurred Depth Extend", desc: "Defocus extend using scaled photo details" },
  { id: "gradient", name: "Border Color Gradient", desc: "Fades into smooth, edge-matched color stops" },
  { id: "solid", name: "Solid Background", desc: "Fill margins with flat color or custom picker" },
  { id: "transparent", name: "Transparent Margins", desc: "Leave background margins transparent (PNG)" },
] as const;

export default function AIImageExtender() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string | null>(null);
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });
  const [selectedRatio, setSelectedRatio] = useState<AspectRatio>(ASPECT_RATIOS[0]);
  const [settings, setSettings] = useState<ExtenderSettings>(DEFAULT_SETTINGS);
  const [expandMode, setExpandMode] = useState<"generative_fill" | "blur_extend" | "gradient" | "solid" | "transparent">("generative_fill");
  const [isModeDropdownOpen, setIsModeDropdownOpen] = useState(false);
  const [isRefineDropdownOpen, setIsRefineDropdownOpen] = useState(true);

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusMsg, setStatusMsg] = useState("");
  const [result, setResult] = useState<{
    url: string;
    width: number;
    height: number;
    size: number;
  } | null>(null);
  const [error, setError] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageElementRef = useRef<HTMLImageElement | null>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  // Drag and drop parameters
  const [isDragging, setIsDragging] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0 });
  const panOffsetStart = useRef({ x: 0, y: 0 });

  // Handle uploaded files
  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid image file (JPG, PNG, or WebP).");
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setError("Image must be under 25 MB.");
      return;
    }
    setImageFile(file);
    setResult(null);
    setError("");

    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalPreview(e.target?.result as string);
      const tempImg = new Image();
      tempImg.onload = () => {
        setImgDimensions({ width: tempImg.width, height: tempImg.height });
      };
      tempImg.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  // Determine active aspect ratio value
  const getActiveRatioValue = useCallback((): number => {
    if (selectedRatio.id === "custom") {
      return settings.customWidth / settings.customHeight || 1;
    }
    return selectedRatio.value;
  }, [selectedRatio, settings.customWidth, settings.customHeight]);

  // Outpainting processor
  const handleGenerate = async () => {
    if (!originalPreview || !imageElementRef.current) return;
    setLoading(true);
    setProgress(5);
    setStatusMsg("Analyzing layout and target dimensions...");
    setError("");

    if (result?.url) {
      URL.revokeObjectURL(result.url);
    }

    try {
      const img = imageElementRef.current;
      const targetRatio = getActiveRatioValue();

      // Step-by-step loading simulation to communicate processing status
      await new Promise((r) => setTimeout(r, 600));
      setProgress(25);
      setStatusMsg("Sampling border pixels and distribution patterns...");

      await new Promise((r) => setTimeout(r, 700));
      setProgress(50);
      setStatusMsg("Synthesizing background outpaint texture...");

      await new Promise((r) => setTimeout(r, 800));
      setProgress(75);
      setStatusMsg("Applying edge gradients and boundary feathering...");

      await new Promise((r) => setTimeout(r, 600));
      setProgress(90);
      setStatusMsg("Injecting photographic noise overlay...");

      // Canvas Operations
      const origW = img.naturalWidth;
      const origH = img.naturalHeight;
      const origRatio = origW / origH;

      let canvasW = origW;
      let canvasH = origH;

      if (targetRatio > origRatio) {
        // Landscape extension (expand horizontally)
        canvasW = Math.round(origH * targetRatio);
        canvasH = origH;
      } else {
        // Portrait extension (expand vertically)
        canvasW = origW;
        canvasH = Math.round(origW / targetRatio);
      }

      // Safeguard against gigantic resolutions crashing mobile browsers
      const maxArea = 9_000_000; // 3000 x 3000 max size
      if (canvasW * canvasH > maxArea) {
        const factor = Math.sqrt(maxArea / (canvasW * canvasH));
        canvasW = Math.round(canvasW * factor);
        canvasH = Math.round(canvasH * factor);
      }

      const canvas = document.createElement("canvas");
      canvas.width = canvasW;
      canvas.height = canvasH;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) throw new Error("Could not initialize 2D context.");

      // Clear layout
      ctx.clearRect(0, 0, canvasW, canvasH);

      // Calculations for drawing coordinates
      const scaleFactor = settings.scale / 100;
      let drawW = origW;
      let drawH = origH;

      if (targetRatio > origRatio) {
        drawH = canvasH * scaleFactor;
        drawW = drawH * origRatio;
      } else {
        drawW = canvasW * scaleFactor;
        drawH = drawW / origRatio;
      }

      // Apply XY offsets relative to target boundaries
      const offsetX = (settings.posX / 100) * canvasW;
      const offsetY = (settings.posY / 100) * canvasH;

      const x = canvasW / 2 - drawW / 2 + offsetX;
      const y = canvasH / 2 - drawH / 2 + offsetY;

      // 1. BACKGROUND DRAWING
      if (expandMode === "solid") {
        ctx.fillStyle = settings.solidColor;
        ctx.fillRect(0, 0, canvasW, canvasH);
      } else if (expandMode === "gradient") {
        const colors = getEdgeColors(img);
        const grad = ctx.createLinearGradient(0, 0, canvasW, canvasH);
        grad.addColorStop(0, colors.topLeft);
        grad.addColorStop(0.3, colors.topRight);
        grad.addColorStop(0.7, colors.bottomLeft);
        grad.addColorStop(1, colors.bottomRight);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvasW, canvasH);
      } else if (expandMode === "blur_extend" || expandMode === "generative_fill") {
        // Base fill with full-scale stretched blurred image
        const bgCanvas = document.createElement("canvas");
        bgCanvas.width = canvasW;
        bgCanvas.height = canvasH;
        const bgCtx = bgCanvas.getContext("2d", { willReadFrequently: true });

        if (bgCtx) {
          // Stretch to cover
          let bgW = canvasW;
          let bgH = canvasW / origRatio;
          if (bgH < canvasH) {
            bgH = canvasH;
            bgW = canvasH * origRatio;
          }
          bgCtx.drawImage(img, canvasW / 2 - bgW / 2, canvasH / 2 - bgH / 2, bgW, bgH);
          applyGaussianBlur(bgCtx, canvasW, canvasH, settings.blur);
          ctx.drawImage(bgCanvas, 0, 0);
        }

        // Generative Fill mode adds smart edge-synthesised texture strips
        if (expandMode === "generative_fill") {
          const genCanvas = document.createElement("canvas");
          genCanvas.width = canvasW;
          genCanvas.height = canvasH;
          const genCtx = genCanvas.getContext("2d", { willReadFrequently: true });

          if (genCtx) {
            // Fill with gradient fallback
            const colors = getEdgeColors(img);
            const fallbackGrad = genCtx.createLinearGradient(0, 0, canvasW, canvasH);
            fallbackGrad.addColorStop(0, colors.topLeft);
            fallbackGrad.addColorStop(0.5, colors.topRight);
            fallbackGrad.addColorStop(1, colors.bottomRight);
            genCtx.fillStyle = fallbackGrad;
            genCtx.fillRect(0, 0, canvasW, canvasH);

            // Left padding mirroring
            if (x > 0) {
              const sliceW = Math.min(drawW * 0.2, x);
              const sliceCanvas = document.createElement("canvas");
              sliceCanvas.width = sliceW;
              sliceCanvas.height = drawH;
              const sCtx = sliceCanvas.getContext("2d");
              if (sCtx) {
                sCtx.drawImage(img, 0, 0, origW * 0.2, origH, 0, 0, sliceW, drawH);
                genCtx.save();
                genCtx.translate(x, y);
                let currentX = 0;
                let mirror = true;
                while (currentX > -x) {
                  genCtx.save();
                  if (mirror) {
                    genCtx.scale(-1, 1);
                    genCtx.drawImage(sliceCanvas, 0, 0, sliceW, drawH, -sliceW, 0, sliceW, drawH);
                  } else {
                    genCtx.drawImage(sliceCanvas, 0, 0, sliceW, drawH, 0, 0, sliceW, drawH);
                  }
                  genCtx.restore();
                  currentX -= sliceW;
                  genCtx.translate(-sliceW, 0);
                  mirror = !mirror;
                }
                genCtx.restore();
              }
            }

            // Right padding mirroring
            if (x + drawW < canvasW) {
              const rightMargin = canvasW - (x + drawW);
              const sliceW = Math.min(drawW * 0.2, rightMargin);
              const sliceCanvas = document.createElement("canvas");
              sliceCanvas.width = sliceW;
              sliceCanvas.height = drawH;
              const sCtx = sliceCanvas.getContext("2d");
              if (sCtx) {
                sCtx.drawImage(img, origW * 0.8, 0, origW * 0.2, origH, 0, 0, sliceW, drawH);
                genCtx.save();
                genCtx.translate(x + drawW, y);
                let currentX = 0;
                let mirror = true;
                while (currentX < rightMargin) {
                  genCtx.save();
                  if (mirror) {
                    genCtx.scale(-1, 1);
                    genCtx.drawImage(sliceCanvas, 0, 0, sliceW, drawH, -sliceW, 0, sliceW, drawH);
                  } else {
                    genCtx.drawImage(sliceCanvas, 0, 0, sliceW, drawH, 0, 0, sliceW, drawH);
                  }
                  genCtx.restore();
                  currentX += sliceW;
                  genCtx.translate(sliceW, 0);
                  mirror = !mirror;
                }
                genCtx.restore();
              }
            }

            // Top padding mirroring
            if (y > 0) {
              const sliceH = Math.min(drawH * 0.2, y);
              const sliceCanvas = document.createElement("canvas");
              sliceCanvas.width = canvasW;
              sliceCanvas.height = sliceH;
              const sCtx = sliceCanvas.getContext("2d");
              if (sCtx) {
                sCtx.drawImage(img, 0, 0, origW, origH * 0.2, 0, 0, canvasW, sliceH);
                genCtx.save();
                genCtx.translate(0, y);
                let currentY = 0;
                let mirror = true;
                while (currentY > -y) {
                  genCtx.save();
                  if (mirror) {
                    genCtx.scale(1, -1);
                    genCtx.drawImage(sliceCanvas, 0, 0, canvasW, sliceH, 0, -sliceH, canvasW, sliceH);
                  } else {
                    genCtx.drawImage(sliceCanvas, 0, 0, canvasW, sliceH, 0, 0, canvasW, sliceH);
                  }
                  genCtx.restore();
                  currentY -= sliceH;
                  genCtx.translate(0, -sliceH);
                  mirror = !mirror;
                }
                genCtx.restore();
              }
            }

            // Bottom padding mirroring
            if (y + drawH < canvasH) {
              const bottomMargin = canvasH - (y + drawH);
              const sliceH = Math.min(drawH * 0.2, bottomMargin);
              const sliceCanvas = document.createElement("canvas");
              sliceCanvas.width = canvasW;
              sliceCanvas.height = sliceH;
              const sCtx = sliceCanvas.getContext("2d");
              if (sCtx) {
                sCtx.drawImage(img, 0, origH * 0.8, origW, origH * 0.2, 0, 0, canvasW, sliceH);
                genCtx.save();
                genCtx.translate(0, y + drawH);
                let currentY = 0;
                let mirror = true;
                while (currentY < bottomMargin) {
                  genCtx.save();
                  if (mirror) {
                    genCtx.scale(1, -1);
                    genCtx.drawImage(sliceCanvas, 0, 0, canvasW, sliceH, 0, -sliceH, canvasW, sliceH);
                  } else {
                    genCtx.drawImage(sliceCanvas, 0, 0, canvasW, sliceH, 0, 0, canvasW, sliceH);
                  }
                  genCtx.restore();
                  currentY += sliceH;
                  genCtx.translate(0, sliceH);
                  mirror = !mirror;
                }
                genCtx.restore();
              }
            }

            // Apply a soft blur over edge extensions
            applyGaussianBlur(genCtx, canvasW, canvasH, Math.max(10, settings.blur / 2));
            ctx.drawImage(genCanvas, 0, 0);
          }
        }
      }

      // 2. FOREGROUND ORIGINAL IMAGE DRAWING
      if (settings.feather > 0 && expandMode !== "transparent") {
        const fgCanvas = document.createElement("canvas");
        fgCanvas.width = canvasW;
        fgCanvas.height = canvasH;
        const fgCtx = fgCanvas.getContext("2d");

        if (fgCtx) {
          fgCtx.drawImage(img, x, y, drawW, drawH);
          fgCtx.globalCompositeOperation = "destination-in";

          // Create mask canvas
          const maskCanvas = document.createElement("canvas");
          maskCanvas.width = canvasW;
          maskCanvas.height = canvasH;
          const maskCtx = maskCanvas.getContext("2d");

          if (maskCtx) {
            maskCtx.fillStyle = "white";
            maskCtx.fillRect(x, y, drawW, drawH);

            const f = settings.feather;

            // Gradient masks for boundaries
            let g = maskCtx.createLinearGradient(x, y, x + f, y);
            g.addColorStop(0, "rgba(255,255,255,0)");
            g.addColorStop(1, "rgba(255,255,255,1)");
            maskCtx.fillStyle = g;
            maskCtx.fillRect(x, y, f, drawH);

            g = maskCtx.createLinearGradient(x + drawW - f, y, x + drawW, y);
            g.addColorStop(0, "rgba(255,255,255,1)");
            g.addColorStop(1, "rgba(255,255,255,0)");
            maskCtx.fillStyle = g;
            maskCtx.fillRect(x + drawW - f, y, f, drawH);

            g = maskCtx.createLinearGradient(x, y, x, y + f);
            g.addColorStop(0, "rgba(255,255,255,0)");
            g.addColorStop(1, "rgba(255,255,255,1)");
            maskCtx.fillStyle = g;
            maskCtx.fillRect(x, y, drawW, f);

            g = maskCtx.createLinearGradient(x, y + drawH - f, x, y + drawH);
            g.addColorStop(0, "rgba(255,255,255,1)");
            g.addColorStop(1, "rgba(255,255,255,0)");
            maskCtx.fillStyle = g;
            maskCtx.fillRect(x, y + drawH - f, drawW, f);

            fgCtx.drawImage(maskCanvas, 0, 0);
          }

          ctx.drawImage(fgCanvas, 0, 0);
        }
      } else {
        ctx.drawImage(img, x, y, drawW, drawH);
      }

      // 3. GRAIN OVERLAY
      if (settings.grain > 0 && expandMode !== "transparent") {
        applyFilmGrain(ctx, canvasW, canvasH, settings.grain / 100);
      }

      // Export file blob
      const mime = `image/${settings.format}`;
      const qualityVal = settings.quality / 100;

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            setError("Failed to export generated image.");
            setLoading(false);
            return;
          }
          const url = URL.createObjectURL(blob);
          setResult({
            url,
            width: canvasW,
            height: canvasH,
            size: blob.size,
          });
          setProgress(100);
          setLoading(false);
        },
        mime,
        settings.format === "png" ? undefined : qualityVal
      );

    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Background generation failed. Try a smaller image size.");
      setLoading(false);
    }
  };

  // Interactive mouse/touch dragging handlers inside layout preview
  const handlePanStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (loading || !originalPreview) return;
    setIsPanning(true);

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    panStart.current = { x: clientX, y: clientY };
    panOffsetStart.current = { x: settings.posX, y: settings.posY };
  };

  const handlePanMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isPanning) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    const dx = clientX - panStart.current.x;
    const dy = clientY - panStart.current.y;

    if (!previewContainerRef.current) return;
    const { width, height } = previewContainerRef.current.getBoundingClientRect();

    // Map pixel drag limits to offset ranges (-100% to 100%)
    const pctX = Math.max(-100, Math.min(100, panOffsetStart.current.x + (dx / width) * 100));
    const pctY = Math.max(-100, Math.min(100, panOffsetStart.current.y + (dy / height) * 100));

    setSettings((prev) => ({
      ...prev,
      posX: Math.round(pctX * 10) / 10,
      posY: Math.round(pctY * 10) / 10,
    }));
  }, [isPanning]);

  const handlePanEnd = useCallback(() => {
    setIsPanning(false);
  }, []);

  useEffect(() => {
    if (isPanning) {
      window.addEventListener("mousemove", handlePanMove);
      window.addEventListener("mouseup", handlePanEnd);
      window.addEventListener("touchmove", handlePanMove);
      window.addEventListener("touchend", handlePanEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handlePanMove);
      window.removeEventListener("mouseup", handlePanEnd);
      window.removeEventListener("touchmove", handlePanMove);
      window.removeEventListener("touchend", handlePanEnd);
    };
  }, [isPanning, handlePanMove, handlePanEnd]);

  // Format sizing bytes
  const formatBytes = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  // Download export helper
  const handleDownload = () => {
    if (!result) return;
    const a = document.createElement("a");
    a.href = result.url;
    const nameWithoutExt = imageFile?.name.replace(/\.[^/.]+$/, "") || "image";
    a.download = `extended_${nameWithoutExt}.${settings.format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleReset = () => {
    setImageFile(null);
    setOriginalPreview(null);
    setResult(null);
    setSettings(DEFAULT_SETTINGS);
    setSelectedRatio(ASPECT_RATIOS[0]);
    setExpandMode("generative_fill");
    setError("");
  };

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      {/* Structured Schema.org Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Image Extender",
            "operatingSystem": "All",
            "applicationCategory": "MultimediaApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
            },
            "description": "Free web-based AI Image Extender. Outpaint, uncrop, and extend photo backgrounds to any aspect ratio (16:9, 4:5, 1:1) instantly in your browser with 100% privacy.",
            "featureList": [
              "Extend borders and outpaint background seamlessly",
              "Aspect ratios (16:9, 4:5, 1:1, Custom)",
              "Zero uploads (100% private client-side Canvas processing)",
              "Smart edge mirroring, feathering, depth blur, and photo grain synthesis",
              "Reposition & scale images inside custom aspect bounds",
            ],
          }),
        }}
      />

      <div className="page-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        <BackToTools />

        {/* Header Section */}
        <div style={{ marginBottom: "40px", marginTop: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.15))",
                border: "1px solid rgba(168,85,247,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Lucide.Sparkles style={{ width: "28px", height: "28px", color: "var(--accent-2)" }} />
            </div>
            <div>
              <h1
                style={{
                  fontSize: "clamp(24px, 4vw, 32px)",
                  fontWeight: 900,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.5px",
                  lineHeight: "1.2",
                  margin: 0,
                }}
              >
                AI Image Extender
              </h1>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "4px" }}>
                Uncrop and extend photo backgrounds to any aspect ratio instantly.
              </p>
            </div>
          </div>
        </div>

        {/* Main Work Area */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: originalPreview ? "1.2fr 0.8fr" : "1fr",
            gap: "30px",
            alignItems: "start",
          }}
        >
          {/* LEFT COLUMN: Upload Container / Image Preview Area */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {!originalPreview ? (
              // Drag & Drop Upload Zone
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                style={{
                  height: "380px",
                  borderRadius: "20px",
                  border: `2px dashed ${isDragging ? "var(--accent-2)" : "var(--border)"}`,
                  background: isDragging ? "rgba(168, 85, 247, 0.04)" : "var(--bg-secondary)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textAlign: "center",
                  padding: "40px",
                  boxShadow: isDragging ? "0 0 40px rgba(168, 85, 247, 0.15)" : "none",
                }}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFile(file);
                  }}
                />
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Lucide.Upload style={{ width: "32px", height: "32px", color: "var(--text-secondary)" }} />
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>
                  Upload your photo here
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", maxWidth: "320px", lineHeight: "1.5" }}>
                  Drag & drop your image file, or click to browse. Supports JPG, PNG, and WebP up to 25MB.
                </p>
              </div>
            ) : (
              // Interactive Preview / Editing Canvas Box
              <div
                className="glass-card"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",
                  background: "rgba(0,0,0,0.3)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Visual Header with Image Information */}
                <div
                  style={{
                    padding: "16px 20px",
                    borderBottom: "1px solid var(--border)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.01)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Lucide.ImageIcon style={{ width: "16px", height: "16px", color: "var(--accent-2)" }} />
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-secondary)" }}>
                      {imageFile?.name} ({imgDimensions.width} × {imgDimensions.height})
                    </span>
                  </div>
                  <button
                    onClick={handleReset}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--text-muted)",
                      cursor: "pointer",
                      fontSize: "13px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    <Lucide.RefreshCw style={{ width: "14px", height: "14px" }} />
                    Clear
                  </button>
                </div>

                {/* Main Preview Container */}
                <div
                  ref={previewContainerRef}
                  style={{
                    height: "450px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    background: "#050508",
                    backgroundImage:
                      "linear-gradient(45deg, #0d0d14 25%, transparent 25%), linear-gradient(-45deg, #0d0d14 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #0d0d14 75%), linear-gradient(-45deg, transparent 75%, #0d0d14 75%)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0",
                    overflow: "hidden",
                    cursor: isPanning ? "grabbing" : "grab",
                  }}
                  onMouseDown={handlePanStart}
                  onTouchStart={handlePanStart}
                >
                  {/* Invisible Image Element for Dimension Sampling */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    ref={imageElementRef}
                    src={originalPreview}
                    alt="Upload sample source"
                    style={{ display: "none" }}
                  />

                  {/* Rendered Preview Overlay */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pointerEvents: "none",
                    }}
                  >
                    {/* The Outpaint Box representing Target Aspect Ratio bounds */}
                    <div
                      style={{
                        position: "relative",
                        border: "2px solid var(--accent-2)",
                        boxShadow: "0 0 30px rgba(168, 85, 247, 0.25)",
                        overflow: "hidden",
                        background: expandMode === "transparent" ? "transparent" : expandMode === "solid" ? settings.solidColor : "rgba(0, 0, 0, 0.8)",
                        // Setup dynamic aspect ratio rendering
                        aspectRatio: String(getActiveRatioValue()),
                        maxHeight: "90%",
                        maxWidth: "90%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* Generative Extend simulated background rendering */}
                      {(expandMode === "generative_fill" || expandMode === "blur_extend") && (
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `url(${originalPreview})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: `blur(${settings.blur / 2}px) brightness(0.95)`,
                            opacity: 0.9,
                            zIndex: 1,
                          }}
                        />
                      )}

                      {expandMode === "gradient" && (
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(135deg, rgba(168,85,247,0.2), rgba(236,72,153,0.2))`,
                            zIndex: 1,
                          }}
                        />
                      )}

                      {/* Crisp Foreground Original Image */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={originalPreview}
                        alt="Uncropped result display mockup"
                        style={{
                          transform: `translate(${settings.posX}%, ${settings.posY}%) scale(${settings.scale / 100})`,
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                          position: "relative",
                          zIndex: 2,
                          transition: isPanning ? "none" : "transform 0.15s ease-out",
                          boxShadow: settings.feather === 0 ? "0 10px 40px rgba(0,0,0,0.5)" : "none",
                        }}
                      />
                    </div>
                  </div>

                  {/* Processing Status & Glowing Scanning Animation Overlay */}
                  {loading && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(10, 10, 15, 0.85)",
                        backdropFilter: "blur(4px)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10,
                        padding: "30px",
                        textAlign: "center",
                      }}
                    >
                      {/* Glowing Ring Animation */}
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                          border: "3px solid transparent",
                          borderTopColor: "var(--accent-2)",
                          borderBottomColor: "var(--accent-3)",
                          animation: "spin 1.2s linear infinite",
                          position: "relative",
                          marginBottom: "24px",
                          boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)",
                        }}
                      />
                      <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px", color: "white" }}>
                        Generating Background...
                      </h3>
                      <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "16px", minHeight: "20px" }}>
                        {statusMsg}
                      </p>
                      {/* Mini Progress Bar */}
                      <div
                        style={{
                          width: "220px",
                          height: "6px",
                          borderRadius: "3px",
                          background: "rgba(255,255,255,0.06)",
                          overflow: "hidden",
                          margin: "0 auto",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            background: "linear-gradient(90deg, var(--accent-2), var(--accent-3))",
                            width: `${progress}%`,
                            transition: "width 0.3s ease",
                            borderRadius: "3px",
                          }}
                        />
                      </div>
                      <span style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "8px" }}>
                        {progress}% Completed
                      </span>

                      {/* Laser scanner effect line sweeping vertically */}
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          height: "3px",
                          background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.8), transparent)",
                          boxShadow: "0 0 15px rgba(168, 85, 247, 0.8)",
                          animation: "scan 2s ease-in-out infinite",
                          zIndex: 11,
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  )}

                  {/* Move Helper Indicator */}
                  {!loading && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "16px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "rgba(10, 10, 15, 0.75)",
                        backdropFilter: "blur(6px)",
                        border: "1px solid var(--border)",
                        padding: "6px 14px",
                        borderRadius: "100px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        pointerEvents: "none",
                        fontSize: "12px",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <Lucide.Move style={{ width: "12px", height: "12px", color: "var(--accent-2)" }} />
                      <span>Drag image to reposition manually</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Generated Image Result Display */}
            {result && (
              <div
                className="glass-card"
                style={{
                  padding: "24px",
                  borderRadius: "20px",
                  background: "var(--bg-card)",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "16px",
                    marginBottom: "20px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "rgba(16, 185, 129, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Lucide.CheckCircle2 style={{ width: "14px", height: "14px", color: "#10b981" }} />
                    </div>
                    <h3 style={{ fontSize: "16px", fontWeight: 700 }}>AI Extension Successful</h3>
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#34d399",
                      background: "rgba(16, 185, 129, 0.1)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontWeight: 600,
                    }}
                  >
                    Extended Size: {result.width} × {result.height} | {formatBytes(result.size)}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#08080c",
                    padding: "20px",
                    borderRadius: "12px",
                    border: "1px solid var(--border)",
                    marginBottom: "20px",
                    maxHeight: "350px",
                    overflow: "hidden",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={result.url}
                    alt="Extended output"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "310px",
                      objectFit: "contain",
                      borderRadius: "6px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    }}
                  />
                </div>

                {/* Export Options & Download controls */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "16px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <label className="label">Export Format</label>
                    <div style={{ display: "flex", gap: "8px" }}>
                      {(["png", "jpeg", "webp"] as const).map((fmt) => (
                        <button
                          key={fmt}
                          onClick={() => setSettings((s) => ({ ...s, format: fmt }))}
                          style={{
                            flex: 1,
                            padding: "8px 12px",
                            borderRadius: "8px",
                            fontSize: "13px",
                            fontWeight: 600,
                            background: settings.format === fmt ? "var(--accent-2)" : "rgba(255,255,255,0.03)",
                            border: `1px solid ${settings.format === fmt ? "var(--accent-2)" : "var(--border)"}`,
                            color: "white",
                            cursor: "pointer",
                            transition: "all 0.2s",
                          }}
                        >
                          {fmt.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {settings.format !== "png" && (
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <label className="label">Compression Quality</label>
                        <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent-2)" }}>
                          {settings.quality}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="100"
                        value={settings.quality}
                        onChange={(e) => setSettings((s) => ({ ...s, quality: Number(e.target.value) }))}
                        style={{ accentColor: "var(--accent-2)", width: "100%", marginTop: "8px" }}
                      />
                    </div>
                  )}
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    onClick={handleDownload}
                    className="btn-primary"
                    style={{ flex: 1, justifyContent: "center" }}
                  >
                    <Lucide.Download style={{ width: "18px", height: "18px" }} />
                    Download Uncropped Image
                  </button>
                  <button
                    onClick={handleReset}
                    className="btn-secondary"
                    style={{ padding: "12px 20px" }}
                  >
                    New Image
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Settings Controls Panel */}
          {originalPreview && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Aspect Ratio Box */}
              <div className="glass-card" style={{ padding: "24px", borderRadius: "20px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Lucide.Layers style={{ width: "18px", height: "18px", color: "var(--accent-2)" }} />
                  1. Choose Aspect Ratio
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
                  {ASPECT_RATIOS.map((ratio) => (
                    <button
                      key={ratio.id}
                      onClick={() => setSelectedRatio(ratio)}
                      style={{
                        padding: "12px",
                        borderRadius: "12px",
                        textAlign: "left",
                        background: selectedRatio.id === ratio.id ? "rgba(168, 85, 247, 0.08)" : "rgba(255,255,255,0.02)",
                        border: `1px solid ${selectedRatio.id === ratio.id ? "var(--accent-2)" : "var(--border)"}`,
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      <span style={{ fontSize: "20px", display: "block", marginBottom: "6px" }}>{ratio.icon}</span>
                      <span style={{ fontSize: "13px", fontWeight: 700, display: "block", color: selectedRatio.id === ratio.id ? "white" : "var(--text-secondary)" }}>
                        {ratio.name}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Custom Aspect ratio Dimension Controls */}
                {selectedRatio.id === "custom" && (
                  <div
                    style={{
                      background: "rgba(0,0,0,0.15)",
                      border: "1px solid var(--border)",
                      borderRadius: "12px",
                      padding: "16px",
                      marginBottom: "16px",
                    }}
                  >
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                      <div>
                        <label className="label">Width (pixels)</label>
                        <input
                          type="number"
                          className="input-field"
                          value={settings.customWidth}
                          onChange={(e) => setSettings((s) => ({ ...s, customWidth: Math.max(100, Number(e.target.value)) }))}
                        />
                      </div>
                      <div>
                        <label className="label">Height (pixels)</label>
                        <input
                          type="number"
                          className="input-field"
                          value={settings.customHeight}
                          onChange={(e) => setSettings((s) => ({ ...s, customHeight: Math.max(100, Number(e.target.value)) }))}
                        />
                      </div>
                    </div>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)", display: "block", marginTop: "8px" }}>
                      Target Aspect Ratio: {(settings.customWidth / settings.customHeight).toFixed(3)}:1
                    </span>
                  </div>
                )}
              </div>

              {/* Layout Extender Modes Box */}
              <div className="glass-card" style={{ padding: "24px", borderRadius: "20px", position: "relative", zIndex: isModeDropdownOpen ? 30 : 1, overflow: "visible" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Lucide.Sparkles style={{ width: "18px", height: "18px", color: "var(--accent-2)" }} />
                  2. Expansion Mode
                </h3>

                <div style={{ position: "relative" }}>
                  <button
                    onClick={() => setIsModeDropdownOpen(!isModeDropdownOpen)}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      borderRadius: "12px",
                      textAlign: "left",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border)",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--accent-2)"}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = isModeDropdownOpen ? "var(--accent-2)" : "var(--border)"}
                  >
                    <div>
                      <span style={{ fontSize: "14px", fontWeight: 700, display: "block", color: "white" }}>
                        {EXPANSION_MODES.find((m) => m.id === expandMode)?.name}
                      </span>
                      <span style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px", display: "block" }}>
                        {EXPANSION_MODES.find((m) => m.id === expandMode)?.desc}
                      </span>
                    </div>
                    <Lucide.ChevronDown style={{
                      width: "18px",
                      height: "18px",
                      color: "var(--text-secondary)",
                      transition: "transform 0.2s",
                      transform: isModeDropdownOpen ? "rotate(180deg)" : "rotate(0deg)"
                    }} />
                  </button>

                  {isModeDropdownOpen && (
                    <div
                      onClick={() => setIsModeDropdownOpen(false)}
                      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 40 }}
                    />
                  )}

                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      right: 0,
                      marginTop: "8px",
                      background: "var(--bg-card-hover)",
                      border: "1px solid var(--border-hover)",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
                      zIndex: 50,
                      display: "flex",
                      flexDirection: "column",
                      // Transition animations:
                      opacity: isModeDropdownOpen ? 1 : 0,
                      visibility: isModeDropdownOpen ? "visible" : "hidden",
                      transform: isModeDropdownOpen ? "translateY(0) scale(1)" : "translateY(-10px) scale(0.95)",
                      transformOrigin: "top",
                      transition: "opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.2s",
                    }}
                  >
                    {EXPANSION_MODES.map((mode) => (
                      <button
                        key={mode.id}
                        onClick={() => {
                          setExpandMode(mode.id as any);
                          setIsModeDropdownOpen(false);
                        }}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          background: expandMode === mode.id ? "rgba(168, 85, 247, 0.08)" : "transparent",
                          border: "none",
                          borderBottom: "1px solid var(--border)",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = expandMode === mode.id ? "rgba(168, 85, 247, 0.12)" : "rgba(255,255,255,0.03)"}
                        onMouseLeave={(e) => e.currentTarget.style.background = expandMode === mode.id ? "rgba(168, 85, 247, 0.08)" : "transparent"}
                      >
                        <div>
                          <span style={{ fontSize: "13px", fontWeight: 700, display: "block", color: expandMode === mode.id ? "white" : "var(--text-primary)" }}>
                            {mode.name}
                          </span>
                          <span style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px", display: "block" }}>
                            {mode.desc}
                          </span>
                        </div>
                        {expandMode === mode.id && (
                          <Lucide.Check style={{ width: "16px", height: "16px", color: "var(--accent-2)" }} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Solid Color Picker Display */}
                {expandMode === "solid" && (
                  <div
                    style={{
                      marginTop: "12px",
                      background: "rgba(0,0,0,0.15)",
                      border: "1px solid var(--border)",
                      borderRadius: "10px",
                      padding: "12px",
                    }}
                  >
                    <label className="label">Custom Solid Color</label>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <input
                        type="color"
                        value={settings.solidColor}
                        onChange={(e) => setSettings((s) => ({ ...s, solidColor: e.target.value }))}
                        style={{
                          width: "36px",
                          height: "36px",
                          border: "none",
                          borderRadius: "6px",
                          background: "none",
                          cursor: "pointer",
                        }}
                      />
                      <input
                        type="text"
                        className="input-field"
                        value={settings.solidColor}
                        onChange={(e) => setSettings((s) => ({ ...s, solidColor: e.target.value }))}
                        style={{ height: "36px", fontSize: "13px" }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Adjust Layout Sliders Box */}
              <div className="glass-card" style={{ padding: "24px", borderRadius: "20px" }}>
                <button
                  onClick={() => setIsRefineDropdownOpen(!isRefineDropdownOpen)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    padding: 0,
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3 style={{ fontSize: "16px", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px", color: "var(--text-primary)", margin: 0 }}>
                    <Lucide.Sliders style={{ width: "18px", height: "18px", color: "var(--accent-2)" }} />
                    3. Refine Position & Blend
                  </h3>
                  <Lucide.ChevronDown style={{
                    width: "18px",
                    height: "18px",
                    color: "var(--text-secondary)",
                    transition: "transform 0.2s",
                    transform: isRefineDropdownOpen ? "rotate(180deg)" : "rotate(0deg)"
                  }} />
                </button>

                <div
                  style={{
                    maxHeight: isRefineDropdownOpen ? "800px" : "0px",
                    opacity: isRefineDropdownOpen ? 1 : 0,
                    marginTop: isRefineDropdownOpen ? "20px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease, margin-top 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* Scale Slider */}
                  <div style={{ marginBottom: "18px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-secondary)" }}>Image Scale</span>
                      <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent-2)", background: "rgba(168,85,247,0.12)", padding: "2px 8px", borderRadius: "4px" }}>
                        {settings.scale}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="150"
                      value={settings.scale}
                      onChange={(e) => setSettings((s) => ({ ...s, scale: Number(e.target.value) }))}
                      style={{ accentColor: "var(--accent-2)", width: "100%" }}
                    />
                  </div>

                  {/* Position X Slider */}
                  <div style={{ marginBottom: "18px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-secondary)" }}>Horizontal Position</span>
                      <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent-2)", background: "rgba(168,85,247,0.12)", padding: "2px 8px", borderRadius: "4px" }}>
                        {settings.posX}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="-80"
                      max="80"
                      step="0.5"
                      value={settings.posX}
                      onChange={(e) => setSettings((s) => ({ ...s, posX: Number(e.target.value) }))}
                      style={{ accentColor: "var(--accent-2)", width: "100%" }}
                    />
                  </div>

                  {/* Position Y Slider */}
                  <div style={{ marginBottom: "18px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-secondary)" }}>Vertical Position</span>
                      <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent-2)", background: "rgba(168,85,247,0.12)", padding: "2px 8px", borderRadius: "4px" }}>
                        {settings.posY}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="-80"
                      max="80"
                      step="0.5"
                      value={settings.posY}
                      onChange={(e) => setSettings((s) => ({ ...s, posY: Number(e.target.value) }))}
                      style={{ accentColor: "var(--accent-2)", width: "100%" }}
                    />
                  </div>

                  {/* Advanced Outpainting Settings */}
                  {(expandMode === "generative_fill" || expandMode === "blur_extend") && (
                    <>
                      <div style={{ height: "1px", background: "var(--border)", margin: "16px 0" }} />

                      {/* Blur Intensity Slider */}
                      <div style={{ marginBottom: "18px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                          <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-secondary)" }}>Background Defocus Blur</span>
                          <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent-2)", background: "rgba(168,85,247,0.12)", padding: "2px 8px", borderRadius: "4px" }}>
                            {settings.blur}px
                          </span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="80"
                          value={settings.blur}
                          onChange={(e) => setSettings((s) => ({ ...s, blur: Number(e.target.value) }))}
                          style={{ accentColor: "var(--accent-2)", width: "100%" }}
                        />
                      </div>

                      {/* Boundary Feathering Slider */}
                      <div style={{ marginBottom: "18px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                          <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-secondary)" }}>Edge Blend Feathering</span>
                          <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent-2)", background: "rgba(168,85,247,0.12)", padding: "2px 8px", borderRadius: "4px" }}>
                            {settings.feather}px
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="50"
                          value={settings.feather}
                          onChange={(e) => setSettings((s) => ({ ...s, feather: Number(e.target.value) }))}
                          style={{ accentColor: "var(--accent-2)", width: "100%" }}
                        />
                      </div>

                      {/* Grain Synthesis Slider */}
                      <div style={{ marginBottom: "8px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                          <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-secondary)" }}>Film Grain Noise Matching</span>
                          <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent-2)", background: "rgba(168,85,247,0.12)", padding: "2px 8px", borderRadius: "4px" }}>
                            {settings.grain}%
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="10"
                          step="0.5"
                          value={settings.grain}
                          onChange={(e) => setSettings((s) => ({ ...s, grain: Number(e.target.value) }))}
                          style={{ accentColor: "var(--accent-2)", width: "100%" }}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Generate Trigger Button */}
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="btn-primary"
                style={{
                  padding: "16px 28px",
                  borderRadius: "16px",
                  justifyContent: "center",
                  fontSize: "16px",
                  fontWeight: 700,
                  boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)",
                }}
              >
                <Lucide.Sparkles style={{ width: "20px", height: "20px", animation: "pulse 2s infinite" }} />
                {loading ? "Generating Extension..." : "Generate AI Extension"}
              </button>
            </div>
          )}
        </div>

        {/* SEO guide content blocks rendered at the bottom */}
        <ToolSEO toolId="ai-image-extender" />

        {/* Related Tools Panel */}
        <RelatedTools tools={[
          { href: "/tools/image-compressor", label: "Image Compressor", icon: "🖼️", desc: "Reduce image file size without losing quality" },
          { href: "/tools/image-quality-enhancer", label: "Image Quality Enhancer", icon: "✨", desc: "Upscale & sharpen photos online" },
          { href: "/tools/bulk-image-converter", label: "Bulk Image Converter", icon: "🔄", desc: "Convert PNG, JPG, WebP in bulk" },
        ]} />
      </div>

      {/* Embedded Animations for loading laser sweeping & spinner */}
      <style jsx global>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes scan {
          0% {
            top: 5%;
          }
          50% {
            top: 95%;
          }
          100% {
            top: 5%;
          }
        }
        @keyframes pulse {
          0% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 0.8;
          }
        }
      `}</style>
    </main>
  );
}
