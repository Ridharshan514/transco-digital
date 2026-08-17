import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
