import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProtectedImage from '@/components/ui/ProtectedImage';
import HoloText from '@/components/ui/HoloText';
import Reveal from '@/components/ui/Reveal';
import Contact from '@/components/sections/Contact';
import { phoneHref } from '@/data/nav';
import { services } from '@/data/services';

const siteUrl = 'https://mlightning-custom.fr';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.name,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} | Mlightning Custom`,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} | Mlightning Custom`,
      description: service.metaDescription,
      images: [service.heroImage],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/#services` },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: `${siteUrl}/services/${service.slug}`,
      },
    ],
  };

  const stats = [
    { label: 'À partir de', value: service.price },
    { label: 'Durée', value: service.duration },
    { label: 'Garantie', value: service.warranty },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Fil d'ariane */}
      <div className="max-w-content mx-auto px-6 pt-[clamp(2.5rem,5vw,4.5rem)]">
        <Link
          href="/#services"
          className="text-white/50 hover:text-white text-[.9rem] inline-flex items-center gap-2"
        >
          ← Toutes les prestations
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-content mx-auto px-6 pt-6 pb-8">
        <div className="grid grid-cols-1 min-[901px]:grid-cols-2 gap-[clamp(2rem,4vw,3.5rem)] items-center">
          <Reveal>
            <span className="inline-flex items-center gap-[.55rem] px-4 py-2 rounded-pill border border-white/[.16] bg-white/[.04] text-[.78rem] font-bold uppercase tracking-[.08em] text-white/80">
              {service.kicker}
            </span>
            <h1 className="text-[clamp(2.4rem,5.5vw,4.2rem)] mt-[1.3rem] tracking-[-.02em]">
              {service.name}
            </h1>
            <p className="text-white/70 text-[clamp(1.05rem,1.5vw,1.25rem)] max-w-[48ch] mt-[1.3rem] leading-[1.6]">
              {service.desc}
            </p>

            <div className="flex flex-wrap gap-[.8rem] mt-[1.8rem]">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-[1.1rem] py-[.75rem] rounded-2xl border border-white/[.12] bg-white/[.03]"
                >
                  <div className="text-[.72rem] uppercase tracking-[.1em] text-white/45">
                    {stat.label}
                  </div>
                  <div className="font-heading font-extrabold text-[1.5rem] holo-text">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-[.9rem] mt-8">
              <a href="#contact" className="btn-holo">
                Demander un devis gratuit
              </a>
              <a href={phoneHref} className="btn-outline">
                📞 Nous appeler
              </a>
            </div>
          </Reveal>

          <Reveal
            delayMs={100}
            className="relative aspect-[4/5] rounded-[26px] overflow-hidden border border-white/10"
          >
            <ProtectedImage
              src={service.heroImage}
              alt={service.name}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, transparent 50%, rgba(7,7,12,.72))',
              }}
            />
            <div className="absolute left-[1.3rem] bottom-[1.3rem] text-[.82rem] font-semibold text-white/85">
              ✦ {service.name} · Mlightning
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="max-w-content mx-auto px-6 py-[clamp(2rem,4vw,4rem)]">
        <Reveal>
          <HoloText
            as="span"
            className="uppercase tracking-[.14em] text-[.8rem] font-bold block"
          >
            Ce qui est inclus
          </HoloText>
          <h2 className="text-[clamp(1.8rem,3.6vw,2.8rem)] mt-[.8rem] max-w-[20ch]">
            La prestation en détail
          </h2>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-[.9rem] mt-8">
          {service.features.map((feature, i) => (
            <Reveal
              key={feature.t}
              delayMs={i * 60}
              className="flex items-start gap-[.85rem] p-[1.1rem_1.2rem] border border-white/10 rounded-2xl bg-white/[.02]"
            >
              <span
                className="w-6 h-6 rounded-[7px] flex-shrink-0 flex items-center justify-center text-[.8rem] font-extrabold text-bg mt-[.1rem]"
                style={{ backgroundImage: 'var(--holo-gradient)' }}
                aria-hidden
              >
                ✓
              </span>
              <div>
                <div className="font-bold text-[.98rem]">{feature.t}</div>
                <div className="text-[.86rem] text-white/55 mt-[.2rem] leading-[1.45]">
                  {feature.d}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Galerie */}
      <section className="max-w-content mx-auto px-6 pt-[clamp(1rem,2vw,2rem)] pb-[clamp(2rem,4vw,4rem)]">
        <div className="grid grid-cols-2 min-[640px]:grid-cols-3 gap-4">
          {service.gallery.map((src, i) => (
            <Reveal
              key={`${src}-${i}`}
              delayMs={i * 60}
              className="relative aspect-square rounded-2xl overflow-hidden border border-white/10"
            >
              <ProtectedImage
                src={src}
                alt={`${service.name} — réalisation ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bénéfices */}
      <section className="border-t border-white/[.08] bg-white/[.02]">
        <div className="max-w-content mx-auto px-6 py-[clamp(3rem,5vw,5rem)]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-4">
            {service.benefits.map((benefit, i) => (
              <Reveal
                key={benefit.n}
                delayMs={i * 80}
                className="p-[1.8rem] border border-white/10 rounded-2xl bg-white/[.02]"
              >
                <div className="font-heading font-extrabold text-[2rem] holo-text">
                  {benefit.n}
                </div>
                <h3 className="text-[1.2rem] mt-[.6rem] mb-[.5rem]">{benefit.t}</h3>
                <p className="text-white/60 text-[.92rem] leading-[1.55]">{benefit.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Contact
        title={`Un projet ${service.name} ?`}
        description="Devis gratuit et conseils personnalisés selon votre véhicule. On répond généralement en moins d'une heure."
        defaultPrestation={service.name}
      />
    </>
  );
}
