import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import LegalSection from '@/components/legal/LegalSection';
import { legalEntity } from '@/data/business';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Comment By Mlightning Custom collecte, utilise et protège vos données personnelles via le formulaire de contact du site.',
  alternates: {
    canonical: '/politique-de-confidentialite',
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      updatedAt="19 juillet 2026"
    >
      <LegalSection title="Responsable du traitement">
        <p>
          Le responsable du traitement des données collectées sur ce site est{' '}
          {legalEntity.name}, {legalEntity.addressLines.join(', ')}, joignable
          au {legalEntity.phone}.
        </p>
      </LegalSection>

      <LegalSection title="Données collectées">
        <p>
          Le formulaire de contact du site collecte les données suivantes :
          nom, numéro de téléphone, prestation souhaitée et description du
          projet / véhicule. Aucune autre donnée personnelle n&apos;est
          collectée automatiquement (pas de compte utilisateur, pas de
          paiement en ligne).
        </p>
      </LegalSection>

      <LegalSection title="Finalité du traitement">
        <p>
          Ces informations sont utilisées exclusivement pour répondre à votre
          demande de devis ou de rendez-vous, et pour vous recontacter dans ce
          cadre. Elles ne sont ni revendues, ni transmises à des tiers à des
          fins commerciales.
        </p>
      </LegalSection>

      <LegalSection title="Base légale">
        <p>
          Le traitement repose sur l&apos;intérêt légitime de {legalEntity.name}{' '}
          à répondre aux demandes de contact qui lui sont adressées, ainsi que
          sur votre consentement au moment de l&apos;envoi du formulaire.
        </p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>
          Les données transmises via le formulaire sont conservées le temps
          nécessaire au traitement de votre demande, puis supprimées ou
          archivées de façon sécurisée si une relation commerciale est
          engagée.
        </p>
      </LegalSection>

      <LegalSection title="Destinataires des données">
        <p>
          Seul {legalEntity.name} a accès aux données transmises via le
          formulaire de contact. Aucune donnée n&apos;est partagée avec des
          partenaires publicitaires ou des tiers non autorisés.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          Ce site n&apos;utilise pas de cookies de suivi publicitaire ni
          d&apos;outils d&apos;analyse d&apos;audience tiers. Seuls des
          cookies techniques, strictement nécessaires au fonctionnement du
          site, peuvent être déposés.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Conformément au Règlement Général sur la Protection des Données
          (RGPD), vous disposez d&apos;un droit d&apos;accès, de
          rectification, d&apos;effacement et d&apos;opposition concernant vos
          données personnelles. Pour exercer ces droits, vous pouvez nous
          contacter au {legalEntity.phone}.
        </p>
      </LegalSection>

      <LegalSection title="Modifications de cette politique">
        <p>
          Cette politique de confidentialité peut être mise à jour à tout
          moment, notamment pour rester conforme à l&apos;évolution de la
          réglementation. La date de dernière mise à jour figure en haut de
          cette page.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
