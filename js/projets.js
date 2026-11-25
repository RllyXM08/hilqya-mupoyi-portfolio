// ==========================================================
// projets.js : données des 6 projets, création des cartes et filtre
// Étape 3 du portfolio de Hilqya Kabemba Mupoyi
// ==========================================================

// ---------- 1. DONNÉES ----------
// Un tableau d'objets : chaque objet décrit un projet.
// categorie doit être une des valeurs data-categorie des boutons :
// "web", "mobile", "logiciel" ou "base-de-donnees".
// lien : adresse du code sur GitHub ; "" = pas de lien affiché.
const projets = [
  {
    titre: "Lungeni",
    categorie: "web",
    description: "Plateforme de gestion scolaire pour des écoles de Kinshasa : inscriptions, présences, notes et bulletins.",
    technos: ["C#", "ASP.NET Core", "Blazor", "SQL Server"],
    details: "Projet personnel en cours de développement, avec des rôles différents (direction, enseignants, parents, élèves). Le code est privé.",
    lien: ""
  },
  {
    titre: "Gestion des étudiants",
    categorie: "mobile",
    description: "Application Android pour ajouter, consulter et gérer une liste d'étudiants.",
    technos: ["Kotlin", "Android Studio"],
    details: "Projet de cours : interface Android, tableaux et conservation de l'état de l'écran quand on tourne le téléphone.",
    lien: ""
  },
  {
    titre: "Calculatrice Android",
    categorie: "mobile",
    description: "Calculatrice simple pour Android avec les quatre opérations de base.",
    technos: ["Kotlin", "Android Studio"],
    details: "Projet de cours : gestion des boutons, affichage du résultat et traitement des erreurs (division par zéro).",
    lien: ""
  },
  {
    titre: "Poste ALIBABA",
    categorie: "logiciel",
    description: "Programme de gestion d'objets postaux (lettres et colis) avec calcul des frais et de l'assurance.",
    technos: ["C#", ".NET", "POO"],
    details: "Projet de programmation orientée objet : classe abstraite, héritage, polymorphisme et interface IAssurance.",
    lien: ""
  },
  {
    titre: "Agence de location de voitures",
    categorie: "base-de-donnees",
    description: "Modèle entité-association et modèle relationnel d'une agence de location de voitures.",
    technos: ["Modèle E-A", "Modèle relationnel"],
    details: "Projet d'équipe avec Julien Cacoulet : entités, attributs, clés primaires et étrangères, cardinalités et règles d'affaires.",
    lien: ""
  },
  {
    titre: "Débogage : collisions de rectangles",
    categorie: "logiciel",
    description: "Laboratoire d'assurance qualité : trouver avec le débogueur quels rectangles se touchent parmi dix.",
    technos: ["C#", "Visual Studio", "Débogueur"],
    details: "Points d'arrêt et inspection des variables, sans modifier le code qui fonctionne. Résultat : collision entre les rectangles C et H.",
    lien: ""
  }
];

// Texte affiché sur la carte pour chaque catégorie
const nomsCategories = {
  "web": "Web",
  "mobile": "Mobile",
  "logiciel": "Logiciel",
  "base-de-donnees": "Base de données"
};

// ---------- 2. CRÉER UNE CARTE ----------
// Reçoit un objet projet et son numéro, retourne un élément <article>.
// On utilise createElement et textContent (jamais innerHTML) :
// le texte est inséré tel quel, sans risque.
function creerCarte(projet, numero) {
  const carte = document.createElement("article");
  carte.classList.add("carte-projet");

  const categorie = document.createElement("p");
  categorie.classList.add("carte-projet__categorie");
  categorie.textContent = nomsCategories[projet.categorie];

  const titre = document.createElement("h3");
  titre.classList.add("carte-projet__titre");
  titre.textContent = projet.titre;

  const description = document.createElement("p");
  description.classList.add("carte-projet__description");
  description.textContent = projet.description;

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
  details.textContent = projet.details;
  details.hidden = true;

  // Bouton Détails : aria-controls relie le bouton au paragraphe
  const bouton = document.createElement("button");
  bouton.type = "button";
  bouton.classList.add("bouton-details");
  bouton.textContent = "Détails";
  bouton.setAttribute("aria-expanded", "false");
  bouton.setAttribute("aria-controls", details.id);

  // Au clic : on inverse l'état (opérateur ternaire pour le texte)
  bouton.addEventListener("click", function () {
    const estCache = details.hidden;
    details.hidden = !estCache;
    bouton.textContent = estCache ? "Masquer" : "Détails";
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
    lien.textContent = "Voir le code";
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
      afficherProjets(filtres[i].dataset.categorie);
    });
  }
}

// ---------- 5. DÉMARRAGE ----------
// Appelée une seule fois par script.js
export function initialiserProjets() {
  afficherProjets("tous");
  activerFiltres();
}
