import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/intangibles', destination: '/intangibles/index.html' },
    ];
  },
};

export default nextConfig;
