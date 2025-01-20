import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    domains: ["images.unsplash.com"],
  },
  async rewrites() {
    return [
      {
        source: '/api/updateCommits',
        destination: '/src/app/api/updateCommits/routes.tsx',
      },
    ];
  },
};

export default nextConfig;
