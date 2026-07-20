import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  async redirects() {
    return [
      // Ancien slug de la page "Accessoires de carrosserie & vitres teintées"
      // (créé avant l'alignement sur le handoff design) -> nouveau slug.
      {
        source: '/services/accessoires-vitres-teintees',
        destination: '/services/carrosserie-vitres-teintees',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
