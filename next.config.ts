import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Next.js dev indicator badge in bottom corner
  devIndicators: false,
  // Allow importing Three.js and R3F packages that use ESM
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  // Satisfy Next.js 16 Turbopack requirement
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/brands',
        destination: '/services',
        permanent: false,
      },
      {
        source: '/careers',
        destination: '/about#careers',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
