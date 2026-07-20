# Handoff : Pages Service — By Mlightning Custom (à ajouter au projet existant)

## Vue d'ensemble
Ajout de **5 pages de prestation** au site existant By Mlightning Custom (customisation auto). Chaque page présente une prestation en détail + un **formulaire de contact pré-rempli** avec le nom de la prestation. Langue : **français**. Même charte que le site : direction « dark iridescent ».

Les 5 prestations :
1. **LED d'ambiance** (`/services/led-ambiance`)
2. **Ciel étoilé** (`/services/ciel-etoile`)
3. **Apple CarPlay** (`/services/carplay`)
4. **Volants sur-mesure** (`/services/volants-sur-mesure`)
5. **Accessoires de carrosserie & vitres teintées** (`/services/carrosserie-vitres-teintees`)

## À propos du fichier
`Pages Services Mlightning.dc.html` est une **référence de design en HTML** (prototype), pas du code de production. Il utilise un runtime maison (`<x-dc>`, `<sc-for>`, `<sc-if>`, `DCLogic`) non réutilisable. Dans le prototype, les 5 pages sont regroupées derrière un **sélecteur d'onglets** uniquement pour la démo — **dans le projet réel, il faut UNE page par prestation** (une route chacune), pas un onglet.

## Intégration au projet Next.js existant
- **Ne pas réinitialiser** le projet. Conserver la stack, l'organisation et la méthode de styling actuelles.
- **Réutiliser les composants partagés existants** : Header/Nav, Footer, boutons CTA, styles de la marque (dégradé holo, typo Syne + Manrope). Ne pas les recréer.
- Créer une **route par prestation** (App Router : `app/services/[slug]/page.tsx` avec `generateStaticParams`, OU un dossier par service). Les données de chaque service sont centralisées dans un objet/fichier de config (voir « Données » ci-dessous) — idéalement un seul `services.ts` que le reste du site peut aussi consommer.
- Ajouter les liens vers ces pages depuis la section « Services » de la home et la nav.

## Structure d'une page service (dans l'ordre)
1. **Header** (composant existant) + fil d'ariane / retour « ← Toutes les prestations ».
2. **Hero** (grille 2 col, 1 col < 900px) : kicker (catégorie), H1 = nom, description, 3 cartes chiffres (À partir de = `price` / Durée = `duration` / Garantie = `warranty`), 2 CTA (« Demander un devis gratuit » → ancre contact, « Nous appeler » → `tel:+33756946684`), et une image `aspect-ratio:4/5` avec dégradé + label.
3. **Ce qui est inclus** : titre + grille de cartes `features` (case ✓ dégradé holo + titre + description).
4. **Galerie** : 3 images carrées (`gallery`) — **placeholders à remplacer par les vraies photos** du client.
5. **Bénéfices** : bande sur fond `rgba(255,255,255,.02)`, 3 cartes `benefits` (numéro holo + titre + texte).
6. **Contact** (id `contact`) : grille 2 col — infos (téléphone holo + réseaux IG/TT/SC) + **formulaire** (Nom, Téléphone, Modèle véhicule, select prestation **pré-sélectionné sur la prestation courante**, message). Bouton holo + état de succès après envoi. **Brancher un vrai envoi email/API.**
7. **Footer** (composant existant).

## Identité visuelle (rappel — déjà dans le projet)
- Fond `#07070c`, texte blanc, cartes verre sombre (`rgba(255,255,255,.02–.04)`, bordure `rgba(255,255,255,.1)`, rayon 16–26px).
- Dégradé holo : `linear-gradient(115deg,#a0f0ff,#b7a6ff,#ff9ecb,#ffd39e,#a7ffd8)`, animation `holoShift` 7s ; utilisé sur kickers, chiffres, cases ✓, CTA (texte `#07070c`).
- Typo : Syne (titres) + Manrope (texte). Contenu max `1240px`.

## Données (à centraliser dans un `services.ts`)
Chaque service : `slug`, `label` (onglet/nav), `kicker`, `name`, `price`, `duration`, `warranty`, `desc`, `features[{t,d}]`, `benefits[{n,t,d}]`, `gallery[]`, `heroImage`. Contenu exact (copie fr) dans le prototype `Pages Services Mlightning.dc.html` (objet `data`). Résumé :

- **LED d'ambiance** — À partir de 190 € · 2–4 h · Garantie 2 ans. Rétroéclairage RGB piloté par app, intégration invisible, synchro musique, zones multiples.
- **Ciel étoilé** — 490 € · 1 journée · 2 ans. Fibres optiques HD, étoiles filantes, ciel sur-mesure, générateur silencieux.
- **Apple CarPlay** — 250 € · 2–3 h · 2 ans. CarPlay & Android Auto sans fil, interface d'origine, navigation/musique, caméra de recul.
- **Volants sur-mesure** — Sur devis · 3–7 jours · 2 ans. Cuir nappa/alcantara, surpiqûres, inserts carbone, repère 12h, airbag réinstallé.
- **Accessoires de carrosserie & vitres teintées** — Sur devis · 2 h–2 jours · 2 ans. Films teintés homologués, rejet chaleur/UV, accessoires carrosserie, films de protection, pose garantie conforme.

## À finaliser côté dev
- Créer les 5 routes + liens depuis la home/nav.
- Brancher l'envoi du formulaire (email/API) avec le nom de la prestation transmis.
- Remplacer les images placeholder par les vraies photos.
- Vérifier metadata/SEO par page (title, description, OpenGraph).

## Fichiers de ce bundle
- `Pages Services Mlightning.dc.html` — prototype de référence (design + copie exacte des 5 prestations).
