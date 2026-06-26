import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { guidePosts } from "../../data/guides-data";

// Unsplash free-to-use featured images per guide slug
const slugImageMap: Record<string, string> = {
  "how-to-use-image-compressor":
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=85",
  "how-to-use-text-case-converter":
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=85",
  "how-to-use-password-generator":
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=85",
  "how-to-use-json-formatter":
    "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1200&q=85",
  "how-to-use-word-counter":
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=85",
  "how-to-use-qr-code-generator":
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=85",
  "how-to-use-base64-encoder-decoder":
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=85",
  "how-to-use-url-encoder-decoder":
    "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=85",
  "how-to-use-lorem-ipsum-generator":
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&q=85",
  "how-to-use-random-number-generator":
    "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=1200&q=85",
  "how-to-use-text-sorter":
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=85",
  "how-to-use-color-code-converter":
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&q=85",
  "how-to-use-image-quality-enhancer":
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1200&q=85",
  "how-to-use-bulk-image-converter":
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=85",
  "how-to-use-sql-formatter":
    "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&q=85",
  "how-to-use-uuid-guid-generator":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85",
  "how-to-use-markdown-html-converter":
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=85",
  "how-to-use-text-diff-checker":
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=85",
  "how-to-use-jwt-decoder":
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=85",
  "how-to-use-pdf-compressor":
    "https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&q=85",
  "how-to-use-bulk-qr-code-generator":
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=85",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guidePosts.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guidePosts.find((g) => g.slug === slug);
  if (!guide) return { title: "Guide Not Found" };
  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      images: [slugImageMap[slug] || ""],
    },
  };
}

