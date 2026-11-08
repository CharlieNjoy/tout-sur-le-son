// =====================================================================
//  ENTRAÎNEMENT PAR CHAPITRE — banque de questions
//  Construite à partir des COURS de Charlie et des examens qu'il a
//  lui-même rédigés (dossier ENSEIGNEMENT/COURS SON), rangée EXACTEMENT
//  selon le plan de cours de la page /cours (src/data/cours.js) :
//  matière → chapitre → sous-chapitre.
//
//  Le niveau (debutant/intermediaire/confirme) est une échelle à part :
//  un même sous-chapitre peut avoir des questions à plusieurs niveaux.
//  Chaque niveau INCLUT les niveaux inférieurs (confirme = debutant +
//  intermediaire + confirme ; intermediaire = debutant + intermediaire ;
//  debutant = debutant seul). C'est le composant qui applique ce cumul,
//  pas les données ci-dessous.
//
//  Champs de chaque question :
//    id, matiere (id de cours.js), chapitre (titre EXACT d'un chapitre
//    de cours.js), sousChapitre (libellé EXACT d'un sous-chapitre de ce
//    chapitre dans cours.js, ou null = question posée sur le chapitre
//    entier, sans sous-chapitre précis), niveau, question, choix (la
//    bonne réponse est toujours en position 0), correct, explication,
//    source, verifie (true si un corrigé officiel existe, false si
//    calculée/recoupée sans corrigé disponible)
//
//  ------------------------------------------------------------------
//  PREMIER TEST : matière Acoustique uniquement, 3 chapitres (Signaux,
//  L'onde sonore, Psychoacoustique), basé sur l'examen BTS1 S1 2025
//  (avec corrigé). But : valider le mécanisme (matière → chapitre →
//  sous-chapitre → niveau cumulatif) avant de généraliser.
// =====================================================================

export const NIVEAUX = [
  { id: "debutant", nom: "Débutant" },
  { id: "intermediaire", nom: "Intermédiaire" },
  { id: "confirme", nom: "Confirmé" },
];

