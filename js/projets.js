// ==========================================================
// projets.js : données des 7 projets, création des cartes et filtre
// Étape 3 du portfolio de Hilqya Kabemba Mupoyi
// ==========================================================

// ---------- 1. DONNÉES ----------
// Un tableau d'objets : chaque objet décrit un projet.
// categorie doit être une des valeurs data-categorie des boutons :
// "web", "mobile", "logiciel" ou "base-de-donnees".
// lien : adresse du code sur GitHub ; "" = pas de lien affiché.
// titreEn, descriptionEn, detailsEn, technosEn : les mêmes textes en anglais (étape 5b).
const projets = [
  {
    titre: "Lungeni",
    titreEn: "Lungeni", // titre en anglais
    categorie: "web",
    description: "Plateforme web de gestion scolaire pour des écoles de Kinshasa.",
    descriptionEn: "Web school management platform for schools in Kinshasa.",
    technos: ["C#", "ASP.NET Core", "Blazor", "SQL Server", "Entity Framework Core"],
    technosEn: ["C#", "ASP.NET Core", "Blazor", "SQL Server", "Entity Framework Core"],
    details: "Inscriptions, présences, notes et bulletins, frais et reçus de caisse, notifications, tableaux de bord et portails par rôle (direction, caisse, enseignant, parent, élève). Projet personnel en cours, développé avec un assistant IA (Claude Code). Le code est privé.",
    detailsEn: "Enrolment, attendance, grades and report cards, fees and cash receipts, notifications, dashboards and portals by role (principal, cashier, teacher, parent, student). Personal project in progress, built with an AI assistant (Claude Code). The code is private.",
    lien: ""
  },
  {
    titre: "Gestion des étudiants",
    titreEn: "Student management", // titre en anglais
    categorie: "mobile",
    description: "Application Android (Kotlin) pour ajouter, consulter et gérer une liste d'étudiants.",
    descriptionEn: "Android app (Kotlin) to add, view and manage a list of students.",
    technos: ["Kotlin", "Android Studio"],
    technosEn: ["Kotlin", "Android Studio"],
    details: "Ajout par bouton flottant, suppression par clic, détails par clic long (deuxième activité avec Intent), réinitialisation par le menu, pas de doublon. Les données sont conservées à la rotation, avec une mise en page paysage.",
    detailsEn: "Adding with a floating button, deleting with a click, details with a long click (second activity with an Intent), reset from the menu, no duplicates. Data is kept when the phone is rotated, with a landscape layout.",
    lien: ""
  },
  {
    titre: "Calculatrice Android",
    titreEn: "Android calculator", // titre en anglais
    categorie: "mobile",
    description: "Calculatrice simple pour Android avec les quatre opérations de base.",
    descriptionEn: "Simple Android calculator with the four basic operations.",
    technos: ["Kotlin", "Android Studio"],
    technosEn: ["Kotlin", "Android Studio"],
    details: "Projet de cours : gestion des boutons, affichage du résultat et traitement des erreurs (division par zéro).",
    detailsEn: "Course project: button handling, result display and error handling (division by zero).",
    lien: ""
  },
  {
    titre: "Poste ALIBABA",
    titreEn: "ALIBABA Post", // titre en anglais
    categorie: "logiciel",
    description: "Programme C# de gestion d'un bureau de poste : lettres et colis avec calcul du prix.",
    descriptionEn: "C# program to manage a post office: letters and parcels with price calculation.",
    technos: ["C#", ".NET", "POO"],
    technosEn: ["C#", ".NET", "OOP"],
    details: "Classe abstraite ObjetPostal, classes Colis et Lettre (sealed) et interface IAssurance. Prix selon le poids, le volume et le mode normal ou express. Code automatique et validation des données.",
    detailsEn: "Abstract class ObjetPostal, classes Colis and Lettre (sealed) and the IAssurance interface. Price based on weight, volume and normal or express mode. Automatic code and data validation.",
    lien: ""
  },
  {
    titre: "Agence de location de voitures",
    titreEn: "Car rental agency", // titre en anglais
    categorie: "base-de-donnees",
    description: "Modèle entité-association et modèle relationnel d'une agence de location de voitures.",
    descriptionEn: "Entity-relationship model and relational model of a car rental agency.",
    technos: ["Modèle E-A", "Modèle relationnel"],
    technosEn: ["ER model", "Relational model"],
    details: "Projet d'équipe avec Julien Cacoulet : entités, attributs, clés primaires et étrangères, cardinalités et règles d'affaires.",
    detailsEn: "Team project with Julien Cacoulet: entities, attributes, primary and foreign keys, cardinalities and business rules.",
    lien: ""
  },
  {
    titre: "Magasin de téléphones",
    titreEn: "Phone store", // titre en anglais
    categorie: "base-de-donnees",
    description: "Base de données SQL Server d'un magasin de téléphones.",
    descriptionEn: "SQL Server database for a phone store.",
    technos: ["SQL Server", "SQL"],
    technosEn: ["SQL Server", "SQL"],
    details: "Base de 5 tables (Clients, Telephones, Ventes, LignesVente, Paiements) avec clés étrangères, insertions et requêtes filtrées et triées.",
    detailsEn: "Database of 5 tables (Clients, Telephones, Ventes, LignesVente, Paiements) with foreign keys, inserts and filtered and sorted queries.",
    lien: ""
  },
  {
    titre: "Débogage : collisions de rectangles",
    titreEn: "Debugging: rectangle collisions", // titre en anglais
    categorie: "logiciel",
    description: "Laboratoire d'assurance qualité : trouver avec le débogueur quels rectangles se touchent parmi dix.",
    descriptionEn: "Quality assurance lab: use the debugger to find which of ten rectangles touch each other.",
    technos: ["C#", "Visual Studio", "Débogueur"],
    technosEn: ["C#", "Visual Studio", "Debugger"],
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
  // Ternaire : liste en français ou en anglais (les pastilles sont créées en JS,
  // elles n'ont pas d'id : on les traduit ici, comme le titre et la description)
  const listeTechnos = (langue === "fr") ? projet.technos : projet.technosEn;
  for (let i = 0; i < listeTechnos.length; i++) {
    const techno = document.createElement("li");
    techno.textContent = listeTechnos[i];
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
