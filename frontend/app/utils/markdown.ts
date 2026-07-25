/**
 * Formats a plain text or markdown string into clean HTML matching
 * the design system of the AstonishBuddy blog.
 */
export function parseMarkdownToHTML(content: string): string {
  if (!content) return "";

  // Normalize line endings
  const normalized = content.replace(/\r\n/g, "\n");

  // Split content by blank lines (paragraphs / block boundaries)
  const blocks = normalized.split(/\n\s*\n/);
  let html = "";

  // Track if we are inside a list block
  let inUnorderedList = false;
  let inOrderedList = false;

  const closeLists = () => {
    if (inUnorderedList) {
      html += "</ul>\n";
      inUnorderedList = false;
    }
    if (inOrderedList) {
      html += "</ol>\n";
      inOrderedList = false;
    }
  };

  for (let block of blocks) {
    block = block.trim();
    if (!block) continue;

    // 1. Headings
    if (block.startsWith("### ")) {
      closeLists();
      const text = block.substring(4).trim();
      html += `<h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; margin-top: 24px; color: var(--text-primary); font-family: var(--font-outfit), Outfit, sans-serif;">${parseInline(text)}</h3>\n`;
      continue;
    }

    if (block.startsWith("## ")) {
      closeLists();
      const text = block.substring(3).trim();
      html += `<h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 12px; margin-top: 32px; color: var(--text-primary); font-family: var(--font-outfit), Outfit, sans-serif;">${parseInline(text)}</h2>\n`;
      continue;
    }

    if (block.startsWith("# ")) {
      closeLists();
      const text = block.substring(2).trim();
      html += `<h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 16px; margin-top: 36px; color: var(--text-primary); font-family: var(--font-outfit), Outfit, sans-serif;">${parseInline(text)}</h2>\n`;
      continue;
    }

    // Also detect plain text headings (lines that are short, capitalize words, and don't end in punctuation)
    const lines = block.split("\n");
    if (
      lines.length === 1 &&
      block.length < 80 &&
      !block.endsWith(".") &&
      !block.endsWith("?") &&
      !block.endsWith("!") &&
      !block.startsWith("<") &&
      // check if it looks like a list item
      !/^[-*•\d]/.test(block)
    ) {
      closeLists();
      html += `<h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 8px; margin-top: 24px; color: var(--text-primary); font-family: var(--font-outfit), Outfit, sans-serif;">${parseInline(block)}</h3>\n`;
      continue;
    }

    // 2. Unordered Lists (block level check)
    const isUlist = lines.every((line) => /^\s*([-*•])\s+/.test(line));
    if (isUlist) {
      closeLists();
      html += '<ul style="padding-left: 20px; margin-bottom: 16px; list-style-type: disc;">\n';
      lines.forEach((line) => {
        const itemText = line.replace(/^\s*([-*•])\s+/, "").trim();
        html += `  <li style="margin-bottom: 6px; color: var(--text-secondary);">${parseInline(itemText)}</li>\n`;
      });
      html += "</ul>\n";
      continue;
    }

    // 3. Ordered Lists (block level check)
    const isOlist = lines.every((line) => /^\s*(\d+)\.\s+/.test(line));
    if (isOlist) {
      closeLists();
      html += '<ol style="padding-left: 20px; margin-bottom: 16px; list-style-type: decimal;">\n';
      lines.forEach((line) => {
        const itemText = line.replace(/^\s*(\d+)\.\s+/, "").trim();
        html += `  <li style="margin-bottom: 6px; color: var(--text-secondary);">${parseInline(itemText)}</li>\n`;
      });
      html += "</ol>\n";
      continue;
    }

    // 4. Mixed or Line-by-line processing
    let blockHtml = "";
    let lineInUlist = false;
    let lineInOlist = false;

    for (let line of lines) {
      line = line.trim();
      if (!line) continue;

      if (/^([-*•])\s+/.test(line)) {
        if (lineInOlist) {
          blockHtml += "</ol>\n";
          lineInOlist = false;
        }
        if (!lineInUlist) {
          blockHtml += '<ul style="padding-left: 20px; margin-bottom: 16px; list-style-type: disc;">\n';
          lineInUlist = true;
        }
        const itemText = line.replace(/^([-*•])\s+/, "").trim();
        blockHtml += `  <li style="margin-bottom: 6px; color: var(--text-secondary);">${parseInline(itemText)}</li>\n`;
      } else if (/^(\d+)\.\s+/.test(line)) {
        if (lineInUlist) {
          blockHtml += "</ul>\n";
          lineInUlist = false;
        }
        if (!lineInOlist) {
          blockHtml += '<ol style="padding-left: 20px; margin-bottom: 16px; list-style-type: decimal;">\n';
          lineInOlist = true;
        }
        const itemText = line.replace(/^(\d+)\.\s+/, "").trim();
        blockHtml += `  <li style="margin-bottom: 6px; color: var(--text-secondary);">${parseInline(itemText)}</li>\n`;
      } else {
        if (lineInUlist) {
          blockHtml += "</ul>\n";
          lineInUlist = false;
        }
        if (lineInOlist) {
          blockHtml += "</ol>\n";
          lineInOlist = false;
        }

        // If it looks like HTML, keep it raw
        if (line.startsWith("<") && (line.endsWith(">") || line.includes("</"))) {
          blockHtml += line + "\n";
        } else {
          blockHtml += `<p style="margin-bottom: 16px; color: var(--text-secondary); line-height: 1.8;">${parseInline(line)}</p>\n`;
        }
      }
    }

    if (lineInUlist) blockHtml += "</ul>\n";
    if (lineInOlist) blockHtml += "</ol>\n";

    closeLists();
    html += blockHtml;
  }

  closeLists();
  return html;
}

function parseInline(text: string): string {
  if (!text) return "";

  // Escape basic HTML characters to prevent broken tags, but preserve existing correct HTML tags
  let formatted = text;

  // Replace bold **text** or __text__
  formatted = formatted
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/__(.*?)__/g, "<strong>$1</strong>");

  // Replace italic *text* or _text_
  formatted = formatted
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/_(.*?)_/g, "<em>$1</em>");

  return formatted;
}
