# Portfolio – Hilqya Kabemba Mupoyi

Portfolio d'une page de Hilqya Kabemba Mupoyi, étudiant en programmation informatique au Collège La Cité.
Il a été réalisé comme projet final du cours « Introduction à la programmation web client ».

**Site en ligne :** https://rllyxm08.github.io/hilqya-mupoyi-portfolio/

## Technologies

- HTML5
- CSS3
- JavaScript (sans framework, sans modules)

## Fonctionnalités

- Menu responsive (bouton Menu sur mobile, menu en ligne sur grand écran)
- Filtre des projets par catégorie, avec un bouton Détails sur chaque carte
- Bouton flottant pour revenir en haut de la page
- Formulaire de contact validé en JavaScript
- Bouton FR/EN pour changer la langue du site (français par défaut)

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
│   ├── projets.js        Données des 6 projets, cartes, filtres et Détails
│   ├── menu.js           Ouverture et fermeture du menu sur mobile
│   ├── formulaire.js     Validation du formulaire de contact
│   └── script.js         Point de départ : appelle les 3 fonctions d'initialisation
└── assets/
    └── images/
        ├── favicon.svg       Icône de l'onglet
        ├── photo-hilqya.jpg  Photo de l'accueil
        └── .gitkeep
```

### Ordre de chargement des scripts

Les scripts sont des scripts normaux avec `defer`. Ils s'exécutent dans cet ordre, une fois la page lue :

1. `langue.js` : crée la variable `langue` et les traductions, utilisées par les autres fichiers
2. `projets.js`
3. `menu.js`
4. `formulaire.js`
5. `script.js` : appelle `initialiserProjets()`, `initialiserMenu()` et `initialiserFormulaire()`

## Ouvrir le projet en local

1. Télécharger ou cloner le dépôt.
2. Ouvrir le fichier `index.html` dans un navigateur, ou utiliser l'extension **Live Server** dans VS Code (clic droit sur `index.html` puis « Open with Live Server »).

## Projets présentés

1. **Lungeni** : plateforme de gestion scolaire pour des écoles de Kinshasa. C'est un projet personnel en cours de développement, sans code public.
2. **Gestion des étudiants** : application Android (Kotlin).
3. **Calculatrice Android** : calculatrice simple (Kotlin).
4. **Poste ALIBABA** : gestion d'objets postaux en programmation orientée objet (C#, .NET).
5. **Agence de location de voitures** : modèle entité-association et modèle relationnel.
6. **Débogage : collisions de rectangles** : laboratoire d'assurance qualité avec le débogueur (C#, Visual Studio).

## Auteur

Hilqya Kabemba Mupoyi — GitHub : https://github.com/RllyXM08
