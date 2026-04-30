"use client";
import type { Metadata } from "next";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const faqCategories = [
  {
    id: "image-compressor",
    label: "Image Compressor",
    icon: "🖼️",
    color: "var(--accent-1)",
    faqs: [
      {
        q: "Does image compression reduce quality?",
        a: "Slight quality loss may occur in lossy compression, but most tools maintain visually similar results.",
      },
      {
        q: "Is it safe to use an online image compressor?",
        a: "Yes, most modern tools process images securely and do not store your files.",
      },
      {
        q: "Is this tool free to use?",
        a: "Yes, you can compress images online for free without any signup.",
      },
      {
        q: "Can I compress multiple images?",
        a: "Some tools support bulk compression, allowing you to optimize multiple images at once.",
      },
    ],
  },
  {
    id: "text-case-converter",
    label: "Text Case Converter",
    icon: "🔤",
    color: "var(--accent-2)",
    faqs: [
      {
        q: "What is the best case format for writing?",
        a: "Title Case is best for headings, while Sentence case is ideal for paragraphs.",
      },
      {
        q: "Is this tool free to use?",
        a: "Yes, you can use the text case converter for free without any signup.",
      },
      {
        q: "Is my data safe?",
        a: "Yes, most online tools process text locally or securely without storing your data.",
      },
      {
        q: "Can I convert large text?",
        a: "Yes, you can paste and convert large paragraphs instantly.",
      },
    ],
  },
  {
    id: "password-generator",
    label: "Password Generator",
    icon: "🔐",
    color: "#ec4899",
    faqs: [
      {
        q: "Is it safe to use a password generator?",
        a: "Yes, our tool generates passwords on your device and does not store or see your data.",
      },
      {
        q: "What is the ideal password length?",
        a: "For most accounts, a minimum of 12 characters is recommended for strong security.",
      },
      {
        q: "Can I use the same password for multiple accounts?",
        a: "No, always use a unique password for each account to prevent a single breach from affecting everything.",
      },
      {
        q: "Is this tool free to use?",
        a: "Yes, you can generate as many secure passwords as you want for free without any signup.",
      },
    ],
  },
  {
    id: "json-formatter",
    label: "JSON Formatter",
    icon: "{ }",
    color: "#06b6d4",
    faqs: [
      {
        q: "What is JSON used for?",
        a: "JSON is mainly used for data exchange between servers and web applications, particularly in RESTful APIs.",
      },
      {
        q: "Can a JSON formatter fix errors automatically?",
        a: "It highlights errors precisely, but you usually need to correct the syntax manually.",
      },
      {
        q: "Is this tool free to use?",
        a: "Yes, you can format and validate JSON online for free without any signup or software installation.",
      },
      {
        q: "Is my data secure?",
        a: "Our tool processes your data locally in your browser. We do not store or transmit your JSON content.",
      },
    ],
  },
  {
    id: "word-counter",
    label: "Word Counter",
    icon: "📊",
    color: "#10b981",
    faqs: [
      {
        q: "What is the ideal word count for a blog post?",
        a: "Typically, 800–1500 words is considered optimal for SEO-friendly blog posts.",
      },
      {
        q: "Does the tool count characters as well?",
        a: "Yes, it counts both characters with and without spaces in real time.",
      },
      {
        q: "Is this tool free to use?",
        a: "Yes, the word counter is completely free and requires no signup or installation.",
      },
      {
        q: "Can I count large text?",
        a: "Yes, you can paste large content, and the tool will process it instantly without any lag.",
      },
    ],
  },
  {
    id: "qr-code-generator",
    label: "QR Code Generator",
    icon: "⬛",
    color: "#f59e0b",
    faqs: [
      {
        q: "Are QR codes free to create?",
        a: "Yes, you can generate static QR codes online for free without any signup or hidden costs.",
      },
      {
        q: "Can I customize my QR code?",
        a: "Yes, our tool allows you to customize the color and background to match your brand.",
      },
      {
        q: "Do QR codes expire?",
        a: "Static QR codes like the ones generated here do not expire; they will work as long as the content link exists.",
      },
      {
        q: "Is it safe to use QR codes?",
        a: "Yes, though you should always ensure the destination URL is from a trusted source before scanning.",
      },
    ],
  },
  {
    id: "base64",
    label: "Base64 Encoder/Decoder",
    icon: "🔄",
    color: "#06b6d4",
    faqs: [
      {
        q: "Is Base64 encoding secure?",
        a: "No, Base64 is NOT encryption. It is just a data format conversion. Anyone can decode it easily.",
      },
      {
        q: "Why does Base64 increase file size?",
        a: "Base64 uses 4 characters to represent 3 bytes of binary data, causing a growth of roughly 33%.",
      },
      {
        q: "Can I encode images using Base64?",
        a: "Yes, this is common for small UI icons or embedding images directly in CSS files.",
      },
      {
        q: "Is this tool free to use?",
        a: "Yes, you can encode and decode as much as you need for free without any signup.",
      },
    ],
  },
  {
    id: "url-encoder",
    label: "URL Encoder/Decoder",
    icon: "🔗",
    color: "#3b82f6",
    faqs: [
      {
        q: "What is URL encoding used for?",
        a: "It is used to safely transmit special characters (like ?, &, =) that have special meanings in URLs.",
      },
      {
        q: "What does %20 mean in a URL?",
        a: "It is the URL-encoded representation of a space character.",
      },
      {
        q: "Is static URL encoding necessary?",
        a: "Yes, whenever you include user-generated content or symbols in a URL path or query string.",
      },
      {
        q: "Is this tool free to use?",
        a: "Yes, you can encode and decode URLs for free with no limitations or signups.",
      },
    ],
  },
  {
    id: "lorem-ipsum",
    label: "Lorem Ipsum Generator",
    icon: "📝",
    color: "#6366f1",
    faqs: [
      {
        q: "What is Lorem Ipsum used for?",
        a: "It is used as placeholder text in design and development projects.",
      },
      {
        q: "Does Lorem Ipsum have meaning?",
        a: "No, it is pseudo-Latin text used for visual purposes.",
      },
      {
        q: "Is this tool free to use?",
        a: "Yes, you can generate Lorem Ipsum text online for free without any signup.",
      },
      {
        q: "Can I generate custom amounts of text?",
        a: "Yes, you can generate as many paragraphs, sentences, or words as needed.",
      },
    ],
  },
  {
    id: "random-number",
    label: "Random Number Generator",
    icon: "🎲",
    color: "#14b8a6",
    faqs: [
      {
        q: "Are random numbers truly random?",
        a: "Most online tools use pseudo-random algorithms, which are sufficiently random for general use.",
      },
      {
        q: "Can I generate multiple numbers at once?",
        a: "Yes, you can generate multiple random numbers in a single click.",
      },
      {
        q: "Is this tool free to use?",
        a: "Yes, you can generate random numbers online for free without any signup.",
      },
      {
        q: "Can I use this for secure applications?",
        a: "For high-security needs, use cryptographic random generators instead.",
      },
    ],
  },
  {
    id: "text-sorter",
    label: "Text Sorter",
    icon: "🔤",
    color: "#8b5cf6",
    faqs: [
      {
        q: "Can I sort numbers using this tool?",
        a: "Yes, you can sort both text and numerical data.",
      },
      {
        q: "Does it support large datasets?",
        a: "Yes, most text sorters can handle large amounts of text efficiently.",
      },
      {
        q: "Is this tool free to use?",
        a: "Yes, you can sort text online for free without any signup.",
      },
      {
        q: "Can I remove duplicate lines?",
        a: "Some tools provide an option to remove duplicates for cleaner output.",
      },
    ],
  },
  {
    id: "color-converter",
    label: "Color Code Converter",
    icon: "🎨",
    color: "#f43f5e",
    faqs: [
      {
        q: "What is the most commonly used color format?",
        a: "HEX is widely used in web development.",
      },
      {
        q: "Can I convert between all color formats?",
        a: "Yes, most tools support multiple conversions like HEX, RGB, and HSL.",
      },
      {
        q: "Is this tool free to use?",
        a: "Yes, you can convert color codes online for free without any signup.",
      },
      {
        q: "Why are my colors different on screens?",
        a: "Different devices may display colors slightly differently due to calibration.",
      },
    ],
  },
];

