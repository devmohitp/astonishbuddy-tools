"use client";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const tools = [
  {
    id: "image-compressor",
    name: "Image Compressor",
    description: "Reduce image file size without losing quality. Supports JPG, PNG & WebP.",
    icon: "🖼️",
    color: "#6c63ff",
    glow: "rgba(108, 99, 255, 0.3)",
    tag: "Media",
    tagColor: "rgba(108,99,255,0.15)",
    tagText: "#818cf8",
  },
  {
    id: "text-case-converter",
    name: "Text Case Converter",
    description: "Convert text to UPPERCASE, lowercase, Title Case, camelCase & more.",
    icon: "🔤",
    color: "#a855f7",
    glow: "rgba(168, 85, 247, 0.3)",
    tag: "Text",
    tagColor: "rgba(168,85,247,0.15)",
    tagText: "#c084fc",
  },
  {
    id: "password-generator",
    name: "Password Generator",
    description: "Generate strong, secure passwords with custom length and character sets.",
    icon: "🔐",
    color: "#ec4899",
    glow: "rgba(236, 72, 153, 0.3)",
    tag: "Security",
    tagColor: "rgba(236,72,153,0.15)",
    tagText: "#f472b6",
  },
  {
    id: "json-formatter",
    name: "JSON Formatter",
    description: "Format, validate, and minify JSON data with syntax highlighting.",
    icon: "{ }",
    color: "#06b6d4",
    glow: "rgba(6, 182, 212, 0.3)",
    tag: "Developer",
    tagColor: "rgba(6,182,212,0.15)",
    tagText: "#22d3ee",
  },
  {
    id: "word-counter",
    name: "Word Counter",
    description: "Count words, characters, sentences, paragraphs & estimate reading time.",
    icon: "📊",
    color: "#10b981",
    glow: "rgba(16, 185, 129, 0.3)",
    tag: "Text",
    tagColor: "rgba(16,185,129,0.15)",
    tagText: "#34d399",
  },
  {
    id: "qr-generator",
    name: "QR Code Generator",
    description: "Generate QR codes for URLs, text, or any data. Customize colors & size.",
    icon: "⬛",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.3)",
    tag: "Utility",
    tagColor: "rgba(245,158,11,0.15)",
    tagText: "#fbbf24",
  },
  {
    id: "base64-converter",
    name: "Base64 Encoder / Decoder",
    description: "Encode text to Base64 or decode from Base64 instantly.",
    icon: "🔄",
    color: "#06b6d4",
    glow: "rgba(6, 182, 212, 0.3)",
    tag: "Developer",
    tagColor: "rgba(6,182,212,0.15)",
    tagText: "#22d3ee",
  },
  {
    id: "url-converter",
    name: "URL Encoder / Decoder",
    description: "Encode text for use in URLs or decode URL-encoded text.",
    icon: "🔗",
    color: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.3)",
    tag: "Developer",
    tagColor: "rgba(59,130,246,0.15)",
    tagText: "#60a5fa",
  },
  {
    id: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    description: "Generate dummy text for your designs and layouts.",
    icon: "📝",
    color: "#6366f1",
    glow: "rgba(99, 102, 241, 0.3)",
    tag: "Design",
    tagColor: "rgba(99,102,241,0.15)",
    tagText: "#818cf8",
  },
  {
    id: "random-number-generator",
    name: "Random Number Generator",
    description: "Generate random numbers with customizable ranges.",
    icon: "🎲",
    color: "#14b8a6",
    glow: "rgba(20, 184, 166, 0.3)",
    tag: "Utility",
    tagColor: "rgba(20,184,166,0.15)",
    tagText: "#2dd4bf",
  },
  {
    id: "text-sorter",
    name: "Text Sorter",
    description: "Sort lines alphabetically, by length, or remove duplicates.",
    icon: "🔤",
    color: "#8b5cf6",
    glow: "rgba(139, 92, 246, 0.3)",
    tag: "Text",
    tagColor: "rgba(139,92,246,0.15)",
    tagText: "#a78bfa",
  },
  {
    id: "color-converter",
    name: "Color Code Converter",
    description: "Convert color codes easily between HEX, RGB, and HSL.",
    icon: "🎨",
    color: "#f43f5e",
    glow: "rgba(244, 63, 94, 0.3)",
    tag: "Design",
    tagColor: "rgba(244,63,94,0.15)",
    tagText: "#fb7185",
  },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "60vw",
            height: "60vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-10%",
            width: "60vw",
            height: "60vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Navbar />

        {/* Hero */}
        <section
          style={{
            textAlign: "center",
            padding: "80px 24px 60px",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "100px",
              background: "rgba(108, 99, 255, 0.15)",
              border: "1px solid rgba(108, 99, 255, 0.3)",
              fontSize: "13px",
              color: "#818cf8",
              fontWeight: 500,
              marginBottom: "24px",
            }}
          >
            ✨ 100% Free · No Sign-up
          </div>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-2px",
              marginBottom: "20px",
            }}
          >
            <span className="gradient-text">Powerful Tools</span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>at Your Fingertips</span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            AstonishBuddy – Free Online Tools for Image Compression, Text Conversion, JSON Formatting, and More.
          </p>
        </section>

        {/* Tools Grid */}
        <section
          id="all-tools"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "40px 24px 80px",
            scrollMarginTop: "100px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "20px",
            }}
          >
            {tools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  className="glass-card"
                  style={{
                    padding: "28px 26px",
                    cursor: "pointer",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${tool.glow}`;
                    (e.currentTarget as HTMLElement).style.borderColor = tool.color + "44";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      background: `linear-gradient(135deg, ${tool.color}22, ${tool.color}44)`,
                      border: `1px solid ${tool.color}33`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: tool.icon === "{ }" ? "20px" : "26px",
                      fontWeight: tool.icon === "{ }" ? 700 : 400,
                      color: tool.color,
                      marginBottom: "16px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {tool.icon}
                  </div>

                  {/* Tag */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "3px 10px",
                      borderRadius: "6px",
                      background: tool.tagColor,
                      color: tool.tagText,
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.5px",
                      marginBottom: "12px",
                    }}
                  >
                    {tool.tag}
                  </div>

                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "10px",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {tool.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      marginBottom: "20px",
                    }}
                  >
                    {tool.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: tool.color,
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    Open Tool
                    <span style={{ transition: "transform 0.2s" }}>→</span>
                  </div>

                  {/* Glow accent */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${tool.color}12 0%, transparent 70%)`,
                      transform: "translate(30%, -30%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px 80px",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
          }}
        >
          <h2 style={{ fontSize: "28px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "32px", textAlign: "center", letterSpacing: "-0.5px" }}>
            Disclaimer
          </h2>
          
          <h3 style={{ fontSize: "18px", fontWeight: 600, color: "var(--text-primary)", marginTop: "24px", marginBottom: "12px" }}>General Information</h3>
          <p style={{ marginBottom: "16px", fontSize: "15px" }}>
            All information and tools provided on Free Online Tools are for general informational and utility purposes only. While we strive to ensure accuracy and reliability, we make no guarantees of any kind regarding the completeness, accuracy, or reliability of the results generated by our tools.
          </p>

          <h3 style={{ fontSize: "18px", fontWeight: 600, color: "var(--text-primary)", marginTop: "24px", marginBottom: "12px" }}>Tool Usage</h3>
          <p style={{ marginBottom: "16px", fontSize: "15px" }}>
            Our website offers various online tools such as text converters, generators, and data processors. These tools are provided &ldquo;as is&rdquo; and are intended for general use only.
          </p>
          <p style={{ marginBottom: "8px", fontSize: "15px" }}>We are not responsible for:</p>
          <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginBottom: "16px", fontSize: "15px" }}>
            <li style={{ marginBottom: "4px" }}>Any errors or inaccuracies in the output</li>
            <li style={{ marginBottom: "4px" }}>Any loss of data or damage resulting from the use of our tools</li>
            <li style={{ marginBottom: "4px" }}>Any decisions made based on the results generated</li>
          </ul>
          <p style={{ marginBottom: "16px", fontSize: "15px" }}>
            Users are advised to verify results independently before relying on them.
          </p>

          <h3 style={{ fontSize: "18px", fontWeight: 600, color: "var(--text-primary)", marginTop: "24px", marginBottom: "12px" }}>No Professional Advice</h3>
          <p style={{ marginBottom: "16px", fontSize: "15px" }}>
            The content and tools on this website do not constitute professional, legal, financial, or technical advice. You should consult a qualified professional for specific advice tailored to your situation.
          </p>

          <h3 style={{ fontSize: "18px", fontWeight: 600, color: "var(--text-primary)", marginTop: "24px", marginBottom: "12px" }}>External Links</h3>
          <p style={{ marginBottom: "16px", fontSize: "15px" }}>
            Our website may contain links to third-party websites. We do not have control over the content, policies, or practices of these external sites and are not responsible for any information or services they provide.
          </p>

          <h3 style={{ fontSize: "18px", fontWeight: 600, color: "var(--text-primary)", marginTop: "24px", marginBottom: "12px" }}>Limitation of Liability</h3>
          <p style={{ marginBottom: "16px", fontSize: "15px" }}>
            Under no circumstances shall Free Online Tools be held liable for any direct, indirect, incidental, or consequential damages arising out of the use or inability to use our website or tools.
          </p>

          <h3 style={{ fontSize: "18px", fontWeight: 600, color: "var(--text-primary)", marginTop: "24px", marginBottom: "12px" }}>User Responsibility</h3>
          <p style={{ marginBottom: "16px", fontSize: "15px" }}>
            By using this website, you agree that you are responsible for how you use the tools and the results generated. You also agree not to misuse the services in any way that could harm the website or other users.
          </p>

          <h3 style={{ fontSize: "18px", fontWeight: 600, color: "var(--text-primary)", marginTop: "24px", marginBottom: "12px" }}>Changes to This Disclaimer</h3>
          <p style={{ marginBottom: "16px", fontSize: "15px" }}>
            We may update this Disclaimer from time to time. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
