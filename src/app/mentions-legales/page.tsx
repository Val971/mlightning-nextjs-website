import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import LegalSection from '@/components/legal/LegalSection';
import { legalEntity, host } from '@/data/business';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    "Mentions légales du site Mlightning Custom : éditeur, hébergeur et informations légales.",
  alternates: {
    canonical: '/mentions-legales',
  },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" updatedAt="19 juillet 2026">
      <LegalSection title="Éditeur du site">
        <p>
          Le site Mlightning Custom est édité par {legalEntity.name}
          {legalEntity.legalForm ? `, ${legalEntity.legalForm}` : ''}, exerçant
          sous le nom commercial « {legalEntity.tradeName} ».
        </p>
        <p>
          Siège social : {legalEntity.addressLines.join(', ')}
          <br />
          Téléphone : {legalEntity.phone}
          <br />
          SIRET : {legalEntity.siret}
          {legalEntity.publicationDirector && (
            <>
              <br />
              Directeur de la publication : {legalEntity.publicationDirector}
            </>
          )}
        </p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>
          Le site est hébergé par {host.name}.
          <br />
          Adresse : {host.addressLines.join(', ')}
          {host.siret && (
            <>
              <br />
              SIRET : {host.siret}
            </>
          )}
          <br />
          Site web :{' '}
          <a
            href={host.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/70 underline"
          >
            {host.website}
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, images,
          logo, photographies de réalisations) est la propriété de{' '}
          {legalEntity.name}, sauf mention contraire. Toute reproduction,
          représentation, modification ou diffusion, totale ou partielle, sans
          autorisation préalable est interdite.
        </p>
      </LegalSection>

      <LegalSection title="Données personnelles">
        <p>
          Les informations recueillies via le formulaire de contact du site
          font l&apos;objet d&apos;un traitement décrit dans notre{' '}
          <a
            href="/politique-de-confidentialite"
            className="text-white hover:text-white/70 underline"
          >
            politique de confidentialité
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Limitation de responsabilité">
        <p>
          {legalEntity.name} s&apos;efforce d&apos;assurer l&apos;exactitude
          des informations diffusées sur ce site, mais ne saurait être tenu
          responsable des erreurs, omissions ou de l&apos;indisponibilité
          temporaire du site.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
