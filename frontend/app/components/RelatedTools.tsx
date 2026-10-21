import Link from "next/link";
import React from "react";
import * as Lucide from "lucide-react";

export interface RelatedTool {
  href: string;
  label: string;
  icon: string;
  desc: string;
}

interface RelatedToolsProps {
  tools: RelatedTool[];
}

function renderToolIcon(iconStr: string) {
  if (!iconStr) return null;

  // Check if iconStr is a Lucide component name (e.g. FileDigit, RefreshCw, Dices, Lock, Palette, etc.)
  const LucideIcon = (Lucide as unknown as Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>>)[iconStr];
  if (LucideIcon && typeof LucideIcon === "function") {
    return (
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "10px",
          background: "rgba(108, 99, 255, 0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <LucideIcon size={20} style={{ color: "var(--accent-1)" }} />
      </div>
    );
  }

  // Handle "{ }" code icon notation
  if (iconStr.trim() === "{ }") {
    return (
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "10px",
          background: "rgba(108, 99, 255, 0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: "13px",
          color: "var(--accent-1)",
        }}
      >
        &#123; &#125;
      </div>
    );
  }

  // Handle standard emoji or unicode character
  return (
    <div
      style={{
        width: "36px",
        height: "36px",
        borderRadius: "10px",
        background: "rgba(255, 255, 255, 0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        lineHeight: 1,
        flexShrink: 0,
      }}
    >
      {iconStr}
    </div>
  );
}

export default function RelatedTools({ tools }: RelatedToolsProps) {
  if (!tools || tools.length === 0) return null;
  return (
    <section
      style={{
        marginTop: "48px",
        padding: "28px 0 8px",
        borderTop: "1px solid var(--border)",
      }}
      aria-label="Related Tools"
    >
      <h2
        style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: "var(--text-secondary)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: "18px",
        }}
      >
        🔗 You Might Also Like
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "12px",
        }}
      >
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              padding: "14px 16px",
              borderRadius: "14px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent-1)";
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-card-hover)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-card)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            {renderToolIcon(tool.icon)}
            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "3px",
                }}
              >
                {tool.label}
              </div>
              <div style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.4 }}>
                {tool.desc}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
