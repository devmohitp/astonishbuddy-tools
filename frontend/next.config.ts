import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/api/:path*",
      },
    ];
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '100mb',
    },
    // This handles the proxy/middleware limit for large uploads
    middlewareClientMaxBodySize: 100 * 1024 * 1024, 
  },
};

export default nextConfig;
