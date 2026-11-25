// ==========================================================
// projets.js : données des 6 projets, création des cartes et filtre
// Étape 3 du portfolio de Hilqya Kabemba Mupoyi
// ==========================================================

// ---------- 1. DONNÉES ----------
// Un tableau d'objets : chaque objet décrit un projet.
// categorie doit être une des valeurs data-categorie des boutons :
// "web", "mobile", "logiciel" ou "base-de-donnees".
// lien : adresse du code sur GitHub ; "" = pas de lien affiché.
// titreEn, descriptionEn, detailsEn : les mêmes textes en anglais (étape 5b).
const projets = [
  {
    titre: "Lungeni",
    titreEn: "Lungeni", // titre en anglais
    categorie: "web",
    description: "Plateforme de gestion scolaire pour des écoles de Kinshasa : inscriptions, présences, notes et bulletins.",
    descriptionEn: "School management platform for schools in Kinshasa: enrolment, attendance, grades and report cards.",
    technos: ["C#", "ASP.NET Core", "Blazor", "SQL Server"],
    details: "Projet personnel en cours de développement, avec des rôles différents (direction, enseignants, parents, élèves). Le code est privé.",
    detailsEn: "Personal project in progress, with different roles (principal, teachers, parents, students). The code is private.",
    lien: ""
  },
  {
    titre: "Gestion des étudiants",
    titreEn: "Student management", // titre en anglais
    categorie: "mobile",
    description: "Application Android pour ajouter, consulter et gérer une liste d'étudiants.",
    descriptionEn: "Android app to add, view and manage a list of students.",
    technos: ["Kotlin", "Android Studio"],
    details: "Projet de cours : interface Android, tableaux et conservation de l'état de l'écran quand on tourne le téléphone.",
    detailsEn: "Course project: Android interface, arrays and keeping the screen state when the phone is rotated.",
    lien: ""
  },
  {
    titre: "Calculatrice Android",
    titreEn: "Android calculator", // titre en anglais
    categorie: "mobile",
    description: "Calculatrice simple pour Android avec les quatre opérations de base.",
    descriptionEn: "Simple Android calculator with the four basic operations.",
    technos: ["Kotlin", "Android Studio"],
    details: "Projet de cours : gestion des boutons, affichage du résultat et traitement des erreurs (division par zéro).",
    detailsEn: "Course project: button handling, result display and error handling (division by zero).",
    lien: ""
  },
  {
    titre: "Poste ALIBABA",
    titreEn: "ALIBABA Post", // titre en anglais
    categorie: "logiciel",
    description: "Programme de gestion d'objets postaux (lettres et colis) avec calcul des frais et de l'assurance.",
    descriptionEn: "Program to manage postal items (letters and parcels) with shipping and insurance fees.",
    technos: ["C#", ".NET", "POO"],
    details: "Projet de programmation orientée objet : classe abstraite, héritage, polymorphisme et interface IAssurance.",
    detailsEn: "Object-oriented programming project: abstract class, inheritance, polymorphism and the IAssurance interface.",
    lien: ""
  },
  {
    titre: "Agence de location de voitures",
    titreEn: "Car rental agency", // titre en anglais
    categorie: "base-de-donnees",
    description: "Modèle entité-association et modèle relationnel d'une agence de location de voitures.",
    descriptionEn: "Entity-relationship model and relational model of a car rental agency.",
    technos: ["Modèle E-A", "Modèle relationnel"],
    details: "Projet d'équipe avec Julien Cacoulet : entités, attributs, clés primaires et étrangères, cardinalités et règles d'affaires.",
    detailsEn: "Team project with Julien Cacoulet: entities, attributes, primary and foreign keys, cardinalities and business rules.",
    lien: ""
  },
  {
    titre: "Débogage : collisions de rectangles",
    titreEn: "Debugging: rectangle collisions", // titre en anglais
    categorie: "logiciel",
    description: "Laboratoire d'assurance qualité : trouver avec le débogueur quels rectangles se touchent parmi dix.",
    descriptionEn: "Quality assurance lab: use the debugger to find which of ten rectangles touch each other.",
    technos: ["C#", "Visual Studio", "Débogueur"],
    details: "Points d'arrêt et inspection des variables, sans modifier le code qui fonctionne. Résultat : collision entre les rectangles C et H.",
    detailsEn: "Breakpoints and variable inspection, without changing the working code. Result: collision between rectangles C and H.",
    lien: ""
  }
];

// Texte affiché sur la carte pour chaque catégorie (français)
const nomsCategories = {
  "web": "Web",
  "mobile": "Mobile",
  "logiciel": "Logiciel",
  "base-de-donnees": "Base de données"
};

// Les mêmes catégories en anglais
const nomsCategoriesEn = {
  "web": "Web",
  "mobile": "Mobile",
  "logiciel": "Software",
  "base-de-donnees": "Database"
};

// Filtre choisi en ce moment : on le garde pour réafficher les bonnes
// cartes après un changement de langue
let categorieActive = "tous";

