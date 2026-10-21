import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { blogPosts } from "../data/blog-posts";

export const metadata: Metadata = {
  title: "Blog – Web Productivity, Dev Guides & Tips | Astonishbuddy",
  description:
    "Explore in-depth articles, tutorials, and practical guides on image compression, text tools, developer utilities, and web productivity on Astonishbuddy.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/blog",
  },
  openGraph: {
    title: "Blog – Web Productivity, Dev Guides & Tips | Astonishbuddy",
    description:
      "Explore in-depth articles, tutorials, and practical guides on image compression, text tools, developer utilities, and web productivity on Astonishbuddy.",
    url: "https://www.astonishbuddy.com/blog",
    siteName: "Astonishbuddy",
    type: "website",
  },
};

// Map slugs to Unsplash free-to-use images
const slugImageMap: Record<string, string> = {
  "best-free-online-tools-for-students":
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&q=80",
  "top-online-productivity-tools":
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
  "why-online-tools-are-better-than-traditional-software":
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  "benefits-of-using-online-file-conversion-tools":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  "how-to-create-strong-passwords-online":
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80",
  "base64-encoder-decoder-guide":
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  "url-encoder-decoder":
    "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
  "lorem-ipsum-generator-guide":
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
  "random-number-generator-guide":
    "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=800&q=80",
  "text-sorter-guide":
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  "color-code-converter-guide":
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80",
  "image-quality-enhancer":
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
  "bulk-image-converter":
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  "sql-formatter":
    "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
  "uuid-guid-generator":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  "markdown-html-converter":
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
  "text-diff-checker":
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  "jwt-decoder":
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
  "minify-json":
    "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
  "webp-vs-png-vs-jpg":
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  "image-compression-guide":
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  "10-everyday-tasks-you-can-complete-faster-using-free-online-tools":
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
  "ai-tools-that-save-time-how-to-use-ai-for-everyday-work-writing-and-productivity":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
};

const getCategoryTag = (slug: string) => {
  if (slug.includes("image") || slug.includes("webp") || slug.includes("png"))
    return { label: "Images", color: "#06b6d4" };
  if (slug.includes("password") || slug.includes("jwt") || slug.includes("uuid"))
    return { label: "Security", color: "#10b981" };
  if (slug.includes("sql") || slug.includes("json") || slug.includes("base64") || slug.includes("url") || slug.includes("markdown"))
    return { label: "Developer", color: "#6c63ff" };
  if (slug.includes("student") || slug.includes("productivity") || slug.includes("task") || slug.includes("ai"))
    return { label: "Productivity", color: "#a855f7" };
  if (slug.includes("text") || slug.includes("lorem") || slug.includes("color"))
    return { label: "Text Tools", color: "#f59e0b" };
  return { label: "Guide", color: "#ec4899" };
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.astonishbuddy.com",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://www.astonishbuddy.com/blog",
    },
  ],
};

export default function BlogPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />

      {/* Hero Section */}
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
            width: "600px",
            height: "300px",
            background:
              "radial-gradient(ellipse, rgba(108,99,255,0.15) 0%, transparent 70%)",
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
          <span>✦</span> ASTONISHBUDDY BLOG
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
          Tips, Guides &{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--accent-1), var(--accent-2), var(--accent-3))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Tool Insights
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
          Explore in-depth articles, tutorials, and guides on using free online
          tools to boost your productivity.
        </p>
      </section>

      {/* Blog Grid */}
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
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "28px",
          }}
        >
          {blogPosts.map((post, index) => {
            const img = post.image || slugImageMap[post.slug] || slugImageMap["best-free-online-tools-for-students"];
            const category = getCategoryTag(post.slug);
            const cleanTitle = post.title.replace(/^\d+\.\s*/, "");
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <article
                  className="blog-card"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                    position: "relative",
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    style={{
                      height: "3px",
                      background: `linear-gradient(90deg, ${post.color || "var(--accent-1)"}, transparent)`,
                      flexShrink: 0,
                    }}
                  />

                  {/* Image */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "200px",
                      overflow: "hidden",
                      background: "var(--bg-secondary)",
                    }}
                  >
                    <img
                      src={img}
                      alt={cleanTitle}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                      loading="lazy"
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(22,22,31,0.85) 0%, transparent 60%)",
                      }}
                    />
                    {/* Category badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: `${category.color}22`,
                        border: `1px solid ${category.color}55`,
                        color: category.color,
                        fontSize: "11px",
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: "999px",
                        backdropFilter: "blur(8px)",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {category.label}
                    </div>
                    {/* Index badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        background: "rgba(0,0,0,0.5)",
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "11px",
                        fontWeight: 600,
                        padding: "4px 10px",
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
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      gap: "12px",
                    }}
                  >
                    {/* Date & author */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        fontWeight: 500,
                      }}
                    >
                      <span>📅</span>
                      <span>{post.date}</span>
                      <span style={{ opacity: 0.4 }}>•</span>
                      <span>{post.author}</span>
                    </div>

                    {/* Title */}
                    <h2
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        lineHeight: 1.4,
                        fontFamily: "var(--font-outfit), Outfit, sans-serif",
                        margin: 0,
                      }}
                    >
                      {cleanTitle}
                    </h2>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.65,
                        margin: 0,
                        flex: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      } as React.CSSProperties}
                    >
                      {post.description}
                    </p>

                    {/* Read more */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: post.color || "var(--accent-1)",
                        fontSize: "13px",
                        fontWeight: 700,
                        marginTop: "4px",
                        letterSpacing: "0.2px",
                      }}
                    >
                      Read Article
                      <svg
                        width="14"
                        height="14"
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
                </article>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />

      <style>{`
        .blog-card:hover {
          transform: translateY(-6px);
          border-color: rgba(108, 99, 255, 0.4) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
        }
      `}</style>
    </main>
  );
}
