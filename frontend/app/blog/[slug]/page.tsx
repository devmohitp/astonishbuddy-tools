import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { blogPosts } from "../../data/blog-posts";

// Map slugs to Unsplash free-to-use images
const slugImageMap: Record<string, string> = {
  "best-free-online-tools-for-students":
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200&q=85",
  "top-online-productivity-tools":
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=85",
  "why-online-tools-are-better-than-traditional-software":
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=85",
  "benefits-of-using-online-file-conversion-tools":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85",
  "how-to-create-strong-passwords-online":
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1200&q=85",
  "base64-encoder-decoder-guide":
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=85",
  "url-encoder-decoder-guide":
    "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=85",
  "lorem-ipsum-generator-guide":
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=85",
  "random-number-generator-guide":
    "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=1200&q=85",
  "text-sorter-guide":
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=85",
  "color-code-converter-guide":
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&q=85",
  "image-quality-enhancer":
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1200&q=85",
  "bulk-image-converter":
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=85",
  "sql-formatter":
    "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&q=85",
  "uuid-guid-generator":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85",
  "markdown-html-converter":
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=85",
  "text-diff-checker":
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=85",
  "jwt-decoder":
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=85",
  "minify-json":
    "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1200&q=85",
  "base64-encoding":
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=85",
  "webp-vs-png-vs-jpg":
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=85",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog Not Found" };
  const cleanTitle = post.title.replace(/^\d+\.\s*/, "");
  return {
    title: cleanTitle,
    description: post.description,
    openGraph: {
      title: cleanTitle,
      description: post.description,
      images: [slugImageMap[slug] || ""],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const cleanTitle = post.title.replace(/^\d+\.\s*/, "");
  const featuredImage =
    slugImageMap[slug] ||
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200&q=85";

  // Related posts (exclude current, pick up to 3)
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

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

      {/* CSS for all hover effects — avoids event handlers in server components */}
      <style>{`
        .blog-back-btn {
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
        .blog-back-btn:hover {
          border-color: var(--border-hover);
          color: var(--text-primary);
        }
        .blog-related-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease;
          cursor: pointer;
        }
        .blog-related-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
        }
        .blog-related-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .blog-related-card:hover .blog-related-img {
          transform: scale(1.05);
        }
        .blog-cta-primary {
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
        .blog-cta-primary:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }
        .blog-cta-secondary {
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
        .blog-cta-secondary:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-1px);
        }
        .blog-content p { margin-bottom: 16px; }
        .blog-content strong { color: var(--text-primary); font-weight: 700; }
        .blog-content ul, .blog-content ol { padding-left: 24px; margin-bottom: 16px; }
        .blog-content li { margin-bottom: 6px; }
        .blog-content h2, .blog-content h3 {
          color: var(--text-primary);
          font-family: var(--font-outfit), Outfit, sans-serif;
          font-weight: 700;
          margin-bottom: 12px;
          margin-top: 28px;
        }
        .blog-content a { color: var(--accent-1); text-decoration: underline; text-underline-offset: 3px; }
      `}</style>

      {/* Featured Hero Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(260px, 40vw, 480px)",
          overflow: "hidden",
          background: "var(--bg-secondary)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={featuredImage}
          alt={cleanTitle}
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
              "linear-gradient(to bottom, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.0) 40%, rgba(10,10,15,0.95) 100%)",
          }}
        />
        {/* Title overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "32px 40px",
            maxWidth: "860px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: `${post.color}22`,
              border: `1px solid ${post.color}55`,
              color: post.color,
              fontSize: "11px",
              fontWeight: 700,
              padding: "4px 12px",
              borderRadius: "999px",
              marginBottom: "12px",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            AstonishBuddy Blog
          </div>
          <h1
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.25,
              fontFamily: "var(--font-outfit), Outfit, sans-serif",
              textShadow: "0 2px 20px rgba(0,0,0,0.7)",
            }}
          >
            {cleanTitle}
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
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
                background: `linear-gradient(135deg, ${post.color}, var(--accent-2))`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                flexShrink: 0,
              }}
            >
              ✦
            </div>
            <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>
              {post.author}
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
            <span>{post.date}</span>
          </div>

          <div style={{ flex: 1 }} />

          {/* Back link — CSS hover handled via .blog-back-btn class */}
          <Link href="/blog" className="blog-back-btn">
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
            All Articles
          </Link>
        </div>

        {/* Description callout */}
        <div
          style={{
            background: `${post.color}0d`,
            border: `1px solid ${post.color}33`,
            borderLeft: `4px solid ${post.color}`,
            borderRadius: "12px",
            padding: "20px 24px",
            marginBottom: "40px",
            fontSize: "16px",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          {post.description}
        </div>

        {/* Article body */}
        <div
          className="blog-content"
          style={{
            fontSize: "16px",
            lineHeight: 1.85,
            color: "var(--text-secondary)",
            marginBottom: "80px",
          }}
        >
          {post.content}
        </div>

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
            Found this helpful?
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-muted)",
              marginBottom: "24px",
            }}
          >
            Explore more free tools and guides on AstonishBuddy.
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
              href="/blog"
              className="blog-cta-primary"
              style={{
                background: `linear-gradient(135deg, ${post.color}, var(--accent-2))`,
              }}
            >
              ← Browse All Articles
            </Link>
            <Link href="/tools" className="blog-cta-secondary">
              🛠️ Explore Tools
            </Link>
          </div>
        </div>

        {/* Related Articles */}
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
            More Articles
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {related.map((rpost) => {
              const rCleanTitle = rpost.title.replace(/^\d+\.\s*/, "");
              const rImg =
                slugImageMap[rpost.slug] ||
                "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&q=75";
              return (
                <Link
                  key={rpost.slug}
                  href={`/blog/${rpost.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  {/* Hover handled via CSS class .blog-related-card */}
                  <div className="blog-related-card">
                    <div
                      style={{
                        position: "relative",
                        height: "140px",
                        overflow: "hidden",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={rImg}
                        alt={rCleanTitle}
                        className="blog-related-img"
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(22,22,31,0.8) 0%, transparent 60%)",
                        }}
                      />
                    </div>
                    <div style={{ padding: "16px" }}>
                      <div
                        style={{
                          width: "24px",
                          height: "3px",
                          background: rpost.color,
                          borderRadius: "2px",
                          marginBottom: "10px",
                        }}
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          lineHeight: 1.4,
                          margin: 0,
                          fontFamily: "var(--font-outfit), Outfit, sans-serif",
                        }}
                      >
                        {rCleanTitle}
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "var(--text-muted)",
                          marginTop: "6px",
                        }}
                      >
                        {rpost.date}
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
