// =====================================================================
//  ENTRAÎNEMENT BTS — banque de questions
//  Source : annales officielles BTS Métiers de l'Audiovisuel, option Son
//  (sujets et corrigés 2016-2025 + sujet zéro, épreuve E3/U3
//  « Physique et Technique des Équipements et Supports »).
//
//  Champs de chaque question :
//    id         : identifiant unique
//    option     : "son" (seule option traitée pour l'instant)
//    annee      : année de session ("0" pour le sujet zéro, "cours" pour
//                 une question de contrôle de compréhension liée à une
//                 leçon de cours.js plutôt qu'à une annale)
//    matiere    : "acoustique" | "technologie" | "electricite"
//    chapitre   : (questions "cours" uniquement) titre du chapitre de
//                 cours.js concerné, ex. "Généralités"
//    lecon      : (questions "cours" uniquement) titre précis de la leçon
//                 de cours.js concernée, ex. "1.2 La science du son"
//    question   : énoncé
//    choix      : 4 propositions (la bonne est toujours en position 0 dans
//                 les données ; le composant les mélange à l'affichage)
//    correct    : index de la bonne réponse dans `choix` (0 ici)
//    explication: correction courte
//    source     : référence exacte (sujet/corrigé, numéro de question, ou
//                 pour les questions "cours" : diapo du support de cours)
//    verifie    : true si la réponse vient d'un corrigé officiel publié
//                 (2016 et 2017) ou directement du support de cours pour
//                 les questions "cours", false si calculée/vérifiée par
//                 recoupement à partir de l'énoncé officiel (formules et
//                 valeurs du formulaire ou de l'énoncé, sans corrigé
//                 disponible)
// =====================================================================

export const MATIERES = {
  acoustique: "Physique acoustique",
  technologie: "Technologie du son",
  electricite: "Électricité",
};

export const OPTIONS = {
  son: "Son",
};

