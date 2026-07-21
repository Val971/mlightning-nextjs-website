'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/data/nav';
import { services } from '@/data/services';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  // Bloque le scroll de la page derrière le tiroir quand il est ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Repart d'un sous-menu fermé à chaque fermeture du tiroir.
  useEffect(() => {
    if (!open) setServicesOpen(false);
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
            alt="Mlightning Custom"
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
          {navLinks.map((link) =>
            link.label === 'Services' ? (
              <div key={link.href}>
                <button
                  type="button"
                  onClick={() => setServicesOpen((o) => !o)}
                  aria-expanded={servicesOpen}
                  className="font-heading font-extrabold text-[1.7rem] text-white flex items-center gap-3"
                >
                  Services
                  <span
                    className={`text-[1rem] transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    aria-hidden
                  >
                    ▾
                  </span>
                </button>

                {servicesOpen && (
                  <div className="mt-3 flex flex-col gap-3 pl-2 border-l border-white/[.14]">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={onClose}
                        className="text-[1.05rem] font-semibold text-white/70 hover:text-white pl-3"
                      >
                        {service.label}
                      </Link>
                    ))}
                    <Link
                      href="/#services"
                      onClick={onClose}
                      className="text-[.95rem] font-semibold text-white/45 hover:text-white pl-3"
                    >
                      Voir tous les services →
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="font-heading font-extrabold text-[1.7rem] text-white"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <Link
          href="/#contact"
          onClick={onClose}
          className="btn-holo mt-auto text-center justify-center"
        >
          Prendre rendez-vous
        </Link>
      </div>
    </div>
  );
}
