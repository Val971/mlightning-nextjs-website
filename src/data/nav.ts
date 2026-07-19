export type NavLink = {
  label: string;
  href: string;
};

// Liens préfixés par "/" pour fonctionner depuis n'importe quelle page
// (accueil ou pages légales) : ça ramène d'abord sur l'accueil puis scrolle
// vers l'ancre.
export const navLinks: NavLink[] = [
  { label: 'Services', href: '/#services' },
  { label: 'Réalisations', href: '/#realisations' },
  { label: 'Process', href: '/#process' },
  { label: 'Avis', href: '/#avis' },
  { label: 'Contact', href: '/#contact' },
];

export const phoneNumber = '+33 7 56 94 66 84';
export const phoneHref = 'tel:+33756946684';

// Format international sans "+" ni espaces, requis par les liens wa.me
// (formulaire de contact → WhatsApp).
export const whatsappNumber = '33756946684';
