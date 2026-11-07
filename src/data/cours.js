// =====================================================================
//  CONTENU DES COURS
//  - id : utilisé dans le code → minuscules, sans accent ni espace
//  - niveaux : les niveaux de la matière (ordre = ordre des colonnes)
//  - chapitres : chaque chapitre liste ses cours PAR NIVEAU
//      niveaux: { debutant: [...], intermediaire: [...] }
//    Un niveau absent du chapitre = pas de colonne pour ce niveau.
//    Matière sans chapitre → la page affiche « Bientôt disponible ».
// =====================================================================

export const matieres = [

  // ----------------------------------------------------------- ACOUSTIQUE
  {
    id: "acoustique",
    nom: "Acoustique",
    description: "Comprendre le son",
    niveaux: [
      { id: "debutant", nom: "Débutant", description: "Qu'est-ce que le son ?" },
      { id: "intermediaire", nom: "Intermédiaire", description: "Mesurer et calculer l'onde sonore" },
      { id: "confirme", nom: "Confirmé", description: "Prédire et expliquer les phénomènes" },
    ],
    chapitres: [
      {
        titre: "Généralités",
        niveaux: {
          debutant: ["Qu'est-ce que le son ?", "La science du son", "Phénomènes sonores de base"],
        },
      },
      {
        titre: "Signaux",
        niveaux: {
          debutant: ["La représentation du son", "Le spectre"],
          intermediaire: ["Classement et propriétés", "Signaux périodiques", "Signaux non périodiques", "Dynamique et décibel", "Phase et déphasage"],
          confirme: ["Signal sinusoïdal", "Transformée de Fourier", "Distorsion", "Modulation"],
        },
      },
      {
        titre: "L'onde sonore",
        niveaux: {
          debutant: ["Propagation"],
          intermediaire: ["L'onde mécanique", "Vitesse du son", "Longueur d'onde", "Absorption", "Effet Doppler"],
          confirme: ["Pression et intensité acoustique", "Onde spatiotemporelle", "Interfaces et réflexions", "Ondes stationnaires", "Résonances des tubes", "Résonances des cordes"],
        },
      },
      {
        titre: "Psychoacoustique",
        niveaux: {
          debutant: ["Le champ perceptif", "Biais et illusions"],
          intermediaire: ["L'oreille", "Le dB SPL", "La sommation de signaux", "Perception de l'intensité", "Perception de la hauteur", "Effet de masquage"],
          confirme: ["Perception de la spatialisation", "Reproduction stéréophonique", "Captation stéréophonique", "Systèmes de spatialisation 3D"],
        },
      },
      {
        titre: "Champ libre",
        niveaux: {
          intermediaire: ["Types de sources", "Puissance et niveau de puissance des sources", "Ondes sphériques", "Directivité des sources"],
          confirme: ["Ondes cylindriques", "Systèmes directifs", "Calage système"],
        },
      },
      {
        titre: "Champ réverbéré",
        niveaux: {
          debutant: ["La réverbération"],
          intermediaire: ["Théorie de Sabine", "Niveau réverbéré", "Propriétés des salles", "Modes propres"],
          confirme: ["Niveau de pression et d'intensité", "Théorie d'Eyring", "Autres méthodes de prédiction du temps de réverbération"],
        },
      },
      {
        titre: "Couplage",
        niveaux: {
          debutant: ["Principe du couplage acoustique", "Isolation phonique"],
          intermediaire: ["Transmission et affaiblissement", "Couplage en régime stationnaire"],
          confirme: ["Couplage en régime transitoire"],
        },
      },
      {
        titre: "Correction acoustique",
        niveaux: {
          debutant: ["L'absorption du son"],
          intermediaire: ["Matériaux absorbants", "Matériaux résonnants", "Diffuseurs"],
          confirme: ["Correction numérique"],
        },
      },
    ],
  },

  // ----------------------------------------------------------- TECHNOLOGIE
  {
    id: "technologie",
    nom: "Technologie",
    description: "Maîtriser les équipements audio",
    niveaux: [
      { id: "debutant", nom: "Débutant", description: "Brancher des équipements" },
      { id: "intermediaire", nom: "Intermédiaire", description: "Connaître la chaîne du son en détail" },
      { id: "confirme", nom: "Confirmé", description: "Calculs et optimisation" },
    ],
    chapitres: [],
  },

  // ----------------------------------------------------------- ÉLECTRICITÉ
  {
    id: "electricite",
    nom: "Électricité",
    description: "Principes et utilisation",
    niveaux: [
      { id: "debutant", nom: "Débutant", description: "Comprendre en sécurité" },
      { id: "intermediaire", nom: "Intermédiaire", description: "Calculer des grandeurs électriques" },
      { id: "confirme", nom: "Confirmé", description: "Comprendre les phénomènes" },
    ],
    chapitres: [],
  },

  // ----------------------------------------------------------- SCIENCES
  {
    id: "sciences",
    nom: "Sciences",
    description: "Revenir aux bases",
    niveaux: [
      { id: "debutant", nom: "Débutant", description: "Histoire et principes" },
      { id: "intermediaire", nom: "Intermédiaire", description: "Mathématiques de base" },
      { id: "confirme", nom: "Confirmé", description: "Physique avancée" },
    ],
    chapitres: [],
  },

  // ----------------------------------------------------------- CULTURE
  {
    id: "culture",
    nom: "Culture",
    description: "Histoires de son",
    niveaux: [
      { id: "tout", nom: "Tous niveaux", description: "Pour tous" },
      { id: "nerds", nom: "Nerds", description: "Pour les nerds uniquement" },
    ],
    chapitres: [],
  },
];
