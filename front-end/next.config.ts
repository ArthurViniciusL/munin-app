import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permite qualquer hostname
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '3333',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3333',
      }
    ],
    domains: ['localhost', '127.0.0.1'] // '172.19.0.2', '127.0.0.1'
  },
};

export default nextConfig;
