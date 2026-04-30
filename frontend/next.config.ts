import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,

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
    middlewareClientMaxBodySize: 100 * 1024 * 1024,
  },
};

export default nextConfig;