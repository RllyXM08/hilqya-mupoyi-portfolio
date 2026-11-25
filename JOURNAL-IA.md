# Journal d'usage de l'IA : Portfolio (projet final)

- Étudiant : Hilqya Kabemba Mupoyi
- Outils utilisés : Claude (Anthropic)
- J'ai utilisé une IA : oui

## Entrées

### Entrée 1
- Date : 25 novembre 2026
- Outil : Claude
- Besoin / prompt (résumé) : lire les consignes du module 12, faire un plan, proposer la structure HTML des 5 sections (Accueil, À propos, Compétences, Projets, Contact).
- Ce que l'IA a proposé : un plan en 6 étapes et le fichier index.html (une page, navigation par ancres).
- Ce que j'ai gardé / modifié / rejeté : J'ai gardé la structure proposée (une page, 5 sections avec ancres, header/nav/main/footer, formulaire avec labels et novalidate) parce qu'elle correspondait à l'énoncé du module 12. J'ai créé les dossiers et fichiers moi-même dans PowerShell, et j'ai corrigé ma configuration Git (courriel) et le clone du dépôt. Plus tard, j'ai changé le logo pour « hilqya@portfolio:~$ » à l'étape 2. Je n'ai rien rejeté à cette étape.
- Ce que j'ai appris ou vérifié moi-même : J'ai testé la page avec Live Server : les liens du menu mènent à la bonne section, le clic sur un label place le curseur dans le bon champ, et la console affiche le message du script sans erreur. J'ai appris à quoi servent novalidate (laisser le JavaScript valider le formulaire), les ancres avec id, data-categorie pour les filtres et aria-expanded pour le menu. J'ai aussi appris à corriger ma configuration Git quand le courriel était mal écrit.
### Entrée 2
- Date : 25 novembre 2026
- Outil : Claude Code (Sonnet 5.5)
- Besoin / prompt (résumé) : Étape 2A : ajustements HTML (polices, photo, compétences)
- Mes vérifications : J'ai ouvert le site avec Live Server et vérifié dans l'onglet Network que la feuille Google Fonts se charge avec le statut 200. L'accueil affiche « > bonjour, je suis », mon nom, mon titre et l'emplacement de la photo, le logo hilqya@portfolio:~$ est là et le bouton de thème a été retiré. J'ai compté les compétences (au moins 6) et cliqué sur chaque lien du menu. Dans la console, le message du script s'affichait ; il restait les erreurs 404 de la photo (pas encore déposée) et du favicon, corrigé à l'étape suivante.

### Entrée 3
- Date : 25 novembre 2026
- Outil : Claude Code (Sonnet 5.5)
- Besoin / prompt (résumé) : Étape 2B : CSS de base (variables, header, accueil, photo, favicon)
- Mes vérifications : J'ai rechargé le site avec Live Server (Ctrl+F5). Dans l'onglet Network (filtre Font), les 4 fichiers de police IBM Plex Mono et Inter se chargent avec le statut 200. Dans la console, l'erreur favicon.ico a disparu grâce au favicon.svg ; il restait seulement le 404 de la photo, que je n'avais pas encore ajoutée. En vue mobile (412 px), seul le bouton Menu est visible, la photo est sous le texte et il n'y a pas de défilement horizontal. En vue tablette (1032 px), le menu est en ligne et le texte et la photo sont côte à côte, avec le cadre ambre décalé derrière la photo. J'ai repéré que sur très grand écran le contenu n'était pas centré ; je l'ai fait corriger à l'étape 2C.

### Entrée 4
- Date : 25 novembre 2026
- Outil : Claude Code (Sonnet 5.5)
- Besoin / prompt (résumé) : Étape 2C : CSS des sections, compétences, projets, formulaire et pied de page
- Remplacement des notions non vues en cours par les méthodes des modules 4 à 7
- Photo ajoutée en couleur originale (1086 × 1094), dimensions de l'img mises à jour ; vérification finale des méthodes du cours.
- Mes vérifications : J'ai rechargé le site avec Live Server (Ctrl+F5). La photo est en couleur avec le cadre ambre décalé. Sur grand écran, le contenu est centré, les traits entre les sections vont d'un bord à l'autre et chaque titre commence par « // » en ambre. En cliquant sur les liens du menu, chaque titre reste visible sous le header. Au clavier (Tab), chaque lien, filtre, bouton et champ devient ambre. Avec des cartes de test collées dans la console, j'ai vu 1 colonne en mobile, 2 sur iPad et 3 sur grand écran. À 360 px, il n'y a pas de défilement horizontal. La console n'a pas d'erreur, Lighthouse ne signale pas de problème de contraste et le CSS passe le validateur W3C.

