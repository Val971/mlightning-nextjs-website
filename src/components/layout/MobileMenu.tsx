import Image from 'next/image';
import Link from 'next/link';
import { navLinks, phoneHref } from '@/data/nav';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-bg p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <Image
          src="/images/logo-holo-cropped.png"
          alt="By Mlightning Custom"
          height={58}
          width={103}
          className="h-[58px] w-auto drop-shadow-[0_0_16px_rgba(183,166,255,.4)]"
        />
        <button
          onClick={onClose}
          aria-label="Fermer le menu"
          className="w-11 h-11 rounded-[10px] border border-white/[.14] bg-white/[.06] text-white text-xl"
        >
          ✕
        </button>
      </div>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="font-heading font-extrabold text-[2rem] text-white"
        >
          {link.label}
        </Link>
      ))}
      <a
        href={phoneHref}
        onClick={onClose}
        className="btn-holo mt-auto text-center justify-center"
      >
        Prendre rendez-vous
      </a>
    </div>
  );
}
