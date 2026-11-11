// =====================================================================
//  MATÉRIEL : mise en forme des données du tableur « SPEC équipement »
//  Les données brutes sont dans materiel-brut.json (mise à jour : npm run maj-materiel).
//
//  Pour chaque catégorie, chaque colonne est décrite par :
//    col     : position de la colonne dans l'onglet (0 = première colonne)
//    label   : nom affiché
//    unite   : unité affichée
//    num     : true pour une valeur numérique
//    mieux   : "haut" ou "bas" si une valeur plus grande (ou plus petite) est meilleure
//    log     : échelle logarithmique conseillée pour le graphique
// =====================================================================
import brut from "./materiel-brut.json";

// "−36,5" → -36.5 ; vide ou texte → null
const nombre = (v) => {
  if (v == null) return null;
  const t = String(v).trim().replace(",", ".").replace(/\s/g, "");
  if (t === "") return null;
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
};
const texte = (v) => {
  const t = String(v ?? "").trim().replace(/\s+/g, " ");
  return t === "" ? null : t;
};
// Uniformise les libellés texte : "Cardioïde", "cardioide" → "cardioïde"
const UNIFORMISER = {
  cardioide: "cardioïde", "bi-directionnelle": "bi", circul: "circum",
  statique: "statique", electret: "électret", dynamic: "dynamique",
};
const libelle = (v) => {
  const t = texte(v);
  if (!t) return null;
  const bas = t.toLowerCase();
  return UNIFORMISER[bas] ?? bas;
};

