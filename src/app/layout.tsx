import type { Metadata } from 'next';
import { Syne, Manrope } from 'next/font/google';
import './globals.css';
import GlowBackdrop from '@/components/ui/GlowBackdrop';
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

export const metadata: Metadata = {
  title: 'By Mlightning Custom — Personnalisation intérieur automobile',
  description:
    "LED d'ambiance, ciel étoilé, Apple CarPlay, volants sur-mesure et déblocage d'options VAG. Personnalisation d'intérieur automobile en région parisienne (Val-d'Oise, 95). Devis gratuit, réponse en moins d'une heure.",
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
      </body>
    </html>
  );
}
