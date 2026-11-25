// ==========================================================
// langue.js : bouton FR/EN (étape 5b)
// Chargé AVANT les autres scripts (voir l'ordre dans index.html) :
// la variable langue est donc connue aussi dans projets.js et formulaire.js.
// ==========================================================

// Langue actuelle du site : français par défaut
let langue = "fr";

// Tous les textes de la page, dans les deux langues.
// La clé = l'id de l'élément HTML, la valeur = le texte à afficher.
const traductions = {
  fr: {
    // Menu
    "nav-accueil": "Accueil",
    "nav-apropos": "À propos",
    "nav-competences": "Compétences",
    "nav-projets": "Projets",
    "nav-contact": "Contact",
    // Accueil
    "accueil-salut": "> bonjour, je suis",
    "accueil-titre": "Étudiant en programmation informatique",
    "accueil-intro": "Bienvenue sur mon portfolio. Vous y trouverez mon parcours, mes compétences et les projets que j'ai réalisés.",
    "accueil-btn-projets": "Voir mes projets",
    "accueil-btn-contact": "Me contacter",
    // À propos
    "titre-apropos": "À propos",
    "apropos-p1": "Je m'appelle Hilqya Kabemba Mupoyi et je suis étudiant en programmation informatique au Collège La Cité, à Ottawa. Avant d'arriver au Canada, j'ai obtenu un diplôme d'études secondaires en électronique en République démocratique du Congo, ce qui m'a donné le goût de comprendre comment les choses fonctionnent, du circuit jusqu'au code.",
    "apropos-p2": "Ma formation me fait toucher à plusieurs domaines : développement web (HTML, CSS, JavaScript), programmation orientée objet en C#, applications Android en Kotlin, bases de données SQL Server, réseaux et systèmes Linux.",
    "apropos-p3": "J'aime surtout les projets qui répondent à un vrai besoin. C'est pour ça que je développe Lungeni, une plateforme qui facilite les inscriptions dans des écoles de Kinshasa. Je parle couramment français et je communique bien en anglais, à l'oral comme à l'écrit.",
    // Compétences
    "titre-competences": "Compétences",
    "comp-1": "HTML et CSS",
    "comp-2": "JavaScript",
    "comp-3": "Java",
    "comp-4": "C# et .NET",
    "comp-5": "Kotlin et Android",
    "comp-6": "Modélisation de bases de données",
    "comp-7": "Git et GitHub",
    "comp-8": "Linux et Bash",
    // Projets
    "titre-projets": "Projets",
    "projets-intro": "Choisissez une catégorie pour filtrer les projets.",
    "filtre-tous": "Tous",
    "filtre-web": "Web",
    "filtre-mobile": "Mobile",
    "filtre-logiciel": "Logiciel",
    "filtre-base-de-donnees": "Base de données",
    // Contact
    "titre-contact": "Contact",
    "contact-texte-debut": "Écrivez-moi à",
    "contact-texte-fin": "ou avec le formulaire ci-dessous.",
    "label-nom": "Nom",
    "label-courriel": "Courriel",
    "label-message": "Message",
    "bouton-envoyer": "Envoyer",
    // Pied de page
    "pied-texte": "Fait avec HTML, CSS et JavaScript"
  },
  en: {
    // Menu
    "nav-accueil": "Home",
    "nav-apropos": "About",
    "nav-competences": "Skills",
    "nav-projets": "Projects",
    "nav-contact": "Contact",
    // Accueil
    "accueil-salut": "> hello, I am",
    "accueil-titre": "Computer programming student",
    "accueil-intro": "Welcome to my portfolio. Here you will find my background, my skills and the projects I have built.",
    "accueil-btn-projets": "See my projects",
    "accueil-btn-contact": "Contact me",
    // À propos
    "titre-apropos": "About",
    "apropos-p1": "My name is Hilqya Kabemba Mupoyi and I am a computer programming student at Collège La Cité, in Ottawa. Before coming to Canada, I earned a high school diploma in electronics in the Democratic Republic of the Congo, which gave me the desire to understand how things work, from the circuit to the code.",
    "apropos-p2": "My program covers several fields: web development (HTML, CSS, JavaScript), object-oriented programming in C#, Android apps in Kotlin, SQL Server databases, networking and Linux systems.",
    "apropos-p3": "I especially enjoy projects that meet a real need. That is why I am building Lungeni, a platform that makes enrolment easier in schools in Kinshasa. I speak French fluently and I communicate well in English, both spoken and written.",
    // Compétences
    "titre-competences": "Skills",
    "comp-1": "HTML and CSS",
    "comp-2": "JavaScript",
    "comp-3": "Java",
    "comp-4": "C# and .NET",
    "comp-5": "Kotlin and Android",
    "comp-6": "Database modelling",
    "comp-7": "Git and GitHub",
    "comp-8": "Linux and Bash",
    // Projets
    "titre-projets": "Projects",
    "projets-intro": "Choose a category to filter the projects.",
    "filtre-tous": "All",
    "filtre-web": "Web",
    "filtre-mobile": "Mobile",
    "filtre-logiciel": "Software",
    "filtre-base-de-donnees": "Database",
    // Contact
    "titre-contact": "Contact",
    "contact-texte-debut": "Email me at",
    "contact-texte-fin": "or use the form below.",
    "label-nom": "Name",
    "label-courriel": "Email",
    "label-message": "Message",
    "bouton-envoyer": "Send",
    // Pied de page
    "pied-texte": "Made with HTML, CSS and JavaScript"
  }
};

