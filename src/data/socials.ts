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

export const prestationOptions = [
  "LED d'ambiance",
  'Ciel étoilé',
  'CarPlay',
  'Volant sur-mesure',
  'Déblocage option VAG',
  'Autre',
];
