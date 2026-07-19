'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks, phoneHref } from '@/data/nav';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[60] backdrop-blur-[14px] bg-[rgba(7,7,12,.72)] border-b border-white/[.08]">
      <nav className="max-w-content mx-auto px-6 py-[.85rem] flex items-center gap-8">
        <Link href="/#top" className="flex items-center">
          <Image
            src="/images/logo-holo-cropped.png"
            alt="By Mlightning Custom"
            height={68}
            width={121}
            className="h-[68px] w-auto drop-shadow-[0_0_16px_rgba(183,166,255,.4)]"
            priority
          />
        </Link>

        <div className="ml-auto max-[900px]:hidden flex items-center gap-[1.9rem] text-[.95rem] font-semibold text-white/[.82]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-white/[.82] hover:text-white">
              {link.label}
            </Link>
          ))}
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

      <MobileMenu open={navOpen} onClose={() => setNavOpen(false)} />
    </header>
  );
}
