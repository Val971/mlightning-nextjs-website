'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks, phoneHref } from '@/data/nav';
import { services } from '@/data/services';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Ferme le sous-menu "Services" au clic en dehors ou à la touche Échap.
  useEffect(() => {
    if (!servicesOpen) return;

    const onClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setServicesOpen(false);
    };

    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [servicesOpen]);

  return (
    // Le menu mobile est un sibling de <header>, pas un enfant : <header>
    // pose un backdrop-blur, qui (comme un filter/transform) redéfinit le
    // containing block des descendants en position fixed. Imbriqué dedans,
    // le "fixed inset-0" du menu se serait retrouvé calé sur la hauteur de
    // la barre de nav (~80px) au lieu du viewport entier — d'où le fond
    // manquant et le texte qui se chevauchait avec le Hero en dessous.
    <>
      <header className="sticky top-0 z-[60] backdrop-blur-[14px] bg-[rgba(7,7,12,.72)] border-b border-white/[.08]">
        <nav className="max-w-content mx-auto px-6 py-[.85rem] flex items-center gap-8 justify-between">
          <Link href="/#top" className="flex items-center">
            <Image
              src="/images/logo-holo-cropped.png"
              alt="Mlightning Custom"
              height={68}
              width={121}
              className="h-[68px] w-auto drop-shadow-[0_0_16px_rgba(183,166,255,.4)]"
              priority
            />
          </Link>

          <div className="ml-auto max-[900px]:hidden flex items-center gap-[1.9rem] text-[.95rem] font-semibold text-white/[.82]">
            {navLinks.map((link) =>
              link.label === 'Services' ? (
                <div key={link.href} ref={servicesRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setServicesOpen((o) => !o)}
                    aria-expanded={servicesOpen}
                    className="flex items-center gap-[.35rem] text-white/[.82] hover:text-white cursor-pointer"
                  >
                    Services
                    <span
                      className={`text-[.7rem] transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    >
                      ▾
                    </span>
                  </button>

                  {servicesOpen && (
                    <div className="absolute top-[calc(100%+.9rem)] left-1/2 -translate-x-1/2 w-[280px] rounded-2xl border border-white/[.12] bg-[#0d0d16] shadow-[0_20px_50px_-12px_rgba(0,0,0,.6)] p-2 flex flex-col">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="px-3 py-[.65rem] rounded-xl text-[.9rem] font-semibold text-white/80 hover:text-white hover:bg-white/[.06]"
                        >
                          {service.label}
                        </Link>
                      ))}
                      <Link
                        href="/#services"
                        onClick={() => setServicesOpen(false)}
                        className="mt-1 px-3 py-[.65rem] rounded-xl text-[.85rem] font-semibold text-white/50 hover:text-white hover:bg-white/[.06] border-t border-white/[.08]"
                      >
                        Voir tous les services →
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href} className="text-white/[.82] hover:text-white">
                  {link.label}
                </Link>
              )
            )}
          </div>

          <a href={phoneHref} className="btn-holo max-[900px]:hidden">
            Prendre rendez-vous
          </a>

          <button
            onClick={() => setNavOpen(true)}
            aria-label="Menu"
            className="hidden max-[900px]:inline-flex items-center justify-center bg-white/[.06] border border-white/[.14] rounded-[10px] w-11 h-11 cursor-pointer text-white text-xl"
          >
            ☰
          </button>
        </nav>
      </header>

      <MobileMenu open={navOpen} onClose={() => setNavOpen(false)} />
    </>
  );
}