### Entrée 5
- Date : 25 novembre 2026
- Outil : Claude Code
- Besoin / prompt (résumé) : Étape 3 (commit 04cd3f0) : projets en JavaScript, bouton flottant Haut de page, liens GitHub et LinkedIn visibles.
- Ce que l'IA a proposé :
  - Un nouveau fichier `js/projets.js` : un tableau de 6 projets, la fonction `creerCarte` (cartes créées avec `createElement` et `textContent`, bouton Détails avec `hidden` et `aria-expanded`), `afficherProjets` et `activerFiltres` (filtre par catégorie avec `classList.toggle` et `aria-pressed`).
  - `script.js` : une balise `type="module"` qui importe `initialiserProjets` et l'appelle (avant, il n'y avait qu'un `console.log`).
  - Dans `index.html` : les liens GitHub et LinkedIn (classe `.reseau`) dans l'accueil et dans Contact, et un bouton flottant `↑` fixé en bas à droite à la place du lien « Haut de page » ; l'id `haut` déplacé sur le `<body>`.
  - Dans `styles.css` : les styles des liens `.reseau`, du bouton `.bouton-haut` (`position: fixed`) et un bas de page plus grand sur mobile pour que le bouton ne cache pas le texte.
- Ce que j'ai gardé / modifié / rejeté : J'ai gardé le tableau d'objets des projets, les cartes créées en JavaScript, le bouton Détails et le filtre. J'ai demandé en plus un bouton « Haut de page » flottant et des liens GitHub et LinkedIn visibles dans l'accueil et le contact, au lieu du pied de page. Le premier résultat n'était pas bon (le bouton cachait le texte sur mobile), donc j'ai demandé de le corriger. Plus tard, j'ai réécrit les textes des projets pour qu'ils correspondent à mon CV.
- Mes vérifications : J'ai ouvert le site avec Live Server : les 6 cartes s'affichent, les filtres montrent le bon nombre de projets et le bouton Détails s'ouvre et se ferme. Les pastilles GitHub et LinkedIn ouvrent la bonne page dans un nouvel onglet. Le bouton Haut de page ramène en haut ; sur mobile, j'ai vu qu'il cachait le texte du pied de page, donc j'ai demandé une correction, puis j'ai revérifié. Au clavier, les pastilles deviennent ambre, et la console n'a pas d'erreur.

### Entrée 6
- Date : 25 novembre 2026
- Outil : Claude Code
- Besoin / prompt (résumé) : Étape 4 (commit 86a9106) : menu mobile et validation du formulaire en JavaScript.
- Ce que l'IA a proposé :
  - `js/menu.js` : la fonction `initialiserMenu` avec `changerMenu` (classe `nav--ouverte`, `aria-expanded`), la fermeture par clic sur un lien et par la touche Échap.
  - `js/formulaire.js` : une règle par champ (nom d'au moins 2 caractères, courriel testé avec une expression régulière, message d'au moins 10 caractères), les erreurs sous les champs (`afficherErreur`, `effacerErreur`, `aria-invalid`, `aria-describedby`), `preventDefault`, le focus sur le premier champ faux, et `reset` après un envoi valide.
  - `script.js` : deux imports de plus et les appels `initialiserMenu()` et `initialiserFormulaire()`.
- Ce que j'ai gardé / modifié / rejeté : J'ai demandé à Claude de faire l'étape 4 directement. J'ai gardé le menu mobile (Menu/Fermer, Échap, fermeture au clic sur un lien) et la validation du formulaire (erreurs sous les champs, focus sur le premier champ en erreur, message de remerciement). J'ai gardé la regex du courriel, même si elle n'est pas vue en cours, parce qu'elle est commentée et que je peux l'expliquer. La retouche CSS de la bordure rouge a été effacée par VS Code ; j'ai fermé mes onglets pour qu'elle soit remise. Je n'ai rien rejeté à cette étape.
- Mes vérifications : En mode mobile, le bouton Menu ouvre le menu et devient « Fermer » ; la touche Échap et le clic sur un lien le referment. Formulaire envoyé vide : les trois messages d'erreur s'affichent sous les champs, le message général est en rouge et le focus va sur le champ Nom. Avec un courriel invalide (« abc »), l'erreur du courriel apparaît et disparaît dès que je corrige le champ. Avec des valeurs valides, le message vert « Merci [prénom] » s'affiche et les champs se vident ; aucun message n'est réellement envoyé. J'ai relu la regex du courriel pour pouvoir l'expliquer.