// Bouton FR/EN dans l'en-tête
const boutonLangue = document.getElementById("btn-langue");

// Au clic : on change de langue et on remplace tous les textes
boutonLangue.addEventListener("click", function () {
  // 1. Opérateur ternaire : si on est en français, on passe en anglais, sinon en français
  langue = (langue === "fr") ? "en" : "fr";

  // 2. Boucle for...in : on parcourt chaque clé (= chaque id) des traductions
  for (const id in traductions[langue]) {
    const element = document.getElementById(id);
    // On vérifie que l'élément existe avant de changer son texte
    if (element !== null) {
      element.textContent = traductions[langue][id];
    }
  }

  // 3. Le bouton affiche la langue vers laquelle on peut basculer
  boutonLangue.textContent = (langue === "fr") ? "EN" : "FR";
  boutonLangue.setAttribute("aria-label", (langue === "fr") ? "Switch to English" : "Passer en français");

  // 4. Attribut lang de <html> : les lecteurs d'écran lisent avec le bon accent
  document.querySelector("html").setAttribute("lang", langue);

  // 5. Titre de l'onglet du navigateur
  document.title = (langue === "fr") ? "Hilqya Kabemba Mupoyi · Portfolio" : "Hilqya Mupoyi – Portfolio";

  // 6. Texte alternatif de la photo (lu par les lecteurs d'écran)
  const photo = document.querySelector(".photo-cadre img");
  photo.setAttribute("alt", (langue === "fr") ? "Photo de Hilqya Kabemba Mupoyi" : "Photo of Hilqya Kabemba Mupoyi");

  // 7. aria-label des liens GitHub et LinkedIn (il y en a dans l'accueil et dans Contact).
  // Le nom du réseau est le premier mot du lien : « GitHub ↗ » donne « GitHub ».
  const liensReseaux = document.querySelectorAll(".reseau");
  for (let i = 0; i < liensReseaux.length; i++) {
    const nomReseau = liensReseaux[i].textContent.split(" ")[0];
    const finTexte = (langue === "fr") ? " (nouvel onglet)" : " (new tab)";
    liensReseaux[i].setAttribute("aria-label", nomReseau + finTexte);
  }
});

// Note : projets.js, formulaire.js et menu.js ajoutent aussi leur propre
// écouteur "click" sur ce bouton. Celui-ci est ajouté en premier (ce script
// est chargé avant les autres), donc la variable langue est déjà à jour
// quand les autres écouteurs s'exécutent.
