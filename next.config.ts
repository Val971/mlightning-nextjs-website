import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    localPatterns: [
      {
        pathname: '/images/**',
        search: '',
      },
    ],
    domains: [
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
      'https://mlightning-custom.fr',
    ],
    formats: ['image/avif', 'image/webp'],
  },
  remotePatterns: [
    {
      protocol: 'https', // Protocole utilisé
      hostname: 'res.cloudinary.com', // Domaine autorisé (ici Cloudinary)
      port: '', // Le port est optionnel, laisse vide si tu n'utilises pas de port spécifique
      pathname: '/<cloud_name>/**', // Remplace <cloud_name> par le nom de ton cloud
    },
  ],
};

export default nextConfig;
