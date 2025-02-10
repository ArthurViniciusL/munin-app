import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permite qualquer hostname
      },
    ],
    domains:['localhost', '127.0.0.1']
  },
};

export default nextConfig;
