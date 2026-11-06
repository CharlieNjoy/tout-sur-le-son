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
        titre: "Introduction",
        niveaux: {
          debutant: ["Qu'est-ce que le son ?", "Phénomènes sonores"],
        },
      },
      {
        titre: "Signaux",
        niveaux: {
          debutant: ["Le signal sonore", "Le spectre"],
          intermediaire: ["Classement et propriétés", "Signaux périodiques", "Signaux non périodiques", "Dynamique", "Phase"],
          confirme: ["Signal sinusoïdal", "Transformée de Fourier", "Distorsion", "Modulation", "Phase"],
        },
      },
      {
        titre: "L'onde sonore",
        niveaux: {
          debutant: ["Vitesse du son", "Propagation"],
          intermediaire: ["L'onde mécanique", "Vitesse", "Longueur d'onde", "Absorption", "Effet Doppler"],
          confirme: ["Pression et intensité", "L'onde spatiotemporelle", "Interfaces", "Ondes stationnaires"],
        },
      },
      {
        titre: "Psychoacoustique",
        niveaux: {
          debutant: ["Limites de perception", "Biais et illusions"],
          intermediaire: ["L'oreille", "SPL : Sound Pressure Level", "Perception de l'intensité", "Pondérations", "Perception de la hauteur", "Effet de masquage"],
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
