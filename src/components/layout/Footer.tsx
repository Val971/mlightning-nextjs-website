import Image from 'next/image';
import Link from 'next/link';
import { phoneHref, phoneNumber } from '@/data/nav';
import { socials } from '@/data/socials';
import { address, openingHours, host } from '@/data/business';
import { services } from '@/data/services';

export default function Footer() {
  return (
    <footer className="border-t border-white/[.08]">
      <div className="max-w-content mx-auto px-6 pt-14 pb-8 grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-10">
        <div className="max-w-[34ch]">
          <Image
            src="/images/logo-holo-cropped.png"
            alt="Mlightning Custom"
            height={150}
            width={267}
            className="mb-5 drop-shadow-[0_0_18px_rgba(183,166,255,.4)]"
          />
          <p className="text-white/[.55] leading-[1.6] text-[.92rem]">
            Personnalisation d&apos;intérieurs automobiles haut de gamme.
            Confort, élégance et innovation dans chaque détail.
          </p>
        </div>

        <div>
          <h4 className="text-base mb-4 text-white">Services</h4>
          <div className="flex flex-col gap-[.6rem] text-[.92rem] text-white/60">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-white/60 hover:text-white"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-base mb-4 text-white">Adresse</h4>
          <div className="flex items-start gap-[.55rem] text-[.92rem] text-white/60 leading-[1.6]">
            <span aria-hidden>📍</span>
            <span>
              {address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </div>

          <h4 className="text-base mb-4 mt-6 text-white">Nos horaires</h4>
          <p className="text-[.92rem] text-white/60 leading-[1.6]">
            {openingHours.label}
            <br />
            {openingHours.hours}
          </p>

          <p className="text-[.85rem] text-white/50 leading-[1.6] mt-4">
            ✈️ Déplacements ponctuels en Guadeloupe possibles, sur
            rendez-vous.
          </p>
        </div>

        <div>
          <h4 className="text-base mb-4 text-white">Contact</h4>
          <div className="flex flex-col gap-[.6rem] text-[.92rem] text-white/60">
            <a href={phoneHref} className="text-white/60 hover:text-white">
              {phoneNumber}
            </a>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[.55rem] text-white/60 hover:text-white"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px] object-contain"
                />
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/[.08]">
        <div className="max-w-content mx-auto px-6 py-[1.4rem] flex flex-wrap justify-between gap-4 text-[.82rem] text-white/[.45]">
          <span>© 2026 Mlightning Custom. Tous droits réservés.</span>
          <span className="flex gap-2">
            <Link href="/mentions-legales" className="hover:text-white/70 underline">
              Mentions légales
            </Link>
            ·
            <Link
              href="/politique-de-confidentialite"
              className="hover:text-white/70 underline"
            >
              Confidentialité
            </Link>
          </span>
          <span className="flex items-center gap-[.35rem]">
            Made with
            <span aria-hidden className="text-[#ff5c7a]">
              ❤
            </span>
            by
            <a
              href={host.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 underline"
            >
              {host.name}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
