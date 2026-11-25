// ==========================================================
// script.js : point d'entrée du JavaScript du portfolio
// Chargé dans index.html avec type="module" : le script attend
// automatiquement que la page soit lue avant de s'exécuter.
// ==========================================================

import { initialiserProjets } from "./projets.js";
import { initialiserMenu } from "./menu.js";
import { initialiserFormulaire } from "./formulaire.js";

// Étape 3 : cartes des projets et filtre
initialiserProjets();

// Étape 4 : menu mobile et validation du formulaire
initialiserMenu();
initialiserFormulaire();
