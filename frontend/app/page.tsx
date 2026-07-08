"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AnimatedSection from "./components/AnimatedSection";
import ToolsGrid from "./components/ToolsGrid";
import FAQAccordion from "./components/FAQAccordion";
import LatestArticles from "./components/LatestArticles";

export default function Home() {
  return (
    <main
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-outfit), sans-serif",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section style={{ padding: "clamp(60px, 15vh, 120px) 20px clamp(40px, 10vh, 80px)" }}>
        <div className="animate-fade-in" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
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
              fontSize: "clamp(16px, 4vw, 20px)",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              maxWidth: "650px",
              margin: "0 auto",
              fontWeight: 400,
            }}
          >AstonishBuddy – Free Online Tools for Image Compression, Text Conversion, JSON Formatting, and More.</p>
        </div>
      </section>

      {/* Tools Section (Client component for interactions) */}
      <ToolsGrid />

      {/* About Section */}
      <section className="snap-section">
        <AnimatedSection>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "clamp(40px, 8vw, 80px) 20px" }}>

            {/* Section Header */}
            <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 64px)" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 18px",
                  borderRadius: "100px",
                  background: "rgba(108, 99, 255, 0.12)",
                  border: "1px solid rgba(108, 99, 255, 0.25)",
                  fontSize: "13px",
                  color: "#818cf8",
                  fontWeight: 600,
                  marginBottom: "24px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                🚀 About Us
              </div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "-2px",
                  marginBottom: "20px",
                  color: "var(--text-primary)",
                }}
              >
                Welcome to{" "}
                <span className="gradient-text">AstonishBuddy</span>
              </h2>
              <p
                style={{
                  fontSize: "clamp(15px, 2.5vw, 18px)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  maxWidth: "680px",
                  margin: "0 auto",
                }}
              >
                Your trusted destination for free, fast, and easy-to-use online tools designed to simplify everyday digital tasks.
              </p>
            </div>

            {/* Feature Cards Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "clamp(16px, 3vw, 24px)",
                marginBottom: "clamp(40px, 6vw, 64px)",
              }}
            >
              {[
                { icon: "🛠️", title: "16+ Free Tools", desc: "Growing collection of practical utilities across multiple categories." },
                { icon: "🔒", title: "Privacy First", desc: "Files processed in your browser — never uploaded to external servers." },
                { icon: "⚡", title: "Instant Access", desc: "No downloads, no sign-up. Start working in seconds from any device." },
                { icon: "📱", title: "Fully Responsive", desc: "Seamlessly works on desktop, laptop, tablet, and smartphone." },
              ].map((card) => (
                <div
                  key={card.title}
                  className="about-feature-card"
                  style={{
                    padding: "clamp(20px, 3vw, 32px)",
                    background: "var(--bg-card)",
                    borderRadius: "20px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{card.icon}</div>
                  <h3 style={{ fontSize: "17px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "10px" }}>{card.title}</h3>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Main About Content */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "clamp(24px, 4vw, 48px)",
                alignItems: "start",
              }}
            >
              {/* Left Column */}
              <div>
                <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px", letterSpacing: "-0.5px" }}>
                  Tools for Every Digital Need
                </h3>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "20px" }}>
                  Whether you&apos;re a developer, student, designer, content creator, digital marketer, or simply someone looking for quick online utilities, AstonishBuddy provides a growing collection of practical tools that help you work smarter and save valuable time.
                </p>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
                  Our goal is simple: make powerful tools accessible to everyone without requiring downloads, installations, or complicated setup. Every tool features a clean interface, fast performance, and user-friendly experience so you can complete your tasks in just a few clicks.
                </p>
              </div>

              {/* Right Column */}
              <div>
                <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px", letterSpacing: "-0.5px" }}>
                  Learn, Not Just Use
                </h3>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "20px" }}>
                  Unlike many utility websites that focus only on functionality, we believe every tool should help users understand what it does. That&apos;s why our tool pages include detailed descriptions, step-by-step instructions, practical examples, FAQs, and helpful tips for both beginners and professionals.
                </p>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.9 }}>
                  We are committed to publishing helpful guides and educational content that explain technical concepts in a simple and practical way — helping you get the best results every time.
                </p>
              </div>
            </div>

            {/* Keyword Badges */}
            <div style={{ marginTop: "clamp(36px, 5vw, 56px)", textAlign: "center" }}>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "16px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                Tools We Offer
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
                {[
                  "Image Compressor", "QR Code Generator", "Password Generator", "JSON Formatter",
                  "SQL Formatter", "JWT Decoder", "UUID Generator", "Base64 Converter",
                  "Text Tools", "Developer Tools", "Productivity Tools", "Browser-Based Tools",
                  "Secure Online Tools", "Online Utilities",
                ].map((keyword) => (
                  <span
                    key={keyword}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "100px",
                      background: "rgba(108, 99, 255, 0.08)",
                      border: "1px solid rgba(108, 99, 255, 0.2)",
                      fontSize: "13px",
                      color: "#a5b4fc",
                      fontWeight: 500,
                      transition: "background 0.2s ease",
                      cursor: "default",
                    }}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Why Choose Section */}
      <section className="snap-section">
        <AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(40px, 8vw, 80px) 20px" }}>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 64px)" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 18px",
                  borderRadius: "100px",
                  background: "rgba(108, 99, 255, 0.12)",
                  border: "1px solid rgba(108, 99, 255, 0.25)",
                  fontSize: "13px",
                  color: "#818cf8",
                  fontWeight: 600,
                  marginBottom: "24px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase" as const,
                }}
              >
                ⭐ Why Choose Us
              </div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "-2px",
                  marginBottom: "20px",
                  color: "var(--text-primary)",
                }}
              >
                Why Choose{" "}
                <span className="gradient-text">AstonishBuddy</span>
              </h2>
              <p
                style={{
                  fontSize: "clamp(15px, 2.5vw, 18px)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Everything you need in one place — built for speed, security, and simplicity.
              </p>
            </div>

            {/* Cards Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "clamp(16px, 2.5vw, 24px)",
              }}
            >
              {[
                {
                  icon: "🔒",
                  title: "Privacy First",
                  desc: "Most of our tools process data directly in your browser, keeping your files secure and private.",
                  color: "rgba(99, 102, 241, 0.12)",
                  border: "rgba(99, 102, 241, 0.25)",
                },
                {
                  icon: "⚡",
                  title: "Fast Processing",
                  desc: "Complete tasks in seconds with optimized tools designed for speed and efficiency.",
                  color: "rgba(245, 158, 11, 0.1)",
                  border: "rgba(245, 158, 11, 0.2)",
                },
                {
                  icon: "💯",
                  title: "Completely Free",
                  desc: "Access all tools without subscriptions, hidden charges, or premium plans.",
                  color: "rgba(16, 185, 129, 0.1)",
                  border: "rgba(16, 185, 129, 0.2)",
                },
                {
                  icon: "📱",
                  title: "Mobile Friendly",
                  desc: "Use AstonishBuddy on desktop, tablet, or smartphone with ease.",
                  color: "rgba(59, 130, 246, 0.1)",
                  border: "rgba(59, 130, 246, 0.2)",
                },
                {
                  icon: "👤",
                  title: "No Registration",
                  desc: "Start using every tool instantly without creating an account.",
                  color: "rgba(236, 72, 153, 0.1)",
                  border: "rgba(236, 72, 153, 0.2)",
                },
                {
                  icon: "🛡️",
                  title: "Secure Processing",
                  desc: "Your data is protected with modern security practices and HTTPS encryption.",
                  color: "rgba(139, 92, 246, 0.1)",
                  border: "rgba(139, 92, 246, 0.2)",
                },
                {
                  icon: "🔄",
                  title: "Regular Updates",
                  desc: "We continuously improve existing tools and add new features based on user feedback.",
                  color: "rgba(20, 184, 166, 0.1)",
                  border: "rgba(20, 184, 166, 0.2)",
                },
                {
                  icon: "🎨",
                  title: "Modern Interface",
                  desc: "Clean, responsive design that makes every tool simple and enjoyable to use.",
                  color: "rgba(249, 115, 22, 0.1)",
                  border: "rgba(249, 115, 22, 0.2)",
                },
                {
                  icon: "🌐",
                  title: "Browser Based",
                  desc: "No downloads or installations required. Everything works directly from your browser.",
                  color: "rgba(99, 102, 241, 0.1)",
                  border: "rgba(99, 102, 241, 0.2)",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="why-choose-card"
                  style={{
                    padding: "clamp(24px, 3vw, 36px)",
                    background: "var(--bg-card)",
                    borderRadius: "20px",
                    border: "1px solid var(--border)",
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: card.color,
                      border: `1px solid ${card.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.6rem",
                      flexShrink: 0,
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: 800,
                        color: "var(--text-primary)",
                        marginBottom: "8px",
                        letterSpacing: "-0.3px",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </AnimatedSection>
      </section>

      {/* Explore Categories Section */}
      <section className="snap-section">
        <AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(40px, 8vw, 80px) 20px" }}>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 64px)" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 18px",
                  borderRadius: "100px",
                  background: "rgba(108, 99, 255, 0.12)",
                  border: "1px solid rgba(108, 99, 255, 0.25)",
                  fontSize: "13px",
                  color: "#818cf8",
                  fontWeight: 600,
                  marginBottom: "24px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase" as const,
                }}
              >
                🗂️ Categories
              </div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "-2px",
                  marginBottom: "20px",
                  color: "var(--text-primary)",
                }}
              >
                Explore{" "}
                <span className="gradient-text">Tool Categories</span>
              </h2>
              <p
                style={{
                  fontSize: "clamp(15px, 2.5vw, 18px)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Find the right tool in seconds. Browse by category and get started instantly.
              </p>
            </div>

            {/* Category Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "clamp(16px, 2.5vw, 24px)",
              }}
            >
              {[
                {
                  icon: "🖼️",
                  title: "Image Tools",
                  desc: "Compress, convert, and enhance images quickly while maintaining quality.",
                  href: "/tools/image-compressor",
                  accent: "rgba(99, 102, 241, 0.12)",
                  accentBorder: "rgba(99, 102, 241, 0.3)",
                  accentText: "#818cf8",
                  tools: [
                    { name: "Image Compressor", href: "/tools/image-compressor" },
                    { name: "Bulk Converter", href: "/tools/bulk-image-converter" },
                    { name: "Quality Enhancer", href: "/tools/image-quality-enhancer" },
                    { name: "PDF Compressor", href: "/tools/pdf-compressor" },
                  ],
                },
                {
                  icon: "💻",
                  title: "Developer Tools",
                  desc: "Format JSON and SQL, decode JWT tokens, generate UUIDs, compare text, and more.",
                  href: "/tools/json-formatter",
                  accent: "rgba(20, 184, 166, 0.1)",
                  accentBorder: "rgba(20, 184, 166, 0.25)",
                  accentText: "#2dd4bf",
                  tools: [
                    { name: "JSON Formatter", href: "/tools/json-formatter" },
                    { name: "SQL Formatter", href: "/tools/sql-formatter" },
                    { name: "JWT Decoder", href: "/tools/jwt-decoder" },
                    { name: "UUID Generator", href: "/tools/uuid-generator" },
                    { name: "Diff Checker", href: "/tools/diff-checker" },
                  ],
                },
                {
                  icon: "📝",
                  title: "Text Tools",
                  desc: "Count words, convert text case, sort text, generate Lorem Ipsum, and improve writing productivity.",
                  href: "/tools/word-counter",
                  accent: "rgba(245, 158, 11, 0.1)",
                  accentBorder: "rgba(245, 158, 11, 0.25)",
                  accentText: "#fbbf24",
                  tools: [
                    { name: "Word Counter", href: "/tools/word-counter" },
                    { name: "Case Converter", href: "/tools/case-converter" },
                    { name: "Text Sorter", href: "/tools/text-sorter" },
                    { name: "Lorem Ipsum", href: "/tools/lorem-ipsum-generator" },
                    { name: "Markdown Converter", href: "/tools/markdown-converter" },
                  ],
                },
                {
                  icon: "🔐",
                  title: "Security Tools",
                  desc: "Generate strong passwords, inspect JWT tokens, and use security-focused utilities.",
                  href: "/tools/password-generator",
                  accent: "rgba(236, 72, 153, 0.1)",
                  accentBorder: "rgba(236, 72, 153, 0.25)",
                  accentText: "#f472b6",
                  tools: [
                    { name: "Password Generator", href: "/tools/password-generator" },
                    { name: "JWT Decoder", href: "/tools/jwt-decoder" },
                  ],
                },
                {
                  icon: "⚙️",
                  title: "Utility Tools",
                  desc: "Generate QR codes, random numbers, Base64 conversions, URL encoding, and other everyday tools.",
                  href: "/tools/qr-generator",
                  accent: "rgba(16, 185, 129, 0.1)",
                  accentBorder: "rgba(16, 185, 129, 0.25)",
                  accentText: "#34d399",
                  tools: [
                    { name: "QR Generator", href: "/tools/qr-generator" },
                    { name: "Base64 Converter", href: "/tools/base64-encoder" },
                    { name: "URL Converter", href: "/tools/url-encoder-decoder" },
                    { name: "Random Number", href: "/tools/random-number-generator" },
                    { name: "Color Converter", href: "/tools/color-code-converter" },
                  ],
                },
              ].map((cat) => (
                <div
                  key={cat.title}
                  className="category-card"
                  style={{
                    padding: "clamp(24px, 3vw, 36px)",
                    background: "linear-gradient(135deg, var(--bg-card) 0%, rgba(255,255,255,0.01) 100%)",
                    borderRadius: "24px",
                    border: "1px solid rgba(255,255,255,0.05)",
                    boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)",
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: "20px",
                    color: "inherit",
                    position: "relative",
                    transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.borderColor = cat.accentBorder;
                    e.currentTarget.style.boxShadow = `0 20px 40px -20px ${cat.accentBorder}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.boxShadow = "0 10px 30px -15px rgba(0,0,0,0.3)";
                  }}
                >
                  {/* Icon + Title Row */}
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "18px",
                        background: cat.accent,
                        border: `1px solid ${cat.accentBorder}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                        flexShrink: 0,
                        boxShadow: `0 8px 20px -8px ${cat.accentBorder}`,
                      }}
                    >
                      {cat.icon}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: 850,
                          color: "var(--text-primary)",
                          marginBottom: "2px",
                          letterSpacing: "-0.5px",
                        }}
                      >
                        <a
                          href={cat.href}
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                            transition: "color 0.2s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = cat.accentText)}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
                        >
                          {cat.title}
                        </a>
                      </h3>
                      <span
                        style={{
                          fontSize: "12px",
                          color: cat.accentText,
                          fontWeight: 700,
                          letterSpacing: "0.5px",
                          textTransform: "uppercase",
                        }}
                      >
                        {cat.tools.length} tools
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {cat.desc}
                  </p>

                  {/* Tool Pills */}
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px", marginTop: "4px" }}>
                    {cat.tools.map((tool) => (
                      <a
                        key={tool.name}
                        href={tool.href}
                        style={{
                          padding: "4px 12px",
                          borderRadius: "12px",
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          fontSize: "12px",
                          color: "var(--text-secondary)",
                          fontWeight: 500,
                          textDecoration: "none",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = cat.accent;
                          e.currentTarget.style.borderColor = cat.accentBorder;
                          e.currentTarget.style.color = cat.accentText;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                          e.currentTarget.style.color = "var(--text-secondary)";
                        }}
                      >
                        {tool.name}
                      </a>
                    ))}
                  </div>

                  {/* Divider line */}
                  <div style={{ height: "1px", background: "rgba(255,255,255,0.05)", marginTop: "auto" }}></div>

                  {/* Category Link Button */}
                  <a
                    href={cat.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "12px 24px",
                      borderRadius: "14px",
                      background: cat.accent,
                      border: `1px solid ${cat.accentBorder}`,
                      color: cat.accentText,
                      fontSize: "14px",
                      fontWeight: 700,
                      textDecoration: "none",
                      textAlign: "center",
                      transition: "all 0.2s ease",
                      boxShadow: `0 4px 12px -4px ${cat.accentBorder}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = "brightness(1.15)";
                      e.currentTarget.style.transform = "scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = "none";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    Browse {cat.title}
                    <span style={{ fontSize: "16px", transition: "transform 0.2s ease" }}>→</span>
                  </a>
                </div>
              ))}
            </div>

          </div>
        </AnimatedSection>
      </section>

      {/* Latest Articles Section */}
      <section className="snap-section">
        <AnimatedSection>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(40px, 8vw, 80px) 20px" }}>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 60px)" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 18px",
                  borderRadius: "100px",
                  background: "rgba(108, 99, 255, 0.12)",
                  border: "1px solid rgba(108, 99, 255, 0.25)",
                  fontSize: "13px",
                  color: "#818cf8",
                  fontWeight: 600,
                  marginBottom: "24px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase" as const,
                }}
              >
                ✍️ Blog
              </div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "-2px",
                  marginBottom: "20px",
                  color: "var(--text-primary)",
                }}
              >
                Latest{" "}
                <span className="gradient-text">Articles</span>
              </h2>
              <p
                style={{
                  fontSize: "clamp(15px, 2.5vw, 18px)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  maxWidth: "620px",
                  margin: "0 auto",
                }}
              >
                Stay updated with helpful tutorials, guides, tips, and insights about our online tools, productivity, web development, security, and digital utilities.
              </p>
            </div>

            {/* Article Grid + CTA — Server Component */}
            <LatestArticles />

          </div>
        </AnimatedSection>
      </section>

      {/* FAQ Section */}
      <section className="snap-section">
        <AnimatedSection>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "clamp(40px, 8vw, 80px) 20px" }}>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 60px)" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 18px",
                  borderRadius: "100px",
                  background: "rgba(108, 99, 255, 0.12)",
                  border: "1px solid rgba(108, 99, 255, 0.25)",
                  fontSize: "13px",
                  color: "#818cf8",
                  fontWeight: 600,
                  marginBottom: "24px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase" as const,
                }}
              >
                ❓ FAQ
              </div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "-2px",
                  marginBottom: "20px",
                  color: "var(--text-primary)",
                }}
              >
                Frequently Asked{" "}
                <span className="gradient-text">Questions</span>
              </h2>
              <p
                style={{
                  fontSize: "clamp(15px, 2.5vw, 18px)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  maxWidth: "640px",
                  margin: "0 auto",
                }}
              >
                Have questions about AstonishBuddy? Here are answers to the most common questions about our free online tools, privacy practices, and how everything works.
              </p>
            </div>

            {/* Accordion Grid — Client Component */}
            <FAQAccordion />

          </div>
        </AnimatedSection>
      </section>

      {/* Disclaimer Section */}
      <section className="snap-section">
        <AnimatedSection>
          <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 16px" }}>
            <div style={{ padding: "clamp(24px, 8vw, 80px)", background: "var(--bg-card)", borderRadius: "clamp(24px, 5vw, 48px)", border: "1px solid var(--border)", boxShadow: "0 60px 150px rgba(0,0,0,0.6)" }}>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--text-primary)", marginBottom: "clamp(24px, 5vw, 60px)", textAlign: "center", letterSpacing: "-2px" }}>
                Disclaimer
              </h2>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(24px, 5vw, 60px)" }}>
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
