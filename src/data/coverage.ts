// Marques et zone d'intervention — affichées sur les pages services pour
// aider Google à faire correspondre les recherches précises ("LED d'ambiance
// Audi A3 Guadeloupe", "Installation Mercedes W176 Persan"...) à nos pages,
// et utilisées dans les données structurées (LocalBusinessSchema).
//
// Liste construite à partir des requêtes qui ramènent déjà du trafic
// (Google Search Console) : on couvre les marques et villes réellement
// recherchées autour de Persan, sans énumérer chaque combinaison possible.

export const serviceBrands = [
  'Audi',
  'Mercedes-Benz',
  'Volkswagen',
  'BMW',
  'Peugeot',
  'Renault',
  'Citroën',
  'Ford',
];

export const serviceAreas = {
  // Val-d'Oise — cœur de la zone d'intervention.
  valdoise: [
    'Persan',
    'Beaumont-sur-Oise',
    "L'Isle-Adam",
    'Chambly',
    'Bernes-sur-Oise',
    'Taverny',
    'Franconville',
    'Herblay',
    'Argenteuil',
    'Eaubonne',
    "Saint-Ouen-l'Aumône",
    'Gonesse',
    'Goussainville',
    'Cormeilles-en-Parisis',
  ],
  // Villes limitrophes dans l'Oise.
  oise: ['Chantilly', 'Compiègne', 'Beauvais', 'Senlis'],
};
