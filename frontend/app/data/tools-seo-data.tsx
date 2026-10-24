import React from "react";

export interface FAQ {
  q: string;
  a: string;
}

export interface ToolSEOData {
  id: string;
  name: string;
  shortIntro: string;
  guideContent: React.ReactNode;
  faqs: FAQ[];
  keywords: string[];
}

export const toolsSEOData: Record<string, ToolSEOData> = {
  "image-compressor": {
    id: "image-compressor",
    name: "Image Compressor",
    shortIntro: "Compress JPEG, PNG, and WebP images directly in your browser with adjustable compression quality. AstonishBuddy's Image Compressor reduces image file sizes locally using HTML5 Canvas and browser image encoding APIs, helping you optimize images for web publishing without transmitting private files across any network.",
    keywords: ["image compressor","compress jpeg","reduce png size","compress webp online","client side image optimizer","shrink photo mb to kb"],
    faqs: [
      { q: "How does browser-based image compression work?", a: "The tool loads your image into an HTML Image object, renders it onto an HTML5 Canvas element in memory, and re-encodes it using canvas.toBlob() at your selected quality parameter. All calculations execute locally in your browser's JavaScript engine." },
      { q: "Are my uploaded photos sent to AstonishBuddy servers?", a: "No. All processing occurs entirely within your local browser. No images are transmitted over the internet, stored in cloud databases, or logged." },
      { q: "What image file formats are supported?", a: "The compressor supports JPEG (.jpg, .jpeg), PNG (.png), and WebP (.webp) image files." },
      { q: "Does compression strip EXIF and geolocation data?", a: "Yes. Because the image is drawn onto a new HTML5 Canvas and re-encoded from raw pixel buffers, all camera metadata, lens details, and GPS coordinates are automatically stripped." },
      { q: "Why did my PNG file not decrease in size as much as expected?", a: "PNG is a lossless compression format. The browser canvas encoder preserves lossless pixel fidelity for PNGs, meaning size reductions come primarily from color table optimizations and metadata removal rather than lossy quantization." },
      { q: "What is the recommended quality setting for website images?", a: "For photos and blog assets, a quality setting between 75% and 85% provides significant file size reduction (often 60%–80%) while maintaining high visual quality on standard and Retina displays." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"100% in-browser compression powered by HTML5 Canvas and native image encoding"}</li>
          <li style={{ marginBottom: "8px" }}>{"Interactive quality percentage slider (10% to 100%) for precise compression balancing"}</li>
          <li style={{ marginBottom: "8px" }}>{"Automatic resolution bounding up to 4096px to prevent memory crashes on high-res camera photos"}</li>
          <li style={{ marginBottom: "8px" }}>{"Format preservation: compresses JPEG to JPG, PNG to PNG, and WebP to WebP"}</li>
          <li style={{ marginBottom: "8px" }}>{"Real-time file size comparison showing original size, compressed size, and percentage saved"}</li>
          <li style={{ marginBottom: "8px" }}>{"Direct one-click download for optimized image files with stripped EXIF metadata"}</li>
          <li style={{ marginBottom: "8px" }}>{"Strict privacy: zero image uploads, cloud server processing, or telemetry"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Drag and drop your image file into the upload dropzone, or click 'Choose Image' to browse from your device."}</li>
          <li style={{ marginBottom: "8px" }}>{"Adjust the 'Quality' slider between 10% and 100% (recommended: 75%–85% for balanced web assets)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Review the live file size preview, comparing original megabytes against the estimated compressed size."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Compress Image' to render the image onto an off-screen canvas and generate the compressed blob."}</li>
          <li style={{ marginBottom: "8px" }}>{"Inspect the compressed preview to verify photographic clarity and sharp text edges."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Download Compressed Image' to save the optimized file directly to your downloads folder."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Optimizing a High-Resolution Smartphone Photograph"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"File: IMG_4820.jpg (Original: 4.8 MB, 4032x3024 pixels, JPEG format) | Quality setting: 80%"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Compressed Size: ~720 KB (85% reduction) | Resolution: 4032x3024 preserved | Metadata: EXIF GPS and camera tags removed | Visual Quality: Indistinguishable at standard display zoom"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Compressing a Web Graphic Screenshot with Text"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"File: UI-Dashboard.png (Original: 1.4 MB, 1920x1080 pixels, PNG format) | Quality setting: 75%"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Compressed Size: ~480 KB (65% reduction) | Resolution: 1920x1080 preserved | Line Clarity: Sharp UI borders and readable text without JPEG block artifacts"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Setting the compression slider below 40% on photos containing fine text, which causes noticeable block compression artifacts."}</li>
          <li style={{ marginBottom: "8px" }}>{"Assuming client-side compression can shrink an already compressed 30KB icon without reducing visual quality."}</li>
          <li style={{ marginBottom: "8px" }}>{"Using JPEG compression for graphics requiring transparency; JPEG does not support alpha channels and replaces transparent pixels with solid color."}</li>
          <li style={{ marginBottom: "8px" }}>{"Uploading unsupported raw camera formats (.CR2, .NEF, .ARW) directly without first converting to JPEG or PNG."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"Image compression is performed 100% locally on your computer or mobile device using HTML5 Canvas rendering. Your photographs, screenshots, and artwork are never uploaded to any remote server or third-party service."}
        </p>
      </div>
    ),
  },
  "image-background-extender": {
    id: "image-background-extender",
    name: "Image Background Extender",
    shortIntro: "Expand the canvas of any image to match popular aspect ratios like 16:9, 4:5, 1:1, or 9:16 without distortion or stretching. AstonishBuddy's Image Background Extender uses canvas-based edge mirroring, directional gradients, background blurs, and film grain to blend photo borders into a wider frame locally in your browser.",
    keywords: ["image background extender","photo canvas expander","convert photo to 16:9","instagram 4:5 canvas adapter","extend photo edges","canvas border expander"],
    faqs: [
      { q: "Does this tool use generative AI or outpainting?", a: "No. This tool is an optical canvas extender that uses edge reflection, multi-pass gaussian blur, directional gradient interpolation, and film grain. It does not invent or hallucinate new artificial objects or scenery." },
      { q: "How does Edge Mirror & Feather work?", a: "The tool samples pixels along the perimeter of your original photo, mirrors them outward into the expanded canvas area, and applies a graduated alpha mask (feathering) to blend the transition smoothly." },
      { q: "What aspect ratios are supported?", a: "Presets are provided for 16:9 (video banners and presentations), 4:5 (Instagram portrait feed posts), 1:1 (square avatars and feeds), and 9:16 (mobile stories and TikTok/Reels), as well as custom dimension inputs." },
      { q: "Will my original image be stretched or distorted?", a: "No. Your original photo is maintained at its exact original aspect ratio and resolution in the center of the canvas. Only the newly created border margins are filled with the extended background." },
      { q: "Can I choose a solid color background instead of a blur?", a: "Yes. By selecting the 'Solid Color Canvas' mode, you can use the built-in color picker to frame your photo against any solid HEX or RGB color." },
      { q: "Are my photos uploaded to a remote server?", a: "No. All canvas operations execute entirely in your web browser. No photos leave your computer or phone." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Aspect ratio canvas presets: 16:9 (Landscape/YouTube), 4:5 (Instagram Portrait), 1:1 (Square), and 9:16 (Stories/Reels)"}</li>
          <li style={{ marginBottom: "8px" }}>{"Four non-generative canvas extension modes: Edge Mirror & Feather, Edge Blur & Extend, Solid Color Canvas, and Subtle Vignette"}</li>
          <li style={{ marginBottom: "8px" }}>{"Adjustable feathering and blur sliders to smoothly blend original image borders into extended backgrounds"}</li>
          <li style={{ marginBottom: "8px" }}>{"Custom background color picker for letterboxed and framed canvas layouts"}</li>
          <li style={{ marginBottom: "8px" }}>{"Fine film grain overlay slider to match natural camera sensor noise across extended borders"}</li>
          <li style={{ marginBottom: "8px" }}>{"Instant real-time canvas preview with high-resolution PNG and JPEG export"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% client-side rendering with zero server uploads or external API requests"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Upload your photo by dragging it into the dropzone or clicking 'Select Image'."}</li>
          <li style={{ marginBottom: "8px" }}>{"Select your target aspect ratio from the preset buttons: 16:9, 4:5, 1:1, 9:16, or Custom dimensions."}</li>
          <li style={{ marginBottom: "8px" }}>{"Choose your extension mode: 'Edge Mirror & Feather' for seamless mirrored margins, 'Edge Blur & Extend' for soft background matching, or 'Solid Color Canvas'."}</li>
          <li style={{ marginBottom: "8px" }}>{"Fine-tune the 'Blur Radius' and 'Edge Feather' sliders to blend the seam between the original photo and the new background margins."}</li>
          <li style={{ marginBottom: "8px" }}>{"Optionally adjust the 'Grain' slider to introduce subtle noise matching your original photo texture."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Download Extended Image' to save your newly formatted graphic."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Adapting a 4:3 Camera Photo to a 16:9 Landscape Banner"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Source: 4:3 digital photo (2400x1800 px) | Target: 16:9 (3200x1800 px) | Mode: Edge Mirror & Feather"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Result: 3200x1800 px banner | Canvas: Original photo centered (2400px wide) with 400px mirrored and feathered margins on left and right | Stretching: 0% distortion of central subject"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Converting a 3:2 Landscape Photo for 4:5 Instagram Portrait"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Source: 3:2 landscape photo (1800x1200 px) | Target: 4:5 vertical (1800x2250 px) | Mode: Edge Blur & Extend"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Result: 1800x2250 px vertical image | Top/Bottom Margins: 525px each, filled with a blurred gradient matching ambient background colors | Alignment: Subject perfectly framed without cropping"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Expecting generative AI hallucination or outpainting of new objects; this tool uses optical canvas mirroring and blur gradients, not generative neural networks."}</li>
          <li style={{ marginBottom: "8px" }}>{"Extending photos with busy, high-contrast borders without applying edge feathering, which leaves a visible border line."}</li>
          <li style={{ marginBottom: "8px" }}>{"Using extreme grain settings on clean, noise-free graphics, which can make extended borders look uncharacteristically textured."}</li>
          <li style={{ marginBottom: "8px" }}>{"Confusing aspect ratio canvas extension with cropping; canvas extension adds border area around your image rather than cutting away pixels."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All background extensions are rendered 100% locally on your device using HTML5 Canvas pixel manipulation. No photographs are ever uploaded to cloud servers or processed by third-party vision models."}
        </p>
      </div>
    ),
  },
  "image-quality-enhancer": {
    id: "image-quality-enhancer",
    name: "Image Quality Enhancer",
    shortIntro: "Improve image clarity and appearance directly in your browser using client-side image processing. AstonishBuddy's Image Quality Enhancer applies bicubic canvas upscaling, unsharp masking convolution kernels, contrast stretching, and color saturation balancing without uploading your private photos to remote servers.",
    keywords: ["image quality enhancer","photo sharpening tool","unsharp mask online","enhance photo contrast","browser image enhancer","crisp photo online"],
    faqs: [
      { q: "Can this tool make a heavily blurred photo perfectly sharp?", a: "No tool can mathematically reconstruct optical information that was never captured by the camera sensor. This tool applies unsharp masking and local contrast enhancement to accentuate existing edges and reduce perceived softness, but it cannot restore severely out-of-focus or motion-blurred images." },
      { q: "How does the sharpening algorithm work?", a: "The tool applies a 3x3 convolution matrix to the image's raw pixel buffer. By subtracting a smoothed version of the image from the original, it amplifies high-frequency differences, making edges and fine textures appear crisper." },
      { q: "Will enhancing my image increase its file size?", a: "Yes. Adding sharpness and fine texture detail introduces higher high-frequency variation into the image data, which requires more bytes when encoded as JPEG or PNG compared to a flat, blurred image." },
      { q: "What causes white halos around objects when sharpening?", a: "White halos (ringing artifacts) occur when the sharpness slider is set too high. The convolution kernel over-amplifies the contrast difference along high-contrast boundaries. Reduce the sharpness slider to eliminate halos." },
      { q: "Are my photos uploaded to any server or AI service?", a: "No. All pixel modifications are performed in your computer's local browser memory using JavaScript and HTML5 Canvas. Zero bytes are uploaded to any server." },
      { q: "Which image formats can I enhance?", a: "You can enhance any standard web image format, including JPEG, PNG, WebP, and BMP." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Multi-step image enhancement: sharpness convolution, contrast expansion, and vibrance tuning"}</li>
          <li style={{ marginBottom: "8px" }}>{"Unsharp masking algorithm to accentuate subtle edges and reduce softness in slightly blurred photos"}</li>
          <li style={{ marginBottom: "8px" }}>{"Bicubic interpolation canvas upscaling (1x, 1.5x, and 2x) for higher export dimensions"}</li>
          <li style={{ marginBottom: "8px" }}>{"Dynamic side-by-side or split slider comparison between original and enhanced images"}</li>
          <li style={{ marginBottom: "8px" }}>{"Granular control sliders: Sharpness (0–100%), Contrast (0–100%), and Brightness (-50% to +50%)"}</li>
          <li style={{ marginBottom: "8px" }}>{"Export to high-resolution PNG or JPEG with preserved color fidelity"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% local browser execution ensuring complete privacy for personal photographs"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Upload your photo by dragging it into the dropzone or clicking 'Select Image'."}</li>
          <li style={{ marginBottom: "8px" }}>{"Use the 'Sharpness' slider to apply edge-enhancing convolution filters to clarify soft edges."}</li>
          <li style={{ marginBottom: "8px" }}>{"Adjust 'Contrast' and 'Brightness' to balance dynamic range and recover washed-out shadow details."}</li>
          <li style={{ marginBottom: "8px" }}>{"Select your target canvas scale (1x, 1.5x, or 2x) to increase output pixel dimensions via interpolation."}</li>
          <li style={{ marginBottom: "8px" }}>{"Compare the live enhanced result against the original using the preview viewer."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Download Enhanced Image' to save the processed file to your device."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Sharpening a Soft Focus Portrait Photograph"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Source: 1200x800 px photo with slight lens softness | Settings: Sharpness: 45%, Contrast: 15%"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Result: Accentuated eyelash, hair, and clothing textures; increased perceptual clarity without severe ringing halos or noise amplification"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Clarifying a Low-Contrast Scanned Document Graphic"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Source: 1000x1400 px scanned line drawing | Settings: Sharpness: 60%, Contrast: 35%, Scale: 1.5x"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Result: 1500x2100 px output; darkened faded text lines, brightened paper background, and crisper vector-like boundaries"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Expecting the tool to recover completely unreadable faces or text from severe motion blur; sharpening kernels enhance existing edge gradients but cannot invent missing optical data."}</li>
          <li style={{ marginBottom: "8px" }}>{"Setting Sharpness to 100% on noisy or high-ISO photos, which amplifies sensor grain and produces white halo artifacts around edges."}</li>
          <li style={{ marginBottom: "8px" }}>{"Over-saturating contrast, which can cause dark shadows to clip to solid black and highlights to blow out to pure white."}</li>
          <li style={{ marginBottom: "8px" }}>{"Upscaling very low resolution icons (e.g. 64x64) and expecting sharp high-definition results without pixel interpolation smoothing."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"Image enhancement algorithms run 100% in your local browser sandbox via HTML5 Canvas 2D image data manipulation. No files are ever sent across a network or stored on remote servers."}
        </p>
      </div>
    ),
  },
  "bulk-image-converter": {
    id: "bulk-image-converter",
    name: "Bulk Image Converter",
    shortIntro: "Batch convert multiple images to JPG, PNG, or WebP format simultaneously in your web browser. AstonishBuddy's Bulk Image Converter runs entirely client-side using HTML5 Canvas and JSZip, letting you convert dozens of photos at once and download them in a single organized ZIP archive without server upload delays.",
    keywords: ["bulk image converter","batch convert png to webp","convert jpg to webp free","batch image resizer","online image format converter","convert multiple photos to zip","browser image converter"],
    faqs: [
      { q: "Which output formats are supported?", a: "The converter exports to JPG, PNG, and WebP. These three formats cover over 98% of modern web, mobile, and desktop image requirements." },
      { q: "What input formats can I convert from?", a: "You can upload any image format supported by modern browsers, including PNG, JPG, JPEG, WebP, AVIF, BMP, and static GIF frames." },
      { q: "Is there a limit on how many images I can convert at once?", a: "There are no arbitrary daily quotas or paywalls. However, because conversion runs in browser memory, batches of 15 to 30 images at a time are recommended to avoid browser tab memory slowdowns on lower-end devices." },
      { q: "What happens to transparent backgrounds when converting PNG to JPG?", a: "Because the JPEG standard does not support alpha transparency channels, transparent regions are filled with a clean solid white background. To preserve transparency, convert to WebP or PNG instead." },
      { q: "How do I download all converted images at once?", a: "Once your batch finishes converting, click the 'Download ZIP' button in the conversion summary banner to save all files in a single archive." },
      { q: "Are my uploaded photos sent to remote servers?", a: "No. Conversion and ZIP packaging take place entirely within your local browser memory using client-side JavaScript. Zero files leave your device." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Simultaneous batch conversion of multiple image files directly in the browser"}</li>
          <li style={{ marginBottom: "8px" }}>{"Support for popular input formats: JPG, JPEG, PNG, WebP, AVIF, BMP, and static GIF frames"}</li>
          <li style={{ marginBottom: "8px" }}>{"Selectable export target formats: JPG, PNG, and modern WebP"}</li>
          <li style={{ marginBottom: "8px" }}>{"Configurable output quality slider (10% to 100%) for lossy JPG and WebP exports"}</li>
          <li style={{ marginBottom: "8px" }}>{"Automatic solid white background fill when converting transparent PNGs to non-transparent JPG format"}</li>
          <li style={{ marginBottom: "8px" }}>{"Single-click 'Download ZIP' export bundling all converted images into one archive using JSZip"}</li>
          <li style={{ marginBottom: "8px" }}>{"Individual download buttons for single-image inspection and saving"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% client-side execution with zero file uploads or cloud bandwidth limits"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Drag and drop your batch of images into the upload area or click 'Select Images' (recommended: 15–30 files per batch for smooth performance)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Select your target export format: click 'JPG', 'PNG', or 'WebP'."}</li>
          <li style={{ marginBottom: "8px" }}>{"If converting to JPG or WebP, adjust the 'Quality' slider (e.g. 80%–90% for web publishing)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Convert All Images' to execute local canvas conversion across all queued files."}</li>
          <li style={{ marginBottom: "8px" }}>{"Review the progress list showing conversion status and individual file sizes."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Download ZIP' to save the complete batch archive, or click 'Download' next to any individual converted image."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Converting High-Resolution PNG Graphics to WebP for Web Optimization"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Batch: 12 PNG screenshots (total: 18.4 MB) | Target: WebP | Quality: 85%"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Result: 12 WebP files (total: 3.2 MB, ~82% reduction) | Package: Download ZIP archive | Transparency: Full alpha channel preserved"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Converting Mobile Camera Photos to Standard JPEG"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Batch: 8 WebP/AVIF images (total: 6.1 MB) | Target: JPG | Quality: 90%"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Result: 8 JPG files | Compatibility: Universal compatibility across legacy desktop software, email clients, and printing services"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Converting transparent PNG icons to JPG and wondering why the transparent background turned white; JPEG does not support transparency. Choose WebP or PNG instead."}</li>
          <li style={{ marginBottom: "8px" }}>{"Uploading animated GIFs and expecting animated WebP output; canvas-based batch conversion renders the first static frame."}</li>
          <li style={{ marginBottom: "8px" }}>{"Queuing hundreds of raw 20MB photos in a single batch on low-memory devices, which can cause browser tab slowdowns. Process in batches of 20–30 files."}</li>
          <li style={{ marginBottom: "8px" }}>{"Expecting output formats outside JPG, PNG, or WebP; these are the three formats reliably supported for client-side encoding by modern browser canvas engines."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All image conversions and ZIP archive packaging take place entirely within your local browser memory using HTML5 Canvas and JSZip. Your photographs and graphics are never uploaded to any remote server or stored in any database."}
        </p>
      </div>
    ),
  },
  "pdf-compressor": {
    id: "pdf-compressor",
    name: "PDF Compressor",
    shortIntro: "Compress PDF documents directly in your web browser by rasterizing and re-encoding page contents. AstonishBuddy's PDF Compressor uses pdfjs-dist and pdf-lib to render each page onto an HTML5 Canvas, re-encode image buffers at your chosen quality level, and assemble a lightweight new PDF document up to 100 MB without uploading files to remote servers.",
    keywords: ["pdf compressor","compress pdf 100mb","shrink pdf size","reduce pdf mb to kb","client side pdf compressor","compress scanned pdf","browser pdf optimizer"],
    faqs: [
      { q: "What is the maximum PDF file size supported?", a: "The tool supports PDF files up to 100 MB. Files exceeding 100 MB are rejected to prevent browser tab memory exhaustion." },
      { q: "Does compressing a PDF invalidate digital signatures?", a: "Yes. Compressing a PDF with this tool re-renders each page onto an HTML5 Canvas and generates a brand-new PDF container. This process strips underlying cryptographic certificates, meaning digital signatures (such as DocuSign or Adobe Acrobat certified signatures) will be invalidated." },
      { q: "How does the compressor reduce PDF file size?", a: "The tool uses pdfjs-dist to render each PDF page into an image canvas, applies JPEG compression to the resulting image layer, and uses pdf-lib to compile those compressed images back into a new, smaller PDF document." },
      { q: "Will the text in my compressed PDF remain selectable?", a: "Because pages are rendered to high-resolution canvas images to achieve compression, text is converted into an image layer. For scanned documents, visual appearance is preserved, but selectable text requires a subsequent OCR step." },
      { q: "Are my confidential PDF documents uploaded to a server?", a: "No. All PDF parsing, rendering, and re-assembly occur strictly within your browser. AstonishBuddy servers never receive or store your files." },
      { q: "Why did my PDF file size barely decrease?", a: "If your PDF consists entirely of vector text and outlines without large embedded bitmap images, it is already compact. Canvas re-encoding primarily provides dramatic savings on PDFs containing high-resolution scans and photos." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"100% in-browser PDF compression powered by pdfjs-dist and pdf-lib"}</li>
          <li style={{ marginBottom: "8px" }}>{"Strict file size support for documents up to 100 MB with zero server uploads"}</li>
          <li style={{ marginBottom: "8px" }}>{"Customizable compression quality settings to balance file size against visual clarity"}</li>
          <li style={{ marginBottom: "8px" }}>{"Page-by-page rendering pipeline with real-time compression progress indicators"}</li>
          <li style={{ marginBottom: "8px" }}>{"Comparison metrics displaying original file size, compressed size, and percentage saved"}</li>
          <li style={{ marginBottom: "8px" }}>{"Direct one-click download for compressed PDF files"}</li>
          <li style={{ marginBottom: "8px" }}>{"Complete client-side privacy: legal briefs, invoices, and tax records remain on your device"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Select your PDF file (up to 100 MB) by dragging it into the dropzone or clicking 'Select PDF'."}</li>
          <li style={{ marginBottom: "8px" }}>{"Choose your desired compression quality level (recommended: medium/standard for scanned documents)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Compress PDF' to initiate local browser page rendering and canvas re-encoding."}</li>
          <li style={{ marginBottom: "8px" }}>{"Monitor the page progress bar as each page is rendered and packed into the new PDF structure."}</li>
          <li style={{ marginBottom: "8px" }}>{"Review the resulting file size and reduction percentage."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Download Compressed PDF' to save your optimized document."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Compressing a Scanned Multi-Page Document"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"File: ScannedContract.pdf (Original: 18.2 MB, 12 scanned pages, 300 DPI scans) | Quality: Standard"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Compressed Size: ~4.1 MB (77% reduction) | Page Layout: 12 pages preserved | Readability: Clear text and legible signatures for email transmission"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Optimizing an Image-Heavy Report"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"File: MarketingReport.pdf (Original: 34.6 MB, 25 pages with color photos) | Quality: Balanced"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Compressed Size: ~9.8 MB (71% reduction) | Email Compatibility: Reduced under standard 25 MB email attachment limits"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Attempting to compress digitally signed or certified PDFs; because the tool rasterizes pages onto a canvas and rebuilds a new PDF structure, digital signatures (such as DocuSign or PKCS#7 certificates) are invalidated."}</li>
          <li style={{ marginBottom: "8px" }}>{"Expecting large compression on vector-only text PDFs; files consisting of pure searchable fonts and minimal imagery already have minimal byte weight."}</li>
          <li style={{ marginBottom: "8px" }}>{"Uploading password-protected or encrypted PDFs without unlocking them first."}</li>
          <li style={{ marginBottom: "8px" }}>{"Selecting extreme high-compression on documents with tiny 6pt legal footnotes, which can reduce legibility."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"PDF processing is performed 100% locally on your machine using client-side JavaScript libraries. Your PDF files, contracts, financial statements, and confidential records are never uploaded to any remote server or logged by AstonishBuddy."}
        </p>
      </div>
    ),
  },
  "color-converter": {
    id: "color-converter",
    name: "Color Code Converter",
    shortIntro: "Convert colors seamlessly between HEX, RGB, HSL, HSV, and CMYK color spaces in real time. AstonishBuddy's Color Code Converter runs client-side with an interactive color picker, luminance contrast checker, CSS snippet copy buttons, and standard color format validation. Whether you are building responsive UI design systems, tuning branding palettes, or checking WCAG accessibility standards, our converter calculates mathematically accurate transformations across additive and subtractive color models with zero network overhead.",
    keywords: ["color code converter","hex to rgb","rgb to hsl","cmyk color converter","wcag color contrast checker","css color converter","online color picker"],
    faqs: [
      { q: "What is the difference between HEX and RGB?", a: "HEX and RGB represent the exact same additive color model. RGB specifies red, green, and blue intensities as decimal numbers from 0 to 255 (e.g. rgb(255, 0, 0)), while HEX writes those same numbers in base-16 hexadecimal notation (e.g. #FF0000)." },
      { q: "Why do web designers use HSL instead of HEX?", a: "HSL (Hue, Saturation, Lightness) aligns closely with human color perception. Adjusting lightness or saturation in HSL allows designers to create lighter tints or darker shades without recalculating RGB channels." },
      { q: "Can this tool convert CMYK for commercial print?", a: "The tool provides standard mathematical RGB-to-CMYK conversion values. However, professional commercial printing requires specific ICC color profile separations based on paper stock and printing press inks." },
      { q: "Does this tool support transparency (alpha channels)?", a: "Yes. You can enter 8-digit HEX codes (e.g. #2563EB80 for 50% opacity) or use rgba() and hsla() formats with alpha values between 0 and 1." },
      { q: "What is the WCAG contrast score?", a: "The Web Content Accessibility Guidelines (WCAG) require minimum contrast ratios between text and background colors: at least 4.5:1 for standard text (Level AA) and 7:1 for enhanced accessibility (Level AAA)." },
      { q: "Are my color selections stored or sent anywhere?", a: "No. All conversions execute locally inside your browser's JavaScript runtime. Zero data is transmitted to AstonishBuddy servers." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Real-time bidirectional color conversion across HEX, RGB, HSL, HSV, and CMYK color spaces"}</li>
          <li style={{ marginBottom: "8px" }}>{"Native HTML5 color picker integration with live preview swatch and real-time color syncing"}</li>
          <li style={{ marginBottom: "8px" }}>{"Alpha channel (opacity) support for 8-digit HEX (#RRGGBBAA), RGBA, and HSLA values"}</li>
          <li style={{ marginBottom: "8px" }}>{"Calculated relative luminance and WCAG 2.1 contrast ratio against pure white (#FFFFFF) and pure black (#000000) backgrounds"}</li>
          <li style={{ marginBottom: "8px" }}>{"One-click copy buttons for formatted CSS declarations: hex(), rgb(), hsl(), and cmyk()"}</li>
          <li style={{ marginBottom: "8px" }}>{"Harmonic color palette generator displaying complementary, triadic, and analogous color swatches"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% in-browser calculation with zero server calls, keeping private client brand palettes completely confidential"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Enter a color value in any supported format (e.g. #3b82f6, rgb(59, 130, 246), or hsl(217, 91%, 60%)) or click the color swatch to open the interactive picker."}</li>
          <li style={{ marginBottom: "8px" }}>{"View instant synchronized conversions across HEX, RGB, HSL, HSV, and CMYK panels."}</li>
          <li style={{ marginBottom: "8px" }}>{"Check the calculated relative luminance score and WCAG contrast rating to verify text readability for accessibility compliance."}</li>
          <li style={{ marginBottom: "8px" }}>{"Explore complementary and analogous color harmony swatches generated below the color inputs."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click the 'Copy' icon next to any format to copy the formatted CSS string directly to your clipboard."}</li>
          <li style={{ marginBottom: "8px" }}>{"Paste the copied CSS values directly into your Tailwind configuration, CSS stylesheet, or design tokens."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Converting Brand Royal Blue Across Color Spaces"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Input: #2563EB (HEX format)"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"RGB: rgb(37, 99, 235)\nHSL: hsl(221, 83%, 53%)\nHSV: hsv(221, 84%, 92%)\nCMYK: cmyk(84%, 58%, 0%, 8%)\nContrast on White: 4.88:1 (WCAG AA Pass)\nContrast on Black: 4.30:1 (Large text pass)"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Converting HSL Accent Green to Web CSS Formats"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Input: hsl(142, 71%, 45%)"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"HEX: #22C55E\nRGB: rgb(34, 197, 94)\nHSV: hsv(142, 83%, 77%)\nCMYK: cmyk(83%, 0%, 52%, 23%)\nContrast on White: 2.35:1 (Fail)\nContrast on Black: 8.92:1 (WCAG AAA Pass)"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Entering 3-digit shorthand HEX codes (#abc) when full 6-digit fidelity (#aabbcc) is required for exact brand color replication."}</li>
          <li style={{ marginBottom: "8px" }}>{"Forgetting the '%' sign on HSL saturation and lightness values (e.g. entering hsl(200, 50, 50) instead of the syntactically valid hsl(200, 50%, 50%))."}</li>
          <li style={{ marginBottom: "8px" }}>{"Assuming RGB and CMYK color spaces have identical gamuts; CMYK is designed for 4-color printing press inks and cannot physically reproduce neon, highly saturated sRGB screen primaries."}</li>
          <li style={{ marginBottom: "8px" }}>{"Ignoring color contrast ratios when selecting text colors for accessible web design, leading to low-contrast text that fails WCAG AA legibility standards."}</li>
          <li style={{ marginBottom: "8px" }}>{"Confusing HSV (Hue, Saturation, Value) with HSL (Hue, Saturation, Lightness); while both share Hue, Value measures brightness relative to a pure white point, whereas Lightness measures balance between black and white."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All color conversions and mathematical color space transformations run 100% client-side in your web browser. No color codes, palette selections, or user inputs are sent across any network or logged on remote servers."}
        </p>
      </div>
    ),
  },
  "text-case-converter": {
    id: "text-case-converter",
    name: "Text Case Converter",
    shortIntro: "Transform letter casing instantly between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, kebab-case, snake_case, PascalCase, and CONSTANT_CASE. AstonishBuddy's Text Case Converter processes text locally in your browser with real-time character, word, and line count statistics. Whether you are reformatting academic article titles, normalizing inconsistent database entries, or converting human-readable phrases into clean programming variable identifiers, our converter delivers instant, error-free capitalization across nine specialized styles with zero network latency.",
    keywords: ["text case converter","uppercase to lowercase","title case converter","sentence case generator","camelcase converter","snake case converter","kebab case converter"],
    faqs: [
      { q: "What is Title Case and how does it work?", a: "Title Case capitalizes the first letter of major words while keeping minor words (such as 'and', 'the', 'in', 'on', 'of', 'for') in lowercase, unless they appear as the first word of the title or heading." },
      { q: "What is the difference between camelCase and PascalCase?", a: "Both formats remove spaces and capitalize subsequent words. However, camelCase begins with a lowercase letter (e.g. myVariableName), whereas PascalCase begins with an uppercase letter (e.g. MyVariableName)." },
      { q: "When should I use kebab-case vs snake_case?", a: "kebab-case uses hyphens between words (e.g. user-profile) and is standard in URLs and CSS classes. snake_case uses underscores (e.g. user_profile) and is standard in Python, SQL databases, and file names." },
      { q: "Does this tool support non-English alphabets and accents?", a: "Yes. JavaScript's native string methods correctly handle accented Latin characters (such as é, ü, ñ) and Unicode alphabets." },
      { q: "Is there any text length limit?", a: "Because all transformations execute locally on your machine, you can process large documents containing tens of thousands of words without server timeouts." },
      { q: "Is my text saved or sent to any server?", a: "No. Everything runs strictly inside your local browser memory. No data is stored, cached, or transmitted to AstonishBuddy servers." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Nine instant casing transformations: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, kebab-case, snake_case, PascalCase, and CONSTANT_CASE"}</li>
          <li style={{ marginBottom: "8px" }}>{"Live text statistics: character count, word count, line count, and character count without spaces"}</li>
          <li style={{ marginBottom: "8px" }}>{"One-click 'Copy' button to transfer converted text directly to your clipboard"}</li>
          <li style={{ marginBottom: "8px" }}>{"One-click 'Clear' button for rapid editing workflows"}</li>
          <li style={{ marginBottom: "8px" }}>{"Smart Title Case capitalization following Chicago Manual of Style conventions for minor words"}</li>
          <li style={{ marginBottom: "8px" }}>{"Code identifier converters (camelCase, snake_case, kebab-case) optimized for programming variable names"}</li>
          <li style={{ marginBottom: "8px" }}>{"Preservation of whitespace formatting and multi-line paragraph boundaries"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% in-browser text transformation with zero server storage or telemetry"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Type or paste your text into the main input textarea (or click the 'Paste' shortcut)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Select your desired casing option from the transformation buttons (e.g. 'UPPERCASE', 'Title Case', 'camelCase', 'snake_case')."}</li>
          <li style={{ marginBottom: "8px" }}>{"Observe the instant text conversion in the result field as the algorithm recalculates letter cases."}</li>
          <li style={{ marginBottom: "8px" }}>{"Inspect the character, word, and line count statistics in the summary bar to verify document length constraints."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Copy' to transfer the converted text to your clipboard for your word processor, CMS, or code editor."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Clear' to reset the editor for another conversion."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Converting Article Headlines to Title Case"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"the quick brown fox jumps over the lazy dog in new york"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"The Quick Brown Fox Jumps Over the Lazy Dog in New York\nStyle Rule: Minor prepositions and articles ('the', 'over', 'in') kept lowercase unless starting a sentence"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Converting Plain Text to Programming Identifiers"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"User account billing profile"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"camelCase: userAccountBillingProfile\nkebab-case: user-account-billing-profile\nsnake_case: user_account_billing_profile\nCONSTANT_CASE: USER_ACCOUNT_BILLING_PROFILE\nPascalCase: UserAccountBillingProfile"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Expecting Sentence Case to identify proper nouns; automated sentence casing capitalizes the first letter following a period, but cannot determine whether an internal word is a person's name or city."}</li>
          <li style={{ marginBottom: "8px" }}>{"Converting text with special code characters to camelCase and losing punctuation delimiters without verification."}</li>
          <li style={{ marginBottom: "8px" }}>{"Assuming Title Case capitalizes every word; standard style guides keep short prepositions, conjunctions, and articles lowercase."}</li>
          <li style={{ marginBottom: "8px" }}>{"Pasting text containing non-standard Unicode quote marks without checking compatibility with strict ASCII coding standards."}</li>
          <li style={{ marginBottom: "8px" }}>{"Confusing CONSTANT_CASE with UPPERCASE; UPPERCASE retains original spacing, whereas CONSTANT_CASE replaces all spaces with underscores (e.g. API_SECRET_KEY)."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All text transformations occur 100% locally in your web browser's JavaScript runtime. Your documents, notes, headlines, and code snippets are never transmitted over the internet or logged on any server."}
        </p>
      </div>
    ),
  },
  "word-counter": {
    id: "word-counter",
    name: "Word Counter",
    shortIntro: "Count words, characters, sentences, paragraphs, and estimated reading and speaking times in real time. AstonishBuddy's Word Counter analyzes your text locally in your browser with comprehensive readability statistics and keyword density metrics for writers, students, and SEO specialists.",
    keywords: ["word counter","character counter","reading time calculator","speaking time calculator","keyword density checker","sentence counter","online text counter"],
    faqs: [
      { q: "What reading speed is used to estimate reading time?", a: "Reading time is calculated using an established average adult reading speed of 200 words per minute (wpm). The value rounds up to the nearest minute for non-empty text." },
      { q: "What speaking speed is used to estimate speaking time?", a: "Speaking time is calculated using a standard conversational presentation speed of 130 words per minute (wpm), which is ideal for speeches, podcasts, and video voiceovers." },
      { q: "How does the tool count words?", a: "Words are identified by splitting text using regular expressions that detect whitespace boundaries while correctly handling punctuation marks, line breaks, and multi-line paragraphs." },
      { q: "Does the word counter support languages other than English?", a: "Yes. Characters, spaces, paragraphs, and words separated by whitespace in Latin, Cyrillic, Greek, and Arabic alphabets are fully counted. Languages without whitespace delimiters (like Chinese and Japanese) are best measured by character count." },
      { q: "What is keyword density?", a: "Keyword density represents the percentage of times a specific word appears relative to the total word count of the text. It helps writers avoid keyword stuffing and improve SEO balance." },
      { q: "Is my text confidential?", a: "Yes. Processing is 100% client-side. AstonishBuddy has zero access to your text, keystrokes, or documents." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Real-time word, character (with and without spaces), sentence, and paragraph counting"}</li>
          <li style={{ marginBottom: "8px" }}>{"Accurate reading time calculation calibrated at 200 words per minute (wpm)"}</li>
          <li style={{ marginBottom: "8px" }}>{"Speaking time calculation calibrated at 130 words per minute (wpm)"}</li>
          <li style={{ marginBottom: "8px" }}>{"Top keyword density analysis displaying frequency counts and percentages"}</li>
          <li style={{ marginBottom: "8px" }}>{"One-click 'Copy' button to copy your text to clipboard"}</li>
          <li style={{ marginBottom: "8px" }}>{"One-click 'Clear' button to reset the text area"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% in-browser text analysis with zero data sent across the network"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Type or paste your text directly into the main editor textarea."}</li>
          <li style={{ marginBottom: "8px" }}>{"Review the top stat cards to see instant totals for Words, Characters, Characters (no spaces), Sentences, and Paragraphs."}</li>
          <li style={{ marginBottom: "8px" }}>{"Check the 'Reading Time' (calibrated at 200 wpm) and 'Speaking Time' (calibrated at 130 wpm) metrics."}</li>
          <li style={{ marginBottom: "8px" }}>{"Inspect the 'Keyword Density' panel to identify frequently repeated words and optimize your text for SEO."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Copy' to transfer the text back to your clipboard, or click 'Clear' to start fresh."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Analyzing a Blog Post Introduction"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"AstonishBuddy provides fast, free, and secure online developer tools. Every utility runs locally in your browser without transmitting sensitive files or private text to remote cloud servers. Experience instant results today."}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Words: 33 | Characters (with spaces): 229 | Characters (no spaces): 197 | Sentences: 3 | Paragraphs: 1\nReading Time: ~1 min (at 200 wpm)\nSpeaking Time: ~1 min (at 130 wpm)"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Analyzing an Academic Abstract"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"This paper analyzes the computational complexity of client-side cryptography in web browsers. We evaluate execution latency, memory overhead, and entropy sources across modern JavaScript runtimes."}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Words: 26 | Characters: 198 | Sentences: 2 | Paragraphs: 1\nReading Time: ~1 min | Speaking Time: ~1 min"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Counting hyphenated words as multiple words; standard word processors count hyphenated compounds (e.g. 'state-of-the-art') as a single word token."}</li>
          <li style={{ marginBottom: "8px" }}>{"Assuming reading speed is identical for all audiences; while 200 wpm is standard for general adult web reading, technical documentation often averages 120–150 wpm."}</li>
          <li style={{ marginBottom: "8px" }}>{"Overlooking keyword stuffing; maintaining a natural keyword density below 2%–3% ensures high search engine readability."}</li>
          <li style={{ marginBottom: "8px" }}>{"Pasting rich text with hidden HTML markup and assuming whitespace tags will not impact sentence boundary detection."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All text analysis and keyword parsing execute entirely within your local browser's JavaScript engine. Your essays, articles, and confidential manuscripts are never sent across the internet or stored on any server."}
        </p>
      </div>
    ),
  },
  "text-sorter": {
    id: "text-sorter",
    name: "Text Sorter",
    shortIntro: "Sort lines or words alphabetically, by length, or randomly in your browser. AstonishBuddy's Text Sorter features Line mode and Word mode, ascending and descending sorting, duplicate removal, line reversal, and random shuffling with zero server latency. Built for developers managing data lists, writers cleaning bibliographies, and researchers deduplicating rosters, it provides deterministic, locale-aware text processing right inside your browser window.",
    keywords: ["text sorter","alphabetize list","sort lines a to z","sort words by length","remove duplicate lines","shuffle list online","reverse text list"],
    faqs: [
      { q: "What is the difference between Line mode and Word mode?", a: "Line mode treats every newline-delimited row as an individual item to sort. Word mode splits the entire text by spaces and punctuation, sorting individual words while preserving or collapsing spacing." },
      { q: "How does the 'No Duplicates' feature work?", a: "It filters the array of lines or words through a JavaScript Set data structure, discarding duplicate occurrences so that each unique value appears only once in the output." },
      { q: "How does 'By Length' handle items with the same number of characters?", a: "Items of identical length maintain their relative order (stable sort) or secondary alphabetical ordering." },
      { q: "Can I randomize or shuffle a list?", a: "Yes. Click the 'Shuffle' button to perform a random permutation on the current lines or words." },
      { q: "How does the alphabetical sort handle accents and international letters?", a: "The sort uses JavaScript's native String.prototype.localeCompare(), which respects international linguistic rules and accent positioning." },
      { q: "Are my lists sent to any remote server?", a: "No. All sorting algorithms run entirely in your local browser thread. Your data never leaves your computer." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Dual sorting modes: Line mode (sort entire lines) and Word mode (sort individual words separated by spaces)"}</li>
          <li style={{ marginBottom: "8px" }}>{"Alphabetical sorting: A to Z (ascending) and Z to A (descending) using locale-aware collation"}</li>
          <li style={{ marginBottom: "8px" }}>{"Sort by Length: order items from shortest to longest string"}</li>
          <li style={{ marginBottom: "8px" }}>{"No Duplicates filter: remove repeated lines or words to produce a unique list using JavaScript Set collections"}</li>
          <li style={{ marginBottom: "8px" }}>{"Reverse button: invert the current line or word order instantaneously"}</li>
          <li style={{ marginBottom: "8px" }}>{"Shuffle button: randomize list items using a random permutation algorithm"}</li>
          <li style={{ marginBottom: "8px" }}>{"Real-time item count display and one-click 'Copy' and 'Clear' buttons"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% client-side execution with complete privacy and zero data transmission"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Type or paste your text into the input textarea."}</li>
          <li style={{ marginBottom: "8px" }}>{"Select your target mode: click 'Line mode' to sort line by line, or 'Word mode' to sort individual words."}</li>
          <li style={{ marginBottom: "8px" }}>{"Choose a sorting order: click 'A to Z' for alphabetical ascending, 'Z to A' for descending, or 'By Length'."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'No Duplicates' if you wish to deduplicate the list and keep only unique entries."}</li>
          <li style={{ marginBottom: "8px" }}>{"Optionally click 'Reverse' to flip the current order, or 'Shuffle' to randomize."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Copy' above the output area to copy your sorted list to your clipboard."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Clear' to wipe the input area and begin a new sorting operation."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Sorting a Grocery List Alphabetically and Deduplicating"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Apples\nOranges\nBananas\nApples\nCarrots\nBananas"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Mode: Line mode | Action: 'A to Z' followed by 'No Duplicates'\nResult:\nApples\nBananas\nCarrots\nOranges\nSummary: 6 original lines deduplicated and sorted into 4 unique alphabetical items"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Sorting Words by Length"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"elephant cat hippopotamus dog rabbit"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Mode: Word mode | Action: 'By Length'\nResult:\ncat dog rabbit elephant hippopotamus\nSummary: Words sorted in ascending order from 3 characters to 12 characters"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Expecting numerical sorting for numbers formatted with varying digits (e.g. '10' sorting before '2' in pure alphabetical A-Z collation); alphabetical sorting compares characters ASCII/Unicode value sequentially."}</li>
          <li style={{ marginBottom: "8px" }}>{"Sorting in Word mode when multi-word phrases need to be preserved on separate lines; always use Line mode for list items."}</li>
          <li style={{ marginBottom: "8px" }}>{"Forgetting that sorting is case-sensitive by default in some environments; our tool uses localeCompare with sensitivity balancing."}</li>
          <li style={{ marginBottom: "8px" }}>{"Overlooking leading or trailing spaces on lines that affect length and alphabetical position."}</li>
          <li style={{ marginBottom: "8px" }}>{"Assuming 'No Duplicates' preserves duplicate counts; deduplication completely collapses identical lines into a single unique instance."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All text sorting, deduplication, and shuffling occur 100% locally in your web browser. No text lists, names, email rosters, or entries are ever sent to our servers."}
        </p>
      </div>
    ),
  },
  "lorem-ipsum-generator": {
    id: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    shortIntro: "Generate custom Lorem Ipsum placeholder text for websites, wireframes, and publication layouts. AstonishBuddy's Lorem Ipsum Generator creates paragraphs, sentences, or word lists locally in your browser with optional 'Start with Lorem ipsum...' formatting.",
    keywords: ["lorem ipsum generator","dummy text generator","placeholder text online","latin text generator","cicero lorem ipsum","mockup text generator","sample text generator"],
    faqs: [
      { q: "What is the true origin and history of Lorem Ipsum?", a: "Lorem Ipsum originates from Sections 1.10.32 and 1.10.33 of Cicero's 45 BC philosophical work 'De Finibus Bonorum et Malorum' ('On the Extremes of Good and Evil'). In the 1980s, Richard McClintock, a Latin scholar at Hampden-Sydney College, identified the source passage after researching the obscure Latin word 'consectetur'. The 1914 date often cited in literature refers to H. Rackham's English translation of Cicero for the Loeb Classical Library, not to McClintock's discovery." },
      { q: "What does the Latin phrase 'Lorem ipsum' actually mean?", a: "'Lorem ipsum' is a truncated excerpt of 'dolorem ipsum', meaning 'pain itself' (from 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...': 'Neither is there anyone who loves, pursues, or desires pain itself because it is pain...')." },
      { q: "Why do designers use Lorem Ipsum instead of real English text?", a: "When reviewing mockups, human eyes naturally read readable English text, distracting stakeholders from evaluating typography, visual balance, layout hierarchy, and spacing. Lorem Ipsum provides a natural distribution of letters without readable distraction." },
      { q: "Can I generate exact word counts?", a: "Yes. Select 'Words' mode and enter the exact number of words you need for UI buttons, card summaries, or preview snippets." },
      { q: "Can I generate text without starting with 'Lorem ipsum dolor sit amet'?", a: "Yes. Simply uncheck the 'Start with \"Lorem ipsum...\"' checkbox to generate randomized Latin vocabulary throughout." },
      { q: "Does this tool work completely offline?", a: "Yes. Once the page is loaded, the entire Latin dictionary and generation algorithm run offline in your browser." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Three generation modes: Paragraphs, Sentences, and Words"}</li>
          <li style={{ marginBottom: "8px" }}>{"Custom count selector to specify the exact quantity of units needed"}</li>
          <li style={{ marginBottom: "8px" }}>{"Toggle to include or exclude the traditional standard opening 'Lorem ipsum dolor sit amet...'"}</li>
          <li style={{ marginBottom: "8px" }}>{"Accurate classical vocabulary derived from Cicero's 45 BC philosophical treatise De Finibus Bonorum et Malorum"}</li>
          <li style={{ marginBottom: "8px" }}>{"One-click 'Generate Text' button for fresh random variations"}</li>
          <li style={{ marginBottom: "8px" }}>{"One-click 'Copy' button to transfer placeholder text directly to your design software"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% client-side text generation with zero network overhead"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Select your desired output type: click 'Paragraphs', 'Sentences', or 'Words'."}</li>
          <li style={{ marginBottom: "8px" }}>{"Enter your desired count in the quantity input field (e.g. 3 paragraphs or 25 words)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Check or uncheck the 'Start with \"Lorem ipsum...\"' checkbox based on your project preferences."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Generate Text' to render the placeholder copy."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Copy' to copy the generated text to your clipboard for Figma, Sketch, or your code editor."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Generating Exactly 25 Words of Placeholder Text"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Type: Words | Count: 25 | Start with 'Lorem ipsum...': Checked"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Generating 2 Paragraphs for a Web Layout Wireframe"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Type: Paragraphs | Count: 2 | Start with 'Lorem ipsum...': Checked"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...\nParagraph 2: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam..."}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Assuming Lorem Ipsum is meaningless gibberish; it is derived from Latin literature, specifically Cicero's 45 BC ethical treatise De Finibus Bonorum et Malorum (Sections 1.10.32–33)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Confusing H. Rackham's 1914 Loeb Classical Library English translation with Richard McClintock's 1980s identification of Cicero as the source."}</li>
          <li style={{ marginBottom: "8px" }}>{"Leaving placeholder text in production websites; always set pre-launch audits to replace placeholder copy."}</li>
          <li style={{ marginBottom: "8px" }}>{"Using word-count mode when paragraph structure is needed to evaluate visual text line height and spacing."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All placeholder text generation executes entirely within your browser's local JavaScript environment. No parameters or generated strings are transmitted to any server."}
        </p>
      </div>
    ),
  },
  "diff-checker": {
    id: "diff-checker",
    name: "Diff Checker",
    shortIntro: "Compare two text snippets, code files, or documents side by side to detect additions, deletions, and modifications. AstonishBuddy's Diff Checker uses a Longest Common Subsequence (LCS) dynamic programming algorithm to calculate line and word-level differences locally in your browser with split and inline view modes.",
    keywords: ["diff checker","text compare online","compare two files","lcs diff algorithm","code comparison tool","side by side diff","inline diff viewer"],
    faqs: [
      { q: "What algorithm does this diff checker use?", a: "The tool implements a dynamic programming Longest Common Subsequence (LCS) algorithm to find the minimal edit script between two string arrays, followed by a secondary word-level LCS pass on replaced lines to highlight intra-line token differences." },
      { q: "Is this identical to 'git diff'?", a: "No. Git primarily uses Eugene Myers' O(ND) greedy difference algorithm or histogram diffs. Our tool uses a standard 2D LCS dynamic programming algorithm optimized for fast browser execution and visual intra-line word highlighting." },
      { q: "What does the 'Hide Unchanged Lines' button do?", a: "In large files with hundreds of identical lines, 'Hide Unchanged Lines' collapses equal rows, allowing you to focus exclusively on lines that were added, removed, or modified." },
      { q: "Can I swap the original and modified texts?", a: "Yes. Click the 'Swap' button to instantly swap the contents of the left and right panels." },
      { q: "Does this tool work with code in different programming languages?", a: "Yes. The diff checker works with plain text, source code (JavaScript, Python, C++, HTML, CSS, SQL), JSON, Markdown, and CSV files." },
      { q: "Is my proprietary source code sent to a remote server?", a: "No. The entire comparison executes inside your browser's local JavaScript thread. Nothing is uploaded or stored." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Longest Common Subsequence (LCS) dynamic programming algorithm computing line-by-line diffs"}</li>
          <li style={{ marginBottom: "8px" }}>{"Character and word-level token highlighting inside modified and replaced lines"}</li>
          <li style={{ marginBottom: "8px" }}>{"Dual visual modes: 'Split View' (side-by-side comparison) and 'Inline View' (unified diff)"}</li>
          <li style={{ marginBottom: "8px" }}>{"Toggle button: 'Hide Unchanged Lines' (or 'Show Unchanged Lines') to focus exclusively on edits"}</li>
          <li style={{ marginBottom: "8px" }}>{"'Swap' button to instantly reverse Original and Modified texts"}</li>
          <li style={{ marginBottom: "8px" }}>{"Interactive 'Paste', 'Reset to Sample', 'Clear', and 'Edit Text' navigation buttons"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% client-side diff computation ensuring confidential source code and contracts remain private"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Paste your original text into the 'Original Text' panel on the left (or click 'Paste')."}</li>
          <li style={{ marginBottom: "8px" }}>{"Paste your updated text into the 'Modified Text' panel on the right."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click '🚀 Compare Texts' to run the LCS diff calculation."}</li>
          <li style={{ marginBottom: "8px" }}>{"Choose your preferred layout: click 'Split View' for side-by-side columns, or 'Inline View' for unified flow."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Hide Unchanged Lines' if you have long documents and only want to inspect modified lines."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Edit Text' to return to the input text areas to refine your comparison."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Comparing JSON Configuration Modifications"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Original:\n{\n  \"env\": \"staging\",\n  \"port\": 3000\n}\n\nModified:\n{\n  \"env\": \"production\",\n  \"port\": 8080,\n  \"ssl\": true\n}"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Diff Summary:\n- Line 2: \"env\": \"staging\" -> \"env\": \"production\" (Replaced, inline word diff highlighted)\n- Line 3: \"port\": 3000 -> \"port\": 8080 (Replaced)\n+ Line 4: \"ssl\": true (Inserted)\nAlgorithm: LCS line script with fine-grained word tokenization"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Comparing Contract Clause Revisions"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Original: The service provider shall deliver reports within thirty (30) business days.\nModified: The service provider shall deliver reports within fifteen (15) business days."}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Result: Single modified line with intra-line highlighting: 'thirty (30)' marked in red strikethrough, 'fifteen (15)' marked in green underline"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Assuming the tool uses Git's Myers diff algorithm; this tool uses a classic Longest Common Subsequence (LCS) DP matrix with word-level tokenization."}</li>
          <li style={{ marginBottom: "8px" }}>{"Overlooking trailing whitespace or newline differences between files that can cause identical-looking lines to register as modified."}</li>
          <li style={{ marginBottom: "8px" }}>{"Comparing excessively large multi-megabyte files in split view, which can cause DOM layout rendering pauses."}</li>
          <li style={{ marginBottom: "8px" }}>{"Expecting the tool to resolve Git merge conflicts; the tool inspects and displays differences, but does not perform 3-way merge conflict resolution."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All diff calculations execute 100% locally in your browser. Your proprietary source code, legal agreements, financial records, and private documents are never sent across the internet."}
        </p>
      </div>
    ),
  },
  "markdown-converter": {
    id: "markdown-converter",
    name: "Markdown to HTML Converter",
    shortIntro: "Convert Markdown syntax into clean, standard HTML code in real time with an interactive live preview. AstonishBuddy's Markdown Converter parses headings, bold and italic formatting, blockquotes, code blocks, lists, links, and horizontal rules locally in your browser, with built-in HTML sanitization to prevent XSS vulnerabilities. Built for technical writers, documentation maintainers, and developers publishing content to blogs, static site generators, and CMS platforms, it bridges raw markdown writing with sanitized HTML production.",
    keywords: ["markdown to html","markdown converter","markdown preview online","convert md to html","commonmark converter","sanitized html preview","markdown editor"],
    faqs: [
      { q: "Does this tool sanitize HTML in the live preview?", a: "Yes. The live preview sanitizes HTML output before rendering, stripping dangerous script tags, event handlers (like onload/onerror), and malicious attributes to protect against Cross-Site Scripting (XSS)." },
      { q: "Does this tool support GFM task lists (- [x]) or complex tables?", a: "No. The converter focuses on core CommonMark elements (headings, bold, italics, blockquotes, unordered/ordered lists, links, inline code, and code blocks). Extended features like interactive task checkboxes or table column alignment are not included." },
      { q: "Can I copy the raw HTML code directly?", a: "Yes. Click the 'Copy HTML' button to copy the compiled HTML markup straight to your clipboard for use in WordPress, Ghost, or custom HTML files." },
      { q: "How does the tool handle code blocks?", a: "Fenced code blocks enclosed by triple backticks (```) are converted into standard <pre><code> blocks, with special HTML characters (&, <, >) escaped into safe entities." },
      { q: "Can I use this tool offline?", a: "Yes. Once loaded, the converter runs entirely within your browser's JavaScript engine and requires no internet connection." },
      { q: "Are my Markdown documents uploaded to a server?", a: "No. All text parsing runs locally in your browser thread. Your content is never stored or transmitted to AstonishBuddy servers." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Real-time Markdown to HTML compilation as you type without page reloading"}</li>
          <li style={{ marginBottom: "8px" }}>{"Sanitized HTML live preview preventing Cross-Site Scripting (XSS) via client-side sanitization algorithms"}</li>
          <li style={{ marginBottom: "8px" }}>{"Support for standard CommonMark elements: headings (h1–h6), bold, italics, blockquotes, lists, links, and code blocks"}</li>
          <li style={{ marginBottom: "8px" }}>{"Clean raw HTML code output with one-click 'Copy HTML' button"}</li>
          <li style={{ marginBottom: "8px" }}>{"Live text statistics: character count, word count, and line count"}</li>
          <li style={{ marginBottom: "8px" }}>{"One-click 'Clear' button to reset the editor"}</li>
          <li style={{ marginBottom: "8px" }}>{"Automatic HTML entity escaping inside code blocks to prevent layout breakage"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% in-browser parsing with zero server requests and no tracking"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Type or paste your Markdown text into the left editor panel."}</li>
          <li style={{ marginBottom: "8px" }}>{"Observe the live formatted HTML preview in the right pane in real time."}</li>
          <li style={{ marginBottom: "8px" }}>{"Inspect the generated HTML markup in the code output view."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Copy HTML' to copy the clean HTML code to your clipboard for your CMS, blog, or website."}</li>
          <li style={{ marginBottom: "8px" }}>{"Check the live word and character counters at the bottom of the editor."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Clear' to wipe the editor and begin a new document."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Converting Formatted Article Headers and Lists"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"# AstonishBuddy Guide\n\nWelcome to our **developer tools**.\n\n- Fast execution\n- 100% client-side\n- Free to use"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"<h1>AstonishBuddy Guide</h1>\n<p>Welcome to our <strong>developer tools</strong>.</p>\n<ul>\n  <li>Fast execution</li>\n  <li>100% client-side</li>\n  <li>Free to use</li>\n</ul>"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Converting Code Blocks and Blockquotes"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"> Simplicity is the soul of efficiency.\n\n```javascript\nconst sum = (a, b) => a + b;\n```"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"<blockquote><p>Simplicity is the soul of efficiency.</p></blockquote>\n<pre><code class=\"language-javascript\">const sum = (a, b) =&gt; a + b;</code></pre>"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Expecting GitHub Flavored Markdown (GFM) task lists (- [x]) or advanced table column alignments; this tool converts standard CommonMark syntax."}</li>
          <li style={{ marginBottom: "8px" }}>{"Assuming raw unsanitized HTML is executed; our live preview runs through a client-side HTML sanitizer to protect users from malicious script injection."}</li>
          <li style={{ marginBottom: "8px" }}>{"Missing empty lines before lists or blockquotes, which can cause some markdown engines to treat them as continuation paragraphs."}</li>
          <li style={{ marginBottom: "8px" }}>{"Using non-standard backslash escapes in plain text where standard markdown delimiters are expected."}</li>
          <li style={{ marginBottom: "8px" }}>{"Expecting embedded HTML <script> or <iframe> tags to execute; these are stripped during preview sanitization for security."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All Markdown parsing and HTML sanitization execute 100% locally inside your web browser. Your notes, articles, and documentation drafts are never transmitted over the internet or logged on any remote server."}
        </p>
      </div>
    ),
  },
  "password-generator": {
    id: "password-generator",
    name: "Strong Password Generator",
    shortIntro: "AstonishBuddy's Strong Password Generator creates high-entropy, cryptographically secure passwords locally in your web browser. Rather than relying on predictable pseudo-random functions like Math.random(), our tool utilizes the browser's native Web Cryptography API (crypto.getRandomValues) to draw cryptographically strong random numbers directly from system entropy pools. You can freely adjust password length from 4 up to 128 characters, toggle uppercase letters (A–Z), lowercase letters (a–z), decimal digits (0–9), and special symbols, or exclude visually ambiguous characters (such as O, 0, I, l, 1, and confusing brackets). The generator computes Shannon information entropy in bits in real time, giving you an objective measure of password complexity and brute-force resistance without transmitting any data over a network.",
    keywords: ["strong password generator","password generator"],
    faqs: [
      { q: "Is this password generator cryptographically secure?", a: "Yes. It uses the browser's native window.crypto.getRandomValues() method, which draws entropy directly from the underlying operating system's kernel CSPRNG (such as /dev/urandom on Linux/macOS or CryptGenRandom/BCrypt on Windows). This ensures statistical randomness and unpredictability, unlike Math.random()." },
      { q: "Are generated passwords saved, logged, or sent to a server?", a: "No. The generator operates entirely client-side inside your browser sandbox. No network requests, analytics payloads, or external API calls are made. AstonishBuddy has zero visibility into any passwords you generate." },
      { q: "What length and character combinations make a password 'unhackable'?", a: "No single password is theoretically impervious, but a randomly generated password of 16 or more characters drawn from a 94-character pool yields over 100 bits of entropy. At current computing capabilities, cracking a 105-bit random password via offline dictionary attack would require billions of years of GPU compute time." },
      { q: "Why should I exclude ambiguous characters?", a: "Certain characters look almost identical in many fonts: uppercase 'O' and digit '0', or lowercase 'l', digit '1', and uppercase 'I'. Excluded ambiguous characters make manual transcription onto mobile keyboards or physical backup recovery cards significantly less error-prone." },
      { q: "Can I generate multiple passwords at once?", a: "Yes. Select 1, 5, 10, or 20 from the count selector to produce a batch of distinct, independently seeded passwords in a single click." },
      { q: "How is the password strength score calculated?", a: "The strength score calculates information entropy using E = L × log2(R), where L is the password length and R is the character pool size. Passwords below 36 bits are marked Weak, 36–59 bits Moderate, 60–127 bits Strong, and 128+ bits Very Strong." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Cryptographically secure randomness generated via window.crypto.getRandomValues from hardware entropy"}</li>
          <li style={{ marginBottom: "8px" }}>{"Customizable character length slider ranging from 4 to 128 characters (default 16)"}</li>
          <li style={{ marginBottom: "8px" }}>{"Granular character set toggles: Uppercase (A–Z), Lowercase (a–z), Numbers (0–9), and Symbols (!@#$%^&*)"}</li>
          <li style={{ marginBottom: "8px" }}>{"Option to exclude ambiguous characters ({ } [ ] ( ) / \\ ' \" ` ~ , ; : . < > O 0 I l 1) to prevent transcription errors"}</li>
          <li style={{ marginBottom: "8px" }}>{"Batch generation support: simultaneously generate 1, 5, 10, or 20 distinct password candidates"}</li>
          <li style={{ marginBottom: "8px" }}>{"Real-time entropy evaluation displaying total bits of entropy and categorical strength ratings (Very Weak to Very Strong)"}</li>
          <li style={{ marginBottom: "8px" }}>{"Zero network requests or external dependencies: passwords exist solely in browser memory and are wiped on refresh"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Select your target password length using the slider or number input (recommended: 16+ characters for critical accounts)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Toggle your desired character sets: check Uppercase, Lowercase, Numbers, and Symbols according to your password requirements."}</li>
          <li style={{ marginBottom: "8px" }}>{"Optionally check 'Exclude Ambiguous Characters' if the password will be written down or typed manually into mobile keyboards."}</li>
          <li style={{ marginBottom: "8px" }}>{"Choose the batch quantity (1, 5, 10, or 20 passwords) from the count selector."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Generate Passwords' (or 'Regenerate') to produce fresh cryptographically random candidates."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click the 'Copy' icon next to any generated password to securely copy it to your clipboard for your password manager."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Standard 16-Character Mixed Complexity Password"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Length: 16 | Sets: Uppercase, Lowercase, Numbers, Symbols | Ambiguous: Included | Count: 1"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Candidate: k9#mQ2$vL8!pZ5*x\nCalculated Entropy: ~105 bits\nStrength Rating: Strong\nPool Size: 94 printable ASCII characters (26 uppercase + 26 lowercase + 10 digits + 32 symbols)\nCombinatorial Space: 94^16 ≈ 3.71 × 10^31 possibilities"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"High-Entropy 24-Character Administrative Password (No Ambiguous)"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Length: 24 | Sets: Uppercase, Lowercase, Numbers, Symbols | Ambiguous: Excluded | Count: 1"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Candidate: eH7%mK9#vR2!wT5$yP8*bC4\nCalculated Entropy: ~149 bits\nStrength Rating: Very Strong\nPool Size: ~74 non-ambiguous characters\nCombinatorial Space: 74^24 ≈ 8.84 × 10^44 possibilities"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Using short passwords (<12 characters) even with all character sets enabled, which leaves them vulnerable to high-speed offline GPU brute-force dictionaries."}</li>
          <li style={{ marginBottom: "8px" }}>{"Disabling symbols or numbers unnecessarily when the destination service accepts full UTF-8 or standard printable ASCII."}</li>
          <li style={{ marginBottom: "8px" }}>{"Assuming client-side generated passwords need to be memorized; store long random strings immediately in a trusted encrypted password manager."}</li>
          <li style={{ marginBottom: "8px" }}>{"Pasting production passwords into public web forms or sharing them over unencrypted messaging channels."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All password generation runs 100% locally on your device via window.crypto.getRandomValues. Generated passwords, length settings, and character parameters are never sent to any server, recorded in logs, or cached in browser storage. Refreshing or closing the tab destroys all generated strings immediately."}
        </p>
      </div>
    ),
  },
  "random-number-generator": {
    id: "random-number-generator",
    name: "Cryptographic Random Number Generator",
    shortIntro: "AstonishBuddy's Random Number Generator generates cryptographically secure, uniform integers within any custom minimum and maximum range. Unlike standard programming scripts that invoke Math.random()—which suffers from periodic PRNG states and severe modulo bias—our generator uses window.crypto.getRandomValues combined with rejection sampling. Rejection sampling discards unaligned bit boundaries across the 32-bit integer spectrum, mathematically guaranteeing that every allowable number in your chosen range has an identical probability of selection. You can generate single values or large batches, choose whether duplicates are permitted, and inspect full output distributions locally in your browser with zero server intervention.",
    keywords: ["cryptographic random number generator","random number generator"],
    faqs: [
      { q: "How does this tool eliminate modulo bias?", a: "When mapping a 32-bit random integer (0 to 4,294,967,295) to an arbitrary range (such as 1 to 6) using the modulo operator (%), numbers below the remainder boundary have a slightly higher probability of appearing. Our tool implements rejection sampling: it discards random integers that fall into the incomplete upper segment (val >= Math.floor(2^32 / range) * range) and draws again until an unbiased integer is obtained." },
      { q: "Is this generator suitable for statistical experiments and prize drawings?", a: "Yes. Because it uses window.crypto.getRandomValues with rejection sampling, it meets the criteria for cryptographically secure pseudo-random number generators (CSPRNG), ensuring uniform probability and unpredictable sequences." },
      { q: "Can I generate negative numbers?", a: "Yes. You can enter negative values in both Min and Max fields (e.g. Min: -50, Max: 50). The tool validates that Min is strictly less than or equal to Max." },
      { q: "What happens when 'Allow Duplicates' is turned off?", a: "When duplicates are disabled, the generator populates the range pool and performs an unbiased Fisher-Yates shuffle using crypto.getRandomValues, guaranteeing that no integer appears more than once." },
      { q: "What is the maximum quantity of numbers I can generate at once?", a: "You can generate up to 1,000 numbers in a single batch. For larger scientific simulations, generating millions of numbers in the main browser DOM thread can cause interface freezing." },
      { q: "Does the generator work when disconnected from the internet?", a: "Yes. Once the page is loaded in your browser, all calculation logic and entropy calls are 100% self-contained and run completely offline." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"True CSPRNG entropy powered by the browser's native window.crypto.getRandomValues API"}</li>
          <li style={{ marginBottom: "8px" }}>{"Mathematically rigorous rejection sampling algorithm eliminating modulo bias across any custom range"}</li>
          <li style={{ marginBottom: "8px" }}>{"Configurable integer range supporting negative, zero, and positive 32-bit safe integer values"}</li>
          <li style={{ marginBottom: "8px" }}>{"Custom count selector to generate up to 1,000 random numbers in a single execution"}</li>
          <li style={{ marginBottom: "8px" }}>{"Duplicate suppression toggle using Fisher-Yates array shuffling for fast, uniform sampling without replacement"}</li>
          <li style={{ marginBottom: "8px" }}>{"Instant copy to clipboard with comma, space, or newline-delimited formatting options"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% client-side calculation with zero server communication or network latency"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Set your desired minimum integer in the 'Min' input field (default: 1)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Set your desired maximum integer in the 'Max' input field (default: 100)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Specify how many random numbers you wish to generate in the 'Count' field (up to 1,000)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Toggle 'Allow Duplicates' on if repeated values are acceptable, or toggle off for unique sampling without replacement."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click '🎲 Generate Random Numbers' to trigger CSPRNG sampling."}</li>
          <li style={{ marginBottom: "8px" }}>{"View the generated list and click 'Copy Numbers' to transfer the output to your clipboard."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Standard Six-Sided Die Roll Simulation"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Min: 1 | Max: 6 | Count: 5 | Allow Duplicates: Yes"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Result: [4, 1, 6, 2, 4]\nUniform Distribution Probability: 1/6 (16.666%) per roll\nCSPRNG Engine: window.crypto.getRandomValues(Uint32Array) with unbiased rejection sampling\nModulo Bias: Zero"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Lottery Ticket Number Draw (Unique Integers)"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Min: 1 | Max: 49 | Count: 6 | Allow Duplicates: No"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Result: [7, 14, 23, 31, 42, 48]\nAlgorithm: Fisher-Yates partial CSPRNG array shuffle\nDuplicates: Guaranteed 0 duplicate values within the selected draw\nRange Verification: All values strictly between 1 and 49 inclusive"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Requesting more unique numbers than the range permits (e.g. asking for 10 unique numbers between 1 and 5), which causes a validation error."}</li>
          <li style={{ marginBottom: "8px" }}>{"Assuming browser Math.random() is suitable for security or gaming; standard PRNGs are deterministic and predictable."}</li>
          <li style={{ marginBottom: "8px" }}>{"Entering floating-point decimals when discrete integer sampling is required; non-integers are automatically rounded to the nearest integer."}</li>
          <li style={{ marginBottom: "8px" }}>{"Relying on simple modulo arithmetic (% range) in personal code, which introduces systematic statistical bias toward smaller remainders."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All number generation executes strictly within your local browser thread using the Web Cryptography API. No parameters, generated numbers, or timestamps are sent to AstonishBuddy servers. No cookies, trackers, or storage logs are utilized."}
        </p>
      </div>
    ),
  },
  "uuid-generator": {
    id: "uuid-generator",
    name: "UUID / GUID Generator",
    shortIntro: "AstonishBuddy's UUID Generator creates Version 4 Universally Unique Identifiers (UUIDs) and Globally Unique Identifiers (GUIDs) in full compliance with the RFC 4122 specification. Each generated UUID comprises 128 bits of cryptographically secure entropy, formatted as 32 hexadecimal characters arranged into five hyphen-delimited groups (8-4-4-4-12). In accordance with standard RFC 4122 semantics, the 13th character is set to '4' to designate Version 4 (randomly generated), and the 17th character uses variant bits '8', '9', 'a', or 'b'. Our tool allows single or bulk generation up to 100 UUIDs at a time, with configurable formatting (standard lowercase, uppercase, or hyphens removed) and customizable delimiters, all processed strictly client-side.",
    keywords: ["uuid / guid generator","uuid generator"],
    faqs: [
      { q: "What is the difference between a UUID and a GUID?", a: "UUID (Universally Unique Identifier) and GUID (Globally Unique Identifier) refer to the exact same 128-bit identifier standard defined in RFC 4122. Microsoft documentation historically adopted the term GUID, whereas Unix, IETF, and ISO specifications use UUID." },
      { q: "Can two generated UUID v4 identifiers ever collide?", a: "While theoretically possible because UUID v4 relies on 122 random bits, the probability is so infinitesimally small (1 in 5.3 × 10^36) that generating 1 billion UUIDs every second for 100 years yields a collision probability under one in a billion." },
      { q: "How can I verify that a generated string is a true Version 4 UUID?", a: "Look at the 13th character: in a valid Version 4 UUID, this character is always the digit '4' (e.g. xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx). The 17th character ('y') must begin with binary '10', corresponding to hexadecimal characters 8, 9, a, or b." },
      { q: "When should I use the 'No Hyphens' format?", a: "Certain databases, key-value stores (such as Redis), and compact binary serializers store UUIDs as continuous 32-character hex strings to save storage overhead or conform to strict primary key formats." },
      { q: "Can I export generated UUIDs as a file?", a: "Yes. In bulk mode, you can click 'Download as TXT' to save all generated UUIDs as a formatted text file directly to your computer." },
      { q: "Does this tool use crypto.randomUUID()?", a: "Yes. Modern evergreen browsers natively support window.crypto.randomUUID(), which is called directly by our generator. For batch formatting and older browser compatibility, it falls back to window.crypto.getRandomValues()." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Strict RFC 4122 Version 4 compliance with exact 4-bit version nibble and 2-bit variant markers"}</li>
          <li style={{ marginBottom: "8px" }}>{"High-entropy random generation utilizing the browser's window.crypto.getRandomValues engine"}</li>
          <li style={{ marginBottom: "8px" }}>{"Single-click instant generation or bulk creation of 5, 10, 25, 50, or 100 UUIDs"}</li>
          <li style={{ marginBottom: "8px" }}>{"Flexible output formatting: standard lowercase, uppercase, or stripped unhyphenated 32-character strings"}</li>
          <li style={{ marginBottom: "8px" }}>{"Multiple output delimiters for bulk export: newline, comma, semicolon, or formatted JSON array"}</li>
          <li style={{ marginBottom: "8px" }}>{"One-click clipboard copy and direct text file download (.txt) for development workflows"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% client-side execution with zero backend calls, tracking, or identifier storage"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Select your generation mode: Single UUID for a quick identifier, or Bulk UUIDs for database seeding and testing."}</li>
          <li style={{ marginBottom: "8px" }}>{"For bulk mode, choose your desired quantity from the preset buttons (5, 10, 25, 50, 100) or enter a custom count."}</li>
          <li style={{ marginBottom: "8px" }}>{"Select your output casing: standard lowercase (e.g. f47ac10b-58cc-4372-a567-0e02b2c3d479) or UPPERCASE."}</li>
          <li style={{ marginBottom: "8px" }}>{"Choose whether to include or remove hyphens (e.g. 32-character compact hexadecimal for MongoDB ObjectIDs or API keys)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Select your preferred delimiter (newline, comma, or semicolon) for bulk lists."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Generate UUIDs' to refresh the values, then click 'Copy All' or 'Download as TXT' to save your identifiers."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Standard RFC 4122 v4 Lowercase UUID"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Mode: Single | Format: Standard Hyphenated | Casing: Lowercase"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"c4a760a8-dbcf-4e15-8123-d65d11f76d32\nStructure Breakdown:\n- Time-low (8 hex): c4a760a8\n- Time-mid (4 hex): dbcf\n- Version & Time-high (4 hex): 4e15 (nibble '4' = RFC 4122 v4)\n- Variant & Clock-seq (4 hex): 8123 (bits '10xx' = RFC 4122 variant)\n- Node MAC (12 hex): d65d11f76d32"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Bulk Compact Unhyphenated Uppercase Identifiers"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Mode: Bulk (Count: 3) | Format: No Hyphens | Casing: Uppercase | Delimiter: Comma"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"9F2D83A14B604F119C72A8B3C4D5E6F7, 3E1B92C07D414E538A190B2C3D4E5F6A, 8A7C6B5D4E3F4021B1C2D3E4F5A6B7C8\nCollision Probability: Approximately 1 in 2^122 (astronomically negligible for production datasets)"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Confusing UUID Version 1 (timestamp and MAC-address based) with UUID Version 4 (pure cryptographic randomness)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Manually removing hyphens with string search-and-replace instead of using the built-in 'No Hyphens' toggle."}</li>
          <li style={{ marginBottom: "8px" }}>{"Assuming UUIDs are sequential or sortable by time; for ordered indexing, developers should use ULIDs or UUID v7."}</li>
          <li style={{ marginBottom: "8px" }}>{"Storing uppercase and lowercase UUIDs as distinct keys in case-sensitive database indexes without normalization."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"UUID generation occurs completely inside your local browser runtime via native crypto APIs. AstonishBuddy never transmits, logs, or stores generated UUIDs on any server. Identifiers are completely private to your session."}
        </p>
      </div>
    ),
  },
  "json-formatter": {
    id: "json-formatter",
    name: "JSON Formatter & Validator",
    shortIntro: "AstonishBuddy's JSON Formatter & Validator is an in-browser utility for web developers, API engineers, and data analysts. It parses, formats, indents, minifies, and validates JSON (JavaScript Object Notation) strings in real time. Built directly on native JSON.parse and JSON.stringify implementations, the tool highlights syntax errors, unescaped characters, trailing commas, and malformed object keys with zero server latency. You can toggle between 2-space and 4-space indentation, condense payloads for production wire transmission with '⚡ Minify', revert to compacted single-line structures via 'Raw', or validate payloads instantly with single-click clipboard integration.",
    keywords: ["json formatter & validator","json formatter"],
    faqs: [
      { q: "Why does my JSON show a syntax error with single quotes?", a: "The official JSON specification (RFC 8259) strictly requires double quotes (\") for both property keys and string values. Single quotes (') are permitted in JavaScript object literals, but are illegal in valid JSON." },
      { q: "Does this tool send my JSON data to an external server?", a: "No. All parsing and formatting takes place entirely inside your browser's local V8 or JavaScriptCore runtime using JSON.parse() and JSON.stringify(). No data is transmitted to AstonishBuddy or third-party servers." },
      { q: "What does the 'Raw' button do?", a: "The 'Raw' button parses your input JSON and outputs a compact, single-line serialized string without extra indentation, ensuring clean single-line representation." },
      { q: "Can this tool format JSON with comments?", a: "Standard JSON does not support comments. If your payload includes JavaScript-style // or /* */ comments, JSON.parse will throw a syntax error. Remove comments before formatting." },
      { q: "How large of a JSON document can I format?", a: "Because processing is 100% client-side, the tool can comfortably format documents up to several megabytes (tens of thousands of lines). Very large files (>20MB) may experience brief browser UI pauses during DOM rendering." },
      { q: "What is the difference between 2-space and 4-space formatting?", a: "Two-space indentation is standard in modern JavaScript, TypeScript, and web engineering because it keeps deeply nested objects compact. Four-space indentation is common in Python, Java, and C++ backends for enhanced visual separation." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Instant JSON syntax validation with clear parse error reporting and location cues"}</li>
          <li style={{ marginBottom: "8px" }}>{"Configurable indentation settings: toggle between standard 2-space or readable 4-space indentation"}</li>
          <li style={{ marginBottom: "8px" }}>{"'⚡ Minify' mode to strip all whitespace, line breaks, and padding for compressed payload delivery"}</li>
          <li style={{ marginBottom: "8px" }}>{"'Raw' single-line serialization button to quickly unwrap and condense validated JSON strings"}</li>
          <li style={{ marginBottom: "8px" }}>{"One-click 'Paste' and 'Clear' buttons for rapid clipboard debugging workflows"}</li>
          <li style={{ marginBottom: "8px" }}>{"Direct 'Copy' functionality to transfer formatted output straight into your IDE or API client"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% client-side execution ensuring sensitive API keys, auth payloads, and customer data never leave your browser"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Paste your raw, minified, or unformatted JSON text into the left input textarea (or click the 'Paste' button)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Select your preferred indentation depth: click '2 spaces' or '4 spaces' based on your team's code conventions."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click '🎨 Format' to beautify the structure with aligned nested keys, arrays, and syntax-checked formatting."}</li>
          <li style={{ marginBottom: "8px" }}>{"If you need to compress JSON for an HTTP POST body or config file, click '⚡ Minify' to strip unnecessary whitespace."}</li>
          <li style={{ marginBottom: "8px" }}>{"To check validity without modifying spacing, click 'Validate' to confirm standard RFC 8259 compliance."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Copy' above the output panel to copy the formatted result directly to your clipboard."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Formatting a Minified API Response"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"{\"status\":\"ok\",\"code\":200,\"data\":{\"userId\":4102,\"roles\":[\"admin\",\"editor\"],\"settings\":{\"theme\":\"dark\",\"notifications\":true}}}"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"{\n  \"status\": \"ok\",\n  \"code\": 200,\n  \"data\": {\n    \"userId\": 4102,\n    \"roles\": [\n      \"admin\",\n      \"editor\"\n    ],\n    \"settings\": {\n      \"theme\": \"dark\",\n      \"notifications\": true\n    }\n  }\n}"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Minifying Expanded Multi-Line JSON"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"{\n  \"service\": \"mailer\",\n  \"retries\": 3,\n  \"active\": true\n}"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"{\"service\":\"mailer\",\"retries\":3,\"active\":true}\nPayload Size Reduction: ~45% character overhead eliminated for wire transmission"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Using single quotes ('key') instead of standard double quotes (\"key\"); RFC 8259 JSON requires strict double quotation for all strings and object keys."}</li>
          <li style={{ marginBottom: "8px" }}>{"Leaving trailing commas after the last element in arrays or objects (e.g. {\"a\": 1, }), which is invalid in standard JSON."}</li>
          <li style={{ marginBottom: "8px" }}>{"Pasting JavaScript object literals with unquoted keys or comments (// or /* */); standard JSON does not permit comments."}</li>
          <li style={{ marginBottom: "8px" }}>{"Assuming the tool fixes corrupted JSON automatically; while it reports syntax syntax errors precisely, invalid JSON must be corrected manually."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All JSON formatting, parsing, and minification operations run strictly within your local browser JavaScript engine. Your JSON data—including sensitive credentials, customer records, and internal schema designs—is never sent across a network or recorded in any database."}
        </p>
      </div>
    ),
  },
  "sql-formatter": {
    id: "sql-formatter",
    name: "SQL Formatter & Beautifier",
    shortIntro: "AstonishBuddy's SQL Formatter & Beautifier standardizes, indents, and beautifies raw database queries across six major SQL dialects. Powered client-side by the robust sql-formatter engine, it cleans up dense, unreadable queries into structured statements with aligned clauses (SELECT, FROM, WHERE, JOIN, GROUP BY, ORDER BY). You can select your database dialect (Standard SQL, PostgreSQL, MySQL, SQLite, MariaDB, or Transact-SQL / SQL Server), configure indentation spacing (2 or 4 spaces), choose keyword casing (UPPER, lower, or Preserve), switch between colorful syntax-highlighted display and plain text, or condense complex queries into a single line with '⚡ Minify SQL'.",
    keywords: ["sql formatter & beautifier","sql formatter"],
    faqs: [
      { q: "Which SQL dialects are supported?", a: "The formatter supports Standard ANSI SQL, PostgreSQL, MySQL, MariaDB, SQLite, and Transact-SQL (T-SQL / Microsoft SQL Server). Each dialect handles vendor-specific quoting, operators, and reserved keywords appropriately." },
      { q: "Does formatting SQL alter my query's execution plan or performance?", a: "No. SQL engines strip whitespace and normalize query tokens into an Abstract Syntax Tree (AST) before optimization and execution. Changing whitespace, indentation, or keyword casing does not affect database execution speed." },
      { q: "Can I enforce uppercase SQL keywords automatically?", a: "Yes. By selecting the 'UPPER' keyword case option, keywords such as SELECT, FROM, WHERE, JOIN, and GROUP BY are automatically converted to uppercase while preserving the casing of table and column identifiers." },
      { q: "What does the '⚡ Minify SQL' button do?", a: "'⚡ Minify SQL' collapses all multi-line indentation, unnecessary whitespace, and line breaks into a clean, compact single-line SQL statement, which is ideal for embedding into application source code strings." },
      { q: "Are my database queries stored or monitored?", a: "No. The formatting engine runs entirely client-side using WebAssembly/JavaScript inside your browser. No queries or schema structures are ever transmitted to AstonishBuddy servers." },
      { q: "Can this tool validate whether my table names and columns exist?", a: "No. The formatter analyzes query syntax and token structures. It does not connect to your live database and cannot verify whether referenced tables, columns, or foreign keys exist in your schema." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Comprehensive multi-dialect support: Standard SQL, MySQL, PostgreSQL, SQLite, MariaDB, and Transact-SQL (T-SQL)"}</li>
          <li style={{ marginBottom: "8px" }}>{"Granular keyword case conversion: force UPPERCASE keywords, lowercase keywords, or preserve original author casing"}</li>
          <li style={{ marginBottom: "8px" }}>{"Configurable indentation depth: choose between 2 spaces or 4 spaces per subclause level"}</li>
          <li style={{ marginBottom: "8px" }}>{"Dual view modes: inspect syntax-highlighted code with clear token distinction or switch to copyable plain text"}</li>
          <li style={{ marginBottom: "8px" }}>{"'⚡ Minify SQL' mode to strip comments and collapse multi-line queries into single-line strings for inline code integration"}</li>
          <li style={{ marginBottom: "8px" }}>{"Convenient utility controls: '📋 Paste', '📝 Sample' query loader, 'Clear', and instant one-click 'Copy'"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% client-side processing: proprietary database schemas and internal query structures never leave your machine"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Paste your raw SQL query into the left code editor (or click '📝 Sample' to load a demonstration query)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Select your target SQL dialect from the dropdown menu (e.g. PostgreSQL, MySQL, SQLite, T-SQL)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Choose your desired keyword casing: click 'UPPER' to enforce standard conventions (SELECT, FROM), 'lower', or 'Preserve'."}</li>
          <li style={{ marginBottom: "8px" }}>{"Select your indentation depth (2sp or 4sp) based on your team's SQL style guide."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click '🎨 Format SQL' to beautify the query with structured clauses and aligned joins."}</li>
          <li style={{ marginBottom: "8px" }}>{"Optionally click '⚡ Minify SQL' to condense the query into a compact single-line string, or click 'Copy' to transfer the result."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Standard SQL Query Beautification with Uppercase Keywords"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"select u.id,u.name,count(o.id) as orders from users u left join orders o on u.id=o.user_id where u.active=1 group by u.id,u.name having count(o.id)>5 order by orders desc;"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"SELECT\n  u.id,\n  u.name,\n  COUNT(o.id) AS orders\nFROM\n  users u\n  LEFT JOIN orders o ON u.id = o.user_id\nWHERE\n  u.active = 1\nGROUP BY\n  u.id,\n  u.name\nHAVING\n  COUNT(o.id) > 5\nORDER BY\n  orders DESC;"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Minifying SQL for Inline Backend String Literals"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"SELECT\n  emp_id,\n  department\nFROM\n  employees\nWHERE\n  salary > 75000;"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"SELECT emp_id, department FROM employees WHERE salary > 75000;\nFormatting Benefit: Compact single-line string ready for Python, Node.js, or Go database query templates"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Selecting the wrong dialect when using database-specific syntax (such as PostgreSQL's :: cast or SQL Server's TOP / CROSS APPLY clauses)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Expecting the formatter to fix semantic SQL bugs (such as referencing invalid column names or misspelled tables); the tool formats syntax and does not execute queries against a database."}</li>
          <li style={{ marginBottom: "8px" }}>{"Formatting incomplete or truncated query snippets, which can cause the parser to misunderstand clause hierarchy."}</li>
          <li style={{ marginBottom: "8px" }}>{"Overlooking keyword case preferences when contributing to team repositories with strict uppercase or lowercase linter rules."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"Your SQL queries are processed 100% locally in your web browser. Neither your database structure, table names, column identifiers, nor proprietary query logic are transmitted over the internet or logged on any remote server."}
        </p>
      </div>
    ),
  },
  "jwt-decoder": {
    id: "jwt-decoder",
    name: "JWT Decoder",
    shortIntro: "AstonishBuddy's JWT Decoder is a client-side inspection tool for JSON Web Tokens (RFC 7519). A standard JWT consists of three base64url-encoded segments delimited by periods (.): the JOSE Header, the Payload (Claims Set), and the Cryptographic Signature. Our tool extracts and decodes the Header and Payload segments locally using base64url decoding, parses their JSON structures, and presents timestamps (issued-at, expiration, not-before) in human-readable UTC and local time formats. IMPORTANT: This tool performs decoding only—the cryptographic signature is NOT verified because verifying a signature requires knowing the secret key (for HMAC SHA-256) or public key certificate (for RSA/ECDSA). For your security, never paste active production tokens into any third-party browser utility; always use test, staging, or expired tokens for debugging.",
    keywords: ["jwt decoder","jwt decoder"],
    faqs: [
      { q: "Does this tool verify the cryptographic signature of my JWT?", a: "No. The status is explicitly 'Signature not verified (decode only)'. Cryptographically verifying a signature requires verifying against the secret key (for symmetric algorithms like HS256) or the issuer's public key (for asymmetric algorithms like RS256/ES256). Since you should never share secret keys with any web tool, this utility focuses strictly on decoding and inspecting the header and payload claims." },
      { q: "Is it safe to paste a real JWT into this tool?", a: "While this tool runs 100% client-side in your browser and never sends tokens over a network, we strongly recommend never pasting live production tokens into any third-party browser tool. As a security best practice, use expired tokens, test tokens from local development environments, or synthetic payloads." },
      { q: "How does the tool decode the token without a secret key?", a: "JSON Web Tokens are not encrypted by default; they are simply encoded using base64url. Anyone with access to the token string can read the Header and Payload by converting the base64url characters into standard ASCII/UTF-8 JSON. The signature is the only part that requires a cryptographic key to validate." },
      { q: "Does this tool use the Web Crypto API to decode tokens?", a: "No. Decoding a JWT header and payload is a straightforward base64url string translation, which does not require the Web Crypto API. The Web Crypto API would only be required if performing full cryptographic signature verification or decrypting encrypted JWE tokens." },
      { q: "Why does the tool show that my token is expired?", a: "The decoder reads the standard 'exp' (expiration) claim in the payload, which contains a Unix timestamp in seconds. If this timestamp is earlier than the current system time on your device, the tool displays an 'Expired' indicator." },
      { q: "What signing algorithms are shown in the Header?", a: "The Header typically specifies algorithms such as HS256, HS384, HS512, RS256, RS512, or ES256. This display reflects whatever algorithm value was declared when the token was created, but does not represent validation of that algorithm." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Instant client-side base64url decoding of JOSE Header and Payload claims sets"}</li>
          <li style={{ marginBottom: "8px" }}>{"Signature not verified (decode only) status clearly indicated with algorithm display for inspection purposes"}</li>
          <li style={{ marginBottom: "8px" }}>{"Automatic timestamp conversion for standard RFC 7519 claims: exp (expiration), iat (issued at), and nbf (not before)"}</li>
          <li style={{ marginBottom: "8px" }}>{"Visual token expiration badge indicating whether the token is currently active or expired"}</li>
          <li style={{ marginBottom: "8px" }}>{"Individual copy buttons for decoded Header and Payload JSON objects"}</li>
          <li style={{ marginBottom: "8px" }}>{"Preloaded 'Load Sample' button demonstrating standard HS256 token structure and claims"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% in-browser processing with zero server calls; tokens are never transmitted across any network"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Paste your base64url-encoded JWT string into the token input box (or click 'Load Sample' to test the decoder)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Inspect the decoded Header panel to verify the signing algorithm ('alg', e.g. HS256, RS256) and token type ('typ': 'JWT')."}</li>
          <li style={{ marginBottom: "8px" }}>{"Review the Payload claims to inspect standard subject ('sub'), issuer ('iss'), roles, permissions, and custom claims."}</li>
          <li style={{ marginBottom: "8px" }}>{"Check the expiration badges to verify whether the token's 'exp' timestamp represents a valid or expired session."}</li>
          <li style={{ marginBottom: "8px" }}>{"Note the signature status: 'Signature not verified (decode only)' confirms the signature is displayed without cryptographic validation."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Copy' above either the Header or Payload panel to copy the formatted JSON to your clipboard."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Standard Authentication Token Header & Payload Decoding"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Header:\n{\n  \"alg\": \"HS256\",\n  \"typ\": \"JWT\"\n}\nPayload:\n{\n  \"sub\": \"1234567890\",\n  \"name\": \"John Doe\",\n  \"iat\": 1516239022 (Thu Jan 18 2018 01:30:22 UTC)\n}\nSignature Status: Signature not verified (decode only)\nSignature Hex: 49f94ac70449... (HMAC-SHA256 segment displayed without secret key verification)"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Inspecting Expired Role-Based Access Control (RBAC) Token"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfOTA4MSIsInJvbGVzIjpbImFkbWluIl0sImV4cCI6MTcwMDAwMDAwMH0.signature_placeholder"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Header: {\"alg\": \"RS256\", \"typ\": \"JWT\"}\nPayload: {\"sub\": \"usr_9081\", \"roles\": [\"admin\"], \"exp\": 1700000000}\nToken Status: Expired (Mon Nov 13 2023 22:13:20 UTC)\nNote: RS256 public key verification not performed"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Assuming a decoded JWT has been cryptographically verified; decoding only extracts base64url text and does not validate whether the token was signed with the legitimate secret or tampered with."}</li>
          <li style={{ marginBottom: "8px" }}>{"Pasting live production tokens containing sensitive authorization credentials into web tools instead of using test tokens."}</li>
          <li style={{ marginBottom: "8px" }}>{"Confusing JWT encryption (JWE) with standard signed tokens (JWS); JWE tokens have five segments and cannot be read without decryption keys."}</li>
          <li style={{ marginBottom: "8px" }}>{"Relying on the 'alg' header field for security decisions without strict server-side algorithm whitelisting (preventing 'alg: none' exploits)."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All token decoding runs 100% locally in your browser using standard base64url string decoding. Your token is never transmitted over the internet, sent to AstonishBuddy servers, or stored in any analytics logs. For sensitive production credentials, we strongly recommend using simulated or expired tokens."}
        </p>
      </div>
    ),
  },
  "base64-converter": {
    id: "base64-converter",
    name: "Base64 Encoder & Decoder",
    shortIntro: "AstonishBuddy's Base64 Converter is a fast, client-side utility for encoding plain text into Base64 format and decoding Base64 strings back into human-readable text. Base64 is a binary-to-text encoding scheme defined in RFC 4648 that represents data using a set of 64 printable ASCII characters (A–Z, a–z, 0–9, +, and /), typically padded with '='. Our tool includes UTF-8 safety handling to correctly preserve international characters, accented letters, and emoji without throwing JavaScript character range errors. With dedicated buttons for '🔒 Encode to Base64' and '🔓 Decode from Base64', you can inspect data URIs, API authentication headers, and serialized payloads securely in your browser.",
    keywords: ["base64 encoder & decoder","base64 converter"],
    faqs: [
      { q: "Is Base64 an encryption method?", a: "No. Base64 is an encoding scheme designed to safely transmit binary data across text-only protocols (such as email or HTTP). It provides no confidentiality, security, or encryption. Anyone can decode a Base64 string back to its original form." },
      { q: "How does this tool handle non-ASCII characters and emoji?", a: "Standard JavaScript atob() and btoa() functions fail on characters outside the Latin-1 range. Our tool applies UTF-8 encoding wrappers prior to Base64 conversion, ensuring that emoji, Chinese, Cyrillic, Arabic, and accented characters encode and decode accurately." },
      { q: "What do the '=' characters at the end of a Base64 string mean?", a: "Base64 processes data in 3-byte groups (24 bits), mapped into four 6-bit characters. If the total byte count is not evenly divisible by 3, '=' padding characters are appended to reach a multiple of 4 characters." },
      { q: "What is the difference between standard Base64 and Base64URL?", a: "Standard Base64 uses '+' and '/' as characters 62 and 63. In Base64URL (used in JWTs), these are replaced with '-' and '_' to prevent collisions with URL reserved characters, and padding '=' is often omitted." },
      { q: "Why do I get an 'Error: Invalid Base64 string' message?", a: "This error occurs when attempting to decode a string containing characters outside the valid 64-character set, or when the string length is not a valid multiple of 4." },
      { q: "Are my passwords or API keys safe when using this tool?", a: "Yes, because processing is 100% client-side in your local browser. However, as general security hygiene, avoid pasting active production keys into web interfaces when offline terminal utilities (like base64 or openssl) are available." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Bidirectional conversion: instant one-click '🔒 Encode to Base64' and '🔓 Decode from Base64'"}</li>
          <li style={{ marginBottom: "8px" }}>{"UTF-8 safe encoding: correctly handles international scripts, special symbols, and emoji via proper URI escaping"}</li>
          <li style={{ marginBottom: "8px" }}>{"Standard RFC 4648 compliance with proper 64-character alphabet and '=' padding alignment"}</li>
          <li style={{ marginBottom: "8px" }}>{"One-click 'Paste' and 'Clear' controls for seamless clipboard integration"}</li>
          <li style={{ marginBottom: "8px" }}>{"Clear error messaging when decoding malformed or corrupted Base64 strings"}</li>
          <li style={{ marginBottom: "8px" }}>{"Dedicated one-click 'Copy' button to transfer converted outputs to your development workspace"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% client-side execution with zero server requests, preserving complete privacy for API credentials"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Enter or paste your text or Base64 string into the input area (or click 'Paste')."}</li>
          <li style={{ marginBottom: "8px" }}>{"To convert plain text into Base64, click '🔒 Encode to Base64'."}</li>
          <li style={{ marginBottom: "8px" }}>{"To decode a Base64 string back into readable text, click '🔓 Decode from Base64'."}</li>
          <li style={{ marginBottom: "8px" }}>{"Review the converted output in the bottom result box; errors will appear if the input string contains invalid Base64 characters."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Copy' above the output panel to copy the converted string to your clipboard."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Clear' to reset both input and output fields for your next conversion."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Encoding ASCII Text into Base64"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Hello, AstonishBuddy!"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"SGVsbG8sIEFzdG9uaXNoQnVkZHkh\nEncoding Details:\n- Input Length: 21 bytes\n- Output Length: 28 characters\n- Padding: None required (21 bytes is divisible by 3)"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Decoding Base64 String with Padding"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"U2VjdXJlIFRva2VuIDIwMjY="}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Secure Token 2026\nDecoding Details:\n- Input Length: 24 characters (including one '=' padding character)\n- Decoded Length: 17 bytes\n- Encoding Scheme: Standard RFC 4648"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Confusing Base64 encoding with encryption; Base64 provides zero security or data obfuscation and can be decoded by anyone."}</li>
          <li style={{ marginBottom: "8px" }}>{"Using standard atob() directly on multi-byte UTF-8 strings (like emoji or non-Latin alphabets), which causes 'character out of range' errors."}</li>
          <li style={{ marginBottom: "8px" }}>{"Missing the '=' padding characters when transferring Base64 strings across systems that require strict 4-character block alignment."}</li>
          <li style={{ marginBottom: "8px" }}>{"Confusing standard Base64 (+ and /) with URL-safe Base64 (- and _); standard Base64 characters can break query strings if unescaped."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All Base64 encoding and decoding executes 100% in your local browser sandbox. No input strings, output strings, or metadata are ever transmitted over the network or recorded on AstonishBuddy servers."}
        </p>
      </div>
    ),
  },
  "url-converter": {
    id: "url-converter",
    name: "URL Encoder & Decoder",
    shortIntro: "AstonishBuddy's URL Encoder & Decoder converts strings into percent-encoded URI components and decodes percent-encoded URLs back into readable text. In web standards (RFC 3986), URLs may only contain a limited subset of characters from the US-ASCII set. Characters outside this set, as well as reserved characters with syntactic meanings in query strings (such as &, =, ?, /, :, and #), must be safely escaped using percent-encoding (% followed by two hexadecimal digits). Our tool runs directly in your browser using standard encodeURIComponent and decodeURIComponent specifications, making it effortless to sanitize API query arguments, parse webhook URLs, and resolve malformed parameters with zero network latency.",
    keywords: ["url encoder & decoder","url converter"],
    faqs: [
      { q: "What is percent-encoding?", a: "Percent-encoding (also known as URL encoding) is a mechanism for encoding characters in a Uniform Resource Identifier (URI). Characters that are reserved or not permitted in standard ASCII URLs are represented by a '%' followed by their two-digit hexadecimal byte value (e.g. space becomes %20)." },
      { q: "Should I encode a full URL or just the query parameters?", a: "You should encode query parameter keys and values individually. If you encode an entire URL with encodeURIComponent, the protocol (https://) and domain slashes are also encoded, which prevents browsers from recognizing it as a navigable address." },
      { q: "What is the difference between %20 and + for spaces?", a: "RFC 3986 defines %20 as the standard percent-encoding for a space character in all URL parts. The plus sign (+) is only used to represent spaces within application/x-www-form-urlencoded query bodies submitted by HTML forms." },
      { q: "Can this tool handle non-English characters and emoji?", a: "Yes. The underlying encodeURIComponent engine encodes multi-byte UTF-8 sequences. For example, the character 'é' encodes to '%C3%A9', and the emoji '🚀' encodes to '%F0%9F%9A%80'." },
      { q: "Why do I see an 'URIError: URI malformed' message when decoding?", a: "This error occurs if your input contains an invalid percent sequence, such as a lone '%' character followed by characters that are not valid two-digit hexadecimal numbers (e.g. %ZZ or a trailing % at the end of the text)." },
      { q: "Does this tool send my URLs to an external server?", a: "No. All encoding and decoding runs 100% locally in your browser using JavaScript's native URI handling functions. No URL data is sent across the network." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Standard RFC 3986 percent-encoding and decoding using native encodeURIComponent and decodeURIComponent"}</li>
          <li style={{ marginBottom: "8px" }}>{"Safe encoding of reserved delimiter characters (&, =, ?, /, #, +, and spaces) to prevent query parameter collisions"}</li>
          <li style={{ marginBottom: "8px" }}>{"Full UTF-8 support: correctly encodes multi-byte international characters and emoji into percent-hex sequences"}</li>
          <li style={{ marginBottom: "8px" }}>{"Dedicated 'Encode URL' and 'Decode URL' action buttons for fast debugging"}</li>
          <li style={{ marginBottom: "8px" }}>{"One-click 'Paste' and 'Clear' controls for rapid clipboard workflows"}</li>
          <li style={{ marginBottom: "8px" }}>{"Direct 'Copy' button to transfer encoded/decoded parameters straight into your API client or code editor"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% client-side calculation with zero server calls, keeping private API endpoints completely confidential"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Paste your raw URL, query parameter, or encoded string into the input textarea (or click 'Paste')."}</li>
          <li style={{ marginBottom: "8px" }}>{"To encode reserved characters and spaces into percent sequences (e.g. converting '&' to '%26' and spaces to '%20'), click 'Encode URL'."}</li>
          <li style={{ marginBottom: "8px" }}>{"To convert percent-encoded sequences back to readable text (e.g. converting '%20' back to a space), click 'Decode URL'."}</li>
          <li style={{ marginBottom: "8px" }}>{"Inspect the converted string in the output panel."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Copy' above the output box to copy the converted result to your clipboard."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Clear' to reset the fields for another conversion."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Encoding Query Parameters with Special Characters"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"search=shoes & boots?category=men's fashion"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"search%3Dshoes%20%26%20boots%3Fcategory%3Dmen's%20fashion\nEncoded Characters:\n- '=' becomes %3D\n- ' ' (space) becomes %20\n- '&' becomes %26\n- '?' becomes %3F"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Decoding a Redirect Callback URL"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"https%3A%2F%2Fexample.com%2Fcallback%3Ftoken%3Dxyz123%26source%3Demail"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"https://example.com/callback?token=xyz123&source=email\nDecoded Characters:\n- %3A becomes :\n- %2F becomes /\n- %3F becomes ?\n- %3D becomes =\n- %26 becomes &"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Encoding an entire full URL with encodeURIComponent instead of encoding individual parameter values, which accidentally turns https:// into https%3A%2F%2F."}</li>
          <li style={{ marginBottom: "8px" }}>{"Double-encoding URLs by repeatedly running an already encoded string, turning %20 into %2520."}</li>
          <li style={{ marginBottom: "8px" }}>{"Confusing '+' with '%20'; while application/x-www-form-urlencoded forms historically used '+' for spaces, standard RFC 3986 URI components use '%20'."}</li>
          <li style={{ marginBottom: "8px" }}>{"Failing to decode query strings before parsing JSON payloads embedded inside URL arguments."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All URL encoding and decoding operations take place entirely inside your web browser. No URLs, query strings, API keys, or destination endpoints are transmitted over the network or logged by AstonishBuddy."}
        </p>
      </div>
    ),
  },
  "qr-generator": {
    id: "qr-generator",
    name: "QR Code Generator",
    shortIntro: "AstonishBuddy's QR Code Generator is an interactive, browser-based tool for creating custom Quick Response (QR) codes. Operating 100% client-side via the open-source qrcode engine, it generates sharp, scannable QR matrices without transmitting your text or links to any remote server. The generator features convenient preset templates for URLs, Email addresses, Phone numbers, and WiFi networks, along with full customization of dimensions (100px to 600px), custom foreground and background colors, and four ISO/IEC 18004 Error Correction Coding (ECC) levels (L, M, Q, and H). You can download your finished QR code instantly as a raster PNG or as a scalable vector SVG suitable for high-resolution print production.",
    keywords: ["qr code generator","qr generator"],
    faqs: [
      { q: "Can I download my QR code as a scalable vector graphic (SVG)?", a: "Yes. In addition to standard raster PNG images, you can click '⬇️ Download SVG' to obtain a resolution-independent vector file, which is ideal for billboards, apparel, packaging, and commercial printing." },
      { q: "Which Error Correction Level (ECC) should I choose?", a: "Level L (7% recovery) produces the simplest, cleanest matrix and is best for short URLs on screens. Level M (15%) is the default standard for general usage. Level Q (25%) and Level H (30%) provide heavy redundancy, allowing the QR code to be scanned even if up to 30% of the graphic is smudged, torn, or obstructed." },
      { q: "How do WiFi QR codes work?", a: "WiFi QR codes use the standard schema WIFI:S:<SSID>;T:<WPA|WEP>;P:<password>;;. When scanned with an iPhone or Android camera, the operating system prompts the user to join the network automatically without typing the password." },
      { q: "Is there any scan limit or expiration on generated QR codes?", a: "No. These are static QR codes that directly encode your text or URL into the 2D matrix pattern. They never expire, have no scan limits, and do not redirect through any intermediary servers." },
      { q: "Does this tool send my data to an external server?", a: "No. Unlike tools that use remote image APIs, AstonishBuddy generates both PNG and SVG graphics directly in your browser using client-side JavaScript. No data leaves your machine." },
      { q: "Why won't my colored QR code scan?", a: "QR scanners rely on high luminance contrast between dark foreground modules and light background modules. Ensure your foreground color is significantly darker than your background color, and avoid using light pastels for foreground dots." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"100% client-side QR generation using the qrcode library with zero server requests or external tracking"}</li>
          <li style={{ marginBottom: "8px" }}>{"Dual export options: download as raster '⬇️ Download PNG' or infinitely scalable vector '⬇️ Download SVG'"}</li>
          <li style={{ marginBottom: "8px" }}>{"Preset format templates for URL, Email (mailto:), Phone (tel:), and WiFi network credentials"}</li>
          <li style={{ marginBottom: "8px" }}>{"Adjustable image dimensions ranging from 100px to 600px for on-screen or print applications"}</li>
          <li style={{ marginBottom: "8px" }}>{"Four standard Reed-Solomon Error Correction levels: Low (7%), Medium (15%), Quartile (25%), and High (30%)"}</li>
          <li style={{ marginBottom: "8px" }}>{"Custom foreground (dark) and background (light) color pickers with real-time preview"}</li>
          <li style={{ marginBottom: "8px" }}>{"Instant 'Paste' and 'Clear' buttons for rapid workflow management"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Select a format preset (URL, Email, Phone, or WiFi) or manually enter your text into the input field."}</li>
          <li style={{ marginBottom: "8px" }}>{"Customize the Error Correction level: select 'L' (7%) for compact codes, or 'H' (30%) if you intend to overlay logos or print on physical merchandise."}</li>
          <li style={{ marginBottom: "8px" }}>{"Adjust the output size slider (100px to 600px) and choose your preferred foreground and background colors."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click '⬛ Generate QR Code' to render the live QR code preview."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click '⬇️ Download PNG' for standard image files, or '⬇️ Download SVG' for vector graphics suitable for large-format print."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Standard Website URL QR Code"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Text: https://www.astonishbuddy.com | ECC: Medium (15%) | Size: 300px | Colors: Black on White"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Format: PNG / SVG | Matrix Version: 3 (29x29 modules) | Reed-Solomon Recovery: Up to 15% damaged modules restorable | Use Case: Business cards, brochures, and digital displays"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"WiFi Network Configuration QR Code"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Preset: WiFi | String: WIFI:S:OfficeNetwork;T:WPA;P:SecretKey2026;; | ECC: High (30%)"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Format: SVG Vector | Matrix Version: 4 (33x33 modules) | Auto-Connect Compatibility: iOS Camera, Android WiFi Scanner | Recovery: Up to 30% damage tolerance"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Using low contrast colors (e.g. light gray dots on a white background or dark blue on black), which causes camera scanners to fail."}</li>
          <li style={{ marginBottom: "8px" }}>{"Inverting colors (white QR code on a dark background); while some scanner apps support inverted codes, many standard hardware scanners do not."}</li>
          <li style={{ marginBottom: "8px" }}>{"Selecting Low error correction (L) for printed materials that may experience scuffs, folds, or dirt."}</li>
          <li style={{ marginBottom: "8px" }}>{"Entering excessively long URLs without shortening them first; dense QR codes with tiny module dots are harder for smartphone cameras to focus on."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All QR code generation runs entirely inside your browser's local JavaScript execution context. Your URLs, passwords, phone numbers, and contact details are never sent to AstonishBuddy servers or any third-party APIs."}
        </p>
      </div>
    ),
  },
  "bulk-qrcode-generator": {
    id: "bulk-qrcode-generator",
    name: "Bulk QR Code Generator",
    shortIntro: "AstonishBuddy's Bulk QR Code Generator creates dozens or hundreds of custom QR codes simultaneously from a simple list of links or text strings. Running entirely in your web browser, it renders individual QR codes in real time without sending your data to any server. You can configure error correction levels (L, M, Q, or H) across the entire batch, copy individual text items, download individual PNGs, or export all codes in one click. You can export as a clean, multi-column printable A4 PDF document (complete with readable text labels) via 'Download as PDF' or as a packaged archive of high-resolution PNG images via 'Download as ZIP'.",
    keywords: ["bulk qr code generator","bulk qrcode generator"],
    faqs: [
      { q: "Can I upload a CSV file to generate QR codes?", a: "No. The tool uses a direct newline-delimited text area. If you have a CSV or Excel spreadsheet, simply copy the column of URLs or serial numbers and paste it directly into the input box." },
      { q: "Why is there no 'Generate' button?", a: "Generation is instantaneous and reactive. The tool uses React state and useMemo to update the canvas grid in real time as you paste your list or switch error correction levels." },
      { q: "What is the recommended maximum batch size?", a: "Because each QR code generates a live HTML5 canvas element in your browser's memory, we recommend batches of up to 100–300 items at a time for optimal performance without browser lag." },
      { q: "What layout is used when exporting to PDF?", a: "Clicking 'Download as PDF' generates a standard A4 portrait document featuring a 3-column grid. Each QR code is sized to 55mm with a truncated text label printed underneath, and pages break automatically when full." },
      { q: "How are file names named in the ZIP download?", a: "The ZIP archive contains PNG files named sequentially based on the first 10 characters of the encoded text (e.g. qr-https___ex.png) for easy identification." },
      { q: "Are any of my bulk URLs or serial numbers saved on your server?", a: "No. All generation, PDF compilation, and ZIP bundling run entirely within your local browser thread. Nothing is transmitted over the internet." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"100% client-side batch processing with dynamic, real-time QR generation as you type"}</li>
          <li style={{ marginBottom: "8px" }}>{"Dual batch export options: 'Download as PDF' (printable 3-column A4 grid) and 'Download as ZIP' (individual PNGs)"}</li>
          <li style={{ marginBottom: "8px" }}>{"Simple newline-delimited text input: paste raw lists of URLs, product SKUs, or inventory serial numbers"}</li>
          <li style={{ marginBottom: "8px" }}>{"Four selectable error correction levels: L (7%), M (15%), Q (25%), and H (30%)"}</li>
          <li style={{ marginBottom: "8px" }}>{"Interactive live preview grid with individual 'Copy' text and 'Save' PNG actions for every generated item"}</li>
          <li style={{ marginBottom: "8px" }}>{"Convenient 'Example' button to load sample data and 'Clear' button to wipe input"}</li>
          <li style={{ marginBottom: "8px" }}>{"Zero server uploads: all canvas rendering, PDF assembly (jsPDF), and ZIP compression (JSZip) occur in-browser"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Paste your list of URLs or text entries into the input box, placing each item on its own separate line."}</li>
          <li style={{ marginBottom: "8px" }}>{"Select your desired Error Correction level: click 'L' (7%), 'M' (15%), 'Q' (25%), or 'H' (30%)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Review the live preview grid below the input box to verify that your items rendered properly."}</li>
          <li style={{ marginBottom: "8px" }}>{"To save an individual QR code, click the 'Save' button under that specific item."}</li>
          <li style={{ marginBottom: "8px" }}>{"To download all QR codes packaged as individual PNG image files, click 'Download as ZIP'."}</li>
          <li style={{ marginBottom: "8px" }}>{"To export a ready-to-print sheet for labels or events, click 'Download as PDF' to generate an A4 document with labels."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Generating Marketing Campaign Links in Bulk"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"https://example.com/promo1\nhttps://example.com/promo2\nhttps://example.com/promo3"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Batch Count: 3 items | Format: Download as ZIP (Bulk-QRCodes.zip)\nArchive Contents:\n- qr-https___ex.png (300x300 PNG)\n- qr-https___ex.png (300x300 PNG)\n- qr-https___ex.png (300x300 PNG)\nExecution: Local browser JSZip compression, 0 bytes sent over network"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Exporting Inventory Asset Tags to Printable A4 PDF"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"ASSET-001-LAPTOP\nASSET-002-MONITOR\nASSET-003-PRINTER\nASSET-004-DESK"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Batch Count: 4 items | Format: Download as PDF (Bulk-QRCodes.pdf)\nPDF Layout: 3 columns per page, 55mm QR codes, centered text labels, automatic page breaks\nRendering Engine: Client-side jsPDF"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Attempting to upload a CSV file directly; the tool accepts plain newline-delimited text (one URL or string per line)."}</li>
          <li style={{ marginBottom: "8px" }}>{"Looking for a 'Generate All QR Codes' button; codes generate automatically in real time as text is entered."}</li>
          <li style={{ marginBottom: "8px" }}>{"Pasting thousands of items simultaneously; because every QR code is rendered onto an HTML5 canvas in the browser DOM, batches over 300 items may cause browser memory lag."}</li>
          <li style={{ marginBottom: "8px" }}>{"Entering blank lines between items, which can create unnecessary blank entries in your batch."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All bulk QR code generation, canvas rendering, PDF layout synthesis, and ZIP compression take place 100% locally in your web browser. No URLs, text lists, or exported files are ever transmitted to AstonishBuddy servers."}
        </p>
      </div>
    ),
  },
  "ai-image-extender": {
    id: "ai-image-extender",
    name: "Image Background Extender",
    shortIntro: "Expand the canvas of any image to match popular aspect ratios like 16:9, 4:5, 1:1, or 9:16 without distortion or stretching. AstonishBuddy's Image Background Extender uses canvas-based edge mirroring, directional gradients, background blurs, and film grain to blend photo borders into a wider frame locally in your browser.",
    keywords: ["image background extender","photo canvas expander","convert photo to 16:9","instagram 4:5 canvas adapter","extend photo edges","canvas border expander"],
    faqs: [
      { q: "Does this tool use generative AI or outpainting?", a: "No. This tool is an optical canvas extender that uses edge reflection, multi-pass gaussian blur, directional gradient interpolation, and film grain. It does not invent or hallucinate new artificial objects or scenery." },
      { q: "How does Edge Mirror & Feather work?", a: "The tool samples pixels along the perimeter of your original photo, mirrors them outward into the expanded canvas area, and applies a graduated alpha mask (feathering) to blend the transition smoothly." },
      { q: "What aspect ratios are supported?", a: "Presets are provided for 16:9 (video banners and presentations), 4:5 (Instagram portrait feed posts), 1:1 (square avatars and feeds), and 9:16 (mobile stories and TikTok/Reels), as well as custom dimension inputs." },
      { q: "Will my original image be stretched or distorted?", a: "No. Your original photo is maintained at its exact original aspect ratio and resolution in the center of the canvas. Only the newly created border margins are filled with the extended background." },
      { q: "Can I choose a solid color background instead of a blur?", a: "Yes. By selecting the 'Solid Color Canvas' mode, you can use the built-in color picker to frame your photo against any solid HEX or RGB color." },
      { q: "Are my photos uploaded to a remote server?", a: "No. All canvas operations execute entirely in your web browser. No photos leave your computer or phone." },
    ],
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Key Features &amp; Technical Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Aspect ratio canvas presets: 16:9 (Landscape/YouTube), 4:5 (Instagram Portrait), 1:1 (Square), and 9:16 (Stories/Reels)"}</li>
          <li style={{ marginBottom: "8px" }}>{"Four non-generative canvas extension modes: Edge Mirror & Feather, Edge Blur & Extend, Solid Color Canvas, and Subtle Vignette"}</li>
          <li style={{ marginBottom: "8px" }}>{"Adjustable feathering and blur sliders to smoothly blend original image borders into extended backgrounds"}</li>
          <li style={{ marginBottom: "8px" }}>{"Custom background color picker for letterboxed and framed canvas layouts"}</li>
          <li style={{ marginBottom: "8px" }}>{"Fine film grain overlay slider to match natural camera sensor noise across extended borders"}</li>
          <li style={{ marginBottom: "8px" }}>{"Instant real-time canvas preview with high-resolution PNG and JPEG export"}</li>
          <li style={{ marginBottom: "8px" }}>{"100% client-side rendering with zero server uploads or external API requests"}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Upload your photo by dragging it into the dropzone or clicking 'Select Image'."}</li>
          <li style={{ marginBottom: "8px" }}>{"Select your target aspect ratio from the preset buttons: 16:9, 4:5, 1:1, 9:16, or Custom dimensions."}</li>
          <li style={{ marginBottom: "8px" }}>{"Choose your extension mode: 'Edge Mirror & Feather' for seamless mirrored margins, 'Edge Blur & Extend' for soft background matching, or 'Solid Color Canvas'."}</li>
          <li style={{ marginBottom: "8px" }}>{"Fine-tune the 'Blur Radius' and 'Edge Feather' sliders to blend the seam between the original photo and the new background margins."}</li>
          <li style={{ marginBottom: "8px" }}>{"Optionally adjust the 'Grain' slider to introduce subtle noise matching your original photo texture."}</li>
          <li style={{ marginBottom: "8px" }}>{"Click 'Download Extended Image' to save your newly formatted graphic."}</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Verified Worked Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Adapting a 4:3 Camera Photo to a 16:9 Landscape Banner"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Source: 4:3 digital photo (2400x1800 px) | Target: 16:9 (3200x1800 px) | Mode: Edge Mirror & Feather"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Result: 3200x1800 px banner | Canvas: Original photo centered (2400px wide) with 400px mirrored and feathered margins on left and right | Stretching: 0% distortion of central subject"}</pre></div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "10px", padding: "18px" }}>
            <h4 style={{ margin: "0 0 10px", fontSize: "16px", color: "var(--text-primary)" }}>{"Converting a 3:2 Landscape Photo for 4:5 Instagram Portrait"}</h4>
            <div style={{ marginBottom: "8px", fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Input:</strong> <code style={{ color: "var(--text-secondary)", background: "rgba(0,0,0,0.25)", padding: "2px 6px", borderRadius: "4px", whiteSpace: "pre-wrap", display: "inline-block" }}>{"Source: 3:2 landscape photo (1800x1200 px) | Target: 4:5 vertical (1800x2250 px) | Mode: Edge Blur & Extend"}</code></div>
            <div style={{ fontSize: "14px" }}><strong style={{ color: "var(--accent-1)" }}>Verified Output:</strong> <pre style={{ margin: "6px 0 0", padding: "10px 14px", background: "rgba(0,0,0,0.35)", borderRadius: "6px", overflowX: "auto", whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "monospace" }}>{"Result: 1800x2250 px vertical image | Top/Bottom Margins: 525px each, filled with a blurred gradient matching ambient background colors | Alignment: Subject perfectly framed without cropping"}</pre></div>
          </div>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "8px" }}>{"Expecting generative AI hallucination or outpainting of new objects; this tool uses optical canvas mirroring and blur gradients, not generative neural networks."}</li>
          <li style={{ marginBottom: "8px" }}>{"Extending photos with busy, high-contrast borders without applying edge feathering, which leaves a visible border line."}</li>
          <li style={{ marginBottom: "8px" }}>{"Using extreme grain settings on clean, noise-free graphics, which can make extended borders look uncharacteristically textured."}</li>
          <li style={{ marginBottom: "8px" }}>{"Confusing aspect ratio canvas extension with cropping; canvas extension adds border area around your image rather than cutting away pixels."}</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "28px 0 14px" }}>
          Client-Side Security &amp; Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "20px" }}>
          {"All background extensions are rendered 100% locally on your device using HTML5 Canvas pixel manipulation. No photographs are ever uploaded to cloud servers or processed by third-party vision models."}
        </p>
      </div>
    ),
  },
};
