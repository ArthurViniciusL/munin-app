import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permite qualquer hostname
      },
    ],
    domains:['localhost']
  },
};

export default nextConfig;
