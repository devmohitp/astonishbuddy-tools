const fs = require('fs');
const path = require('path');

// Tools data definitions
// Each tool will have:
// - id
// - name
// - shortIntro
// - guideContent (React JSX with intro, key features, step-by-step UI usage, 2 worked examples, common mistakes, privacy)
// - faqs (exactly 6 FAQs)
// - keywords

console.log('Preparing tool SEO data...');
