// scratch/parts/part3.js
// Tools: password-generator, random-number-generator, uuid-generator, json-formatter, sql-formatter

module.exports = {
  "password-generator": {
    title: "Strong Password Generator — Cryptographically Secure & Customizable",
    intro: "AstonishBuddy's Strong Password Generator creates high-entropy, cryptographically secure passwords locally in your web browser. Rather than relying on predictable pseudo-random functions like Math.random(), our tool utilizes the browser's native Web Cryptography API (crypto.getRandomValues) to draw cryptographically strong random numbers directly from system entropy pools. You can freely adjust password length from 4 up to 128 characters, toggle uppercase letters (A–Z), lowercase letters (a–z), decimal digits (0–9), and special symbols, or exclude visually ambiguous characters (such as O, 0, I, l, 1, and confusing brackets). The generator computes Shannon information entropy in bits in real time, giving you an objective measure of password complexity and brute-force resistance without transmitting any data over a network.",
    features: [
      "Cryptographically secure randomness generated via window.crypto.getRandomValues from hardware entropy",
      "Customizable character length slider ranging from 4 to 128 characters (default 16)",
      "Granular character set toggles: Uppercase (A–Z), Lowercase (a–z), Numbers (0–9), and Symbols (!@#$%^&*)",
      "Option to exclude ambiguous characters ({ } [ ] ( ) / \\ ' \" ` ~ , ; : . < > O 0 I l 1) to prevent transcription errors",
      "Batch generation support: simultaneously generate 1, 5, 10, or 20 distinct password candidates",
      "Real-time entropy evaluation displaying total bits of entropy and categorical strength ratings (Very Weak to Very Strong)",
      "Zero network requests or external dependencies: passwords exist solely in browser memory and are wiped on refresh"
    ],
    steps: [
      "Select your target password length using the slider or number input (recommended: 16+ characters for critical accounts).",
      "Toggle your desired character sets: check Uppercase, Lowercase, Numbers, and Symbols according to your password requirements.",
      "Optionally check 'Exclude Ambiguous Characters' if the password will be written down or typed manually into mobile keyboards.",
      "Choose the batch quantity (1, 5, 10, or 20 passwords) from the count selector.",
      "Click 'Generate Passwords' (or 'Regenerate') to produce fresh cryptographically random candidates.",
      "Click the 'Copy' icon next to any generated password to securely copy it to your clipboard for your password manager."
    ],
    examples: [
      {
        title: "Standard 16-Character Mixed Complexity Password",
        input: "Length: 16 | Sets: Uppercase, Lowercase, Numbers, Symbols | Ambiguous: Included | Count: 1",
        output: "Candidate: k9#mQ2$vL8!pZ5*x\nCalculated Entropy: ~105 bits\nStrength Rating: Strong\nPool Size: 94 printable ASCII characters (26 uppercase + 26 lowercase + 10 digits + 32 symbols)\nCombinatorial Space: 94^16 ≈ 3.71 × 10^31 possibilities"
      },
      {
        title: "High-Entropy 24-Character Administrative Password (No Ambiguous)",
        input: "Length: 24 | Sets: Uppercase, Lowercase, Numbers, Symbols | Ambiguous: Excluded | Count: 1",
        output: "Candidate: eH7%mK9#vR2!wT5$yP8*bC4\nCalculated Entropy: ~149 bits\nStrength Rating: Very Strong\nPool Size: ~74 non-ambiguous characters\nCombinatorial Space: 74^24 ≈ 8.84 × 10^44 possibilities"
      }
    ],
    mistakes: [
      "Using short passwords (<12 characters) even with all character sets enabled, which leaves them vulnerable to high-speed offline GPU brute-force dictionaries.",
      "Disabling symbols or numbers unnecessarily when the destination service accepts full UTF-8 or standard printable ASCII.",
      "Assuming client-side generated passwords need to be memorized; store long random strings immediately in a trusted encrypted password manager.",
      "Pasting production passwords into public web forms or sharing them over unencrypted messaging channels."
    ],
    privacy: "All password generation runs 100% locally on your device via window.crypto.getRandomValues. Generated passwords, length settings, and character parameters are never sent to any server, recorded in logs, or cached in browser storage. Refreshing or closing the tab destroys all generated strings immediately.",
    guide: {
      title: "Password Entropy & Modern Authentication Security Guide",
      slug: "password-generator-guide"
    },
    faqs: [
      {
        question: "Is this password generator cryptographically secure?",
        answer: "Yes. It uses the browser's native window.crypto.getRandomValues() method, which draws entropy directly from the underlying operating system's kernel CSPRNG (such as /dev/urandom on Linux/macOS or CryptGenRandom/BCrypt on Windows). This ensures statistical randomness and unpredictability, unlike Math.random()."
      },
      {
        question: "Are generated passwords saved, logged, or sent to a server?",
        answer: "No. The generator operates entirely client-side inside your browser sandbox. No network requests, analytics payloads, or external API calls are made. AstonishBuddy has zero visibility into any passwords you generate."
      },
      {
        question: "What length and character combinations make a password 'unhackable'?",
        answer: "No single password is theoretically impervious, but a randomly generated password of 16 or more characters drawn from a 94-character pool yields over 100 bits of entropy. At current computing capabilities, cracking a 105-bit random password via offline dictionary attack would require billions of years of GPU compute time."
      },
      {
        question: "Why should I exclude ambiguous characters?",
        answer: "Certain characters look almost identical in many fonts: uppercase 'O' and digit '0', or lowercase 'l', digit '1', and uppercase 'I'. Excluded ambiguous characters make manual transcription onto mobile keyboards or physical backup recovery cards significantly less error-prone."
      },
      {
        question: "Can I generate multiple passwords at once?",
        answer: "Yes. Select 1, 5, 10, or 20 from the count selector to produce a batch of distinct, independently seeded passwords in a single click."
      },
      {
        question: "How is the password strength score calculated?",
        answer: "The strength score calculates information entropy using E = L × log2(R), where L is the password length and R is the character pool size. Passwords below 36 bits are marked Weak, 36–59 bits Moderate, 60–127 bits Strong, and 128+ bits Very Strong."
      }
    ]
  },

  "random-number-generator": {
    title: "Cryptographic Random Number Generator — Unbiased CSPRNG Range Sampling",
    intro: "AstonishBuddy's Random Number Generator generates cryptographically secure, uniform integers within any custom minimum and maximum range. Unlike standard programming scripts that invoke Math.random()—which suffers from periodic PRNG states and severe modulo bias—our generator uses window.crypto.getRandomValues combined with rejection sampling. Rejection sampling discards unaligned bit boundaries across the 32-bit integer spectrum, mathematically guaranteeing that every allowable number in your chosen range has an identical probability of selection. You can generate single values or large batches, choose whether duplicates are permitted, and inspect full output distributions locally in your browser with zero server intervention.",
    features: [
      "True CSPRNG entropy powered by the browser's native window.crypto.getRandomValues API",
      "Mathematically rigorous rejection sampling algorithm eliminating modulo bias across any custom range",
      "Configurable integer range supporting negative, zero, and positive 32-bit safe integer values",
      "Custom count selector to generate up to 1,000 random numbers in a single execution",
      "Duplicate suppression toggle using Fisher-Yates array shuffling for fast, uniform sampling without replacement",
      "Instant copy to clipboard with comma, space, or newline-delimited formatting options",
      "100% client-side calculation with zero server communication or network latency"
    ],
    steps: [
      "Set your desired minimum integer in the 'Min' input field (default: 1).",
      "Set your desired maximum integer in the 'Max' input field (default: 100).",
      "Specify how many random numbers you wish to generate in the 'Count' field (up to 1,000).",
      "Toggle 'Allow Duplicates' on if repeated values are acceptable, or toggle off for unique sampling without replacement.",
      "Click '🎲 Generate Random Numbers' to trigger CSPRNG sampling.",
      "View the generated list and click 'Copy Numbers' to transfer the output to your clipboard."
    ],
    examples: [
      {
        title: "Standard Six-Sided Die Roll Simulation",
        input: "Min: 1 | Max: 6 | Count: 5 | Allow Duplicates: Yes",
        output: "Result: [4, 1, 6, 2, 4]\nUniform Distribution Probability: 1/6 (16.666%) per roll\nCSPRNG Engine: window.crypto.getRandomValues(Uint32Array) with unbiased rejection sampling\nModulo Bias: Zero"
      },
      {
        title: "Lottery Ticket Number Draw (Unique Integers)",
        input: "Min: 1 | Max: 49 | Count: 6 | Allow Duplicates: No",
        output: "Result: [7, 14, 23, 31, 42, 48]\nAlgorithm: Fisher-Yates partial CSPRNG array shuffle\nDuplicates: Guaranteed 0 duplicate values within the selected draw\nRange Verification: All values strictly between 1 and 49 inclusive"
      }
    ],
    mistakes: [
      "Requesting more unique numbers than the range permits (e.g. asking for 10 unique numbers between 1 and 5), which causes a validation error.",
      "Assuming browser Math.random() is suitable for security or gaming; standard PRNGs are deterministic and predictable.",
      "Entering floating-point decimals when discrete integer sampling is required; non-integers are automatically rounded to the nearest integer.",
      "Relying on simple modulo arithmetic (% range) in personal code, which introduces systematic statistical bias toward smaller remainders."
    ],
    privacy: "All number generation executes strictly within your local browser thread using the Web Cryptography API. No parameters, generated numbers, or timestamps are sent to AstonishBuddy servers. No cookies, trackers, or storage logs are utilized.",
    guide: {
      title: "CSPRNG, Rejection Sampling & Entropy Guide",
      slug: "random-number-generator-guide"
    },
    faqs: [
      {
        question: "How does this tool eliminate modulo bias?",
        answer: "When mapping a 32-bit random integer (0 to 4,294,967,295) to an arbitrary range (such as 1 to 6) using the modulo operator (%), numbers below the remainder boundary have a slightly higher probability of appearing. Our tool implements rejection sampling: it discards random integers that fall into the incomplete upper segment (val >= Math.floor(2^32 / range) * range) and draws again until an unbiased integer is obtained."
      },
      {
        question: "Is this generator suitable for statistical experiments and prize drawings?",
        answer: "Yes. Because it uses window.crypto.getRandomValues with rejection sampling, it meets the criteria for cryptographically secure pseudo-random number generators (CSPRNG), ensuring uniform probability and unpredictable sequences."
      },
      {
        question: "Can I generate negative numbers?",
        answer: "Yes. You can enter negative values in both Min and Max fields (e.g. Min: -50, Max: 50). The tool validates that Min is strictly less than or equal to Max."
      },
      {
        question: "What happens when 'Allow Duplicates' is turned off?",
        answer: "When duplicates are disabled, the generator populates the range pool and performs an unbiased Fisher-Yates shuffle using crypto.getRandomValues, guaranteeing that no integer appears more than once."
      },
      {
        question: "What is the maximum quantity of numbers I can generate at once?",
        answer: "You can generate up to 1,000 numbers in a single batch. For larger scientific simulations, generating millions of numbers in the main browser DOM thread can cause interface freezing."
      },
      {
        question: "Does the generator work when disconnected from the internet?",
        answer: "Yes. Once the page is loaded in your browser, all calculation logic and entropy calls are 100% self-contained and run completely offline."
      }
    ]
  },

  "uuid-generator": {
    title: "UUID / GUID Generator — Version 4 RFC 4122 Compliant Random Identifiers",
    intro: "AstonishBuddy's UUID Generator creates Version 4 Universally Unique Identifiers (UUIDs) and Globally Unique Identifiers (GUIDs) in full compliance with the RFC 4122 specification. Each generated UUID comprises 128 bits of cryptographically secure entropy, formatted as 32 hexadecimal characters arranged into five hyphen-delimited groups (8-4-4-4-12). In accordance with standard RFC 4122 semantics, the 13th character is set to '4' to designate Version 4 (randomly generated), and the 17th character uses variant bits '8', '9', 'a', or 'b'. Our tool allows single or bulk generation up to 100 UUIDs at a time, with configurable formatting (standard lowercase, uppercase, or hyphens removed) and customizable delimiters, all processed strictly client-side.",
    features: [
      "Strict RFC 4122 Version 4 compliance with exact 4-bit version nibble and 2-bit variant markers",
      "High-entropy random generation utilizing the browser's window.crypto.getRandomValues engine",
      "Single-click instant generation or bulk creation of 5, 10, 25, 50, or 100 UUIDs",
      "Flexible output formatting: standard lowercase, uppercase, or stripped unhyphenated 32-character strings",
      "Multiple output delimiters for bulk export: newline, comma, semicolon, or formatted JSON array",
      "One-click clipboard copy and direct text file download (.txt) for development workflows",
      "100% client-side execution with zero backend calls, tracking, or identifier storage"
    ],
    steps: [
      "Select your generation mode: Single UUID for a quick identifier, or Bulk UUIDs for database seeding and testing.",
      "For bulk mode, choose your desired quantity from the preset buttons (5, 10, 25, 50, 100) or enter a custom count.",
      "Select your output casing: standard lowercase (e.g. f47ac10b-58cc-4372-a567-0e02b2c3d479) or UPPERCASE.",
      "Choose whether to include or remove hyphens (e.g. 32-character compact hexadecimal for MongoDB ObjectIDs or API keys).",
      "Select your preferred delimiter (newline, comma, or semicolon) for bulk lists.",
      "Click 'Generate UUIDs' to refresh the values, then click 'Copy All' or 'Download as TXT' to save your identifiers."
    ],
    examples: [
      {
        title: "Standard RFC 4122 v4 Lowercase UUID",
        input: "Mode: Single | Format: Standard Hyphenated | Casing: Lowercase",
        output: "c4a760a8-dbcf-4e15-8123-d65d11f76d32\nStructure Breakdown:\n- Time-low (8 hex): c4a760a8\n- Time-mid (4 hex): dbcf\n- Version & Time-high (4 hex): 4e15 (nibble '4' = RFC 4122 v4)\n- Variant & Clock-seq (4 hex): 8123 (bits '10xx' = RFC 4122 variant)\n- Node MAC (12 hex): d65d11f76d32"
      },
      {
        title: "Bulk Compact Unhyphenated Uppercase Identifiers",
        input: "Mode: Bulk (Count: 3) | Format: No Hyphens | Casing: Uppercase | Delimiter: Comma",
        output: "9F2D83A14B604F119C72A8B3C4D5E6F7, 3E1B92C07D414E538A190B2C3D4E5F6A, 8A7C6B5D4E3F4021B1C2D3E4F5A6B7C8\nCollision Probability: Approximately 1 in 2^122 (astronomically negligible for production datasets)"
      }
    ],
    mistakes: [
      "Confusing UUID Version 1 (timestamp and MAC-address based) with UUID Version 4 (pure cryptographic randomness).",
      "Manually removing hyphens with string search-and-replace instead of using the built-in 'No Hyphens' toggle.",
      "Assuming UUIDs are sequential or sortable by time; for ordered indexing, developers should use ULIDs or UUID v7.",
      "Storing uppercase and lowercase UUIDs as distinct keys in case-sensitive database indexes without normalization."
    ],
    privacy: "UUID generation occurs completely inside your local browser runtime via native crypto APIs. AstonishBuddy never transmits, logs, or stores generated UUIDs on any server. Identifiers are completely private to your session.",
    guide: {
      title: "RFC 4122 UUID Specifications & Architecture Guide",
      slug: "uuid-generator-guide"
    },
    faqs: [
      {
        question: "What is the difference between a UUID and a GUID?",
        answer: "UUID (Universally Unique Identifier) and GUID (Globally Unique Identifier) refer to the exact same 128-bit identifier standard defined in RFC 4122. Microsoft documentation historically adopted the term GUID, whereas Unix, IETF, and ISO specifications use UUID."
      },
      {
        question: "Can two generated UUID v4 identifiers ever collide?",
        answer: "While theoretically possible because UUID v4 relies on 122 random bits, the probability is so infinitesimally small (1 in 5.3 × 10^36) that generating 1 billion UUIDs every second for 100 years yields a collision probability under one in a billion."
      },
      {
        question: "How can I verify that a generated string is a true Version 4 UUID?",
        answer: "Look at the 13th character: in a valid Version 4 UUID, this character is always the digit '4' (e.g. xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx). The 17th character ('y') must begin with binary '10', corresponding to hexadecimal characters 8, 9, a, or b."
      },
      {
        question: "When should I use the 'No Hyphens' format?",
        answer: "Certain databases, key-value stores (such as Redis), and compact binary serializers store UUIDs as continuous 32-character hex strings to save storage overhead or conform to strict primary key formats."
      },
      {
        question: "Can I export generated UUIDs as a file?",
        answer: "Yes. In bulk mode, you can click 'Download as TXT' to save all generated UUIDs as a formatted text file directly to your computer."
      },
      {
        question: "Does this tool use crypto.randomUUID()?",
        answer: "Yes. Modern evergreen browsers natively support window.crypto.randomUUID(), which is called directly by our generator. For batch formatting and older browser compatibility, it falls back to window.crypto.getRandomValues()."
      }
    ]
  },

  "json-formatter": {
    title: "JSON Formatter & Validator — Beautify, Minify & Inspect JSON Data",
    intro: "AstonishBuddy's JSON Formatter & Validator is an in-browser utility for web developers, API engineers, and data analysts. It parses, formats, indents, minifies, and validates JSON (JavaScript Object Notation) strings in real time. Built directly on native JSON.parse and JSON.stringify implementations, the tool highlights syntax errors, unescaped characters, trailing commas, and malformed object keys with zero server latency. You can toggle between 2-space and 4-space indentation, condense payloads for production wire transmission with '⚡ Minify', revert to compacted single-line structures via 'Raw', or validate payloads instantly with single-click clipboard integration.",
    features: [
      "Instant JSON syntax validation with clear parse error reporting and location cues",
      "Configurable indentation settings: toggle between standard 2-space or readable 4-space indentation",
      "'⚡ Minify' mode to strip all whitespace, line breaks, and padding for compressed payload delivery",
      "'Raw' single-line serialization button to quickly unwrap and condense validated JSON strings",
      "One-click 'Paste' and 'Clear' buttons for rapid clipboard debugging workflows",
      "Direct 'Copy' functionality to transfer formatted output straight into your IDE or API client",
      "100% client-side execution ensuring sensitive API keys, auth payloads, and customer data never leave your browser"
    ],
    steps: [
      "Paste your raw, minified, or unformatted JSON text into the left input textarea (or click the 'Paste' button).",
      "Select your preferred indentation depth: click '2 spaces' or '4 spaces' based on your team's code conventions.",
      "Click '🎨 Format' to beautify the structure with aligned nested keys, arrays, and syntax-checked formatting.",
      "If you need to compress JSON for an HTTP POST body or config file, click '⚡ Minify' to strip unnecessary whitespace.",
      "To check validity without modifying spacing, click 'Validate' to confirm standard RFC 8259 compliance.",
      "Click 'Copy' above the output panel to copy the formatted result directly to your clipboard."
    ],
    examples: [
      {
        title: "Formatting a Minified API Response",
        input: '{"status":"ok","code":200,"data":{"userId":4102,"roles":["admin","editor"],"settings":{"theme":"dark","notifications":true}}}',
        output: '{\n  "status": "ok",\n  "code": 200,\n  "data": {\n    "userId": 4102,\n    "roles": [\n      "admin",\n      "editor"\n    ],\n    "settings": {\n      "theme": "dark",\n      "notifications": true\n    }\n  }\n}'
      },
      {
        title: "Minifying Expanded Multi-Line JSON",
        input: '{\n  "service": "mailer",\n  "retries": 3,\n  "active": true\n}',
        output: '{"service":"mailer","retries":3,"active":true}\nPayload Size Reduction: ~45% character overhead eliminated for wire transmission'
      }
    ],
    mistakes: [
      "Using single quotes ('key') instead of standard double quotes (\"key\"); RFC 8259 JSON requires strict double quotation for all strings and object keys.",
      "Leaving trailing commas after the last element in arrays or objects (e.g. {\"a\": 1, }), which is invalid in standard JSON.",
      "Pasting JavaScript object literals with unquoted keys or comments (// or /* */); standard JSON does not permit comments.",
      "Assuming the tool fixes corrupted JSON automatically; while it reports syntax syntax errors precisely, invalid JSON must be corrected manually."
    ],
    privacy: "All JSON formatting, parsing, and minification operations run strictly within your local browser JavaScript engine. Your JSON data—including sensitive credentials, customer records, and internal schema designs—is never sent across a network or recorded in any database.",
    guide: {
      title: "RFC 8259 JSON Schema & Serialization Best Practices",
      slug: "json-formatter-guide"
    },
    faqs: [
      {
        question: "Why does my JSON show a syntax error with single quotes?",
        answer: "The official JSON specification (RFC 8259) strictly requires double quotes (\") for both property keys and string values. Single quotes (') are permitted in JavaScript object literals, but are illegal in valid JSON."
      },
      {
        question: "Does this tool send my JSON data to an external server?",
        answer: "No. All parsing and formatting takes place entirely inside your browser's local V8 or JavaScriptCore runtime using JSON.parse() and JSON.stringify(). No data is transmitted to AstonishBuddy or third-party servers."
      },
      {
        question: "What does the 'Raw' button do?",
        answer: "The 'Raw' button parses your input JSON and outputs a compact, single-line serialized string without extra indentation, ensuring clean single-line representation."
      },
      {
        question: "Can this tool format JSON with comments?",
        answer: "Standard JSON does not support comments. If your payload includes JavaScript-style // or /* */ comments, JSON.parse will throw a syntax error. Remove comments before formatting."
      },
      {
        question: "How large of a JSON document can I format?",
        answer: "Because processing is 100% client-side, the tool can comfortably format documents up to several megabytes (tens of thousands of lines). Very large files (>20MB) may experience brief browser UI pauses during DOM rendering."
      },
      {
        question: "What is the difference between 2-space and 4-space formatting?",
        answer: "Two-space indentation is standard in modern JavaScript, TypeScript, and web engineering because it keeps deeply nested objects compact. Four-space indentation is common in Python, Java, and C++ backends for enhanced visual separation."
      }
    ]
  },

  "sql-formatter": {
    title: "SQL Formatter & Beautifier — Multi-Dialect Query Indenter & Minifier",
    intro: "AstonishBuddy's SQL Formatter & Beautifier standardizes, indents, and beautifies raw database queries across six major SQL dialects. Powered client-side by the robust sql-formatter engine, it cleans up dense, unreadable queries into structured statements with aligned clauses (SELECT, FROM, WHERE, JOIN, GROUP BY, ORDER BY). You can select your database dialect (Standard SQL, PostgreSQL, MySQL, SQLite, MariaDB, or Transact-SQL / SQL Server), configure indentation spacing (2 or 4 spaces), choose keyword casing (UPPER, lower, or Preserve), switch between colorful syntax-highlighted display and plain text, or condense complex queries into a single line with '⚡ Minify SQL'.",
    features: [
      "Comprehensive multi-dialect support: Standard SQL, MySQL, PostgreSQL, SQLite, MariaDB, and Transact-SQL (T-SQL)",
      "Granular keyword case conversion: force UPPERCASE keywords, lowercase keywords, or preserve original author casing",
      "Configurable indentation depth: choose between 2 spaces or 4 spaces per subclause level",
      "Dual view modes: inspect syntax-highlighted code with clear token distinction or switch to copyable plain text",
      "'⚡ Minify SQL' mode to strip comments and collapse multi-line queries into single-line strings for inline code integration",
      "Convenient utility controls: '📋 Paste', '📝 Sample' query loader, 'Clear', and instant one-click 'Copy'",
      "100% client-side processing: proprietary database schemas and internal query structures never leave your machine"
    ],
    steps: [
      "Paste your raw SQL query into the left code editor (or click '📝 Sample' to load a demonstration query).",
      "Select your target SQL dialect from the dropdown menu (e.g. PostgreSQL, MySQL, SQLite, T-SQL).",
      "Choose your desired keyword casing: click 'UPPER' to enforce standard conventions (SELECT, FROM), 'lower', or 'Preserve'.",
      "Select your indentation depth (2sp or 4sp) based on your team's SQL style guide.",
      "Click '🎨 Format SQL' to beautify the query with structured clauses and aligned joins.",
      "Optionally click '⚡ Minify SQL' to condense the query into a compact single-line string, or click 'Copy' to transfer the result."
    ],
    examples: [
      {
        title: "Standard SQL Query Beautification with Uppercase Keywords",
        input: "select u.id,u.name,count(o.id) as orders from users u left join orders o on u.id=o.user_id where u.active=1 group by u.id,u.name having count(o.id)>5 order by orders desc;",
        output: "SELECT\n  u.id,\n  u.name,\n  COUNT(o.id) AS orders\nFROM\n  users u\n  LEFT JOIN orders o ON u.id = o.user_id\nWHERE\n  u.active = 1\nGROUP BY\n  u.id,\n  u.name\nHAVING\n  COUNT(o.id) > 5\nORDER BY\n  orders DESC;"
      },
      {
        title: "Minifying SQL for Inline Backend String Literals",
        input: "SELECT\n  emp_id,\n  department\nFROM\n  employees\nWHERE\n  salary > 75000;",
        output: "SELECT emp_id, department FROM employees WHERE salary > 75000;\nFormatting Benefit: Compact single-line string ready for Python, Node.js, or Go database query templates"
      }
    ],
    mistakes: [
      "Selecting the wrong dialect when using database-specific syntax (such as PostgreSQL's :: cast or SQL Server's TOP / CROSS APPLY clauses).",
      "Expecting the formatter to fix semantic SQL bugs (such as referencing invalid column names or misspelled tables); the tool formats syntax and does not execute queries against a database.",
      "Formatting incomplete or truncated query snippets, which can cause the parser to misunderstand clause hierarchy.",
      "Overlooking keyword case preferences when contributing to team repositories with strict uppercase or lowercase linter rules."
    ],
    privacy: "Your SQL queries are processed 100% locally in your web browser. Neither your database structure, table names, column identifiers, nor proprietary query logic are transmitted over the internet or logged on any remote server.",
    guide: {
      title: "SQL Query Formatting & Index Optimization Guide",
      slug: "sql-formatter-guide"
    },
    faqs: [
      {
        question: "Which SQL dialects are supported?",
        answer: "The formatter supports Standard ANSI SQL, PostgreSQL, MySQL, MariaDB, SQLite, and Transact-SQL (T-SQL / Microsoft SQL Server). Each dialect handles vendor-specific quoting, operators, and reserved keywords appropriately."
      },
      {
        question: "Does formatting SQL alter my query's execution plan or performance?",
        answer: "No. SQL engines strip whitespace and normalize query tokens into an Abstract Syntax Tree (AST) before optimization and execution. Changing whitespace, indentation, or keyword casing does not affect database execution speed."
      },
      {
        question: "Can I enforce uppercase SQL keywords automatically?",
        answer: "Yes. By selecting the 'UPPER' keyword case option, keywords such as SELECT, FROM, WHERE, JOIN, and GROUP BY are automatically converted to uppercase while preserving the casing of table and column identifiers."
      },
      {
        question: "What does the '⚡ Minify SQL' button do?",
        answer: "'⚡ Minify SQL' collapses all multi-line indentation, unnecessary whitespace, and line breaks into a clean, compact single-line SQL statement, which is ideal for embedding into application source code strings."
      },
      {
        question: "Are my database queries stored or monitored?",
        answer: "No. The formatting engine runs entirely client-side using WebAssembly/JavaScript inside your browser. No queries or schema structures are ever transmitted to AstonishBuddy servers."
      },
      {
        question: "Can this tool validate whether my table names and columns exist?",
        answer: "No. The formatter analyzes query syntax and token structures. It does not connect to your live database and cannot verify whether referenced tables, columns, or foreign keys exist in your schema."
      }
    ]
  }
};
