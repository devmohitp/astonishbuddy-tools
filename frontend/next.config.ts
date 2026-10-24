import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  compress: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },

  async headers() {
    return [
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/icon.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/pdf.worker.min.mjs",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "astonishbuddy.com",
          },
        ],
        destination: "https://www.astonishbuddy.com/:path*",
        permanent: true,
      },
      // Blog Slug Redirects
      {
        source: "/blog/the-ultimate-guide-to-image-compression-reduce-file-size-without-losing-quality-give-me-1500-words-for-post",
        destination: "/blog/image-compression-guide",
        permanent: true,
      },
      {
        source: "/blog/the-ultimate-guide-to-image-compression-reduce-file-size-without-losing-quality",
        destination: "/blog/image-compression-guide",
        permanent: true,
      },
      {
        source: "/blog/base64-encoding",
        destination: "/blog/base64-encoder-decoder-guide",
        permanent: true,
      },
      {
        source: "/blog/url-encoder-decoder-guide",
        destination: "/blog/url-encoder-decoder",
        permanent: true,
      },

      // Old Tool URL Redirects (301 Permanent - Google Search Console 404 Fixes)
      {
        source: "/tools/color-code-converter",
        destination: "/tools/color-converter",
        permanent: true,
      },
      {
        source: "/tools/url-encoder-decoder",
        destination: "/tools/url-converter",
        permanent: true,
      },
      {
        source: "/tools/case-converter",
        destination: "/tools/text-case-converter",
        permanent: true,
      },
      {
        source: "/tools/base64-encoder",
        destination: "/tools/base64-converter",
        permanent: true,
      },
      {
        source: "/tools/base64-encoder-decoder",
        destination: "/tools/base64-converter",
        permanent: true,
      },
      {
        source: "/tools/ai-image-extender",
        destination: "/tools/image-background-extender",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    const backendUrl = process.env.BACKEND_URL || "http://localhost:5000";
    return [
      {
        source: "/api/:path*",
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "100mb",
    },
    proxyClientMaxBodySize: 100 * 1024 * 1024,
  },
};

export default nextConfig;