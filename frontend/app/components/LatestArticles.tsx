import Link from "next/link";
import { blogPosts } from "../data/blog-posts";

// ── Helpers (mirrored from blog/page.tsx) ──────────────────────────────────

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
  "url-encoder-decoder-guide":
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
  "base64-encoding":
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  "webp-vs-png-vs-jpg":
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
};

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80";

function getCategoryTag(slug: string): { label: string; color: string } {
  if (slug.includes("image") || slug.includes("webp") || slug.includes("png"))
    return { label: "Images", color: "#06b6d4" };
  if (slug.includes("password") || slug.includes("jwt") || slug.includes("uuid"))
    return { label: "Security", color: "#10b981" };
  if (
    slug.includes("sql") ||
    slug.includes("json") ||
    slug.includes("base64") ||
    slug.includes("url-encoder") ||
    slug.includes("markdown")
  )
    return { label: "Developer", color: "#6c63ff" };
  if (slug.includes("student") || slug.includes("productivity"))
    return { label: "Productivity", color: "#a855f7" };
  if (
    slug.includes("text") ||
    slug.includes("lorem") ||
    slug.includes("color")
  )
    return { label: "Text Tools", color: "#f59e0b" };
  return { label: "Guide", color: "#ec4899" };
}

function getReadingTime(description: string): string {
  const wordCount = description.trim().split(/\s+/).length * 25; // approx full article
  const mins = Math.max(2, Math.round(wordCount / 200));
  return `${mins} min read`;
}

// ── Demo cards shown when no posts exist ──────────────────────────────────

const DEMO_POSTS = [
  {
    title: "How to Compress Images Without Losing Quality",
    slug: "#",
    date: "Coming Soon",
    description:
      "Learn proven techniques for reducing image file sizes while preserving visual quality for the web.",
    categoryLabel: "Images",
    categoryColor: "#06b6d4",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
    readingTime: "4 min read",
    isDemo: true,
  },
  {
    title: "Top 10 Developer Tools Every Programmer Should Know",
    slug: "#",
    date: "Coming Soon",
    description:
      "Explore essential browser-based developer utilities that streamline JSON, SQL, JWT, and UUID workflows.",
    categoryLabel: "Developer",
    categoryColor: "#6c63ff",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
    readingTime: "5 min read",
    isDemo: true,
  },
  {
    title: "How to Generate Secure Passwords in Seconds",
    slug: "#",
    date: "Coming Soon",
    description:
      "A practical guide to creating strong, unique passwords using free online tools without storing your data.",
    categoryLabel: "Security",
    categoryColor: "#10b981",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    readingTime: "3 min read",
    isDemo: true,
  },
];

// ── Main Component ─────────────────────────────────────────────────────────

export default function LatestArticles() {
  const latest = blogPosts.slice(0, 6);
  const isEmpty = latest.length === 0;

  const displayPosts = isEmpty
    ? DEMO_POSTS
    : latest.map((p) => ({
        title: p.title.replace(/^\d+\.\s*/, ""), // strip leading "1. "
        slug: p.slug,
        date: p.date,
        description: p.description,
        categoryLabel: getCategoryTag(p.slug).label,
        categoryColor: getCategoryTag(p.slug).color,
        image: p.image || slugImageMap[p.slug] || DEFAULT_IMAGE,
        readingTime: getReadingTime(p.description),
        isDemo: false,
      }));

  return (
    <>
      {/* Article Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(16px, 2.5vw, 24px)",
        }}
      >
        {displayPosts.map((post, i) => (
          <article key={post.slug + i} style={{ display: "flex", flexDirection: "column" }}>
            <Link
              href={post.isDemo ? "/blog" : `/blog/${post.slug}`}
              className="article-card"
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                background: "var(--bg-card)",
                borderRadius: "20px",
                border: "1px solid var(--border)",
                overflow: "hidden",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "56.25%", // 16:9
                  overflow: "hidden",
                  background: "var(--bg-secondary)",
                  flexShrink: 0,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="article-card-img"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  loading={i < 3 ? "eager" : "lazy"}
                />
                {/* Category Badge */}
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    padding: "4px 12px",
                    borderRadius: "100px",
                    background: `${post.categoryColor}22`,
                    border: `1px solid ${post.categoryColor}55`,
                    fontSize: "11px",
                    fontWeight: 700,
                    color: post.categoryColor,
                    letterSpacing: "0.4px",
                    textTransform: "uppercase",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {post.categoryLabel}
                </span>
              </div>

              {/* Card Body */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  padding: "clamp(18px, 3vw, 24px)",
                  gap: "10px",
                }}
              >
                {/* Meta Row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    fontWeight: 500,
                  }}
                >
                  <span>📅 {post.date}</span>
                  <span
                    style={{
                      width: "3px",
                      height: "3px",
                      borderRadius: "50%",
                      background: "var(--text-muted)",
                      flexShrink: 0,
                    }}
                  />
                  <span>⏱ {post.readingTime}</span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "clamp(15px, 2vw, 17px)",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    lineHeight: 1.4,
                    margin: 0,
                    letterSpacing: "-0.3px",
                  }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.75,
                    margin: 0,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {post.description}
                </p>

                {/* Read More CTA */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "auto",
                    paddingTop: "12px",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#818cf8",
                  }}
                  className="article-read-more"
                >
                  {post.isDemo ? "Explore Blog" : "Read Article"}
                  <span style={{ fontSize: "15px" }}>→</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Empty State Notice */}
      {isEmpty && (
        <p
          style={{
            textAlign: "center",
            marginTop: "32px",
            fontSize: "14px",
            color: "var(--text-muted)",
            fontStyle: "italic",
          }}
        >
          New articles are coming soon. Stay tuned for helpful tutorials and guides.
        </p>
      )}

      {/* View All Button */}
      <div style={{ textAlign: "center", marginTop: "clamp(32px, 5vw, 48px)" }}>
        <Link
          href="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "14px 36px",
            borderRadius: "100px",
            background: "rgba(108, 99, 255, 0.12)",
            border: "1px solid rgba(108, 99, 255, 0.3)",
            fontSize: "15px",
            fontWeight: 700,
            color: "#a5b4fc",
            textDecoration: "none",
            transition: "background 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
          }}
          className="view-all-articles-btn"
        >
          View All Articles
          <span style={{ fontSize: "18px" }}>→</span>
        </Link>
      </div>
    </>
  );
}
