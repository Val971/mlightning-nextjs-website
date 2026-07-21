import Image from 'next/image';
import { phoneHref } from '@/data/nav';
import { socials } from '@/data/socials';
import Reveal from '@/components/ui/Reveal';
import ContactForm from './ContactForm';

type ContactProps = {
  title?: string;
  description?: string;
  defaultPrestation?: string;
};

export default function Contact({
  title = 'Parlons de votre projet',
  description = "Un devis gratuit, des conseils personnalisés. On répond généralement en moins d'une heure.",
  defaultPrestation,
}: ContactProps) {
  return (
    <section
      id="contact"
      className="max-w-content mx-auto px-6 pt-[clamp(3rem,6vw,5rem)] pb-[clamp(4rem,7vw,7rem)]"
    >
      <Reveal>
        <div
          className="relative overflow-hidden rounded-card-lg border border-white/[.12] max-[640px]:p-6 p-[clamp(2.5rem,5vw,4.5rem)]"
          style={{
            background:
              'linear-gradient(135deg, rgba(120,160,255,.14), rgba(255,150,220,.12))',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 80% 20%, rgba(183,166,255,.25), transparent 55%)',
            }}
          />

          {/* Empilé (1 colonne) jusqu'aux petites tablettes incluses, 2
              colonnes au-delà — même seuil (900px) que le passage au menu
              hamburger dans le header, pour rester cohérent. */}
          <div className="relative grid grid-cols-1 min-[901px]:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[clamp(2.1rem,4.6vw,3.6rem)] tracking-[-.01em]">
                {title}
              </h2>
              <p className="text-white/[.78] mt-[1.1rem] leading-[1.6] max-w-[42ch]">
                {description}
              </p>
              <div className="flex flex-wrap gap-[.9rem] mt-8 items-center">
                <a href={phoneHref} className="btn-holo">
                  📞 +33 7 56 94 66 84
                </a>
                <div className="flex gap-[.6rem]">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-12 h-12 rounded-full inline-flex items-center justify-center border border-white/20 bg-white/[.06] transition-colors hover:bg-white/[.12] hover:border-white/[.35]"
                    >
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <p className="flex items-center gap-[.5rem] text-white/60 text-[.88rem] mt-5">
                <span aria-hidden>✈️</span>
                Client en Guadeloupe ? Nous nous déplaçons ponctuellement
                sur place, sans problème — parlez-nous de votre projet.
              </p>
            </div>

            <div className="bg-[rgba(7,7,12,.55)] backdrop-blur-[6px] border border-white/[.12] rounded-2xl p-4 sm:p-8">
              <ContactForm defaultPrestation={defaultPrestation} />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
