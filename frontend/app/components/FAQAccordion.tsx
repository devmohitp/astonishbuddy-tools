"use client";

import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    q: "Is AstonishBuddy completely free?",
    a: "Yes. All tools available on AstonishBuddy are completely free to use with no hidden charges, subscriptions, or premium plans.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. You can access and use all available tools instantly without creating an account or logging in.",
  },
  {
    q: "Are my uploaded files safe?",
    a: "Yes. Privacy is one of our highest priorities. Whenever possible, files are processed directly in your browser and are never stored permanently on our servers.",
  },
  {
    q: "Can I use AstonishBuddy on mobile devices?",
    a: "Absolutely. AstonishBuddy is fully responsive and works smoothly on desktops, tablets, and smartphones.",
  },
  {
    q: "Which online tools are available?",
    a: "AstonishBuddy offers image compression, QR code generation, password generation, JSON formatting, SQL formatting, Base64 conversion, UUID generation, JWT decoding, text utilities, and many more productivity tools.",
  },
  {
    q: "Are new tools added regularly?",
    a: "Yes. We continuously improve existing tools and add new utilities based on user feedback and emerging technology trends.",
  },
  {
    q: "Is AstonishBuddy secure?",
    a: "Yes. The website uses HTTPS encryption and follows secure development practices to help protect user data and provide a safe browsing experience.",
  },
  {
    q: "Can I use these tools for commercial work?",
    a: "Yes. Our tools can be used for personal, educational, freelance, and professional purposes.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? `${bodyRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  const id = `faq-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div
      style={{
        background: "var(--bg-card)",
        borderRadius: "16px",
        border: `1px solid ${isOpen ? "rgba(108, 99, 255, 0.4)" : "var(--border)"}`,
        overflow: "hidden",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
        boxShadow: isOpen ? "0 16px 48px rgba(108, 99, 255, 0.12)" : "none",
      }}
    >
      {/* Question Button */}
      <button
        id={id}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "clamp(18px, 3vw, 24px) clamp(20px, 3vw, 28px)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          color: "var(--text-primary)",
          fontFamily: "var(--font-outfit), sans-serif",
        }}
      >
        <h3
          style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            fontWeight: 700,
            color: isOpen ? "#a5b4fc" : "var(--text-primary)",
            margin: 0,
            lineHeight: 1.4,
            transition: "color 0.2s ease",
            letterSpacing: "-0.2px",
          }}
        >
          {faq.q}
        </h3>

        {/* Chevron Icon */}
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: isOpen ? "rgba(108, 99, 255, 0.2)" : "rgba(108, 99, 255, 0.08)",
            border: `1px solid ${isOpen ? "rgba(108, 99, 255, 0.4)" : "rgba(108, 99, 255, 0.15)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s ease, background 0.2s ease, border-color 0.2s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            color: isOpen ? "#818cf8" : "var(--text-muted)",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          ▾
        </span>
      </button>

      {/* Answer Panel */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        style={{
          height,
          overflow: "hidden",
          transition: "height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          ref={bodyRef}
          style={{
            padding: "0 clamp(20px, 3vw, 28px) clamp(18px, 3vw, 24px)",
          }}
        >
          <div
            style={{
              height: "1px",
              background: "var(--border)",
              marginBottom: "clamp(14px, 2vw, 20px)",
              opacity: 0.5,
            }}
          />
          <p
            style={{
              fontSize: "clamp(14px, 1.8vw, 15px)",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  // Split into two columns
  const col1 = faqs.slice(0, Math.ceil(faqs.length / 2));
  const col2 = faqs.slice(Math.ceil(faqs.length / 2));
  const col1Start = 0;
  const col2Start = Math.ceil(faqs.length / 2);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
        gap: "clamp(12px, 2vw, 20px)",
        alignItems: "start",
      }}
    >
      {/* Column 1 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 2vw, 16px)" }}>
        {col1.map((faq, i) => (
          <FAQItem
            key={i}
            faq={faq}
            index={col1Start + i}
            isOpen={openIndex === col1Start + i}
            onToggle={() => toggle(col1Start + i)}
          />
        ))}
      </div>

      {/* Column 2 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 2vw, 16px)" }}>
        {col2.map((faq, i) => (
          <FAQItem
            key={i}
            faq={faq}
            index={col2Start + i}
            isOpen={openIndex === col2Start + i}
            onToggle={() => toggle(col2Start + i)}
          />
        ))}
      </div>
    </div>
  );
}
