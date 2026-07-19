# Handoff : Site vitrine — By Mlightning Custom (customisation auto)

## Vue d'ensemble
Refonte complète (rebranding total) du site d'une entreprise de **customisation automobile / tuning intérieur** basée en région parisienne (Val-d'Oise, 95). Site vitrine one-page. Objectif : présenter les prestations, montrer les réalisations, inspirer confiance (avis, expérience) et convertir via une **prise de rendez-vous / demande de devis gratuit**. Cible : passionnés d'auto voulant personnaliser leur habitacle. Langue : **français**.

Prestations : LED d'ambiance pilotées par téléphone, ciel étoilé fibre optique, intégration Apple CarPlay, volants sur-mesure, déblocage d'options cachées sur véhicules du groupe VAG (Audi, VW, Seat, Skoda).

## À propos des fichiers de design
Le fichier `By Mlightning Custom.dc.html` de ce bundle est une **référence de design créée en HTML** — un prototype qui montre l'apparence et le comportement voulus, **pas** du code de production à copier tel quel. Il utilise un petit runtime maison (balises `<x-dc>`, `<sc-for>`, `<sc-if>`, classe `DCLogic`) qui **n'est pas** destiné à être réutilisé.

**La tâche : recréer ce design dans un vrai codebase**, avec ses patterns et librairies habituels. S'il n'existe pas encore de projet, choisir le framework le plus adapté (recommandation : **Next.js App Router + React + TypeScript**, styling au choix — CSS Modules, Tailwind ou styled-components) et implémenter le design proprement, composant par composant.

## Fidélité
**Haute fidélité (hifi).** Couleurs, typographie, espacements et interactions sont définitifs. Recréer l'UI au pixel près. Toutes les valeurs exactes sont dans « Design Tokens » ci-dessous et dans le prototype.

## Identité visuelle — direction « dark iridescent »
- Fond très sombre : `#07070c` (principal), `#0d0d16` (scrollbar track), surfaces en `rgba(255,255,255,.02–.06)`.
- Texte : blanc `#fff`, secondaire `rgba(255,255,255,.6–.7)`, tertiaire `rgba(255,255,255,.4–.5)`.
- **Signature : dégradé holographique animé** repris du logo. 3 variantes (prop `holo`) :
  - **Iridescent (défaut)** : `linear-gradient(115deg,#a0f0ff,#b7a6ff,#ff9ecb,#ffd39e,#a7ffd8)`
  - **Néon** : `linear-gradient(115deg,#22d3ee,#a855f7,#ec4899)`
  - **Chrome** : `linear-gradient(115deg,#e5e7eb,#a5b4fc,#f0abfc,#e5e7eb)`
  - Animation `holoShift` (background-position 0%↔100%, 7s ease infinite) ; désactivable (prop `animateGrad`).
  - Usage : texte accent (`background-clip:text`), CTA (fond plein, texte `#07070c`), chiffres de stats, marqueur ★★★★★, numéros de process.
- Bordures : `rgba(255,255,255,.08–.16)`. Cartes = verre sombre (`rgba(255,255,255,.02–.06)` + `backdrop-filter:blur`).
- Glow d'ambiance : 2 cercles radiaux fixes en fond (bleu haut-gauche, rose bas-droite, `filter:blur(20px)`).
- Ombre CTA : `0 8px 30px -8px rgba(160,180,255,.5)`.

## Typographie
- **Titres (h1–h4, chiffres, logo texte)** : `Syne`, poids 700/800, `line-height:1.02`, letter-spacing `-.01em`/`-.02em`. Google Fonts.
- **Texte courant, nav, formulaire** : `Manrope`, poids 400/500/600/700. Google Fonts.
- Import : `https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Manrope:wght@400;500;600;700`

## Layout global
- Largeur max de contenu : **1280px**, centré, padding latéral `1.5rem`.
- Padding vertical des sections : `clamp(4rem,7vw,7rem)`.
- Header **sticky**, `backdrop-filter:blur(14px)`, fond `rgba(7,7,12,.72)`, bordure basse `rgba(255,255,255,.08)`.
- Logo holographique = `assets/logo-holo.png` (toujours sur fond sombre). Hauteur : 52px nav, 60px footer, 48px menu mobile.
- Grilles responsives : `repeat(auto-fit,minmax(Xpx,1fr))` + `gap`.
- Coins : cartes 18–28px, boutons pilule `999px`, inputs 12px.
- **Breakpoints** : `900px` (nav desktop cachée → burger ; hero passe en 1 colonne), `640px` (galerie mosaïque → 2 colonnes uniformes).

## Écrans / Sections (dans l'ordre)

