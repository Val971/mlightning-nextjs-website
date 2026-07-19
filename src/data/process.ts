export type ProcessStep = {
  n: string;
  title: string;
  text: string;
};

export const processSteps: ProcessStep[] = [
  {
    n: '1',
    title: 'Prise de contact',
    text: 'Appel ou message. On cerne votre besoin et votre véhicule.',
  },
  {
    n: '2',
    title: 'Devis gratuit',
    text: 'Proposition détaillée, transparente, sans engagement.',
  },
  {
    n: '3',
    title: 'Réalisation',
    text: 'Installation soignée par nos soins, composants premium.',
  },
  {
    n: '4',
    title: 'Livraison',
    text: 'Vous repartez avec un intérieur totalement transformé.',
  },
];
