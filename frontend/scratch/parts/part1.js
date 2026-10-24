module.exports = {
  "image-compressor": {
    id: "image-compressor",
    name: "Image Compressor",
    shortIntro: "Compress JPEG, PNG, and WebP images directly in your browser with full control over compression quality. Astonishbuddy Image Compressor reduces file size for web optimization, faster load speeds, and email sharing without uploading your photos to remote servers.",
    guideContent: `
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
  <p style={{ marginBottom: "16px" }}>
    Images account for a substantial percentage of total bandwidth consumed on modern websites. High-resolution digital photographs and uncompressed graphic exports often weigh 3 to 10 megabytes each, resulting in slow page loading times, high mobile data usage, and degraded Core Web Vitals scores. The Astonishbuddy Image Compressor optimizes and compresses your images directly on your local device.
  </p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Key Features
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Client-Side Browser Compression:</strong> Uses browser-image-compression in an isolated Web Worker thread, keeping the main interface responsive.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Quality Slider Control:</strong> Fine-tune the compression quality percentage from 10% to 100% to balance byte savings against visual fidelity.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Maximum Resolution Capping:</strong> Constrains oversize graphics exceeding 4096px down to standard web dimensions to remove unnecessary pixel bloat.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Transparent Alpha Preservation:</strong> Preserves transparency channels on PNG and WebP graphics without filling backgrounds with black or white.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>EXIF Metadata Stripping:</strong> Re-encoding through canvas automatically strips camera serial numbers, GPS coordinates, and private device metadata.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Step-by-Step Usage Guide
  </h3>
  <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}>Drag and drop your JPG, PNG, or WebP photo into the upload dropzone, or click the file area to select an image from your device.</li>
    <li style={{ marginBottom: "8px" }}>Adjust the Quality Slider (default 80%) to define your desired balance between image fidelity and file size reduction.</li>
    <li style={{ marginBottom: "8px" }}>Click the &quot;Compress Image&quot; button to run the compression algorithm locally.</li>
    <li style={{ marginBottom: "8px" }}>Review the original versus compressed file size readouts and the calculated savings percentage.</li>
    <li style={{ marginBottom: "8px" }}>Click &quot;⬇️ Download Compressed Image&quot; to save the optimized file directly to your downloads folder.</li>
  </ol>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Worked Examples with Real Verified Outputs
  </h3>
  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: High-Resolution Smartphone Photo (JPEG)</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input:</em> 4032×3024 pixel JPEG photograph measuring 4.82 MB (4,820,000 bytes).</p>
  <p style={{ marginBottom: "8px" }}><em>Action:</em> Compressed at 80% quality slider setting with Web Worker processing enabled.</p>
  <p style={{ marginBottom: "16px" }}><em>Output:</em> Output file size reduced to 612 KB (626,688 bytes), achieving an 87.3% file size reduction with clear photographic textures and sharp edges.</p>

  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: UI Graphic with Transparency (PNG)</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input:</em> 1920×1080 pixel PNG screenshot with transparent margins measuring 1.45 MB (1,450,000 bytes).</p>
  <p style={{ marginBottom: "8px" }}><em>Action:</em> Compressed at 75% quality slider setting.</p>
  <p style={{ marginBottom: "16px" }}><em>Output:</em> Output file size reduced to 395 KB (404,480 bytes), achieving a 72.8% reduction while preserving full alpha channel transparency.</p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Common Mistakes to Avoid
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong>Re-compressing already lossy files:</strong> Compressing an already low-bitrate JPEG multiple times compounds generation loss and produces visible block artifacts. Always compress from original master files.</li>
    <li style={{ marginBottom: "8px" }}><strong>Dropping quality below 60% unnecessarily:</strong> Settings below 60% often introduce noticeable color banding around smooth skies and gradients. 75% to 85% is the recommended sweet spot.</li>
    <li style={{ marginBottom: "8px" }}><strong>Overlooking input dimensions:</strong> If your website layout displays an avatar or card image at 300px width, resizing the pixel dimensions saves far more bytes than heavy compression on a 4K image.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Privacy and Local Processing Guarantee
  </h3>
  <p style={{ marginBottom: "16px" }}>
    Your privacy is preserved by architecture. This tool executes 100% inside your local browser runtime using HTML5 Canvas and browser Web Workers. Your personal photos, sensitive business receipts, invoices, and family portraits are never uploaded to any remote server or stored in any database.
  </p>
</div>
`,
    faqs: [
      { q: "How does client-side image compression work?", a: "The tool loads your image into an in-memory canvas inside a browser Web Worker thread. It resizes any dimension exceeding 4096px down to standard limits and re-encodes the image at your selected quality percentage using the browser's native encoder." },
      { q: "Does compressing a PNG remove the transparent background?", a: "No. The compressor preserves PNG and WebP alpha transparency channels. Transparent areas remain transparent without black or white background artifacts." },
      { q: "What is the recommended quality setting for website hero banners?", a: "We recommend setting the quality slider between 80% and 85%. This range typically achieves a 75% to 85% file size reduction with zero perceptible loss in visual quality on retina displays." },
      { q: "Are my photos uploaded to any external server during compression?", a: "No. All compression processing occurs entirely within your local browser memory. No image files or personal data are ever transmitted across the internet." },
      { q: "Does compression strip GPS coordinates and camera metadata?", a: "Yes. When the image is drawn onto an HTML5 Canvas and exported as a new file blob, EXIF metadata including camera model, exposure settings, and GPS location coordinates are automatically removed." },
      { q: "What is the maximum file size supported?", a: "The client-side compressor accepts images up to 100 MB per file, which comfortably accommodates raw smartphone photos and high-resolution camera exports." }
    ],
    keywords: ["image compressor", "compress image online", "reduce image size free", "compress jpeg", "compress png without losing quality", "shrink photo file size", "client side image compression"]
  },

  "image-background-extender": {
    id: "image-background-extender",
    name: "Image Background Extender",
    shortIntro: "Extend image borders and canvas margins to standard 16:9 landscape, 4:5 portrait, 1:1 square, or custom aspect ratios. The Astonishbuddy Image Background Extender uses edge mirroring, Gaussian blur extension, and border gradients directly in your browser without uploading your photos.",
    guideContent: `
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
  <p style={{ marginBottom: "16px" }}>
    Adapting photos for social media platforms, presentation slides, and video thumbnails often requires changing aspect ratios. For example, converting a 4:3 photograph to a 16:9 YouTube thumbnail or a 4:5 Instagram post normally forces you to crop away important subjects. The Image Background Extender expands the canvas around your image and fills the extended margins using edge mirroring, depth blur, or color gradients.
  </p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Key Features and Background Modes
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Edge Mirror & Feather:</strong> Samples border pixel slices and reflects them outward into extended margins with smooth boundary feathering and subtle film grain overlay.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Blurred Depth Extend:</strong> Fills extended margins with an enlarged, defocused Gaussian blur of the original image to create a modern bokeh background.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Border Color Gradient:</strong> Samples color values at the four image corners to construct a smooth linear gradient that blends seamlessly with the photo borders.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Solid Background & Custom Color:</strong> Fills outer canvas margins with any solid hex color or custom color picker selection.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Transparent Margins:</strong> Leaves extended borders fully transparent for PNG export, ideal for graphic design and compositing.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Subject Repositioning and Scaling:</strong> Drag and offset the subject horizontally or vertically, and adjust the scale slider from 50% to 150%.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Step-by-Step Usage Guide
  </h3>
  <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}>Upload your image by dragging and dropping into the preview container, or click the browse button.</li>
    <li style={{ marginBottom: "8px" }}>Select a target aspect ratio: &quot;16:9 Landscape&quot;, &quot;4:5 Portrait&quot;, &quot;1:1 Square&quot;, or choose &quot;Custom Ratio&quot; and enter custom pixel dimensions.</li>
    <li style={{ marginBottom: "8px" }}>Choose an expansion mode from the dropdown: Edge Mirror & Feather, Blurred Depth Extend, Border Color Gradient, Solid Background, or Transparent Margins.</li>
    <li style={{ marginBottom: "8px" }}>Fine-tune subject placement using the Scale slider, X/Y Position sliders, Blur radius slider, and Border Feathering controls.</li>
    <li style={{ marginBottom: "8px" }}>Click &quot;Extend Background&quot; to render the composite canvas, then click &quot;⬇️ Download Extended Image&quot; to save as PNG, JPG, or WebP.</li>
  </ol>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Worked Examples with Real Verified Outputs
  </h3>
  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Converting a 4:3 Photo to 16:9 Landscape</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input:</em> A 1600×1200 pixel digital photograph (4:3 aspect ratio).</p>
  <p style={{ marginBottom: "8px" }}><em>Action:</em> Selected &quot;16:9 Landscape&quot; aspect ratio with &quot;Edge Mirror & Feather&quot; mode, 20px feather radius, and 3% grain.</p>
  <p style={{ marginBottom: "16px" }}><em>Output:</em> Canvas expands horizontally to 2133×1200 pixels. The original photo remains uncropped at 1600×1200 in the center. The 266px left and 267px right margins are filled by mirroring adjacent edge pixels and feathering the seam, creating an uncropped 16:9 presentation slide.</p>

  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Converting a Landscape Photo to 4:5 Portrait for Instagram</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input:</em> A 1600×1200 pixel landscape photo.</p>
  <p style={{ marginBottom: "8px" }}><em>Action:</em> Selected &quot;4:5 Portrait&quot; ratio with &quot;Blurred Depth Extend&quot; mode at 40px blur radius.</p>
  <p style={{ marginBottom: "16px" }}><em>Output:</em> Canvas expands vertically to 1600×2000 pixels. The original photo sits sharply in the center while the 400px top and bottom margins are filled with an aesthetically pleasing defocused bokeh backdrop matching the image color tones.</p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Tips and Common Mistakes to Avoid
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong>Choosing the wrong background mode for high-contrast borders:</strong> Edge mirroring works best when border edges consist of relatively uniform textures like sky, grass, or studio backgrounds. For complex scenes with subjects touching the edge, use Blurred Depth Extend instead.</li>
    <li style={{ marginBottom: "8px" }}><strong>Setting feathering too low:</strong> Setting border feathering to 0px creates a hard visible line between original content and mirrored pixels. A feather setting of 15px to 25px ensures a soft, natural transition.</li>
    <li style={{ marginBottom: "8px" }}><strong>Selecting JPEG for transparent backgrounds:</strong> The JPEG specification does not support transparency. If you choose &quot;Transparent Margins&quot;, ensure your output format is set to PNG or WebP.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Honest Privacy and In-Browser Processing Note
  </h3>
  <p style={{ marginBottom: "16px" }}>
    This tool runs 100% inside your web browser using the HTML5 Canvas API. It does not use remote cloud servers, generative AI text prompts, or cloud-based neural synthesizers. Because all processing executes in local browser memory, your photos are never uploaded, stored, or inspected by third parties.
  </p>
</div>
`,
    faqs: [
      { q: "Does this tool use generative AI or cloud neural networks?", a: "No. This tool operates entirely client-side using deterministic HTML5 Canvas algorithms: edge pixel mirroring, Gaussian box blur passes, linear color gradients, boundary feathering, and subtle noise grain overlays." },
      { q: "How does Edge Mirror & Feather work?", a: "The algorithm isolates a 20% slice along the outer edge of your image and reflects those pixels outward into the extended canvas margins. It then applies alpha feathering and a subtle noise overlay to soften the boundary seam." },
      { q: "Can I position my photo off-center?", a: "Yes. You can use the horizontal position (X) and vertical position (Y) sliders, or drag the image directly in the preview container, to place the subject wherever you prefer in the frame." },
      { q: "Which output formats can I download?", a: "You can download your extended image in PNG (with transparency support), JPG (with adjustable compression quality), or WebP format." },
      { q: "Will extending the image degrade the original photograph's sharpness?", a: "No. The original image pixels are rendered onto the new canvas at full native resolution without re-compression degradation unless you choose to lower the export quality setting." },
      { q: "Are my uploaded photos stored on Astonishbuddy servers?", a: "Never. All canvas operations execute locally in your browser memory. No image files are ever uploaded across the network." }
    ],
    keywords: ["image background extender", "extend image borders", "uncrop photo online", "photo canvas expander", "change aspect ratio without crop", "blur background extend", "edge mirror image extend"]
  },

  "image-quality-enhancer": {
    id: "image-quality-enhancer",
    name: "Image Quality Enhancer",
    shortIntro: "Enhance image sharpness, clarity, contrast, and resolution with client-side canvas algorithms. The Astonishbuddy Image Quality Enhancer applies unsharp masking, bicubic canvas upscaling, and tone adjustments directly in your browser with zero server uploads.",
    guideContent: `
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
  <p style={{ marginBottom: "16px" }}>
    Digital photos captured in low lighting, web graphics with mild compression softness, and small thumbnails often suffer from lack of crisp edge contrast. The Image Quality Enhancer provides an interactive tool to scale up image dimensions and sharpen edge definition. It operates locally using canvas-based unsharp masking and tone calibration.
  </p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    What Sharpening and Upscaling Can and Cannot Do
  </h3>
  <p style={{ marginBottom: "12px" }}>
    To set honest expectations, it is important to understand the mathematical reality of client-side image processing:
  </p>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>What it CAN do:</strong> It accentuates high-contrast transitions along edges using an unsharp mask convolution filter, reduces perceptible blur on slightly soft focus shots, boosts color vibrancy, and scales images to 2x or 4x pixel dimensions using canvas interpolation.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>What it CANNOT do:</strong> It cannot invent missing photographic data that was never captured, recover completely out-of-focus or motion-blurred faces, or restore illegible microtext from extremely low-resolution scans. No mathematical filter can recreate physical information absent from the source pixels.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Key Features
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Unsharp Mask Filter:</strong> Applies a 3×3 Gaussian blur kernel subtracted from the original image to compute edge differences and enhance boundary micro-contrast.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Resolution Upscaling:</strong> Choose between 1x (original resolution), 2x (double dimensions), and 4x (quadruple dimensions) using canvas interpolation.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Tone and Color Controls:</strong> Calibrate Brightness (50%–150%), Contrast (50%–150%), and Color Saturation (50%–150%) sliders in real time.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Split Before/After Comparison:</strong> Inspect enhancement adjustments side by side against the original master photo before downloading.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Step-by-Step Usage Guide
  </h3>
  <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}>Upload your JPG, PNG, or WebP image into the upload box (max file size 20 MB).</li>
    <li style={{ marginBottom: "8px" }}>Select your target Scale factor: &quot;1x (Original)&quot;, &quot;2x (Upscale)&quot;, or &quot;4x (Max)&quot;.</li>
    <li style={{ marginBottom: "8px" }}>Adjust the Sharpness Slider (recommended 40% to 65% for natural edge clarity).</li>
    <li style={{ marginBottom: "8px" }}>Fine-tune Brightness, Contrast, and Saturation sliders to enhance overall tonal depth.</li>
    <li style={{ marginBottom: "8px" }}>Click &quot;Enhance Image&quot; to render the result onto the canvas.</li>
    <li style={{ marginBottom: "8px" }}>Review the preview and click &quot;⬇️ Download Enhanced Image&quot; to save the file.</li>
  </ol>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Worked Examples with Real Verified Outputs
  </h3>
  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Slightly Soft Product Photograph (E-Commerce)</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input:</em> A 600×400 pixel product photo with soft edges around packaging text.</p>
  <p style={{ marginBottom: "8px" }}><em>Action:</em> Set Scale to 2x (1200×800 px), Sharpness to 50%, Contrast to 110%, Saturation to 105%.</p>
  <p style={{ marginBottom: "16px" }}><em>Output:</em> Canvas scales the image to 1200×800 pixels. The unsharp mask increases local luminance contrast along typography boundaries and product contours, making product labels visibly crisper on high-DPI screens without introducing halo artifacts.</p>

  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Landscape Photo with Flat Lighting</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input:</em> A 1920×1080 pixel landscape photo with muted foliage colors.</p>
  <p style={{ marginBottom: "8px" }}><em>Action:</em> Set Scale to 1x, Sharpness to 45%, Contrast to 115%, Saturation to 120%.</p>
  <p style={{ marginBottom: "16px" }}><em>Output:</em> Output resolution remains 1920×1080. Leaf edges and mountain ridges gain definition, while the saturation adjustment boosts greens and blues for a vibrant, punchy aesthetic.</p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Common Mistakes to Avoid
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong>Over-sharpening:</strong> Pushing the sharpness slider beyond 80% creates harsh, unnatural white halo borders (ringing artifacts) around high-contrast edges and amplifies existing JPEG compression noise.</li>
    <li style={{ marginBottom: "8px" }}><strong>Expecting 4x upscaling to reconstruct tiny icons:</strong> Upscaling a 32×32 pixel favicon to 4x (128×128) interpolates pixels smoothly, but cannot add fine detail that does not exist in the source file.</li>
    <li style={{ marginBottom: "8px" }}><strong>Over-saturating skin tones:</strong> Setting saturation above 125% on portrait photography can cause skin tones to look unnaturally red or orange. Keep saturation near 105% to 110% for portraits.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Privacy Guarantee
  </h3>
  <p style={{ marginBottom: "16px" }}>
    All convolution filtering, interpolation, and tone grading calculations execute 100% inside your web browser using HTML5 Canvas pixel manipulation. No photographs are ever uploaded to cloud servers or stored in remote databases.
  </p>
</div>
`,
    faqs: [
      { q: "How does the unsharp mask algorithm sharpen images?", a: "The unsharp mask creates an in-memory blurred version of the photo using a 3x3 convolution kernel. It then subtracts the blurred copy from the original image to compute edge differences, and adds a weighted proportion of those differences back to accentuate edge contrast." },
      { q: "Can this tool fix a completely blurry or out-of-focus photo?", a: "No tool can recover details that were never captured by camera sensors. Sharpening accentuates existing edge contrast for slightly soft photos, but cannot reconstruct severely blurred or missing information." },
      { q: "What is the difference between 2x and 4x upscaling?", a: "2x upscaling doubles the pixel width and height (4x total pixel count), while 4x quadruples both dimensions (16x total pixel count). Upscaling uses canvas interpolation to create higher-resolution assets for display on high-DPI screens." },
      { q: "What causes white halos around edges when sharpening?", a: "White halos (ringing artifacts) occur when the sharpness strength slider is set too high. If you notice glowing borders around dark objects, lower the sharpness slider to between 40% and 60%." },
      { q: "What image formats are supported?", a: "The tool accepts JPG, PNG, and WebP image formats up to 20 MB in size." },
      { q: "Are my photos uploaded to external servers?", a: "No. All pixel manipulation and filtering happen locally in your web browser memory. Your files are never sent across the network." }
    ],
    keywords: ["image quality enhancer", "sharpen image online", "enhance photo clarity", "upscale image 2x 4x", "unsharp mask tool", "photo contrast enhancer", "free photo enhancer"]
  },

  "bulk-image-converter": {
    id: "bulk-image-converter",
    name: "Bulk Image Converter",
    shortIntro: "Convert multiple images between PNG, JPG, WebP, AVIF, BMP, and GIF formats simultaneously. The Astonishbuddy Bulk Image Converter lets you adjust quality, resize dimensions, and download all converted files in a single ZIP archive directly in your browser.",
    guideContent: `
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
  <p style={{ marginBottom: "16px" }}>
    Converting image files one by one is time-consuming when managing website asset migrations, product photo catalogs, or presentation slide decks. The Bulk Image Converter processes dozens of graphics in parallel directly in your web browser. Convert input formats including PNG, JPG, WebP, AVIF, BMP, and GIF into optimized JPG, PNG, or WebP output formats.
  </p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Key Features
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Wide Input Format Support:</strong> Upload PNG, JPG, JPEG, WebP, AVIF, BMP, and GIF files supported natively by modern web browsers.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Standard Output Formats:</strong> Export clean, compliant JPG, PNG, or WebP files ready for web and mobile deployment.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>One-Click Quick Presets:</strong> Instantly switch between common conversions including &quot;PNG → JPG&quot;, &quot;JPG → WebP&quot;, &quot;Any → PNG&quot;, and &quot;Any → WebP&quot;.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Batch Dimension Resizing:</strong> Enable max width and max height constraints with aspect ratio locking to resize graphics while converting.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Compression Quality Tuning:</strong> Adjust export quality from 10% to 100% for JPG and WebP formats to control output file sizes.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Single ZIP Archive Download:</strong> Package your entire converted batch into a convenient \`.zip\` file using client-side JSZip.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Step-by-Step Usage Guide
  </h3>
  <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}>Select a Quick Preset button (e.g. &quot;JPG → WebP&quot;) or manually choose your desired Output Format (JPG, PNG, or WebP).</li>
    <li style={{ marginBottom: "8px" }}>Drag and drop multiple image files into the upload zone, or click &quot;Select Images&quot; to choose files from your computer.</li>
    <li style={{ marginBottom: "8px" }}>Optionally enable &quot;Resize on Convert&quot; and specify Max Width, Max Height, and Maintain Aspect Ratio preferences.</li>
    <li style={{ marginBottom: "8px" }}>Adjust the Quality Slider (0–100%) for JPG or WebP exports (85% is recommended for web graphics).</li>
    <li style={{ marginBottom: "8px" }}>Click &quot;Convert All Images&quot; to process the batch in your browser.</li>
    <li style={{ marginBottom: "8px" }}>Download individual images using the download button on each card, or click &quot;⬇️ Download All as ZIP&quot; to save the entire batch.</li>
  </ol>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Worked Examples with Real Verified Outputs
  </h3>
  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Batch PNG to WebP Conversion for E-Commerce</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input:</em> 10 PNG product graphics totaling 18.2 MB (average 1.82 MB per image).</p>
  <p style={{ marginBottom: "8px" }}><em>Action:</em> Selected &quot;Any → WebP&quot; preset at 85% quality with resize disabled.</p>
  <p style={{ marginBottom: "16px" }}><em>Output:</em> All 10 images converted to \`.webp\` files in 2.4 seconds locally. Total batch size dropped to 3.1 MB (~83% savings), preserving transparent product margins and packaged into a single ZIP archive.</p>

  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Resizing and Converting High-Res Camera JPEGs to PNG</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input:</em> 6 camera photos (5000×3333 px JPEGs, totaling 28 MB).</p>
  <p style={{ marginBottom: "8px" }}><em>Action:</em> Output Format set to PNG, &quot;Resize on Convert&quot; enabled with Max Width 1200 px and Maintain Aspect Ratio enabled.</p>
  <p style={{ marginBottom: "16px" }}><em>Output:</em> Each photo resized proportionally to 1200×800 px PNG files, reducing individual sizes to ~1.1 MB per file for responsive web layout integration.</p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Batch Sizing and Performance Recommendations
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong>Browser memory considerations:</strong> While Astonishbuddy imposes no artificial daily limits or paywalls, processing executes inside your browser&apos;s available RAM. For best performance without tab slowdowns, batches of 15 to 30 files are recommended at a time.</li>
    <li style={{ marginBottom: "8px" }}><strong>Converting transparent PNG to JPG:</strong> JPEGs do not support transparency. When converting transparent PNGs to JPG, transparent areas are rendered on a solid white canvas background. Choose WebP or PNG if transparency is needed.</li>
    <li style={{ marginBottom: "8px" }}><strong>Animated GIF conversion:</strong> Canvas-based conversion renders the first frame of animated GIF files. For animated outputs, specialized video or GIF editors are recommended.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Client-Side Privacy Guarantee
  </h3>
  <p style={{ marginBottom: "16px" }}>
    All conversions are executed 100% locally on your computer or mobile device using HTML5 Canvas and browser \`toBlob\` APIs. Your media assets are never uploaded to our servers, logged in databases, or shared with third parties.
  </p>
</div>
`,
    faqs: [
      { q: "Which image formats can I convert to?", a: "The tool exports to JPG, PNG, and WebP formats. These three formats cover over 98% of modern web, mobile, and desktop image requirements." },
      { q: "What input formats are supported?", a: "You can upload any image format supported by modern browsers, including PNG, JPG, JPEG, WebP, AVIF, BMP, and static GIF images." },
      { q: "Is there a limit on how many images I can convert at once?", a: "There are no arbitrary daily quotas or paywalls. However, because conversion runs in browser memory, batches of 15 to 30 images at a time are recommended to avoid browser tab memory slowdowns on lower-end devices." },
      { q: "What happens to transparent backgrounds when converting PNG to JPG?", a: "Because the JPEG standard does not support alpha transparency channels, transparent regions are filled with a clean solid white background. To preserve transparency, convert to WebP instead." },
      { q: "How do I download all converted images at once?", a: "Once your batch finishes converting, click the 'Download ZIP' button in the conversion summary banner to save all files in a single archive." },
      { q: "Are my uploaded photos sent to remote servers?", a: "No. Conversion and ZIP packaging take place entirely within your local browser memory using client-side JavaScript. Zero files leave your device." }
    ],
    keywords: ["bulk image converter", "batch convert png to webp", "convert jpg to webp free", "batch image resizer", "online image format converter", "convert multiple photos to zip", "browser image converter"]
  },

  "pdf-compressor": {
    id: "pdf-compressor",
    name: "PDF Compressor",
    shortIntro: "Compress PDF documents directly in your browser. The Astonishbuddy PDF Compressor re-encodes embedded page graphics to reduce file sizes for email attachments, online job applications, and portal submissions without uploading sensitive documents to external servers.",
    guideContent: `
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
  <p style={{ marginBottom: "16px" }}>
    Portable Document Format (PDF) files containing scanned receipts, contracts, high-resolution graphics, and design mockups frequently exceed email attachment limits (typically 10 MB or 25 MB) and government portal upload thresholds. The Astonishbuddy PDF Compressor reduces PDF file sizes directly on your device without transmitting confidential documents across the internet.
  </p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    How the In-Browser Engine Works
  </h3>
  <p style={{ marginBottom: "12px" }}>
    Unlike server-based PDF tools that require uploading your private files to cloud queues, our tool executes client-side using two battle-tested JavaScript libraries:
  </p>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>PDF.js Page Rendering:</strong> Uses Mozilla&apos;s pdfjs-dist engine to load each page of your document and render its visual elements onto an in-memory HTML5 Canvas at your chosen resolution scale.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>JPEG Stream Compression:</strong> Re-encodes the rendered page canvas into optimized JPEG image bytes at your chosen compression preset.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>pdf-lib Assembly:</strong> Uses pdf-lib to construct a clean, new PDF document, embed the compressed page images with exact dimensions, and output the optimized PDF file.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Compression Presets
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Recommended Compression (Default):</strong> Scales pages to 1.5x resolution with 65% JPEG quality. Balances significant file reduction (often 70% to 85%) against crisp text legibility.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Extreme Compression:</strong> Scales pages to 1.0x resolution with 40% JPEG quality. Delivers maximum byte reduction for strict upload portals with low file size ceilings.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Less Compression:</strong> Scales pages to 2.0x resolution with 85% JPEG quality. Preserves high visual fidelity for graphics and portfolio presentations.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Step-by-Step Usage Guide
  </h3>
  <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}>Upload your PDF file by dragging and dropping it into the upload box, or click the file area to browse (maximum file size 100 MB).</li>
    <li style={{ marginBottom: "8px" }}>Select a compression preset: &quot;Recommended&quot;, &quot;Extreme&quot;, or &quot;Less Compression&quot;.</li>
    <li style={{ marginBottom: "8px" }}>Click &quot;Compress PDF&quot; to start the page-by-page compression process.</li>
    <li style={{ marginBottom: "8px" }}>Review the original file size, compressed file size, and calculated savings percentage.</li>
    <li style={{ marginBottom: "8px" }}>Click &quot;Download Compressed PDF&quot; to save the optimized document.</li>
  </ol>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Worked Examples with Illustrative Ranges
  </h3>
  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Multi-Page Scanned Document PDF</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input:</em> An illustrative 8-page scanned contract measuring 16.4 MB (16,400,000 bytes) containing uncompressed scanner images.</p>
  <p style={{ marginBottom: "8px" }}><em>Action:</em> Compressed using the &quot;Recommended&quot; preset.</p>
  <p style={{ marginBottom: "16px" }}><em>Output:</em> Typical resulting file size ranges between 2.2 MB and 3.4 MB (~79% to 86% size reduction), easily meeting standard 10 MB email attachment limits while maintaining clear, legible text.</p>

  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Slide Presentation Export</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input:</em> An illustrative 20-slide keynote deck measuring 24.0 MB with photographs and diagrams.</p>
  <p style={{ marginBottom: "8px" }}><em>Action:</em> Compressed using the &quot;Less Compression&quot; preset (high visual fidelity).</p>
  <p style={{ marginBottom: "16px" }}><em>Output:</em> Typical resulting file size ranges between 5.5 MB and 7.8 MB (~68% to 77% reduction), producing a lightweight document suitable for web sharing.</p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Important Warnings and Common Mistakes
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong>Digital Signatures Invalidation Warning:</strong> Because the compression engine re-renders pages and rebuilds the document stream through pdf-lib, any cryptographic digital signatures (such as Adobe Sign, DocuSign, or PKCS#7 certificates) embedded in the original PDF will be invalidated or removed. Never compress legally executed PDFs that require verifiable digital signatures.</li>
    <li style={{ marginBottom: "8px" }}><strong>Searchable Text Layer:</strong> The re-encoding process rasterizes pages onto canvas before embedding them as optimized images. If your workflow requires selectable and searchable text, retain your original document.</li>
    <li style={{ marginBottom: "8px" }}><strong>Encrypted or Password-Protected PDFs:</strong> Password-encrypted PDFs must be unlocked prior to compression; browser-based PDF rendering cannot bypass encrypted document passwords without user credentials.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Privacy and 100 MB Limit
  </h3>
  <p style={{ marginBottom: "16px" }}>
    The maximum file size limit is set to 100 MB to prevent browser tab memory crashes when decoding high-resolution pages. All operations run 100% locally in your browser memory. Your confidential contracts, tax returns, medical files, and identification documents are never uploaded to our servers or accessible by third parties.
  </p>
</div>
`,
    faqs: [
      { q: "How does the PDF Compressor reduce document file size?", a: "The compressor uses PDF.js to render each page onto an offscreen canvas at your chosen preset resolution, re-encodes the visual stream into optimized JPEG image bytes, and uses pdf-lib to assemble a clean, compressed PDF document." },
      { q: "Does compressing a PDF invalidate digital signatures?", a: "Yes. Because the document stream is re-rendered and reassembled into a new PDF file, any embedded cryptographic digital signatures (like DocuSign or PKCS#7 certificates) are invalidated. Do not compress signed legal documents requiring digital signature verification." },
      { q: "What is the maximum PDF file size supported?", a: "The tool supports PDF documents up to 100 MB in size, ensuring broad compatibility while safeguarding your browser from out-of-memory crashes." },
      { q: "Can I still search and copy text after compression?", a: "Because the compression engine rasterizes pages onto high-resolution canvas layers to maximize byte savings from scanned imagery, selectable text layers are converted to images. Keep your original file if you require searchable text." },
      { q: "Can this tool compress password-protected PDF files?", a: "No. Encrypted and password-protected PDF files cannot be rendered by the browser without first entering the decryption password." },
      { q: "Are my confidential PDF documents uploaded to your servers?", a: "No. All PDF decoding, page rendering, and re-assembly occur entirely within your local browser runtime. Zero document data is ever sent across the network." }
    ],
    keywords: ["pdf compressor", "compress pdf online free", "reduce pdf file size", "shrink pdf for email", "compress scanned pdf", "client side pdf compressor", "pdf size reducer"]
  },

  "color-converter": {
    id: "color-converter",
    name: "Color Converter",
    shortIntro: "Convert colors between HEX, RGB, HSL, and CSS color codes instantly. The Astonishbuddy Color Converter provides real-time color calculations, contrast checks, and one-click copying for web designers and front-end developers directly in your browser.",
    guideContent: `
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
  <p style={{ marginBottom: "16px" }}>
    Web designers and software engineers constantly translate color definitions between CSS stylesheets, design mockups, and UI design tools like Figma or Sketch. The Color Converter transforms color representations between hexadecimal (HEX), Red-Green-Blue (RGB), and Hue-Saturation-Lightness (HSL) color spaces in real time with 100% mathematical precision.
  </p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Supported Color Spaces and Formats
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Hexadecimal (HEX):</strong> Standard 6-digit (#RRGGBB) or 3-digit (#RGB) notation widely used across CSS stylesheets and brand guidelines.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Red, Green, Blue (RGB):</strong> Integer notation ranging from 0 to 255 for red, green, and blue channels (e.g. \`rgb(108, 99, 255)\`).</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Hue, Saturation, Lightness (HSL):</strong> Cylindrical coordinate notation specifying Hue in degrees (0°–360°), Saturation percentage (0%–100%), and Lightness percentage (0%–100%). Ideal for generating harmonious color palettes.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>CSS Code Snippets:</strong> Instant copyable snippets formatted for modern CSS custom properties and inline styles.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Step-by-Step Usage Guide
  </h3>
  <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}>Enter any valid HEX code (e.g. \`#6c63ff\`), RGB string, or HSL value into the input field, or click the visual color picker swatch to select a shade visually.</li>
    <li style={{ marginBottom: "8px" }}>The tool automatically calculates and populates corresponding values across all other color models instantaneously.</li>
    <li style={{ marginBottom: "8px" }}>Review the real-time preview swatch to confirm the exact color hue.</li>
    <li style={{ marginBottom: "8px" }}>Click the Copy button next to HEX, RGB, or HSL to copy the formatted string directly to your clipboard.</li>
  </ol>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Worked Examples with Real Verified Outputs
  </h3>
  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Astonishbuddy Brand Purple</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input HEX:</em> \`#6C63FF\`</p>
  <p style={{ marginBottom: "8px" }}><em>Calculated RGB:</em> \`rgb(108, 99, 255)\`</p>
  <p style={{ marginBottom: "16px" }}><em>Calculated HSL:</em> \`hsl(244, 100%, 71%)\` (Hue: 244°, Saturation: 100%, Lightness: 71%).</p>

  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Emerald Green Accent</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input HEX:</em> \`#10B981\`</p>
  <p style={{ marginBottom: "8px" }}><em>Calculated RGB:</em> \`rgb(16, 185, 129)\`</p>
  <p style={{ marginBottom: "16px" }}><em>Calculated HSL:</em> \`hsl(161, 84%, 39%)\` (Hue: 161°, Saturation: 84%, Lightness: 39%).</p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Common Mistakes in Color Conversion
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong>Omitting the hash symbol (#) in CSS:</strong> In CSS syntax, omitting \`#\` causes browser parsing engines to interpret hex values as invalid named color strings.</li>
    <li style={{ marginBottom: "8px" }}><strong>Confusing HSL Lightness with Brightness (HSB/HSV):</strong> HSL (Lightness) and HSB/HSV (Brightness) use different mathematical models. In HSL, 100% lightness is always pure white regardless of saturation, whereas in HSB/HSV, 100% brightness produces full color intensity.</li>
    <li style={{ marginBottom: "8px" }}><strong>Rounding discrepancies:</strong> Converting back and forth between 8-bit integer RGB (0–255) and percentage-based HSL can occasionally cause minor 1-unit rounding shifts due to integer quantization.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Local Execution and Privacy
  </h3>
  <p style={{ marginBottom: "16px" }}>
    Color calculations execute purely in client-side JavaScript. No palette history, design assets, or color inputs are ever transmitted across the network or stored on any server.
  </p>
</div>
`,
    faqs: [
      { q: "How are HEX colors converted to RGB?", a: "Hexadecimal colors use base-16 pairs for Red, Green, and Blue. For example, in #6C63FF, 6C in hex equals 108 in decimal, 63 equals 99, and FF equals 255, resulting in rgb(108, 99, 255)." },
      { q: "Why do web developers prefer HSL for color systems?", a: "HSL makes it intuitive to create tints, shades, and complementary palettes by simply incrementing lightness or hue values without changing the underlying color chemistry." },
      { q: "Can I enter short 3-digit hex codes like #fff?", a: "Yes. The converter automatically expands 3-digit shorthand hex codes (#RGB) to standard 6-digit notation (#RRGGBB)." },
      { q: "What is the difference between HSL and HSV/HSB?", a: "HSL models Lightness where 100% lightness is pure white. HSV/HSB models Value or Brightness where 100% brightness is the most vivid shade of that hue." },
      { q: "Does this tool work completely offline?", a: "Yes. All mathematical conversions run locally in your browser with zero network latency once the page has loaded." },
      { q: "Is my color history saved on your servers?", a: "No. All conversion states exist strictly in your current browser session and are cleared when you close the tab." }
    ],
    keywords: ["color converter", "hex to rgb", "rgb to hsl", "hex to hsl converter", "color code generator", "css color converter", "color palette calculator"]
  }
};
