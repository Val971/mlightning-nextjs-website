import { address, openingHours } from '@/data/business';
import { phoneHref } from '@/data/nav';
import { socials } from '@/data/socials';
import { serviceAreas } from '@/data/coverage';
import { getGoogleReviews } from '@/lib/googleReviews';

const siteUrl = 'https://mlightning-custom.fr';

// "39 Rue du Dr Jacques Touati" / "95340 Persan" -> code postal + ville
// séparés, requis par le schéma PostalAddress.
const [streetAddress] = address.lines;
const postalMatch = address.lines[1]?.match(/^(\d{4,5})\s+(.+)$/);
const postalCode = postalMatch?.[1] ?? '';
const addressLocality = postalMatch?.[2] ?? address.lines[1] ?? '';

// Format international requis par le champ "telephone" du schéma.
const telephone = phoneHref.replace('tel:', '');

// "11h – 19h" -> { opens: '11:00', closes: '19:00' }, calculé depuis
// business.ts pour rester synchro si les horaires changent un jour.
const hoursMatch = openingHours.hours.match(/(\d{1,2})h\D+(\d{1,2})h/);
const opens = hoursMatch ? `${hoursMatch[1].padStart(2, '0')}:00` : '11:00';
const closes = hoursMatch ? `${hoursMatch[2].padStart(2, '0')}:00` : '19:00';

export default async function LocalBusinessSchema() {
  // Ré-utilise getGoogleReviews() : Next.js dédoublonne automatiquement les
  // appels fetch identiques au sein d'un même rendu (Request Memoization),
  // donc pas d'appel API/coût supplémentaire par rapport à Testimonials.tsx.
  const google = await getGoogleReviews();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    '@id': `${siteUrl}/#business`,
    name: 'Mlightning Custom',
    image: `${siteUrl}/images/og-image.jpg`,
    logo: `${siteUrl}/images/logo-holo-cropped.png`,
    url: siteUrl,
    telephone,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress,
      postalCode,
      addressLocality,
      addressCountry: 'FR',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens,
      closes,
    },
    sameAs: socials.map((s) => s.url),
    // Communes réellement desservies (Val-d'Oise + Oise limitrophe, plus
    // Guadeloupe en interventions ponctuelles) — aide Google à associer les
    // recherches géolocalisées à notre fiche, y compris hors métropole.
    areaServed: [
      ...serviceAreas.valdoise,
      ...serviceAreas.oise,
      ...serviceAreas.guadeloupe,
    ].map((city) => ({
      '@type': 'City',
      name: city,
    })),
    // Uniquement si des avis Google réels sont branchés (voir
    // .env.local.example) — jamais de note fabriquée.
    ...(google && google.userRatingCount > 0
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: google.rating,
            reviewCount: google.userRatingCount,
          },
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
