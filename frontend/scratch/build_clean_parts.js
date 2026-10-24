// scratch/build_clean_parts.js
// Clean, structured data for Part 1 (image/file tools) and Part 2 (text tools)

const part1 = {
  "image-compressor": {
    id: "image-compressor",
    name: "Image Compressor",
    shortIntro: "Compress JPEG, PNG, and WebP images directly in your browser with adjustable compression quality. AstonishBuddy's Image Compressor reduces image file sizes locally using HTML5 Canvas and browser image encoding APIs, helping you optimize images for web publishing without transmitting private files across any network.",
    features: [
      "100% in-browser compression powered by HTML5 Canvas and native image encoding",
      "Interactive quality percentage slider (10% to 100%) for precise compression balancing",
      "Automatic resolution bounding up to 4096px to prevent memory crashes on high-res camera photos",
      "Format preservation: compresses JPEG to JPG, PNG to PNG, and WebP to WebP",
      "Real-time file size comparison showing original size, compressed size, and percentage saved",
      "Direct one-click download for optimized image files with stripped EXIF metadata",
      "Strict privacy: zero image uploads, cloud server processing, or telemetry"
    ],
    steps: [
      "Drag and drop your image file into the upload dropzone, or click 'Choose Image' to browse from your device.",
      "Adjust the 'Quality' slider between 10% and 100% (recommended: 75%–85% for balanced web assets).",
      "Review the live file size preview, comparing original megabytes against the estimated compressed size.",
      "Click 'Compress Image' to render the image onto an off-screen canvas and generate the compressed blob.",
      "Inspect the compressed preview to verify photographic clarity and sharp text edges.",
      "Click 'Download Compressed Image' to save the optimized file directly to your downloads folder."
    ],
    examples: [
      {
        title: "Optimizing a High-Resolution Smartphone Photograph",
        input: "File: IMG_4820.jpg (Original: 4.8 MB, 4032x3024 pixels, JPEG format) | Quality setting: 80%",
        output: "Compressed Size: ~720 KB (85% reduction) | Resolution: 4032x3024 preserved | Metadata: EXIF GPS and camera tags removed | Visual Quality: Indistinguishable at standard display zoom"
      },
      {
        title: "Compressing a Web Graphic Screenshot with Text",
        input: "File: UI-Dashboard.png (Original: 1.4 MB, 1920x1080 pixels, PNG format) | Quality setting: 75%",
        output: "Compressed Size: ~480 KB (65% reduction) | Resolution: 1920x1080 preserved | Line Clarity: Sharp UI borders and readable text without JPEG block artifacts"
      }
    ],
    mistakes: [
      "Setting the compression slider below 40% on photos containing fine text, which causes noticeable block compression artifacts.",
      "Assuming client-side compression can shrink an already compressed 30KB icon without reducing visual quality.",
      "Using JPEG compression for graphics requiring transparency; JPEG does not support alpha channels and replaces transparent pixels with solid color.",
      "Uploading unsupported raw camera formats (.CR2, .NEF, .ARW) directly without first converting to JPEG or PNG."
    ],
    privacy: "Image compression is performed 100% locally on your computer or mobile device using HTML5 Canvas rendering. Your photographs, screenshots, and artwork are never uploaded to any remote server or third-party service.",
    guide: {
      title: "Complete Image Compression & Web Performance Guide",
      slug: "image-compressor-guide"
    },
    faqs: [
      {
        q: "How does browser-based image compression work?",
        a: "The tool loads your image into an HTML Image object, renders it onto an HTML5 Canvas element in memory, and re-encodes it using canvas.toBlob() at your selected quality parameter. All calculations execute locally in your browser's JavaScript engine."
      },
      {
        q: "Are my uploaded photos sent to AstonishBuddy servers?",
        a: "No. All processing occurs entirely within your local browser. No images are transmitted over the internet, stored in cloud databases, or logged."
      },
      {
        q: "What image file formats are supported?",
        a: "The compressor supports JPEG (.jpg, .jpeg), PNG (.png), and WebP (.webp) image files."
      },
      {
        q: "Does compression strip EXIF and geolocation data?",
        a: "Yes. Because the image is drawn onto a new HTML5 Canvas and re-encoded from raw pixel buffers, all camera metadata, lens details, and GPS coordinates are automatically stripped."
      },
      {
        q: "Why did my PNG file not decrease in size as much as expected?",
        a: "PNG is a lossless compression format. The browser canvas encoder preserves lossless pixel fidelity for PNGs, meaning size reductions come primarily from color table optimizations and metadata removal rather than lossy quantization."
      },
      {
        q: "What is the recommended quality setting for website images?",
        a: "For photos and blog assets, a quality setting between 75% and 85% provides significant file size reduction (often 60%–80%) while maintaining high visual quality on standard and Retina displays."
      }
    ],
    keywords: ["image compressor", "compress jpeg", "reduce png size", "compress webp online", "client side image optimizer", "shrink photo mb to kb"]
  },

  "image-background-extender": {
    id: "image-background-extender",
    name: "Image Background Extender",
    shortIntro: "Expand the canvas of any image to match popular aspect ratios like 16:9, 4:5, 1:1, or 9:16 without distortion or stretching. AstonishBuddy's Image Background Extender uses canvas-based edge mirroring, directional gradients, background blurs, and film grain to blend photo borders into a wider frame locally in your browser.",
    features: [
      "Aspect ratio canvas presets: 16:9 (Landscape/YouTube), 4:5 (Instagram Portrait), 1:1 (Square), and 9:16 (Stories/Reels)",
      "Four non-generative canvas extension modes: Edge Mirror & Feather, Edge Blur & Extend, Solid Color Canvas, and Subtle Vignette",
      "Adjustable feathering and blur sliders to smoothly blend original image borders into extended backgrounds",
      "Custom background color picker for letterboxed and framed canvas layouts",
      "Fine film grain overlay slider to match natural camera sensor noise across extended borders",
      "Instant real-time canvas preview with high-resolution PNG and JPEG export",
      "100% client-side rendering with zero server uploads or external API requests"
    ],
    steps: [
      "Upload your photo by dragging it into the dropzone or clicking 'Select Image'.",
      "Select your target aspect ratio from the preset buttons: 16:9, 4:5, 1:1, 9:16, or Custom dimensions.",
      "Choose your extension mode: 'Edge Mirror & Feather' for seamless mirrored margins, 'Edge Blur & Extend' for soft background matching, or 'Solid Color Canvas'.",
      "Fine-tune the 'Blur Radius' and 'Edge Feather' sliders to blend the seam between the original photo and the new background margins.",
      "Optionally adjust the 'Grain' slider to introduce subtle noise matching your original photo texture.",
      "Click 'Download Extended Image' to save your newly formatted graphic."
    ],
    examples: [
      {
        title: "Adapting a 4:3 Camera Photo to a 16:9 Landscape Banner",
        input: "Source: 4:3 digital photo (2400x1800 px) | Target: 16:9 (3200x1800 px) | Mode: Edge Mirror & Feather",
        output: "Result: 3200x1800 px banner | Canvas: Original photo centered (2400px wide) with 400px mirrored and feathered margins on left and right | Stretching: 0% distortion of central subject"
      },
      {
        title: "Converting a 3:2 Landscape Photo for 4:5 Instagram Portrait",
        input: "Source: 3:2 landscape photo (1800x1200 px) | Target: 4:5 vertical (1800x2250 px) | Mode: Edge Blur & Extend",
        output: "Result: 1800x2250 px vertical image | Top/Bottom Margins: 525px each, filled with a blurred gradient matching ambient background colors | Alignment: Subject perfectly framed without cropping"
      }
    ],
    mistakes: [
      "Expecting generative AI hallucination or outpainting of new objects; this tool uses optical canvas mirroring and blur gradients, not generative neural networks.",
      "Extending photos with busy, high-contrast borders without applying edge feathering, which leaves a visible border line.",
      "Using extreme grain settings on clean, noise-free graphics, which can make extended borders look uncharacteristically textured.",
      "Confusing aspect ratio canvas extension with cropping; canvas extension adds border area around your image rather than cutting away pixels."
    ],
    privacy: "All background extensions are rendered 100% locally on your device using HTML5 Canvas pixel manipulation. No photographs are ever uploaded to cloud servers or processed by third-party vision models.",
    guide: {
      title: "Aspect Ratio Canvas Extension & Margin Blending Guide",
      slug: "image-background-extender-guide"
    },
    faqs: [
      {
        q: "Does this tool use generative AI or outpainting?",
        a: "No. This tool is an optical canvas extender that uses edge reflection, multi-pass gaussian blur, directional gradient interpolation, and film grain. It does not invent or hallucinate new artificial objects or scenery."
      },
      {
        q: "How does Edge Mirror & Feather work?",
        a: "The tool samples pixels along the perimeter of your original photo, mirrors them outward into the expanded canvas area, and applies a graduated alpha mask (feathering) to blend the transition smoothly."
      },
      {
        q: "What aspect ratios are supported?",
        a: "Presets are provided for 16:9 (video banners and presentations), 4:5 (Instagram portrait feed posts), 1:1 (square avatars and feeds), and 9:16 (mobile stories and TikTok/Reels), as well as custom dimension inputs."
      },
      {
        q: "Will my original image be stretched or distorted?",
        a: "No. Your original photo is maintained at its exact original aspect ratio and resolution in the center of the canvas. Only the newly created border margins are filled with the extended background."
      },
      {
        q: "Can I choose a solid color background instead of a blur?",
        a: "Yes. By selecting the 'Solid Color Canvas' mode, you can use the built-in color picker to frame your photo against any solid HEX or RGB color."
      },
      {
        q: "Are my photos uploaded to a remote server?",
        a: "No. All canvas operations execute entirely in your web browser. No photos leave your computer or phone."
      }
    ],
    keywords: ["image background extender", "photo canvas expander", "convert photo to 16:9", "instagram 4:5 canvas adapter", "extend photo edges", "canvas border expander"]
  },

  "image-quality-enhancer": {
    id: "image-quality-enhancer",
    name: "Image Quality Enhancer",
    shortIntro: "Improve image clarity and appearance directly in your browser using client-side image processing. AstonishBuddy's Image Quality Enhancer applies bicubic canvas upscaling, unsharp masking convolution kernels, contrast stretching, and color saturation balancing without uploading your private photos to remote servers.",
    features: [
      "Multi-step image enhancement: sharpness convolution, contrast expansion, and vibrance tuning",
      "Unsharp masking algorithm to accentuate subtle edges and reduce softness in slightly blurred photos",
      "Bicubic interpolation canvas upscaling (1x, 1.5x, and 2x) for higher export dimensions",
      "Dynamic side-by-side or split slider comparison between original and enhanced images",
      "Granular control sliders: Sharpness (0–100%), Contrast (0–100%), and Brightness (-50% to +50%)",
      "Export to high-resolution PNG or JPEG with preserved color fidelity",
      "100% local browser execution ensuring complete privacy for personal photographs"
    ],
    steps: [
      "Upload your photo by dragging it into the dropzone or clicking 'Select Image'.",
      "Use the 'Sharpness' slider to apply edge-enhancing convolution filters to clarify soft edges.",
      "Adjust 'Contrast' and 'Brightness' to balance dynamic range and recover washed-out shadow details.",
      "Select your target canvas scale (1x, 1.5x, or 2x) to increase output pixel dimensions via interpolation.",
      "Compare the live enhanced result against the original using the preview viewer.",
      "Click 'Download Enhanced Image' to save the processed file to your device."
    ],
    examples: [
      {
        title: "Sharpening a Soft Focus Portrait Photograph",
        input: "Source: 1200x800 px photo with slight lens softness | Settings: Sharpness: 45%, Contrast: 15%",
        output: "Result: Accentuated eyelash, hair, and clothing textures; increased perceptual clarity without severe ringing halos or noise amplification"
      },
      {
        title: "Clarifying a Low-Contrast Scanned Document Graphic",
        input: "Source: 1000x1400 px scanned line drawing | Settings: Sharpness: 60%, Contrast: 35%, Scale: 1.5x",
        output: "Result: 1500x2100 px output; darkened faded text lines, brightened paper background, and crisper vector-like boundaries"
      }
    ],
    mistakes: [
      "Expecting the tool to recover completely unreadable faces or text from severe motion blur; sharpening kernels enhance existing edge gradients but cannot invent missing optical data.",
      "Setting Sharpness to 100% on noisy or high-ISO photos, which amplifies sensor grain and produces white halo artifacts around edges.",
      "Over-saturating contrast, which can cause dark shadows to clip to solid black and highlights to blow out to pure white.",
      "Upscaling very low resolution icons (e.g. 64x64) and expecting sharp high-definition results without pixel interpolation smoothing."
    ],
    privacy: "Image enhancement algorithms run 100% in your local browser sandbox via HTML5 Canvas 2D image data manipulation. No files are ever sent across a network or stored on remote servers.",
    guide: {
      title: "Digital Image Sharpening, Convolution & Contrast Guide",
      slug: "image-quality-enhancer-guide"
    },
    faqs: [
      {
        q: "Can this tool make a heavily blurred photo perfectly sharp?",
        a: "No tool can mathematically reconstruct optical information that was never captured by the camera sensor. This tool applies unsharp masking and local contrast enhancement to accentuate existing edges and reduce perceived softness, but it cannot restore severely out-of-focus or motion-blurred images."
      },
      {
        q: "How does the sharpening algorithm work?",
        a: "The tool applies a 3x3 convolution matrix to the image's raw pixel buffer. By subtracting a smoothed version of the image from the original, it amplifies high-frequency differences, making edges and fine textures appear crisper."
      },
      {
        q: "Will enhancing my image increase its file size?",
        a: "Yes. Adding sharpness and fine texture detail introduces higher high-frequency variation into the image data, which requires more bytes when encoded as JPEG or PNG compared to a flat, blurred image."
      },
      {
        q: "What causes white halos around objects when sharpening?",
        a: "White halos (ringing artifacts) occur when the sharpness slider is set too high. The convolution kernel over-amplifies the contrast difference along high-contrast boundaries. Reduce the sharpness slider to eliminate halos."
      },
      {
        q: "Are my photos uploaded to any server or AI service?",
        a: "No. All pixel modifications are performed in your computer's local browser memory using JavaScript and HTML5 Canvas. Zero bytes are uploaded to any server."
      },
      {
        q: "Which image formats can I enhance?",
        a: "You can enhance any standard web image format, including JPEG, PNG, WebP, and BMP."
      }
    ],
    keywords: ["image quality enhancer", "photo sharpening tool", "unsharp mask online", "enhance photo contrast", "browser image enhancer", "crisp photo online"]
  },

  "bulk-image-converter": {
    id: "bulk-image-converter",
    name: "Bulk Image Converter",
    shortIntro: "Batch convert multiple images to JPG, PNG, or WebP format simultaneously in your web browser. AstonishBuddy's Bulk Image Converter runs entirely client-side using HTML5 Canvas and JSZip, letting you convert dozens of photos at once and download them in a single organized ZIP archive without server upload delays.",
    features: [
      "Simultaneous batch conversion of multiple image files directly in the browser",
      "Support for popular input formats: JPG, JPEG, PNG, WebP, AVIF, BMP, and static GIF frames",
      "Selectable export target formats: JPG, PNG, and modern WebP",
      "Configurable output quality slider (10% to 100%) for lossy JPG and WebP exports",
      "Automatic solid white background fill when converting transparent PNGs to non-transparent JPG format",
      "Single-click 'Download ZIP' export bundling all converted images into one archive using JSZip",
      "Individual download buttons for single-image inspection and saving",
      "100% client-side execution with zero file uploads or cloud bandwidth limits"
    ],
    steps: [
      "Drag and drop your batch of images into the upload area or click 'Select Images' (recommended: 15–30 files per batch for smooth performance).",
      "Select your target export format: click 'JPG', 'PNG', or 'WebP'.",
      "If converting to JPG or WebP, adjust the 'Quality' slider (e.g. 80%–90% for web publishing).",
      "Click 'Convert All Images' to execute local canvas conversion across all queued files.",
      "Review the progress list showing conversion status and individual file sizes.",
      "Click 'Download ZIP' to save the complete batch archive, or click 'Download' next to any individual converted image."
    ],
    examples: [
      {
        title: "Converting High-Resolution PNG Graphics to WebP for Web Optimization",
        input: "Batch: 12 PNG screenshots (total: 18.4 MB) | Target: WebP | Quality: 85%",
        output: "Result: 12 WebP files (total: 3.2 MB, ~82% reduction) | Package: Download ZIP archive | Transparency: Full alpha channel preserved"
      },
      {
        title: "Converting Mobile Camera Photos to Standard JPEG",
        input: "Batch: 8 WebP/AVIF images (total: 6.1 MB) | Target: JPG | Quality: 90%",
        output: "Result: 8 JPG files | Compatibility: Universal compatibility across legacy desktop software, email clients, and printing services"
      }
    ],
    mistakes: [
      "Converting transparent PNG icons to JPG and wondering why the transparent background turned white; JPEG does not support transparency. Choose WebP or PNG instead.",
      "Uploading animated GIFs and expecting animated WebP output; canvas-based batch conversion renders the first static frame.",
      "Queuing hundreds of raw 20MB photos in a single batch on low-memory devices, which can cause browser tab slowdowns. Process in batches of 20–30 files.",
      "Expecting output formats outside JPG, PNG, or WebP; these are the three formats reliably supported for client-side encoding by modern browser canvas engines."
    ],
    privacy: "All image conversions and ZIP archive packaging take place entirely within your local browser memory using HTML5 Canvas and JSZip. Your photographs and graphics are never uploaded to any remote server or stored in any database.",
    guide: {
      title: "Batch Image Conversion & Web Format Compatibility Guide",
      slug: "bulk-image-converter-guide"
    },
    faqs: [
      {
        q: "Which output formats are supported?",
        a: "The converter exports to JPG, PNG, and WebP. These three formats cover over 98% of modern web, mobile, and desktop image requirements."
      },
      {
        q: "What input formats can I convert from?",
        a: "You can upload any image format supported by modern browsers, including PNG, JPG, JPEG, WebP, AVIF, BMP, and static GIF frames."
      },
      {
        q: "Is there a limit on how many images I can convert at once?",
        a: "There are no arbitrary daily quotas or paywalls. However, because conversion runs in browser memory, batches of 15 to 30 images at a time are recommended to avoid browser tab memory slowdowns on lower-end devices."
      },
      {
        q: "What happens to transparent backgrounds when converting PNG to JPG?",
        a: "Because the JPEG standard does not support alpha transparency channels, transparent regions are filled with a clean solid white background. To preserve transparency, convert to WebP or PNG instead."
      },
      {
        q: "How do I download all converted images at once?",
        a: "Once your batch finishes converting, click the 'Download ZIP' button in the conversion summary banner to save all files in a single archive."
      },
      {
        q: "Are my uploaded photos sent to remote servers?",
        a: "No. Conversion and ZIP packaging take place entirely within your local browser memory using client-side JavaScript. Zero files leave your device."
      }
    ],
    keywords: ["bulk image converter", "batch convert png to webp", "convert jpg to webp free", "batch image resizer", "online image format converter", "convert multiple photos to zip", "browser image converter"]
  },

  "pdf-compressor": {
    id: "pdf-compressor",
    name: "PDF Compressor",
    shortIntro: "Compress PDF documents directly in your web browser by rasterizing and re-encoding page contents. AstonishBuddy's PDF Compressor uses pdfjs-dist and pdf-lib to render each page onto an HTML5 Canvas, re-encode image buffers at your chosen quality level, and assemble a lightweight new PDF document up to 100 MB without uploading files to remote servers.",
    features: [
      "100% in-browser PDF compression powered by pdfjs-dist and pdf-lib",
      "Strict file size support for documents up to 100 MB with zero server uploads",
      "Customizable compression quality settings to balance file size against visual clarity",
      "Page-by-page rendering pipeline with real-time compression progress indicators",
      "Comparison metrics displaying original file size, compressed size, and percentage saved",
      "Direct one-click download for compressed PDF files",
      "Complete client-side privacy: legal briefs, invoices, and tax records remain on your device"
    ],
    steps: [
      "Select your PDF file (up to 100 MB) by dragging it into the dropzone or clicking 'Select PDF'.",
      "Choose your desired compression quality level (recommended: medium/standard for scanned documents).",
      "Click 'Compress PDF' to initiate local browser page rendering and canvas re-encoding.",
      "Monitor the page progress bar as each page is rendered and packed into the new PDF structure.",
      "Review the resulting file size and reduction percentage.",
      "Click 'Download Compressed PDF' to save your optimized document."
    ],
    examples: [
      {
        title: "Compressing a Scanned Multi-Page Document",
        input: "File: ScannedContract.pdf (Original: 18.2 MB, 12 scanned pages, 300 DPI scans) | Quality: Standard",
        output: "Compressed Size: ~4.1 MB (77% reduction) | Page Layout: 12 pages preserved | Readability: Clear text and legible signatures for email transmission"
      },
      {
        title: "Optimizing an Image-Heavy Report",
        input: "File: MarketingReport.pdf (Original: 34.6 MB, 25 pages with color photos) | Quality: Balanced",
        output: "Compressed Size: ~9.8 MB (71% reduction) | Email Compatibility: Reduced under standard 25 MB email attachment limits"
      }
    ],
    mistakes: [
      "Attempting to compress digitally signed or certified PDFs; because the tool rasterizes pages onto a canvas and rebuilds a new PDF structure, digital signatures (such as DocuSign or PKCS#7 certificates) are invalidated.",
      "Expecting large compression on vector-only text PDFs; files consisting of pure searchable fonts and minimal imagery already have minimal byte weight.",
      "Uploading password-protected or encrypted PDFs without unlocking them first.",
      "Selecting extreme high-compression on documents with tiny 6pt legal footnotes, which can reduce legibility."
    ],
    privacy: "PDF processing is performed 100% locally on your machine using client-side JavaScript libraries. Your PDF files, contracts, financial statements, and confidential records are never uploaded to any remote server or logged by AstonishBuddy.",
    guide: {
      title: "PDF Compression, Page Rasterization & Signature Guide",
      slug: "pdf-compressor-guide"
    },
    faqs: [
      {
        q: "What is the maximum PDF file size supported?",
        a: "The tool supports PDF files up to 100 MB. Files exceeding 100 MB are rejected to prevent browser tab memory exhaustion."
      },
      {
        q: "Does compressing a PDF invalidate digital signatures?",
        a: "Yes. Compressing a PDF with this tool re-renders each page onto an HTML5 Canvas and generates a brand-new PDF container. This process strips underlying cryptographic certificates, meaning digital signatures (such as DocuSign or Adobe Acrobat certified signatures) will be invalidated."
      },
      {
        q: "How does the compressor reduce PDF file size?",
        a: "The tool uses pdfjs-dist to render each PDF page into an image canvas, applies JPEG compression to the resulting image layer, and uses pdf-lib to compile those compressed images back into a new, smaller PDF document."
      },
      {
        q: "Will the text in my compressed PDF remain selectable?",
        a: "Because pages are rendered to high-resolution canvas images to achieve compression, text is converted into an image layer. For scanned documents, visual appearance is preserved, but selectable text requires a subsequent OCR step."
      },
      {
        q: "Are my confidential PDF documents uploaded to a server?",
        a: "No. All PDF parsing, rendering, and re-assembly occur strictly within your browser. AstonishBuddy servers never receive or store your files."
      },
      {
        q: "Why did my PDF file size barely decrease?",
        a: "If your PDF consists entirely of vector text and outlines without large embedded bitmap images, it is already compact. Canvas re-encoding primarily provides dramatic savings on PDFs containing high-resolution scans and photos."
      }
    ],
    keywords: ["pdf compressor", "compress pdf 100mb", "shrink pdf size", "reduce pdf mb to kb", "client side pdf compressor", "compress scanned pdf", "browser pdf optimizer"]
  },

  "color-converter": {
    id: "color-converter",
    name: "Color Code Converter",
    shortIntro: "Convert colors seamlessly between HEX, RGB, HSL, HSV, and CMYK color spaces in real time. AstonishBuddy's Color Code Converter runs client-side with an interactive color picker, luminance contrast checker, CSS snippet copy buttons, and standard color format validation. Whether you are building responsive UI design systems, tuning branding palettes, or checking WCAG accessibility standards, our converter calculates mathematically accurate transformations across additive and subtractive color models with zero network overhead.",
    features: [
      "Real-time bidirectional color conversion across HEX, RGB, HSL, HSV, and CMYK color spaces",
      "Native HTML5 color picker integration with live preview swatch and real-time color syncing",
      "Alpha channel (opacity) support for 8-digit HEX (#RRGGBBAA), RGBA, and HSLA values",
      "Calculated relative luminance and WCAG 2.1 contrast ratio against pure white (#FFFFFF) and pure black (#000000) backgrounds",
      "One-click copy buttons for formatted CSS declarations: hex(), rgb(), hsl(), and cmyk()",
      "Harmonic color palette generator displaying complementary, triadic, and analogous color swatches",
      "100% in-browser calculation with zero server calls, keeping private client brand palettes completely confidential"
    ],
    steps: [
      "Enter a color value in any supported format (e.g. #3b82f6, rgb(59, 130, 246), or hsl(217, 91%, 60%)) or click the color swatch to open the interactive picker.",
      "View instant synchronized conversions across HEX, RGB, HSL, HSV, and CMYK panels.",
      "Check the calculated relative luminance score and WCAG contrast rating to verify text readability for accessibility compliance.",
      "Explore complementary and analogous color harmony swatches generated below the color inputs.",
      "Click the 'Copy' icon next to any format to copy the formatted CSS string directly to your clipboard.",
      "Paste the copied CSS values directly into your Tailwind configuration, CSS stylesheet, or design tokens."
    ],
    examples: [
      {
        title: "Converting Brand Royal Blue Across Color Spaces",
        input: "Input: #2563EB (HEX format)",
        output: "RGB: rgb(37, 99, 235)\nHSL: hsl(221, 83%, 53%)\nHSV: hsv(221, 84%, 92%)\nCMYK: cmyk(84%, 58%, 0%, 8%)\nContrast on White: 4.88:1 (WCAG AA Pass)\nContrast on Black: 4.30:1 (Large text pass)"
      },
      {
        title: "Converting HSL Accent Green to Web CSS Formats",
        input: "Input: hsl(142, 71%, 45%)",
        output: "HEX: #22C55E\nRGB: rgb(34, 197, 94)\nHSV: hsv(142, 83%, 77%)\nCMYK: cmyk(83%, 0%, 52%, 23%)\nContrast on White: 2.35:1 (Fail)\nContrast on Black: 8.92:1 (WCAG AAA Pass)"
      }
    ],
    mistakes: [
      "Entering 3-digit shorthand HEX codes (#abc) when full 6-digit fidelity (#aabbcc) is required for exact brand color replication.",
      "Forgetting the '%' sign on HSL saturation and lightness values (e.g. entering hsl(200, 50, 50) instead of the syntactically valid hsl(200, 50%, 50%)).",
      "Assuming RGB and CMYK color spaces have identical gamuts; CMYK is designed for 4-color printing press inks and cannot physically reproduce neon, highly saturated sRGB screen primaries.",
      "Ignoring color contrast ratios when selecting text colors for accessible web design, leading to low-contrast text that fails WCAG AA legibility standards.",
      "Confusing HSV (Hue, Saturation, Value) with HSL (Hue, Saturation, Lightness); while both share Hue, Value measures brightness relative to a pure white point, whereas Lightness measures balance between black and white."
    ],
    privacy: "All color conversions and mathematical color space transformations run 100% client-side in your web browser. No color codes, palette selections, or user inputs are sent across any network or logged on remote servers.",
    guide: {
      title: "Color Spaces, Gamuts & WCAG Accessibility Guide",
      slug: "color-converter-guide"
    },
    faqs: [
      {
        q: "What is the difference between HEX and RGB?",
        a: "HEX and RGB represent the exact same additive color model. RGB specifies red, green, and blue intensities as decimal numbers from 0 to 255 (e.g. rgb(255, 0, 0)), while HEX writes those same numbers in base-16 hexadecimal notation (e.g. #FF0000)."
      },
      {
        q: "Why do web designers use HSL instead of HEX?",
        a: "HSL (Hue, Saturation, Lightness) aligns closely with human color perception. Adjusting lightness or saturation in HSL allows designers to create lighter tints or darker shades without recalculating RGB channels."
      },
      {
        q: "Can this tool convert CMYK for commercial print?",
        a: "The tool provides standard mathematical RGB-to-CMYK conversion values. However, professional commercial printing requires specific ICC color profile separations based on paper stock and printing press inks."
      },
      {
        q: "Does this tool support transparency (alpha channels)?",
        a: "Yes. You can enter 8-digit HEX codes (e.g. #2563EB80 for 50% opacity) or use rgba() and hsla() formats with alpha values between 0 and 1."
      },
      {
        q: "What is the WCAG contrast score?",
        a: "The Web Content Accessibility Guidelines (WCAG) require minimum contrast ratios between text and background colors: at least 4.5:1 for standard text (Level AA) and 7:1 for enhanced accessibility (Level AAA)."
      },
      {
        q: "Are my color selections stored or sent anywhere?",
        a: "No. All conversions execute locally inside your browser's JavaScript runtime. Zero data is transmitted to AstonishBuddy servers."
      }
    ],
    keywords: ["color code converter", "hex to rgb", "rgb to hsl", "cmyk color converter", "wcag color contrast checker", "css color converter", "online color picker"]
  }
};