### Entrée 7
- Date : 25 novembre 2026
- Outil : Claude Code
- Besoin / prompt (résumé) : Étape 5a (commit 688863b) : section À propos.
- Ce que l'IA a proposé : dans `index.html`, le texte qui remplace le paragraphe provisoire de la section À propos : trois paragraphes (`apropos-p1`, `apropos-p2`, `apropos-p3`) sur mon parcours, ma formation et Lungeni. Rien d'autre n'a changé dans ce commit.
- Ce que j'ai gardé / modifié / rejeté : Le texte a été mis en forme par Claude à partir de mon CV et des informations que je lui ai données (mon parcours en électronique en RDC, ma formation à La Cité, Lungeni, mes langues). Je l'ai relu et gardé parce qu'il correspond à mon parcours. Claude Code a aussi ajouté une liste de compétences sous le texte ; je l'ai fait supprimer parce qu'elle répétait la section Compétences.
- Mes vérifications : J'ai rechargé la page (Ctrl+F5) : les 3 paragraphes d'À propos s'affichent. Après la suppression de la liste en double, il ne reste qu'une seule liste de compétences sur la page. En mode mobile (375 px), le texte reste lisible, et la console n'a pas d'erreur. J'ai relu le texte pour vérifier qu'il correspond à mon parcours.

