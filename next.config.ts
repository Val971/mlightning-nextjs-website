import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
      port: '',
      pathname: '/uploads/**',
    },
  ],
};

export default nextConfig;