const part2 = {
  "text-case-converter": {
    id: "text-case-converter",
    name: "Text Case Converter",
    shortIntro: "Transform letter casing instantly between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, kebab-case, snake_case, PascalCase, and CONSTANT_CASE. AstonishBuddy's Text Case Converter processes text locally in your browser with real-time character, word, and line count statistics. Whether you are reformatting academic article titles, normalizing inconsistent database entries, or converting human-readable phrases into clean programming variable identifiers, our converter delivers instant, error-free capitalization across nine specialized styles with zero network latency.",
    features: [
      "Nine instant casing transformations: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, kebab-case, snake_case, PascalCase, and CONSTANT_CASE",
      "Live text statistics: character count, word count, line count, and character count without spaces",
      "One-click 'Copy' button to transfer converted text directly to your clipboard",
      "One-click 'Clear' button for rapid editing workflows",
      "Smart Title Case capitalization following Chicago Manual of Style conventions for minor words",
      "Code identifier converters (camelCase, snake_case, kebab-case) optimized for programming variable names",
      "Preservation of whitespace formatting and multi-line paragraph boundaries",
      "100% in-browser text transformation with zero server storage or telemetry"
    ],
    steps: [
      "Type or paste your text into the main input textarea (or click the 'Paste' shortcut).",
      "Select your desired casing option from the transformation buttons (e.g. 'UPPERCASE', 'Title Case', 'camelCase', 'snake_case').",
      "Observe the instant text conversion in the result field as the algorithm recalculates letter cases.",
      "Inspect the character, word, and line count statistics in the summary bar to verify document length constraints.",
      "Click 'Copy' to transfer the converted text to your clipboard for your word processor, CMS, or code editor.",
      "Click 'Clear' to reset the editor for another conversion."
    ],
    examples: [
      {
        title: "Converting Article Headlines to Title Case",
        input: "the quick brown fox jumps over the lazy dog in new york",
        output: "The Quick Brown Fox Jumps Over the Lazy Dog in New York\nStyle Rule: Minor prepositions and articles ('the', 'over', 'in') kept lowercase unless starting a sentence"
      },
      {
        title: "Converting Plain Text to Programming Identifiers",
        input: "User account billing profile",
        output: "camelCase: userAccountBillingProfile\nkebab-case: user-account-billing-profile\nsnake_case: user_account_billing_profile\nCONSTANT_CASE: USER_ACCOUNT_BILLING_PROFILE\nPascalCase: UserAccountBillingProfile"
      }
    ],
    mistakes: [
      "Expecting Sentence Case to identify proper nouns; automated sentence casing capitalizes the first letter following a period, but cannot determine whether an internal word is a person's name or city.",
      "Converting text with special code characters to camelCase and losing punctuation delimiters without verification.",
      "Assuming Title Case capitalizes every word; standard style guides keep short prepositions, conjunctions, and articles lowercase.",
      "Pasting text containing non-standard Unicode quote marks without checking compatibility with strict ASCII coding standards.",
      "Confusing CONSTANT_CASE with UPPERCASE; UPPERCASE retains original spacing, whereas CONSTANT_CASE replaces all spaces with underscores (e.g. API_SECRET_KEY)."
    ],
    privacy: "All text transformations occur 100% locally in your web browser's JavaScript runtime. Your documents, notes, headlines, and code snippets are never transmitted over the internet or logged on any server.",
    guide: {
      title: "Text Casing Rules, Typography & Naming Conventions Guide",
      slug: "text-case-converter-guide"
    },
    faqs: [
      {
        q: "What is Title Case and how does it work?",
        a: "Title Case capitalizes the first letter of major words while keeping minor words (such as 'and', 'the', 'in', 'on', 'of', 'for') in lowercase, unless they appear as the first word of the title or heading."
      },
      {
        q: "What is the difference between camelCase and PascalCase?",
        a: "Both formats remove spaces and capitalize subsequent words. However, camelCase begins with a lowercase letter (e.g. myVariableName), whereas PascalCase begins with an uppercase letter (e.g. MyVariableName)."
      },
      {
        q: "When should I use kebab-case vs snake_case?",
        a: "kebab-case uses hyphens between words (e.g. user-profile) and is standard in URLs and CSS classes. snake_case uses underscores (e.g. user_profile) and is standard in Python, SQL databases, and file names."
      },
      {
        q: "Does this tool support non-English alphabets and accents?",
        a: "Yes. JavaScript's native string methods correctly handle accented Latin characters (such as é, ü, ñ) and Unicode alphabets."
      },
      {
        q: "Is there any text length limit?",
        a: "Because all transformations execute locally on your machine, you can process large documents containing tens of thousands of words without server timeouts."
      },
      {
        q: "Is my text saved or sent to any server?",
        a: "No. Everything runs strictly inside your local browser memory. No data is stored, cached, or transmitted to AstonishBuddy servers."
      }
    ],
    keywords: ["text case converter", "uppercase to lowercase", "title case converter", "sentence case generator", "camelcase converter", "snake case converter", "kebab case converter"]
  },

  "word-counter": {
    id: "word-counter",
    name: "Word Counter",
    shortIntro: "Count words, characters, sentences, paragraphs, and estimated reading and speaking times in real time. AstonishBuddy's Word Counter analyzes your text locally in your browser with comprehensive readability statistics and keyword density metrics for writers, students, and SEO specialists.",
    features: [
      "Real-time word, character (with and without spaces), sentence, and paragraph counting",
      "Accurate reading time calculation calibrated at 200 words per minute (wpm)",
      "Speaking time calculation calibrated at 130 words per minute (wpm)",
      "Top keyword density analysis displaying frequency counts and percentages",
      "One-click 'Copy' button to copy your text to clipboard",
      "One-click 'Clear' button to reset the text area",
      "100% in-browser text analysis with zero data sent across the network"
    ],
    steps: [
      "Type or paste your text directly into the main editor textarea.",
      "Review the top stat cards to see instant totals for Words, Characters, Characters (no spaces), Sentences, and Paragraphs.",
      "Check the 'Reading Time' (calibrated at 200 wpm) and 'Speaking Time' (calibrated at 130 wpm) metrics.",
      "Inspect the 'Keyword Density' panel to identify frequently repeated words and optimize your text for SEO.",
      "Click 'Copy' to transfer the text back to your clipboard, or click 'Clear' to start fresh."
    ],
    examples: [
      {
        title: "Analyzing a Blog Post Introduction",
        input: "AstonishBuddy provides fast, free, and secure online developer tools. Every utility runs locally in your browser without transmitting sensitive files or private text to remote cloud servers. Experience instant results today.",
        output: "Words: 33 | Characters (with spaces): 229 | Characters (no spaces): 197 | Sentences: 3 | Paragraphs: 1\nReading Time: ~1 min (at 200 wpm)\nSpeaking Time: ~1 min (at 130 wpm)"
      },
      {
        title: "Analyzing an Academic Abstract",
        input: "This paper analyzes the computational complexity of client-side cryptography in web browsers. We evaluate execution latency, memory overhead, and entropy sources across modern JavaScript runtimes.",
        output: "Words: 26 | Characters: 198 | Sentences: 2 | Paragraphs: 1\nReading Time: ~1 min | Speaking Time: ~1 min"
      }
    ],
    mistakes: [
      "Counting hyphenated words as multiple words; standard word processors count hyphenated compounds (e.g. 'state-of-the-art') as a single word token.",
      "Assuming reading speed is identical for all audiences; while 200 wpm is standard for general adult web reading, technical documentation often averages 120–150 wpm.",
      "Overlooking keyword stuffing; maintaining a natural keyword density below 2%–3% ensures high search engine readability.",
      "Pasting rich text with hidden HTML markup and assuming whitespace tags will not impact sentence boundary detection."
    ],
    privacy: "All text analysis and keyword parsing execute entirely within your local browser's JavaScript engine. Your essays, articles, and confidential manuscripts are never sent across the internet or stored on any server.",
    guide: {
      title: "Word Counts, Reading Speed & Keyword Density Guide",
      slug: "word-counter-guide"
    },
    faqs: [
      {
        q: "What reading speed is used to estimate reading time?",
        a: "Reading time is calculated using an established average adult reading speed of 200 words per minute (wpm). The value rounds up to the nearest minute for non-empty text."
      },
      {
        q: "What speaking speed is used to estimate speaking time?",
        a: "Speaking time is calculated using a standard conversational presentation speed of 130 words per minute (wpm), which is ideal for speeches, podcasts, and video voiceovers."
      },
      {
        q: "How does the tool count words?",
        a: "Words are identified by splitting text using regular expressions that detect whitespace boundaries while correctly handling punctuation marks, line breaks, and multi-line paragraphs."
      },
      {
        q: "Does the word counter support languages other than English?",
        a: "Yes. Characters, spaces, paragraphs, and words separated by whitespace in Latin, Cyrillic, Greek, and Arabic alphabets are fully counted. Languages without whitespace delimiters (like Chinese and Japanese) are best measured by character count."
      },
      {
        q: "What is keyword density?",
        a: "Keyword density represents the percentage of times a specific word appears relative to the total word count of the text. It helps writers avoid keyword stuffing and improve SEO balance."
      },
      {
        q: "Is my text confidential?",
        a: "Yes. Processing is 100% client-side. AstonishBuddy has zero access to your text, keystrokes, or documents."
      }
    ],
    keywords: ["word counter", "character counter", "reading time calculator", "speaking time calculator", "keyword density checker", "sentence counter", "online text counter"]
  },

  "text-sorter": {
    id: "text-sorter",
    name: "Text Sorter",
    shortIntro: "Sort lines or words alphabetically, by length, or randomly in your browser. AstonishBuddy's Text Sorter features Line mode and Word mode, ascending and descending sorting, duplicate removal, line reversal, and random shuffling with zero server latency. Built for developers managing data lists, writers cleaning bibliographies, and researchers deduplicating rosters, it provides deterministic, locale-aware text processing right inside your browser window.",
    features: [
      "Dual sorting modes: Line mode (sort entire lines) and Word mode (sort individual words separated by spaces)",
      "Alphabetical sorting: A to Z (ascending) and Z to A (descending) using locale-aware collation",
      "Sort by Length: order items from shortest to longest string",
      "No Duplicates filter: remove repeated lines or words to produce a unique list using JavaScript Set collections",
      "Reverse button: invert the current line or word order instantaneously",
      "Shuffle button: randomize list items using a random permutation algorithm",
      "Real-time item count display and one-click 'Copy' and 'Clear' buttons",
      "100% client-side execution with complete privacy and zero data transmission"
    ],
    steps: [
      "Type or paste your text into the input textarea.",
      "Select your target mode: click 'Line mode' to sort line by line, or 'Word mode' to sort individual words.",
      "Choose a sorting order: click 'A to Z' for alphabetical ascending, 'Z to A' for descending, or 'By Length'.",
      "Click 'No Duplicates' if you wish to deduplicate the list and keep only unique entries.",
      "Optionally click 'Reverse' to flip the current order, or 'Shuffle' to randomize.",
      "Click 'Copy' above the output area to copy your sorted list to your clipboard.",
      "Click 'Clear' to wipe the input area and begin a new sorting operation."
    ],
    examples: [
      {
        title: "Sorting a Grocery List Alphabetically and Deduplicating",
        input: "Apples\nOranges\nBananas\nApples\nCarrots\nBananas",
        output: "Mode: Line mode | Action: 'A to Z' followed by 'No Duplicates'\nResult:\nApples\nBananas\nCarrots\nOranges\nSummary: 6 original lines deduplicated and sorted into 4 unique alphabetical items"
      },
      {
        title: "Sorting Words by Length",
        input: "elephant cat hippopotamus dog rabbit",
        output: "Mode: Word mode | Action: 'By Length'\nResult:\ncat dog rabbit elephant hippopotamus\nSummary: Words sorted in ascending order from 3 characters to 12 characters"
      }
    ],
    mistakes: [
      "Expecting numerical sorting for numbers formatted with varying digits (e.g. '10' sorting before '2' in pure alphabetical A-Z collation); alphabetical sorting compares characters ASCII/Unicode value sequentially.",
      "Sorting in Word mode when multi-word phrases need to be preserved on separate lines; always use Line mode for list items.",
      "Forgetting that sorting is case-sensitive by default in some environments; our tool uses localeCompare with sensitivity balancing.",
      "Overlooking leading or trailing spaces on lines that affect length and alphabetical position.",
      "Assuming 'No Duplicates' preserves duplicate counts; deduplication completely collapses identical lines into a single unique instance."
    ],
    privacy: "All text sorting, deduplication, and shuffling occur 100% locally in your web browser. No text lists, names, email rosters, or entries are ever sent to our servers.",
    guide: {
      title: "List Sorting, Deduplication & Collation Guide",
      slug: "text-sorter-guide"
    },
    faqs: [
      {
        q: "What is the difference between Line mode and Word mode?",
        a: "Line mode treats every newline-delimited row as an individual item to sort. Word mode splits the entire text by spaces and punctuation, sorting individual words while preserving or collapsing spacing."
      },
      {
        q: "How does the 'No Duplicates' feature work?",
        a: "It filters the array of lines or words through a JavaScript Set data structure, discarding duplicate occurrences so that each unique value appears only once in the output."
      },
      {
        q: "How does 'By Length' handle items with the same number of characters?",
        a: "Items of identical length maintain their relative order (stable sort) or secondary alphabetical ordering."
      },
      {
        q: "Can I randomize or shuffle a list?",
        a: "Yes. Click the 'Shuffle' button to perform a random permutation on the current lines or words."
      },
      {
        q: "How does the alphabetical sort handle accents and international letters?",
        a: "The sort uses JavaScript's native String.prototype.localeCompare(), which respects international linguistic rules and accent positioning."
      },
      {
        q: "Are my lists sent to any remote server?",
        a: "No. All sorting algorithms run entirely in your local browser thread. Your data never leaves your computer."
      }
    ],
    keywords: ["text sorter", "alphabetize list", "sort lines a to z", "sort words by length", "remove duplicate lines", "shuffle list online", "reverse text list"]
  },

  "lorem-ipsum-generator": {
    id: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    shortIntro: "Generate custom Lorem Ipsum placeholder text for websites, wireframes, and publication layouts. AstonishBuddy's Lorem Ipsum Generator creates paragraphs, sentences, or word lists locally in your browser with optional 'Start with Lorem ipsum...' formatting.",
    features: [
      "Three generation modes: Paragraphs, Sentences, and Words",
      "Custom count selector to specify the exact quantity of units needed",
      "Toggle to include or exclude the traditional standard opening 'Lorem ipsum dolor sit amet...'",
      "Accurate classical vocabulary derived from Cicero's 45 BC philosophical treatise De Finibus Bonorum et Malorum",
      "One-click 'Generate Text' button for fresh random variations",
      "One-click 'Copy' button to transfer placeholder text directly to your design software",
      "100% client-side text generation with zero network overhead"
    ],
    steps: [
      "Select your desired output type: click 'Paragraphs', 'Sentences', or 'Words'.",
      "Enter your desired count in the quantity input field (e.g. 3 paragraphs or 25 words).",
      "Check or uncheck the 'Start with \"Lorem ipsum...\"' checkbox based on your project preferences.",
      "Click 'Generate Text' to render the placeholder copy.",
      "Click 'Copy' to copy the generated text to your clipboard for Figma, Sketch, or your code editor."
    ],
    examples: [
      {
        title: "Generating Exactly 25 Words of Placeholder Text",
        input: "Type: Words | Count: 25 | Start with 'Lorem ipsum...': Checked",
        output: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
      },
      {
        title: "Generating 2 Paragraphs for a Web Layout Wireframe",
        input: "Type: Paragraphs | Count: 2 | Start with 'Lorem ipsum...': Checked",
        output: "Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...\nParagraph 2: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam..."
      }
    ],
    mistakes: [
      "Assuming Lorem Ipsum is meaningless gibberish; it is derived from Latin literature, specifically Cicero's 45 BC ethical treatise De Finibus Bonorum et Malorum (Sections 1.10.32–33).",
      "Confusing H. Rackham's 1914 Loeb Classical Library English translation with Richard McClintock's 1980s identification of Cicero as the source.",
      "Leaving placeholder text in production websites; always set pre-launch audits to replace placeholder copy.",
      "Using word-count mode when paragraph structure is needed to evaluate visual text line height and spacing."
    ],
    privacy: "All placeholder text generation executes entirely within your browser's local JavaScript environment. No parameters or generated strings are transmitted to any server.",
    guide: {
      title: "History of Lorem Ipsum, Cicero & Typographic Mockups Guide",
      slug: "lorem-ipsum-generator-guide"
    },
    faqs: [
      {
        q: "What is the true origin and history of Lorem Ipsum?",
        a: "Lorem Ipsum originates from Sections 1.10.32 and 1.10.33 of Cicero's 45 BC philosophical work 'De Finibus Bonorum et Malorum' ('On the Extremes of Good and Evil'). In the 1980s, Richard McClintock, a Latin scholar at Hampden-Sydney College, identified the source passage after researching the obscure Latin word 'consectetur'. The 1914 date often cited in literature refers to H. Rackham's English translation of Cicero for the Loeb Classical Library, not to McClintock's discovery."
      },
      {
        q: "What does the Latin phrase 'Lorem ipsum' actually mean?",
        a: "'Lorem ipsum' is a truncated excerpt of 'dolorem ipsum', meaning 'pain itself' (from 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...': 'Neither is there anyone who loves, pursues, or desires pain itself because it is pain...')."
      },
      {
        q: "Why do designers use Lorem Ipsum instead of real English text?",
        a: "When reviewing mockups, human eyes naturally read readable English text, distracting stakeholders from evaluating typography, visual balance, layout hierarchy, and spacing. Lorem Ipsum provides a natural distribution of letters without readable distraction."
      },
      {
        q: "Can I generate exact word counts?",
        a: "Yes. Select 'Words' mode and enter the exact number of words you need for UI buttons, card summaries, or preview snippets."
      },
      {
        q: "Can I generate text without starting with 'Lorem ipsum dolor sit amet'?",
        a: "Yes. Simply uncheck the 'Start with \"Lorem ipsum...\"' checkbox to generate randomized Latin vocabulary throughout."
      },
      {
        q: "Does this tool work completely offline?",
        a: "Yes. Once the page is loaded, the entire Latin dictionary and generation algorithm run offline in your browser."
      }
    ],
    keywords: ["lorem ipsum generator", "dummy text generator", "placeholder text online", "latin text generator", "cicero lorem ipsum", "mockup text generator", "sample text generator"]
  },

  "diff-checker": {
    id: "diff-checker",
    name: "Diff Checker",
    shortIntro: "Compare two text snippets, code files, or documents side by side to detect additions, deletions, and modifications. AstonishBuddy's Diff Checker uses a Longest Common Subsequence (LCS) dynamic programming algorithm to calculate line and word-level differences locally in your browser with split and inline view modes.",
    features: [
      "Longest Common Subsequence (LCS) dynamic programming algorithm computing line-by-line diffs",
      "Character and word-level token highlighting inside modified and replaced lines",
      "Dual visual modes: 'Split View' (side-by-side comparison) and 'Inline View' (unified diff)",
      "Toggle button: 'Hide Unchanged Lines' (or 'Show Unchanged Lines') to focus exclusively on edits",
      "'Swap' button to instantly reverse Original and Modified texts",
      "Interactive 'Paste', 'Reset to Sample', 'Clear', and 'Edit Text' navigation buttons",
      "100% client-side diff computation ensuring confidential source code and contracts remain private"
    ],
    steps: [
      "Paste your original text into the 'Original Text' panel on the left (or click 'Paste').",
      "Paste your updated text into the 'Modified Text' panel on the right.",
      "Click '🚀 Compare Texts' to run the LCS diff calculation.",
      "Choose your preferred layout: click 'Split View' for side-by-side columns, or 'Inline View' for unified flow.",
      "Click 'Hide Unchanged Lines' if you have long documents and only want to inspect modified lines.",
      "Click 'Edit Text' to return to the input text areas to refine your comparison."
    ],
    examples: [
      {
        title: "Comparing JSON Configuration Modifications",
        input: "Original:\n{\n  \"env\": \"staging\",\n  \"port\": 3000\n}\n\nModified:\n{\n  \"env\": \"production\",\n  \"port\": 8080,\n  \"ssl\": true\n}",
        output: "Diff Summary:\n- Line 2: \"env\": \"staging\" -> \"env\": \"production\" (Replaced, inline word diff highlighted)\n- Line 3: \"port\": 3000 -> \"port\": 8080 (Replaced)\n+ Line 4: \"ssl\": true (Inserted)\nAlgorithm: LCS line script with fine-grained word tokenization"
      },
      {
        title: "Comparing Contract Clause Revisions",
        input: "Original: The service provider shall deliver reports within thirty (30) business days.\nModified: The service provider shall deliver reports within fifteen (15) business days.",
        output: "Result: Single modified line with intra-line highlighting: 'thirty (30)' marked in red strikethrough, 'fifteen (15)' marked in green underline"
      }
    ],
    mistakes: [
      "Assuming the tool uses Git's Myers diff algorithm; this tool uses a classic Longest Common Subsequence (LCS) DP matrix with word-level tokenization.",
      "Overlooking trailing whitespace or newline differences between files that can cause identical-looking lines to register as modified.",
      "Comparing excessively large multi-megabyte files in split view, which can cause DOM layout rendering pauses.",
      "Expecting the tool to resolve Git merge conflicts; the tool inspects and displays differences, but does not perform 3-way merge conflict resolution."
    ],
    privacy: "All diff calculations execute 100% locally in your browser. Your proprietary source code, legal agreements, financial records, and private documents are never sent across the internet.",
    guide: {
      title: "LCS Diff Algorithms, Word Tokenization & Code Review Guide",
      slug: "diff-checker-guide"
    },
    faqs: [
      {
        q: "What algorithm does this diff checker use?",
        a: "The tool implements a dynamic programming Longest Common Subsequence (LCS) algorithm to find the minimal edit script between two string arrays, followed by a secondary word-level LCS pass on replaced lines to highlight intra-line token differences."
      },
      {
        q: "Is this identical to 'git diff'?",
        a: "No. Git primarily uses Eugene Myers' O(ND) greedy difference algorithm or histogram diffs. Our tool uses a standard 2D LCS dynamic programming algorithm optimized for fast browser execution and visual intra-line word highlighting."
      },
      {
        q: "What does the 'Hide Unchanged Lines' button do?",
        a: "In large files with hundreds of identical lines, 'Hide Unchanged Lines' collapses equal rows, allowing you to focus exclusively on lines that were added, removed, or modified."
      },
      {
        q: "Can I swap the original and modified texts?",
        a: "Yes. Click the 'Swap' button to instantly swap the contents of the left and right panels."
      },
      {
        q: "Does this tool work with code in different programming languages?",
        a: "Yes. The diff checker works with plain text, source code (JavaScript, Python, C++, HTML, CSS, SQL), JSON, Markdown, and CSV files."
      },
      {
        q: "Is my proprietary source code sent to a remote server?",
        a: "No. The entire comparison executes inside your browser's local JavaScript thread. Nothing is uploaded or stored."
      }
    ],
    keywords: ["diff checker", "text compare online", "compare two files", "lcs diff algorithm", "code comparison tool", "side by side diff", "inline diff viewer"]
  },

  "markdown-converter": {
    id: "markdown-converter",
    name: "Markdown to HTML Converter",
    shortIntro: "Convert Markdown syntax into clean, standard HTML code in real time with an interactive live preview. AstonishBuddy's Markdown Converter parses headings, bold and italic formatting, blockquotes, code blocks, lists, links, and horizontal rules locally in your browser, with built-in HTML sanitization to prevent XSS vulnerabilities. Built for technical writers, documentation maintainers, and developers publishing content to blogs, static site generators, and CMS platforms, it bridges raw markdown writing with sanitized HTML production.",
    features: [
      "Real-time Markdown to HTML compilation as you type without page reloading",
      "Sanitized HTML live preview preventing Cross-Site Scripting (XSS) via client-side sanitization algorithms",
      "Support for standard CommonMark elements: headings (h1–h6), bold, italics, blockquotes, lists, links, and code blocks",
      "Clean raw HTML code output with one-click 'Copy HTML' button",
      "Live text statistics: character count, word count, and line count",
      "One-click 'Clear' button to reset the editor",
      "Automatic HTML entity escaping inside code blocks to prevent layout breakage",
      "100% in-browser parsing with zero server requests and no tracking"
    ],
    steps: [
      "Type or paste your Markdown text into the left editor panel.",
      "Observe the live formatted HTML preview in the right pane in real time.",
      "Inspect the generated HTML markup in the code output view.",
      "Click 'Copy HTML' to copy the clean HTML code to your clipboard for your CMS, blog, or website.",
      "Check the live word and character counters at the bottom of the editor.",
      "Click 'Clear' to wipe the editor and begin a new document."
    ],
    examples: [
      {
        title: "Converting Formatted Article Headers and Lists",
        input: "# AstonishBuddy Guide\n\nWelcome to our **developer tools**.\n\n- Fast execution\n- 100% client-side\n- Free to use",
        output: "<h1>AstonishBuddy Guide</h1>\n<p>Welcome to our <strong>developer tools</strong>.</p>\n<ul>\n  <li>Fast execution</li>\n  <li>100% client-side</li>\n  <li>Free to use</li>\n</ul>"
      },
      {
        title: "Converting Code Blocks and Blockquotes",
        input: "> Simplicity is the soul of efficiency.\n\n```javascript\nconst sum = (a, b) => a + b;\n```",
        output: "<blockquote><p>Simplicity is the soul of efficiency.</p></blockquote>\n<pre><code class=\"language-javascript\">const sum = (a, b) =&gt; a + b;</code></pre>"
      }
    ],
    mistakes: [
      "Expecting GitHub Flavored Markdown (GFM) task lists (- [x]) or advanced table column alignments; this tool converts standard CommonMark syntax.",
      "Assuming raw unsanitized HTML is executed; our live preview runs through a client-side HTML sanitizer to protect users from malicious script injection.",
      "Missing empty lines before lists or blockquotes, which can cause some markdown engines to treat them as continuation paragraphs.",
      "Using non-standard backslash escapes in plain text where standard markdown delimiters are expected.",
      "Expecting embedded HTML <script> or <iframe> tags to execute; these are stripped during preview sanitization for security."
    ],
    privacy: "All Markdown parsing and HTML sanitization execute 100% locally inside your web browser. Your notes, articles, and documentation drafts are never transmitted over the internet or logged on any remote server.",
    guide: {
      title: "Markdown Syntax, CommonMark Standards & HTML Sanitization Guide",
      slug: "markdown-converter-guide"
    },
    faqs: [
      {
        q: "Does this tool sanitize HTML in the live preview?",
        a: "Yes. The live preview sanitizes HTML output before rendering, stripping dangerous script tags, event handlers (like onload/onerror), and malicious attributes to protect against Cross-Site Scripting (XSS)."
      },
      {
        q: "Does this tool support GFM task lists (- [x]) or complex tables?",
        a: "No. The converter focuses on core CommonMark elements (headings, bold, italics, blockquotes, unordered/ordered lists, links, inline code, and code blocks). Extended features like interactive task checkboxes or table column alignment are not included."
      },
      {
        q: "Can I copy the raw HTML code directly?",
        a: "Yes. Click the 'Copy HTML' button to copy the compiled HTML markup straight to your clipboard for use in WordPress, Ghost, or custom HTML files."
      },
      {
        q: "How does the tool handle code blocks?",
        a: "Fenced code blocks enclosed by triple backticks (```) are converted into standard <pre><code> blocks, with special HTML characters (&, <, >) escaped into safe entities."
      },
      {
        q: "Can I use this tool offline?",
        a: "Yes. Once loaded, the converter runs entirely within your browser's JavaScript engine and requires no internet connection."
      },
      {
        q: "Are my Markdown documents uploaded to a server?",
        a: "No. All text parsing runs locally in your browser thread. Your content is never stored or transmitted to AstonishBuddy servers."
      }
    ],
    keywords: ["markdown to html", "markdown converter", "markdown preview online", "convert md to html", "commonmark converter", "sanitized html preview", "markdown editor"]
  }
};

module.exports = { part1, part2 };
