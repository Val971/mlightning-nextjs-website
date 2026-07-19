export type Testimonial = {
  quote: string;
  name: string;
  car?: string;
};

// Vrais avis Google recopiés manuellement en attendant le branchement de
// l'API Google Places (voir src/lib/googleReviews.ts). Légèrement
// reponctués/nettoyés pour la lisibilité, sans changer le sens ni ajouter de
// contenu — le fond de chaque avis est inchangé.
export const testimonials: Testimonial[] = [
  {
    quote:
      "J'ai fait installer un kit d'éclairage d'ambiance sur une Audi A3 8Y. Le résultat est super, les LED sont de bonnes qualités !! Nous avons échangé par WhatsApp, tout m'a été expliqué clairement. De plus, le garage possède une salle d'attente à l'étage, très convivial. Merci",
    name: 'Tom Braud',
    car: 'Audi A3 8Y',
  },
  {
    quote:
      "Franchement incroyable, je vous recommande totalement, c'est le meilleur en la matière. Je lui ai ramené ma voiture le vendredi soir pour un ciel étoilé et le pack full LED, il s'est directement mis dessus pour me rendre la voiture au plus vite et en effet le lendemain c'était prêt. C'est tout simplement magnifique et niveau rapport qualité/prix, ça vaut largement le prix. Tout est fait avec un véritable professionnalisme. Encore merci !",
    name: 'Malcom Bakar',
  },
  {
    quote:
      'Je suis venue installer un kit LED d’origine Mercedes sur mon A35 AMG. Franchement rien à dire, c’est nickel, travail très propre, super gentil et rapide. Un vrai pro, véhicule rendu nettoyé en plus, que du bonheur.',
    name: 'Aurelien Da Costa',
    car: 'Mercedes-AMG A35',
  },
  {
    quote: 'Super travail, très beau écran tactile CarPlay installé ! Je suis très satisfaite !',
    name: 'L. Civiela',
  },
  {
    quote:
      "Un grand merci à Yannick pour son travail exceptionnel ! J'ai fait installer des LED d'ambiance dans ma voiture et le résultat est tout simplement incroyable.",
    name: 'Fran Six',
  },
  {
    quote:
      "Installation d'éclairage d'ambiance sur mon véhicule. Le rendu est nickel et impressionnant surtout la nuit. Professionnel, sérieux et à l'écoute. Je recommande ce professionnel sans hésitation, merci à Yannick et à toute l'équipe Mlightning Custom.",
    name: 'Trk Grt',
  },
];
