export type Service = {
  num: string;
  title: string;
  blurb: string;
  image: string;
};

export const services: Service[] = [
  {
    num: '01',
    title: "LED d'ambiance",
    blurb:
      "Rétroéclairage multicolore piloté depuis votre téléphone. Une atmosphère sur-mesure, de jour comme de nuit.",
    image: '/images/carousel2.png',
  },
  {
    num: '02',
    title: 'Ciel étoilé',
    blurb:
      'Fibres optiques haute qualité intégrées au pavillon pour recréer un vrai ciel scintillant.',
    image: '/images/carousel1.png',
  },
  {
    num: '03',
    title: 'CarPlay',
    blurb:
      "Accédez à vos apps, votre musique et vos contacts directement sur l'écran du tableau de bord.",
    image: '/images/carousel3.png',
  },
  {
    num: '04',
    title: 'Volants sur-mesure',
    blurb:
      'Volants recréés avec des matériaux premium pour un confort et une esthétique incomparables.',
    image: '/images/PHOTO-2024-11-07-21-41-57.jpg',
  },
  {
    num: '05',
    title: 'Déblocage option VAG',
    blurb:
      "Activation des fonctions cachées de votre véhicule du groupe VAG (Audi, VW, Seat, Skoda).",
    image: '/images/PHOTO-2024-11-07-21-41-57-2.jpg',
  },
];
