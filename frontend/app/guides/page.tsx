import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { guidePosts } from "../data/guides-data";

export const metadata: Metadata = {
  title: "Guides – How to Use Free Online Tools",
  description:
    "Step-by-step guides for every free online tool on AstonishBuddy. Learn how to compress images, format JSON, generate passwords, and much more.",
};

// Unsplash images per tool slug
const slugImageMap: Record<string, string> = {
  "how-to-use-image-compressor":
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&q=75",
  "how-to-use-text-case-converter":
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=700&q=75",
  "how-to-use-password-generator":
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=75",
  "how-to-use-json-formatter":
    "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=700&q=75",
  "how-to-use-word-counter":
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=700&q=75",
  "how-to-use-qr-code-generator":
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=75",
  "how-to-use-base64-encoder-decoder":
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=75",
  "how-to-use-url-encoder-decoder":
    "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=700&q=75",
  "how-to-use-lorem-ipsum-generator":
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=700&q=75",
  "how-to-use-random-number-generator":
    "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=700&q=75",
  "how-to-use-text-sorter":
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=75",
  "how-to-use-color-code-converter":
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=700&q=75",
  "how-to-use-image-quality-enhancer":
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=700&q=75",
  "how-to-use-bulk-image-converter":
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&q=75",
  "how-to-use-sql-formatter":
    "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=700&q=75",
  "how-to-use-uuid-guid-generator":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=75",
  "how-to-use-markdown-html-converter":
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=700&q=75",
  "how-to-use-text-diff-checker":
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=700&q=75",
  "how-to-use-jwt-decoder":
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&q=75",
  "how-to-use-pdf-compressor":
    "https://images.unsplash.com/photo-1568667256549-094345857637?w=700&q=75",
  "how-to-use-bulk-qr-code-generator":
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=75",
};

export default function GuidesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-inter), Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      {/* Hover CSS — server-safe */}
      <style>{`
        .guide-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1),
                      border-color 0.35s ease,
                      box-shadow 0.35s ease;
          cursor: pointer;
          position: relative;
        }
        .guide-card:hover {
          transform: translateY(-6px);
          border-color: rgba(108,99,255,0.5);
          box-shadow: 0 24px 64px rgba(0,0,0,0.45);
        }
        .guide-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          display: block;
        }
        .guide-card:hover .guide-card-img {
          transform: scale(1.06);
        }
        .guide-card-link {
          display: block;
          text-decoration: none;
          height: 100%;
        }
        .guide-read-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 700;
          margin-top: 4px;
          transition: gap 0.2s ease;
        }
        .guide-card:hover .guide-read-btn {
          gap: 10px;
        }
      `}</style>

      {/* Hero */}
      <section
        style={{
          padding: "80px 24px 60px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "300px",
            background:
              "radial-gradient(ellipse, rgba(108,99,255,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(108,99,255,0.1)",
            border: "1px solid rgba(108,99,255,0.25)",
            borderRadius: "999px",
            padding: "6px 16px",
            fontSize: "13px",
            color: "var(--accent-1)",
            fontWeight: 600,
            marginBottom: "24px",
            letterSpacing: "0.5px",
          }}
        >
          <span>📖</span> STEP-BY-STEP GUIDES
        </div>
        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: "20px",
            fontFamily: "var(--font-outfit), Outfit, sans-serif",
          }}
        >
          Learn How to Use{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--accent-1), var(--accent-2), var(--accent-3))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Every Tool
          </span>
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "var(--text-secondary)",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          In-depth, practical guides for all {guidePosts.length} free online tools on
          AstonishBuddy — written clearly for everyone.
        </p>
      </section>

      {/* Guides Grid */}
      <section
        style={{
          flex: 1,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px 100px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
            gap: "28px",
          }}
        >
          {guidePosts.map((guide, index) => {
            const img =
              slugImageMap[guide.slug] ||
              "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&q=75";
            return (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="guide-card-link"
              >
                <div className="guide-card">
                  {/* Top accent */}
                  <div
                    style={{
                      height: "3px",
                      background: `linear-gradient(90deg, ${guide.color}, transparent)`,
                      flexShrink: 0,
                    }}
                  />

                  {/* Image */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "185px",
                      overflow: "hidden",
                      background: "var(--bg-secondary)",
                      flexShrink: 0,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={guide.title}
                      className="guide-card-img"
                    />
                    {/* Overlay gradient */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(22,22,31,0.88) 0%, transparent 55%)",
                      }}
                    />
                    {/* Icon badge */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "12px",
                        left: "16px",
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: `${guide.color}22`,
                        border: `1px solid ${guide.color}44`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "22px",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {guide.icon}
                    </div>
                    {/* Number badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        background: "rgba(0,0,0,0.55)",
                        color: "rgba(255,255,255,0.55)",
                        fontSize: "11px",
                        fontWeight: 600,
                        padding: "3px 9px",
                        borderRadius: "999px",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      #{String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      padding: "20px 22px 22px",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      gap: "10px",
                    }}
                  >
                    {/* Date */}
                    <div
                      style={{
                        fontSize: "11px",
                        color: "var(--text-muted)",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span>📅</span> {guide.date}
                    </div>

                    {/* Title */}
                    <h2
                      style={{
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        lineHeight: 1.4,
                        margin: 0,
                        fontFamily: "var(--font-outfit), Outfit, sans-serif",
                      }}
                    >
                      {guide.title}
                    </h2>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                        margin: 0,
                        flex: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      } as React.CSSProperties}
                    >
                      {guide.description}
                    </p>

                    {/* CTA */}
                    <div
                      className="guide-read-btn"
                      style={{ color: guide.color }}
                    >
                      Read Guide
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
