import type { Metadata } from 'next';
import { Syne, Manrope } from 'next/font/google';
import './globals.css';
import GlowBackdrop from '@/components/ui/GlowBackdrop';
import WhatsappFloatButton from '@/components/ui/WhatsappFloatButton';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['600', '700', '800'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
});

const siteUrl = 'https://mlightning-custom.fr';
const siteName = 'Mlightning Custom';
const description =
  "Customisation intérieur auto à Persan (95) : LED d'ambiance, ciel étoilé, Apple CarPlay, volants sur-mesure, vitres teintées. Devis gratuit, réponse en 1h.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mlightning Custom — Customisation intérieur voiture à Persan (95)',
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "customisation intérieur voiture",
    "LED d'ambiance voiture",
    'ciel étoilé voiture',
    'Apple CarPlay installation',
    'volant sur-mesure',
    'vitres teintées',
    'personnalisation intérieur automobile',
    'Persan',
    "Val-d'Oise",
    'Guadeloupe',
    "customisation intérieur voiture Guadeloupe",
    "LED d'ambiance voiture Guadeloupe",
    'ciel étoilé voiture Guadeloupe',
    'Apple CarPlay Guadeloupe',
    'Pointe-à-Pitre',
    'Les Abymes',
    'Baie-Mahault',
  ],
  authors: [{ name: siteName }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName,
    title: 'Mlightning Custom — Customisation intérieur voiture à Persan (95)',
    description,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Éclairage LED d’ambiance Mlightning Custom',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mlightning Custom — Customisation intérieur voiture à Persan (95)',
    description,
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${syne.variable} ${manrope.variable} font-body bg-bg text-white relative`}
      >
        <GlowBackdrop />
        <div className="relative z-10">
          <Header />
          {children}
          <Footer />
        </div>
        <WhatsappFloatButton />
      </body>
    </html>
  );
}
