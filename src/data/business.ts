export const address = {
  lines: ['39 Rue du Dr Jacques Touati', '95340 Persan'],
};

export const openingHours = {
  // Horaires identiques tous les jours de la semaine.
  label: 'Tous les jours',
  hours: '11h – 19h',
};

// Lien de secours vers la fiche Google (utilisé tant que l'API Google Places
// n'est pas branchée — voir src/lib/googleReviews.ts). Requête stable, sans
// jeton de session, contrairement à un lien copié depuis une recherche
// Google (qui expire et est propre à chaque utilisateur).
export const googleReviewsUrl = 'https://www.google.com/search?sca_esv=630f4fbcc449dd86&sxsrf=APpeQnuKvtNHT57WfFk6vBWif-DUniYzhw:1784488423420&q=Mlightning+Custom&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_-xfasDE7t4pofUUuL6nrZCNyURBNGEay-3lwY7BLgiqoqrj0qnKzHJAy2ypoWdsytsow7s%3D&uds=AJ5uw1_rUfMqrtZe7QfpdFGwaPC36qUo46BSbV4r2TyTbovA0O5fO90ThakGM8Vcip6lSjLI9s4Mn6A3g-ub4CQmeqLuHNGYdJBTBlywne61ZgMDXVrjJ-4&sa=X&ved=2ahUKEwj1tNW0ud-VAxWX_8kDHdb-NyIQ3PALegQILxAF&biw=1280&bih=631&dpr=1.5';

// Informations légales — utilisées sur les pages Mentions légales et
// Politique de confidentialité. À faire vérifier/compléter par un
// professionnel avant mise en ligne définitive (voir TODO ci-dessous).
export const legalEntity = {
  name: 'MLIGHTNING CUSTOM',
  tradeName: 'By Mlightning Custom',
  // TODO: forme juridique (auto-entrepreneur, EI, SASU...) à confirmer.
  legalForm: '', // ex: "Entreprise Individuelle"
  addressLines: address.lines,
  phone: '07 56 94 66 84',
  siret: '927 663 211 00013',
  // TODO: nom du directeur de la publication à confirmer.
  publicationDirector: '',
};

export const host = {
  name: 'KASKOD',
  addressLines: ['Le Poirier', '97180 Sainte-Anne', 'Guadeloupe, France'],
  website: 'https://kaskod.fr',
  // TODO: SIRET de l'hébergeur — à compléter dès que disponible.
  siret: '',
};
