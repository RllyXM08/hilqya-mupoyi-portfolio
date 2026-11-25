// ==========================================================
// menu.js : ouverture et fermeture du menu sur mobile (étape 4)
// Le CSS affiche le menu quand la <nav> a la classe .nav--ouverte.
// Sur grand écran, le bouton Menu est caché et le menu toujours visible.
// ==========================================================

// La variable langue ("fr" ou "en") vient de langue.js
import { langue } from "./langue.js";

export function initialiserMenu() {
  const bouton = document.querySelector(".bouton-menu");
  const nav = document.querySelector(".entete nav");
  const liens = document.querySelectorAll("#menu-principal a");

  // Ouvre ou ferme le menu selon la valeur reçue (true = ouvrir)
  function changerMenu(ouvrir) {
    nav.classList.toggle("nav--ouverte", ouvrir);
    bouton.setAttribute("aria-expanded", ouvrir ? "true" : "false");
    // Ternaire : « Fermer » en français, « Close » en anglais (variable langue de langue.js)
    const texteFermer = (langue === "fr") ? "Fermer" : "Close";
    bouton.textContent = ouvrir ? texteFermer : "Menu";
  }

  // Clic sur le bouton : on inverse l'état actuel
  bouton.addEventListener("click", function () {
    const estOuvert = nav.classList.contains("nav--ouverte");
    changerMenu(!estOuvert);
  });

  // Clic sur un lien : on referme le menu (la page défile vers la section)
  for (let i = 0; i < liens.length; i++) {
    liens[i].addEventListener("click", function () {
      changerMenu(false);
    });
  }

  // Touche Échap : on referme et on remet le focus sur le bouton
  document.addEventListener("keydown", function (evenement) {
    if (evenement.key === "Escape" && nav.classList.contains("nav--ouverte")) {
      changerMenu(false);
      bouton.focus();
    }
  });

  // Bouton FR/EN : si le menu est ouvert, on remet le texte « Fermer / Close »
  // dans la nouvelle langue (sans changer l'état du menu)
  document.getElementById("btn-langue").addEventListener("click", function () {
    changerMenu(nav.classList.contains("nav--ouverte"));
  });
}
