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
      { id: "debutant", nom: "Débutant", description: "Qu'est-ce que le son ?" },
      { id: "intermediaire", nom: "Intermédiaire", description: "Mesurer et calculer l'onde sonore" },
      { id: "confirme", nom: "Confirmé", description: "Prédire et expliquer les phénomènes" },
    ],
    chapitres: [
      {
        titre: "Généralités",
        niveaux: {
          debutant: ["Qu'est-ce que le son ?", "La science du son", "Phénomènes sonores de base"],
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
      { id: "confirme", nom: "Confirmé", description: "Calculs et optimisation" },
    ],
    chapitres: [
      {
        titre: "Chaîne du son",
        niveaux: { debutant: ["Vision d'ensemble", "Niveau électrique", "Dynamique"], confirme: ["Meter"] },
      },
      {
        titre: "Microphones",
        niveaux: { debutant: ["Capteurs, membranes et directivité", "Types de micro"], confirme: ["Sensibilité et spécifications", "Technologies de micro"] },
      },
      {
        titre: "Câbles et connecteurs",
        niveaux: { debutant: ["La liaison audio analogique", "Les connecteurs"] },
      },
      {
        titre: "Préamplis",
        niveaux: { debutant: ["DI", "Préamplis in-line", "Entrées"], confirme: ["Impédance et perte de charge", "Gain et EIN"] },
      },
      {
        titre: "Effets",
        niveaux: {
          debutant: ["L'égaliseur (EQ)", "Compresseur"],
          confirme: ["Filtres, ordre et phase", "Calculs sur la dynamique", "Reverb et délai", "Chorus, flanger, phaser", "Distorsion", "Bitcrusher"],
        },
      },
      {
        titre: "Table de mixage",
        niveaux: { debutant: ["Fonctionnement et types de table"], confirme: ["Tranche", "Bus, VCA, AUX, matrice", "Carte son"] },
      },
      {
        titre: "Numérique",
        niveaux: {
          debutant: ["Fichiers audio (conteneurs)"],
          confirme: ["Échantillonnage et quantification", "La conversion AD", "La conversion DA", "Technologies de CAN", "Technologies de CNA", "Encodage et compression", "Bruit numérique et dither"],
        },
      },
      {
        titre: "Amplification",
        niveaux: { debutant: ["Fonction et choix"], confirme: ["Spécificités", "Classes d'ampli"] },
      },
      {
        titre: "Casques",
        niveaux: { debutant: ["Choisir son casque"], confirme: ["Ampli casque et impédance"] },
      },
      {
        titre: "Haut-parleurs",
        niveaux: {
          debutant: ["Technologies et fonctionnement", "Charges", "Caissons populaires"],
          confirme: ["Propriétés et spécifications", "Thiele et Small", "Charge close", "Bass-reflex", "Pavillon de compression", "Construction enceinte 3 voies", "Line array", "Ligne 100V"],
        },
      },
      {
        titre: "Haute fréquence (HF)",
        niveaux: { confirme: ["Les modulations", "La HF"] },
      },
      {
        titre: "Supports",
        niveaux: { debutant: ["Bande magnétique", "Vinyle", "CD-ROM", "Streaming"] },
      },
      {
        titre: "Liaisons numériques",
        niveaux: {
          debutant: ["Câbles numériques", "Protocoles audio", "Protocoles non audio"],
          confirme: ["Généralités des liaisons numériques", "Synchro", "MIDI", "Théorie de la transmission numérique"],
        },
      },
      {
        titre: "Réseau",
        niveaux: { debutant: ["Généralités"] },
      },
    ],
  },

  // ----------------------------------------------------------- ÉLECTRICITÉ
  {
    id: "electricite",
    nom: "Électricité",
    description: "Principes et utilisation",
    niveaux: [
      { id: "debutant", nom: "Débutant", description: "Comprendre en sécurité" },
      { id: "confirme", nom: "Confirmé", description: "Comprendre les phénomènes" },
    ],
    chapitres: [
      {
        titre: "L'électricité",
        niveaux: { debutant: ["Le phénomène électrique"], confirme: ["Loi d'Ohm", "Circuits", "MET/MEN", "Électromagnétisme"] },
      },
      {
        titre: "Habilitation électrique",
        niveaux: { debutant: ["Risques électriques"], confirme: ["Installation", "Équipements", "Habilitation"] },
      },
      {
        titre: "Électrotechnique",
        niveaux: { confirme: ["Puissance complexe", "Transformateurs", "Batterie et photovoltaïque", "AC/DC"] },
      },
      {
        titre: "Électronique",
        niveaux: { confirme: ["Résistance", "Condensateur", "Bobine", "Impédance complexe", "Filtrage analogique passif", "Transistor", "Lampe triode", "AOP", "Filtre actif"] },
      },
    ],
  },

  // ----------------------------------------------------------- SCIENCES
  {
    id: "sciences",
    nom: "Sciences",
    description: "Revenir aux bases",
    niveaux: [
      { id: "debutant", nom: "Débutant", description: "Histoire et principes" },
      { id: "confirme", nom: "Confirmé", description: "Physique avancée" },
    ],
    chapitres: [
      {
        titre: "Mesures et unités",
        niveaux: {
          debutant: ["Méthode scientifique", "Histoire des sciences", "La mesure et l'unité", "Les unités SI"],
          confirme: ["Préfixes et puissances de 10", "Écriture scientifique", "Unités composées", "Conversions"],
        },
      },
      {
        titre: "Équations",
        niveaux: { confirme: ["Équations du 1er ordre", "Logarithmes", "Puissances", "Équations du 2nd ordre", "Dérivée et primitive", "Équations différentielles"] },
      },
      {
        titre: "Géométrie",
        niveaux: { confirme: ["Repère réel", "Plan complexe", "Vecteurs", "Trigonométrie", "Bases géométriques"] },
      },
    ],
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
    chapitres: [
      {
        titre: "Sources sonores",
        niveaux: {
          tout: ["Les instruments de musique", "Les cordes", "Les vents", "Les percussions"],
          nerds: ["Les instruments électroniques", "Les instruments numériques"],
        },
      },
      {
        titre: "La synthèse",
        niveaux: {
          tout: ["Introduction à la synthèse", "Histoire de la synthèse"],
          nerds: ["Synthèse additive", "Synthèse par modulation", "Wave shaping", "Wavetable", "Synthèse soustractive", "Synthèse granulaire", "Synthèse pulsar", "Synthèse à modèle physique", "Synthèse analogique virtuelle", "Synthèse formantique", "Synthèse graphique", "Synthèse concaténative", "Synthèse stochastique et chaotique", "Synthèse par segment de forme d'onde"],
        },
      },
      {
        titre: "Industrie musicale",
        niveaux: { tout: ["Enregistrer la musique", "Convertir la musique", "Amplifier la musique", "Miniaturiser la musique", "Numériser la musique", "Partager la musique"] },
      },
      {
        titre: "Législation",
        niveaux: { tout: ["Niveau sonore en concert", "Bruit de voisinage", "Niveau sonore en entreprise", "Propriétés acoustiques des lieux publics"] },
      },
    ],
  },
];
