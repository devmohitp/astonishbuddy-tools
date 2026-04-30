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
    shortIntro: "Our free image compressor allows you to reduce image size without losing quality. It supports JPG, PNG, and WebP formats, making it perfect for optimizing web images, social media posts, and personal collections. No signup is required, and the tool is fast and secure, processing images directly in your browser. Whether you need to compress image online to save storage space or reduce image size for faster website loading, our image compressor free tool provides professional results instantly. Compressing images under 50KB or 100KB has never been easier while maintaining excellent visual clarity.",
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Images are essential for websites, social media, and digital content, but large image files can slow down
          your website and affect performance. If your images take too long to load, visitors may leave your site,
          and search engines like Google may rank your website lower.
        </p>
        <p style={{ marginBottom: "16px" }}>
          That&apos;s where an image compressor becomes useful. With a free online image compressor, you can reduce
          image size without losing quality. This helps improve website speed, save storage space, and enhance user
          experience.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          What is Image Compression?
        </h3>
        <p style={{ marginBottom: "12px" }}>
          Image compression is the process of reducing the file size of an image while maintaining acceptable visual
          quality. It removes unnecessary data from the image file so that it becomes smaller and faster to load.
        </p>
        <p style={{ marginBottom: "4px" }}>There are two types of image compression:</p>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "6px" }}>
            <strong style={{ color: "var(--text-primary)" }}>Lossy Compression:</strong> Reduces file size
            significantly but may slightly affect image quality.
          </li>
          <li style={{ marginBottom: "6px" }}>
            <strong style={{ color: "var(--text-primary)" }}>Lossless Compression:</strong> Keeps the original
            quality but reduces file size less compared to lossy compression.
          </li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          How it Works?
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong style={{ color: "var(--text-primary)" }}>Upload Your Image</strong> — Click on the upload button
            and select the image from your device.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong style={{ color: "var(--text-primary)" }}>Adjust Quality</strong> — Move the slider to set your desired compression level.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong style={{ color: "var(--text-primary)" }}>Process Instantly</strong> — The tool compresses the image in real-time in your browser.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong style={{ color: "var(--text-primary)" }}>Download</strong> — Save the optimized image to your device immediately.
          </li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Benefits of Image Compression
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Faster website loading speeds</li>
          <li style={{ marginBottom: "8px" }}>Improved SEO rankings on Google</li>
          <li style={{ marginBottom: "8px" }}>Reduced storage costs for servers</li>
          <li style={{ marginBottom: "8px" }}>Better user experience on mobile devices</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Supported Formats
        </h3>
        <p style={{ marginBottom: "16px" }}>
          Our tool supports major image formats including <strong>JPG, JPEG, PNG, and WebP</strong>. We ensure that each format is handled with a specific algorithm to maximize compression while preserving details.
        </p>
      </div>
    ),
    faqs: [
      { q: "How to compress image under 50KB?", a: "To compress an image under 50KB, upload your image and move the quality slider to a lower percentage (e.g., 60-70%) until the preview size shows less than 50KB." },
      { q: "Does compression reduce quality?", a: "Our tool uses advanced smart compression that balances quality and size. While lossy compression removes some data, the visual difference is often unnoticeable to the human eye." },
      { q: "Is this tool free?", a: "Yes, our image compressor is 100% free with no hidden charges, limits, or signup requirements." },
      { q: "Is it safe to upload my photos?", a: "Absolutely. All processing happens locally in your browser. Your images are never uploaded to our servers, ensuring total privacy." }
    ],
    keywords: ["compress image online", "reduce image size", "image compressor free", "compress image under 50KB"]
  },
  "text-case-converter": {
    id: "text-case-converter",
    name: "Text Case Converter",
    shortIntro: "Convert text instantly with our free online case converter tool. Whether you need to change text to UPPERCASE, lowercase, Title Case, or Sentence case, our tool handles it in seconds. Perfect for writers, developers, and students, it also support camelCase and PascalCase for coding needs. No more manual editing—just paste, convert, and go. Improve your productivity and ensure consistent formatting across all your documents with our simple, fast, and secure text utility.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Formatting text correctly is important whether you are writing emails, creating content, coding, or managing
            documents. However, manually changing text case can be time-consuming and prone to errors.
          </p>
          <p style={{ marginBottom: "16px" }}>
            That&apos;s where a Text Case Converter becomes extremely useful. With a free online text case converter,
            you can instantly transform your text into different formats like uppercase, lowercase, title case, or
            camelCase with just one click.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            What is a Text Case Converter?
          </h3>
          <p style={{ marginBottom: "12px" }}>
            A Text Case Converter is an online tool that automatically changes the capitalization of your text based on
            the selected format. Common case formats include UPPERCASE, lowercase, Title Case, and more.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How it works?
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "10px" }}>Paste your text into the input field.</li>
            <li style={{ marginBottom: "10px" }}>Choose the desired transformation (e.g., Uppercase, Title Case).</li>
            <li style={{ marginBottom: "10px" }}>The text is converted instantly in the output area.</li>
            <li style={{ marginBottom: "10px" }}>Click Copy to get your formatted text.</li>
          </ol>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Benefits of Text Case Conversion
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Save time on manual retyping and formatting.</li>
            <li style={{ marginBottom: "8px" }}>Ensure consistency in headings and document titles.</li>
            <li style={{ marginBottom: "8px" }}>Easily switch between coding conventions (camelCase, snake_case).</li>
            <li style={{ marginBottom: "8px" }}>Perfect for social media captions and professional emails.</li>
          </ul>
        </div>
    ),
    faqs: [
      { q: "Is the text case converter free?", a: "Yes, it is completely free to use with no hidden fees." },
      { q: "Does it support camelCase?", a: "Yes, our tool supports camelCase, PascalCase, and other programming formats." },
      { q: "Is there a character limit?", a: "No, you can paste large amounts of text and convert them instantly." }
    ],
    keywords: ["text case converter", "change text case online", "uppercase to lowercase", "title case converter"]
  },
  "password-generator": {
    id: "password-generator",
    name: "Password Generator",
    shortIntro: "Secure your online presence with our free password generator. Create strong, cryptographically secure passwords instantly. Our tool allows you to customize length and include uppercase letters, numbers, and symbols to ensure maximum security against hacking attempts. In a world where data breaches are common, using a random password for each of your accounts is the best defense. No data is sent to our servers; everything is generated locally on your device for ultimate privacy.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            In today&apos;s digital world, passwords are the first line of defense for your online accounts. Using a strong password is essential to protect
            your data from hackers and cyber threats.
          </p>
          <p style={{ marginBottom: "16px" }}>
            A password generator creates unpredictable combinations that are
            extremely difficult to guess or hack.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            What defines a Strong Password?
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "6px" }}>Minimum 12-16 characters long.</li>
            <li style={{ marginBottom: "6px" }}>Combination of letters (A-Z, a-z).</li>
            <li style={{ marginBottom: "6px" }}>Inclusion of numbers (0-9).</li>
            <li style={{ marginBottom: "6px" }}>Inclusion of special symbols (!@#$%^&*).</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How it works?
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "10px" }}>Select the desired length for your password.</li>
            <li style={{ marginBottom: "10px" }}>Toggle options for symbols, numbers, and case.</li>
            <li style={{ marginBottom: "10px" }}>Click Generate to create a new unique password.</li>
            <li style={{ marginBottom: "10px" }}>Copy and store it in your favorite password manager.</li>
          </ol>
        </div>
    ),
    faqs: [
      { q: "Is it safe to generate passwords online?", a: "Our generator runs locally in your browser. No password ever leaves your device or is stored on our servers." },
      { q: "Why should I use a unique password?", a: "Using the same password for multiple sites means one breach can compromise all your accounts. Unique passwords prevent this risk." },
      { q: "What length is recommended?", a: "We recommend at least 12 characters for standard security and 16+ for sensitive accounts like banking." }
    ],
    keywords: ["password generator", "secure password", "random password creator", "strong password generator"]
  },
  "json-formatter": {
    id: "json-formatter",
    name: "JSON Formatter",
    shortIntro: "Clean up and beautify your JSON data with our free online JSON Formatter and validator. It automatically indents your code, making it readable and easy to debug. Whether you're working with APIs or complex configuration files, our tool helps you spot syntax errors instantly. You can also minify your JSON to save bandwidth. Fast, secure, and developer-friendly, this utility ensures your data is perfectly structured every time with zero hassle.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            JSON (JavaScript Object Notation) is essential for modern web development. It is lightweight and easy to read, but raw JSON from APIs is often minified and hard to parse manually.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            What is JSON Formatting?
          </h3>
          <p style={{ marginBottom: "12px" }}>
            Formatting or 'beautifying' JSON involves adding indentation and newlines to minified code to make it human-readable. It helps developers understand the structure of data and find nesting errors easily.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How it works?
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li style={{ marginBottom: "10px" }}>Paste your minified JSON into the editor.</li>
            <li style={{ marginBottom: "10px" }}>The tool automatically detects and formats it.</li>
            <li style={{ marginBottom: "10px" }}>Review any syntax errors highlighted in the console.</li>
            <li style={{ marginBottom: "10px" }}>Copy the formatted output for your project.</li>
          </ol>
        </div>
    ),
    faqs: [
      { q: "Does the tool validate JSON?", a: "Yes, it will identify common syntax errors like missing commas or quotes." },
      { q: "Can I minify JSON?", a: "Yes, we provide both beautify (format) and minify (compact) options." },
      { q: "Is my JSON data kept private?", a: "Yes, formatting is done entirely on your computer via JavaScript. We never see your data." }
    ],
    keywords: ["json formatter", "json beautifier", "validate json online", "minify json"]
  },
  "word-counter": {
    id: "word-counter",
    name: "Word Counter",
    shortIntro: "Count words, characters, and sentences instantly with our free online word counter. Ideal for writers, students, and SEO professionals, it provides real-time statistics as you type or paste your content. It also estimates reading time and calculates character count without spaces. Ensure your articles, essays, and social media posts meet specific length requirements easily. Fast, accurate, and completely free, it's the perfect tool for monitoring your writing progress.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Whether you are writing a blog post, a school essay, or a tweet, word limits matter. Our word counter provides a detailed breakdown of your text structure in real-time.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Key Metrics Tracked
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li>Total Word Count</li>
            <li>Character Count (with and without spaces)</li>
            <li>Sentence and Paragraph counts</li>
            <li>Estimated Reading Time</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Why word count matters for SEO?
          </h3>
          <p style={{ marginBottom: "12px" }}>
            Long-form content (generally 1,000+ words) tends to rank higher on search engines because it often provides more comprehensive information. However, character limits on meta descriptions and titles are also critical for click-through rates.
          </p>
        </div>
    ),
    faqs: [
      { q: "Is the word count accurate?", a: "Yes, we use standardized counting algorithms used by professional editors." },
      { q: "Does it work in real-time?", a: "Yes, as you type in the box, the numbers update immediately." },
      { q: "Can I count characters without spaces?", a: "Yes, we provide both metrics: with and without spaces." }
    ],
    keywords: ["word counter", "character count online", "count words free", "reading time calculator"]
  },
  "qr-generator": {
    id: "qr-generator",
    name: "QR Code Generator",
    shortIntro: "Create custom QR codes for free with our online generator. Simply enter your URL, text, or WiFi details to get a high-quality QR code instantly. Our tool supports various data types and allows you to download your code as a PNG file. Use it for marketing, business cards, restaurant menus, or personal projects. It's fast, easy to use, and requires no registration. Reach your audience effectively with clean, scannable QR codes today.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            QR Codes (Quick Response codes) have revolutionized how we share data. From simple website links to complex WiFi credentials, they offer a touchless way to connect.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How to use the QR Generator?
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li>Enter your URL or text in the input field.</li>
            <li>The QR code previews instantly as you type.</li>
            <li>Select the desired error correction level (High for durability).</li>
            <li>Click Download to save the PNG image.</li>
          </ol>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Where to use QR Codes?
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li>In-store signage and menus.</li>
            <li>Marketing brochures and flyers.</li>
            <li>Adding contact info to business cards.</li>
            <li>Easy WiFi sharing for guests.</li>
          </ul>
        </div>
    ),
    faqs: [
      { q: "Are the QR codes permanent?", a: "Yes, static QR codes do not expire." },
      { q: "Do I need to pay to create a QR code?", a: "No, our generator is completely free." },
      { q: "Can I use it for my business?", a: "Yes, there are no limitations for commercial use." }
    ],
    keywords: ["qr code generator", "create qr code online", "free qr creator", "generate qr code for website"]
  },
  "base64-converter": {
    id: "base64-converter",
    name: "Base64 Converter",
    shortIntro: "Encode and decode data using Base64 format with our fast online tool. Convert text or binary data into Base64 strings for safe transmission, or decode Base64 back into its original form. Essential for web developers and data architects, this tool handles complex encoding tasks in seconds. It ensures your data remains intact across systems that handle only text. No signup required, secure processing in-browser, and completely free for all your development needs.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It is widely used when there is a need to encode binary data that needs to be stored and transferred over media that are designed to deal with text.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Common Use Cases
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li>Transferring images in JSON or XML.</li>
            <li>Encoding small images for CSS DataURIs.</li>
            <li>Dealing with basic authentication headers.</li>
            <li>Transferring attachments in emails (MIME).</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How it works?
          </h3>
          <p>Base64 uses 64 characters (A-Z, a-z, 0-9, +, /) to represent binary data. Every three bytes of binary data are converted into four characters of Base64 text.</p>
        </div>
    ),
    faqs: [
      { q: "Is Base64 encoding secure?", a: "No, Base64 is only an encoding format, not encryption. It is easily reversible." },
      { q: "Why use Base64 for images?", a: "It allows you to embed images directly in HTML/CSS, reducing the number of HTTP requests." },
      { q: "Is there a size limit?", a: "For best performance in the browser, try to keep data under 10MB." }
    ],
    keywords: ["base64 converter", "base64 encode online", "base64 decode", "text to base64"]
  },
  "url-converter": {
    id: "url-converter",
    name: "URL Converter",
    shortIntro: "Encode or decode URLs safely with our free online URL converter. It transforms special characters into a format that can be transmitted over the internet without errors. Whether you're building a URL query string or extracting data from a link, our tool makes the process simple and instant. Protect your web links and ensure they work across all browsers and servers. Fast, reliable, and secure utility for all your web development and sharing tasks.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            URL encoding, also known as 'percent-encoding', is a mechanism for encoding information in a Uniform Resource Identifier (URI). Characters that are not allowed in a URL must be encoded.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Why encode a URL?
          </h3>
          <p style={{ marginBottom: "12px" }}>
            Certain characters like spaces, question marks, and ampersands have special meanings in URLs. If you want to use these characters as part of your data, they must be converted to their percent-encoded equivalents (e.g., Space becomes %20).
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Common mappings
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
              <li>Space &rarr; %20</li>
              <li>! &rarr; %21</li>
              <li># &rarr; %23</li>
              <li>$ &rarr; %24</li>
          </ul>
        </div>
    ),
    faqs: [
      { q: "What is URL decoding?", a: "Decoding is the reverse process: it turns encoded characters like %20 back into their original form (a space)." },
      { q: "Are all characters encoded?", a: "Only special characters and non-ASCII characters are encoded; standard alphanumeric characters remain the same." },
      { q: "Is this tool free?", a: "Yes, it is completely free to use." }
    ],
    keywords: ["url encoder", "url decoder online", "encode url free", "percent encoding tool"]
  },
  "lorem-ipsum-generator": {
    id: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    shortIntro: "Generate high-quality placeholder text for your designs and layouts with our free Lorem Ipsum generator. Instantly create paragraphs, sentences, or words to fill your mockups and focus on the visual structure of your project. Perfect for designers, developers, and publishers, our tool provides classic dummy text that has been the industry standard for centuries. Fast, customizable, and easy to use, it's the ultimate utility for streamlining your design workflow without the distraction of real content.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Why use Lorem Ipsum?
          </h3>
          <p style={{ marginBottom: "12px" }}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Using Lorem Ipsum makes the distribution of letters look more natural compared to 'Content here, content here'.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How it works?
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li>Select if you want Paragraphs, Sentences, or Words.</li>
            <li>Enter the quantity you need.</li>
            <li>Click Generate to get your placeholder text instantly.</li>
            <li>Use the Copy button to take it to your design tool.</li>
          </ol>
        </div>
    ),
    faqs: [
      { q: "Is Lorem Ipsum actual Latin?", a: "It is derived from Latin literature but is now mostly nonsensical 'pseudo-Latin'." },
      { q: "Can I generate thousands of words?", a: "Yes, our tool can generate large amounts of text in an instant." },
      { q: "Is this free for commercial use?", a: "Yes, Lorem Ipsum is public domain and free for everyone." }
    ],
    keywords: ["lorem ipsum generator", "dummy text creator", "placeholder text free", "generate lorem ipsum online"]
  },
  "random-number-generator": {
    id: "random-number-generator",
    name: "Random Number Generator",
    shortIntro: "Generate truly random numbers within your specified range with our free online tool. Whether you need a number for a giveaway, a contest, or a scientific simulation, our generator provides unpredictable and unbiased results instantly. You can set personal minimum and maximum limits and generate multiple numbers at once. Perfect for developers, researchers, and event organizers, it's fast, secure, and completely free to use. Take the guesswork out of your decisions with our reliable random utility.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Need a random number? Our tool uses modern pseudo-random algorithms to provide numbers that are sufficiently random for games, testing, and general decision-making.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How it works?
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li>Define the Minimum value (e.g., 1).</li>
            <li>Define the Maximum value (e.g., 100).</li>
            <li>Click Generate to pick a number within that inclusive range.</li>
            <li>Use the 'Refresh' button to pick another one instantly.</li>
          </ol>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Common Use Cases
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li>Picking a lucky winner for a contest.</li>
            <li>Generating test data for software development.</li>
            <li>Creating random samples for statistical analysis.</li>
            <li>Making unbiased everyday decisions.</li>
          </ul>
        </div>
    ),
    faqs: [
      { q: "Are the numbers truly random?", a: "They are generated by a high-quality pseudo-random algorithm, suitable for non-cryptographic purposes." },
      { q: "Can I generate decimal numbers?", a: "Currently, our tool focuses on whole numbers (integers)." },
      { q: "Is there a limit on the range?", a: "You can generate numbers up to extremely high values supported by standard JavaScript numbering." }
    ],
    keywords: ["random number generator", "pick a number", "random integer creator", "generate random number online"]
  },
  "text-sorter": {
    id: "text-sorter",
    name: "Text Sorter",
    shortIntro: "Organize your lists effortlessly with our free online text sorter. Arrange lines of text alphabetically, by length, or in reverse order with just one click. Perfect for managing keywords, name lists, or any structured data, our tool also allows you to remove duplicates for a cleaner result. Save time on manual sorting and improve the structure of your data instantly. Fast, secure, and easy to use, it's the professional way to handle your text lists online.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Sorting large lists manually is a nightmare. Our text sorter helps you organize any list or dataset in seconds using various criteria.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Sorting Options
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li>A to Z (Alphabetical)</li>
            <li>Z to A (Reverse Alphabetical)</li>
            <li>Natural Sorting (Handles numbers correctly)</li>
            <li>Text Cleaning (Remove duplicates, empty lines)</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How to Use?
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li>Paste your list into the text area.</li>
            <li>Apply transformations like 'Remove Duplicates' or 'Trim'.</li>
            <li>Select your sort order (Ascending or Descending).</li>
            <li>Copy the refined list instantly.</li>
          </ol>
        </div>
    ),
    faqs: [
      { q: "Can I sort numbers?", a: "Yes, our natural sorting algorithm handles mixed text and numerical values correctly." },
      { q: "How do I remove duplicates?", a: "Simply click the 'Remove Duplicates' button before or after sorting." },
      { q: "Is there a limit to the number of lines?", a: "No, our tool can efficiently handle thousands of lines at once." }
    ],
    keywords: ["text sorter", "sort list alphabetically", "remove duplicate lines", "online list organizer"]
  },
  "color-converter": {
    id: "color-converter",
    name: "Color Converter",
    shortIntro: "Convert colors between HEX, RGB, and HSL formats with our free online color converter. Ideal for web designers and developers, it ensures you use the perfect color code for your project. Simply enter a code or use the color picker to see instant conversions and a visual preview. Our tool also provides accessibility insights and contrast ratios to help you create inclusive designs. Fast, accurate, and completely free, it's the essential tool for your design toolkit.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Colors are the foundation of any visual design. However, different software and systems use different color models. Our converter makes it easy to switch between them.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Supported Color Models
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li><strong>HEX:</strong> Used primarily in web/CSS.</li>
            <li><strong>RGB:</strong> Uses Red, Green, and Blue light values (0-255).</li>
            <li><strong>HSL:</strong> Uses Hue, Saturation, and Lightness - great for picking harmonious colors.</li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How to use?
          </h3>
          <p>Type your color value (like #ff0000 or red) or use the live color picker. All other formats update automatically as you change the selection.</p>
        </div>
    ),
    faqs: [
      { q: "What is the best format for web development?", a: "HEX or RGB are the most common, though HSL is gaining popularity for its ease of adjustment." },
      { q: "Can I pick a color from a screen?", a: "Yes, using our integrated color picker tool." },
      { q: "Is the tool free to use?", a: "Yes, it is 100% free with no signup." }
    ],
    keywords: ["color converter", "hex to rgb online", "rgb to hsl converter", "color code picker"]
  },
  "bulk-qrcode-generator": {
    id: "bulk-qrcode-generator",
    name: "Bulk QR Generator",
    shortIntro: "Efficiency at scale. Our Bulk QR Generator allows you to create hundreds of QR codes at once from a list of links or text. Perfect for inventory management, event ticketing, or large marketing campaigns, it saves you hours of manual work. You can export your generated codes as a professional PDF report or a ZIP file containing high-resolution PNG images. No signup required, fast processing, and completely free to use. Simplify your bulk operations with our powerful QR utility.",
    guideContent: (
        <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "16px" }}>
            Generating single QR codes is easy, but what if you need 50, 100, or 500? Our bulk tool is designed to handle mass generation with ease.
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            How it works?
          </h3>
          <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li>Paste your list of data (one per line) into the input box.</li>
            <li>The tool instantly prepares a live preview grid of all QR codes.</li>
            <li>Select your preferred Error Correction level.</li>
            <li>Click 'Download as PDF' or 'Download as ZIP' to get your files.</li>
          </ol>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
            Best for:
          </h3>
          <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
            <li>Product SKUs and inventory tracking.</li>
            <li>Personalized invitation codes.</li>
            <li>Classroom or event management.</li>
            <li>Bulk URL redirection for physical assets.</li>
          </ul>
        </div>
    ),
    faqs: [
      { q: "How many QR codes can I generate at once?", a: "You can easily generate hundreds at once. For best performance, we recommend batches of up to 500." },
      { q: "What is the difference between ZIP and PDF export?", a: "ZIP gives you individual image files for each code, while PDF places them in a print-ready document with labels." },
      { q: "Is my data stored?", a: "No, all generation happens in your browser session. Once you refresh or close the tab, the data is gone." }
    ],
    keywords: ["bulk qr generator", "generate multiple qr codes", "qr code batch generator", "bulk qr code to pdf"]
  },
  "pdf-compressor": {
    id: "pdf-compressor",
    name: "PDF Compressor",
    shortIntro: "Reduce the size of your PDF files instantly with our free online PDF compressor. Our tool processes everything locally in your browser — no file is ever uploaded to any server, guaranteeing complete privacy. Whether you need to compress PDF for email, reduce PDF size for uploading, or simply save storage space, our tool delivers fast and reliable results. Supports PDFs of all types with no sign-up required. Compress PDF files online free in seconds.",
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          PDF files are the standard for sharing documents, but they can quickly grow in size, making them
          difficult to email, upload, or store. A large PDF can be blocked by email servers, slow down
          website performance, or simply take up too much disk space.
        </p>
        <p style={{ marginBottom: "16px" }}>
          Our free PDF compressor solves this problem instantly. Unlike many online tools, our compressor
          runs entirely in your browser using WebAssembly technology — your files are never sent to any
          server, making it the safest option for compressing sensitive documents.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          How It Works
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong style={{ color: "var(--text-primary)" }}>Upload Your PDF</strong> — Drag and drop or click to select your PDF file (up to 100 MB).
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong style={{ color: "var(--text-primary)" }}>Choose Compression Level</strong> — Select Low, Medium, or High based on your quality vs. size preference.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong style={{ color: "var(--text-primary)" }}>Compress Instantly</strong> — The tool processes your PDF locally using pdf-lib and object stream compression.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong style={{ color: "var(--text-primary)" }}>Download</strong> — Save the optimized PDF directly to your device.
          </li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          When to Compress a PDF
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Before attaching to an email (most servers have a 10–25 MB limit).</li>
          <li style={{ marginBottom: "8px" }}>Before uploading to a website or CMS portal.</li>
          <li style={{ marginBottom: "8px" }}>To save storage space on your device or cloud.</li>
          <li style={{ marginBottom: "8px" }}>Before sharing on messaging apps like WhatsApp.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Why Our Tool is Unique
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><strong>100% Private:</strong> Files never leave your browser. Zero server uploads.</li>
          <li style={{ marginBottom: "8px" }}><strong>No Sign-up:</strong> Completely free, no account needed.</li>
          <li style={{ marginBottom: "8px" }}><strong>Fast Processing:</strong> Powered by high-performance WebAssembly.</li>
          <li style={{ marginBottom: "8px" }}><strong>All PDF Types:</strong> Works with text-based, scanned, and image-heavy PDFs.</li>
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
    keywords: ["pdf compressor", "compress pdf online free", "reduce pdf size", "pdf file size reducer", "compress pdf without losing quality"]
  }
};