### 1. Header / Nav (sticky)
- Gauche : logo holographique (img, 52px).
- Droite : liens `Services · Réalisations · Process · Avis · Contact` (Manrope 600, `.95rem`, `rgba(255,255,255,.82)`) + CTA « Prendre rendez-vous » (pilule dégradé holo, `tel:+33756946684`).
- < 900px : liens + CTA cachés, burger ☰ visible → menu plein écran (fond `#07070c`, liens Syne 2rem + CTA holo en bas).

### 2. Hero
- Grille 2 colonnes `1.15fr .85fr`, gap `clamp(2rem,4vw,4rem)`, centré vertical.
- Gauche : badge pilule (point cyan lumineux + « Customisation auto · Région parisienne »), H1 « Votre habitacle, **réinventé.** » (`clamp(2.7rem,6.5vw,5.4rem)`, le 2ᵉ mot en texte holo), paragraphe (`rgba(255,255,255,.7)`, max 50ch), 2 CTA (holo + contour), puis 3 stats inline (chiffres holo) : `6 ans+` d'expérience · `500+` véhicules customisés · `< 1 h` délai de réponse.
- Droite : image `aspect-ratio:4/5`, rayon 26px, dégradé sombre en bas + badge « ✦ Réalisation Mlightning ».

### 3. Marquee / bandeau
- Bandeau bordé haut/bas, fond `rgba(255,255,255,.02)`. Liste de mots-clés (Syne 700) séparés par un losange `◆` violet : LED RGB · Ciel étoilé · Apple CarPlay · Volants cuir · Déblocage VAG · Ambient light · Finition invisible.

### 4. Services
- En-tête : sur-titre holo « Nos services » + H2 « Cinq façons de sublimer votre intérieur » + paragraphe à droite.
- Grille `repeat(auto-fit,minmax(280px,1fr))`, gap `1.2rem`.
- **5 cartes** (verre sombre, rayon 22px, hover `translateY(-6px)` + bordure plus claire) : image `aspect-ratio:16/11` en haut + numéro (`01`–`05`, gris) + titre (Syne 1.5rem) + blurb.

Contenu :
1. **01 — LED d'ambiance** — « Rétroéclairage multicolore piloté depuis votre téléphone. Une atmosphère sur-mesure, de jour comme de nuit. »
2. **02 — Ciel étoilé** — « Fibres optiques haute qualité intégrées au pavillon pour recréer un vrai ciel scintillant. »
3. **03 — CarPlay** — « Accédez à vos apps, votre musique et vos contacts directement sur l'écran du tableau de bord. »
4. **04 — Volants sur-mesure** — « Volants recréés avec des matériaux premium pour un confort et une esthétique incomparables. »
5. **05 — Déblocage option VAG** — « Activation des fonctions cachées de votre véhicule du groupe VAG (Audi, VW, Seat, Skoda). »

