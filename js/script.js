// ==========================================================
// script.js : point de départ du JavaScript du portfolio
// Seul fichier appelé par index.html (type="module") : la page est déjà
// lue quand il s'exécute. Il importe les fonctions des 3 autres fichiers.
// (langue.js est importé par ces fichiers : il s'exécute en premier.)
// ==========================================================

import { initialiserProjets } from "./projets.js";
import { initialiserMenu } from "./menu.js";
import { initialiserFormulaire } from "./formulaire.js";

// Étape 3 : cartes des projets et filtre (fonction de projets.js)
initialiserProjets();

// Étape 4 : menu mobile (menu.js) et validation du formulaire (formulaire.js)
initialiserMenu();
initialiserFormulaire();
