export type ServiceFeature = {
  t: string;
  d: string;
};

export type ServiceBenefit = {
  n: string;
  t: string;
  d: string;
};

export type Service = {
  slug: string;
  /** Ordre d'affichage sur la home ("01", "02"...). */
  num: string;
  /** Nom court — carte home, footer, sous-menu nav. */
  label: string;
  /** Catégorie affichée au-dessus du H1 sur la page dédiée. */
  kicker: string;
  /** Nom complet — H1 de la page dédiée, option du select du formulaire. */
  name: string;
  price: string;
  duration: string;
  warranty: string;
  /** Description longue — paragraphe du hero + carte home. */
  desc: string;
  /** ~150-160 caractères, dédiée au SEO (balise meta description + OG). */
  metaDescription: string;
  /** "Ce qui est inclus" — 6 points. */
  features: ServiceFeature[];
  /** Bénéfices — 3 points, en bande sous la galerie. */
  benefits: ServiceBenefit[];
  /**
   * Photos réelles du site réutilisées temporairement le temps que le
   * client fournisse les vraies photos de chaque prestation (cf. décision
   * validée : pas de bloc "placeholder", on recycle l'existant).
   */
  heroImage: string;
  gallery: string[];
};

export const services: Service[] = [
  {
    slug: 'led-ambiance',
    num: '01',
    label: "LED d'ambiance",
    kicker: 'Éclairage intérieur',
    name: "LED d'ambiance",
    price: 'Sur devis',
    duration: '2–4 h',
    warranty: '1 ans',
    desc: "Un rétroéclairage multicolore intégré discrètement dans votre habitacle, piloté depuis votre téléphone. Créez l'atmosphère parfaite, de jour comme de nuit.",
    metaDescription:
      "Installation LED d'ambiance sur-mesure à Persan (95) : RGB piloté par app, pose invisible. À partir de 190 €, 2-4 h, garantie 2 ans. Devis gratuit.",
    heroImage: '/images/carousel2.jpg',
    gallery: [
      '/images/carousel2.jpg',
      '/images/PHOTO-2024-11-07-21-38-48.jpg',
      '/images/PHOTO-2024-11-07-21-41-57.jpg',
    ],
    features: [
      { t: 'Bandeaux RGB haute densité', d: '16 millions de couleurs, luminosité réglable.' },
      { t: 'Pilotage par application', d: 'Contrôle depuis votre smartphone, scènes personnalisées.' },
      { t: 'Intégration invisible', d: "Câblage caché, finition d'origine préservée." },
      { t: 'Synchronisation musique', d: 'Les LED réagissent au rythme de votre son.' },
      { t: 'Zones multiples', d: 'Portes, tableau de bord, plancher, plafond.' },
      { t: 'Branchement sécurisé', d: "Raccordement propre sans risque pour l'électronique." },
    ],
    benefits: [
      { n: '01', t: 'Ambiance sur-mesure', d: 'Une lumière qui colle à votre humeur et à votre style.' },
      { n: '02', t: 'Effet waouh garanti', d: "Un intérieur qui ne passe pas inaperçu, jour et nuit." },
      { n: '03', t: 'Sans compromis', d: "Aucune modification visible ni trace sur l'habitacle." },
    ],
  },
  {
    slug: 'ciel-etoile',
    num: '02',
    label: 'Ciel étoilé',
    kicker: 'Pavillon fibre optique',
    name: 'Ciel étoilé',
    price: 'Sur devis',
    duration: '1 journée',
    warranty: '1 ans',
    desc: "Des centaines de points lumineux en fibre optique intégrés à votre pavillon pour recréer un vrai ciel scintillant. L'expérience premium par excellence.",
    metaDescription:
      'Ciel étoilé par fibre optique à Persan (95) : centaines de points scintillants, pose soignée. 490 €, 1 journée, garantie 2 ans. Devis gratuit.',
    heroImage: '/images/carousel1.jpg',
    gallery: [
      '/images/carousel1.jpg',
      '/images/PHOTO-2024-11-07-21-38-48.jpg',
      '/images/PHOTO-2024-11-07-21-41-57-2.jpg',
    ],
    features: [
      { t: 'Fibres optiques HD', d: "Densité et scintillement dignes d'un véhicule de luxe." },
      { t: 'Effet étoile filante', d: 'Option météores animés pour un rendu spectaculaire.' },
      { t: 'Ciel sur-mesure', d: 'Densité et disposition adaptées à votre pavillon.' },
      { t: 'Générateur silencieux', d: 'Boîtier compact et totalement invisible.' },
      { t: 'Couleur réglable', d: 'Blanc chaud, froid ou teintes au choix.' },
      { t: 'Pose soignée', d: 'Ciel de toit reposé proprement, sans plis.' },
    ],
    benefits: [
      { n: '01', t: 'Effet immersif', d: 'Une véritable voûte étoilée au-dessus de vos passagers.' },
      { n: '02', t: 'Signature premium', d: "Le détail qui transforme l'habitacle en salon." },
      { n: '03', t: 'Fait main', d: 'Chaque point est posé et vérifié individuellement.' },
    ],
  },
  {
    slug: 'carplay',
    num: '03',
    label: 'CarPlay',
    kicker: 'Multimédia connecté',
    name: 'Apple CarPlay',
    price: 'Sur devis',
    duration: '2–3 h',
    warranty: '1 ans',
    desc: "Accédez à vos apps, votre musique, vos itinéraires et vos contacts directement sur l'écran de bord. Sans fil ou filaire, sur la plupart des véhicules.",
    metaDescription:
      "Apple CarPlay & Android Auto sans fil à Persan (95) : navigation, musique, appels mains libres. 250 €, 2-3 h, garantie 2 ans. Devis gratuit.",
    heroImage: '/images/carousel3.jpg',
    gallery: [
      '/images/carousel3.jpg',
      '/images/PHOTO-2024-11-07-21-41-57.jpg',
      '/images/PHOTO-2024-11-07-21-41-57-2.jpg',
    ],
    features: [
      { t: 'CarPlay & Android Auto', d: 'Compatibilité iOS et Android.' },
      { t: 'Sans fil', d: 'Connexion automatique dès que vous montez à bord.' },
      { t: "Interface d'origine", d: 'Intégré à votre écran, sans boîtier apparent.' },
      { t: 'Navigation & musique', d: 'Waze, Maps, Spotify, appels et messages.' },
      { t: 'Caméra de recul', d: "Conservation ou ajout de la caméra." },
      { t: 'Mise à jour', d: 'Système évolutif et paramétré pour vous.' },
    ],
    benefits: [
      { n: '01', t: 'Plus de sécurité', d: 'Gardez les mains sur le volant, tout à portée de voix.' },
      { n: '02', t: 'Votre iPhone à bord', d: 'Toutes vos apps favorites sur le grand écran.' },
      { n: '03', t: 'Installation propre', d: "Aucun câble visible, rendu 100 % d'origine." },
    ],
  },
  {
    slug: 'volants-sur-mesure',
    num: '04',
    label: 'Volants sur-mesure',
    kicker: 'Sellerie & finition',
    name: 'Volants sur-mesure',
    price: 'Sur devis',
    duration: '3–7 jours',
    warranty: '1 ans',
    desc: "Votre volant recréé avec des matériaux premium : cuir nappa, alcantara, surpiqûres personnalisées, inserts carbone. Confort et esthétique incomparables.",
    metaDescription:
      'Rénovation de volant sur-mesure à Persan (95) : cuir nappa, alcantara, surpiqûres, inserts carbone. Sur devis, 3-7 jours, garantie 2 ans.',
    heroImage: '/images/PHOTO-2024-11-07-21-41-57.jpg',
    gallery: [
      '/images/PHOTO-2024-11-07-21-41-57.jpg',
      '/images/carousel2.jpg',
      '/images/PHOTO-2024-11-07-21-38-48.jpg',
    ],
    features: [
      { t: 'Cuir nappa & alcantara', d: 'Matériaux haut de gamme au toucher premium.' },
      { t: 'Surpiqûres au choix', d: 'Couleur et motif personnalisés à votre goût.' },
      { t: 'Inserts carbone', d: 'Touches sport et modernes en option.' },
      { t: 'Repère 12h', d: 'Bande centrale contrastée type sport.' },
      { t: 'Chauffage conservé', d: 'Volant chauffant préservé si équipé.' },
      { t: 'Airbag réinstallé', d: 'Remontage sécurisé dans les règles.' },
    ],
    benefits: [
      { n: '01', t: 'Prise en main unique', d: 'Un volant pensé pour votre confort et votre style.' },
      { n: '02', t: "Pièce d'exception", d: "Une finition qui valorise tout l'habitacle." },
      { n: '03', t: 'Savoir-faire', d: 'Travail de sellerie réalisé à la main.' },
    ],
  },
  {
    slug: 'carrosserie-vitres-teintees',
    num: '05',
    label: 'Carrosserie & vitres teintées',
    kicker: 'Extérieur & vitrage',
    name: 'Accessoires de carrosserie & vitres teintées',
    price: 'Sur devis',
    duration: '2 h – 2 jours',
    warranty: '1 ans',
    desc: "Sublimez l'extérieur de votre véhicule : vitres teintées sur-mesure et accessoires de carrosserie posés proprement pour un look affirmé et plus d'intimité à bord.",
    metaDescription:
      'Vitres teintées & accessoires de carrosserie à Persan (95) : pose homologuée, protection chaleur/UV. Sur devis, 2h-2j, garantie 2 ans.',
    heroImage: '/images/PHOTO-2024-11-07-21-41-57-2.jpg',
    gallery: [
      '/images/PHOTO-2024-11-07-21-41-57-2.jpg',
      '/images/carousel1.jpg',
      '/images/carousel3.jpg',
    ],
    features: [
      { t: 'Films teintés homologués', d: "Plusieurs niveaux d'opacité, pose sans bulles." },
      { t: 'Rejet de chaleur & UV', d: 'Habitacle plus frais, protection contre le soleil.' },
      { t: 'Accessoires carrosserie', d: 'Baguettes, becquets, coques rétros, jupes.' },
      { t: 'Films de protection', d: 'Zones sensibles protégées des rayures.' },
      { t: 'Pose garantie', d: "Découpe précise sur-mesure, finition d'origine." },
      { t: 'Conformité', d: 'Teintes conformes à la réglementation en vigueur.' },
    ],
    benefits: [
      { n: '01', t: 'Style affirmé', d: 'Un extérieur qui se démarque et valorise le véhicule.' },
      { n: '02', t: 'Confort & intimité', d: 'Moins de chaleur, plus de discrétion à bord.' },
      { n: '03', t: 'Pose soignée', d: 'Travail net, sans bulles ni décollement.' },
    ],
  },
];