// ---------- 2. CRÉER UNE CARTE ----------
// Reçoit un objet projet et son numéro, retourne un élément <article>.
// On utilise createElement et textContent (jamais innerHTML) :
// le texte est inséré tel quel, sans risque.
function creerCarte(projet, numero) {
  const carte = document.createElement("article");
  carte.classList.add("carte-projet");

  const categorie = document.createElement("p");
  categorie.classList.add("carte-projet__categorie");
  // Ternaire : la variable langue vient de langue.js ("fr" ou "en")
  categorie.textContent = (langue === "fr") ? nomsCategories[projet.categorie] : nomsCategoriesEn[projet.categorie];

  const titre = document.createElement("h3");
  titre.classList.add("carte-projet__titre");
  titre.textContent = (langue === "fr") ? projet.titre : projet.titreEn;

  const description = document.createElement("p");
  description.classList.add("carte-projet__description");
  description.textContent = (langue === "fr") ? projet.description : projet.descriptionEn;

  // Liste des technologies : une boucle for crée un <li> par techno
  const technos = document.createElement("ul");
  technos.classList.add("carte-projet__technos");
  for (let i = 0; i < projet.technos.length; i++) {
    const techno = document.createElement("li");
    techno.textContent = projet.technos[i];
    technos.appendChild(techno);
  }

  // Paragraphe des détails : caché au départ avec l'attribut hidden
  const details = document.createElement("p");
  details.classList.add("carte-projet__details");
  details.id = "details-projet-" + numero;
  details.textContent = (langue === "fr") ? projet.details : projet.detailsEn;
  details.hidden = true;

  // Textes du bouton dans la bonne langue
  const texteDetails = (langue === "fr") ? "Détails" : "Details";
  const texteMasquer = (langue === "fr") ? "Masquer" : "Hide";

  // Bouton Détails : aria-controls relie le bouton au paragraphe
  const bouton = document.createElement("button");
  bouton.type = "button";
  bouton.classList.add("bouton-details");
  bouton.textContent = texteDetails;
  bouton.setAttribute("aria-expanded", "false");
  bouton.setAttribute("aria-controls", details.id);

  // Au clic : on inverse l'état (opérateur ternaire pour le texte)
  bouton.addEventListener("click", function () {
    const estCache = details.hidden;
    details.hidden = !estCache;
    bouton.textContent = estCache ? texteMasquer : texteDetails;
    bouton.setAttribute("aria-expanded", estCache ? "true" : "false");
  });

  carte.appendChild(categorie);
  carte.appendChild(titre);
  carte.appendChild(description);
  carte.appendChild(technos);
  carte.appendChild(details);

  // Lien vers le code seulement s'il existe (Lungeni n'en a pas)
  if (projet.lien !== "") {
    const lien = document.createElement("a");
    lien.href = projet.lien;
    lien.target = "_blank";
    lien.rel = "noopener noreferrer";
    lien.textContent = (langue === "fr") ? "Voir le code" : "View the code";
    carte.appendChild(lien);
  }

  carte.appendChild(bouton);
  return carte;
}

// ---------- 3. AFFICHER LES PROJETS D'UNE CATÉGORIE ----------
// On vide la liste puis on recrée seulement les cartes de la catégorie.
// (On ne cache pas les cartes avec hidden : .carte-projet a display: flex
// dans le CSS, ce qui empêcherait hidden de fonctionner.)
function afficherProjets(categorieChoisie) {
  const liste = document.querySelector("#liste-projets");
  liste.textContent = "";

  for (let i = 0; i < projets.length; i++) {
    const projet = projets[i];
    if (categorieChoisie === "tous" || projet.categorie === categorieChoisie) {
      liste.appendChild(creerCarte(projet, i));
    }
  }
}

// ---------- 4. BOUTONS DE FILTRE ----------
// Au clic sur un filtre : il devient actif (classe + aria-pressed),
// les autres redeviennent inactifs, puis on affiche les bons projets.
function activerFiltres() {
  const filtres = document.querySelectorAll(".filtre");

  for (let i = 0; i < filtres.length; i++) {
    filtres[i].addEventListener("click", function () {
      for (let j = 0; j < filtres.length; j++) {
        const estChoisi = filtres[j] === filtres[i];
        filtres[j].classList.toggle("filtre--actif", estChoisi);
        filtres[j].setAttribute("aria-pressed", estChoisi ? "true" : "false");
      }
      categorieActive = filtres[i].dataset.categorie; // on retient le filtre choisi
      afficherProjets(categorieActive);
    });
  }
}

// ---------- 5. DÉMARRAGE ----------
// Appelée une seule fois par script.js
function initialiserProjets() {
  afficherProjets("tous");
  activerFiltres();

  // Bouton FR/EN : langue.js a déjà changé la variable langue,
  // on recrée donc les cartes dans la nouvelle langue, avec le même filtre
  document.getElementById("btn-langue").addEventListener("click", function () {
    afficherProjets(categorieActive);
  });
}