const CATEGORIES = [
  {
    id: "micros", nom: "Micros", onglet: "MICRO", ficheCol: 15,
    colonnes: [
      { key: "capteur", col: 2, label: "Capteur", f: libelle },
      { key: "membrane", col: 3, label: "Membrane", f: libelle },
      { key: "directivite", col: 4, label: "Directivité", f: libelle },
      { key: "sensibilite", col: 5, label: "Sensibilité", unite: "dBV/Pa", num: true, mieux: "haut" },
      // tableau: false → gardées pour le filtre prix, le graphique et la comparaison détaillée,
      // mais masquées du tableau récapitulatif (jugées moins utiles au premier coup d'œil).
      { key: "z", col: 6, label: "Impédance", unite: "Ω", num: true, log: true, tableau: false },
      { key: "fmin", col: 7, label: "F min", unite: "Hz", num: true, mieux: "bas", log: true, tableau: false },
      { key: "fmax", col: 8, label: "F max", unite: "Hz", num: true, mieux: "haut", log: true, tableau: false },
      { key: "bruit", col: 9, label: "Bruit propre", unite: "dB(A)", num: true, mieux: "bas" },
      { key: "splmax", col: 10, label: "SPL max", unite: "dB SPL", num: true, mieux: "haut" },
      // Recalculés à partir du bruit et du SPL max (conventions de l'onglet INFOS).
      // tableau: false → gardés pour le graphique/comparaison, masqués du récap (se retrouvent
      // facilement à partir du bruit propre et du SPL max, déjà affichés).
      { key: "snr", label: "Rapport S/B", unite: "dB", num: true, mieux: "haut", tableau: false,
        calc: (r) => (r.bruit != null ? 94 - r.bruit : null) },
      { key: "dynamique", label: "Dynamique", unite: "dB", num: true, mieux: "haut", tableau: false,
        calc: (r) => (r.bruit != null && r.splmax != null ? r.splmax - r.bruit : null) },
      { key: "prix", col: 13, label: "Prix", unite: "€", num: true, mieux: "bas", log: true, tableau: false },
    ],
  },
  {
    id: "casques", nom: "Casques", onglet: "CASQUES", ficheCol: 17,
    colonnes: [
      { key: "oreille", col: 2, label: "Type", f: libelle },
      { key: "ouverture", col: 3, label: "Ouverture", f: libelle },
      { key: "techno", col: 4, label: "Technologie", f: libelle },
      { key: "fmin", col: 5, label: "F min", unite: "Hz", num: true, mieux: "bas", log: true },
      { key: "fmax", col: 6, label: "F max", unite: "Hz", num: true, mieux: "haut", log: true },
      { key: "z", col: 7, label: "Impédance", unite: "Ω", num: true, log: true },
      { key: "sensibilite", col: 8, label: "SPL nominal", unite: "dB", num: true, mieux: "haut" },
      { key: "pmax", col: 9, label: "Puissance max", unite: "mW", num: true, mieux: "haut", log: true },
      { key: "splmax", col: 10, label: "SPL max", unite: "dB SPL", num: true, mieux: "haut" },
      { key: "thd", col: 13, label: "THD", unite: "%", num: true, mieux: "bas", log: true },
      { key: "isolation", col: 14, label: "Isolation", unite: "dB", num: true, mieux: "haut" },
      { key: "prix", col: 15, label: "Prix", unite: "€", num: true, mieux: "bas", log: true },
    ],
  },
  {
    id: "enceintes", nom: "Enceintes actives", onglet: "HP actif", ficheCol: 13,
    colonnes: [
      { key: "puissance", col: 2, label: "Puissance RMS", unite: "W", num: true, mieux: "haut", log: true },
      { key: "f3", col: 3, label: "F basse (−3 dB)", unite: "Hz", num: true, mieux: "bas", log: true },
      { key: "f6", col: 4, label: "F basse (−6 dB)", unite: "Hz", num: true, mieux: "bas", log: true },
      { key: "f10", col: 5, label: "F basse (−10 dB)", unite: "Hz", num: true, mieux: "bas", log: true },
      { key: "fmax", col: 6, label: "F haute (−3 dB)", unite: "Hz", num: true, mieux: "haut", log: true },
      { key: "voies", col: 7, label: "Voies", num: true },
      { key: "boomer", col: 8, label: "Boomer", unite: "pouces", num: true },
      { key: "splmax", col: 9, label: "SPL max", unite: "dB SPL", num: true, mieux: "haut" },
      { key: "bruit", col: 10, label: "Bruit", unite: "dB(A)", num: true, mieux: "bas" },
      { key: "thd", col: 11, label: "THD grave", unite: "%", num: true, mieux: "bas" },
      { key: "prix", col: 12, label: "Prix (l'unité)", unite: "€", num: true, mieux: "bas", log: true },
    ],
  },
  {
    id: "preamps", nom: "Préamplis", onglet: "Préamp",
    colonnes: [
      { key: "fmin", col: 2, label: "F min", unite: "Hz", num: true, mieux: "bas", log: true },
      { key: "fmax", col: 3, label: "F max", unite: "Hz", num: true, mieux: "haut", log: true },
      { key: "gmicmin", col: 4, label: "Gain micro min", unite: "dB", num: true },
      { key: "gmicmax", col: 5, label: "Gain micro max", unite: "dB", num: true, mieux: "haut" },
      { key: "glinemin", col: 7, label: "Gain ligne min", unite: "dB", num: true },
      { key: "glinemax", col: 8, label: "Gain ligne max", unite: "dB", num: true },
      { key: "ginstmin", col: 10, label: "Gain instrument min", unite: "dB", num: true },
      { key: "ginstmax", col: 11, label: "Gain instrument max", unite: "dB", num: true },
      { key: "sortiemax", col: 13, label: "Sortie max", unite: "dBu", num: true, mieux: "haut" },
      { key: "bruitsortie", col: 14, label: "Bruit de sortie", unite: "dBu", num: true, mieux: "bas" },
      { key: "ein", col: 15, label: "EIN", unite: "dBu", num: true, mieux: "bas" },
      { key: "annee", col: 16, label: "Année", num: true },
      { key: "prix", col: 17, label: "Prix", unite: "€", num: true, mieux: "bas", log: true },
    ],
  },
  {
    id: "amplis", nom: "Amplis de puissance", onglet: "AMPLIS", ficheCol: 9,
    colonnes: [
      { key: "voies", col: 2, label: "Nombre de sorties", num: true },
      // Une colonne par type de puissance réellement publié (charge et/ou mode pontés) :
      // tous les fabricants n'indiquent pas les mêmes, les colonnes vides sont masquées automatiquement.
      { key: "p8", col: 3, label: "Puissance / sortie à 8 Ω", unite: "W", num: true, mieux: "haut", log: true },
      { key: "p4", col: 4, label: "Puissance / sortie à 4 Ω", unite: "W", num: true, mieux: "haut", log: true },
      { key: "p2", col: 5, label: "Puissance / sortie à 2 Ω", unite: "W", num: true, mieux: "haut", log: true },
      { key: "pponte", col: 6, label: "Puissance pontée (mono, 4 Ω)", unite: "W", num: true, mieux: "haut", log: true },
      { key: "zmin", col: 7, label: "Impédance mini", unite: "Ω", num: true, mieux: "bas" },
      { key: "prix", col: 8, label: "Prix", unite: "€", num: true, mieux: "bas", log: true },
    ],
  },
  {
    id: "cartesson", nom: "Cartes son", onglet: "CARTES SON", ficheCol: 11,
    colonnes: [
      { key: "entrees", col: 2, label: "Entrées analogiques", num: true },
      { key: "sorties", col: 3, label: "Sorties analogiques", num: true },
      { key: "freqmax", col: 4, label: "Fréq. éch. max", unite: "kHz", num: true, mieux: "haut" },
      { key: "bits", col: 5, label: "Résolution max", unite: "bits", num: true, mieux: "haut" },
      { key: "drad", col: 6, label: "Dynamique A/D", unite: "dBA", num: true, mieux: "haut" },
      { key: "drda", col: 7, label: "Dynamique D/A", unite: "dBA", num: true, mieux: "haut" },
      { key: "gainmax", col: 8, label: "Gain préampli max", unite: "dB", num: true, mieux: "haut" },
      { key: "connectivite", col: 9, label: "Connectivité", f: texte },
      { key: "prix", col: 10, label: "Prix", unite: "€", num: true, mieux: "bas", log: true },
    ],
  },
];

// Construit les lignes propres d'une catégorie
function construire(cat) {
  const lignes = (brut[cat.onglet] || []).slice(1);   // on saute la ligne d'en-têtes
  const items = lignes
    .map((l, i) => {
      const r = { id: `${cat.id}-${i}`, marque: texte(l[0]) ?? "—", modele: texte(l[1]) ?? "—" };
      for (const c of cat.colonnes) {
        if (c.calc) continue;
        r[c.key] = c.num ? nombre(l[c.col]) : (c.f ?? texte)(l[c.col]);
      }
      for (const c of cat.colonnes) if (c.calc) r[c.key] = c.calc(r);
      // Lien direct vers la fiche technique en PDF (si renseigné sur le tableur)
      r.fiche = cat.ficheCol != null ? texte(l[cat.ficheCol]) : null;
      return r;
    })
    .filter((r) => r.modele !== "—");

  // On ne garde que les colonnes qui contiennent au moins une valeur
  const colonnes = cat.colonnes
    .filter((c) => items.some((r) => r[c.key] != null))
    .map(({ f, calc, col, ...reste }) => reste);

  return { id: cat.id, nom: cat.nom, colonnes, items };
}

export const materiel = CATEGORIES.map(construire);