export default async function GuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const guide = guidePosts.find((g) => g.slug === slug);

  if (!guide) notFound();

  const featuredImage =
    slugImageMap[slug] ||
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=85";

  // Related guides — exclude current, take up to 3
  const related = guidePosts.filter((g) => g.slug !== slug).slice(0, 3);

  const currentIndex = guidePosts.findIndex((g) => g.slug === slug);
  const prevGuide = currentIndex > 0 ? guidePosts[currentIndex - 1] : null;
  const nextGuide =
    currentIndex < guidePosts.length - 1 ? guidePosts[currentIndex + 1] : null;

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

      {/* CSS hover effects — no JS handlers needed (server component safe) */}
      <style>{`
        .guide-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          padding: 6px 14px;
          border-radius: 8px;
          border: 1px solid var(--border);
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .guide-back-btn:hover {
          border-color: var(--border-hover);
          color: var(--text-primary);
        }
        .guide-related-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease;
          cursor: pointer;
        }
        .guide-related-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
        }
        .guide-related-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .guide-related-card:hover .guide-related-img {
          transform: scale(1.05);
        }
        .guide-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: 12px;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .guide-cta-primary:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }
        .guide-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border-hover);
          color: var(--text-primary);
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .guide-cta-secondary:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-1px);
        }
        .guide-nav-link {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 14px 18px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          text-decoration: none;
          transition: border-color 0.2s ease, background 0.2s ease;
          flex: 1;
          min-width: 0;
        }
        .guide-nav-link:hover {
          border-color: var(--border-hover);
          background: var(--bg-card-hover);
        }
        .guide-content p { margin-bottom: 16px; }
        .guide-content strong { color: var(--text-primary); font-weight: 700; }
        .guide-content ul, .guide-content ol { padding-left: 24px; margin-bottom: 16px; }
        .guide-content li { margin-bottom: 8px; }
        .guide-content h3 {
          color: var(--text-primary);
          font-family: var(--font-outfit), Outfit, sans-serif;
          font-weight: 700;
          font-size: 20px;
          margin-bottom: 12px;
          margin-top: 28px;
        }
        .guide-content h2 {
          color: var(--text-primary);
          font-family: var(--font-outfit), Outfit, sans-serif;
          font-weight: 800;
          font-size: 24px;
          margin-bottom: 14px;
          margin-top: 32px;
        }
        .guide-content a { color: var(--accent-1); text-decoration: underline; text-underline-offset: 3px; }
        .guide-content code {
          background: rgba(108,99,255,0.12);
          border: 1px solid rgba(108,99,255,0.2);
          border-radius: 4px;
          padding: 1px 6px;
          font-size: 14px;
          color: var(--accent-1);
          font-family: 'Courier New', monospace;
        }
      `}</style>

      {/* Featured Hero Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(260px, 38vw, 460px)",
          overflow: "hidden",
          background: "var(--bg-secondary)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={featuredImage}
          alt={guide.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(10,10,15,0.25) 0%, rgba(10,10,15,0.0) 35%, rgba(10,10,15,0.96) 100%)",
          }}
        />
        {/* Overlay content */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "28px 40px",
            maxWidth: "860px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: `${guide.color}22`,
              border: `1px solid ${guide.color}55`,
              color: guide.color,
              fontSize: "11px",
              fontWeight: 700,
              padding: "4px 12px",
              borderRadius: "999px",
              marginBottom: "12px",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            <span>{guide.icon}</span> AstonishBuddy Guide
          </div>
          <h1
            style={{
              fontSize: "clamp(1.5rem, 3.2vw, 2.4rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.25,
              fontFamily: "var(--font-outfit), Outfit, sans-serif",
              textShadow: "0 2px 20px rgba(0,0,0,0.7)",
            }}
          >
            {guide.title}
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
        }}
      >
        {/* Meta bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            padding: "24px 0",
            borderBottom: "1px solid var(--border)",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              color: "var(--text-secondary)",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${guide.color}, var(--accent-2))`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "15px",
                flexShrink: 0,
              }}
            >
              {guide.icon}
            </div>
            <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>
              {guide.author}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              color: "var(--text-muted)",
            }}
          >
            <span>📅</span>
            <span>{guide.date}</span>
          </div>
          <div style={{ flex: 1 }} />
          <Link href="/guides" className="guide-back-btn">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Guides
          </Link>
        </div>

        {/* Description callout */}
        <div
          style={{
            background: `${guide.color}0d`,
            border: `1px solid ${guide.color}33`,
            borderLeft: `4px solid ${guide.color}`,
            borderRadius: "12px",
            padding: "20px 24px",
            marginBottom: "40px",
            fontSize: "16px",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          {guide.description}
        </div>

        {/* Try the Tool CTA */}
        <div
          style={{
            marginBottom: "36px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            background: `${guide.color}09`,
            border: `1px solid ${guide.color}25`,
            borderRadius: "14px",
            padding: "16px 20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontSize: "26px" }}>{guide.icon}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
              Ready to try it?
            </p>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>
              Use the free tool directly — no sign-up required.
            </p>
          </div>
          <Link
            href={`/tools/${guide.toolSlug}`}
            className="guide-cta-primary"
            style={{
              background: `linear-gradient(135deg, ${guide.color}, var(--accent-2))`,
            }}
          >
            Open Tool →
          </Link>
        </div>

        {/* Guide body */}
        <div
          className="guide-content"
          style={{
            fontSize: "16px",
            lineHeight: 1.9,
            color: "var(--text-secondary)",
            marginBottom: "80px",
          }}
        >
          {guide.content}
        </div>

        {/* Prev / Next Navigation */}
        {(prevGuide || nextGuide) && (
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginBottom: "60px",
              flexWrap: "wrap",
            }}
          >
            {prevGuide ? (
              <Link href={`/guides/${prevGuide.slug}`} className="guide-nav-link">
                <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  ← Previous Guide
                </span>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)", fontFamily: "var(--font-outfit), Outfit, sans-serif" }}>
                  {prevGuide.title}
                </span>
              </Link>
            ) : <div style={{ flex: 1 }} />}
            {nextGuide ? (
              <Link href={`/guides/${nextGuide.slug}`} className="guide-nav-link" style={{ textAlign: "right" }}>
                <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Next Guide →
                </span>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)", fontFamily: "var(--font-outfit), Outfit, sans-serif" }}>
                  {nextGuide.title}
                </span>
              </Link>
            ) : <div style={{ flex: 1 }} />}
          </div>
        )}

        {/* CTA Section */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            padding: "32px",
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "8px",
              fontFamily: "var(--font-outfit), Outfit, sans-serif",
            }}
          >
            Found this guide helpful?
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-muted)",
              marginBottom: "24px",
            }}
          >
            Explore all free tools and step-by-step guides on AstonishBuddy.
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/guides"
              className="guide-cta-primary"
              style={{
                background: `linear-gradient(135deg, ${guide.color}, var(--accent-2))`,
              }}
            >
              ← All Guides
            </Link>
            <Link href="/tools" className="guide-cta-secondary">
              🛠️ Explore Tools
            </Link>
          </div>
        </div>

        {/* Related Guides */}
        <div style={{ marginBottom: "80px" }}>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "24px",
              fontFamily: "var(--font-outfit), Outfit, sans-serif",
            }}
          >
            More Guides
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {related.map((rguide) => {
              const rImg =
                slugImageMap[rguide.slug] ||
                "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=75";
              return (
                <Link
                  key={rguide.slug}
                  href={`/guides/${rguide.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="guide-related-card">
                    <div
                      style={{
                        position: "relative",
                        height: "130px",
                        overflow: "hidden",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={rImg}
                        alt={rguide.title}
                        className="guide-related-img"
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(22,22,31,0.85) 0%, transparent 55%)",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          left: "12px",
                          fontSize: "20px",
                        }}
                      >
                        {rguide.icon}
                      </div>
                    </div>
                    <div style={{ padding: "14px 16px" }}>
                      <div
                        style={{
                          width: "20px",
                          height: "3px",
                          background: rguide.color,
                          borderRadius: "2px",
                          marginBottom: "8px",
                        }}
                      />
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          lineHeight: 1.4,
                          margin: 0,
                          fontFamily: "var(--font-outfit), Outfit, sans-serif",
                        }}
                      >
                        {rguide.title}
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "var(--text-muted)",
                          marginTop: "5px",
                        }}
                      >
                        {rguide.date}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