### Entrée 8
- Date : 25 novembre 2026
- Outil : Claude Code
- Besoin / prompt (résumé) : Étape 5b (commit 8dee52d) : bouton FR/EN et scripts sans modules.
- Ce que l'IA a proposé :
  - Un nouveau fichier `js/langue.js` : la variable `langue`, l'objet `traductions` en français et en anglais (la clé est l'id de l'élément), et l'écouteur du bouton FR/EN (ternaire, boucle `for...in`, mise à jour de `lang`, du titre de l'onglet, du `alt` de la photo et des `aria-label` des liens `.reseau`).
  - Dans `index.html` : un id sur chaque texte à traduire, le bouton `btn-langue`, et les 5 balises `<script defer>` à la place de `type="module"` (donc retrait des `export`, des `import` et de leur utilisation dans `script.js`).
  - Dans `projets.js` : les textes des projets en anglais (`titreEn`, `descriptionEn`, `detailsEn`), les cartes recréées au changement de langue avec le même filtre. Dans `menu.js` et `formulaire.js` : le texte « Fermer / Close » et les messages d'erreur dans la langue choisie.
  - Dans `styles.css` : le style du bouton de langue et le groupe de boutons de l'en-tête.
- Ce que j'ai gardé / modifié / rejeté : J'ai gardé le bouton FR/EN avec l'objet de traductions, la boucle for...in et la ternaire pour changer de langue, ainsi que la traduction des cartes de projets et des erreurs du formulaire. J'ai demandé d'ajouter la traduction du titre de l'onglet, du texte alt de la photo et des aria-label des liens GitHub et LinkedIn. J'ai aussi fait retirer les modules (import/export) pour des scripts avec defer, parce que je pensais qu'ils n'étaient pas vus en cours. Plus tard, j'ai vérifié sur Coursia que le module 9 les enseigne, et je suis revenu aux modules (voir l'entrée 10).
- Mes vérifications : En cliquant sur EN, tous les textes passent en anglais, le bouton affiche FR et le titre de l'onglet change ; un nouveau clic remet tout en français. Avec un filtre actif, le changement de langue garde le filtre, et les cartes et les Détails sont en anglais. Le formulaire envoyé vide affiche les erreurs en anglais. Dans l'onglet Elements, j'ai vérifié que le alt de la photo et l'aria-label du lien GitHub changent avec la langue. Après le passage aux scripts avec defer, j'ai refait les tests du filtre, des Détails, du menu mobile, du formulaire et du bouton Haut de page, sans erreur dans la console.

### Entrée 9
- Date : 25 novembre 2026
- Outil : Claude Code
- Besoin / prompt (résumé) : préparer mon oral de 5 minutes dans `PRESENTATION.md` (fichier personnel, non publié, ignoré par Git).
- Ce que l'IA a proposé :
  - Une première version : plan de 5 minutes, explication des 5 fichiers JavaScript et du CSS (media queries, flexbox, `rem`), 15 questions probables et 3 phrases à dire pour chaque projet.
  - Une deuxième version : déroulé de 300 secondes avec une phrase par projet, 16 questions (9 techniques et 7 sur les projets), les pièges possibles et une annexe de questions de réserve.
  - Des mises à jour : les notions vues ou non vues dans Coursia d'après ma vérification, le retour aux modules et la question « Pourquoi Live Server ? ».
- Ce que j'ai gardé / modifié / rejeté : J'ai gardé le déroulé minuté, les questions probables avec leurs réponses courtes et la liste des pièges. J'ai fait vérifier sur Coursia les notions dont on n'était pas sûr et j'ai choisi lesquelles garder (regex, dataset, aria-*) avec une explication pour l'oral. Après mon retour aux modules ES, les questions sur defer ont été réécrites et une question sur Live Server a été ajoutée. Les réponses sur ma part personnelle dans mes projets, je les écris moi-même.
- Mes vérifications : J'ai vérifié avec git status que PRESENTATION.md n'est pas mis en ligne. J'ai fait vérifier sur le site Coursia quelles notions de mon code sont vues en cours (calc, for...in, ternaire, modules ES) et lesquelles ne le sont pas (dataset, aria-*, regex en JavaScript), puis j'ai choisi quoi garder et j'ai lu les explications prévues pour l'oral. Il me reste à remplir mes réponses personnelles, à chronométrer mon oral et à répéter les questions.

### Entrée 10
- Date : 25 novembre 2026
- Outil : Claude Code (Opus 5.5, puis Sonnet 5.5)
- Besoin / prompt (résumé) : aligner les textes des projets sur mon CV, ajouter un 7e projet (Magasin de téléphones), traduire les pastilles de technologies quand on clique sur EN, puis revenir aux modules ES (`type="module"`) pour respecter le module 9 de Coursia.
- Ce que l'IA a proposé :
  - Mettre à jour les textes FR et EN des projets dans `projets.js` et ajouter le Magasin de téléphones comme carte séparée (catégorie Base de données).
  - Traduire les pastilles avec un tableau `technosEn` dans chaque projet et un ternaire dans `creerCarte`, parce que les pastilles n'ont pas d'id et ne peuvent pas aller dans `traductions`.
  - Pour le retour aux modules : `export let langue` dans `langue.js`, `import` et `export` dans les autres fichiers, une seule balise `<script type="module">`, et Live Server pour ouvrir le site (les modules ne marchent pas en double-clic).
  - Des tests dans Chrome sans interface sur une copie servie en local (filtres, Détails, FR/EN, pastilles, menu mobile, formulaire), sans erreur JavaScript.
- Ce que j'ai vérifié et décidé moi-même :
  - J'ai vérifié le contenu de Coursia (modules 1 à 9 + projet final) : `calc()`, `for...in`, ternaire et `querySelector` sont vus ; `defer` est seulement mentionné ; la regex en JS, `dataset` et `aria-*` ne sont pas vus.
  - J'ai choisi de garder la regex, `dataset` et `aria-*`, et de revenir aux modules ES.
  - J'ai fait des tests à la main avec Live Server puis sur le site en ligne : filtres (7/1/2/2/2), panneaux Détails, pastilles FR/EN, formulaire (champs vides, courriel invalide, envoi valide) en FR et en EN, menu mobile.
  - J'ai validé le site avec le validateur W3C sur le site en ligne le 25 novembre 2026 : HTML : 0 erreur et 0 avertissement, CSS : 0 erreur et 4 avertissements « background-color et border-color de la même couleur » (`.bouton--plein` et `.filtre--actif`, des boutons pleins voulus).
  - J'ai relu les diffs et donné mon OK avant chaque commit.
