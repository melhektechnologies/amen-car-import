import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
    ],
    localPatterns: [
      {
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
