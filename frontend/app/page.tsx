"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Magnetic from "./components/Magnetic";
import Ripple from "./components/Ripple";
import AnimatedSection from "./components/AnimatedSection";

const tools = [
  {
    id: "image-compressor",
    name: "Image Compressor",
    description: "Reduce image file size without losing quality. Professional-grade compression algorithm that supports JPG, PNG & WebP formats.",
    icon: "🖼️",
    color: "#6c63ff",
    glow: "rgba(108, 99, 255, 0.4)",
    tag: "Media",
    tagColor: "rgba(108,99,255,0.15)",
    tagText: "#818cf8",
  },
  {
    id: "text-case-converter",
    name: "Text Case Converter",
    description: "The ultimate text utility. Convert your content to UPPERCASE, lowercase, Title Case, camelCase, PascalCase, or SnakE_CAse in one click.",
    icon: "🔤",
    color: "#a855f7",
    glow: "rgba(168, 85, 247, 0.4)",
    tag: "Text",
    tagColor: "rgba(168,85,247,0.15)",
    tagText: "#c084fc",
  },
  {
    id: "password-generator",
    name: "Password Generator",
    description: "Security first. Generate cryptographically strong, secure passwords with custom entropy, length, and personalized character sets.",
    icon: "🔐",
    color: "#ec4899",
    glow: "rgba(236, 72, 153, 0.4)",
    tag: "Security",
    tagColor: "rgba(236,72,153,0.15)",
    tagText: "#f472b6",
  },
  {
    id: "json-formatter",
    name: "JSON Formatter",
    description: "Beautifully visualize, validate, and minify your JSON data. Features syntax highlighting and tree-view structured exploration.",
    icon: "{ }",
    color: "#06b6d4",
    glow: "rgba(6, 182, 212, 0.4)",
    tag: "Developer",
    tagColor: "rgba(6,182,212,0.15)",
    tagText: "#22d3ee",
  },
  {
    id: "word-counter",
    name: "Word Counter",
    description: "Detailed linguistic statistics. Count words, characters (with/without spaces), sentences, and paragraphs while estimating reading time.",
    icon: "📊",
    color: "#10b981",
    glow: "rgba(16, 185, 129, 0.4)",
    tag: "Text",
    tagColor: "rgba(16,185,129,0.15)",
    tagText: "#34d399",
  },
  {
    id: "qr-generator",
    name: "QR Code Generator",
    description: "Generate high-resolution QR codes for any data type. Full control over error correction, pixel colors, and quiet zones.",
    icon: "⬛",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.4)",
    tag: "Utility",
    tagColor: "rgba(245,158,11,0.15)",
    tagText: "#fbbf24",
  },
  {
    id: "base64-converter",
    name: "Base64 Converter",
    description: "Seamless data encoding. Convert binary or text data into Base64 format or decode it back to its original state instantly.",
    icon: "🔄",
    color: "#06b6d4",
    glow: "rgba(6, 182, 212, 0.4)",
    tag: "Developer",
    tagColor: "rgba(6,182,212,0.15)",
    tagText: "#22d3ee",
  },
  {
    id: "url-converter",
    name: "URL Converter",
    description: "Safe and secure URL encoding. Process special characters for use in query strings or decode incoming URL parameters safely.",
    icon: "🔗",
    color: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.4)",
    tag: "Developer",
    tagColor: "rgba(59,130,246,0.15)",
    tagText: "#60a5fa",
  },
  {
    id: "lorem-ipsum-generator",
    name: "Lorem Ipsum",
    description: "Generate high-fidelity placeholder text for your UI designs. Customize paragraphs, sentences, and words to fit any layout.",
    icon: "📝",
    color: "#6366f1",
    glow: "rgba(99, 102, 241, 0.4)",
    tag: "Design",
    tagColor: "rgba(99,102,241,0.15)",
    tagText: "#818cf8",
  },
  {
    id: "random-number-generator",
    name: "Random Number",
    description: "Truly random generation within your specified ranges. Perfect for simulations, decision making, or cryptographic testing.",
    icon: "🎲",
    color: "#14b8a6",
    glow: "rgba(20, 184, 166, 0.4)",
    tag: "Utility",
    tagColor: "rgba(20,184,166,0.15)",
    tagText: "#2dd4bf",
  },
  {
    id: "text-sorter",
    name: "Text Sorter",
    description: "Professional data sorting. Organize lists alphabetically, by length, or remove duplicate entries with natural language processing.",
    icon: "🔤",
    color: "#8b5cf6",
    glow: "rgba(139, 92, 246, 0.4)",
    tag: "Text",
    tagColor: "rgba(139,92,246,0.15)",
    tagText: "#a78bfa",
  },
  {
    id: "color-converter",
    name: "Color Converter",
    description: "The complete color bridge. Convert instantly between HEX, RGB, HSL, and CMYK. Visualize changes in real-time with our analyzer.",
    icon: "🎨",
    color: "#f43f5e",
    glow: "rgba(244, 63, 94, 0.4)",
    tag: "Design",
    tagColor: "rgba(244,63,94,0.15)",
    tagText: "#fb7185",
  },
];

