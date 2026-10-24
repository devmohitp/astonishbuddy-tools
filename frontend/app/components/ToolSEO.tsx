"use client";
import React, { useState } from "react";
import Link from "next/link";
import { toolsSEOData } from "../data/tools-seo-data";

interface ToolSEOProps {
  toolId: string;
}

// Map tool IDs to relevant in-depth blog posts
const toolBlogMap: Record<string, { title: string; href: string }> = {
  "image-compressor": {
    title: "The Ultimate Guide to Image Compression: Reduce File Size Without Losing Quality",
    href: "/blog/image-compression-guide",
  },
  "bulk-image-converter": {
    title: "Bulk Image Converter: Convert PNG, JPG & WebP in Batches",
    href: "/blog/bulk-image-converter",
  },
  "image-quality-enhancer": {
    title: "Image Quality Enhancer: Improve Photo Clarity Without Artifacts",
    href: "/blog/image-quality-enhancer",
  },
  "image-background-extender": {
    title: "WebP vs PNG vs JPG: Which Image Format Should You Use?",
    href: "/blog/webp-vs-png-vs-jpg",
  },
  "ai-image-extender": {
    title: "WebP vs PNG vs JPG: Which Image Format Should You Use?",
    href: "/blog/webp-vs-png-vs-jpg",
  },
  "pdf-compressor": {
    title: "Key Benefits of Using Online File Conversion Tools",
    href: "/blog/benefits-of-using-online-file-conversion-tools",
  },
  "text-case-converter": {
    title: "10 Everyday Tasks You Can Complete Faster Using Free Online Tools",
    href: "/blog/10-everyday-tasks-you-can-complete-faster-using-free-online-tools",
  },
  "word-counter": {
    title: "Best Free Online Tools for Students in 2026: Boost Productivity & Study Smarter",
    href: "/blog/best-free-online-tools-for-students",
  },
  "text-sorter": {
    title: "Text Sorter Guide: Organize Lists and Text Instantly",
    href: "/blog/text-sorter-guide",
  },
  "password-generator": {
    title: "How to Create Strong Passwords Online: Complete Security Guide",
    href: "/blog/how-to-create-strong-passwords-online",
  },
  "json-formatter": {
    title: "How to Minify JSON: Boost Performance and Reduce API Latency",
    href: "/blog/minify-json",
  },
  "sql-formatter": {
    title: "SQL Formatter: How to Format and Beautify SQL Queries",
    href: "/blog/sql-formatter",
  },
  "jwt-decoder": {
    title: "JWT Decoder: How to Decode, Inspect, and Debug JSON Web Tokens",
    href: "/blog/jwt-decoder",
  },
  "base64-converter": {
    title: "Base64 Encoding & Decoding: The Definitive Developer Guide",
    href: "/blog/base64-encoder-decoder-guide",
  },
  "url-converter": {
    title: "URL Encoder & Decoder: What It Is, Why It Matters, and How to Use It",
    href: "/blog/url-encoder-decoder",
  },
  "uuid-generator": {
    title: "UUID / GUID Generator: Understanding UUID v4 and Random Identifiers",
    href: "/blog/uuid-guid-generator",
  },
  "diff-checker": {
    title: "Text Diff Checker: Compare Text and Highlight Differences Online",
    href: "/blog/text-diff-checker",
  },
  "markdown-converter": {
    title: "Markdown to HTML Converter: The Complete Guide to Formatting Web Content",
    href: "/blog/markdown-html-converter",
  },
  "color-converter": {
    title: "Color Code Converter: Complete Guide to HEX, RGB, and HSL",
    href: "/blog/color-code-converter-guide",
  },
  "lorem-ipsum-generator": {
    title: "Lorem Ipsum Generator: Complete Guide to Placeholder Text",
    href: "/blog/lorem-ipsum-generator-guide",
  },
  "random-number-generator": {
    title: "Random Number Generators: How They Work and Practical Uses",
    href: "/blog/random-number-generator-guide",
  },
  "qr-generator": {
    title: "Top Online Productivity Tools You Should Bookmark in 2026",
    href: "/blog/top-online-productivity-tools",
  },
  "bulk-qrcode-generator": {
    title: "10 Everyday Tasks You Can Complete Faster Using Free Online Tools",
    href: "/blog/10-everyday-tasks-you-can-complete-faster-using-free-online-tools",
  },
};

function AccordionItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const accentColor = "var(--accent-1)";
  return (
    <div
      style={{
        background: isOpen ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${isOpen ? accentColor + "44" : "var(--border)"}`,
        borderRadius: "12px",
        overflow: "hidden",
        transition: "all 0.25s ease",
        marginBottom: "10px",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 22px",
          gap: "16px",
          background: "none",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            margin: 0,
            fontWeight: 600,
            fontSize: "15px",
            color: isOpen ? "var(--text-primary)" : "var(--text-secondary)",
            lineHeight: 1.5,
            transition: "color 0.2s",
          }}
        >
          {q}
        </span>
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: isOpen ? accentColor + "22" : "rgba(255,255,255,0.05)",
            border: `1px solid ${isOpen ? accentColor + "55" : "var(--border)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.25s ease",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isOpen ? accentColor : "var(--text-muted)"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: "transform 0.25s ease", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      {/* Answer is ALWAYS present in the DOM for SEO, screen readers, and HTML crawlers */}
      <div
        style={{
          padding: isOpen ? "0 22px 18px" : "0 22px",
          maxHeight: isOpen ? "600px" : "0px",
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          fontSize: "15px",
          color: "var(--text-secondary)",
          lineHeight: 1.8,
          borderTop: isOpen ? `1px solid ${accentColor}22` : "none",
        }}
      >
        {a}
      </div>
    </div>
  );
}

const ToolSEO: React.FC<ToolSEOProps> = ({ toolId }) => {
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({ 0: true });
  const data = toolsSEOData[toolId];

  if (!data) return null;

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const relatedBlog = toolBlogMap[toolId];

  return (
    <div style={{ marginTop: "64px", borderTop: "1px solid var(--border)", paddingTop: "64px" }}>
      {/* 2-Column Responsive Layout */}
      <div className="tool-seo-grid">
        {/* Left Column: About & Guide */}
        <div className="tool-seo-left">
          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "26px", fontWeight: 900, color: "white", marginBottom: "20px", letterSpacing: "-0.5px" }}>
              About {data.name}
            </h2>
            <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.8 }}>
              {data.shortIntro}
            </p>
          </section>

          <div className="seo-guide-content">
            {data.guideContent}
          </div>

          {/* Related In-Depth Tutorial / Blog Link */}
          {relatedBlog && (
            <div
              style={{
                marginTop: "40px",
                padding: "20px 24px",
                background: "rgba(108, 99, 255, 0.05)",
                border: "1px solid rgba(108, 99, 255, 0.25)",
                borderRadius: "14px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div style={{ fontSize: "12px", color: "var(--accent-1)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>
                📖 Recommended In-Depth Guide
              </div>
              <Link
                href={relatedBlog.href}
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>{relatedBlog.title}</span>
                <span style={{ color: "var(--accent-1)" }}>&rarr;</span>
              </Link>
            </div>
          )}
        </div>

        {/* Right Column: FAQ Section */}
        <div className="tool-seo-right">
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "26px" }}>
              <h2 style={{ fontSize: "26px", fontWeight: 900, color: "white", letterSpacing: "-0.5px", margin: 0 }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {data.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  q={faq.q}
                  a={faq.a}
                  isOpen={!!openFaqs[index]}
                  onToggle={() => toggleFaq(index)}
                />
              ))}
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .tool-seo-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 64px;
          align-items: start;
        }

        .tool-seo-left {
          min-width: 0;
        }

        .tool-seo-right {
          position: sticky;
          top: 32px;
        }

        @media (max-width: 1100px) {
          .tool-seo-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .tool-seo-right {
            position: static;
          }
        }

        .seo-guide-content :global(h3) {
          font-size: 19px !important;
          margin-top: 32px !important;
          margin-bottom: 14px !important;
          color: white !important;
          font-weight: 700 !important;
        }
        .seo-guide-content :global(p) {
          margin-bottom: 18px !important;
        }
        .seo-guide-content :global(ul), .seo-guide-content :global(ol) {
          padding-left: 20px !important;
          margin-bottom: 24px !important;
        }
        .seo-guide-content :global(li) {
          margin-bottom: 10px !important;
          color: var(--text-secondary) !important;
        }
      `}</style>
    </div>
  );
};

export default ToolSEO;
