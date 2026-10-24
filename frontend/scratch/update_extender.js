const fs = require('fs');
const filePath = './app/tools/image-background-extender/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/export default function AIImageExtender\(\)/g, 'export default function ImageBackgroundExtender()');
content = content.replace(/id: "generative_fill", name: "AI Generative Expand", desc: "Outpaint details matching border textures \(Recommended\)"/g, 'id: "edge_mirror", name: "Edge Mirror & Feather", desc: "Mirrors edge pixels outward with smooth boundary feathering (Recommended)"');
content = content.replace(/\"generative_fill\"/g, '"edge_mirror"');
content = content.replace(/setStatusMsg\("Synthesizing background outpaint texture\.\.\."\);/g, 'setStatusMsg("Mirroring edge pixels and expanding margins...");');
content = content.replace(/setStatusMsg\("Injecting photographic noise overlay\.\.\."\);/g, 'setStatusMsg("Applying subtle grain and border blending...");');
content = content.replace(/Outpainting processor/g, 'Background extender processor');
content = content.replace(/<ToolSEO toolId="ai-image-extender" \/>/g, '<ToolSEO toolId="image-background-extender" />');
content = content.replace(/AI Image Extender/g, 'Image Background Extender');
content = content.replace(/Free web-based AI Image Extender\. Outpaint, uncrop, and extend photo backgrounds to any aspect ratio \(16:9, 4:5, 1:1\) instantly in your browser with 100% privacy\./g, 'Free web-based Image Background Extender. Uncrop, expand canvas borders, and adapt photo backgrounds to 16:9, 4:5, 1:1, or custom aspect ratios in your browser with 100% privacy.');
content = content.replace(/Extend borders and outpaint background seamlessly/g, 'Extend borders and canvas margins seamlessly');
content = content.replace(/Smart edge mirroring, feathering, depth blur, and photo grain synthesis/g, 'Edge mirroring, feathering, depth blur, and grain blending');
content = content.replace(/Uncrop and extend photo backgrounds to any aspect ratio instantly\./g, 'Extend photo backgrounds to any aspect ratio using edge mirroring, blur, or gradients.');
content = content.replace(/AI Extension Successful/g, 'Background Extension Complete');
content = content.replace(/Advanced Outpainting Settings/g, 'Background Extension Settings');
content = content.replace(/\{loading \? "Generating Extension\.\.\." : "Generate AI Extension"\}/g, '{loading ? "Extending Background..." : "Extend Background"}');
content = content.replace(/Failed to export generated image\./g, 'Failed to export extended image.');
content = content.replace(/Background generation failed\. Try a smaller image size\./g, 'Background extension failed. Try a smaller image size.');
content = content.replace(/The Outpaint Box representing Target Aspect Ratio bounds/g, 'The Extension Box representing Target Aspect Ratio bounds');
content = content.replace(/Generative Extend simulated background rendering/g, 'Edge Mirror simulated background rendering');
content = content.replace(/Grain Synthesis Slider/g, 'Film Grain Slider');

// Ensure 4 related tools
const oldRelated = `<RelatedTools tools={[
          { href: "/tools/image-compressor", label: "Image Compressor", icon: "🖼️", desc: "Reduce image file size without losing quality" },
          { href: "/tools/image-quality-enhancer", label: "Image Quality Enhancer", icon: "✨", desc: "Upscale & sharpen photos online" },
          { href: "/tools/bulk-image-converter", label: "Bulk Image Converter", icon: "🔄", desc: "Convert PNG, JPG, WebP in bulk" },
        ]} />`;
const newRelated = `<RelatedTools tools={[
          { href: "/tools/image-compressor", label: "Image Compressor", icon: "🖼️", desc: "Reduce image file size without losing quality" },
          { href: "/tools/image-quality-enhancer", label: "Image Quality Enhancer", icon: "✨", desc: "Upscale & sharpen photos online" },
          { href: "/tools/bulk-image-converter", label: "Bulk Image Converter", icon: "🔄", desc: "Convert PNG, JPG, WebP in bulk" },
          { href: "/tools/pdf-compressor", label: "PDF Compressor", icon: "📄", desc: "Compress and optimize PDF documents" },
        ]} />`;
content = content.replace(oldRelated, newRelated);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated image-background-extender/page.tsx');