function Card({ tool, index }: { tool: typeof tools[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/tools/${tool.id}`}
        style={{ textDecoration: "none", display: "block" }}
      >
        <div
          className="glass-card soft-hover-glow icon-bounce"
          style={{
            padding: "40px",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "18px",
              background: `linear-gradient(135deg, ${tool.color}22, ${tool.color}44)`,
              border: `1px solid ${tool.color}33`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: tool.icon === "{ }" ? "22px" : "32px",
              fontWeight: tool.icon === "{ }" ? 700 : 400,
              color: tool.color,
              marginBottom: "24px",
              boxShadow: `0 8px 30px ${tool.glow}`,
            }}
          >
            {tool.icon}
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "4px 12px",
              borderRadius: "8px",
              background: tool.tagColor,
              color: tool.tagText,
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              marginBottom: "16px",
              width: "fit-content",
            }}
          >
            {tool.tag}
          </div>

          <h3
            style={{
              fontSize: "24px",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "12px",
              letterSpacing: "-0.5px",
            }}
          >
            {tool.name}
          </h3>

          <p
            style={{
              fontSize: "15px",
              color: "var(--text-secondary)",
              lineHeight: "1.6",
              marginBottom: "32px",
              flexGrow: 1,
            }}
          >
            {tool.description}
          </p>

          <Magnetic>
            <Ripple color={tool.color + "33"}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: tool.color,
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Open Tool
                <span style={{ fontSize: "18px" }}>→</span>
              </div>
            </Ripple>
          </Magnetic>

          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${tool.color}08 0%, transparent 70%)`,
              transform: "translate(30%, -30%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </Link>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        fontFamily: "Outfit, sans-serif",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section style={{ padding: "120px 24px 80px" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 20px",
                borderRadius: "100px",
                background: "rgba(108, 99, 255, 0.15)",
                border: "1px solid rgba(108, 99, 255, 0.3)",
                fontSize: "14px",
                color: "#818cf8",
                fontWeight: 600,
                marginBottom: "32px",
              }}
            >
              ✨ 100% Free · No Sign-up · Fast & Secure
            </div>

            <h1
              style={{
                fontSize: "clamp(3rem, 10vw, 5rem)",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-3px",
                marginBottom: "32px",
              }}
            >
              <span className="gradient-text">Powerful Tools</span>
              <br />
              <span style={{ color: "var(--text-primary)", opacity: 0.9 }}>at Your Fingertips</span>
            </h1>

            <p
              style={{
                fontSize: "20px",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                maxWidth: "650px",
                margin: "0 auto",
                fontWeight: 400,
              }}
            >AstonishBuddy – Free Online Tools for Image Compression, Text Conversion, JSON Formatting, and More.</p>


          </div>
        </AnimatedSection>
      </section>

      {/* Tools Section */}
      <div id="all-tools" className="tools-grid">
        {tools.map((tool, index) => (
          <Card key={tool.id} tool={tool} index={index} />
        ))}
      </div>

      {/* Disclaimer Section */}
      <section className="snap-section">
        <AnimatedSection>
          <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ padding: "80px", background: "var(--bg-card)", borderRadius: "48px", border: "1px solid var(--border)", boxShadow: "0 60px 150px rgba(0,0,0,0.6)" }}>
              <h2 style={{ fontSize: "48px", fontWeight: 900, color: "var(--text-primary)", marginBottom: "60px", textAlign: "center", letterSpacing: "-2px" }}>
                Disclaimer
              </h2>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "60px" }}>
                <div>
                  <h3 style={{ fontSize: "24px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>General Information</h3>
                  <p style={{ fontSize: "17px", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                    All information and tools provided on AstonishBuddy are for general informational and utility purposes only. We strive for excellence but make no guarantees regarding results.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: "24px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>Legal & Privacy</h3>
                  <p style={{ fontSize: "17px", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                    Tools are provided &ldquo;as is&rdquo;. Your usage constitutes agreement to verify results independently. We are not liable for data loss or any indirect damages.
                  </p>
                </div>
              </div>

              <div className="divider" style={{ margin: "60px 0", opacity: 0.3 }} />

              <p style={{ textAlign: "center", fontSize: "16px", fontStyle: "italic", maxWidth: "700px", margin: "0 auto", color: "var(--text-muted)" }}>
                By using AstonishBuddy, you agree to these terms. We value your trust and prioritize your workflow security above all else.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
}
