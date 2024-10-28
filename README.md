-

# **Custom Car Interior - Site de Personnalisation d'Intérieur de Voiture**

Bienvenue sur le dépôt du site web **Custom Car Interior**, une plateforme dédiée à la personnalisation de l'intérieur des voitures. Ce projet permet aux utilisateurs de visualiser, personnaliser et commander divers accessoires et modifications pour l'intérieur de leur véhicule.

## **Table des Matières**

1. [Description](#description)
2. [Technologies Utilisées](#technologies-utilisées)
3. [Installation](#installation)
4. [Fonctionnalités](#fonctionnalités)
5. [Utilisation](#utilisation)
6. [Contributions](#contributions)
7. [Licence](#licence)

## **Description**

**Custom Car Interior** est un site web axé sur la personnalisation d'intérieur de voitures. Il permet aux utilisateurs de visualiser les services proposé et de contacter le garage.

### Fonctionnalités principales :

- Navigation fluide avec animations
- Consultation des services
- Intégration de Google Reviews pour afficher les avis des clients
- Module de chat WhatsApp pour une communication directe avec le support

## **Technologies Utilisées**

- **Frontend** : Next.js, React, Tailwind CSS
- **Déploiement** : Netlify pour le frontend
- **Animations** : Framer Motion, Swiper.js pour les carrousels
- **API** : Google Maps API (pour afficher des points de service et des avis Google)
- **Intégrations** : WhatsApp pour le support client, Google Reviews

## **Installation**

### Prérequis

- Node.js >= 14
- NPM ou Yarn
- Un compte GitHub

### Étapes d'installation

1. **Cloner le dépôt** :

   ```bash
   git clone https://github.com/Val971/mlightning-nextjs-website.git
   ```

2. **Accéder au dossier du projet** :

   ```bash
   cd custom-car-interior
   ```

3. **Installer les dépendances** :

   Si vous utilisez **npm** :

   ```bash
   npm install
   ```

   Ou avec **yarn** :

   ```bash
   yarn install
   ```

4. **Configurer les variables d'environnement** :

   Créez un fichier `.env.local` et ajoutez-y les variables nécessaires, telles que les clés API Google.

   Exemple de `.env.local` :

   ```bash
   NEXT_PUBLIC_GOOGLE_API_KEY=your-google-api-key
   NEXT_PUBLIC_GOOGLE_PLACE_ID=your-google-place-id
   ```

5. **Lancer le serveur en local** :

   ```bash
   npm run dev
   ```

   Le site sera disponible à l'adresse suivante : `http://localhost:3000`

## **Fonctionnalités**

### Avis des clients

- Les utilisateurs peuvent lire les avis Google directement sur le site.

### Intégration WhatsApp

- Contact direct avec le support pour toute question relative à la personnalisation ou aux commandes.

## **Utilisation**

- Naviguez sur le site pour explorer les différents produits.
- Cliquez sur les services pour accéder aux details du service en question.

## **Contributions**

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet :

1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/NouvelleFonctionnalité`).
3. Effectuez vos modifications et commitez (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`).
4. Poussez votre branche (`git push origin feature/NouvelleFonctionnalité`).
5. Ouvrez une Pull Request.

## **Licence**

Ce projet est sous licence MIT. Veuillez consulter le fichier [LICENSE](./LICENSE) pour plus de détails.

---
