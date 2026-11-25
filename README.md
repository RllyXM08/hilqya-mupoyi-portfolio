# Portfolio – Hilqya Kabemba Mupoyi

Portfolio d'une page de Hilqya Kabemba Mupoyi, étudiant en programmation informatique au Collège La Cité.
Il a été réalisé comme projet final du cours « Introduction à la programmation web client ».

**Site en ligne :** https://rllyxm08.github.io/hilqya-mupoyi-portfolio/

## Technologies

- HTML5
- CSS3
- JavaScript (sans framework, avec modules ES : `import` et `export`)

## Fonctionnalités

- Menu responsive (bouton Menu sur mobile, menu en ligne sur grand écran)
- Filtre des projets par catégorie, avec un bouton Détails sur chaque carte
- Bouton flottant pour revenir en haut de la page
- Formulaire de contact validé en JavaScript
- Bouton FR/EN pour changer la langue du site (français par défaut)
- CV en PDF (version française et version anglaise) : boutons « Voir mon CV » et « Télécharger mon CV » dans l'accueil, qui suivent la langue du site

## Bonus

- `type="module"` : le JavaScript est découpé en modules ES (`import` et `export`)

## Structure des fichiers

```
hilqya-mupoyi-portfolio/
├── index.html            Page unique (navigation par ancres)
├── README.md             Ce fichier
├── JOURNAL-IA.md         Journal d'usage de l'IA
├── css/
│   └── styles.css        Tous les styles (mobile d'abord, thème sombre)
├── js/
│   ├── langue.js         Variable langue, textes FR/EN et bouton FR/EN
│   ├── projets.js        Données des 7 projets, cartes, filtres et Détails
│   ├── menu.js           Ouverture et fermeture du menu sur mobile
│   ├── formulaire.js     Validation du formulaire de contact
│   └── script.js         Point de départ : appelle les 3 fonctions d'initialisation
└── assets/
    ├── cv/
    │   ├── CV_Hilqya_Kabemba_Mupoyi_FR.pdf  CV en français (version web)
    │   └── CV_Hilqya_Kabemba_Mupoyi_EN.pdf  CV en anglais (version web)
    └── images/
        ├── favicon.svg       Icône de l'onglet
        ├── photo-hilqya.jpg  Photo de l'accueil
        └── .gitkeep
```

### Modules JavaScript

`index.html` ne charge qu'un seul script : `<script type="module" src="js/script.js"></script>`. Les autres fichiers sont reliés avec `import` et `export` :

- `langue.js` exporte la variable `langue` (`export let langue`)
- `projets.js`, `menu.js` et `formulaire.js` importent `langue` et exportent leur fonction `initialiser...`
- `script.js` importe ces trois fonctions et les appelle

## Ouvrir le projet en local

1. Télécharger ou cloner le dépôt.
2. Ouvrir le dossier dans VS Code, puis utiliser l'extension **Live Server** (clic droit sur `index.html` puis « Open with Live Server »).

Les modules ne marchent pas en double-clic sur `index.html` (adresse `file://`) : le navigateur les bloque et les projets ne s'affichent pas. Il faut un petit serveur local comme Live Server.

## Projets présentés

1. **Lungeni** : plateforme de gestion scolaire pour des écoles de Kinshasa. C'est un projet personnel en cours de développement, sans code public.
2. **Gestion des étudiants** : application Android (Kotlin).
3. **Calculatrice Android** : calculatrice simple (Kotlin).
4. **Poste ALIBABA** : gestion d'objets postaux en programmation orientée objet (C#, .NET).
5. **Agence de location de voitures** : modèle entité-association et modèle relationnel.
6. **Magasin de téléphones** : base de données SQL Server de 5 tables (SQL Server, SSMS, SQL, Modèle E-A).
7. **Débogage : collisions de rectangles** : laboratoire d'assurance qualité avec le débogueur (C#, Visual Studio).

## Auteur

Hilqya Kabemba Mupoyi — GitHub : https://github.com/RllyXM08
