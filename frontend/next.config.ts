import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false, // VERY IMPORTANT
  /* config options here */
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
      bodySizeLimit: '100mb',
    },
    // This handles the proxy/middleware limit for large uploads
    middlewareClientMaxBodySize: 100 * 1024 * 1024, 
  },
};

export default nextConfig;
