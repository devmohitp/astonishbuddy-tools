"use client";
import React, { useState } from "react";
import { toolsSEOData } from "../data/tools-seo-data";

interface ToolSEOProps {
  toolId: string;
}

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
        cursor: "pointer",
        marginBottom: "10px"
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
      </div>
      {isOpen && (
        <div
          style={{
            padding: "0 22px 18px",
            fontSize: "15px",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            borderTop: `1px solid ${accentColor}22`,
          }}
        >
          {a}
        </div>
      )}
    </div>
  );
}

const ToolSEO: React.FC<ToolSEOProps> = ({ toolId }) => {
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});
  const data = toolsSEOData[toolId];

  if (!data) return null;

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => ({ ...prev, [index]: !prev[index] }));
  };

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
        </div>

        {/* Right Column: FAQ Section */}
        <div className="tool-seo-right">
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "26px" }}>
              <h2 style={{ fontSize: "26px", fontWeight: 900, color: "white", letterSpacing: "-0.5px", margin: 0 }}>
                FAQ Section
              </h2>
              <span style={{ fontSize: "20px" }}>🔥</span>
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

      {/* Keywords (Visual Tags) */}
      <div style={{ marginTop: "48px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {data.keywords.map((keyword, index) => (
          <span 
            key={index}
            style={{ 
              fontSize: "12px", 
              fontWeight: 600, 
              color: "var(--text-muted)", 
              background: "rgba(255,255,255,0.03)", 
              padding: "6px 14px", 
              borderRadius: "100px",
              border: "1px solid var(--border)"
            }}
          >
            {keyword}
          </span>
        ))}
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