export const questions = [

  // ================================================== DÉBUTANT ======
  // Culture générale, sans calcul, basée sur les cours d'introduction.
  {
    id: "d-1", matiere: "acoustique", chapitre: "Signaux", sousChapitre: "Signaux périodiques", niveau: "debutant",
    question: "Qu'appelle-t-on la fréquence d'un signal sonore ?",
    choix: [
      "Le nombre de cycles (périodes) par seconde",
      "La durée d'un seul cycle",
      "L'amplitude maximale du signal",
      "La vitesse de propagation du son",
    ],
    correct: 0,
    explication: "La fréquence (en Hz) compte le nombre de cycles par seconde ; son inverse est la période.",
    source: "Cours Acoustique, chapitre Signaux — Signaux périodiques",
    verifie: true,
  },
  {
    id: "d-2", matiere: "acoustique", chapitre: "Signaux", sousChapitre: "Dynamique et décibel", niveau: "debutant",
    question: "Le décibel (dB) est une unité qui exprime...",
    choix: [
      "Un rapport logarithmique entre deux grandeurs",
      "Une distance, en mètres",
      "Une fréquence, en Hertz",
      "Une durée, en secondes",
    ],
    correct: 0,
    explication: "Le dB compare deux grandeurs (puissance, tension...) sur une échelle logarithmique, par rapport à une valeur de référence.",
    source: "Cours Acoustique, chapitre Signaux — Dynamique et décibel",
    verifie: true,
  },
  {
    id: "d-3", matiere: "acoustique", chapitre: "L'onde sonore", sousChapitre: "Vitesse du son", niveau: "debutant",
    question: "La vitesse du son dans l'air dépend principalement de...",
    choix: [
      "La température de l'air",
      "La couleur de la source sonore",
      "La hauteur (fréquence) du son",
      "Le volume (niveau) du son",
    ],
    correct: 0,
    explication: "c = 20·√T (T en kelvin) : plus l'air est chaud, plus le son se propage vite.",
    source: "Cours Acoustique, chapitre L'onde sonore — Vitesse du son",
    verifie: true,
  },
  {
    id: "d-4", matiere: "acoustique", chapitre: "Psychoacoustique", sousChapitre: "Le dB SPL", niveau: "debutant",
    question: "Le niveau sonore en dB SPL est mesuré par rapport à quelle référence ?",
    choix: [
      "Une pression acoustique de référence de 2×10⁻⁵ Pa (seuil d'audition)",
      "La pression atmosphérique normale",
      "Une fréquence de référence de 1000 Hz",
      "La puissance électrique de l'amplificateur",
    ],
    correct: 0,
    explication: "pref = 2×10⁻⁵ Pa correspond au seuil d'audition humain à 1 kHz ; c'est la référence du dB SPL.",
    source: "Cours Acoustique, chapitre Psychoacoustique — Le dB SPL",
    verifie: true,
  },
  {
    id: "d-5", matiere: "acoustique", chapitre: "Signaux", sousChapitre: "Phase et déphasage", niveau: "debutant",
    question: "Deux signaux identiques mais décalés dans le temps l'un par rapport à l'autre sont dits...",
    choix: ["Déphasés", "Amplifiés", "Filtrés", "Modulés"],
    correct: 0,
    explication: "Le déphasage mesure ce décalage temporel, exprimé en degrés ou en radians par rapport à la période du signal.",
    source: "Cours Acoustique, chapitre Signaux — Phase et déphasage",
    verifie: true,
  },

  // ============================================= INTERMÉDIAIRE ======
  // Application directe d'un sous-chapitre — reprise d'exercices
  // réellement posés dans l'examen BTS1 S1 2025 (avec corrigé officiel).
  {
    id: "i-1", matiere: "acoustique", chapitre: "Signaux", sousChapitre: "Signaux périodiques", niveau: "intermediaire",
    question: "Quelle est la période d'un son de fréquence f = 1,3×10⁴ Hz ?",
    choix: ["≈76,9 µs", "≈7,69 µs", "≈769 µs", "≈13 ms"],
    correct: 0,
    explication: "T = 1/f = 1/13 000 ≈ 7,69×10⁻⁵ s = 76,9 µs.",
    source: "Examen BTS1, S1 2025, Physique acoustique, Exercice 1 (Signaux), question 1",
    verifie: true,
  },
  {
    id: "i-2", matiere: "acoustique", chapitre: "Signaux", sousChapitre: "Dynamique et décibel", niveau: "intermediaire",
    question: "Quel est le gain d'un amplificateur si j'ai 1 W en entrée et 56 W en sortie ?",
    choix: ["≈17,5 dB", "≈56 dB", "≈7,5 dB", "≈28 dB"],
    correct: 0,
    explication: "G = 10·log(56/1) ≈ 17,5 dB.",
    source: "Examen BTS1, S1 2025, Physique acoustique, Exercice 2 (Gain et décibel), question 4",
    verifie: true,
  },
  {
    id: "i-3", matiere: "acoustique", chapitre: "L'onde sonore", sousChapitre: "Vitesse du son", niveau: "intermediaire",
    question: "Il fait −40°C dehors. Quelle est la vitesse du son ?",
    choix: ["≈305 m/s", "≈340 m/s", "≈280 m/s", "≈320 m/s"],
    correct: 0,
    explication: "c = 20·√T(K) ; T = −40°C = 233 K → c = 20·√233 ≈ 305 m/s.",
    source: "Examen BTS1, S1 2025, Physique acoustique, Exercice 3 (Vitesse et longueur d'onde), question 7",
    verifie: true,
  },
  {
    id: "i-4", matiere: "acoustique", chapitre: "L'onde sonore", sousChapitre: "Longueur d'onde", niveau: "intermediaire",
    question: "Quelle est la longueur d'onde d'un signal de 1500 Hz si la vitesse de propagation du son est de 340 m/s ?",
    choix: ["≈22,7 cm", "≈45 cm", "≈11 cm", "≈2,27 m"],
    correct: 0,
    explication: "λ = c/f = 340/1500 ≈ 0,227 m = 22,7 cm.",
    source: "Examen BTS1, S1 2025, Physique acoustique, Exercice 3 (Vitesse et longueur d'onde), question 8",
    verifie: true,
  },
  {
    id: "i-5", matiere: "acoustique", chapitre: "Psychoacoustique", sousChapitre: "Le dB SPL", niveau: "intermediaire",
    question: "Quel est le niveau sonore correspondant à une intensité acoustique de 12 W/m² ?",
    choix: ["≈130,8 dB SPL", "≈120 dB SPL", "≈140 dB SPL", "≈110,8 dB SPL"],
    correct: 0,
    explication: "N = 10·log(I/Iref) = 10·log(12/10⁻¹²) ≈ 130,8 dB SPL.",
    source: "Examen BTS1, S1 2025, Physique acoustique, Exercice 4 (dB SPL), question 10",
    verifie: true,
  },
  {
    id: "i-6", matiere: "acoustique", chapitre: "Signaux", sousChapitre: "Phase et déphasage", niveau: "intermediaire",
    question: "Quel est le déphasage, en degrés, entre deux signaux de 150 Hz décalés de 1,5 ms ?",
    choix: ["≈81°", "≈45°", "≈100°", "≈162°"],
    correct: 0,
    explication: "T = 1/150 ≈ 6,67 ms ; φ = (Δt/T)×360° = (1,5/6,67)×360 ≈ 81°.",
    source: "Examen BTS1, S1 2025, Physique acoustique, Exercice 5 (Phase et déphasage), question 13",
    verifie: true,
  },

  // ==================================================== CONFIRMÉ ====
  // Cas pratiques : synthèse de plusieurs sous-chapitres, calculs plus
  // complexes — repris de l'examen BTS1 S1 2025 (avec corrigé officiel).
  {
    id: "c-1", matiere: "acoustique", chapitre: "L'onde sonore", sousChapitre: "Interfaces et réflexions", niveau: "confirme",
    question: "Une enceinte est posée à 50 cm d'un mur. Le son direct et le son réfléchi par le mur se recombinent chez l'auditeur. Quelle est la première fréquence fortement atténuée par filtrage en peigne ?",
    choix: ["≈170 Hz", "≈340 Hz", "≈680 Hz", "≈85 Hz"],
    correct: 0,
    explication: "Trajet supplémentaire ≈ 2×0,5 = 1 m → Δt = 1/340 ≈ 2,94 ms. Opposition de phase quand Δt = T/2, soit f = 1/(2·Δt) ≈ 170 Hz.",
    source: "Examen BTS1, S1 2025, Physique acoustique, Cas pratiques, question 16",
    verifie: true,
  },
  {
    id: "c-2", matiere: "acoustique", chapitre: "Psychoacoustique", sousChapitre: "La sommation de signaux", niveau: "confirme",
    question: "Dans un home cinéma, 4 enceintes L, C, R et SUB renvoient chacune 90 dB SPL. L et R diffusent le même signal (corrélées), C et le SUB diffusent chacun un signal différent, non corrélé aux autres. Quel est le niveau sonore total ?",
    choix: ["≈97,8 dB SPL", "≈90 dB SPL", "≈96 dB SPL", "≈102 dB SPL"],
    correct: 0,
    explication: "L+R corrélées (+6 dB) → 96 dB SPL. C et SUB, non corrélés entre eux (+3 dB) → 93 dB SPL. Les deux groupes, non corrélés entre eux, se combinent : 10·log(10^9,6 + 10^9,3) ≈ 97,8 dB SPL.",
    source: "Examen BTS1, S1 2025, Physique acoustique, Cas pratiques, question 19",
    verifie: true,
  },
  {
    id: "c-3", matiere: "acoustique", chapitre: "Psychoacoustique", sousChapitre: "La sommation de signaux", niveau: "confirme",
    question: "Deux enceintes diffusent le même signal : la première renvoie 90 dB SPL à 1 m de l'auditeur, la seconde renvoie 85 dB SPL à 2 m. Les signaux arrivent non corrélés (délai dû à la différence de distance). Quel est le niveau total perçu ?",
    choix: ["≈91,2 dB SPL", "≈95 dB SPL", "≈87,5 dB SPL", "≈90 dB SPL"],
    correct: 0,
    explication: "Sources non corrélées : Ltotal = 10·log(10^9 + 10^8,5) ≈ 91,2 dB SPL.",
    source: "Examen BTS1, S1 2025, Physique acoustique, Cas pratiques, question 20",
    verifie: true,
  },
];
