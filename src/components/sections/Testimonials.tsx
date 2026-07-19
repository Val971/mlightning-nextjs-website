import HoloText from '@/components/ui/HoloText';
import Reveal from '@/components/ui/Reveal';
import { testimonials as staticTestimonials } from '@/data/testimonials';
import { getGoogleReviews } from '@/lib/googleReviews';
import { googleReviewsUrl } from '@/data/business';

type DisplayReview = {
  quote: string;
  name: string;
  car?: string;
  rating: number;
};

export default async function Testimonials() {
  const google = await getGoogleReviews();
  const hasGoogleReviews = !!google && google.reviews.length > 0;

  const items: DisplayReview[] = hasGoogleReviews
    ? google!.reviews.map((r) => ({
        quote: r.text,
        name: r.authorName,
        rating: r.rating,
      }))
    : staticTestimonials.map((t) => ({ ...t, rating: 5 }));

  // Lien "voir tous les avis" : celui renvoyé par l'API Google (précis, pointe
  // directement sur la fiche) une fois branchée, sinon un lien de recherche
  // stable en attendant.
  const reviewsLink = google?.mapsUri ?? googleReviewsUrl;

  return (
    <section id="avis" className="max-w-content mx-auto px-6 py-section">
      <Reveal className="text-center mb-12">
        <HoloText
          as="span"
          className="uppercase tracking-[.14em] text-[.8rem] font-bold block"
        >
          Ils nous ont fait confiance
        </HoloText>
        <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] mt-[.9rem]">
          Des clients conquis
        </h2>
        {hasGoogleReviews && (
          <p className="text-white/60 mt-4">
            <HoloText className="font-heading font-bold">
              {google!.rating.toFixed(1)}/5
            </HoloText>{' '}
            sur {google!.userRatingCount} avis Google
          </p>
        )}
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(290px,100%),1fr))] gap-[1.2rem]">
        {items.map((t, i) => (
          <Reveal key={`${t.name}-${i}`} delayMs={i * 80} className="h-full">
            <figure className="h-full m-0 p-8 border border-white/10 rounded-[20px] bg-white/[.03] flex flex-col gap-[1.1rem]">
              <HoloText className="text-[1.1rem] tracking-[.15em]">
                {'★'.repeat(t.rating)}
                {'☆'.repeat(Math.max(0, 5 - t.rating))}
              </HoloText>
              <blockquote className="m-0 text-[1.05rem] leading-[1.6] text-white/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto text-[.9rem]">
                <span className="font-bold text-white">{t.name}</span>
                {t.car && (
                  <>
                    <br />
                    <span className="text-white/50">{t.car}</span>
                  </>
                )}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={items.length * 80} className="text-center mt-10">
        <p className="text-white/60">
          Envie de lire plus d&apos;avis ?{' '}
          <a
            href={reviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-white/70"
          >
            Découvrez tous nos avis sur Google →
          </a>
        </p>
      </Reveal>
    </section>
  );
}