### 5. Réalisations (galerie)
- En-tête centré : sur-titre holo « Réalisations » + H2 « Nos dernières créations » + note (images d'exemple à remplacer).
- **Galerie mosaïque** : grille 4 colonnes, `grid-auto-rows:200px`, gap `1rem`. Spans : carte 1 = 2×2, carte 4 = ×2 en hauteur, carte 5 = ×2 en largeur (les autres 1×1). Chaque tuile = image `cover`, rayon 18px, bordure.
- < 640px : 2 colonnes uniformes, spans annulés.
- **Remplacer par les vraies photos de réalisations du client.**

### 6. Process
- Section bordée haut, fond `rgba(255,255,255,.02)`. En-tête : sur-titre holo « Le process » + H2 « Simple, du premier appel à la livraison ».
- Grille `repeat(auto-fit,minmax(230px,1fr))`, **4 cartes** avec gros numéro holo :
  1. **Prise de contact** — « Appel ou message. On cerne votre besoin et votre véhicule. »
  2. **Devis gratuit** — « Proposition détaillée, transparente, sans engagement. »
  3. **Réalisation** — « Installation soignée par nos soins, composants premium. »
  4. **Livraison** — « Vous repartez avec un intérieur totalement transformé. »

### 7. Avis
- En-tête centré : sur-titre holo « Ils nous ont fait confiance » + H2 « Des clients conquis ».
- Grille `repeat(auto-fit,minmax(290px,1fr))`, **3 témoignages** (carte verre, rayon 20px) : ★★★★★ holo + citation + nom (700) & véhicule (`rgba(255,255,255,.5)`).
  1. « Ciel étoilé posé sur ma Classe A, rendu incroyable et travail ultra propre. Je recommande à 100 %. » — **Kevin M.**, Mercedes Classe A
  2. « LED d'ambiance + CarPlay sur ma Golf, exactement ce que je voulais. Réactif et de bon conseil. » — **Sofiane B.**, Volkswagen Golf
  3. « Volant sur-mesure d'une qualité folle. On sent la passion du détail. Merci ! » — **Laura D.**, Audi A3

### 8. Contact / CTA
- Grand bloc arrondi (rayon 28px) avec fond dégradé holo translucide + glow radial. Grille 2 colonnes.
- Gauche : H2 « Parlons de votre projet » + paragraphe (« devis gratuit… réponse en moins d'une heure ») + CTA téléphone holo (`📞 +33 7 56 94 66 84`) + 3 ronds réseaux (IG / TT / SC).
- Droite : carte formulaire (verre sombre) — champs Nom, Téléphone, select prestation (LED d'ambiance / Ciel étoilé / CarPlay / Volant sur-mesure / Déblocage option VAG / Autre), textarea « Votre véhicule & votre projet… », bouton holo « Demander mon devis gratuit ».
  - **Après envoi** : état succès (rond holo ✓ + « Message envoyé ! » + « On vous recontacte très vite pour votre rendez-vous. »).

### 9. Footer
- Bordé haut. Grille `repeat(auto-fit,minmax(220px,1fr))`.
- Col 1 : logo holo (60px) + description. Col 2 « Services » (5 liens). Col 3 « Contact » (téléphone + Instagram + TikTok + Snapchat).
- Barre basse : « © 2026 By Mlightning Custom. Tous droits réservés. » + « Mentions légales · Confidentialité ».

## Interactions & comportement
- **Nav mobile** : burger ouvre/ferme un menu plein écran (state booléen `nav`).
- **Formulaire contact** : `onSubmit` → `preventDefault` → état succès (state booléen `sent`). Pas de backend dans le proto ; **brancher un vrai envoi** (email/API/RDV) côté codebase.
- **Hover** : cartes services `translateY(-6px)` + bordure plus claire ; CTA avec ombre lumineuse.
- **Animation holoShift** : dégradé holographique qui se déplace en boucle (7s) sur textes accent, CTA, chiffres — désactivable.
- **Smooth scroll** : `html{scroll-behavior:smooth}`, liens ancres (`#services`, `#realisations`, `#process`, `#avis`, `#contact`).

## State / props (à recréer)
- `nav` : menu mobile ouvert (booléen).
- `sent` : formulaire envoyé (booléen).
- `holo` : 'Iridescent' | 'Néon' | 'Chrome' (défaut 'Iridescent') → choisit le dégradé.
- `animateGrad` : booléen (défaut true) → active l'animation du dégradé.

## Design tokens (récap)
- **Fond** : `#07070c`. **Texte** : `#fff` / `.7` / `.5`. **Bordures** : `rgba(255,255,255,.08–.16)`.
- **Dégradé holo (défaut)** : `linear-gradient(115deg,#a0f0ff,#b7a6ff,#ff9ecb,#ffd39e,#a7ffd8)`, `background-size:200–220%`, animation `holoShift` 7s.
- **Rayons** : cartes 18–28px, boutons `999px`, inputs 12px.
- **Contenu max** : `1280px`. **Sections** : `clamp(4rem,7vw,7rem)`.
- **Typo** : Syne (titres) + Manrope (texte).
- **Tailles clés** : H1 `clamp(2.7rem,6.5vw,5.4rem)`, H2 `clamp(2rem,4.4vw,3.4rem)`, sur-titres `.8rem` uppercase letter-spacing `.14em`, corps `.92–1.05rem`.

## Assets
- **Logo** : `assets/logo-holo.png` — logo holographique, à poser sur fond sombre uniquement. Inclus dans ce bundle.
- **Polices** : Google Fonts (Syne, Manrope) — gratuites.
- **Photos** : le prototype utilise des images d'exemple Unsplash (hero, 5 services, 6 tuiles galerie), chacune avec un dégradé de secours en dessous. **À remplacer par les vraies photos de réalisations du client** (intérieurs custom, LED, ciels étoilés, avant/après). Prévoir idéalement un système d'upload/CMS.
- **Icônes** : glyphes texte (✦ ◆ ★ ✓ 📞) — remplaçables par une librairie d'icônes.

## Contact (valeurs à conserver / vérifier)
- Téléphone : `+33 7 56 94 66 84`
- Instagram : `https://www.instagram.com/mlightning_custom/`
- TikTok : `https://www.tiktok.com/@mlightning95`
- Snapchat : `https://www.snapchat.com/add/mlightning95`
- Zone : Val-d'Oise (95) / Île-de-France

## À finaliser côté dev
- Brancher l'envoi réel du formulaire / prise de RDV (email ou API).
- Intégrer les vraies photos de réalisations.
- Vérifier / compléter les coordonnées et mentions légales.

## Fichiers de ce bundle
- `By Mlightning Custom.dc.html` — prototype de design complet (référence visuelle et comportementale ; toute la copie exacte, couleurs et tailles s'y trouvent).
- `assets/logo-holo.png` — le logo holographique.