export const questions = [

  // ================================================== ACOUSTIQUE ======
  {
    id: "ac-2016-1", option: "son", annee: "2016", matiere: "acoustique",
    question: "Sujet 2016 (24 Heures du Mans) : une voiture émet un niveau de pression acoustique de 130 dB SPL à 1 m. Quel est le niveau perçu à 20 m, en propagation en champ libre (source sphérique) ?",
    choix: ["104 dB SPL", "110 dB SPL", "117 dB SPL", "91 dB SPL"],
    correct: 0,
    explication: "Atténuation géométrique sphérique : L(r) = L(1 m) − 20·log(r) = 130 − 20·log(20) ≈ 104 dB SPL.",
    source: "BTS Son 2016, Partie 2 — Physique, exercice Acoustique",
    verifie: true,
  },
  {
    id: "ac-2016-2", option: "son", annee: "2016", matiere: "acoustique",
    question: "Sujet 2016 : une salle a un volume V = 15 m³ et une surface d'absorption équivalente A = 1,1 m². Quel TR60 donne la formule de Sabine (TR60 = 0,1625·V/A) ?",
    choix: ["2,2 s", "1,1 s", "3,4 s", "0,8 s"],
    correct: 0,
    explication: "TR60 = 0,1625 × 15 / 1,1 ≈ 2,2 s (valeur du corrigé officiel).",
    source: "BTS Son 2016, corrigé, Acoustique architecturale 6.2",
    verifie: true,
  },
  {
    id: "ac-2016-3", option: "son", annee: "2016", matiere: "acoustique",
    question: "D'après le corrigé 2016, quel phénomène explique le changement de timbre perçu quand une voiture de course s'approche puis s'éloigne d'un micro ?",
    choix: ["L'effet Doppler", "La diffraction", "Le filtrage en peigne", "La résonance de Helmholtz"],
    correct: 0,
    explication: "Le spectre se décale vers l'aigu à l'approche puis vers le grave à l'éloignement : c'est l'effet Doppler.",
    source: "BTS Son 2016, corrigé 1.10",
    verifie: true,
  },
  {
    id: "ac-2017-1", option: "son", annee: "2017", matiere: "acoustique",
    question: "Selon le corrigé BTS Son 2017, comment est défini le temps de réverbération TR60 d'une salle ?",
    choix: [
      "La durée nécessaire pour que le niveau baisse de 60 dB après l'arrêt de la source",
      "La durée nécessaire pour atteindre le niveau maximal après le déclenchement de la source",
      "Le temps que met le son à parcourir la plus grande diagonale de la salle",
      "Le temps entre l'émission directe et la première réflexion",
    ],
    correct: 0,
    explication: "Définition officielle du corrigé 2017 (question 3.9).",
    source: "BTS Son 2017, corrigé 3.9",
    verifie: true,
  },
  {
    id: "ac-2017-2", option: "son", annee: "2017", matiere: "acoustique",
    question: "Sujet 2017 : une salle rectangulaire a une longueur Lx = 6,32 m. Quelle est la fréquence du mode propre axial (5,0,0), avec f = (c/2)·(n/Lx) et c = 340 m/s ?",
    choix: ["≈135 Hz", "≈68 Hz", "≈270 Hz", "≈43 Hz"],
    correct: 0,
    explication: "f = (340/2) × (5/6,32) ≈ 135 Hz.",
    source: "BTS Son 2017, corrigé 3.13",
    verifie: true,
  },
  {
    id: "ac-2020-1", option: "son", annee: "2020", matiere: "acoustique",
    question: "Sujet 2020, exercice « Effet de phasing » : la première fréquence annulée par interférence destructive vaut f0 = π / (0,0185·Δd). Pour un écart de marche Δd = 10 cm, que vaut f0 ?",
    choix: ["≈1 700 Hz", "≈850 Hz", "≈3 400 Hz", "≈540 Hz"],
    correct: 0,
    explication: "f0 = π / (0,0185 × 0,1) ≈ 1 698 Hz, à partir de la formule donnée dans le sujet (question 6.8.2).",
    source: "BTS Son 2020, sujet, exercice 6 (phasing)",
    verifie: false,
  },
  {
    id: "ac-0-1", option: "son", annee: "0", matiere: "acoustique",
    question: "Sujet zéro : une source sonore sphérique a un niveau de puissance Nw = 125 dB SPL. Quel niveau N1 obtient-on à 10 m (N1 = Nw − 20·log(x) − 11) ?",
    choix: ["≈94 dB SPL", "≈104 dB SPL", "≈84 dB SPL", "≈114 dB SPL"],
    correct: 0,
    explication: "N1 = 125 − 20·log(10) − 11 = 125 − 20 − 11 = 94 dB SPL.",
    source: "BTS Son, sujet zéro, Étude acoustique 3.4",
    verifie: false,
  },
  {
    id: "ac-0-2", option: "son", annee: "0", matiere: "acoustique",
    question: "Même scénario (source sphérique, Nw = 125 dB SPL) mais à 40 m : quel niveau N1 obtient-on ?",
    choix: ["≈82 dB SPL", "≈88 dB SPL", "≈76 dB SPL", "≈94 dB SPL"],
    correct: 0,
    explication: "N1 = 125 − 20·log(40) − 11 ≈ 125 − 32 − 11 = 82 dB SPL.",
    source: "BTS Son, sujet zéro, Étude acoustique 3.4",
    verifie: false,
  },
  {
    id: "ac-2021-1", option: "son", annee: "2021", matiere: "acoustique",
    question: "D'après le formulaire officiel BTS Son 2021, quelle formule donne l'atténuation géométrique d'une onde cylindrique (ligne source), par opposition à une onde sphérique (Lp(r) = Lp(1 m) − 20·log(r)) ?",
    choix: [
      "Lp(r) = Lp(1 m) − 10·log(r)",
      "Lp(r) = Lp(1 m) − 20·log(r)",
      "Lp(r) = Lp(1 m) − 6·log(r)",
      "Lp(r) = Lp(1 m) − 3·log(r)",
    ],
    correct: 0,
    explication: "Une source cylindrique (line array) atténue deux fois moins vite qu'une source ponctuelle : −10·log(r) au lieu de −20·log(r).",
    source: "BTS Son 2021, formulaire de physique",
    verifie: false,
  },
  {
    id: "ac-2021-2", option: "son", annee: "2021", matiere: "acoustique",
    question: "Le formulaire 2021 donne l'addition des niveaux de n sources : Ltotale = 10·log(Σ 10^(Li/10)). Deux sources identiques émettent chacune 100 dB. Quel est le niveau total ?",
    choix: ["≈103 dB", "≈106 dB", "≈200 dB", "≈100 dB"],
    correct: 0,
    explication: "Ltotale = 10·log(10^10 + 10^10) ≈ 103 dB. Deux sources identiques → +3 dB.",
    source: "BTS Son 2021, formulaire de physique",
    verifie: false,
  },
  {
    id: "ac-2022-1", option: "son", annee: "2022", matiere: "acoustique",
    question: "Le formulaire BTS Son 2022 donne une valeur approximative pour l'impédance acoustique caractéristique de l'air ρ₀·c (utilisée pour relier intensité et pression en champ direct). Quelle est cette valeur ?",
    choix: ["≈400 (SI, rayls)", "≈40 (SI, rayls)", "≈4000 (SI, rayls)", "≈1,2 (SI, rayls)"],
    correct: 0,
    explication: "ρ₀·c ≈ 400 rayls (relation I = p²/(ρ₀·c) du formulaire 2022).",
    source: "BTS Son 2022, formulaire de physique",
    verifie: false,
  },
  {
    id: "ac-2018-1", option: "son", annee: "2018", matiere: "acoustique",
    question: "Sujet 2018 : une captation doit se faire dans une salle de mairie décrite comme « très réverbérante ». Quel type de directivité de microphone privilégier pour limiter la prise du champ réverbéré ?",
    choix: [
      "Un micro directif (cardioïde/hypercardioïde)",
      "Un micro omnidirectionnel",
      "Un micro bidirectionnel",
      "Peu importe, la directivité n'a pas d'effet",
    ],
    correct: 0,
    explication: "Un micro directif pointé sur la source limite le rapport champ réverbéré / champ direct capté.",
    source: "BTS Son 2018, sujet, exercice 1.1.1",
    verifie: false,
  },
  {
    id: "ac-2019-1", option: "son", annee: "2019", matiere: "acoustique",
    question: "Sujet 2019 : un coup de pied sur un ballon génère 2 Pa de pression acoustique sur la membrane d'un micro. Quel est le niveau correspondant en dB SPL (Pref = 2.10⁻⁵ Pa) ?",
    choix: ["100 dB SPL", "94 dB SPL", "120 dB SPL", "86 dB SPL"],
    correct: 0,
    explication: "L = 20·log(2 / 2.10⁻⁵) = 20·log(10⁵) = 100 dB SPL.",
    source: "BTS Son 2019, sujet, exercice 1.3-1.4",
    verifie: false,
  },

  // ======================================= COURS — GÉNÉRALITÉS ========
  //  Contrôle de compréhension lié aux leçons de cours.js
  //  (matière Acoustique, chapitre « Généralités », niveau Débutant).
  //  Source : support de cours « Physique 1-1 : Généralités sur le son »
  //  (C. Février), 29 diapositives.
  // ----------------------------------------------------------------------

  // ----- 1.1 Qu'est-ce que le son ? (diapos 5-10) -----
  {
    id: "co-gen-1-1", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Qu'est-ce que le son ?",
    question: "D'après la définition du cours (Larousse), le son est :",
    choix: [
      "Une sensation auditive provoquée par une onde acoustique",
      "Une variation de température de l'air",
      "Un courant électrique transmis par un câble",
      "Une onde lumineuse perçue par l'œil",
    ],
    correct: 0,
    explication: "Définition donnée en cours : « Son : sensation auditive provoquée par une onde acoustique » (Larousse).",
    source: "Cours Acoustique — Généralités sur le son, diapo 7",
    verifie: true,
  },
  {
    id: "co-gen-1-2", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Qu'est-ce que le son ?",
    question: "Comment appelle-t-on une onde acoustique dont la fréquence est trop basse pour être entendue par l'humain ?",
    choix: ["Un infrason", "Un ultrason", "Une onde de choc", "Un silence"],
    correct: 0,
    explication: "Le cours précise : si l'onde est de trop faible fréquence, c'est un infrason ; trop haute, un ultrason.",
    source: "Cours Acoustique — Généralités sur le son, diapo 7",
    verifie: true,
  },
  {
    id: "co-gen-1-3", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Qu'est-ce que le son ?",
    question: "Comment appelle-t-on une onde acoustique de fréquence trop haute pour être entendue par l'humain ?",
    choix: ["Un ultrason", "Un infrason", "Une onde de choc", "Un bruit blanc"],
    correct: 0,
    explication: "À l'inverse de l'infrason, une fréquence trop haute pour l'oreille humaine est un ultrason.",
    source: "Cours Acoustique — Généralités sur le son, diapo 7",
    verifie: true,
  },
  {
    id: "co-gen-1-4", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Qu'est-ce que le son ?",
    question: "Que devient une onde sonore si elle est beaucoup trop forte, selon le cours ?",
    choix: ["Une onde de choc", "Un infrason", "Un ultrason", "Elle disparaît"],
    correct: 0,
    explication: "Le cours indique que si l'onde est trop forte, elle devient une onde de choc.",
    source: "Cours Acoustique — Généralités sur le son, diapo 7",
    verifie: true,
  },
  {
    id: "co-gen-1-5", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Qu'est-ce que le son ?",
    question: "Comment le cours définit-il l'acoustique en tant que discipline ?",
    choix: [
      "La science qui étudie les vibrations des particules d'un milieu, capables d'engendrer, de propager et de faire percevoir des sons",
      "La technique d'enregistrement des sons uniquement",
      "L'étude des ondes lumineuses",
      "L'étude des réseaux audionumériques",
    ],
    correct: 0,
    explication: "Définition du cours : l'acoustique étudie les vibrations des particules susceptibles d'engendrer des sons, infrasons ou ultrasons, de les propager et de les faire percevoir.",
    source: "Cours Acoustique — Généralités sur le son, diapo 7",
    verifie: true,
  },
  {
    id: "co-gen-1-6", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Qu'est-ce que le son ?",
    question: "La psychoacoustique, telle que définie en cours, étudie :",
    choix: [
      "Les rapports entre les perceptions auditives de l'humain et les sons qui parviennent à ses oreilles",
      "Uniquement la fabrication des microphones",
      "La propagation du son dans le vide",
      "Les circuits électroniques des amplificateurs",
    ],
    correct: 0,
    explication: "C'est la branche de la psychophysique qui relie perception auditive et sons physiques reçus par l'oreille.",
    source: "Cours Acoustique — Généralités sur le son, diapo 7",
    verifie: true,
  },
  {
    id: "co-gen-1-7", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Qu'est-ce que le son ?",
    question: "Dans un gaz comme l'air, pourquoi la position moyenne des molécules reste-t-elle presque statique malgré leur agitation ?",
    choix: [
      "Parce qu'elles s'entrechoquent constamment avec leurs voisines",
      "Parce qu'elles sont attachées les unes aux autres comme dans un solide",
      "Parce qu'elles n'ont aucune énergie cinétique",
      "Parce que la gravité les immobilise complètement",
    ],
    correct: 0,
    explication: "Les molécules de gaz se déplacent librement et vite, mais leurs collisions incessantes font qu'en moyenne elles ne s'éloignent pas beaucoup de leur position.",
    source: "Cours Acoustique — Généralités sur le son, diapo 8",
    verifie: true,
  },
  {
    id: "co-gen-1-8", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Qu'est-ce que le son ?",
    question: "Quelle est l'unité de la pression, grandeur introduite dans le cours à propos des molécules d'air ?",
    choix: ["Le pascal (Pa)", "Le hertz (Hz)", "Le décibel (dB)", "Le newton (N)"],
    correct: 0,
    explication: "Le cours définit la pression comme la force exercée par les molécules contre les surfaces, en pascals.",
    source: "Cours Acoustique — Généralités sur le son, diapo 9",
    verifie: true,
  },
  {
    id: "co-gen-1-9", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Qu'est-ce que le son ?",
    question: "Quel est l'ordre de grandeur de la pression atmosphérique normale donné en cours ?",
    choix: ["Environ 100 000 Pa", "Environ 100 Pa", "Environ 1 Pa", "Environ 10 000 000 Pa"],
    correct: 0,
    explication: "Le cours donne environ 100 000 pascals (≈1013 hPa au niveau de la mer), due au poids des ~10 km d'air au-dessus de nos têtes.",
    source: "Cours Acoustique — Généralités sur le son, diapo 9",
    verifie: true,
  },
  {
    id: "co-gen-1-10", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Qu'est-ce que le son ?",
    question: "Une onde sonore qui se propage dans l'air transporte-t-elle de la matière, selon le cours ?",
    choix: [
      "Non, seule la déformation (perturbation) se transmet, les molécules reviennent à leur position de départ",
      "Oui, les molécules d'air voyagent avec l'onde jusqu'à sa destination",
      "Oui, mais seulement pour les très basses fréquences",
      "Non, car il n'y a aucun mouvement des molécules",
    ],
    correct: 0,
    explication: "Comme une vague : les molécules avancent puis reviennent à leur position de repos, seule la perturbation est transmise.",
    source: "Cours Acoustique — Généralités sur le son, diapo 10",
    verifie: true,
  },

  // ----- 1.2 La science du son (diapos 11-22) -----
  {
    id: "co-gen-2-1", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "La science du son",
    question: "Comment appelle-t-on le nombre d'oscillations de pression par seconde d'une onde sonore périodique ?",
    choix: ["La fréquence", "L'amplitude", "La phase", "La longueur d'onde"],
    correct: 0,
    explication: "Le cours définit la « vitesse » des oscillations, c'est-à-dire leur nombre par seconde, comme la fréquence.",
    source: "Cours Acoustique — Généralités sur le son, diapo 13",
    verifie: true,
  },
  {
    id: "co-gen-2-2", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "La science du son",
    question: "Quelle est l'unité de la fréquence présentée en cours ?",
    choix: ["Le hertz (Hz)", "Le pascal (Pa)", "Le décibel (dB)", "La seconde (s)"],
    correct: 0,
    explication: "L'unité de fréquence est le hertz, nombre d'oscillations par seconde.",
    source: "Cours Acoustique — Généralités sur le son, diapo 13",
    verifie: true,
  },
  {
    id: "co-gen-2-3", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "La science du son",
    question: "Quelle plage de fréquences l'être humain peut-il entendre, selon le cours ?",
    choix: ["Environ 20 Hz à 20 000 Hz", "Environ 2 Hz à 2 000 Hz", "Environ 200 Hz à 200 000 Hz", "Environ 20 Hz à 2 000 Hz"],
    correct: 0,
    explication: "Le cours situe le spectre audible humain entre environ 20 Hz et 20 kHz (20 000 Hz).",
    source: "Cours Acoustique — Généralités sur le son, diapo 13",
    verifie: true,
  },
  {
    id: "co-gen-2-4", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "La science du son",
    question: "Un son de fréquence élevée est perçu par l'oreille comme :",
    choix: ["Aigu", "Grave", "Fort", "Faible"],
    correct: 0,
    explication: "Le cours établit : plus la fréquence est élevée, plus le son est aigu ; plus elle est basse, plus il est grave.",
    source: "Cours Acoustique — Généralités sur le son, diapo 13",
    verifie: true,
  },
  {
    id: "co-gen-2-5", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "La science du son",
    question: "Selon le découpage présenté en cours, en combien de grandes zones (décades) peut-on diviser simplement le spectre audible ?",
    choix: ["3 (graves, médiums, aigus)", "2 (graves, aigus)", "5", "10"],
    correct: 0,
    explication: "Le cours propose un découpage simple en 3 décades : graves, médium et aigus, en précisant qu'il n'existe pas de découpage officiel unique.",
    source: "Cours Acoustique — Généralités sur le son, diapo 14",
    verifie: true,
  },
  {
    id: "co-gen-2-6", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "La science du son",
    question: "À quoi correspond un intervalle d'une octave, tel que défini en cours ?",
    choix: ["Un doublement de la fréquence", "Un triplement de la fréquence", "Une division par deux de la fréquence", "Un ajout de 100 Hz"],
    correct: 0,
    explication: "Le cours définit l'octave comme l'intervalle pour lequel la fréquence est doublée.",
    source: "Cours Acoustique — Généralités sur le son, diapo 17",
    verifie: true,
  },
  {
    id: "co-gen-2-7", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "La science du son",
    question: "Combien d'octaves le cours situe-t-il environ dans le spectre audible humain, centré sur 1 kHz ?",
    choix: ["9 à 10 octaves", "3 à 4 octaves", "20 octaves", "1 seule octave"],
    correct: 0,
    explication: "Le cours indique qu'on retrouve environ 9 (ou 10) octaves dans le spectre audible, avec une fréquence centrale de 1 kHz.",
    source: "Cours Acoustique — Généralités sur le son, diapo 17",
    verifie: true,
  },
  {
    id: "co-gen-2-8", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "La science du son",
    question: "Quelle grandeur, présentée en cours, est liée à l'amplitude perçue (le volume) d'un son ?",
    choix: ["La variation de pression de l'onde sonore", "La fréquence de l'onde", "La vitesse du son dans l'air", "La longueur du câble micro"],
    correct: 0,
    explication: "Le cours relie amplitude de l'onde sonore et variation de pression : plus elle est élevée, plus le son paraît fort.",
    source: "Cours Acoustique — Généralités sur le son, diapo 20",
    verifie: true,
  },
  {
    id: "co-gen-2-9", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "La science du son",
    question: "Quelle unité le cours utilise-t-il pour mesurer l'amplitude sonore (« sound pressure level ») ?",
    choix: ["Le décibel SPL (dB SPL)", "Le hertz (Hz)", "Le pascal seul, sans référence", "Le watt (W)"],
    correct: 0,
    explication: "Le cours introduit le dB SPL comme unité de base de mesure de l'amplitude des ondes sonores.",
    source: "Cours Acoustique — Généralités sur le son, diapo 21",
    verifie: true,
  },
  {
    id: "co-gen-2-10", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "La science du son",
    question: "À partir de quelle variation de niveau l'oreille humaine est-elle généralement capable de percevoir une différence, selon le cours ?",
    choix: ["Environ 3 dB", "Environ 30 dB", "Environ 0,3 dB", "Environ 50 dB"],
    correct: 0,
    explication: "Le cours précise : « Normalement on est capable facilement de percevoir des variations de 3 dB. »",
    source: "Cours Acoustique — Généralités sur le son, diapo 21",
    verifie: true,
  },

  // ----- 1.3 Phénomènes sonores de base (diapos 24-28) -----
  {
    id: "co-gen-3-1", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Phénomènes sonores de base",
    question: "D'après le cours, qu'est-ce qu'une source sonore, physiquement ?",
    choix: [
      "Un élément qui fait varier localement la pression ambiante (ex. membrane de haut-parleur, voix, vibration mécanique)",
      "Un dispositif qui crée de la matière dans l'air",
      "Un appareil qui mesure uniquement la température",
      "Un filtre qui supprime certaines fréquences",
    ],
    correct: 0,
    explication: "Le cours définit la source sonore comme ce qui fait varier localement la pression ambiante : membrane de HP, bouche, vibration mécanique...",
    source: "Cours Acoustique — Généralités sur le son, diapo 24",
    verifie: true,
  },
  {
    id: "co-gen-3-2", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Phénomènes sonores de base",
    question: "Dans quelle(s) direction(s) la perturbation sonore émise par une source se propage-t-elle, le plus souvent, selon le cours ?",
    choix: ["Dans toutes les directions", "Uniquement vers le haut", "Uniquement dans l'axe de la source", "Elle ne se propage pas, elle reste sur place"],
    correct: 0,
    explication: "Le cours indique que la perturbation se propage dans l'air, le plus souvent dans toutes les directions.",
    source: "Cours Acoustique — Généralités sur le son, diapo 24",
    verifie: true,
  },
  {
    id: "co-gen-3-3", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Phénomènes sonores de base",
    question: "Comment appelle-t-on le phénomène par lequel le son devient plus faible en s'éloignant de sa source ?",
    choix: ["L'atténuation", "L'amplification", "La résonance", "La diffraction"],
    correct: 0,
    explication: "Le cours nomme ce phénomène « atténuation » : plus on est loin de la source, plus le son devient faible.",
    source: "Cours Acoustique — Généralités sur le son, diapo 25",
    verifie: true,
  },
  {
    id: "co-gen-3-4", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Phénomènes sonores de base",
    question: "À quoi le cours compare-t-il l'atténuation du son avec la distance ?",
    choix: [
      "À un faisceau de lampe torche qui se dilue en s'éloignant",
      "À une balle de tennis qui rebondit",
      "À un courant électrique qui s'arrête net",
      "À une goutte d'eau qui s'évapore instantanément",
    ],
    correct: 0,
    explication: "Le cours dit que la puissance acoustique se dilue en s'éloignant « à la manière d'un faisceau de lampe torche ».",
    source: "Cours Acoustique — Généralités sur le son, diapo 25",
    verifie: true,
  },
  {
    id: "co-gen-3-5", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Phénomènes sonores de base",
    question: "De quoi dépend l'atténuation du son avec la distance, d'après le cours ?",
    choix: [
      "Du type de source et du milieu de propagation",
      "Uniquement de la couleur de la source",
      "Uniquement de l'heure de la journée",
      "Elle est toujours identique quelle que soit la situation",
    ],
    correct: 0,
    explication: "Le cours précise que l'atténuation varie selon le type de source, et que le milieu de propagation (souvent l'air) l'influence et peut l'accentuer.",
    source: "Cours Acoustique — Généralités sur le son, diapo 25",
    verifie: true,
  },
  {
    id: "co-gen-3-6", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Phénomènes sonores de base",
    question: "Que se passe-t-il quand plusieurs ondes sonores se rencontrent, selon le cours ?",
    choix: [
      "Elles se superposent (interférence) : l'amplitude peut augmenter, la forme changer, ou le son s'atténuer voire s'annuler",
      "Elles se traversent sans jamais s'influencer",
      "Elles s'annulent systématiquement",
      "Elles fusionnent en une seule fréquence moyenne",
    ],
    correct: 0,
    explication: "Le cours décrit la sommation/interférence des ondes comme pouvant augmenter l'amplitude, changer la forme de l'onde, l'atténuer ou l'annuler.",
    source: "Cours Acoustique — Généralités sur le son, diapo 26",
    verifie: true,
  },
  {
    id: "co-gen-3-7", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Phénomènes sonores de base",
    question: "Comment appelle-t-on, selon le cours, le mélange de tous les sons environnants venant de partout sur Terre ?",
    choix: ["Le bruit de fond", "Le champ direct", "Le son pur", "L'infrason ambiant"],
    correct: 0,
    explication: "Le cours définit le bruit de fond comme le mélange de tous les sons venant de partout, dans lequel on baigne en permanence.",
    source: "Cours Acoustique — Généralités sur le son, diapo 27",
    verifie: true,
  },
  {
    id: "co-gen-3-8", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Phénomènes sonores de base",
    question: "Quel phénomène le cours cite-t-il quand le son rebondit sur un obstacle ?",
    choix: ["Écho, réverbération ou ondes stationnaires", "Uniquement la diffraction", "Uniquement l'absorption", "La psychoacoustique"],
    correct: 0,
    explication: "Le cours liste, quand le son rencontre un obstacle et rebondit : échos, réverbérations, ondes stationnaires.",
    source: "Cours Acoustique — Généralités sur le son, diapo 27",
    verifie: true,
  },
  {
    id: "co-gen-3-9", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Phénomènes sonores de base",
    question: "Que devient l'énergie sonore absorbée par un matériau (par frottement), selon le cours ?",
    choix: ["Elle se transforme en chaleur", "Elle se transforme en lumière", "Elle disparaît sans transformation", "Elle repart sous forme d'infrason"],
    correct: 0,
    explication: "Le cours indique que le son « absorbé » l'est par frottement, et que cette énergie se transforme en chaleur.",
    source: "Cours Acoustique — Généralités sur le son, diapo 27",
    verifie: true,
  },
  {
    id: "co-gen-3-10", option: "son", annee: "cours", matiere: "acoustique",
    chapitre: "Généralités", lecon: "Phénomènes sonores de base",
    question: "En plus de la réflexion (rebond) et de l'absorption, quels autres phénomènes une onde sonore peut-elle subir en rencontrant un obstacle, selon le cours ?",
    choix: [
      "Être diffusée, diffractée ou réfractée",
      "Devenir un ultrason",
      "Se transformer en onde lumineuse",
      "Perdre sa fréquence définitivement",
    ],
    correct: 0,
    explication: "Le cours cite, en plus du rebond et de l'absorption, les phénomènes de diffusion, diffraction et réfraction.",
    source: "Cours Acoustique — Généralités sur le son, diapo 27",
    verifie: true,
  },
];

// Années disponibles pour un choix (triées), avec "0" affiché comme « Sujet zéro »
export const annees = [...new Set(questions.map((q) => q.annee))].sort((a, b) => Number(a) - Number(b));

export const libelleAnnee = (a) => (a === "0" ? "Sujet zéro" : a === "cours" ? "Contrôle de cours" : a);

// Questions de contrôle de compréhension pour une leçon donnée de cours.js
// (matiere = id de la matière dans cours.js, chapitre = titre du chapitre,
// lecon = texte exact de la leçon dans cours.js).
export function questionsPourLecon(matiere, chapitre, lecon) {
  return questions.filter(
    (q) => q.annee === "cours" && q.matiere === matiere && q.chapitre === chapitre && q.lecon === lecon
  );
}

// Toutes les questions de contrôle de compréhension d'un chapitre entier de
// cours.js (toutes leçons confondues) : utilisé pour le QCM de fin de
// chapitre affiché en bas de la page Cours.
export function questionsPourChapitre(matiere, chapitre) {
  return questions.filter(
    (q) => q.annee === "cours" && q.matiere === matiere && q.chapitre === chapitre
  );
}
