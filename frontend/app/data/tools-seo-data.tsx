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
    shortIntro: "Astonishbuddy Image Compressor provides fast, high-quality client-side image compression directly in your web browser. Optimize JPEG, PNG, and WebP images without uploading your private photos to third-party cloud servers. Achieve dramatic file size reductions while preserving sharp text, vibrant color gamuts, and fine photographic textures.",
    guideContent: (
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Images often account for a significant portion of total web page weight on modern websites. High-resolution photos captured on modern smartphones frequently exceed 4 to 8 megabytes each, causing sluggish page load speeds, high mobile bandwidth consumption, and lower search engine rankings. Our Image Compressor enables web developers, content creators, ecommerce managers, and students to dramatically shrink image file sizes without noticeable visual degradation.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          How Browser-Based Image Compression Works
        </h3>
        <p style={{ marginBottom: "16px" }}>
          Unlike traditional online compressors that upload your files to remote cloud servers, Astonishbuddy runs client-side image compression directly inside your web browser using HTML5 Canvas and Web Workers:
        </p>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Background Web Worker Processing:</strong> The image file is decoded and processed inside a dedicated browser Web Worker thread, keeping the main interface responsive without freezing.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Resolution Dimension Capping:</strong> Extremely large images are constrained to a maximum width or height of 4096px, downscaling excessive pixel counts that cause unnecessary bloat while preserving sharp visual detail.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Quality-Controlled Canvas Re-Encoding:</strong> The image is drawn onto an in-memory canvas and re-encoded using the browser&apos;s native image encoder at your selected quality percentage (from 10% to 100%).</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Metadata Stripping:</strong> Because the graphic is redrawn and exported as a new image blob, extraneous EXIF metadata, camera settings, and geolocation tags are automatically omitted.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Drag and drop your JPG, PNG, or WebP file into the upload zone, or click Browse to select an image from your device.</li>
          <li style={{ marginBottom: "8px" }}>Use the Quality Slider to select your desired balance between file size and visual fidelity (80% to 85% is ideal for most web graphics).</li>
          <li style={{ marginBottom: "8px" }}>Examine the real-time size comparison to verify the exact bytes saved and percentage reduction.</li>
          <li style={{ marginBottom: "8px" }}>Click Download to save your newly compressed image immediately to your computer or mobile storage.</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Illustrative Worked Examples
        </h3>
        <p style={{ marginBottom: "16px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
          Note: The following examples are illustrative benchmarks. Actual compression ratios vary depending on original image dimensions, format, and complexity.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: High-Res Smartphone Photograph</strong></p>
        <p style={{ marginBottom: "16px" }}>
          An illustrative JPEG photo taken with a smartphone camera measuring 5.2 MB. Compressing at 80% quality re-encodes the image and omits camera EXIF tags, resulting in an estimated ~680 KB file (~87% size reduction) that looks clear on desktop and mobile screens.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Transparent PNG Website Graphic</strong></p>
        <p style={{ marginBottom: "16px" }}>
          An illustrative transparent PNG graphic measuring 920 KB compressed at 80% quality produces a significantly smaller file size while preserving alpha transparency and crisp edges.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Tips and Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Avoid repeatedly compressing an already compressed JPEG image; re-compressing lossy files compounds compression artifacts (known as generation loss).</li>
          <li style={{ marginBottom: "8px" }}>For illustrations and graphics with transparent backgrounds, test converting to WebP for up to 30% smaller sizes than PNG.</li>
          <li style={{ marginBottom: "8px" }}>Always preserve your original master files in a backup folder before uploading compressed versions to production websites.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Privacy and Security Guarantee
        </h3>
        <p style={{ marginBottom: "16px" }}>
          Your privacy is our utmost priority. All compression calculations occur strictly inside your device&apos;s browser memory. Your personal photographs, sensitive invoices, receipts, and designs are never transmitted across the network, stored on remote databases, or inspected by third parties.
        </p>
      </div>
    ),
    faqs: [
          {
                "q": "How does browser-based image compression preserve visual quality?",
                "a": "Our tool renders your image onto an in-memory HTML5 Canvas within a background Web Worker. It resizes any dimensions exceeding 4096px down to standard limits and uses the browser's native canvas image encoder at your selected quality percentage to balance byte savings against compression artifacts."
          },
          {
                "q": "Can I compress transparent PNG images without turning the background black?",
                "a": "Yes. Our tool fully supports PNG and WebP alpha transparency channels. Transparent areas remain completely clear and transparent without any discoloration or solid black fill."
          },
          {
                "q": "What is the recommended compression percentage for website images?",
                "a": "We recommend setting the quality slider between 80% and 85%. This sweet spot delivers 70% to 85% file size reduction with virtually zero perceptible loss in visual clarity."
          },
          {
                "q": "Will compressing my photos remove private EXIF and GPS location data?",
                "a": "Yes. When the browser re-encodes your image through the HTML5 Canvas pipeline, camera model strings, GPS coordinates, and personal device metadata are automatically discarded."
          },
          {
                "q": "Does this tool have file size or daily upload limits?",
                "a": "You can compress single images up to 100 MB directly in your browser. This 100 MB limit protects browser memory and prevents crashes during client-side canvas decoding. There are no daily usage limits, cooldown timers, or subscriptions."
          },
          {
                "q": "Can I compress images on my iPhone, iPad, or Android phone?",
                "a": "Yes. Astonishbuddy Image Compressor is fully responsive and compatible with all modern mobile browsers including Safari, Chrome, Edge, and Firefox on iOS and Android."
          }
    ],
    keywords: ["image compressor online","reduce image size free","compress jpeg without losing quality","compress png online","client side image compression"]
  },
  "text-case-converter": {
    id: "text-case-converter",
    name: "Text Case Converter",
    shortIntro: "The Astonishbuddy Text Case Converter is an instant typography and code formatting utility. Transform text between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, and kebab-case in a single click with zero data transmission.",
    guideContent: (
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Inconsistent capitalization in documents, article headlines, marketing copy, and programming code wastes valuable time and creates visual clutter. Whether you accidentally typed a paragraph with the Caps Lock key engaged, need to format blog headers according to standard publishing stylebooks, or need to normalize variable names for software development, our Text Case Converter delivers immediate, accurate transformations.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Supported Capitalization Formats
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>UPPERCASE:</strong> Converts every alphabetical character to capital letters. Ideal for acronyms, legal disclaimers, and urgent warning banners.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>lowercase:</strong> Converts all characters to small letters. Commonly used for email addresses, URL paths, and CSS selectors.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Title Case:</strong> Capitalizes the initial letter of each word across your text.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Sentence case:</strong> Capitalizes only the first letter of each sentence, resetting accidental all-caps blocks back to readable narrative text.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>camelCase & PascalCase:</strong> Removes whitespace and capitalizes words for JavaScript object properties, methods, and TypeScript classes.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>snake_case & kebab-case:</strong> Replaces spaces with underscores or hyphens for database schemas, REST API endpoints, and slug URLs.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Type or paste your text into the input textarea (word and character counters update in real time).</li>
          <li style={{ marginBottom: "8px" }}>Review all converted formats (UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, etc.) generated simultaneously below.</li>
          <li style={{ marginBottom: "8px" }}>Click the Copy button next to any format to save it directly to your system clipboard.</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Illustrative Worked Examples
        </h3>
        <p style={{ marginBottom: "16px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
          Note: The following examples are illustrative text transformations.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Accidental Caps Lock Recovery</strong></p>
        <p style={{ marginBottom: "16px" }}>
          <em>Input:</em> &quot;THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. WE MUST PROCEED IMMEDIATELY.&quot;<br />
          <em>Converted (Sentence case):</em> &quot;The quick brown fox jumps over the lazy dog. We must proceed immediately.&quot;
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Code Variable Normalization</strong></p>
        <p style={{ marginBottom: "16px" }}>
          <em>Input:</em> &quot;user account billing address&quot;<br />
          <em>Converted (camelCase):</em> &quot;userAccountBillingAddress&quot;<br />
          <em>Converted (snake_case):</em> &quot;user_account_billing_address&quot;<br />
          <em>Converted (kebab-case):</em> &quot;user-account-billing-address&quot;
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Tips and Common Mistakes
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Double-check recognized acronyms (such as NASA, FBI, or API) when converting long documents to Sentence case, as automated parsers may lower them.</li>
          <li style={{ marginBottom: "8px" }}>Ensure numbers and special punctuation marks are not surrounded by unnecessary whitespace when generating developer identifiers.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Privacy and Security
        </h3>
        <p style={{ marginBottom: "16px" }}>
          All string conversions execute in JavaScript memory on your local browser thread. None of the text you enter, whether confidential company reports or personal notes, is transmitted to our servers or saved in browsing cookies.
        </p>
      </div>
    ),
    faqs: [
          {
                "q": "What is the key difference between Title Case and Sentence case?",
                "a": "Title Case capitalizes the initial letter of every word, while Sentence case capitalizes only the first letter of each sentence and converts the remainder to lowercase."
          },
          {
                "q": "How do camelCase, PascalCase, and snake_case differ for programmers?",
                "a": "camelCase starts with a lowercase letter (e.g., userProfile), PascalCase starts with an uppercase letter (e.g., UserProfile), and snake_case separates words with underscores (e.g., user_profile)."
          },
          {
                "q": "Will converting text case alter my punctuation or emojis?",
                "a": "No. Standard punctuation marks, numbers, special symbols, and emojis remain completely intact and unaffected during case conversion."
          },
          {
                "q": "Is there a maximum character limit when pasting large manuscripts?",
                "a": "Because processing happens directly on your device hardware, you can easily convert documents containing tens of thousands of words without lag or limitations."
          },
          {
                "q": "Will converting cases alter my original input text?",
                "a": "No. Your original input text remains untouched in the input box. All converted formats appear simultaneously below with independent copy buttons, so your starting text is never lost."
          },
          {
                "q": "Does Astonishbuddy store or log any confidential text pasted into the tool?",
                "a": "Never. The conversion logic runs entirely on the client side without any server logging, database storage, or analytics tracking of your text content."
          }
    ],
    keywords: ["text case converter","uppercase to lowercase","title case generator","sentence case online","camelcase converter"]
  },
  "password-generator": {
    id: "password-generator",
    name: "Password Generator",
    shortIntro: "The Astonishbuddy Strong Password Generator creates cryptographically secure, random passwords directly on your machine. Protect your digital accounts against brute-force and dictionary attacks using modern Web Crypto API randomness with customizable character sets.",
    guideContent: (
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Data breaches and credential stuffing attacks compromise millions of online accounts every single day. The primary vulnerability in most security incidents is human-generated passwords: names, dictionary words, birthdates, and simple sequential numbers that automated hacking tools crack in milliseconds. Generating long, completely unpredictable passwords using true mathematical entropy is the most effective defense you can implement.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Understanding Password Entropy and Security
        </h3>
        <p style={{ marginBottom: "16px" }}>
          Password strength is measured in bits of entropy—a mathematical calculation of how many guesses an attacker would need to exhaust all possible combinations. A 16-character password combining uppercase letters, lowercase letters, numbers, and symbols contains approximately 105 bits of entropy. At billions of guesses per second, a supercomputer would require hundreds of trillions of years to brute-force this search space.
        </p>
        <p style={{ marginBottom: "16px" }}>
          Unlike standard pseudo-random number generators (PRNGs) like JavaScript&apos;s <code style={{ color: "var(--accent-1)" }}>Math.random()</code>—which use deterministic mathematical formulas based on an internal clock seed that can be reverse-engineered—our tool uses the Web Crypto API (<code style={{ color: "var(--accent-1)" }}>window.crypto.getRandomValues</code>). This cryptographically secure PRNG (CSPRNG) accesses non-deterministic hardware entropy from operating system kernel events, guaranteeing statistical unpredictability.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Select your desired password length using the slider (we recommend at least 16 to 20 characters for sensitive accounts).</li>
          <li style={{ marginBottom: "8px" }}>Toggle the character options you require: Uppercase (A-Z), Lowercase (a-z), Numbers (0-9), and Symbols (!@#$%^&*).</li>
          <li style={{ marginBottom: "8px" }}>Optionally enable &quot;Exclude Ambiguous Characters&quot; (such as 0/O, 1/l/I) if you plan on typing the password manually on keyboards or mobile screens.</li>
          <li style={{ marginBottom: "8px" }}>Click Generate to calculate a fresh cryptographic string, then click Copy to store it in your clipboard securely.</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Illustrative Worked Examples
        </h3>
        <p style={{ marginBottom: "16px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
          Note: The following examples are illustrative samples generated using cryptographically secure random values.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: High-Security Vault Master Password (20 Characters)</strong></p>
        <p style={{ marginBottom: "16px" }}>
          <em>Settings:</em> Length 20, Uppercase + Lowercase + Numbers + Symbols.<br />
          <em>Generated Sample:</em> <code style={{ color: "var(--accent-1)" }}>k9#mP$2vL!8xQ@4zR*7w</code> <span style={{ color: "#f87171", fontSize: "13px", fontWeight: 600 }}>(Sample only — don&apos;t use this)</span><br />
          <em>Entropy:</em> ~131 bits. Resists all modern GPU-accelerated hash clusters indefinitely.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Alphanumeric Mobile-Friendly Passcode (14 Characters)</strong></p>
        <p style={{ marginBottom: "16px" }}>
          <em>Settings:</em> Length 14, Uppercase + Lowercase + Numbers, Ambiguous characters excluded.<br />
          <em>Generated Sample:</em> <code style={{ color: "var(--accent-1)" }}>h7K9m3P2w8R4t6</code> <span style={{ color: "#f87171", fontSize: "13px", fontWeight: 600 }}>(Sample only — don&apos;t use this)</span><br />
          <em>Entropy:</em> ~83 bits. Excellent for accounts requiring on-screen touch typing.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Security Best Practices and Common Mistakes
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Never reuse the same password across multiple online platforms; if one service experiences a breach, attackers will immediately attempt credential stuffing across your other accounts.</li>
          <li style={{ marginBottom: "8px" }}>Do not write passwords down in unencrypted text files or sticky notes. Instead, save them in an encrypted password manager (such as Bitwarden, 1Password, or Apple Keychain).</li>
          <li style={{ marginBottom: "8px" }}>Always pair strong passwords with hardware two-factor authentication (2FA/Passkeys) wherever supported.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Cryptographic Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "16px" }}>
          Our generator utilizes the industry-standard <code style={{ color: "var(--accent-1)" }}>window.crypto.getRandomValues</code> API built natively into modern browsers. Your passwords are never transmitted across the internet, never logged, and are discarded from memory as soon as you close or refresh the tab.
        </p>
      </div>
    ),
    faqs: [
          {
                "q": "What makes a password cryptographically secure compared to Math.random()?",
                "a": "Standard pseudo-random number generators (PRNGs) like JavaScript's Math.random() use deterministic formulas seeded by clock times, making them vulnerable to prediction. In contrast, our tool uses the Web Crypto API (window.crypto.getRandomValues), a CSPRNG that draws non-deterministic physical entropy directly from operating system kernel events."
          },
          {
                "q": "How long should my passwords be in 2026?",
                "a": "We recommend a minimum of 16 characters for general web accounts, and 20 or more characters for critical accounts such as primary email, banking, and password manager master vaults."
          },
          {
                "q": "Why shouldn't I use words or personal dates in my passwords?",
                "a": "Modern cracking programs utilize dictionary attacks and automated profile scraping that test billions of word combinations, substitutions (like @ for a), and date formats within seconds."
          },
          {
                "q": "Can Astonishbuddy or anyone else see the passwords I generate?",
                "a": "No. The code executes 100% locally on your computer or phone. No network calls are dispatched, meaning no server ever sees, stores, or transmits your passwords."
          },
          {
                "q": "What should I do if a website rejects special characters?",
                "a": "Simply uncheck the 'Symbols' option in the settings. Our generator will immediately produce a high-entropy string using only alphanumeric characters (A-Z, a-z, 0-9)."
          },
          {
                "q": "How should I store generated passwords safely?",
                "a": "Use a reputable, end-to-end encrypted password manager. Password managers remember and auto-fill your complex passwords across devices, eliminating the need to memorize them."
          }
    ],
    keywords: ["password generator online","strong password creator","secure random password","generate safe password","crypto password generator"]
  },
  "json-formatter": {
    id: "json-formatter",
    name: "JSON Formatter",
    shortIntro: "The Astonishbuddy JSON Formatter and Validator formats, validates, beautifies, and minifies JSON payloads instantly. Detect syntax errors with line-number precision and copy clean, formatted JSON data with 100% client-side privacy.",
    guideContent: (
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          JavaScript Object Notation (JSON) is the universal data format powering modern web APIs, serverless backends, microservices, and database configurations. However, working with raw, single-line minified JSON payloads or malformed JSON returned by third-party services is challenging. Our JSON Formatter provides developers, QA testers, and data analysts with a clean, instant tool to inspect, debug, and beautify complex data structures.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Key Features and Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Syntax Error Pinpointing:</strong> Detects invalid JSON syntax, unquoted keys, illegal trailing commas, and unclosed brackets with clear error messages.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Configurable Indentation:</strong> Format using industry-standard 2-space or 4-space indentation for optimal legibility in code reviews and documentation.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>One-Click Minification:</strong> Strip whitespace, tabs, and newlines to shrink payload sizes before sending network API requests or embedding data in configuration files.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Paste your raw JSON text or API response into the code input editor.</li>
          <li style={{ marginBottom: "8px" }}>Click &quot;Format JSON&quot; to beautify and indent the hierarchy, or &quot;Minify JSON&quot; to compress it onto a single line.</li>
          <li style={{ marginBottom: "8px" }}>If syntax errors exist, review the highlighted error notification to quickly fix missing quotes or commas.</li>
          <li style={{ marginBottom: "8px" }}>Click Copy to Clipboard to save the clean result for your code editor or API client.</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Illustrative Worked Examples
        </h3>
        <p style={{ marginBottom: "16px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
          Note: The following examples are illustrative JSON payload formatting demonstrations.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Minified API Response to Beautified Hierarchy</strong></p>
        <p style={{ marginBottom: "8px" }}><em>Raw Input:</em></p>
        <pre style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "8px", overflowX: "auto" }}>
          {JSON.stringify({ status: "success", data: { id: 1042, user: "Alex", roles: ["admin", "editor"], active: true } })}
        </pre>
        <p style={{ margin: "12px 0 8px" }}><em>Beautified Output:</em></p>
        <pre style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "8px", overflowX: "auto" }}>
{`{
  "status": "success",
  "data": {
    "id": 1042,
    "user": "Alex",
    "roles": [
      "admin",
      "editor"
    ],
    "active": true
  }
}`}
        </pre>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Common Mistakes in JSON Formatting
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Using single quotes instead of double quotes: The JSON specification (RFC 8259) strictly requires double quotes (<code style={{ color: "var(--accent-1)" }}>&quot;key&quot;: &quot;value&quot;</code>) around all object keys and string values.</li>
          <li style={{ marginBottom: "8px" }}>Trailing commas: In standard JSON, a comma after the final item in an array or object causes a parser syntax error.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Client-Side Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "16px" }}>
          Your JSON data may contain production customer records, internal API tokens, or proprietary database schemas. Our formatter executes 100% in your browser using the native <code style={{ color: "var(--accent-1)" }}>JSON.parse</code> and <code style={{ color: "var(--accent-1)" }}>JSON.stringify</code> engines. Not a single byte is ever transmitted across the internet.
        </p>
      </div>
    ),
    faqs: [
          {
                "q": "Why does my JSON return a syntax error when using single quotes?",
                "a": "The official RFC 8259 JSON standard strictly requires double quotes for all string literals and object keys. Single quotes are valid in JavaScript syntax, but invalid in JSON."
          },
          {
                "q": "What is the difference between beautifying and minifying JSON?",
                "a": "Beautifying adds newlines and indentation spaces to make complex data readable for humans. Minifying removes all unnecessary whitespace to minimize byte size for high-speed network transmission."
          },
          {
                "q": "Does minifying JSON change or corrupt the underlying data?",
                "a": "No. Minification only strips superficial whitespace outside of string values. The data types, numbers, booleans, and structure remain completely identical."
          },
          {
                "q": "Can this tool handle large JSON files and database exports?",
                "a": "Yes. Because processing runs locally using your computer's high-speed V8 JavaScript engine, it can process large payloads measuring several megabytes without timing out."
          },
          {
                "q": "How do I fix unexpected trailing comma errors?",
                "a": "Check the last key-value pair of objects and the last item in arrays. If there is a trailing comma before the closing brace (} or ]), simply delete that comma."
          },
          {
                "q": "Is my proprietary JSON or customer database data stored on your servers?",
                "a": "Never. The formatting and validation logic runs entirely on your local machine inside your browser. No data is sent over the internet or logged on any server."
          }
    ],
    keywords: ["json formatter online","beautify json","validate json online","json parser","minify json free"]
  },
  "word-counter": {
    id: "word-counter",
    name: "Word Counter",
    shortIntro: "The Astonishbuddy Word Counter provides real-time text analysis, counting words, characters, sentences, paragraphs, and estimating silent reading and speaking times instantly directly in your browser.",
    guideContent: (
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Whether drafting an academic research paper with strict word limits, composing SEO-optimized blog articles, preparing a keynote speech, or crafting concise social media copy, tracking your exact text metrics is essential. Our Word Counter delivers instantaneous character, word, sentence, and readability metrics as you type or paste text.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Comprehensive Real-Time Statistics
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Word & Character Counts:</strong> Accurately tallies total words, characters with spaces, and characters excluding whitespace.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Sentence & Paragraph Structure:</strong> Tracks structural pacing to help you maintain concise, readable sentence lengths.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Reading & Speaking Time Estimates:</strong> Calculates estimated silent reading time (based on 200–225 words per minute) and public speaking time (based on average 135 words per minute).</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Type directly into the text editor or paste copied text from Word, Google Docs, or your CMS.</li>
          <li style={{ marginBottom: "8px" }}>Watch the live analytics cards update instantaneously on every keystroke.</li>
          <li style={{ marginBottom: "8px" }}>Review the reading time metric to verify whether your content fits your target audience attention span.</li>
          <li style={{ marginBottom: "8px" }}>Click Copy to save your polished text, or Clear to start a fresh calculation.</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Illustrative Worked Examples
        </h3>
        <p style={{ marginBottom: "16px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
          Note: The following examples are illustrative writing and speech pacing benchmarks.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Social Media Character Optimization</strong></p>
        <p style={{ marginBottom: "16px" }}>
          When crafting an X (Twitter) post with a 280-character maximum, or a Google Ads headline with a 30-character limit, our character counter ensures your message fits precisely without awkward truncation.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: 5-Minute Speech Preparation</strong></p>
        <p style={{ marginBottom: "16px" }}>
          An average speech pace is 130 to 140 words per minute. For a strict 5-minute presentation, aim for approximately 650 to 700 words. Our speaking time counter confirms when your draft matches your allotted stage time.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Writing Tips and Common Mistakes
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Keep average sentence length under 20 words for maximum online readability and lower bounce rates.</li>
          <li style={{ marginBottom: "8px" }}>Remember that hyphenated words (e.g., &quot;state-of-the-art&quot;) count as one word in standard grammar tools.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "16px" }}>
          Your draft articles, personal essays, book chapters, and proprietary correspondence are never sent across the network. All metrics are calculated in real time inside your browser memory with zero server storage.
        </p>
      </div>
    ),
    faqs: [
          {
                "q": "How is the estimated reading time calculated?",
                "a": "Reading time is calculated using an industry-standard benchmark of 200 to 225 words per minute, which represents the average silent reading speed of an adult reader."
          },
          {
                "q": "Why is speaking time slower than reading time?",
                "a": "Silent reading is purely cognitive, whereas public speaking requires vocal articulation, pauses, and audience pacing, averaging between 130 and 150 words per minute."
          },
          {
                "q": "Do hyphenated words count as one word or multiple words?",
                "a": "Our algorithm follows standard linguistic conventions: words connected by hyphens (such as 'user-friendly' or 'first-class') are counted as a single compound word."
          },
          {
                "q": "Why do character counts differ with and without spaces?",
                "a": "'Characters with spaces' counts every keystroke including whitespace, while 'Characters without spaces' counts only visible typographical letters, numbers, and punctuation."
          },
          {
                "q": "What is the recommended word count for SEO blog articles?",
                "a": "Most comprehensive, high-ranking guides range from 1,200 to 2,500 words, providing in-depth coverage of the topic while satisfying search intent."
          },
          {
                "q": "Does Astonishbuddy store or inspect the manuscripts I paste here?",
                "a": "No. The word counter is completely client-side. Your text is evaluated in your browser's local memory and is never logged or saved anywhere."
          }
    ],
    keywords: ["word counter online","character count tool","reading time calculator","count words and characters","free text counter"]
  },
  "qr-generator": {
    id: "qr-generator",
    name: "QR Code Generator",
    shortIntro: "The Astonishbuddy Free QR Code Generator creates high-resolution, customizable QR codes for website URLs, contact vCards, Wi-Fi credentials, and plain text. Download crisp PNG codes instantly with zero expiration dates or scan limits.",
    guideContent: (
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Quick Response (QR) codes have become the standard bridge connecting physical media to digital experiences. From restaurant menus, retail packaging, and real estate flyers to conference badges and payment portals, QR codes enable users to access web links instantly using smartphone cameras. Our QR Code Generator creates high-contrast, fully scannable static QR codes in seconds.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Supported QR Code Types and Uses
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Website URLs:</strong> Direct users directly to landing pages, social profiles, portfolio sites, or YouTube videos.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Wi-Fi Access:</strong> Allow guests and customers to join your Wi-Fi network instantly without manually typing complex WPA2 security keys.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>vCard Contact Cards:</strong> Share your full name, phone number, email, and company details directly into smartphone address books.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Plain Text & Messages:</strong> Encode product serial numbers, notes, discount promo codes, or short text messages.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Select the QR code category (URL, Text, Wi-Fi, or Contact).</li>
          <li style={{ marginBottom: "8px" }}>Enter your destination link or information into the designated field.</li>
          <li style={{ marginBottom: "8px" }}>Customize your desired resolution and error correction level.</li>
          <li style={{ marginBottom: "8px" }}>Review the real-time preview, test scan with your smartphone camera, and click Download PNG.</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Illustrative Worked Examples
        </h3>
        <p style={{ marginBottom: "16px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
          Note: The following examples are illustrative QR code encoding scenarios.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Business Card Landing Page QR Code</strong></p>
        <p style={{ marginBottom: "16px" }}>
          Encoding <code style={{ color: "var(--accent-1)" }}>https://www.astonishbuddy.com/about</code> with High error correction (Level H). Even if the business card gets slightly scratched or smudged in a wallet, the Reed-Solomon redundancy ensures immediate camera scanning.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Guest Wi-Fi QR Code</strong></p>
        <p style={{ marginBottom: "16px" }}>
          Encoding <code style={{ color: "var(--accent-1)" }}>WIFI:S:OfficeGuest;T:WPA;P:SecureKey2026;;</code>. Framing this QR code in a lobby allows visitors to tap and connect to the guest network in one second.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Best Practices for Reliable QR Scanning
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Always maintain high contrast between the foreground code and background surface (dark pattern on light background is universally best).</li>
          <li style={{ marginBottom: "8px" }}>Leave a clean &quot;quiet zone&quot; (white border) around the QR code so scanners can distinguish it from surrounding design artwork.</li>
          <li style={{ marginBottom: "8px" }}>Always test scan the printed proof with both an iPhone and an Android phone before mass printing.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Zero Expiration and Privacy Policy
        </h3>
        <p style={{ marginBottom: "16px" }}>
          The QR codes generated here are static and direct. We do not reroute your links through proprietary redirect domains, insert advertisements, or impose scan limits. Your codes will function forever as long as your destination link remains active.
        </p>
      </div>
    ),
    faqs: [
          {
                "q": "Do the QR codes generated on Astonishbuddy ever expire?",
                "a": "No. Our QR codes are 100% static, meaning your destination URL or data is directly encoded into the matrix. They never expire and have no scan limitations."
          },
          {
                "q": "What error correction level should I choose for printed materials?",
                "a": "For business cards, billboards, or flyers where physical wear and tear may occur, choose Level Q (25% recovery) or Level H (30% recovery) for optimal resilience."
          },
          {
                "q": "Can I download my QR code in high resolution?",
                "a": "Yes. You can download high-resolution PNG files suitable for print materials, signage, and digital display."
          },
          {
                "q": "Why won't my smartphone camera scan my printed QR code?",
                "a": "Check for common issues: insufficient contrast (e.g., light gray on white), missing quiet zone borders, or an overly complex URL that created excessively small dots."
          },
          {
                "q": "Are there any recurring subscription fees or watermark branding?",
                "a": "No. Astonishbuddy QR Generator is completely free. There are no watermarks, no signups, and no hidden fees."
          },
          {
                "q": "Is the data I enter into the QR code logged on your servers?",
                "a": "No. The QR code image is generated on demand and delivered directly to your session. Your links and text are never tracked or saved to a database."
          }
    ],
    keywords: ["qr code generator free","create custom qr code","qr code for wifi","static qr code creator","high resolution qr code"]
  },
  "base64-converter": {
    id: "base64-converter",
    name: "Base64 Encoder & Decoder",
    shortIntro: "The Astonishbuddy Base64 Encoder & Decoder converts plain text and binary files to Base64 and decodes Base64 strings back to readable UTF-8 text with 100% browser-based security and zero server logging.",
    guideContent: (
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Base64 is a binary-to-text encoding scheme defined by RFC 4648 that translates binary data and arbitrary characters into a set of 64 printable ASCII characters (A-Z, a-z, 0-9, +, and /). It is widely used across web development, email transport (MIME), data URI schemes, API authorization headers, and configuration files to ensure that data passes intact through systems designed strictly for text.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Common Practical Use Cases
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Data URIs in CSS and HTML:</strong> Embed small SVG icons or logo graphics directly into CSS stylesheets, eliminating extra HTTP requests.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>HTTP Basic Authentication:</strong> Encode <code style={{ color: "var(--accent-1)" }}>username:password</code> pairs for the standard <code style={{ color: "var(--accent-1)" }}>Authorization: Basic ...</code> request header.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Safe Payload Transport:</strong> Transfer binary blobs, cryptographic hashes, or complex strings through JSON and XML without character escaping issues.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Select &quot;Encode&quot; to convert raw text into Base64, or &quot;Decode&quot; to extract original text from Base64.</li>
          <li style={{ marginBottom: "8px" }}>Type or paste your content into the input box.</li>
          <li style={{ marginBottom: "8px" }}>View the instantaneous conversion in the output editor.</li>
          <li style={{ marginBottom: "8px" }}>Click &quot;Copy&quot; to transfer the converted string directly to your clipboard.</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Illustrative Worked Examples
        </h3>
        <p style={{ marginBottom: "16px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
          Note: The following examples are illustrative encoding and decoding workflows.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Basic Authentication Encoding</strong></p>
        <p style={{ marginBottom: "16px" }}>
          <em>Plain Text Input:</em> <code style={{ color: "var(--accent-1)" }}>admin:MySecretPass2026</code><br />
          <em>Base64 Output:</em> <code style={{ color: "var(--accent-1)" }}>YWRtaW46TXlTZWNyZXRQYXNzMjAyNg==</code><br />
          <em>HTTP Header:</em> <code style={{ color: "var(--accent-1)" }}>Authorization: Basic YWRtaW46TXlTZWNyZXRQYXNzMjAyNg==</code>
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Decoding a Data URI Payload</strong></p>
        <p style={{ marginBottom: "16px" }}>
          <em>Base64 Input:</em> <code style={{ color: "var(--accent-1)" }}>SGVsbG8sIFdvcmxkISBXZWxjb21lIHRvIEFzdG9uaXNoYnVkZHku</code><br />
          <em>Decoded Text:</em> &quot;Hello, World! Welcome to Astonishbuddy.&quot;
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Crucial Developer Notes: Encoding vs Encryption
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Base64 is strictly an <strong>encoding format</strong>, NOT encryption. Anyone can decode a Base64 string instantly without a key. Never use Base64 alone to protect passwords or confidential data.</li>
          <li style={{ marginBottom: "8px" }}>Base64 increases data size by roughly 33% because every 3 binary bytes are represented by 4 ASCII characters.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Privacy and Security
        </h3>
        <p style={{ marginBottom: "16px" }}>
          All conversions are handled locally via your browser&apos;s native <code style={{ color: "var(--accent-1)" }}>btoa</code> and <code style={{ color: "var(--accent-1)" }}>atob</code> APIs with UTF-8 byte stream handlers. Your strings never leave your device.
        </p>
      </div>
    ),
    faqs: [
          {
                "q": "What is Base64 encoding used for?",
                "a": "Base64 is used to encode binary data (like images or encrypted keys) into ASCII text so it can safely pass through text-only communication channels like email, JSON APIs, and HTTP headers."
          },
          {
                "q": "Is Base64 an encryption method?",
                "a": "No. Base64 is a reversible encoding scheme, not encryption. It provides zero confidentiality, as anyone can decode it instantly without a password or key."
          },
          {
                "q": "Why is Base64 encoded output larger than the original text?",
                "a": "Base64 represents 6 bits of data using an 8-bit ASCII character, resulting in a predictable size increase of approximately 33% compared to raw binary data."
          },
          {
                "q": "What do the '=' characters at the end of a Base64 string mean?",
                "a": "The '=' symbol is padding. Because Base64 processes data in 3-byte blocks, padding is appended when the input data length is not evenly divisible by 3."
          },
          {
                "q": "Does this tool support non-English characters and emojis?",
                "a": "Yes. Our tool uses full UTF-8 byte encoding (TextEncoder/TextDecoder), so accented letters, foreign alphabets, and emojis are converted cleanly without distortion."
          },
          {
                "q": "Does Astonishbuddy log the strings or tokens I decode here?",
                "a": "No. The entire decoding and encoding process runs locally inside your browser's memory. No data is sent over the network or saved to any server."
          }
    ],
    keywords: ["base64 converter online","base64 encode string","base64 decoder","decode base64 text","base64 utf8 converter"]
  },
  "url-converter": {
    id: "url-converter",
    name: "URL Converter",
    shortIntro: "The Astonishbuddy URL Encoder & Decoder converts web URLs, query parameters, and special characters into standard percent-encoded format and decodes encoded strings back to readable URLs instantly.",
    guideContent: (
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Uniform Resource Identifiers (URLs) can only be sent across the internet using the standard ASCII character set. Because URLs frequently contain spaces, non-ASCII characters, or reserved syntax characters (such as <code style={{ color: "var(--accent-1)" }}>?</code>, <code style={{ color: "var(--accent-1)" }}>&amp;</code>, <code style={{ color: "var(--accent-1)" }}>=</code>, and <code style={{ color: "var(--accent-1)" }}>/</code>), these characters must be converted into valid percent-encoding (RFC 3986) to prevent web servers and browsers from misinterpreting request parameters.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Understanding Percent-Encoding
        </h3>
        <p style={{ marginBottom: "16px" }}>
          In percent-encoding, reserved and unprintable characters are replaced with a percent sign (<code style={{ color: "var(--accent-1)" }}>%</code>) followed by the two-digit hexadecimal representation of their UTF-8 byte value. For example, a space character becomes <code style={{ color: "var(--accent-1)" }}>%20</code> (or <code style={{ color: "var(--accent-1)" }}>+</code> in form data), an ampersand becomes <code style={{ color: "var(--accent-1)" }}>%26</code>, and an exclamation mark becomes <code style={{ color: "var(--accent-1)" }}>%21</code>.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Choose whether to &quot;Encode&quot; or &quot;Decode&quot; your URL.</li>
          <li style={{ marginBottom: "8px" }}>Paste your raw URL, search query, or encoded string into the input editor.</li>
          <li style={{ marginBottom: "8px" }}>Review the converted result generated instantly in the output field.</li>
          <li style={{ marginBottom: "8px" }}>Click Copy to Clipboard to save the result.</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Illustrative Worked Examples
        </h3>
        <p style={{ marginBottom: "16px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
          Note: The following examples are illustrative percent-encoding test cases.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Safe Query String Encoding</strong></p>
        <p style={{ marginBottom: "16px" }}>
          <em>Raw Input:</em> <code style={{ color: "var(--accent-1)" }}>https://example.com/search?q=web tools &amp; utilities 100%</code><br />
          <em>Encoded Output:</em> <code style={{ color: "var(--accent-1)" }}>https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dweb%20tools%20%26%20utilities%20100%25</code>
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Decoding a Tracking Redirect URL</strong></p>
        <p style={{ marginBottom: "16px" }}>
          <em>Encoded Input:</em> <code style={{ color: "var(--accent-1)" }}>https%3A%2F%2Fastonishbuddy.com%2Ftools%2Fimage-compressor</code><br />
          <em>Decoded Output:</em> <code style={{ color: "var(--accent-1)" }}>https://astonishbuddy.com/tools/image-compressor</code>
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Tips and Common Mistakes
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Beware of double-encoding: encoding an already encoded string turns <code style={{ color: "var(--accent-1)" }}>%20</code> into <code style={{ color: "var(--accent-1)" }}>%2520</code>, which will break backend routing.</li>
          <li style={{ marginBottom: "8px" }}>When encoding entire URLs, ensure protocol slashes (<code style={{ color: "var(--accent-1)" }}>https://</code>) are preserved unless specifically passing a URL as a parameter to another endpoint.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "16px" }}>
          Conversions run purely inside your web browser using native <code style={{ color: "var(--accent-1)" }}>encodeURIComponent</code> and <code style={{ color: "var(--accent-1)" }}>decodeURIComponent</code> functions. Your URLs and sensitive tracking tokens are never sent over the internet or logged.
        </p>
      </div>
    ),
    faqs: [
          {
                "q": "What is URL percent-encoding?",
                "a": "Percent-encoding is a mechanism for encoding arbitrary data in a Uniform Resource Identifier (URI) using ASCII characters, replacing non-ASCII characters with '%XX' hexadecimal values."
          },
          {
                "q": "Why do spaces in URLs sometimes turn into '%20' and sometimes '+'?",
                "a": "'%20' is the standard percent-encoded space according to RFC 3986 (used in path components), while '+' is historically used in application/x-www-form-urlencoded query string parameters."
          },
          {
                "q": "What happens if a URL contains special characters or foreign language letters?",
                "a": "The browser encodes non-ASCII characters into their multi-byte UTF-8 sequence, then percent-encodes each individual byte (for example, accented letters or emojis)."
          },
          {
                "q": "What is double-encoding and how do I avoid it?",
                "a": "Double-encoding happens when an already encoded string is passed through an encoder a second time (turning % into %25). Always ensure raw text is encoded only once."
          },
          {
                "q": "Can I decode a URL with complex nested parameters?",
                "a": "Yes. The decoder parses nested percent-encoded components cleanly, restoring readable characters and query structures."
          },
          {
                "q": "Does Astonishbuddy track or log the URLs I encode?",
                "a": "No. All encoding and decoding logic executes locally on your machine. We do not track, log, or transmit any URLs you enter."
          }
    ],
    keywords: ["url encoder online","url decoder","percent encoding tool","encode uri component","decode url free"]
  },
  "lorem-ipsum-generator": {
    id: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    shortIntro: "The Astonishbuddy Lorem Ipsum Generator creates customized dummy placeholder text for web designers, graphic artists, and developers. Generate customized paragraphs of dummy placeholder text instantly to populate mockups and wireframes.",
    guideContent: (
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          When presenting wireframes, UI prototypes, or editorial layouts to clients and stakeholders, using readable English text often distracts reviewers from evaluating visual hierarchy, typography, and spacing. By utilizing standard pseudo-Latin &quot;Lorem Ipsum&quot; placeholder text, designers establish an even distribution of letters and word lengths that mimics natural reading flow without conveying distracting semantic meaning.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Historical Origins of Lorem Ipsum
        </h3>
        <p style={{ marginBottom: "16px" }}>
          Contrary to popular belief, Lorem Ipsum is not simply random gibberish. Its roots date back over 2,000 years to classical Latin literature. In 1914, Latin scholar Richard McClintock traced its origins to sections 1.10.32 and 1.10.33 of Cicero&apos;s philosophical treatise <em>De finibus bonorum et malorum</em> (&quot;On the Extremes of Good and Evil&quot;), written in 45 BC. In the 1960s, Letraset popularized adhesive sheets containing Lorem Ipsum passages, which later became the digital standard in desktop publishing software like Aldus PageMaker.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Select the number of paragraphs you need generated.</li>
          <li style={{ marginBottom: "8px" }}>Enter your desired quantity (e.g., 3 paragraphs or 50 words).</li>
          <li style={{ marginBottom: "8px" }}>Review the real-time preview of the classic Cicero Latin passages.</li>
          <li style={{ marginBottom: "8px" }}>Click Generate, then click Copy to transfer the mock text directly into Figma, Sketch, or your code editor.</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Illustrative Worked Examples
        </h3>
        <p style={{ marginBottom: "16px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
          Note: The following examples are illustrative typography layout tests.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Blog Card Excerpt (25 Words)</strong></p>
        <p style={{ marginBottom: "16px" }}>
          <em>Output:</em> &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.&quot;
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Multi-Paragraph Article Mockup</strong></p>
        <p style={{ marginBottom: "16px" }}>
          Generating 3 structured paragraphs with standard paragraph breaks to test typography scale, line heights (<code style={{ color: "var(--accent-1)" }}>line-height: 1.6</code>), and margin spacing across responsive breakpoints.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Best Practices for UI Design
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Remember to replace all placeholder copy with real, production-ready content prior to launching public web pages.</li>
          <li style={{ marginBottom: "8px" }}>Test layouts with varying text lengths: German, Finnish, and Dutch words are often significantly longer than English words, which can break tight UI containers.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Zero Network Overhead
        </h3>
        <p style={{ marginBottom: "16px" }}>
          All text generation happens instantaneously using local client-side vocabulary algorithms with zero server latency.
        </p>
      </div>
    ),
    faqs: [
          {
                "q": "What does Lorem Ipsum mean in English?",
                "a": "The text is derived from Cicero's Latin text on ethics, starting from 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur...' ('There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain')."
          },
          {
                "q": "Why is dummy text better than typing random keyboard keys?",
                "a": "Random typing creates unnatural letter clusters and word lengths that fail to represent realistic typographical balance, kerning, and visual paragraph rhythm."
          },
          {
                "q": "Can I use generated Lorem Ipsum text in commercial design projects?",
                "a": "Yes. The text is in the public domain and is completely free to use in personal, educational, and commercial designs without licensing or attribution."
          },
          {
                "q": "Can I choose the exact number of paragraphs?",
                "a": "Yes. You can select your desired paragraph count to generate the exact volume of placeholder text needed for your mockups."
          },
          {
                "q": "Does Astonishbuddy store any information when I use this tool?",
                "a": "No. The generator runs 100% inside your browser using static JavaScript dictionaries. No data is sent over the internet or saved."
          }
    ],
    keywords: ["lorem ipsum generator","dummy text generator","placeholder text online","latin text generator","mock copy creator"]
  },
  "random-number-generator": {
    id: "random-number-generator",
    name: "Random Number Generator",
    shortIntro: "The Astonishbuddy Random Number Generator generates true, unbiased random numbers across custom numerical ranges. Perfect for prize drawings, statistics sampling, games, and research with cryptographic randomness.",
    guideContent: (
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Whether selecting a fair winner for an online giveaway, rolling dice for tabletop roleplaying games, conducting random sampling for academic research, or simulating statistical models, having a source of verifiable, unbiased random numbers is critical. Our Random Number Generator leverages hardware-backed cryptographic entropy to ensure that every generated integer is statistically independent and fair.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          True Randomness vs Pseudo-Randomness
        </h3>
        <p style={{ marginBottom: "16px" }}>
          Standard programming functions like <code style={{ color: "var(--accent-1)" }}>Math.random()</code> are pseudo-random: they use deterministic mathematical formulas based on an internal clock seed. Given enough observed outputs, an attacker can predict future numbers. In contrast, Astonishbuddy utilizes the browser&apos;s native <code style={{ color: "var(--accent-1)" }}>window.crypto.getRandomValues()</code> API. This pulls true hardware entropy from operating system kernel events (such as disk timings, thermal noise, and CPU interrupt variations), guaranteeing non-deterministic randomness.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Set your Minimum and Maximum range boundaries (e.g., Min: 1, Max: 100).</li>
          <li style={{ marginBottom: "8px" }}>Select the quantity of numbers you need generated simultaneously.</li>
          <li style={{ marginBottom: "8px" }}>Toggle &quot;Allow Duplicates&quot; on or off depending on whether you are drawing raffle tickets or simulating independent dice rolls.</li>
          <li style={{ marginBottom: "8px" }}>Click &quot;Generate Numbers&quot; to see the result instantly, with a one-click Copy button.</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Illustrative Worked Examples
        </h3>
        <p style={{ marginBottom: "16px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
          Note: The following examples are illustrative random number selections.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Unbiased Raffle Winner Selection</strong></p>
        <p style={{ marginBottom: "16px" }}>
          A community giveaway has 350 registered participants numbered 1 through 350. Setting Min: 1, Max: 350, Quantity: 1 produces a completely fair, unmanipulated winning ticket number.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Multi-Sided Dice Simulator</strong></p>
        <p style={{ marginBottom: "16px" }}>
          To simulate rolling four 20-sided dice (4d20) in tabletop gaming, set Min: 1, Max: 20, Quantity: 4, and Allow Duplicates: Yes. The tool outputs four independent numbers instantaneously.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Common Mistakes to Avoid
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Forgetting to disable duplicate numbers when drawing multiple prize winners (so the same participant is not drawn twice).</li>
          <li style={{ marginBottom: "8px" }}>Confusing inclusive vs exclusive boundaries: our tool is always <strong>inclusive</strong>, meaning both the minimum and maximum numbers can be selected.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Privacy and Integrity
        </h3>
        <p style={{ marginBottom: "16px" }}>
          All computations are executed locally on your device hardware without remote server intervention. No drawing results are recorded, logged, or altered.
        </p>
      </div>
    ),
    faqs: [
          {
                "q": "How does this tool guarantee that numbers are completely unbiased?",
                "a": "Our generator uses the Web Crypto API (crypto.getRandomValues), which gathers unpredictable physical entropy from your device hardware to generate uniformly distributed random numbers."
          },
          {
                "q": "Can I generate multiple unique numbers without duplicates?",
                "a": "Yes. By switching off the 'Allow Duplicates' option, the tool ensures that every number in your batch is strictly unique, perfect for lottery or contest drawings."
          },
          {
                "q": "What is the maximum number range supported?",
                "a": "You can generate random integers up to standard JavaScript safe integer limits (up to 9,007,199,254,740,991), supporting virtually any practical scale."
          },
          {
                "q": "Are the minimum and maximum boundaries included in the draw?",
                "a": "Yes. The range is inclusive, meaning both your exact minimum and maximum numbers have an equal mathematical probability of being selected."
          },
          {
                "q": "Can I use this tool for research data sampling?",
                "a": "Yes. The underlying uniform distribution algorithm meets rigorous scientific standards for random sampling and experimental assignment."
          },
          {
                "q": "Does Astonishbuddy store or record the drawn numbers?",
                "a": "No. The calculation runs entirely inside your browser's local JavaScript environment. No drawing outcomes or parameters are stored on our servers."
          }
    ],
    keywords: ["random number generator","rng online free","pick random number","raffle number picker","crypto random numbers"]
  },
  "text-sorter": {
    id: "text-sorter",
    name: "Text Sorter",
    shortIntro: "The Astonishbuddy Text Sorter organizes text lines alphabetically (A-Z or Z-A) or by length, supports line and word modes, reverses, shuffles, and removes duplicate lines instantly with complete client-side security.",
    guideContent: (
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Managing disorganized data lists, customer email inventories, product SKU logs, or code references manually is tedious and prone to human error. Our Text Sorter enables writers, spreadsheet analysts, programmers, and administrative professionals to instantly organize, sort, reverse, and deduplicate lists of text directly in the browser.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Key Sorting Modes and Capabilities
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Alphabetical Sort (A to Z &amp; Z to A):</strong> Arranges lines or words in standard or reverse alphabetical order.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Sort by Length:</strong> Orders lines or words from shortest to longest.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Line &amp; Word Modes:</strong> Toggle between sorting line-by-line or sorting individual space-separated words.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Deduplication &amp; Utilities:</strong> Remove duplicate items, reverse the list order, or randomize order with Shuffle in one click.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Paste your unorganized list into the input box, with each item on a separate line.</li>
          <li style={{ marginBottom: "8px" }}>Choose whether to sort in Line Mode or Word Mode, then select your sorting order (A to Z, Z to A, or By Length).</li>
          <li style={{ marginBottom: "8px" }}>Optionally click &quot;No Duplicates&quot;, &quot;Reverse List&quot;, or &quot;Shuffle&quot; to modify your dataset.</li>
          <li style={{ marginBottom: "8px" }}>Review the sorted result in the output panel and click Copy to Clipboard.</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Illustrative Worked Examples
        </h3>
        <p style={{ marginBottom: "16px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
          Note: The following examples are illustrative list organization cases.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Deduplicating and Sorting an Email List</strong></p>
        <p style={{ marginBottom: "8px" }}><em>Raw Input:</em></p>
        <pre style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "8px" }}>
sarah@company.com
alex@domain.com
sarah@company.com
zach@test.org
alex@domain.com
        </pre>
        <p style={{ margin: "12px 0 8px" }}><em>Sorted (A-Z with Deduplication):</em></p>
        <pre style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "8px" }}>
alex@domain.com
sarah@company.com
zach@test.org
        </pre>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Tips for Accurate Sorting
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Empty lines and excess blank spaces are automatically filtered out during sorting.</li>
          <li style={{ marginBottom: "8px" }}>For case-sensitive sorting, uppercase letters standardly precede lowercase letters in ASCII order.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Privacy Guarantee
        </h3>
        <p style={{ marginBottom: "16px" }}>
          Your proprietary contact lists, customer leads, and internal data are sorted strictly in your local browser memory. Nothing is ever sent to our servers.
        </p>
      </div>
    ),
    faqs: [
          {
                "q": "What is the difference between Line Mode and Word Mode?",
                "a": "Line Mode treats each newline as an independent list item, whereas Word Mode splits your text by whitespace to sort individual words."
          },
          {
                "q": "How does the deduplication feature work?",
                "a": "The tool analyzes each line and removes exact duplicates, leaving only the first unique instance in your sorted result."
          },
          {
                "q": "Can I sort text by line length?",
                "a": "Yes. You can organize lines from shortest to longest or longest to shortest, which is especially useful for poetry, titles, or keyword research."
          },
          {
                "q": "Does leading whitespace affect sorting?",
                "a": "Yes, spaces have a lower ASCII value than letters. We recommend using the 'Trim Whitespace' option to avoid unexpected sorting."
          },
          {
                "q": "Is there a limit on how many lines I can sort at once?",
                "a": "Because processing happens directly on your computer's high-speed JavaScript engine, you can effortlessly sort tens of thousands of lines in seconds."
          },
          {
                "q": "Does Astonishbuddy store my sorted contact lists or emails?",
                "a": "No. The sorting algorithm runs 100% client-side in your browser. No data is stored, transmitted, or logged."
          }
    ],
    keywords: ["text sorter online","sort lines alphabetically","remove duplicate lines","alphabetical list organizer","natural numerical sort"]
  },
  "color-converter": {
    id: "color-converter",
    name: "Color Code Converter",
    shortIntro: "The Astonishbuddy Color Code Converter translates color codes between HEX, RGB, and HSL formats in real time. Inspect visual color swatches and copy CSS-ready syntax with instant precision.",
    guideContent: (
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Color representation is a fundamental aspect of digital design and web development. Different platforms and tools demand different color notations: graphic designers often work with HEX codes, CSS animations frequently utilize RGBA for opacity, while modern CSS design systems favor HSL for intuitive lightness adjustments and theme generation. Our Color Code Converter provides seamless, bi-directional conversions between all primary web color formats.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Understanding the Color Models
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>HEX (Hexadecimal):</strong> A six-digit alphanumeric code (#RRGGBB) representing Red, Green, and Blue light channels in base-16. Standard in HTML and graphic design software.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>RGB (Red, Green, Blue):</strong> Defines colors using numerical intensity channels ranging from 0 to 255. RGBA adds an alpha channel (0.0 to 1.0) for transparency.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>HSL (Hue, Saturation, Lightness):</strong> Models color as a cylindrical coordinate system. Hue (0°–360°) sets the base color, Saturation (0%–100%) sets purity, and Lightness (0%–100%) controls illumination.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Enter any valid HEX code (e.g., #4F46E5), RGB value, or HSL coordinate into the input field.</li>
          <li style={{ marginBottom: "8px" }}>View the live preview swatch to confirm the visual appearance immediately.</li>
          <li style={{ marginBottom: "8px" }}>Inspect the simultaneous conversions across all other formats.</li>
          <li style={{ marginBottom: "8px" }}>Click the Copy button next to your desired format to grab CSS-ready code.</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Illustrative Worked Examples
        </h3>
        <p style={{ marginBottom: "16px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
          Note: The following examples are illustrative color translations.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Converting Brand Indigo</strong></p>
        <p style={{ marginBottom: "16px" }}>
          <em>HEX:</em> <code style={{ color: "var(--accent-1)" }}>#6366f1</code><br />
          <em>RGB:</em> <code style={{ color: "var(--accent-1)" }}>rgb(99, 102, 241)</code><br />
          <em>HSL:</em> <code style={{ color: "var(--accent-1)" }}>hsl(239, 84%, 67%)</code>
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Creating a Button Hover State with HSL</strong></p>
        <p style={{ marginBottom: "16px" }}>
          With HSL, creating a hover state is effortless. Taking the base color <code style={{ color: "var(--accent-1)" }}>hsl(239, 84%, 67%)</code> and decreasing Lightness by 10% produces the perfect darker hover color: <code style={{ color: "var(--accent-1)" }}>hsl(239, 84%, 57%)</code>.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Design Tips and Best Practices
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Always test color combinations against Web Content Accessibility Guidelines (WCAG) contrast minimums (at least 4.5:1 for normal text).</li>
          <li style={{ marginBottom: "8px" }}>3-digit HEX codes (e.g., #F00) automatically expand to 6 digits (#FF0000).</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Privacy and Security
        </h3>
        <p style={{ marginBottom: "16px" }}>
          Calculations are computed locally in your web browser with zero network latency and no external tracking.
        </p>
      </div>
    ),
    faqs: [
          {
                "q": "How does HEX color notation work?",
                "a": "HEX notation uses two hexadecimal digits (00 to FF) for each of the Red, Green, and Blue color channels, providing over 16.7 million possible color combinations."
          },
          {
                "q": "Why do frontend developers prefer HSL over RGB?",
                "a": "HSL is intuitive for human designers. Creating lighter tints, darker shades, or desaturated variations simply requires adjusting one percentage value (Lightness or Saturation)."
          },
          {
                "q": "Can I input shorthand 3-digit HEX codes like #fff?",
                "a": "Yes. Our converter automatically expands 3-digit shorthand codes into standard 6-digit hexadecimal format (#fff becomes #ffffff)."
          },
          {
                "q": "Does this tool support CSS-ready copyable formats?",
                "a": "Yes. Clicking the copy button copies the exact CSS format (e.g., rgb(255, 0, 0) or hsl(0, 100%, 50%)) directly to your clipboard."
          },
          {
                "q": "What is the difference between RGB and CMYK?",
                "a": "RGB is an additive color model used for illuminated digital screens, while CMYK is a subtractive color model used for physical ink printing on paper."
          },
          {
                "q": "Is my color history or palette data saved on your servers?",
                "a": "No. The tool runs purely on client-side JavaScript. Your color selections remain completely private on your own device."
          }
    ],
    keywords: ["color code converter","hex to rgb online","rgb to hsl converter","css color converter","hex color picker"]
  },
  "bulk-qrcode-generator": {
    id: "bulk-qrcode-generator",
    name: "Bulk QR Code Generator",
    shortIntro: "The Astonishbuddy Bulk QR Code Generator produces dozens or hundreds of custom QR codes simultaneously from a list of URLs or text entries. Download batch QR codes packaged neatly into a single ZIP archive or printable PDF.",
    guideContent: (
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Generating individual QR codes one by one for event tickets, retail inventory tags, student ID cards, or multi-product catalogs is tedious and time-consuming. Our Bulk QR Code Generator automates mass QR code creation: simply paste a list of URLs or text strings, configure your preferred styling, and generate hundreds of unique high-resolution QR codes in seconds.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Key Features for High-Volume Production
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Instant Batch Generation:</strong> Paste line-separated links or identifiers to render multiple QR codes simultaneously.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Automated ZIP Packaging:</strong> Download all generated codes neatly organized in a single compressed ZIP folder, named sequentially or according to your input lines.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Printable PDF Layout:</strong> Export batch codes arranged in an organized grid ready for direct printing on standard label sheets.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Enter or paste your list of URLs or identifiers into the textarea, placing each entry on a new line.</li>
          <li style={{ marginBottom: "8px" }}>Choose your desired image resolution and error correction level.</li>
          <li style={{ marginBottom: "8px" }}>Click &quot;Generate All QR Codes&quot; and watch the batch progress bar.</li>
          <li style={{ marginBottom: "8px" }}>Click &quot;Download All as ZIP&quot; or &quot;Export PDF&quot; to save your complete collection immediately.</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Illustrative Worked Examples
        </h3>
        <p style={{ marginBottom: "16px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
          Note: The following examples are illustrative batch generation scenarios.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Conference Attendance Badges</strong></p>
        <p style={{ marginBottom: "16px" }}>
          Paste 50 unique attendee check-in links (e.g., <code style={{ color: "var(--accent-1)" }}>https://event.com/checkin?id=101</code> through <code style={{ color: "var(--accent-1)" }}>https://event.com/checkin?id=150</code>). The tool generates 50 crisp PNG files packaged in a single ZIP file in under 3 seconds.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Warehouse Inventory Tracking</strong></p>
        <p style={{ marginBottom: "16px" }}>
          Input 100 internal SKU part codes (e.g., <code style={{ color: "var(--accent-1)" }}>SKU-8841-A</code>, <code style={{ color: "var(--accent-1)" }}>SKU-8842-B</code>). The resulting QR codes can be printed directly on label sheets for immediate shelf scanning.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Tips for High-Volume Batches
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Ensure there are no blank lines or trailing empty spaces in your input text to avoid generating blank codes.</li>
          <li style={{ marginBottom: "8px" }}>Ensure full URL protocols (<code style={{ color: "var(--accent-1)" }}>https://</code>) are included if you intend for scanners to launch browser tabs automatically.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Data Privacy and Speed
        </h3>
        <p style={{ marginBottom: "16px" }}>
          Batch generation uses client-side JavaScript multi-threading and in-browser ZIP compression (JSZip). Your proprietary URLs, customer IDs, and inventory records remain strictly on your local computer.
        </p>
      </div>
    ),
    faqs: [
          {
                "q": "How many QR codes can I generate at one time?",
                "a": "You can comfortably generate batches of 100 to 500 QR codes in a single run. Since generation happens in your local browser, larger batches simply take a few extra seconds."
          },
          {
                "q": "How should I format the input text for bulk generation?",
                "a": "Simply place each URL, part number, or text string on its own separate line in the text box. The generator treats each line as a distinct QR code."
          },
          {
                "q": "Can I download all generated QR codes in a single file?",
                "a": "Yes. Clicking 'Download All as ZIP' bundles all generated PNG files into an organized ZIP archive with sequential filenames."
          },
          {
                "q": "Do bulk-generated QR codes expire or have scan limits?",
                "a": "No. All generated codes are static and direct. They will continue scanning indefinitely without scan caps or expiration dates."
          },
          {
                "q": "What resolution are the downloaded QR code images?",
                "a": "Codes are generated at high resolution (up to 1000x1000 pixels), ensuring sharp, clear print quality on stickers, badges, and posters."
          },
          {
                "q": "Does Astonishbuddy store my list of ticket links or inventory numbers?",
                "a": "No. The entire batch processing pipeline runs locally in your web browser. Your lists are never uploaded to any remote server or database."
          }
    ],
    keywords: ["bulk qr code generator","batch qr code creator","generate multiple qr codes","mass qr code download zip","qr code batch processing"]
  },
  "pdf-compressor": {
    id: "pdf-compressor",
    name: "PDF Compressor",
    shortIntro: "The Astonishbuddy PDF Compressor reduces large PDF document file sizes while preserving sharp typography, vector drawings, and visual clarity with 100% client-side security.",
    guideContent: (
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Portable Document Format (PDF) files are the standard for legal contracts, academic papers, tax filings, invoices, and corporate presentations. However, high-resolution scanned pages and embedded uncompressed graphics often bloat PDF files to 20MB, 50MB, or more—exceeding strict email attachment limits and job application portal caps. Our PDF Compressor solves this problem by shrinking PDF sizes directly in your browser.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          How Client-Side PDF Compression Operates
        </h3>
        <p style={{ marginBottom: "16px" }}>
          Unlike standard online PDF utilities that require you to upload confidential legal or financial paperwork to unknown cloud servers, Astonishbuddy runs client-side PDF rendering and reassembly directly inside your browser:
        </p>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Browser Canvas Rendering (pdf.js):</strong> Each page of your PDF document is rendered onto an offscreen HTML5 canvas using the high-performance pdf.js rendering engine at your selected scale factor.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Targeted JPEG Compression:</strong> The rendered page canvas is re-encoded as an optimized JPEG image using your selected compression preset (Extreme, Recommended, or High Quality).</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Document Reassembly (pdf-lib):</strong> Each compressed page is embedded into a fresh, streamlined PDF document generated with pdf-lib and saved directly to your device without network transit.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Step-by-Step Usage Guide
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Select or drag and drop your PDF document into the upload area.</li>
          <li style={{ marginBottom: "8px" }}>Select your desired compression intensity (Standard is recommended for general documents; High for large scanned files).</li>
          <li style={{ marginBottom: "8px" }}>Wait a moment while the local WebAssembly engine processes the document pages.</li>
          <li style={{ marginBottom: "8px" }}>Inspect the file size savings and click Download Compressed PDF.</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Illustrative Worked Examples
        </h3>
        <p style={{ marginBottom: "16px", fontSize: "14px", fontStyle: "italic", color: "var(--text-muted)" }}>
          Note: The following examples are illustrative benchmarks. Actual file size savings vary depending on page count, image resolution, and original document structure.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Scanned Document Compression</strong></p>
        <p style={{ marginBottom: "16px" }}>
          A 12-page scanned document measuring 18.4 MB compressed using the Recommended preset re-renders pages onto canvas, dropping file size to ~2.1 MB (~88% reduction) for easy emailing.
        </p>
        <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Multi-Page Report</strong></p>
        <p style={{ marginBottom: "16px" }}>
          A 45-page presentation with figures measuring 9.5 MB compressed using the High Quality preset produces a compact ~3.2 MB output while preserving clear legibility.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Tips and Common Mistakes
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Documents containing only digital text (no scanned images) are already compact; expect modest 5% to 20% size reductions on pure text PDFs.</li>
          <li style={{ marginBottom: "8px" }}>Always inspect the downloaded PDF to ensure digital signatures and form fields remain intact before submitting to official institutions.</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Uncompromised Confidentiality and Security
        </h3>
        <p style={{ marginBottom: "16px" }}>
          We understand that PDF files frequently contain highly sensitive personal records, tax returns, bank statements, and legal agreements. <strong>Your files are never uploaded to any server.</strong> All parsing, re-compression, and generation happen 100% inside your browser&apos;s isolated sandbox.
        </p>
      </div>
    ),
    faqs: [
          {
                "q": "How does browser-based PDF compression work without uploading files?",
                "a": "Our tool runs modern WebAssembly (WASM) compiled libraries directly inside your web browser thread, processing PDF stream structures locally on your device hardware."
          },
          {
                "q": "Will compressing a PDF affect visual readability?",
                "a": "Each page is re-rendered to canvas and encoded using your selected compression level. For optimal sharpness on documents containing fine text, choose the High Quality preset."
          },
          {
                "q": "Is it safe to compress confidential legal, tax, or medical documents?",
                "a": "Yes, completely safe. Because the file is processed locally in your browser memory and never uploaded to any cloud server, third parties cannot access your sensitive data."
          },
          {
                "q": "Why do some PDF files compress by 80% while others only compress by 10%?",
                "a": "PDFs containing high-resolution scanned camera photos compress dramatically (70-90%). PDFs containing primarily digital text and vector graphics are already compact."
          },
          {
                "q": "Can I compress password-protected or encrypted PDF documents?",
                "a": "For security reasons, password-protected PDFs must first have their password removed before client-side optimization algorithms can parse internal content streams."
          },
          {
                "q": "Are there any file size limits or daily usage limits?",
                "a": "You can upload PDF files up to 100 MB. This client-side limit ensures smooth browser rendering without running out of memory. There are no daily usage limits, page count restrictions, or paid tiers."
          }
    ],
    keywords: ["pdf compressor online","reduce pdf size free","compress pdf without losing quality","compress pdf client side","secure pdf compressor"]
  },
  "image-quality-enhancer": {
    id: "image-quality-enhancer",
    name: "Image Quality Enhancer",
    shortIntro: "Looking for a free image quality enhancer online? This tool lets you upscale images up to 4×, sharpen details, and adjust brightness, contrast, and saturation — all without uploading anything to a server. Enhance low-resolution photos, old pictures, or any image instantly in your browser. No login, no watermark, 100% free.",
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Whether you want to increase image resolution, make a blurry image clearer, or simply boost the colors and sharpness of any photo, this tool does it all in seconds — entirely within your browser.
        </p>
        <p style={{ marginBottom: "16px" }}>
          Perfect for photographers, designers, bloggers, and anyone who needs to improve image quality online for free.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          How to Enhance Image Quality Online
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "10px" }}>Upload your image (JPG, PNG, WebP)</li>
          <li style={{ marginBottom: "10px" }}>Choose an upscale factor (1× to 4×)</li>
          <li style={{ marginBottom: "10px" }}>Adjust sharpness, brightness, contrast, and saturation</li>
          <li style={{ marginBottom: "10px" }}>Click "Enhance Image" and download the result</li>
        </ol>
        <p style={{ marginBottom: "16px" }}>
          All processing happens locally — your image never leaves your device.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Why Use This Image Enhancer?
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Upscale image resolution up to 4× without external AI servers</li>
          <li style={{ marginBottom: "8px" }}>Sharpen blurry or low-quality images</li>
          <li style={{ marginBottom: "8px" }}>Adjust brightness, contrast, and saturation</li>
          <li style={{ marginBottom: "8px" }}>Before & after comparison built-in</li>
          <li style={{ marginBottom: "8px" }}>100% free, no login, no watermark</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Enhancement Features Explained
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Upscale Factor:</strong> Multiplies the image resolution (1× to 4×) using high-quality interpolation</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Sharpness:</strong> Applies an unsharp mask to bring out fine details and edges</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Brightness:</strong> Lightens or darkens the overall image</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Contrast:</strong> Increases or reduces the difference between light and dark areas</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Saturation:</strong> Boosts or reduces the intensity of colors</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Use Cases
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Improving old or low-resolution photos</li>
          <li style={{ marginBottom: "8px" }}>Sharpening images for print or large displays</li>
          <li style={{ marginBottom: "8px" }}>Enhancing product photos for e-commerce</li>
          <li style={{ marginBottom: "8px" }}>Preparing social media images</li>
          <li style={{ marginBottom: "8px" }}>Restoring scanned documents or images</li>
        </ul>
      </div>
    ),
    faqs: [
      { q: "Can this tool make blurry images clear?", a: "Our sharpness slider applies an unsharp mask which significantly reduces blur and enhances edge detail. For heavily blurred images, combining high sharpness with a 2× upscale gives the best result." },
      { q: "Does upscaling really improve quality?", a: "Upscaling increases the pixel count using high-quality interpolation. While it won't add detail that was never there, it makes images look better at larger sizes and allows sharper rendering." },
      { q: "Is the enhancement done on my device?", a: "Yes, 100%. All processing uses your browser's Canvas API. Your image never leaves your device." },
      { q: "What format is the output?", a: "The enhanced image is always saved as a high-quality PNG to preserve maximum quality after enhancement." },
      { q: "Is there a file size limit?", a: "You can upload images up to 20 MB. For very large output sizes (e.g. 4× on a large image), processing may take a few seconds." }
    ],
    keywords: ["image quality enhancer", "increase image resolution online", "sharpen image online free", "upscale image online", "enhance image quality free", "improve image quality online"]
  },
  "bulk-image-converter": {
    id: "bulk-image-converter",
    name: "Bulk Image Converter",
    shortIntro: "Looking for a free bulk image converter online? This tool lets you convert multiple images at once between PNG, JPG, WebP, and more — all in your browser with no uploads. Set quality, resize images while converting, and download everything in a single ZIP file. No login, no watermark, completely free.",
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Whether you need to convert PNG to JPG, JPG to WebP, or any other combination, this bulk converter handles dozens of files simultaneously with full quality and resize control.
        </p>
        <p style={{ marginBottom: "16px" }}>
          Perfect for web developers, designers, photographers, and content creators who need to prepare image assets in specific formats.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          How to Convert Images in Bulk Online
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "10px" }}>Select your output format (JPG, PNG, or WebP)</li>
          <li style={{ marginBottom: "10px" }}>Optionally set quality and resize dimensions</li>
          <li style={{ marginBottom: "10px" }}>Drop multiple images or click to browse</li>
          <li style={{ marginBottom: "10px" }}>Click "Convert All" and download as ZIP</li>
        </ol>
        <p style={{ marginBottom: "16px" }}>
          All conversions happen instantly in your browser — your images are never uploaded to any server.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Supported Conversions
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>PNG → JPG (reduce file size with white background fill)</li>
          <li style={{ marginBottom: "8px" }}>JPG → WebP (modern format for web optimization)</li>
          <li style={{ marginBottom: "8px" }}>WebP → PNG (clean PNG format export)</li>
          <li style={{ marginBottom: "8px" }}>AVIF / BMP / GIF → any format</li>
          <li style={{ marginBottom: "8px" }}>Any image format → JPG, PNG, or WebP</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Key Features
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Bulk conversion:</strong> Convert dozens of images at once</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>ZIP download:</strong> Get all converted files in a single download</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Resize on convert:</strong> Set max width and height while converting</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Quality control:</strong> Adjust output quality for JPG and WebP</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Quick presets:</strong> One-click PNG→JPG, JPG→WebP, and more</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Drag & drop:</strong> Drop your files directly into the tool</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Use Cases
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Converting product photos for e-commerce (JPG → WebP)</li>
          <li style={{ marginBottom: "8px" }}>Preparing web assets in the right format</li>
          <li style={{ marginBottom: "8px" }}>Converting PNG screenshots to smaller JPG files</li>
          <li style={{ marginBottom: "8px" }}>Batch resizing images for social media</li>
          <li style={{ marginBottom: "8px" }}>Converting legacy AVIF/BMP files to modern formats</li>
        </ul>
      </div>
    ),
    faqs: [
      { q: "Can I convert multiple images at once?", a: "Yes! You can drop as many images as you like and convert them all in one click. Download everything as a ZIP archive." },
      { q: "What formats are supported as input?", a: "You can upload JPG, PNG, WebP, BMP, GIF, and AVIF images. Any format your browser can display can be converted." },
      { q: "Does converting PNG to JPG lose quality?", a: "JPG uses lossy compression, so there will be a slight quality reduction. You can control this with the quality slider. Using 90%+ gives excellent results that are hard to distinguish from the original." },
      { q: "Why is my WebP larger than the original JPG?", a: "WebP is generally more efficient than JPG for photos. However, if the original JPG was already highly compressed, the WebP output at higher quality may be slightly larger. Reduce the quality slider to get a smaller file." },
      { q: "Is there a limit on how many files I can convert?", a: "There is no hard limit. However, very large batches may slow down your browser depending on your device performance." },
      { q: "Are my images uploaded to your servers?", a: "No. All conversion happens entirely inside your browser using the Canvas API. Your images never leave your device." }
    ],
    keywords: ["bulk image converter", "convert images online free", "png to jpg converter", "jpg to webp converter", "batch image converter", "image format converter online", "convert multiple images at once"]
  },
  "sql-formatter": {
    id: "sql-formatter",
    name: "SQL Formatter",
    shortIntro: "Looking for a free SQL formatter and beautifier online? This SQL formatter instantly formats messy SQL queries with proper indentation, keyword casing, and syntax highlighting. Supports SELECT, JOIN, INSERT, UPDATE, CREATE, and all major SQL dialects. Minify SQL to one line or beautify it for readability — no login required, 100% free and private.",
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Whether you are debugging a complex multi-table query or preparing SQL for documentation, this SQL beautifier makes your code clean, readable, and professionally formatted in seconds.
        </p>
        <p style={{ marginBottom: "16px" }}>
          Works with MySQL, PostgreSQL, SQLite, SQL Server, Oracle, and most SQL dialects — all entirely in your browser.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          How to Format SQL Online
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "10px" }}>Paste your SQL query into the input box</li>
          <li style={{ marginBottom: "10px" }}>Choose indent size and keyword case (UPPER / lower)</li>
          <li style={{ marginBottom: "10px" }}>Click "Format SQL" to beautify</li>
          <li style={{ marginBottom: "10px" }}>Copy the formatted output or use "Minify" to compact it</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Features
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Format SQL:</strong> Adds proper indentation and newlines for each clause</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Minify SQL:</strong> Strips all extra whitespace and comments to one compact line</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Keyword casing:</strong> Convert all SQL keywords to UPPERCASE or lowercase</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Syntax highlighting:</strong> Color-coded keywords, functions, strings, numbers, and comments</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>SQL Quick Reference:</strong> Built-in cheat sheet for all major SQL keywords and functions</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Plain text view:</strong> Switch from highlighted to plain text for easy copying</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Supported SQL Statements
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>SELECT with JOINs (INNER, LEFT, RIGHT, FULL, CROSS)</li>
          <li style={{ marginBottom: "8px" }}>WHERE, GROUP BY, HAVING, ORDER BY, LIMIT</li>
          <li style={{ marginBottom: "8px" }}>INSERT INTO, UPDATE SET, DELETE FROM</li>
          <li style={{ marginBottom: "8px" }}>CREATE TABLE, ALTER TABLE, DROP TABLE</li>
          <li style={{ marginBottom: "8px" }}>CTEs (WITH clauses), subqueries, UNION</li>
          <li style={{ marginBottom: "8px" }}>Window functions (ROW_NUMBER, RANK, LAG, etc.)</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Use Cases
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Formatting SQL for code reviews and documentation</li>
          <li style={{ marginBottom: "8px" }}>Debugging complex multi-table queries</li>
          <li style={{ marginBottom: "8px" }}>Standardizing SQL style across a team</li>
          <li style={{ marginBottom: "8px" }}>Minifying SQL for embedding in application config</li>
          <li style={{ marginBottom: "8px" }}>Learning SQL structure and syntax</li>
        </ul>
      </div>
    ),
    faqs: [
      { q: "Does this work with MySQL, PostgreSQL, and SQL Server?", a: "Yes. The formatter is dialect-agnostic and works with any standard SQL syntax including MySQL, PostgreSQL, SQLite, SQL Server (T-SQL), and Oracle SQL." },
      { q: "What is SQL formatting?", a: "SQL formatting is the process of adding consistent indentation, newlines, and spacing to SQL queries so they are easier to read and understand. Formatted SQL separates each clause (SELECT, FROM, WHERE, etc.) onto its own line." },
      { q: "What does SQL minification do?", a: "Minification removes all unnecessary whitespace, newlines, and comments from a SQL query, reducing it to the smallest possible single-line version. This is useful for embedding SQL in JSON configs or application code." },
      { q: "Does it handle comments?", a: "Yes. Single-line comments (--) and multi-line comments (/* */) are recognized and highlighted. Comments are removed during minification." },
      { q: "Is my SQL sent to a server?", a: "No. All processing happens locally in your browser using JavaScript. Your SQL queries never leave your device." },
      { q: "What is the difference between UPPER and lower keywords?", a: "UPPER keywords mode converts all SQL reserved words (SELECT, WHERE, JOIN, etc.) to all-caps, which is the traditional SQL style. Lower keywords mode converts them to all lowercase, which some modern codebases prefer." }
    ],
    keywords: ["sql formatter online", "sql beautifier", "format sql online free", "sql minifier", "sql syntax highlighter", "sql pretty print", "beautify sql query", "sql formatter mysql postgresql"]
  },
  "uuid-generator": {
    id: "uuid-generator",
    name: "UUID Generator",
    shortIntro: "Looking for a free UUID generator online? This tool generates cryptographically random UUID v4s instantly — one at a time or in bulk up to 100,000. Download your UUIDs as TXT, CSV, or JSON. Supports multiple formats including lowercase, UPPERCASE, {GUID braces}, and URN notation. No login, no server calls, 100% free.",
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Whether you need a single unique ID for a database record, or thousands of UUIDs for bulk data seeding, testing, or generating unique keys — this tool does it all instantly in your browser.
        </p>
        <p style={{ marginBottom: "16px" }}>
          All UUIDs are generated using your browser's <code>crypto.randomUUID()</code> API, which produces cryptographically strong random identifiers that comply with RFC 4122.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          How to Generate UUIDs Online
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "10px" }}>Choose your output format (lowercase, UPPERCASE, braces, or URN)</li>
          <li style={{ marginBottom: "10px" }}>Click "Generate" for a single UUID, or select a bulk count</li>
          <li style={{ marginBottom: "10px" }}>Copy individual UUIDs or click "Copy All" for the full list</li>
          <li style={{ marginBottom: "10px" }}>Download as TXT, CSV, or JSON for use in your project</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          UUID Formats Supported
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>lowercase:</strong> f47ac10b-58cc-4372-a567-0e02b2c3d479</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>UPPERCASE:</strong> F47AC10B-58CC-4372-A567-0E02B2C3D479</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>GUID braces:</strong> {"{"}F47AC10B-58CC-4372-A567-0E02B2C3D479{"}"}</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>URN:</strong> urn:uuid:f47ac10b-58cc-4372-a567-0e02b2c3d479</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          What is UUID v4?
        </h3>
        <p style={{ marginBottom: "16px" }}>
          UUID (Universally Unique Identifier) v4 is a 128-bit random identifier formatted as 32 hexadecimal digits separated by hyphens in the pattern 8-4-4-4-12. Version 4 uses 122 bits of randomness, making the probability of collision virtually zero — around 1 in 5.3×10³⁶.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Use Cases
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Primary keys in PostgreSQL, MySQL, MongoDB, DynamoDB</li>
          <li style={{ marginBottom: "8px" }}>Unique session tokens and API keys</li>
          <li style={{ marginBottom: "8px" }}>Test data seeding and database population</li>
          <li style={{ marginBottom: "8px" }}>Distributed system IDs with no central coordinator</li>
          <li style={{ marginBottom: "8px" }}>Filename deduplication and asset naming</li>
          <li style={{ marginBottom: "8px" }}>Correlation IDs in microservices and logging</li>
        </ul>
      </div>
    ),
    faqs: [
      { q: "What is the difference between UUID and GUID?", a: "UUID (Universally Unique Identifier) and GUID (Globally Unique Identifier) are essentially the same thing. GUID is Microsoft's term for UUID, and both follow the same RFC 4122 specification." },
      { q: "How unique is UUID v4?", a: "UUID v4 uses 122 bits of randomness, giving approximately 5.3×10³⁶ possible values. To have a 50% chance of a collision, you would need to generate 2.71 quintillion UUIDs — making collisions practically impossible." },
      { q: "Can I use UUIDs as database primary keys?", a: "Yes. UUIDs are widely used as primary keys in relational databases (PostgreSQL, MySQL) and NoSQL databases (MongoDB, DynamoDB). PostgreSQL has a native UUID type and can auto-generate them with gen_random_uuid()." },
      { q: "Are the generated UUIDs truly random?", a: "Yes. This tool uses the browser's built-in crypto.randomUUID() API which produces cryptographically secure random numbers, the same source used for secure encryption." },
      { q: "Are my UUIDs sent to a server?", a: "No. UUID generation happens entirely in your browser using the Web Crypto API. Nothing is transmitted to our servers." },
      { q: "What is the maximum number of UUIDs I can generate?", a: "You can generate up to 100,000 UUIDs in a single click. For larger volumes, simply generate multiple batches and concatenate the downloaded files." }
    ],
    keywords: ["uuid generator online", "guid generator free", "uuid v4 generator", "bulk uuid generator", "generate unique id online", "random uuid generator", "uuid generator no login", "online guid generator"]
  },
  "markdown-converter": {
    id: "markdown-converter",
    name: "Markdown Converter",
    shortIntro: "Looking for a free Markdown to HTML converter online? This tool instantly converts Markdown to HTML with a live rendered preview, and also converts HTML back to Markdown. Supports full GitHub Flavored Markdown (GFM) including tables, code blocks, task lists, and more. No login, no ads, 100% free and runs entirely in your browser.",
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Whether you are writing documentation, a README file, a blog post, or converting HTML email templates to Markdown — this bidirectional converter handles it all with a live preview.
        </p>
        <p style={{ marginBottom: "16px" }}>
          Type in the left panel and instantly see clean HTML or Markdown output on the right, plus a rendered preview that shows exactly how your content will look.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          How to Convert Markdown to HTML
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "10px" }}>Select "Markdown → HTML" mode</li>
          <li style={{ marginBottom: "10px" }}>Type or paste your Markdown into the left panel</li>
          <li style={{ marginBottom: "10px" }}>HTML output appears instantly on the right</li>
          <li style={{ marginBottom: "10px" }}>Toggle the live preview to see the rendered result</li>
          <li style={{ marginBottom: "10px" }}>Click Copy to grab the HTML output</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Supported Markdown Syntax
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Headings: # H1 through ###### H6</li>
          <li style={{ marginBottom: "8px" }}>Bold, italic, strikethrough: **bold** *italic* ~~strike~~</li>
          <li style={{ marginBottom: "8px" }}>Links and images: [text](url) and ![alt](url)</li>
          <li style={{ marginBottom: "8px" }}>Unordered and ordered lists</li>
          <li style={{ marginBottom: "8px" }}>Blockquotes (&gt; text)</li>
          <li style={{ marginBottom: "8px" }}>Inline code and fenced code blocks with language labels</li>
          <li style={{ marginBottom: "8px" }}>GFM tables with headers and alignment</li>
          <li style={{ marginBottom: "8px" }}>Horizontal rules (---)</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Use Cases
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Converting README.md files to HTML for websites</li>
          <li style={{ marginBottom: "8px" }}>Generating HTML emails from Markdown drafts</li>
          <li style={{ marginBottom: "8px" }}>Stripping HTML from web content and converting to Markdown for editing</li>
          <li style={{ marginBottom: "8px" }}>Writing blog posts in Markdown and previewing the HTML output</li>
          <li style={{ marginBottom: "8px" }}>Learning Markdown syntax with instant visual feedback</li>
          <li style={{ marginBottom: "8px" }}>Converting HTML documentation back to Markdown for Git-based wikis</li>
        </ul>
      </div>
    ),
    faqs: [
      { q: "Does this support GitHub Flavored Markdown (GFM)?", a: "Yes. The converter supports GFM features including tables, fenced code blocks with language labels, strikethrough, and standard Markdown elements." },
      { q: "What is the difference between Markdown and HTML?", a: "Markdown is a lightweight plain-text formatting syntax designed to be readable as-is and convertible to HTML. HTML (HyperText Markup Language) is the standard language browsers use to render web pages." },
      { q: "Can I convert HTML emails to Markdown?", a: "Yes. Paste your HTML into HTML → Markdown mode and the tool will extract the text structure and convert headings, bold, lists, links, and tables to their Markdown equivalents." },
      { q: "Does it work offline?", a: "Yes. All conversion logic runs locally in your browser with JavaScript. No internet connection is required after the page loads." },
      { q: "Is my content sent to a server?", a: "No. Everything is processed entirely client-side. Your Markdown and HTML content never leave your device." },
      { q: "Can I use the generated HTML directly?", a: "Yes. The HTML output can be embedded in any web page, CMS, email template, or documentation system." }
    ],
    keywords: ["markdown to html converter", "html to markdown converter", "markdown converter online free", "markdown editor with preview", "markdown beautifier", "convert markdown online", "github flavored markdown converter", "md to html online"]
  },
  "diff-checker": {
    id: "diff-checker",
    name: "Diff Checker",
    shortIntro: "Looking for a free online diff checker? Compare two text blocks or code files and instantly see every added, removed, and changed line — with word-level highlighting. Choose between side-by-side and inline views. Works with any plain text, code, JSON, CSV, or config files. No login, no file upload, 100% private.",
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          This diff checker uses a Longest Common Subsequence (LCS) algorithm to compute the minimal set of changes between two texts, giving you the same quality of diff as professional tools like git diff.
        </p>
        <p style={{ marginBottom: "16px" }}>
          Beyond line-level comparison, it also performs word-level diff on changed lines — so you can see exactly which words were modified within a line, highlighted in red and green.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          How to Compare Text Online
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "10px" }}>Paste your original text in the left panel</li>
          <li style={{ marginBottom: "10px" }}>Paste your modified text in the right panel</li>
          <li style={{ marginBottom: "10px" }}>Click "Compare" to run the diff</li>
          <li style={{ marginBottom: "10px" }}>Switch between Split (side-by-side) and Inline views</li>
          <li style={{ marginBottom: "10px" }}>Toggle "Show unchanged lines" to focus on differences only</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Diff Views Explained
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Split view:</strong> Original on the left, modified on the right, aligned by line number — best for reviewing changes</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Inline view:</strong> All lines in a single column with − (removed) and + (added) markers — matches git diff style</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Word-level diff:</strong> On changed lines, individual words that differ are highlighted within the line</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Color Legend
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>🟥 <strong style={{ color: "var(--text-primary)" }}>Red:</strong> Lines or words that were removed from the original</li>
          <li style={{ marginBottom: "8px" }}>🟩 <strong style={{ color: "var(--text-primary)" }}>Green:</strong> Lines or words that were added in the modified version</li>
          <li style={{ marginBottom: "8px" }}>🟨 <strong style={{ color: "var(--text-primary)" }}>Yellow highlight:</strong> Word-level changes within a modified line</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Use Cases
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Comparing code before and after a refactor</li>
          <li style={{ marginBottom: "8px" }}>Reviewing changes to configuration files (JSON, YAML, TOML)</li>
          <li style={{ marginBottom: "8px" }}>Proofreading documents and checking edits to legal or contract text</li>
          <li style={{ marginBottom: "8px" }}>Comparing API responses or database query outputs</li>
          <li style={{ marginBottom: "8px" }}>Verifying file migrations and data transformations</li>
        </ul>
      </div>
    ),
    faqs: [
      { q: "What algorithm does this diff checker use?", a: "It uses the Longest Common Subsequence (LCS) dynamic programming algorithm — the same approach used by git diff and most professional diff tools. This produces the minimal set of changes to transform the original into the modified text." },
      { q: "What is word-level diff?", a: "When a line is changed (not fully deleted or inserted), the tool goes a step further and compares individual words within that line. This lets you see exactly which words were added or removed, not just which lines changed." },
      { q: "What types of text can I compare?", a: "Any plain text works: source code (JavaScript, Python, CSS, SQL, etc.), JSON, XML, YAML, Markdown, CSV, prose, legal text, and more." },
      { q: "Is there a file size limit?", a: "There is no enforced limit, but very large files (100,000+ lines) may take a moment to process depending on your device. For best performance with large files, compare specific sections." },
      { q: "Are my texts uploaded to a server?", a: "No. All comparison happens entirely in your browser using JavaScript. Your text never leaves your device." },
      { q: "What is the difference between split and inline view?", a: "Split view shows the original on the left and the modified version on the right, aligned by line — great for visual review. Inline view shows all lines in a single column with + and − markers, matching the traditional git diff output." }
    ],
    keywords: ["diff checker online", "text compare online", "online diff tool", "compare two files online", "text difference checker", "code diff tool", "find differences in text", "side by side diff online"]
  },
  "jwt-decoder": {
    id: "jwt-decoder",
    name: "JWT Decoder",
    shortIntro: "Looking for a free JWT decoder online? This tool decodes and inspects JSON Web Tokens instantly — displaying the header, payload, and signature with syntax highlighting, expiry time checks, and human-readable claim explanations. Your token never leaves your browser. No login, no server calls, 100% private.",
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          JWT (JSON Web Token) is a compact, URL-safe token format used for authentication and information exchange. This decoder lets you inspect any JWT token without needing a backend — decode the header and payload, verify expiry, and understand every claim.
        </p>
        <p style={{ marginBottom: "16px" }}>
          All decoding happens locally in your browser using client-side base64url decoding and JSON parsing. Your token is never transmitted to any server, making this safe to use with real tokens during development and debugging.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          How to Decode a JWT Online
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "10px" }}>Paste your JWT token (starts with eyJ…) into the input field</li>
          <li style={{ marginBottom: "10px" }}>The tool instantly decodes the header and payload</li>
          <li style={{ marginBottom: "10px" }}>Check the expiry status and time remaining</li>
          <li style={{ marginBottom: "10px" }}>Read claim explanations for all standard IANA JWT claims</li>
          <li style={{ marginBottom: "10px" }}>Copy the JSON header or payload with one click</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          JWT Structure
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Header (red):</strong> Contains token type (JWT) and signing algorithm (HS256, RS256, ES256, etc.)</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Payload (blue):</strong> Contains claims — registered (iss, sub, exp, iat) and custom claims</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Signature (green):</strong> Verifies the token hasn't been tampered with (requires secret/public key)</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Standard JWT Claims Decoded
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}><code>iss</code> — Issuer: who created the token</li>
          <li style={{ marginBottom: "8px" }}><code>sub</code> — Subject: who the token represents (usually user ID)</li>
          <li style={{ marginBottom: "8px" }}><code>aud</code> — Audience: intended recipient of the token</li>
          <li style={{ marginBottom: "8px" }}><code>exp</code> — Expiration: Unix timestamp when the token expires</li>
          <li style={{ marginBottom: "8px" }}><code>iat</code> — Issued At: Unix timestamp when the token was created</li>
          <li style={{ marginBottom: "8px" }}><code>nbf</code> — Not Before: token is not valid before this timestamp</li>
          <li style={{ marginBottom: "8px" }}><code>jti</code> — JWT ID: unique identifier to prevent replay attacks</li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Use Cases
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Debugging authentication flows in web apps</li>
          <li style={{ marginBottom: "8px" }}>Checking if a JWT token is expired</li>
          <li style={{ marginBottom: "8px" }}>Inspecting claims returned by OAuth2/OIDC providers</li>
          <li style={{ marginBottom: "8px" }}>Understanding the structure of tokens from Auth0, Firebase, AWS Cognito</li>
          <li style={{ marginBottom: "8px" }}>Learning JWT internals for security auditing</li>
        </ul>
      </div>
    ),
    faqs: [
      { q: "Is it safe to paste a real JWT here?", a: "Yes. All decoding is done 100% locally in your browser. Your token is never sent to any server. However, for production secrets with sensitive payloads, exercise caution with any online tool — use it only in trusted environments." },
      { q: "What is the difference between decoding and verifying a JWT?", a: "Decoding reads the base64-encoded header and payload without any cryptographic check. Verification confirms the signature using the secret or public key, ensuring the token wasn't tampered with. This tool only decodes — signature verification requires the secret key and must be done on your backend." },
      { q: "Why does my token show as expired?", a: "The exp claim (expiration) is a Unix timestamp. If the current time is past that timestamp, the token is expired. Expired tokens should not be accepted by your backend API." },
      { q: "What is the nbf claim?", a: "nbf stands for 'Not Before'. It's a Unix timestamp before which the token must not be accepted. This allows issuing tokens that activate at a future time." },
      { q: "What JWT algorithms are supported?", a: "This decoder supports all standard JWT algorithms: HS256/384/512, RS256/384/512, ES256/384/512, and PS256/384/512. All produce the same 3-part token structure." },
      { q: "Can I use this for JWTs from Auth0, Firebase, or AWS Cognito?", a: "Yes. JWTs from Auth0, Firebase Authentication, AWS Cognito, Okta, and any other standards-compliant JWT issuer all use the same format and can be decoded here." }
    ],
    keywords: ["jwt decoder online", "decode jwt token free", "jwt inspector", "json web token decoder", "jwt parser online", "jwt expiry checker", "decode jwt payload", "jwt debugger"]
  },
  "ai-image-extender": {
    id: "ai-image-extender",
    name: "AI Image Extender",
    shortIntro: "Extend photo backgrounds to standard aspect ratios (16:9, 4:5, 1:1) or custom ratios instantly. Free online AI uncrop tool that runs 100% in your browser for maximum privacy. Enhance layout bounds, mirror edge details, blend border gradients, and apply film grain naturally without quality loss.",
    guideContent: (
      <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
        <p style={{ marginBottom: "16px" }}>
          Need to adapt a photo for Instagram (4:5 or 1:1) or YouTube (16:9) without cropping the main subject? This AI Image Extender uses advanced edge synthesis and blending techniques to outpaint background details, providing a seamless extension.
        </p>
        <p style={{ marginBottom: "16px" }}>
          Everything happens client-side in your browser. No files are uploaded to third-party servers, ensuring complete privacy, zero latency, and 100% free unlimited usage.
        </p>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          How to Extend Photo Background Online
        </h3>
        <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "10px" }}>Upload your photo (JPG, PNG, or WebP)</li>
          <li style={{ marginBottom: "10px" }}>Select a target aspect ratio (16:9, 4:5, 1:1) or set custom dimensions</li>
          <li style={{ marginBottom: "10px" }}>Choose an expansion mode (AI Generative Expand, Blurred Depth, etc.)</li>
          <li style={{ marginBottom: "10px" }}>Adjust image scale, positioning, feathering, and grain filters</li>
          <li style={{ marginBottom: "10px" }}>Click "Generate AI Extension" and download the uncropped photo</li>
        </ol>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Key Features & Outpainting Modes
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>
            <strong style={{ color: "var(--text-primary)" }}>AI Generative Expand:</strong> Synthesizes background textures by mirroring border pixels, blurring them for depth-of-field, and applying film grain to blend boundaries.
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong style={{ color: "var(--text-primary)" }}>Blurred Depth Extend:</strong> Fills the background with a larger blurred copy of the original image, generating a modern bokeh backdrop.
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong style={{ color: "var(--text-primary)" }}>Border Color Gradient:</strong> Creates a smooth multi-stop gradient sampling dominant edge colors for dynamic blending.
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong style={{ color: "var(--text-primary)" }}>Solid Background:</strong> Fills the extended boundaries with any color or samples the dominant color automatically.
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong style={{ color: "var(--text-primary)" }}>Transparent Margins:</strong> Leaves empty areas transparent (ideal for PNG layout modifications).
          </li>
        </ul>

        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
          Why Use This Web-Based Extender?
        </h3>
        <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
          <li style={{ marginBottom: "8px" }}>Adapt images to social media guidelines without cropping out important subjects.</li>
          <li style={{ marginBottom: "8px" }}>Total data privacy: processing runs locally in browser Canvas; zero network traffic.</li>
          <li style={{ marginBottom: "8px" }}>Custom scale, translation offsets, and drag-and-drop panning control.</li>
          <li style={{ marginBottom: "8px" }}>Completely free, no login or registrations, and no watermarks on downloaded files.</li>
        </ul>
      </div>
    ),
    faqs: [
      { q: "What is an AI Image Extender?", a: "An AI Image Extender (also known as an outpainting or uncrop tool) is designed to enlarge an image beyond its original borders by generating matching background content to fill the new aspect ratio." },
      { q: "How is privacy maintained in this tool?", a: "Unlike server-based generators, this tool performs all outpainting, color sampling, and grain blending directly inside your web browser. No files are uploaded to our servers, keeping your personal photos 100% secure." },
      { q: "Can I adjust the placement of the subject?", a: "Yes. You can drag and reposition the image directly in the preview frame, or use the horizontal, vertical, and scale sliders to place the subject exactly where you want it." },
      { q: "Which formats are supported for download?", a: "You can download the extended uncropped output as JPEG, PNG, or WebP. The tool also provides custom quality compression controls for file optimization." },
      { q: "Is there any limit to the aspect ratio?", a: "No. You can select standard preset aspect ratios (16:9, 4:5, 1:1) or enter any custom width/height values to create any custom aspect ratio you require." }
    ],
    keywords: ["ai image extender", "uncrop photo online", "extend image background", "outpaint image online free", "photo border expander", "change aspect ratio without crop", "expand picture borders"]
  },
};

