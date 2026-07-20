export type Social = {
  label: string;
  name: string;
  url: string;
  icon: string;
};

export const socials: Social[] = [
  {
    label: 'IG',
    name: 'Instagram',
    url: 'https://www.instagram.com/mlightning_custom/',
    icon: '/images/instagram_Icon.png',
  },
  {
    label: 'TT',
    name: 'TikTok',
    url: 'https://www.tiktok.com/@mlightning95',
    icon: '/images/tiktok_Icon.png',
  },
  {
    label: 'SC',
    name: 'Snapchat',
    url: 'https://www.snapchat.com/add/mlightning95',
    icon: '/images/snaptchat_Icon.png',
  },
];

// Doit correspondre exactement au champ `name` de src/data/services.ts pour
// que ContactForm puisse présélectionner la bonne prestation sur chaque page
// service (voir la prop `defaultPrestation`).
export const prestationOptions = [
  "LED d'ambiance",
  'Ciel étoilé',
  'Apple CarPlay',
  'Volants sur-mesure',
  'Accessoires de carrosserie & vitres teintées',
  'Autre',
];
