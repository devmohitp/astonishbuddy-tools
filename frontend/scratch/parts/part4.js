// scratch/parts/part4.js
// Tools: jwt-decoder, base64-converter, url-converter, qr-generator, bulk-qrcode-generator

module.exports = {
  "jwt-decoder": {
    title: "JWT Decoder — Inspect JSON Web Token Header & Claims (Decode Only)",
    intro: "AstonishBuddy's JWT Decoder is a client-side inspection tool for JSON Web Tokens (RFC 7519). A standard JWT consists of three base64url-encoded segments delimited by periods (.): the JOSE Header, the Payload (Claims Set), and the Cryptographic Signature. Our tool extracts and decodes the Header and Payload segments locally using base64url decoding, parses their JSON structures, and presents timestamps (issued-at, expiration, not-before) in human-readable UTC and local time formats. IMPORTANT: This tool performs decoding only—the cryptographic signature is NOT verified because verifying a signature requires knowing the secret key (for HMAC SHA-256) or public key certificate (for RSA/ECDSA). For your security, never paste active production tokens into any third-party browser utility; always use test, staging, or expired tokens for debugging.",
    features: [
      "Instant client-side base64url decoding of JOSE Header and Payload claims sets",
      "Signature not verified (decode only) status clearly indicated with algorithm display for inspection purposes",
      "Automatic timestamp conversion for standard RFC 7519 claims: exp (expiration), iat (issued at), and nbf (not before)",
      "Visual token expiration badge indicating whether the token is currently active or expired",
      "Individual copy buttons for decoded Header and Payload JSON objects",
      "Preloaded 'Load Sample' button demonstrating standard HS256 token structure and claims",
      "100% in-browser processing with zero server calls; tokens are never transmitted across any network"
    ],
    steps: [
      "Paste your base64url-encoded JWT string into the token input box (or click 'Load Sample' to test the decoder).",
      "Inspect the decoded Header panel to verify the signing algorithm ('alg', e.g. HS256, RS256) and token type ('typ': 'JWT').",
      "Review the Payload claims to inspect standard subject ('sub'), issuer ('iss'), roles, permissions, and custom claims.",
      "Check the expiration badges to verify whether the token's 'exp' timestamp represents a valid or expired session.",
      "Note the signature status: 'Signature not verified (decode only)' confirms the signature is displayed without cryptographic validation.",
      "Click 'Copy' above either the Header or Payload panel to copy the formatted JSON to your clipboard."
    ],
    examples: [
      {
        title: "Standard Authentication Token Header & Payload Decoding",
        input: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        output: "Header:\n{\n  \"alg\": \"HS256\",\n  \"typ\": \"JWT\"\n}\nPayload:\n{\n  \"sub\": \"1234567890\",\n  \"name\": \"John Doe\",\n  \"iat\": 1516239022 (Thu Jan 18 2018 01:30:22 UTC)\n}\nSignature Status: Signature not verified (decode only)\nSignature Hex: 49f94ac70449... (HMAC-SHA256 segment displayed without secret key verification)"
      },
      {
        title: "Inspecting Expired Role-Based Access Control (RBAC) Token",
        input: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfOTA4MSIsInJvbGVzIjpbImFkbWluIl0sImV4cCI6MTcwMDAwMDAwMH0.signature_placeholder",
        output: "Header: {\"alg\": \"RS256\", \"typ\": \"JWT\"}\nPayload: {\"sub\": \"usr_9081\", \"roles\": [\"admin\"], \"exp\": 1700000000}\nToken Status: Expired (Mon Nov 13 2023 22:13:20 UTC)\nNote: RS256 public key verification not performed"
      }
    ],
    mistakes: [
      "Assuming a decoded JWT has been cryptographically verified; decoding only extracts base64url text and does not validate whether the token was signed with the legitimate secret or tampered with.",
      "Pasting live production tokens containing sensitive authorization credentials into web tools instead of using test tokens.",
      "Confusing JWT encryption (JWE) with standard signed tokens (JWS); JWE tokens have five segments and cannot be read without decryption keys.",
      "Relying on the 'alg' header field for security decisions without strict server-side algorithm whitelisting (preventing 'alg: none' exploits)."
    ],
    privacy: "All token decoding runs 100% locally in your browser using standard base64url string decoding. Your token is never transmitted over the internet, sent to AstonishBuddy servers, or stored in any analytics logs. For sensitive production credentials, we strongly recommend using simulated or expired tokens.",
    guide: {
      title: "JWT Structure, Security Risks & Signature Verification Guide",
      slug: "jwt-decoder-guide"
    },
    faqs: [
      {
        question: "Does this tool verify the cryptographic signature of my JWT?",
        answer: "No. The status is explicitly 'Signature not verified (decode only)'. Cryptographically verifying a signature requires verifying against the secret key (for symmetric algorithms like HS256) or the issuer's public key (for asymmetric algorithms like RS256/ES256). Since you should never share secret keys with any web tool, this utility focuses strictly on decoding and inspecting the header and payload claims."
      },
      {
        question: "Is it safe to paste a real JWT into this tool?",
        answer: "While this tool runs 100% client-side in your browser and never sends tokens over a network, we strongly recommend never pasting live production tokens into any third-party browser tool. As a security best practice, use expired tokens, test tokens from local development environments, or synthetic payloads."
      },
      {
        question: "How does the tool decode the token without a secret key?",
        answer: "JSON Web Tokens are not encrypted by default; they are simply encoded using base64url. Anyone with access to the token string can read the Header and Payload by converting the base64url characters into standard ASCII/UTF-8 JSON. The signature is the only part that requires a cryptographic key to validate."
      },
      {
        question: "Does this tool use the Web Crypto API to decode tokens?",
        answer: "No. Decoding a JWT header and payload is a straightforward base64url string translation, which does not require the Web Crypto API. The Web Crypto API would only be required if performing full cryptographic signature verification or decrypting encrypted JWE tokens."
      },
      {
        question: "Why does the tool show that my token is expired?",
        answer: "The decoder reads the standard 'exp' (expiration) claim in the payload, which contains a Unix timestamp in seconds. If this timestamp is earlier than the current system time on your device, the tool displays an 'Expired' indicator."
      },
      {
        question: "What signing algorithms are shown in the Header?",
        answer: "The Header typically specifies algorithms such as HS256, HS384, HS512, RS256, RS512, or ES256. This display reflects whatever algorithm value was declared when the token was created, but does not represent validation of that algorithm."
      }
    ]
  },

  "base64-converter": {
    title: "Base64 Encoder & Decoder — UTF-8 Safe Text Conversion",
    intro: "AstonishBuddy's Base64 Converter is a fast, client-side utility for encoding plain text into Base64 format and decoding Base64 strings back into human-readable text. Base64 is a binary-to-text encoding scheme defined in RFC 4648 that represents data using a set of 64 printable ASCII characters (A–Z, a–z, 0–9, +, and /), typically padded with '='. Our tool includes UTF-8 safety handling to correctly preserve international characters, accented letters, and emoji without throwing JavaScript character range errors. With dedicated buttons for '🔒 Encode to Base64' and '🔓 Decode from Base64', you can inspect data URIs, API authentication headers, and serialized payloads securely in your browser.",
    features: [
      "Bidirectional conversion: instant one-click '🔒 Encode to Base64' and '🔓 Decode from Base64'",
      "UTF-8 safe encoding: correctly handles international scripts, special symbols, and emoji via proper URI escaping",
      "Standard RFC 4648 compliance with proper 64-character alphabet and '=' padding alignment",
      "One-click 'Paste' and 'Clear' controls for seamless clipboard integration",
      "Clear error messaging when decoding malformed or corrupted Base64 strings",
      "Dedicated one-click 'Copy' button to transfer converted outputs to your development workspace",
      "100% client-side execution with zero server requests, preserving complete privacy for API credentials"
    ],
    steps: [
      "Enter or paste your text or Base64 string into the input area (or click 'Paste').",
      "To convert plain text into Base64, click '🔒 Encode to Base64'.",
      "To decode a Base64 string back into readable text, click '🔓 Decode from Base64'.",
      "Review the converted output in the bottom result box; errors will appear if the input string contains invalid Base64 characters.",
      "Click 'Copy' above the output panel to copy the converted string to your clipboard.",
      "Click 'Clear' to reset both input and output fields for your next conversion."
    ],
    examples: [
      {
        title: "Encoding ASCII Text into Base64",
        input: "Hello, AstonishBuddy!",
        output: "SGVsbG8sIEFzdG9uaXNoQnVkZHkh\nEncoding Details:\n- Input Length: 21 bytes\n- Output Length: 28 characters\n- Padding: None required (21 bytes is divisible by 3)"
      },
      {
        title: "Decoding Base64 String with Padding",
        input: "U2VjdXJlIFRva2VuIDIwMjY=",
        output: "Secure Token 2026\nDecoding Details:\n- Input Length: 24 characters (including one '=' padding character)\n- Decoded Length: 17 bytes\n- Encoding Scheme: Standard RFC 4648"
      }
    ],
    mistakes: [
      "Confusing Base64 encoding with encryption; Base64 provides zero security or data obfuscation and can be decoded by anyone.",
      "Using standard atob() directly on multi-byte UTF-8 strings (like emoji or non-Latin alphabets), which causes 'character out of range' errors.",
      "Missing the '=' padding characters when transferring Base64 strings across systems that require strict 4-character block alignment.",
      "Confusing standard Base64 (+ and /) with URL-safe Base64 (- and _); standard Base64 characters can break query strings if unescaped."
    ],
    privacy: "All Base64 encoding and decoding executes 100% in your local browser sandbox. No input strings, output strings, or metadata are ever transmitted over the network or recorded on AstonishBuddy servers.",
    guide: {
      title: "Base64 Encoding Standards, RFC 4648 & UTF-8 Guide",
      slug: "base64-converter-guide"
    },
    faqs: [
      {
        question: "Is Base64 an encryption method?",
        answer: "No. Base64 is an encoding scheme designed to safely transmit binary data across text-only protocols (such as email or HTTP). It provides no confidentiality, security, or encryption. Anyone can decode a Base64 string back to its original form."
      },
      {
        question: "How does this tool handle non-ASCII characters and emoji?",
        answer: "Standard JavaScript atob() and btoa() functions fail on characters outside the Latin-1 range. Our tool applies UTF-8 encoding wrappers prior to Base64 conversion, ensuring that emoji, Chinese, Cyrillic, Arabic, and accented characters encode and decode accurately."
      },
      {
        question: "What do the '=' characters at the end of a Base64 string mean?",
        answer: "Base64 processes data in 3-byte groups (24 bits), mapped into four 6-bit characters. If the total byte count is not evenly divisible by 3, '=' padding characters are appended to reach a multiple of 4 characters."
      },
      {
        question: "What is the difference between standard Base64 and Base64URL?",
        answer: "Standard Base64 uses '+' and '/' as characters 62 and 63. In Base64URL (used in JWTs), these are replaced with '-' and '_' to prevent collisions with URL reserved characters, and padding '=' is often omitted."
      },
      {
        question: "Why do I get an 'Error: Invalid Base64 string' message?",
        answer: "This error occurs when attempting to decode a string containing characters outside the valid 64-character set, or when the string length is not a valid multiple of 4."
      },
      {
        question: "Are my passwords or API keys safe when using this tool?",
        answer: "Yes, because processing is 100% client-side in your local browser. However, as general security hygiene, avoid pasting active production keys into web interfaces when offline terminal utilities (like base64 or openssl) are available."
      }
    ]
  },

  "url-converter": {
    title: "URL Encoder & Decoder — Percent-Encoding for URIs & Query Parameters",
    intro: "AstonishBuddy's URL Encoder & Decoder converts strings into percent-encoded URI components and decodes percent-encoded URLs back into readable text. In web standards (RFC 3986), URLs may only contain a limited subset of characters from the US-ASCII set. Characters outside this set, as well as reserved characters with syntactic meanings in query strings (such as &, =, ?, /, :, and #), must be safely escaped using percent-encoding (% followed by two hexadecimal digits). Our tool runs directly in your browser using standard encodeURIComponent and decodeURIComponent specifications, making it effortless to sanitize API query arguments, parse webhook URLs, and resolve malformed parameters with zero network latency.",
    features: [
      "Standard RFC 3986 percent-encoding and decoding using native encodeURIComponent and decodeURIComponent",
      "Safe encoding of reserved delimiter characters (&, =, ?, /, #, +, and spaces) to prevent query parameter collisions",
      "Full UTF-8 support: correctly encodes multi-byte international characters and emoji into percent-hex sequences",
      "Dedicated 'Encode URL' and 'Decode URL' action buttons for fast debugging",
      "One-click 'Paste' and 'Clear' controls for rapid clipboard workflows",
      "Direct 'Copy' button to transfer encoded/decoded parameters straight into your API client or code editor",
      "100% client-side calculation with zero server calls, keeping private API endpoints completely confidential"
    ],
    steps: [
      "Paste your raw URL, query parameter, or encoded string into the input textarea (or click 'Paste').",
      "To encode reserved characters and spaces into percent sequences (e.g. converting '&' to '%26' and spaces to '%20'), click 'Encode URL'.",
      "To convert percent-encoded sequences back to readable text (e.g. converting '%20' back to a space), click 'Decode URL'.",
      "Inspect the converted string in the output panel.",
      "Click 'Copy' above the output box to copy the converted result to your clipboard.",
      "Click 'Clear' to reset the fields for another conversion."
    ],
    examples: [
      {
        title: "Encoding Query Parameters with Special Characters",
        input: "search=shoes & boots?category=men's fashion",
        output: "search%3Dshoes%20%26%20boots%3Fcategory%3Dmen's%20fashion\nEncoded Characters:\n- '=' becomes %3D\n- ' ' (space) becomes %20\n- '&' becomes %26\n- '?' becomes %3F"
      },
      {
        title: "Decoding a Redirect Callback URL",
        input: "https%3A%2F%2Fexample.com%2Fcallback%3Ftoken%3Dxyz123%26source%3Demail",
        output: "https://example.com/callback?token=xyz123&source=email\nDecoded Characters:\n- %3A becomes :\n- %2F becomes /\n- %3F becomes ?\n- %3D becomes =\n- %26 becomes &"
      }
    ],
    mistakes: [
      "Encoding an entire full URL with encodeURIComponent instead of encoding individual parameter values, which accidentally turns https:// into https%3A%2F%2F.",
      "Double-encoding URLs by repeatedly running an already encoded string, turning %20 into %2520.",
      "Confusing '+' with '%20'; while application/x-www-form-urlencoded forms historically used '+' for spaces, standard RFC 3986 URI components use '%20'.",
      "Failing to decode query strings before parsing JSON payloads embedded inside URL arguments."
    ],
    privacy: "All URL encoding and decoding operations take place entirely inside your web browser. No URLs, query strings, API keys, or destination endpoints are transmitted over the network or logged by AstonishBuddy.",
    guide: {
      title: "RFC 3986 URI Percent-Encoding & Query Parameter Guide",
      slug: "url-converter-guide"
    },
    faqs: [
      {
        question: "What is percent-encoding?",
        answer: "Percent-encoding (also known as URL encoding) is a mechanism for encoding characters in a Uniform Resource Identifier (URI). Characters that are reserved or not permitted in standard ASCII URLs are represented by a '%' followed by their two-digit hexadecimal byte value (e.g. space becomes %20)."
      },
      {
        question: "Should I encode a full URL or just the query parameters?",
        answer: "You should encode query parameter keys and values individually. If you encode an entire URL with encodeURIComponent, the protocol (https://) and domain slashes are also encoded, which prevents browsers from recognizing it as a navigable address."
      },
      {
        question: "What is the difference between %20 and + for spaces?",
        answer: "RFC 3986 defines %20 as the standard percent-encoding for a space character in all URL parts. The plus sign (+) is only used to represent spaces within application/x-www-form-urlencoded query bodies submitted by HTML forms."
      },
      {
        question: "Can this tool handle non-English characters and emoji?",
        answer: "Yes. The underlying encodeURIComponent engine encodes multi-byte UTF-8 sequences. For example, the character 'é' encodes to '%C3%A9', and the emoji '🚀' encodes to '%F0%9F%9A%80'."
      },
      {
        question: "Why do I see an 'URIError: URI malformed' message when decoding?",
        answer: "This error occurs if your input contains an invalid percent sequence, such as a lone '%' character followed by characters that are not valid two-digit hexadecimal numbers (e.g. %ZZ or a trailing % at the end of the text)."
      },
      {
        question: "Does this tool send my URLs to an external server?",
        answer: "No. All encoding and decoding runs 100% locally in your browser using JavaScript's native URI handling functions. No URL data is sent across the network."
      }
    ]
  },

  "qr-generator": {
    title: "QR Code Generator — Custom PNG & SVG Vector QR Codes",
    intro: "AstonishBuddy's QR Code Generator is an interactive, browser-based tool for creating custom Quick Response (QR) codes. Operating 100% client-side via the open-source qrcode engine, it generates sharp, scannable QR matrices without transmitting your text or links to any remote server. The generator features convenient preset templates for URLs, Email addresses, Phone numbers, and WiFi networks, along with full customization of dimensions (100px to 600px), custom foreground and background colors, and four ISO/IEC 18004 Error Correction Coding (ECC) levels (L, M, Q, and H). You can download your finished QR code instantly as a raster PNG or as a scalable vector SVG suitable for high-resolution print production.",
    features: [
      "100% client-side QR generation using the qrcode library with zero server requests or external tracking",
      "Dual export options: download as raster '⬇️ Download PNG' or infinitely scalable vector '⬇️ Download SVG'",
      "Preset format templates for URL, Email (mailto:), Phone (tel:), and WiFi network credentials",
      "Adjustable image dimensions ranging from 100px to 600px for on-screen or print applications",
      "Four standard Reed-Solomon Error Correction levels: Low (7%), Medium (15%), Quartile (25%), and High (30%)",
      "Custom foreground (dark) and background (light) color pickers with real-time preview",
      "Instant 'Paste' and 'Clear' buttons for rapid workflow management"
    ],
    steps: [
      "Select a format preset (URL, Email, Phone, or WiFi) or manually enter your text into the input field.",
      "Customize the Error Correction level: select 'L' (7%) for compact codes, or 'H' (30%) if you intend to overlay logos or print on physical merchandise.",
      "Adjust the output size slider (100px to 600px) and choose your preferred foreground and background colors.",
      "Click '⬛ Generate QR Code' to render the live QR code preview.",
      "Click '⬇️ Download PNG' for standard image files, or '⬇️ Download SVG' for vector graphics suitable for large-format print."
    ],
    examples: [
      {
        title: "Standard Website URL QR Code",
        input: "Text: https://www.astonishbuddy.com | ECC: Medium (15%) | Size: 300px | Colors: Black on White",
        output: "Format: PNG / SVG | Matrix Version: 3 (29x29 modules) | Reed-Solomon Recovery: Up to 15% damaged modules restorable | Use Case: Business cards, brochures, and digital displays"
      },
      {
        title: "WiFi Network Configuration QR Code",
        input: "Preset: WiFi | String: WIFI:S:OfficeNetwork;T:WPA;P:SecretKey2026;; | ECC: High (30%)",
        output: "Format: SVG Vector | Matrix Version: 4 (33x33 modules) | Auto-Connect Compatibility: iOS Camera, Android WiFi Scanner | Recovery: Up to 30% damage tolerance"
      }
    ],
    mistakes: [
      "Using low contrast colors (e.g. light gray dots on a white background or dark blue on black), which causes camera scanners to fail.",
      "Inverting colors (white QR code on a dark background); while some scanner apps support inverted codes, many standard hardware scanners do not.",
      "Selecting Low error correction (L) for printed materials that may experience scuffs, folds, or dirt.",
      "Entering excessively long URLs without shortening them first; dense QR codes with tiny module dots are harder for smartphone cameras to focus on."
    ],
    privacy: "All QR code generation runs entirely inside your browser's local JavaScript execution context. Your URLs, passwords, phone numbers, and contact details are never sent to AstonishBuddy servers or any third-party APIs.",
    guide: {
      title: "QR Code Reed-Solomon Error Correction & Vector Print Guide",
      slug: "qr-generator-guide"
    },
    faqs: [
      {
        question: "Can I download my QR code as a scalable vector graphic (SVG)?",
        answer: "Yes. In addition to standard raster PNG images, you can click '⬇️ Download SVG' to obtain a resolution-independent vector file, which is ideal for billboards, apparel, packaging, and commercial printing."
      },
      {
        question: "Which Error Correction Level (ECC) should I choose?",
        answer: "Level L (7% recovery) produces the simplest, cleanest matrix and is best for short URLs on screens. Level M (15%) is the default standard for general usage. Level Q (25%) and Level H (30%) provide heavy redundancy, allowing the QR code to be scanned even if up to 30% of the graphic is smudged, torn, or obstructed."
      },
      {
        question: "How do WiFi QR codes work?",
        answer: "WiFi QR codes use the standard schema WIFI:S:<SSID>;T:<WPA|WEP>;P:<password>;;. When scanned with an iPhone or Android camera, the operating system prompts the user to join the network automatically without typing the password."
      },
      {
        question: "Is there any scan limit or expiration on generated QR codes?",
        answer: "No. These are static QR codes that directly encode your text or URL into the 2D matrix pattern. They never expire, have no scan limits, and do not redirect through any intermediary servers."
      },
      {
        question: "Does this tool send my data to an external server?",
        answer: "No. Unlike tools that use remote image APIs, AstonishBuddy generates both PNG and SVG graphics directly in your browser using client-side JavaScript. No data leaves your machine."
      },
      {
        question: "Why won't my colored QR code scan?",
        answer: "QR scanners rely on high luminance contrast between dark foreground modules and light background modules. Ensure your foreground color is significantly darker than your background color, and avoid using light pastels for foreground dots."
      }
    ]
  },

  "bulk-qrcode-generator": {
    title: "Bulk QR Code Generator — Batch PDF & ZIP Export",
    intro: "AstonishBuddy's Bulk QR Code Generator creates dozens or hundreds of custom QR codes simultaneously from a simple list of links or text strings. Running entirely in your web browser, it renders individual QR codes in real time without sending your data to any server. You can configure error correction levels (L, M, Q, or H) across the entire batch, copy individual text items, download individual PNGs, or export all codes in one click. You can export as a clean, multi-column printable A4 PDF document (complete with readable text labels) via 'Download as PDF' or as a packaged archive of high-resolution PNG images via 'Download as ZIP'.",
    features: [
      "100% client-side batch processing with dynamic, real-time QR generation as you type",
      "Dual batch export options: 'Download as PDF' (printable 3-column A4 grid) and 'Download as ZIP' (individual PNGs)",
      "Simple newline-delimited text input: paste raw lists of URLs, product SKUs, or inventory serial numbers",
      "Four selectable error correction levels: L (7%), M (15%), Q (25%), and H (30%)",
      "Interactive live preview grid with individual 'Copy' text and 'Save' PNG actions for every generated item",
      "Convenient 'Example' button to load sample data and 'Clear' button to wipe input",
      "Zero server uploads: all canvas rendering, PDF assembly (jsPDF), and ZIP compression (JSZip) occur in-browser"
    ],
    steps: [
      "Paste your list of URLs or text entries into the input box, placing each item on its own separate line.",
      "Select your desired Error Correction level: click 'L' (7%), 'M' (15%), 'Q' (25%), or 'H' (30%).",
      "Review the live preview grid below the input box to verify that your items rendered properly.",
      "To save an individual QR code, click the 'Save' button under that specific item.",
      "To download all QR codes packaged as individual PNG image files, click 'Download as ZIP'.",
      "To export a ready-to-print sheet for labels or events, click 'Download as PDF' to generate an A4 document with labels."
    ],
    examples: [
      {
        title: "Generating Marketing Campaign Links in Bulk",
        input: "https://example.com/promo1\nhttps://example.com/promo2\nhttps://example.com/promo3",
        output: "Batch Count: 3 items | Format: Download as ZIP (Bulk-QRCodes.zip)\nArchive Contents:\n- qr-https___ex.png (300x300 PNG)\n- qr-https___ex.png (300x300 PNG)\n- qr-https___ex.png (300x300 PNG)\nExecution: Local browser JSZip compression, 0 bytes sent over network"
      },
      {
        title: "Exporting Inventory Asset Tags to Printable A4 PDF",
        input: "ASSET-001-LAPTOP\nASSET-002-MONITOR\nASSET-003-PRINTER\nASSET-004-DESK",
        output: "Batch Count: 4 items | Format: Download as PDF (Bulk-QRCodes.pdf)\nPDF Layout: 3 columns per page, 55mm QR codes, centered text labels, automatic page breaks\nRendering Engine: Client-side jsPDF"
      }
    ],
    mistakes: [
      "Attempting to upload a CSV file directly; the tool accepts plain newline-delimited text (one URL or string per line).",
      "Looking for a 'Generate All QR Codes' button; codes generate automatically in real time as text is entered.",
      "Pasting thousands of items simultaneously; because every QR code is rendered onto an HTML5 canvas in the browser DOM, batches over 300 items may cause browser memory lag.",
      "Entering blank lines between items, which can create unnecessary blank entries in your batch."
    ],
    privacy: "All bulk QR code generation, canvas rendering, PDF layout synthesis, and ZIP compression take place 100% locally in your web browser. No URLs, text lists, or exported files are ever transmitted to AstonishBuddy servers.",
    guide: {
      title: "Batch QR Code Generation, PDF Labeling & Packaging Guide",
      slug: "bulk-qrcode-generator-guide"
    },
    faqs: [
      {
        question: "Can I upload a CSV file to generate QR codes?",
        answer: "No. The tool uses a direct newline-delimited text area. If you have a CSV or Excel spreadsheet, simply copy the column of URLs or serial numbers and paste it directly into the input box."
      },
      {
        question: "Why is there no 'Generate' button?",
        answer: "Generation is instantaneous and reactive. The tool uses React state and useMemo to update the canvas grid in real time as you paste your list or switch error correction levels."
      },
      {
        question: "What is the recommended maximum batch size?",
        answer: "Because each QR code generates a live HTML5 canvas element in your browser's memory, we recommend batches of up to 100–300 items at a time for optimal performance without browser lag."
      },
      {
        question: "What layout is used when exporting to PDF?",
        answer: "Clicking 'Download as PDF' generates a standard A4 portrait document featuring a 3-column grid. Each QR code is sized to 55mm with a truncated text label printed underneath, and pages break automatically when full."
      },
      {
        question: "How are file names named in the ZIP download?",
        answer: "The ZIP archive contains PNG files named sequentially based on the first 10 characters of the encoded text (e.g. qr-https___ex.png) for easy identification."
      },
      {
        question: "Are any of my bulk URLs or serial numbers saved on your server?",
        answer: "No. All generation, PDF compilation, and ZIP bundling run entirely within your local browser thread. Nothing is transmitted over the internet."
      }
    ]
  }
};
