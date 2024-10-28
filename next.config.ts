import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['lh3.googleusercontent.com', 'https://mlightning-custom.fr'],
    formats: ['image/avif', 'image/webp', 'image/png'],
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
