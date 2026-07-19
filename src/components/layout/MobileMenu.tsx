'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks, phoneHref } from '@/data/nav';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Bloque le scroll de la page derrière le tiroir quand il est ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[90] transition-opacity duration-300 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!open}
    >
      {/* Fond assombri — cliquer dessus ferme le menu */}
      <div
        className="mobile-menu-backdrop absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Tiroir ancré à droite, fond opaque garanti (classe + inline style) */}
      <div
        className={`mobile-menu-panel absolute top-0 right-0 h-full w-[82vw] max-w-[360px] bg-bg border-l border-white/[.1] p-6 flex flex-col gap-6 shadow-[0_0_40px_rgba(0,0,0,.6)] transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#07070c' }}
      >
        <div className="flex justify-between items-center">
          <Image
            src="/images/logo-holo-cropped.png"
            alt="By Mlightning Custom"
            height={48}
            width={85}
            className="h-12 w-auto drop-shadow-[0_0_16px_rgba(183,166,255,.4)]"
          />
          <button
            onClick={onClose}
            aria-label="Fermer le menu"
            className="w-11 h-11 rounded-[10px] border border-white/[.14] bg-white/[.06] text-white text-xl"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-5 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-heading font-extrabold text-[1.7rem] text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href={phoneHref}
          onClick={onClose}
          className="btn-holo mt-auto text-center justify-center"
        >
          Prendre rendez-vous
        </a>
      </div>
    </div>
  );
}
