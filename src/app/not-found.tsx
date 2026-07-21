import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Page introuvable',
  // Sans ça, cette page hériterait du "index, follow" du layout racine, ce
  // qui contredirait le "noindex" que Next.js ajoute déjà automatiquement
  // pour la route /_not-found.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="max-w-content mx-auto px-6 min-h-[70vh] flex flex-col items-center justify-center text-center py-[clamp(3rem,8vw,6rem)]">
      <span
        className="animate-fade-up inline-flex items-center gap-[.55rem] px-4 py-2 rounded-pill border border-white/[.16] bg-white/[.04] text-[.8rem] font-semibold uppercase tracking-[.06em] text-white/80"
        style={{ animationDelay: '0s' }}
      >
        <span
          className="w-[7px] h-[7px] rounded-full bg-[#7dd3fc]"
          style={{ boxShadow: '0 0 10px #7dd3fc' }}
        />
        Erreur 404
      </span>

      <h1
        className="animate-fade-up holo-text tracking-[-.02em] mt-6"
        style={{ animationDelay: '.1s', fontSize: 'clamp(5.5rem, 18vw, 10rem)', lineHeight: 1 }}
      >
        404
      </h1>

      <h2
        className="animate-fade-up text-[clamp(1.5rem,3.2vw,2.2rem)] mt-4 max-w-[26ch]"
        style={{ animationDelay: '.18s' }}
      >
        Cette route ne mène nulle part.
      </h2>

      <p
        className="animate-fade-up text-white/60 text-[clamp(1rem,1.4vw,1.15rem)] max-w-[46ch] mt-4 leading-[1.6]"
        style={{ animationDelay: '.26s' }}
      >
        La page que vous cherchez a disparu, changé d&apos;adresse, ou n&apos;a
        jamais existé. On vous remet sur la bonne voie ?
      </p>

      <div
        className="animate-fade-up flex flex-wrap justify-center gap-[.9rem] mt-8"
        style={{ animationDelay: '.34s' }}
      >
        <Button href="/">Retour à l&apos;accueil</Button>
        <Button href="/#services" variant="outline">
          Voir nos services
        </Button>
      </div>

      <div
        className="animate-fade-up flex flex-wrap justify-center gap-x-2 gap-y-1 mt-9 text-[.85rem] text-white/45"
        style={{ animationDelay: '.42s' }}
      >
        {services.map((service, i) => (
          <span key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="hover:text-white/80 underline"
            >
              {service.label}
            </Link>
            {i < services.length - 1 && <span className="mx-2">·</span>}
          </span>
        ))}
      </div>
    </section>
  );
}
