// ==========================================================
// formulaire.js : validation du formulaire de contact (étape 4)
// Le formulaire a l'attribut novalidate : c'est notre JavaScript qui
// vérifie les champs et affiche les messages. Aucun envoi réel (pas de serveur).
// ==========================================================

// Courriel : du texte, un @, du texte, un point, du texte (sans espaces).
// Exemple valide : nom@exemple.com
const formatCourriel = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Une règle par champ : l'id du champ, la vérification et le message d'erreur
// en français (message) et en anglais (messageEn)
const regles = [
  {
    id: "nom",
    estValide: function (valeur) {
      return valeur.length >= 2;
    },
    message: "Entrez votre nom (au moins 2 caractères).",
    messageEn: "Enter your name (at least 2 characters)."
  },
  {
    id: "courriel",
    estValide: function (valeur) {
      return formatCourriel.test(valeur);
    },
    message: "Entrez un courriel valide, par exemple nom@exemple.com.",
    messageEn: "Enter a valid email, for example name@example.com."
  },
  {
    id: "message",
    estValide: function (valeur) {
      return valeur.length >= 10;
    },
    message: "Écrivez un message d'au moins 10 caractères.",
    messageEn: "Write a message of at least 10 characters."
  }
];

// Affiche l'erreur sous le champ (une seule fois, même si on réessaie)
function afficherErreur(champ, message) {
  const bloc = champ.parentElement; // le <div class="champ">
  const idErreur = "erreur-" + champ.id;
  let texteErreur = document.getElementById(idErreur);

  if (texteErreur === null) {
    texteErreur = document.createElement("p");
    texteErreur.classList.add("message-erreur");
    texteErreur.id = idErreur;
    bloc.appendChild(texteErreur);
  }

  texteErreur.textContent = message;
  bloc.classList.add("champ--erreur");
  champ.setAttribute("aria-invalid", "true");
  champ.setAttribute("aria-describedby", idErreur); // lu par les lecteurs d'écran
}

// Retire l'erreur du champ
function effacerErreur(champ) {
  const texteErreur = document.getElementById("erreur-" + champ.id);
  if (texteErreur !== null) {
    texteErreur.remove();
  }
  champ.parentElement.classList.remove("champ--erreur");
  champ.removeAttribute("aria-invalid");
  champ.removeAttribute("aria-describedby");
}

// Vérifie un champ selon sa règle ; retourne true s'il est valide
function verifierChamp(regle) {
  const champ = document.getElementById(regle.id);
  const valeur = champ.value.trim(); // trim() enlève les espaces au début et à la fin
  const valide = regle.estValide(valeur);

  if (valide) {
    effacerErreur(champ);
  } else {
    // Ternaire : message dans la langue actuelle (variable langue de langue.js)
    afficherErreur(champ, (langue === "fr") ? regle.message : regle.messageEn);
  }
  return valide;
}

// Affiche le message général sous le bouton Envoyer
function afficherMessage(texte, estSucces) {
  const boite = document.getElementById("message-formulaire");
  boite.classList.remove("message-formulaire--succes", "message-formulaire--erreur");
  boite.classList.add(estSucces ? "message-formulaire--succes" : "message-formulaire--erreur");
  boite.textContent = texte;
}

function initialiserFormulaire() {
  const formulaire = document.getElementById("formulaire-contact");

  formulaire.addEventListener("submit", function (evenement) {
    evenement.preventDefault(); // on reste sur la page

    let premierChampEnErreur = null;

    // On vérifie tous les champs (pour montrer toutes les erreurs d'un coup)
    for (let i = 0; i < regles.length; i++) {
      const valide = verifierChamp(regles[i]);
      if (!valide && premierChampEnErreur === null) {
        premierChampEnErreur = document.getElementById(regles[i].id);
      }
    }

    if (premierChampEnErreur !== null) {
      afficherMessage((langue === "fr") ? "Veuillez corriger les champs en rouge." : "Please correct the fields in red.", false);
      premierChampEnErreur.focus();
      return;
    }

    // Tout est valide : on remercie avec le prénom (le premier mot du nom)
    const prenom = document.getElementById("nom").value.trim().split(" ")[0];
    const texteMerci = (langue === "fr")
      ? "Merci " + prenom + ", votre message a été préparé."
      : "Thank you " + prenom + ", your message is ready.";
    afficherMessage(texteMerci, true);
    formulaire.reset();
  });

  // Pendant la saisie : si un champ est en erreur, on revérifie à chaque touche
  // pour que l'erreur disparaisse dès que la valeur devient correcte.
  for (let i = 0; i < regles.length; i++) {
    const champ = document.getElementById(regles[i].id);
    champ.addEventListener("input", function () {
      if (champ.getAttribute("aria-invalid") === "true") {
        verifierChamp(regles[i]);
      }
    });
  }

  // Bouton FR/EN : les erreurs déjà affichées sont revérifiées pour
  // s'afficher dans la nouvelle langue ; le message général est effacé.
  document.getElementById("btn-langue").addEventListener("click", function () {
    for (let i = 0; i < regles.length; i++) {
      const champ = document.getElementById(regles[i].id);
      if (champ.getAttribute("aria-invalid") === "true") {
        verifierChamp(regles[i]);
      }
    }
    const boite = document.getElementById("message-formulaire");
    boite.textContent = "";
    boite.classList.remove("message-formulaire--succes", "message-formulaire--erreur");
  });
}
