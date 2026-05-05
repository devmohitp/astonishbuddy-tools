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
    shortIntro: "Looking for a free image compressor online to reduce image size without losing quality? This tool lets you compress JPG, PNG, and WebP images instantly. You can reduce image size for websites, social media, or storage without any noticeable loss in quality. Our image compressor works directly in your browser — no upload to server, no login, and completely free.",
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Whether you want to compress image to 50KB, 100KB, or optimize images for faster website loading, this tool helps you do it in seconds.
        </p>
        <p style={{ marginBottom: "16px" }}>
          It is perfect for developers, designers, bloggers, and anyone who needs fast and reliable image compression online.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          How to Compress Image Online
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li>Upload your image (JPG, PNG, or WebP)</li>
          <li>Adjust compression level if needed</li>
          <li>Click on compress button</li>
          <li>Download your optimized image instantly</li>
        </ol>
        <p style={{ marginBottom: "16px" }}>
          The compression happens in real-time in your browser, ensuring fast performance and full privacy.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Why Use This Image Compressor?
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li>Reduce image size without losing quality</li>
          <li>Improve website loading speed</li>
          <li>No login or signup required</li>
          <li>100% free image compression tool</li>
          <li>Works on all devices (mobile & desktop)</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          What is Image Compression?
        </h3>
        <p style={{ marginBottom: "12px" }}>
          Image compression is the process of reducing the file size of an image while maintaining acceptable visual quality. It removes unnecessary data so the image loads faster and takes less storage space.
        </p>
        <p style={{ marginBottom: "4px" }}>There are two types:</p>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "6px" }}>
            <strong style={{ color: "var(--text-primary)" }}>Lossy Compression:</strong> Smaller size, slight quality reduction
          </li>
          <li style={{ marginBottom: "6px" }}>
            <strong style={{ color: "var(--text-primary)" }}>Lossless Compression:</strong> Maintains quality, slightly larger size
          </li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Use Cases
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li>Optimize images for websites (SEO boost 🚀)</li>
          <li>Compress images for email or WhatsApp</li>
          <li>Reduce image size for faster uploads</li>
          <li>Save storage space on devices</li>
          <li>Improve page speed performance</li>
        </ul>
      </div>
    ),
    faqs: [
      { q: "How to compress image under 50KB?", a: "To compress an image under 50KB, upload your image and move the quality slider to a lower percentage (e.g., 60-70%) until the preview size shows less than 50KB." },
      { q: "Does compression reduce quality?", a: "Our tool uses advanced smart compression that balances quality and size. While lossy compression removes some data, the visual difference is often unnoticeable to the human eye." },
      { q: "Is this tool free?", a: "Yes, our image compressor is 100% free with no hidden charges, limits, or signup requirements." },
      { q: "Is it safe to upload my photos?", a: "Absolutely. All processing happens locally in your browser. Your images are never uploaded to our servers, ensuring total privacy." }
    ],
    keywords: ["compress image online", "reduce image size", "image compressor free", "compress image to 50kb", "compress image without losing quality"]
  },
  "text-case-converter": {
    id: "text-case-converter",
    name: "Text Case Converter",
    shortIntro: "Looking for a text case converter to change uppercase to lowercase or format text instantly? This free text case converter allows you to convert text into uppercase, lowercase, title case, sentence case, and more. It works instantly in your browser without login or limits. Whether you're writing content, coding, or formatting text, this tool helps you quickly transform text into the desired format.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Easily convert text case online for emails, documents, social media posts, or programming tasks. This tool is perfect for developers, writers, students, and marketers who need quick and accurate text formatting.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How to Use Text Case Converter
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "10px" }}>Enter or paste your text</li>
            <li style={{ marginBottom: "10px" }}>Select the desired case (uppercase, lowercase, title case, etc.)</li>
            <li style={{ marginBottom: "10px" }}>Get instant converted text</li>
            <li style={{ marginBottom: "10px" }}>Copy or download the result</li>
          </ol>
          <p style={{ marginBottom: "16px" }}>
            The tool works instantly and securely in your browser.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Supported Text Formats
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Uppercase (ALL CAPS)</li>
            <li style={{ marginBottom: "8px" }}>Lowercase (all small letters)</li>
            <li style={{ marginBottom: "8px" }}>Title Case (First Letter Capital)</li>
            <li style={{ marginBottom: "8px" }}>Sentence case</li>
            <li style={{ marginBottom: "8px" }}>Capitalize Each Word</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Why Use This Text Case Converter?
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Convert text instantly</li>
            <li style={{ marginBottom: "8px" }}>No login required</li>
            <li style={{ marginBottom: "8px" }}>Free and unlimited usage</li>
            <li style={{ marginBottom: "8px" }}>Works on all devices</li>
            <li style={{ marginBottom: "8px" }}>Saves time in formatting content</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Use Cases
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Formatting blog content</li>
            <li style={{ marginBottom: "8px" }}>Writing emails and documents</li>
            <li style={{ marginBottom: "8px" }}>Coding and development tasks</li>
            <li style={{ marginBottom: "8px" }}>Social media content formatting</li>
            <li style={{ marginBottom: "8px" }}>Academic and student work</li>
          </ul>
        </div>
    ),
    faqs: [
      { q: "Is the text case converter free?", a: "Yes, it is completely free to use with no hidden fees." },
      { q: "Does it support camelCase?", a: "Yes, our tool supports camelCase, PascalCase, and other programming formats." },
      { q: "Is there a character limit?", a: "No, you can paste large amounts of text and convert them instantly." }
    ],
    keywords: ["text case converter", "uppercase to lowercase converter", "change text case online", "title case converter", "convert text online"]
  },
  "password-generator": {
    id: "password-generator",
    name: "Password Generator",
    shortIntro: "Looking for a strong password generator to create secure passwords instantly? This free password generator helps you generate strong, random, and secure passwords for your accounts. You can customize length, include symbols, numbers, and uppercase letters to create highly secure passwords. No login required — generate unlimited passwords instantly in your browser.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Whether you need a password for email, banking, social media, or development purposes, this tool ensures your passwords are strong and hard to crack. Use this random password generator to improve your online security and protect your accounts from unauthorized access.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How to Generate Strong Password
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "10px" }}>Choose password length</li>
            <li style={{ marginBottom: "10px" }}>Select options (uppercase, lowercase, numbers, symbols)</li>
            <li style={{ marginBottom: "10px" }}>Click generate</li>
            <li style={{ marginBottom: "10px" }}>Copy and use your secure password</li>
          </ol>
          <p style={{ marginBottom: "16px" }}>
            Passwords are generated instantly and securely in your browser.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Why Use This Password Generator?
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Create strong and secure passwords</li>
            <li style={{ marginBottom: "8px" }}>Protect accounts from hacking</li>
            <li style={{ marginBottom: "8px" }}>No login or signup required</li>
            <li style={{ marginBottom: "8px" }}>100% free and unlimited usage</li>
            <li style={{ marginBottom: "8px" }}>Instant password generation</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Types of Passwords You Can Generate
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Random passwords</li>
            <li style={{ marginBottom: "8px" }}>Strong passwords</li>
            <li style={{ marginBottom: "8px" }}>Secure passwords with symbols</li>
            <li style={{ marginBottom: "8px" }}>Alphanumeric passwords</li>
            <li style={{ marginBottom: "8px" }}>Custom length passwords</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Use Cases
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Email account security</li>
            <li style={{ marginBottom: "8px" }}>Banking and financial accounts</li>
            <li style={{ marginBottom: "8px" }}>Social media login protection</li>
            <li style={{ marginBottom: "8px" }}>Developer testing and systems</li>
            <li style={{ marginBottom: "8px" }}>Personal and business accounts</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Password Security Tips
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Use at least 12–16 characters</li>
            <li style={{ marginBottom: "8px" }}>Include symbols, numbers, and uppercase letters</li>
            <li style={{ marginBottom: "8px" }}>Avoid using personal information</li>
            <li style={{ marginBottom: "8px" }}>Never reuse the same password</li>
            <li style={{ marginBottom: "8px" }}>Use a password manager for storage</li>
          </ul>
        </div>
    ),
    faqs: [
      { q: "Is it safe to generate passwords online?", a: "Our generator runs locally in your browser. No password ever leaves your device or is stored on our servers." },
      { q: "Why should I use a unique password?", a: "Using the same password for multiple sites means one breach can compromise all your accounts. Unique passwords prevent this risk." },
      { q: "What length is recommended?", a: "We recommend at least 12 characters for standard security and 16+ for sensitive accounts like banking." }
    ],
    keywords: ["password generator", "strong password generator", "random password generator", "secure password generator", "generate strong password online"]
  },
  "json-formatter": {
    id: "json-formatter",
    name: "JSON Formatter",
    shortIntro: "Looking for a JSON formatter online to beautify and validate JSON instantly? This free JSON formatter helps you format, beautify, and validate JSON data in seconds. It makes your JSON readable and easy to debug without any login or installation. Perfect for developers, testers, and anyone working with APIs or structured data.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            You can quickly format JSON, fix invalid JSON errors, and improve readability for debugging or development purposes.
          </p>
          <p style={{ marginBottom: "16px" }}>
            This JSON beautifier works directly in your browser and ensures fast and secure processing.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How to Use JSON Formatter
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "10px" }}>Paste your JSON data</li>
            <li style={{ marginBottom: "10px" }}>Click on "Format JSON"</li>
            <li style={{ marginBottom: "10px" }}>View formatted and structured output</li>
            <li style={{ marginBottom: "10px" }}>Copy or download the result</li>
          </ol>
          <p style={{ marginBottom: "16px" }}>
            The tool instantly formats JSON and highlights errors if present.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Why Use This JSON Formatter?
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Beautify JSON instantly</li>
            <li style={{ marginBottom: "8px" }}>Validate JSON structure</li>
            <li style={{ marginBottom: "8px" }}>Detect and fix errors</li>
            <li style={{ marginBottom: "8px" }}>Improve readability for debugging</li>
            <li style={{ marginBottom: "8px" }}>No login required and completely free</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            What is JSON Formatting?
          </h3>
          <p style={{ marginBottom: "12px" }}>
            JSON formatting is the process of organizing JSON data into a readable structure with proper indentation and spacing. It helps developers understand and debug JSON more efficiently.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Formatted JSON is easier to read, edit, and share.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Use Cases
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>API response formatting</li>
            <li style={{ marginBottom: "8px" }}>Debugging JSON data</li>
            <li style={{ marginBottom: "8px" }}>Development and coding tasks</li>
            <li style={{ marginBottom: "8px" }}>Data visualization and testing</li>
            <li style={{ marginBottom: "8px" }}>Working with configuration files</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Features
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Instant JSON formatting</li>
            <li style={{ marginBottom: "8px" }}>Error detection and validation</li>
            <li style={{ marginBottom: "8px" }}>Copy formatted JSON easily</li>
            <li style={{ marginBottom: "8px" }}>Works in browser (no upload required)</li>
            <li style={{ marginBottom: "8px" }}>Fast and lightweight tool</li>
          </ul>
        </div>
    ),
    faqs: [
      { q: "Does the tool validate JSON?", a: "Yes, it will identify common syntax errors like missing commas or quotes." },
      { q: "Can I minify JSON?", a: "Yes, we provide both beautify (format) and minify (compact) options." },
      { q: "Is my JSON data kept private?", a: "Yes, formatting is done entirely on your computer via JavaScript. We never see your data." }
    ],
    keywords: ["json formatter online", "json beautifier", "format json online", "json viewer", "json validator"]
  },
  "word-counter": {
    id: "word-counter",
    name: "Word Counter",
    shortIntro: "Looking for a free word counter online to count words, characters, and sentences instantly? This word counter tool helps you count words, characters, spaces, and sentences in real-time. It is perfect for writers, students, bloggers, and professionals who need quick and accurate text analysis. No login required — use this free word counter online anytime.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Whether you're writing an essay, blog post, or social media content, this tool helps you stay within word limits and improve your writing.
          </p>
          <p style={{ marginBottom: "16px" }}>
            It works instantly in your browser and provides accurate results without any delay.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How to Use Word Counter
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "10px" }}>Paste or type your text</li>
            <li style={{ marginBottom: "10px" }}>Instantly see word and character count</li>
            <li style={{ marginBottom: "10px" }}>Edit your text as needed</li>
            <li style={{ marginBottom: "10px" }}>Copy or download results</li>
          </ol>
          <p style={{ marginBottom: "16px" }}>
            The tool updates counts in real-time as you type.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Why Use This Word Counter?
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Count words and characters instantly</li>
            <li style={{ marginBottom: "8px" }}>Track sentence and paragraph count</li>
            <li style={{ marginBottom: "8px" }}>No login or signup required</li>
            <li style={{ marginBottom: "8px" }}>Free and unlimited usage</li>
            <li style={{ marginBottom: "8px" }}>Works on all devices</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            What is Word Count?
          </h3>
          <p style={{ marginBottom: "12px" }}>
            Word count is the total number of words in a piece of text. It is commonly used in writing, blogging, academic assignments, and SEO to ensure content meets specific length requirements.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Tracking word count helps improve readability and maintain consistency in writing.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Use Cases
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Writing essays and assignments</li>
            <li style={{ marginBottom: "8px" }}>Blog content creation</li>
            <li style={{ marginBottom: "8px" }}>SEO content optimization</li>
            <li style={{ marginBottom: "8px" }}>Social media post limits</li>
            <li style={{ marginBottom: "8px" }}>Professional writing tasks</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Features
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Real-time word count</li>
            <li style={{ marginBottom: "8px" }}>Character count (with and without spaces)</li>
            <li style={{ marginBottom: "8px" }}>Sentence and paragraph count</li>
            <li style={{ marginBottom: "8px" }}>Instant updates</li>
            <li style={{ marginBottom: "8px" }}>Simple and clean interface</li>
          </ul>
        </div>
    ),
    faqs: [
      { q: "Is the word count accurate?", a: "Yes, we use standardized counting algorithms used by professional editors." },
      { q: "Does it work in real-time?", a: "Yes, as you type in the box, the numbers update immediately." },
      { q: "Can I count characters without spaces?", a: "Yes, we provide both metrics: with and without spaces." }
    ],
    keywords: ["word counter", "character counter", "online word count tool", "count words online"]
  },
  "qr-generator": {
    id: "qr-generator",
    name: "QR Code Generator",
    shortIntro: "Looking for a free QR code generator to create QR codes instantly? This QR code generator allows you to create QR codes for URLs, text, email, phone numbers, and more. You can generate QR codes online without login and download them instantly. It is fast, simple, and works directly in your browser.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Create QR codes for websites, business cards, social media, or personal use. This free QR generator is perfect for marketers, developers, students, and business owners.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Generate unlimited QR codes quickly and easily with no restrictions.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How to Generate QR Code
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "10px" }}>Enter your data (URL, text, etc.)</li>
            <li style={{ marginBottom: "10px" }}>Click on "Generate QR Code"</li>
            <li style={{ marginBottom: "10px" }}>Preview your QR code instantly</li>
            <li style={{ marginBottom: "10px" }}>Download or share the QR code</li>
          </ol>
          <p style={{ marginBottom: "16px" }}>
            The process is fast and works directly in your browser.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Why Use This QR Code Generator?
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Create QR codes instantly</li>
            <li style={{ marginBottom: "8px" }}>No login or signup required</li>
            <li style={{ marginBottom: "8px" }}>Free and unlimited usage</li>
            <li style={{ marginBottom: "8px" }}>Works on mobile and desktop</li>
            <li style={{ marginBottom: "8px" }}>Fast and secure processing</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            What is a QR Code?
          </h3>
          <p style={{ marginBottom: "12px" }}>
            A QR code (Quick Response code) is a type of barcode that can store information such as URLs, text, or contact details. It can be scanned using smartphones to quickly access information.
          </p>
          <p style={{ marginBottom: "16px" }}>
            QR codes are widely used in marketing, payments, and digital communication.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Use Cases
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Website and URL sharing</li>
            <li style={{ marginBottom: "8px" }}>Business cards and contact details</li>
            <li style={{ marginBottom: "8px" }}>Marketing campaigns</li>
            <li style={{ marginBottom: "8px" }}>Event tickets and passes</li>
            <li style={{ marginBottom: "8px" }}>Product packaging and labels</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Features
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Instant QR code generation</li>
            <li style={{ marginBottom: "8px" }}>Multiple data types supported</li>
            <li style={{ marginBottom: "8px" }}>Download in high quality</li>
            <li style={{ marginBottom: "8px" }}>Works in browser (no installation)</li>
            <li style={{ marginBottom: "8px" }}>Simple and user-friendly interface</li>
          </ul>
        </div>
    ),
    faqs: [
      { q: "Are the QR codes permanent?", a: "Yes, static QR codes do not expire." },
      { q: "Do I need to pay to create a QR code?", a: "No, our generator is completely free." },
      { q: "Can I use it for my business?", a: "Yes, there are no limitations for commercial use." }
    ],
    keywords: ["qr code generator", "free qr generator", "create qr code online", "generate qr code", "qr code maker"]
  },
  "base64-converter": {
    id: "base64-converter",
    name: "Base64 Converter",
    shortIntro: "Looking for a Base64 encoder and decoder online? This free Base64 converter allows you to encode text to Base64 and decode Base64 back to text instantly. It works directly in your browser without login and provides fast and accurate results. Perfect for developers, testers, and anyone working with encoded data.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            You can easily convert text to Base64 or decode Base64 strings in seconds. This tool is useful for API development, data encoding, debugging, and secure data transfer.
          </p>
          <p style={{ marginBottom: "16px" }}>
            No installation required — everything runs securely in your browser.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How to Use Base64 Converter
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "10px" }}>Enter your text or Base64 string</li>
            <li style={{ marginBottom: "10px" }}>Choose encode or decode option</li>
            <li style={{ marginBottom: "10px" }}>Get instant results</li>
            <li style={{ marginBottom: "10px" }}>Copy the output</li>
          </ol>
          <p style={{ marginBottom: "16px" }}>
            The conversion happens instantly and securely in your browser.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Why Use This Base64 Converter?
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Encode and decode Base64 instantly</li>
            <li style={{ marginBottom: "8px" }}>No login or signup required</li>
            <li style={{ marginBottom: "8px" }}>Free and unlimited usage</li>
            <li style={{ marginBottom: "8px" }}>Fast and secure processing</li>
            <li style={{ marginBottom: "8px" }}>Works on all devices</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            What is Base64 Encoding?
          </h3>
          <p style={{ marginBottom: "12px" }}>
            Base64 is a method of encoding binary data into text format using a set of 64 characters. It is commonly used to transmit data over systems that handle text only.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Base64 encoding is widely used in APIs, email attachments, and data transfer.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Use Cases
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Encoding data for APIs</li>
            <li style={{ marginBottom: "8px" }}>Decoding Base64 responses</li>
            <li style={{ marginBottom: "8px" }}>Email attachments and file transfer</li>
            <li style={{ marginBottom: "8px" }}>Debugging encoded data</li>
            <li style={{ marginBottom: "8px" }}>Secure data transmission</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Features
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Encode text to Base64</li>
            <li style={{ marginBottom: "8px" }}>Decode Base64 to text</li>
            <li style={{ marginBottom: "8px" }}>Instant results</li>
            <li style={{ marginBottom: "8px" }}>Works in browser (no upload required)</li>
            <li style={{ marginBottom: "8px" }}>Simple and user-friendly interface</li>
          </ul>
        </div>
    ),
    faqs: [
      { q: "Is Base64 encoding secure?", a: "No, Base64 is only an encoding format, not encryption. It is easily reversible." },
      { q: "Why use Base64 for images?", a: "It allows you to embed images directly in HTML/CSS, reducing the number of HTTP requests." },
      { q: "Is there a size limit?", a: "For best performance in the browser, try to keep data under 10MB." }
    ],
    keywords: ["base64 converter", "base64 encoder decoder", "encode base64 online", "decode base64 online", "base64 tool"]
  },
  "url-converter": {
    id: "url-converter",
    name: "URL Converter",
    shortIntro: "Looking for a URL encoder and decoder online? This free URL encoder and decoder tool allows you to encode URLs into a safe format and decode encoded URLs back to readable text instantly. It works directly in your browser with no login required. Perfect for developers, testers, and anyone working with web URLs and query parameters.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Easily encode URL strings for safe transmission or decode encoded URLs to understand their original format. This tool is useful for handling special characters, debugging APIs, and working with query strings.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Fast, secure, and completely free to use.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How to Use URL Encoder & Decoder
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "10px" }}>Enter your URL or encoded string</li>
            <li style={{ marginBottom: "10px" }}>Click on "Encode" or "Decode"</li>
            <li style={{ marginBottom: "10px" }}>Get instant result</li>
            <li style={{ marginBottom: "10px" }}>Copy the output</li>
          </ol>
          <p style={{ marginBottom: "16px" }}>
            The tool processes data instantly in your browser.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Why Use This URL Encoder & Decoder?
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Encode URLs safely for web use</li>
            <li style={{ marginBottom: "8px" }}>Decode URL-encoded strings instantly</li>
            <li style={{ marginBottom: "8px" }}>No login or signup required</li>
            <li style={{ marginBottom: "8px" }}>Free and unlimited usage</li>
            <li style={{ marginBottom: "8px" }}>Fast and secure processing</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            What is URL Encoding?
          </h3>
          <p style={{ marginBottom: "12px" }}>
            URL encoding is the process of converting characters into a format that can be safely transmitted over the internet. Special characters such as spaces, symbols, and non-ASCII characters are encoded into a standard format.
          </p>
          <p style={{ marginBottom: "16px" }}>
            For example, a space is encoded as %20 in URLs.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Use Cases
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Encoding query parameters in URLs</li>
            <li style={{ marginBottom: "8px" }}>Decoding API request URLs</li>
            <li style={{ marginBottom: "8px" }}>Handling special characters in web links</li>
            <li style={{ marginBottom: "8px" }}>Debugging encoded data</li>
            <li style={{ marginBottom: "8px" }}>Working with web development projects</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Features
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Encode URLs instantly</li>
            <li style={{ marginBottom: "8px" }}>Decode URL-encoded strings</li>
            <li style={{ marginBottom: "8px" }}>Works in browser (no installation)</li>
            <li style={{ marginBottom: "8px" }}>Fast and lightweight tool</li>
            <li style={{ marginBottom: "8px" }}>Simple and user-friendly interface</li>
          </ul>
        </div>
    ),
    faqs: [
      { q: "What is URL decoding?", a: "Decoding is the reverse process: it turns encoded characters like %20 back into their original form (a space)." },
      { q: "Are all characters encoded?", a: "Only special characters and non-ASCII characters are encoded; standard alphanumeric characters remain the same." },
      { q: "Is this tool free?", a: "Yes, it is completely free to use." }
    ],
    keywords: ["url encoder", "url decoder", "encode url online", "decode url online", "url encode decode tool"]
  },
  "lorem-ipsum-generator": {
    id: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    shortIntro: "Looking for a Lorem Ipsum generator to create placeholder text instantly? This free Lorem Ipsum generator helps you generate dummy text for design, development, and content layout. You can create paragraphs, sentences, or words quickly without login. Perfect for designers, developers, and content creators who need placeholder text.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Generate Lorem Ipsum text for websites, UI design, wireframes, or mockups. This tool allows you to customize the number of paragraphs, sentences, or words easily.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Fast, simple, and works directly in your browser.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How to Use Lorem Ipsum Generator
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "10px" }}>Select number of paragraphs, sentences, or words</li>
            <li style={{ marginBottom: "10px" }}>Click on "Generate"</li>
            <li style={{ marginBottom: "10px" }}>Get instant placeholder text</li>
            <li style={{ marginBottom: "10px" }}>Copy and use in your project</li>
          </ol>
          <p style={{ marginBottom: "16px" }}>
            The text is generated instantly in your browser.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Why Use This Lorem Ipsum Generator?
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Generate placeholder text instantly</li>
            <li style={{ marginBottom: "8px" }}>Customize paragraphs, sentences, or words</li>
            <li style={{ marginBottom: "8px" }}>No login or signup required</li>
            <li style={{ marginBottom: "8px" }}>Free and unlimited usage</li>
            <li style={{ marginBottom: "8px" }}>Works on all devices</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            What is Lorem Ipsum?
          </h3>
          <p style={{ marginBottom: "12px" }}>
            Lorem Ipsum is a placeholder text commonly used in design and publishing. It helps designers focus on layout and visual elements without being distracted by real content.
          </p>
          <p style={{ marginBottom: "16px" }}>
            It has been used in the printing and typesetting industry for centuries.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Use Cases
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Website design and UI mockups</li>
            <li style={{ marginBottom: "8px" }}>Graphic design and layouts</li>
            <li style={{ marginBottom: "8px" }}>Content placeholders</li>
            <li style={{ marginBottom: "8px" }}>Wireframes and prototypes</li>
            <li style={{ marginBottom: "8px" }}>Printing and publishing projects</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Features
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Generate Lorem Ipsum instantly</li>
            <li style={{ marginBottom: "8px" }}>Customizable text length</li>
            <li style={{ marginBottom: "8px" }}>Copy text easily</li>
            <li style={{ marginBottom: "8px" }}>Works in browser (no installation)</li>
            <li style={{ marginBottom: "8px" }}>Simple and user-friendly interface</li>
          </ul>
        </div>
    ),
    faqs: [
      { q: "Is Lorem Ipsum actual Latin?", a: "It is derived from Latin literature but is now mostly nonsensical 'pseudo-Latin'." },
      { q: "Can I generate thousands of words?", a: "Yes, our tool can generate large amounts of text in an instant." },
      { q: "Is this free for commercial use?", a: "Yes, Lorem Ipsum is public domain and free for everyone." }
    ],
    keywords: ["lorem ipsum generator", "dummy text generator", "placeholder text generator", "generate lorem ipsum online", "lorem ipsum text"]
  },
  "random-number-generator": {
    id: "random-number-generator",
    name: "Random Number Generator",
    shortIntro: "Looking for a random number generator online? This free random number generator helps you generate random numbers instantly within a custom range. You can choose minimum and maximum values and generate numbers for games, testing, or decision-making. No login required — fast, simple, and completely free.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Generate random numbers for lottery picks, games, simulations, or development tasks. This tool ensures quick and reliable number generation directly in your browser.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Perfect for students, developers, teachers, and anyone who needs random numbers instantly.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How to Generate Random Numbers
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "10px" }}>Enter minimum value</li>
            <li style={{ marginBottom: "10px" }}>Enter maximum value</li>
            <li style={{ marginBottom: "10px" }}>Click on "Generate"</li>
            <li style={{ marginBottom: "10px" }}>Get a random number instantly</li>
          </ol>
          <p style={{ marginBottom: "16px" }}>
            The tool generates numbers in real-time with accurate results.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Why Use This Random Number Generator?
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Generate random numbers instantly</li>
            <li style={{ marginBottom: "8px" }}>Customize number range</li>
            <li style={{ marginBottom: "8px" }}>No login or signup required</li>
            <li style={{ marginBottom: "8px" }}>Free and unlimited usage</li>
            <li style={{ marginBottom: "8px" }}>Works on all devices</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            What is a Random Number Generator?
          </h3>
          <p style={{ marginBottom: "12px" }}>
            A random number generator (RNG) is a tool that generates numbers randomly within a defined range. It is commonly used in games, simulations, testing, and decision-making processes.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Random number generators ensure unbiased and unpredictable results.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Use Cases
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Lottery number generation</li>
            <li style={{ marginBottom: "8px" }}>Games and simulations</li>
            <li style={{ marginBottom: "8px" }}>Random selection or decision making</li>
            <li style={{ marginBottom: "8px" }}>Testing and development</li>
            <li style={{ marginBottom: "8px" }}>Classroom activities and learning</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Features
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Instant number generation</li>
            <li style={{ marginBottom: "8px" }}>Custom number range</li>
            <li style={{ marginBottom: "8px" }}>Fast and lightweight tool</li>
            <li style={{ marginBottom: "8px" }}>Works in browser (no installation)</li>
            <li style={{ marginBottom: "8px" }}>Simple and user-friendly interface</li>
          </ul>
        </div>
    ),
    faqs: [
      { q: "Are the numbers truly random?", a: "They are generated by a high-quality pseudo-random algorithm, suitable for non-cryptographic purposes." },
      { q: "Can I generate decimal numbers?", a: "Currently, our tool focuses on whole numbers (integers)." },
      { q: "Is there a limit on the range?", a: "You can generate numbers up to extremely high values supported by standard JavaScript numbering." }
    ],
    keywords: ["random number generator", "generate random number", "number generator online", "rng tool", "random number picker"]
  },
  "text-sorter": {
    id: "text-sorter",
    name: "Text Sorter",
    shortIntro: "Looking for a text sorter online to sort lines alphabetically or numerically? This free text sorter tool allows you to sort text instantly in ascending or descending order. You can organize lists, names, numbers, or any text data quickly and efficiently. No login required — simple, fast, and completely free.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Easily sort text alphabetically (A to Z or Z to A) or sort numbers in ascending or descending order. This tool is perfect for managing lists, cleaning data, or organizing content.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Works instantly in your browser with no installation required.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How to Use Text Sorter
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "10px" }}>Paste your text (one item per line)</li>
            <li style={{ marginBottom: "10px" }}>Choose sorting type (A–Z, Z–A, numeric)</li>
            <li style={{ marginBottom: "10px" }}>Click on "Sort"</li>
            <li style={{ marginBottom: "10px" }}>Get sorted text instantly</li>
          </ol>
          <p style={{ marginBottom: "16px" }}>
            You can copy or download the sorted result easily.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Why Use This Text Sorter?
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Sort text instantly</li>
            <li style={{ marginBottom: "8px" }}>Alphabetical and numeric sorting</li>
            <li style={{ marginBottom: "8px" }}>No login or signup required</li>
            <li style={{ marginBottom: "8px" }}>Free and unlimited usage</li>
            <li style={{ marginBottom: "8px" }}>Works on all devices</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            What is Text Sorting?
          </h3>
          <p style={{ marginBottom: "12px" }}>
            Text sorting is the process of arranging text in a specific order, such as alphabetical (A–Z or Z–A) or numerical order. It helps organize data and makes it easier to read and analyze.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Sorting text is commonly used in data processing, programming, and content management.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Use Cases
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Sorting lists of names or items</li>
            <li style={{ marginBottom: "8px" }}>Organizing data in spreadsheets</li>
            <li style={{ marginBottom: "8px" }}>Cleaning and formatting text</li>
            <li style={{ marginBottom: "8px" }}>Programming and development tasks</li>
            <li style={{ marginBottom: "8px" }}>Managing large text datasets</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Features
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Alphabetical sorting (A–Z, Z–A)</li>
            <li style={{ marginBottom: "8px" }}>Numeric sorting</li>
            <li style={{ marginBottom: "8px" }}>Instant results</li>
            <li style={{ marginBottom: "8px" }}>Works in browser (no installation)</li>
            <li style={{ marginBottom: "8px" }}>Simple and user-friendly interface</li>
          </ul>
        </div>
    ),
    faqs: [
      { q: "Can I sort numbers?", a: "Yes, our natural sorting algorithm handles mixed text and numerical values correctly." },
      { q: "How do I remove duplicates?", a: "Simply click the 'Remove Duplicates' button before or after sorting." },
      { q: "Is there a limit to the number of lines?", a: "No, our tool can efficiently handle thousands of lines at once." }
    ],
    keywords: ["text sorter", "sort text online", "alphabetical order tool", "sort lines alphabetically", "text sorting tool"]
  },
  "color-converter": {
    id: "color-converter",
    name: "Color Converter",
    shortIntro: "Looking for a color code converter to convert HEX, RGB, or HSL values? This free color code converter allows you to convert colors instantly between HEX, RGB, and HSL formats. It helps designers and developers quickly switch between color formats for web and design projects. No login required — fast, simple, and completely free.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Easily convert HEX to RGB, RGB to HEX, or HSL values in seconds. This tool is perfect for web design, UI development, and graphic design workflows.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Works instantly in your browser with accurate color conversion.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How to Use Color Code Converter
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "10px" }}>Enter your color value (HEX, RGB, or HSL)</li>
            <li style={{ marginBottom: "10px" }}>Select conversion format</li>
            <li style={{ marginBottom: "10px" }}>Get instant converted result</li>
            <li style={{ marginBottom: "10px" }}>Copy the output</li>
          </ol>
          <p style={{ marginBottom: "16px" }}>
            The tool processes color conversion instantly.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Why Use This Color Code Converter?
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Convert HEX, RGB, and HSL instantly</li>
            <li style={{ marginBottom: "8px" }}>Accurate color conversion</li>
            <li style={{ marginBottom: "8px" }}>No login or signup required</li>
            <li style={{ marginBottom: "8px" }}>Free and unlimited usage</li>
            <li style={{ marginBottom: "8px" }}>Works on all devices</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            What is Color Code Conversion?
          </h3>
          <p style={{ marginBottom: "12px" }}>
            Color code conversion is the process of converting color values between different formats such as HEX, RGB, and HSL. These formats are commonly used in web development and design.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Each format represents color differently but refers to the same visual color.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Use Cases
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Web design and UI development</li>
            <li style={{ marginBottom: "8px" }}>Graphic design and branding</li>
            <li style={{ marginBottom: "8px" }}>CSS color styling</li>
            <li style={{ marginBottom: "8px" }}>Converting colors for different platforms</li>
            <li style={{ marginBottom: "8px" }}>Design system management</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Features
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>HEX to RGB conversion</li>
            <li style={{ marginBottom: "8px" }}>RGB to HEX conversion</li>
            <li style={{ marginBottom: "8px" }}>HSL conversion support</li>
            <li style={{ marginBottom: "8px" }}>Instant results</li>
            <li style={{ marginBottom: "8px" }}>Simple and user-friendly interface</li>
          </ul>
        </div>
    ),
    faqs: [
      { q: "What is the best format for web development?", a: "HEX or RGB are the most common, though HSL is gaining popularity for its ease of adjustment." },
      { q: "Can I pick a color from a screen?", a: "Yes, using our integrated color picker tool." },
      { q: "Is the tool free to use?", a: "Yes, it is 100% free with no signup." }
    ],
    keywords: ["color code converter", "hex to rgb", "rgb to hex", "color converter online", "hex rgb converter"]
  },
  "bulk-qrcode-generator": {
    id: "bulk-qrcode-generator",
    name: "Bulk QR Generator",
    shortIntro: "Looking for a bulk QR code generator to create multiple QR codes at once? This free bulk QR code generator allows you to generate hundreds of QR codes instantly without login or limits. You can create QR codes for URLs, text, product IDs, or any custom data and download them as ZIP or PDF files. Perfect for businesses, developers, and marketers who need fast and efficient QR code generation.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Easily generate multiple QR codes in bulk for inventory, event tickets, product labels, or marketing campaigns. This tool helps you save time by creating QR codes in seconds.
          </p>
          <p style={{ marginBottom: "16px" }}>
            No installation required — everything works directly in your browser.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How to Generate Bulk QR Codes
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "10px" }}>Enter multiple values (one per line)</li>
            <li style={{ marginBottom: "10px" }}>Click on "Generate QR Codes"</li>
            <li style={{ marginBottom: "10px" }}>Preview all QR codes instantly</li>
            <li style={{ marginBottom: "10px" }}>Download as ZIP or PDF</li>
          </ol>
          <p style={{ marginBottom: "16px" }}>
            The tool processes everything instantly and securely in your browser.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Why Use This Bulk QR Code Generator?
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Generate multiple QR codes instantly</li>
            <li style={{ marginBottom: "8px" }}>No login or signup required</li>
            <li style={{ marginBottom: "8px" }}>Free and unlimited usage</li>
            <li style={{ marginBottom: "8px" }}>Fast and secure processing</li>
            <li style={{ marginBottom: "8px" }}>Works on all devices</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            What is a Bulk QR Code Generator?
          </h3>
          <p style={{ marginBottom: "12px" }}>
            A bulk QR code generator is a tool that allows you to create multiple QR codes at once instead of generating them one by one. It is widely used for handling large datasets efficiently.
          </p>
          <p style={{ marginBottom: "16px" }}>
            This helps save time and improves productivity for businesses and developers.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Use Cases
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Product labeling and inventory tracking</li>
            <li style={{ marginBottom: "8px" }}>Event passes and ticket generation</li>
            <li style={{ marginBottom: "8px" }}>Marketing campaigns and promotions</li>
            <li style={{ marginBottom: "8px" }}>Bulk URL generation</li>
            <li style={{ marginBottom: "8px" }}>Business operations and automation</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Features
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Generate QR codes in bulk</li>
            <li style={{ marginBottom: "8px" }}>Download as ZIP or PDF</li>
            <li style={{ marginBottom: "8px" }}>Instant preview</li>
            <li style={{ marginBottom: "8px" }}>Works in browser (no installation)</li>
            <li style={{ marginBottom: "8px" }}>Simple and user-friendly interface</li>
          </ul>
        </div>
    ),
    faqs: [
      { q: "How many QR codes can I generate at once?", a: "You can easily generate hundreds at once. For best performance, we recommend batches of up to 500." },
      { q: "What is the difference between ZIP and PDF export?", a: "ZIP gives you individual image files for each code, while PDF places them in a print-ready document with labels." },
      { q: "Is my data stored?", a: "No, all generation happens in your browser session. Once you refresh or close the tab, the data is gone." }
    ],
    keywords: ["bulk qr code generator", "generate multiple qr codes", "qr code batch generator", "create qr codes in bulk", "free qr generator online"]
  },
  "pdf-compressor": {
    id: "pdf-compressor",
    name: "PDF Compressor",
    shortIntro: "Looking for a free PDF compressor online to reduce PDF file size without losing quality? This PDF compressor allows you to compress PDF files instantly while maintaining quality. You can reduce PDF size for email, upload, or storage purposes without installing any software. No login required — fast, secure, and completely free.",
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Easily compress large PDF files to smaller sizes for faster sharing and uploads. This tool helps you reduce PDF file size online without compromising readability.
        </p>
        <p style={{ marginBottom: "16px" }}>
          Perfect for students, professionals, and businesses.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          How to Compress PDF Online
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "10px" }}>Upload your PDF file</li>
          <li style={{ marginBottom: "10px" }}>Click on "Compress PDF"</li>
          <li style={{ marginBottom: "10px" }}>Wait for processing</li>
          <li style={{ marginBottom: "10px" }}>Download the compressed file</li>
        </ol>
        <p style={{ marginBottom: "16px" }}>
          The tool compresses PDF files quickly and securely in your browser.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Why Use This PDF Compressor?
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Reduce PDF file size instantly</li>
          <li style={{ marginBottom: "8px" }}>Maintain document quality</li>
          <li style={{ marginBottom: "8px" }}>No login or signup required</li>
          <li style={{ marginBottom: "8px" }}>Free and unlimited usage</li>
          <li style={{ marginBottom: "8px" }}>Works on all devices</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          What is PDF Compression?
        </h3>
        <p style={{ marginBottom: "12px" }}>
          PDF compression is the process of reducing the file size of a PDF document while keeping its content readable. It removes unnecessary data and optimizes images inside the PDF.
        </p>
        <p style={{ marginBottom: "16px" }}>
          Compressed PDFs are easier to share, upload, and store.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Use Cases
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Email attachments</li>
          <li style={{ marginBottom: "8px" }}>Website uploads</li>
          <li style={{ marginBottom: "8px" }}>Document sharing</li>
          <li style={{ marginBottom: "8px" }}>Storage optimization</li>
          <li style={{ marginBottom: "8px" }}>Business and academic use</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Features
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Fast PDF compression</li>
          <li style={{ marginBottom: "8px" }}>Maintain quality output</li>
          <li style={{ marginBottom: "8px" }}>Works in browser (no installation)</li>
          <li style={{ marginBottom: "8px" }}>Secure processing</li>
          <li style={{ marginBottom: "8px" }}>Simple and user-friendly interface</li>
        </ul>
      </div>
    ),
    faqs: [
      { q: "Is the PDF compressor completely free?", a: "Yes, 100% free with no hidden charges, no sign-up, and no file limits per session." },
      { q: "Is my PDF safe to compress online?", a: "Absolutely. All processing happens locally inside your browser. Your file is never uploaded to any server." },
      { q: "Why didn't the file size reduce much?", a: "PDFs that are already optimized or contain mostly text have little room for further reduction. The tool removes redundant data, but highly efficient PDFs may not see a significant size change." },
      { q: "Can I compress encrypted PDFs?", a: "Our tool attempts to process encrypted PDFs, but some security restrictions may prevent modification. Try removing the password first if possible." },
      { q: "What is the maximum file size I can compress?", a: "You can compress PDF files up to 100 MB using our free online tool." }
    ],
    keywords: ["pdf compressor", "compress pdf online", "reduce pdf size", "free pdf compressor", "compress pdf without losing quality"]
  }
};