function AccordionItem({
  q,
  a,
  color,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  color: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        background: isOpen ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${isOpen ? color + "44" : "var(--border)"}`,
        borderRadius: "12px",
        overflow: "hidden",
        transition: "all 0.25s ease",
        cursor: "pointer",
      }}
      onClick={onToggle}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 22px",
          gap: "16px",
        }}
      >
        <p
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
        </p>
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: isOpen ? color + "22" : "rgba(255,255,255,0.05)",
            border: `1px solid ${isOpen ? color + "55" : "var(--border)"}`,
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
            stroke={isOpen ? color : "var(--text-muted)"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: "transform 0.25s ease", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div
          style={{
            padding: "0 22px 18px",
            fontSize: "15px",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            borderTop: `1px solid ${color}22`,
          }}
        >
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const activeLabel = activeCategory === "all" ? "Filter by Category: All Tools" : faqCategories.find(c => c.id === activeCategory)?.label;
  const activeIcon = activeCategory === "all" ? "" : faqCategories.find(c => c.id === activeCategory)?.icon;

  const filteredCategories =
    activeCategory === "all"
      ? faqCategories
      : faqCategories.filter((c) => c.id === activeCategory);

  const totalFaqs = faqCategories.reduce((sum, c) => sum + c.faqs.length, 0);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          padding: "80px 24px 48px",
          maxWidth: "700px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: "100px",
            padding: "6px 16px",
            fontSize: "13px",
            color: "#818cf8",
            fontWeight: 600,
            marginBottom: "24px",
            letterSpacing: "0.5px",
          }}
        >
          <span>💬</span>
          {totalFaqs} Questions Answered
        </div>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            marginBottom: "20px",
            lineHeight: 1.15,
            background: "linear-gradient(135deg, var(--text-primary) 0%, #818cf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Frequently Asked Questions
        </h1>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "18px",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Everything you need to know about our free online tools — organized by category.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div
        style={{
          padding: "0 24px 48px",
          maxWidth: "1000px",
          margin: "0 auto",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "48px",
          }}
        >
          <div style={{ position: "relative", width: "100%", maxWidth: "320px", zIndex: 50 }} ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{
                width: "100%",
                padding: "16px 20px",
                borderRadius: "14px",
                background: "var(--bg-card)",
                border: `1px solid ${isDropdownOpen ? "#818cf8" : "var(--border)"}`,
                color: "var(--text-primary)",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: isDropdownOpen ? "0 4px 20px rgba(129, 140, 248, 0.15)" : "0 4px 12px rgba(0,0,0,0.1)",
                transition: "all 0.2s",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {activeCategory === "all" ? "Filter by Category: All Tools" : <>{activeIcon} {activeLabel}</>}
              </span>
              <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={18} color="var(--text-secondary)" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    left: 0,
                    right: 0,
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "14px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: "360px",
                    overflowY: "auto",
                  }}
                >
                  <div
                    onClick={() => { setActiveCategory("all"); setIsDropdownOpen(false); }}
                    style={{
                      padding: "14px 20px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: activeCategory === "all" ? "rgba(129, 140, 248, 0.1)" : "transparent",
                      color: activeCategory === "all" ? "#818cf8" : "var(--text-primary)",
                      fontWeight: activeCategory === "all" ? 700 : 500,
                      fontSize: "14px",
                      borderBottom: "1px solid var(--border)",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => { if (activeCategory !== "all") e.currentTarget.style.background = "var(--bg-secondary)" }}
                    onMouseLeave={(e) => { if (activeCategory !== "all") e.currentTarget.style.background = "transparent" }}
                  >
                    All Tools
                    {activeCategory === "all" && <Check size={16} />}
                  </div>

                  {faqCategories.map((cat) => (
                    <div
                      key={cat.id}
                      onClick={() => { setActiveCategory(cat.id); setIsDropdownOpen(false); }}
                      style={{
                        padding: "12px 20px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: activeCategory === cat.id ? `${cat.color}15` : "transparent",
                        color: activeCategory === cat.id ? cat.color : "var(--text-primary)",
                        fontWeight: activeCategory === cat.id ? 700 : 500,
                        fontSize: "14px",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) => { if (activeCategory !== cat.id) e.currentTarget.style.background = "var(--bg-secondary)" }}
                      onMouseLeave={(e) => { if (activeCategory !== cat.id) e.currentTarget.style.background = "transparent" }}
                    >
                      <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "16px" }}>{cat.icon}</span>
                        {cat.label}
                      </span>
                      {activeCategory === cat.id && <Check size={16} />}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* FAQ Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {filteredCategories.map((cat) => (
            <section key={cat.id}>
              {/* Category Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: `linear-gradient(135deg, ${cat.color}20, ${cat.color}40)`,
                    border: `1px solid ${cat.color}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    flexShrink: 0,
                  }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "20px",
                      fontWeight: 700,
                      color: cat.color,
                    }}
                  >
                    {cat.label}
                  </h2>
                  <p style={{ margin: 0, fontSize: "13px", color: "var(--text-muted)" }}>
                    {cat.faqs.length} questions
                  </p>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {cat.faqs.map((faq, i) => {
                  const key = `${cat.id}-${i}`;
                  return (
                    <AccordionItem
                      key={key}
                      q={faq.q}
                      a={faq.a}
                      color={cat.color}
                      isOpen={!!openItems[key]}
                      onToggle={() => toggleItem(key)}
                    />
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "80px",
            textAlign: "center",
            padding: "48px 32px",
            background: "rgba(99,102,241,0.06)",
            border: "1px solid rgba(99,102,241,0.2)",
            borderRadius: "20px",
          }}
        >
          <div style={{ fontSize: "36px", marginBottom: "16px" }}>🛠️</div>
          <h3
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginBottom: "12px",
              color: "var(--text-primary)",
            }}
          >
            Still have questions?
          </h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "28px", lineHeight: 1.7, maxWidth: "420px", margin: "0 auto 28px" }}>
            Read our detailed guides for each tool or get in touch with us directly.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/guides"
              style={{
                padding: "12px 28px",
                borderRadius: "100px",
                background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
                color: "#fff",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Read Guides
            </a>
            <a
              href="/contact"
              style={{
                padding: "12px 28px",
                borderRadius: "100px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
