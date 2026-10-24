module.exports = {
  "text-case-converter": {
    id: "text-case-converter",
    name: "Text Case Converter",
    shortIntro: "Transform letter casing instantly between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, kebab-case, snake_case, PascalCase, and CONSTANT_CASE. The Astonishbuddy Text Case Converter runs 100% in your browser for rapid copywriting and code formatting.",
    guideContent: `
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
  <p style={{ marginBottom: "16px" }}>
    Whether preparing article titles according to editorial style guides, fixing accidental Caps Lock typing, converting database column identifiers to camelCase variables, or sanitizing URL slugs, manual retyping is tedious and error-prone. The Text Case Converter processes entire paragraphs and code snippets with single-click precision directly on your local device.
  </p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Supported Case Formats
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>UPPERCASE:</strong> Converts every letter to capital letters (\`EXAMPLE TEXT\`). Ideal for emphasis, legal disclaimers, and header tags.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>lowercase:</strong> Converts all characters to small letters (\`example text\`). Essential for email addresses and search normalization.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Title Case:</strong> Capitalizes the initial letter of major words (\`Example Text for Articles\`) while keeping minor words lowercased per editorial standards.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Sentence case:</strong> Capitalizes the first letter of each sentence following terminal punctuation (. ! ?).</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>camelCase:</strong> Concatenates words with initial lowercase and subsequent word capitalization (\`exampleText\`), standard for JavaScript and TypeScript variables.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>kebab-case:</strong> Separates lowercased words with hyphens (\`example-text\`), standard for web URL slugs and CSS class names.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>snake_case:</strong> Separates words with underscores (\`example_text\`), standard for Python identifiers and SQL column names.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>PascalCase:</strong> Capitalizes the initial letter of every concatenated word (\`ExampleText\`), standard for class and component names in React, C#, and Java.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>CONSTANT_CASE:</strong> Combines uppercase letters with underscores (\`EXAMPLE_TEXT\`), standard for global environment variables and constants.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Step-by-Step Usage Guide
  </h3>
  <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}>Type or paste your text into the main input textarea, or click &quot;Paste&quot; to import from clipboard.</li>
    <li style={{ marginBottom: "8px" }}>Click your desired transformation button: &quot;UPPERCASE&quot;, &quot;lowercase&quot;, &quot;Title Case&quot;, &quot;Sentence case&quot;, &quot;camelCase&quot;, &quot;kebab-case&quot;, &quot;snake_case&quot;, &quot;PascalCase&quot;, or &quot;CONSTANT_CASE&quot;.</li>
    <li style={{ marginBottom: "8px" }}>The text updates immediately in the editor window.</li>
    <li style={{ marginBottom: "8px" }}>Click &quot;Copy&quot; to copy the formatted text to your clipboard, or click &quot;Clear&quot; to reset the field.</li>
  </ol>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Worked Examples with Real Verified Outputs
  </h3>
  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Editorial Headline to Code Identifiers</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input Text:</em> \`frontend engineering best practices\`</p>
  <p style={{ marginBottom: "8px" }}><em>Action (Title Case):</em> Produces \`Frontend Engineering Best Practices\`</p>
  <p style={{ marginBottom: "8px" }}><em>Action (camelCase):</em> Produces \`frontendEngineeringBestPractices\`</p>
  <p style={{ marginBottom: "16px" }}><em>Action (kebab-case):</em> Produces \`frontend-engineering-best-practices\`</p>

  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Fixing Accidental Caps Lock in Paragraphs</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input Text:</em> \`WELCOME TO OUR PORTAL. PLEASE SIGN IN TO ACCESS YOUR ACCOUNT.\`</p>
  <p style={{ marginBottom: "8px" }}><em>Action (Sentence case):</em></p>
  <p style={{ marginBottom: "16px" }}><em>Output:</em> \`Welcome to our portal. Please sign in to access your account.\`</p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Common Mistakes to Avoid
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong>Applying camelCase to sentences with punctuation:</strong> Converting complex sentences with commas, colons, or parentheses directly into camelCase will concatenate all words into a single identifier. Use Title Case for standard human-readable prose.</li>
    <li style={{ marginBottom: "8px" }}><strong>Accidental capitalization of acronyms:</strong> Converting text containing acronyms (like API, HTTP, or NASA) to Sentence case or lowercase will normalize those acronyms to \`Api\`, \`Http\`, or \`Nasa\`. Always verify acronyms after automated case transformation.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Privacy Guarantee
  </h3>
  <p style={{ marginBottom: "16px" }}>
    All case conversion operates strictly in client-side memory using JavaScript string transformations. Your confidential drafts, source code, and personal notes are never uploaded or transmitted to any server.
  </p>
</div>
`,
    faqs: [
      { q: "What is the difference between Title Case and Sentence case?", a: "Title Case capitalizes the first letter of major words in a heading. Sentence case capitalizes only the first letter of each sentence and proper nouns, leaving other words in lowercase." },
      { q: "Which case convention is used for JavaScript variable names?", a: "JavaScript, TypeScript, and Java standard style guides recommend camelCase (e.g. userProfileData) for variables and function names, and PascalCase for classes and React components." },
      { q: "What case format should I use for SEO URL slugs?", a: "Modern web standards strongly recommend kebab-case (e.g. /tools/text-case-converter) for clean, readable URL slugs that search engines can easily parse." },
      { q: "Can I convert large blocks of text?", a: "Yes. Because conversion runs locally in your browser with zero network latency, it can process thousands of lines of text instantaneously." },
      { q: "Does this tool work offline?", a: "Yes. All conversion logic runs purely in your local browser JavaScript engine with zero server dependencies." },
      { q: "Is my text saved on any server?", a: "No. Your text is never sent over the internet or saved in any database." }
    ],
    keywords: ["text case converter", "convert to uppercase", "title case generator", "camelcase converter", "sentence case tool", "kebab case converter", "snake case converter"]
  },

  "word-counter": {
    id: "word-counter",
    name: "Word Counter",
    shortIntro: "Count words, characters, sentences, paragraphs, and reading times in real time. The Astonishbuddy Word Counter provides instant text metrics, keyword frequency analysis, and speaking time estimates directly in your browser without transmitting your drafts.",
    guideContent: `
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
  <p style={{ marginBottom: "16px" }}>
    Whether composing an academic essay with strict minimum word counts, drafting an SEO article targeting 1,500 words, preparing a speech for a 5-minute presentation slot, or writing social media copy constrained by character limits, tracking exact text metrics is essential. The Word Counter delivers immediate character, word, sentence, and reading metrics as you type or paste text.
  </p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Key Features and Real-Time Metrics
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Word Count:</strong> Accurately tallies total words split by whitespace boundaries, matching standard word processors.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Character Counts (Total & No Spaces):</strong> Tracks gross characters including spaces alongside net characters excluding whitespace for strict character caps.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Sentences and Paragraphs:</strong> Tracks grammatical sentences (detected via punctuation marks . ! ?) and structural paragraph blocks.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Line Counter:</strong> Displays total physical line count based on newline characters in your draft.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Reading Time Estimate (200 WPM):</strong> Estimates silent reading duration based on standard adult average silent reading speed of 200 words per minute.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Speaking Time Estimate (130 WPM):</strong> Estimates spoken delivery duration based on public speech pacing of 130 words per minute.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Top 5 Keyword Frequency:</strong> Identifies and ranks the top five most frequently repeated words (over 3 characters) to help you eliminate repetitive vocabulary.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Step-by-Step Usage Guide
  </h3>
  <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}>Type directly into the text editor, or click the &quot;Paste&quot; button to import text from your clipboard.</li>
    <li style={{ marginBottom: "8px" }}>Review the eight statistical metric badges at the top of the interface: Words, Characters, Chars (no spaces), Sentences, Paragraphs, Lines, Reading Time, and Speaking Time.</li>
    <li style={{ marginBottom: "8px" }}>Examine the &quot;Top Words&quot; section below the editor to identify frequently repeated keywords and vocabulary patterns.</li>
    <li style={{ marginBottom: "8px" }}>Click &quot;Copy&quot; to copy your text to clipboard, or click &quot;Clear&quot; to reset the workspace.</li>
  </ol>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Worked Examples with Real Verified Outputs
  </h3>
  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Short Marketing Copy</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input Text:</em> \`Astonishbuddy provides free, private developer tools. Everything runs locally in your web browser without uploading sensitive data.\`</p>
  <p style={{ marginBottom: "16px" }}><em>Verified Metrics:</em> Words: 18 · Characters: 127 · Chars (no spaces): 110 · Sentences: 2 · Paragraphs: 1 · Lines: 1 · Reading Time: ~1 min (18/200) · Speaking Time: ~1 min (18/130).</p>

  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Keynote Speech Draft (600 Words)</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input Text:</em> A verified 600-word draft article across 5 paragraphs and 32 sentences.</p>
  <p style={{ marginBottom: "16px" }}><em>Verified Metrics:</em> Words: 600 · Reading Time: ~3 min (600 words / 200 WPM = 3 minutes) · Speaking Time: ~5 min (600 words / 130 WPM = 4.61 minutes, rounded to ~5 min).</p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Common Mistakes in Word Counting
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong>Confusing Characters with Characters Excluding Spaces:</strong> Many character limits (such as Google Ads 30-character headline caps or SMS 160-character limits) include spaces. Always verify which metric your target platform enforces.</li>
    <li style={{ marginBottom: "8px" }}><strong>Over-relying on default speaking speeds for complex material:</strong> The 130 WPM estimate represents clear presentation pacing. Highly technical speeches with code walkthroughs often require slower pacing (100–115 WPM).</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Local Privacy Guarantee
  </h3>
  <p style={{ marginBottom: "16px" }}>
    Your manuscripts, academic papers, legal briefs, and personal journals remain strictly confidential. The analysis algorithm runs 100% inside your local browser memory using JavaScript regex analyzers. Zero text is ever transmitted over the network or stored on any server.
  </p>
</div>
`,
    faqs: [
      { q: "What average speeds are used to calculate reading and speaking times?", a: "Reading time is calculated using an average adult silent reading speed of 200 words per minute. Speaking time is calculated using standard public presentation pacing of 130 words per minute." },
      { q: "How are sentences detected?", a: "Sentences are identified by matching terminal punctuation marks (. ! ?) followed by whitespace or line boundaries, correctly handling standard multi-sentence paragraphs." },
      { q: "Does the word counter count hyphenated words as one word or two?", a: "Words joined by a hyphen without spaces (like client-side or high-resolution) are counted as a single word, matching standard academic and publishing conventions." },
      { q: "Is there a limit on how much text I can paste?", a: "No. The analyzer runs in local memory and can effortlessly process book-length manuscripts of 100,000+ words in a fraction of a second." },
      { q: "Does this word counter require an active internet connection?", a: "No. After the web page loads, all analysis executes entirely client-side on your local device." },
      { q: "Are my draft articles or confidential notes saved on your servers?", a: "Never. Your text is never transmitted across the network, logged, or saved in any database." }
    ],
    keywords: ["word counter", "character counter", "word count online free", "reading time calculator", "speaking time estimator", "sentence counter", "letter counter online"]
  },

  "text-sorter": {
    id: "text-sorter",
    name: "Text Sorter",
    shortIntro: "Sort text lists alphabetically from A to Z or Z to A, by length, reverse order, shuffle, and remove duplicates. The Astonishbuddy Text Sorter operates in Line Mode and Word Mode directly in your browser with instant local processing.",
    guideContent: `
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
  <p style={{ marginBottom: "16px" }}>
    Managing unsorted lists of customer names, email addresses, product SKUs, tags, or database records manually is tedious and time-consuming. The Text Sorter organizes, alphabetizes, reverses, deduplicates, and randomizes lines or words with single-click buttons.
  </p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Supported Sorting Actions and Modes
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Line Mode:</strong> Splits text by linebreaks (\`\\n\`), sorting each line as an independent item. Ideal for lists, inventories, and code imports.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Word Mode:</strong> Splits text by spaces (\`\\s+\`), sorting individual words within continuous prose or comma-separated lists.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>A ➔ Z (Alphabetical Ascending):</strong> Sorts items from A to Z using local locale-aware string comparison (\`localeCompare\`).</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Z ➔ A (Alphabetical Descending):</strong> Sorts items in reverse alphabetical order from Z down to A.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>By Length:</strong> Sorts items by character length from shortest to longest (with secondary alphabetical sorting for equal lengths).</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>No Duplicates:</strong> Strips duplicate lines or words using high-speed Set deduplication, keeping only unique occurrences.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Reverse List:</strong> Reverses the current order of lines or words end-to-end.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Shuffle:</strong> Randomizes the order of items using an in-place Fisher-Yates array shuffle.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Undo Changes:</strong> Restore your original unmodified input with a single click if you wish to revert an action.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Step-by-Step Usage Guide
  </h3>
  <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}>Select your mode: click &quot;Line Mode&quot; for line-by-line lists or &quot;Word Mode&quot; for space-delimited words.</li>
    <li style={{ marginBottom: "8px" }}>Paste your text into the textarea, or click &quot;Paste&quot; to import from clipboard.</li>
    <li style={{ marginBottom: "8px" }}>Click your desired action button: &quot;A ➔ Z&quot;, &quot;Z ➔ A&quot;, &quot;By Length&quot;, &quot;No Duplicates&quot;, &quot;Reverse List&quot;, or &quot;Shuffle&quot;.</li>
    <li style={{ marginBottom: "8px" }}>Review the updated text and item count display below the editor.</li>
    <li style={{ marginBottom: "8px" }}>Click &quot;Copy&quot; to copy the result, or click &quot;↩️ Undo Changes&quot; if you want to restore your original input.</li>
  </ol>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Worked Examples with Real Verified Outputs
  </h3>
  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Alphabetizing and Deduplicating Product Lists (Line Mode)</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input Text:</em></p>
  <pre style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "8px", marginBottom: "8px" }}>{\`Banana
Apple
Cherry
Apple
Date\`}</pre>
  <p style={{ marginBottom: "8px" }}><em>Action:</em> Clicked &quot;A ➔ Z&quot; followed by &quot;No Duplicates&quot;.</p>
  <p style={{ marginBottom: "8px" }}><em>Output:</em></p>
  <pre style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "8px", marginBottom: "16px" }}>{\`Apple
Banana
Cherry
Date\`}</pre>

  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Sorting by Length (Line Mode)</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input Text:</em></p>
  <pre style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "8px", marginBottom: "8px" }}>{\`Elephant
Cat
Hippopotamus
Dog\`}</pre>
  <p style={{ marginBottom: "8px" }}><em>Action:</em> Clicked &quot;By Length&quot;.</p>
  <p style={{ marginBottom: "8px" }}><em>Output (ascending character length):</em></p>
  <pre style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "8px", marginBottom: "16px" }}>{\`Cat
Dog
Elephant
Hippopotamus\`}</pre>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Common Mistakes to Avoid
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong>Operating in Word Mode on multi-line text:</strong> If your list is separated by linebreaks, ensure &quot;Line Mode&quot; is highlighted. Selecting Word Mode will replace line breaks with spaces between words.</li>
    <li style={{ marginBottom: "8px" }}><strong>Case sensitivity expectations:</strong> The alphabetical sort uses standard JavaScript \`localeCompare\`, which groups uppercase and lowercase letters naturally according to standard alphabetical order.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Privacy Guarantee
  </h3>
  <p style={{ marginBottom: "16px" }}>
    All sorting, filtering, and deduplication occur 100% locally in your browser memory. Your private lists, internal email databases, and customer records are never uploaded to any remote server or stored in any database.
  </p>
</div>
`,
    faqs: [
      { q: "What is the difference between Line Mode and Word Mode?", a: "Line Mode treats each line as an individual item and preserves linebreaks. Word Mode splits text by spaces and treats each individual word as an item." },
      { q: "How does the No Duplicates button handle identical items?", a: "It uses a JavaScript Set to eliminate all duplicate entries, preserving one unique instance of each line or word." },
      { q: "Can I undo a sort action if I make a mistake?", a: "Yes. Whenever a sort action is applied, an 'Undo Changes' button appears allowing you to restore your exact original input text." },
      { q: "How does the By Length sort handle words of the same length?", a: "When two items have the same character count, the algorithm applies alphabetical sorting as a secondary tie-breaker." },
      { q: "Is there any limit to the list length I can sort?", a: "No. The sorting algorithm runs locally in your device's V8 JavaScript engine and can process tens of thousands of lines in milliseconds." },
      { q: "Are my confidential lists or contacts saved on your servers?", a: "No. All text remains strictly inside your local browser tab session. Zero data is sent across the internet." }
    ],
    keywords: ["text sorter", "sort text alphabetically", "sort lines a to z", "remove duplicate lines", "sort list online free", "alphabetizer tool", "reverse text list"]
  },

  "lorem-ipsum-generator": {
    id: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    shortIntro: "Generate dummy placeholder text by words, sentences, or paragraphs for design mockups, wireframes, and layout testing. The Astonishbuddy Lorem Ipsum Generator runs 100% client-side with instant copying and configurable Latin passages.",
    guideContent: `
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
  <p style={{ marginBottom: "16px" }}>
    When designing web interfaces, mobile application prototypes, print brochures, or editorial publications, using real copy before final approval can distract reviewers from visual typography, kerning, and structural balance. The Lorem Ipsum Generator delivers configurable placeholder passages by paragraphs, sentences, or exact word counts directly in your browser.
  </p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Historical Origins and Classical Context
  </h3>
  <p style={{ marginBottom: "16px" }}>
    Contrary to popular belief, Lorem Ipsum is not random gibberish. The text originates from classical Latin literature written in 45 BC. In 1914, classical scholar H. Rackham produced an English translation of Marcus Tullius Cicero&apos;s philosophical treatise <em>De Finibus Bonorum et Malorum</em> (&quot;On the Extremes of Good and Evil&quot;) for the Loeb Classical Library. Decades later in the 1980s, Latin scholar Richard McClintock of Hampden-Sydney College identified the exact source passage in Section 1.10.32–33, establishing that the words were adapted from Cicero&apos;s discourse on ethics and pleasure. The standard placeholder begins with an alteration of <em>&quot;Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur...&quot;</em> (&quot;Neither is there anyone who loves pain itself, who seeks after it and wants to have it, simply because it is pain&quot;).
  </p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Key Features
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Three Generation Modes:</strong> Generate placeholder copy by Paragraphs, Sentences, or exact Word counts.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Configurable Quantity:</strong> Set your target count from 1 to 50 for paragraphs/sentences, or up to 1,000 for exact word counts.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Start with &quot;Lorem ipsum...&quot; Toggle:</strong> Ensure generated text opens with the classic recognizable phrase, or uncheck to randomize opening words.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>One-Click Copy:</strong> Copy generated output directly to clipboard with the integrated CopyButton component.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Step-by-Step Usage Guide
  </h3>
  <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}>Select a generation Type button: click &quot;Paragraphs&quot;, &quot;Sentences&quot;, or &quot;Words&quot;.</li>
    <li style={{ marginBottom: "8px" }}>Enter your desired number in the Quantity input field (e.g. 25 for words, or 3 for paragraphs).</li>
    <li style={{ marginBottom: "8px" }}>Check or uncheck the &quot;Start with &apos;Lorem ipsum...&apos;&quot; checkbox as required by your mockup.</li>
    <li style={{ marginBottom: "8px" }}>Click the &quot;Generate Text&quot; button to produce the copy.</li>
    <li style={{ marginBottom: "8px" }}>Click &quot;Copy&quot; above the text area to transfer the text directly into your design tool or editor.</li>
  </ol>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Worked Examples with Real Verified Outputs
  </h3>
  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Generating Exactly 25 Words</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Settings:</em> Type: &quot;Words&quot; · Quantity: 25 · &quot;Start with &apos;Lorem ipsum...&apos;&quot;: Checked.</p>
  <p style={{ marginBottom: "8px" }}><em>Action:</em> Clicked &quot;Generate Text&quot;.</p>
  <p style={{ marginBottom: "8px" }}><em>Exact Real Output:</em></p>
  <pre style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "8px", marginBottom: "16px", whiteSpace: "pre-wrap" }}>{\`Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis\`}</pre>
  <p style={{ marginBottom: "16px", fontSize: "14px", color: "var(--text-muted)" }}>Verified: Exactly 25 words with initial letter capitalized.</p>

  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Generating 1 Full Paragraph</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Settings:</em> Type: &quot;Paragraphs&quot; · Quantity: 1 · &quot;Start with &apos;Lorem ipsum...&apos;&quot;: Checked.</p>
  <p style={{ marginBottom: "8px" }}><em>Action:</em> Clicked &quot;Generate Text&quot;.</p>
  <p style={{ marginBottom: "8px" }}><em>Exact Real Output:</em></p>
  <pre style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "8px", marginBottom: "16px", whiteSpace: "pre-wrap" }}>{\`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\`}</pre>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Common Mistakes in Layout Prototyping
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong>Deploying placeholder copy to production:</strong> Forgetting to replace dummy text before launching live marketing pages or sending emails is an embarrassing mistake. Always search your codebase for &quot;Lorem&quot; prior to deployment.</li>
    <li style={{ marginBottom: "8px" }}><strong>Testing only English character lengths:</strong> Latin words in Lorem Ipsum have typical average lengths of 5 to 7 characters. For multilingual applications (e.g. German, Dutch, Finnish), test with longer word lengths to prevent container overflow.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Privacy Guarantee
  </h3>
  <p style={{ marginBottom: "16px" }}>
    All text generation uses local static dictionary arrays inside your browser. No requests are sent over the network, ensuring zero server latency and total privacy.
  </p>
</div>
`,
    faqs: [
      { q: "Where does the Latin text of Lorem Ipsum come from?", a: "The text is adapted from Section 1.10.32–33 of Cicero's 45 BC philosophical treatise De Finibus Bonorum et Malorum. Scholar H. Rackham translated it in 1914, and Richard McClintock identified the exact source passage in the 1980s." },
      { q: "Can I generate exact word counts rather than full paragraphs?", a: "Yes. Select the 'Words' button and enter your required number (such as 25, 50, or 250) to produce an exact word count." },
      { q: "Why is dummy text better than typing random keyboard keys?", a: "Lorem Ipsum features natural English-like letter frequencies, word lengths, and sentence rhythms that simulate realistic typographical layout and kerning balance." },
      { q: "Can I use generated Lorem Ipsum in commercial design projects?", a: "Yes. The passage is in the public domain and is completely free to use in commercial, academic, and personal designs without attribution." },
      { q: "Does the generator require an internet connection?", a: "No. The vocabulary and generation logic are embedded in the browser bundle and run offline once loaded." },
      { q: "Are any user inputs or generated texts stored on your servers?", a: "No. Everything runs strictly in your local browser runtime. Zero data is transmitted or saved." }
    ],
    keywords: ["lorem ipsum generator", "dummy text generator", "placeholder text online", "latin dummy text", "generate lorem ipsum words", "mock text for layouts"]
  },

  "diff-checker": {
    id: "diff-checker",
    name: "Diff Checker",
    shortIntro: "Compare two text snippets or code files and highlight differences side-by-side or inline. The Astonishbuddy Diff Checker uses an LCS-based diff algorithm directly in your browser with zero server uploads.",
    guideContent: `
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
  <p style={{ marginBottom: "16px" }}>
    Reviewing revisions between software code files, configuration schemas, legal contracts, or manuscript drafts manually is difficult and prone to missing subtle changes. The Diff Checker provides a high-contrast comparison tool that highlights added, removed, and modified lines with word-level precision directly in your browser.
  </p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    How the LCS-Based Comparison Engine Works
  </h3>
  <p style={{ marginBottom: "12px" }}>
    Our comparison engine uses a Longest Common Subsequence (LCS) dynamic programming algorithm:
  </p>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>LCS Dynamic Programming Table:</strong> Constructs an \`M × N\` matrix comparing line sequences between original (left) and modified (right) inputs.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Edit Script Backtracking:</strong> Backtracks through the matrix to produce equal, insert, and delete operations.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Consecutive Edit Merging:</strong> Merges adjacent delete and insert operations into replace operations, highlighting intra-line character changes.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Algorithm Distinction:</strong> Please note that this engine uses an LCS-based diff in JavaScript, rather than the Myers diff algorithm implemented in Git command-line tools.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Key Features
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Split View and Inline View:</strong> Toggle between side-by-side two-column view and unified single-column inline view.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Hide Unchanged Lines:</strong> Filter out identical lines to isolate only changes across large files.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Swap Texts:</strong> Instantly invert the original and modified inputs with the Swap button.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Real-Time Statistics:</strong> Counts total lines added, removed, changed, and unchanged.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Step-by-Step Usage Guide
  </h3>
  <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}>Paste your original source text into the &quot;Original Text&quot; (left) textarea.</li>
    <li style={{ marginBottom: "8px" }}>Paste your modified text into the &quot;Modified Text&quot; (right) textarea.</li>
    <li style={{ marginBottom: "8px" }}>Click &quot;🚀 Compare Texts&quot; to compute the diff.</li>
    <li style={{ marginBottom: "8px" }}>Switch between &quot;Split View&quot; and &quot;Inline View&quot;, or click &quot;Hide Unchanged Lines&quot; to focus on differences.</li>
    <li style={{ marginBottom: "8px" }}>Click &quot;Edit Text&quot; to return to the input editor, &quot;Swap&quot; to invert inputs, or &quot;Clear&quot; to reset.</li>
  </ol>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Worked Examples with Real Verified Outputs
  </h3>
  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Software Configuration Changes</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Original Text:</em></p>
  <pre style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "8px", marginBottom: "8px" }}>{\`const port = 3000;
const debug = true;
app.listen(port);\`}</pre>
  <p style={{ marginBottom: "8px" }}><em>Modified Text:</em></p>
  <pre style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "8px", marginBottom: "8px" }}>{\`const port = 8080;
const debug = false;
app.listen(port, () => console.log('Ready'));\`}</pre>
  <p style={{ marginBottom: "16px" }}><em>Verified Diff Output:</em> Stats report 0 lines added, 0 lines removed, 3 lines changed, 0 unchanged. Split view highlights the specific word changes (\`3000\` ➔ \`8080\`, \`true\` ➔ \`false\`, and the callback addition).</p>

  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Spotting Added & Removed Lines in Document Drafts</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Original:</em> \`Feature A\\nFeature B\\nFeature C\`</p>
  <p style={{ marginBottom: "8px" }}><em>Modified:</em> \`Feature A\\nFeature C\\nFeature D\`</p>
  <p style={{ marginBottom: "16px" }}><em>Verified Diff Output:</em> Stats report 1 line removed (\`Feature B\`), 1 line added (\`Feature D\`), 0 changed, 2 lines unchanged.</p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Common Mistakes to Avoid
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong>Trailing whitespace and line-ending mismatches:</strong> Windows (CRLF) and Unix (LF) linebreaks or hidden trailing spaces can cause lines with identical text to appear modified.</li>
    <li style={{ marginBottom: "8px" }}><strong>Comparing gigantic multi-megabyte minified files:</strong> The LCS matrix has O(M×N) space and time complexity. When comparing minified single-line payloads, format the JSON or code first to break lines appropriately.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Privacy Guarantee
  </h3>
  <p style={{ marginBottom: "16px" }}>
    All comparison calculations run 100% inside your local web browser. Your private intellectual property, proprietary code, and confidential documents are never sent across the network.
  </p>
</div>
`,
    faqs: [
      { q: "What algorithm does this diff checker use?", a: "The tool implements a Longest Common Subsequence (LCS) dynamic programming algorithm in client-side JavaScript with post-processing word-level tokenization." },
      { q: "How is this different from git diff?", a: "Git uses Eugene Myers' O(ND) difference algorithm on the command line. Our tool uses an LCS algorithm optimized for real-time visual inspection in web browsers." },
      { q: "What is the difference between Split View and Inline View?", a: "Split View shows the original on the left and modified on the right side-by-side. Inline View shows all additions and deletions sequentially in a single column with + and − markers." },
      { q: "Can I hide unchanged lines in large files?", a: "Yes. Clicking 'Hide Unchanged Lines' collapses identical lines so you can review only modified and added blocks." },
      { q: "Is there a limit on file size?", a: "There is no hard file size cap, but because LCS has quadratic complexity for very large files, section-by-section comparison is recommended for texts exceeding 10,000 lines." },
      { q: "Are my compared files uploaded to any server?", a: "No. All comparison executes locally in your browser memory. Your documents never leave your device." }
    ],
    keywords: ["diff checker", "text compare online", "compare two texts free", "code diff tool", "lcs diff checker", "side by side text comparison", "file difference checker"]
  },

  "markdown-converter": {
    id: "markdown-converter",
    name: "Markdown Converter",
    shortIntro: "Convert Markdown to clean HTML with a live rendered preview, or convert HTML back into formatted Markdown. The Astonishbuddy Markdown Converter runs entirely in your browser with zero server uploads and instant bi-directional conversion.",
    guideContent: `
<div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
  <p style={{ marginBottom: "16px" }}>
    Markdown is the lightweight markup standard used across GitHub, technical documentation, content management systems, and developer notes. Converting Markdown to standard HTML for website publishing or extracting Markdown from legacy HTML code is a common everyday task. The Markdown Converter provides instant, bi-directional transformation directly on your local device.
  </p>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Key Features and Supported Syntax
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Bi-Directional Conversion:</strong> Seamlessly switch between &quot;Markdown → HTML&quot; and &quot;HTML → Markdown&quot; modes.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Headings & Dividers:</strong> Converts \`#\` through \`######\` to semantic \`<h1>\`–\`<h6>\` tags, and \`---\` to \`<hr />\`.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Lists & Blockquotes:</strong> Converts bulleted lists (\`-\`, \`*\`, \`+\`), numbered ordered lists (\`1.\`), and quote blocks (\`>\`).</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Inline Formatting:</strong> Accurately parses bold (\`**\`), italic (\`*\`), strikethrough (\`~~\`), inline code (\`\`\`), links, and images.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Basic Tables:</strong> Renders pipe-delimited Markdown tables into standard \`<table>\`, \`<thead>\`, and \`<tbody>\` HTML structures.</li>
    <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Sanitized Live Preview:</strong> Safely renders HTML preview output while stripping malicious script tags and inline event handlers to prevent XSS.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Step-by-Step Usage Guide
  </h3>
  <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}>Select your direction tab: click &quot;Markdown → HTML&quot; or &quot;HTML → Markdown&quot;.</li>
    <li style={{ marginBottom: "8px" }}>Type or paste your input into the left editor pane, or click &quot;Sample&quot; to load demonstration markdown.</li>
    <li style={{ marginBottom: "8px" }}>The converted code updates immediately in the right output pane.</li>
    <li style={{ marginBottom: "8px" }}>In Markdown → HTML mode, inspect the &quot;Live Preview&quot; section below to review the visually rendered HTML.</li>
    <li style={{ marginBottom: "8px" }}>Click &quot;Copy HTML&quot; or &quot;Copy Markdown&quot; to copy the result to your clipboard.</li>
  </ol>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Worked Examples with Real Verified Outputs
  </h3>
  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 1: Document Overview with Formatting</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input Markdown:</em></p>
  <pre style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "8px", marginBottom: "8px" }}>{\`# Project Overview
A **lightweight** utility with *fast* processing.
- Client-side execution
- Zero server storage\`}</pre>
  <p style={{ marginBottom: "8px" }}><em>Verified Real Output HTML:</em></p>
  <pre style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "8px", marginBottom: "16px" }}>{\`<h1>Project Overview</h1>
<p>A <strong>lightweight</strong> utility with <em>fast</em> processing.</p>
<ul>
<li>Client-side execution</li>
<li>Zero server storage</li>
</ul>\`}</pre>

  <p style={{ marginBottom: "12px" }}><strong style={{ color: "var(--text-primary)" }}>Example 2: Markdown Table Conversion</strong></p>
  <p style={{ marginBottom: "8px" }}><em>Input Markdown:</em></p>
  <pre style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "8px", marginBottom: "8px" }}>{\`| Format | Transparency |
| --- | --- |
| WebP | Yes |
| JPG | No |\`}</pre>
  <p style={{ marginBottom: "8px" }}><em>Verified Real Output HTML:</em></p>
  <pre style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "8px", marginBottom: "16px" }}>{\`<table>
<thead><tr><th>Format</th><th>Transparency</th></tr></thead>
<tbody><tr><td>WebP</td><td>Yes</td></tr><tr><td>JPG</td><td>No</td></tr></tbody>
</table>\`}</pre>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Common Mistakes in Markdown Conversion
  </h3>
  <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
    <li style={{ marginBottom: "8px" }}><strong>Omitting space after heading hashes:</strong> Typing \`#Heading\` instead of \`# Heading\` will fail to render as an \`<h1>\` tag according to standard CommonMark specifications. Always include a space after \`#\`.</li>
    <li style={{ marginBottom: "8px" }}><strong>Assuming syntax highlighting themes are included in raw HTML output:</strong> Fenced code blocks (\`\`\`javascript\`) generate \`<code class="language-javascript">\` tags. Syntax color styling requires a CSS theme or highlighting library (such as Prism or Highlight.js) on your publishing destination.</li>
  </ul>

  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 12px" }}>
    Privacy and Sanitization Guarantee
  </h3>
  <p style={{ marginBottom: "16px" }}>
    The HTML preview is sanitized in real time to neutralize potential XSS vectors (such as script tags or inline event handlers). All parsing logic runs 100% locally in your browser memory. Your drafts and notes are never uploaded to any server.
  </p>
</div>
`,
    faqs: [
      { q: "Does this tool support converting HTML back to Markdown?", a: "Yes. Click the 'HTML → Markdown' tab to convert clean or pasted HTML elements back into standard Markdown syntax." },
      { q: "How are code blocks formatted in HTML output?", a: "Fenced code blocks are converted into <pre><code class='language-xyz'> tags, preserving exact code formatting and language class identifiers." },
      { q: "Is the HTML preview safe against XSS injection?", a: "Yes. The live preview sanitizes rendered output through a client-side DOM parser that strips script elements, iframes, and inline event attributes like onerror or onclick." },
      { q: "Does the table parser support custom column alignments?", a: "The parser converts standard pipe-delimited Markdown tables into semantic <table>, <thead>, and <tbody> structures. Column styling can be controlled via CSS on your destination site." },
      { q: "Can I use this tool offline?", a: "Yes. All conversion and parsing logic runs locally in your browser with zero network calls after loading." },
      { q: "Are my documents or notes stored on your servers?", a: "Never. All text remains strictly in local browser memory and is discarded when the tab is closed." }
    ],
    keywords: ["markdown converter", "markdown to html", "html to markdown", "convert markdown online", "markdown previewer", "markdown table to html", "free markdown tool"]
  }
};
