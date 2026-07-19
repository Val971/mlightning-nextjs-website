export type GalleryItem = {
  type: 'image' | 'video';
  src: string;
  alt: string;
  span: 'big' | 'tall' | 'wide' | 'normal';
  /** Image affichée le temps que la vidéo charge (tuiles vidéo uniquement). */
  poster?: string;
};

// Spans (grille desktop 4 colonnes) : tuile "big" = 2x2, "tall" = haute
// (row-span 2), "wide" = large (col-span 2). Annulés en dessous de 640px
// (grille 2 colonnes uniforme) — voir spanClass dans Gallery.tsx.
export const gallery: GalleryItem[] = [
  {
    type: 'image',
    src: '/images/PHOTO-2024-11-07-21-38-48.jpg',
    alt: "Éclairage d'ambiance violet sur tableau de bord Mercedes Classe A",
    span: 'normal',
  },
  {
    type: 'video',
    src: '/videos/VIDEO-2024-05-15-16-35-32.mp4',
    poster: '/images/PHOTO-2024-11-07-21-38-48.jpg',
    alt: "Éclairage d'ambiance vert sur tableau de bord Mercedes, en conduite",
    span: 'wide',
  },
  {
    type: 'image',
    src: '/images/PHOTO-2024-11-07-21-41-57-2.jpg',
    alt: "Éclairage d'ambiance vert et violet, intérieur Volkswagen Golf",
    span: 'tall',
  },
  {
    type: 'image',
    src: '/images/PHOTO-2024-11-07-21-41-57.jpg',
    alt: "Éclairage d'ambiance violet et rouge, intérieur Volkswagen Golf",
    span: 'normal',
  },
  {
    type: 'video',
    src: '/videos/VIDEO-2024-05-15-16-35-28.mp4',
    alt: "Éclairage d'ambiance rose sur volant sport",
    span: 'normal',
  },
  {
    type: 'video',
    src: '/videos/VIDEO-2024-05-15-16-35-39.mp4',
    alt: 'Présentation Audi Q2 après installation, garage Mlightning',
    span: 'normal',
  }
];
