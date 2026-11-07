/**
 * MISE À JOUR « SPEC équipement » — onglet MICRO
 * Écrit les valeurs vérifiées sur les fiches constructeur, surligne les cellules
 * modifiées en jaune et ajoute une note avec la source.
 * Enregistre les fiches PDF constructeur dans le dossier Drive « Microphones ».
 *
 * Utilisation : Exécuter > majMicros, puis Exécuter > enregistrerPdfMicros
 */

const DOSSIER_MICROS = "1g-BSl_95bE6aukOnelrh6jvIJ4Crl73L";   // FICHES TECH SPEC / Microphones
const DATE_RELEVE = "07/11/2026";
const JAUNE = "#fff2cc";

const SRC = {
  neumann: "Neumann – Series 180 product information (https://tmppro.com/documents/35197.pdf)",
  shure: "Shure – SM7B spec sheet (https://media.sweetwater.com/store/media/us_pro_sm7b_specsheet.pdf)",
  behringerEcm: "Behringer – ECM8000 technical specifications (https://r2.gear4music.com/media/21/215587/download_215587.pdf). Sensibilité « 70 dB » sans référence : supposée re 1 V/µbar, convertie en dBV/Pa (+20 dB).",
  behringerXm: "Behringer – XM8500 Technical Specifications (Drive). Sensibilité « −70 dB » sans référence : supposée re 1 V/µbar, convertie en dBV/Pa (+20 dB).",
  prodipe: "Prodipe – Manuel TT1 Pro-Lanen Instruments (Drive) : 2,2 mV/Pa → −53,2 dBV/Pa (la fiche indique aussi −49 dBV/Pa, incohérent). Réponse « 50-150000 Hz » lue 50-15000 Hz.",
  slate: "Slate Digital – ML-1A vs ML-1 Technical Specifications (support.slatedigital.com). SPL max non publié.",
  tbone: "the t.bone (marque Thomann) – fiche produit thomann.co.uk",
  tboneEm: "the t.bone EM 9600 – caractéristiques constructeur (mode Normal), via bonedo.de. SPL max non spécifié.",
  uaSc1: "Universal Audio – FAQ SC-1 (help.uaudio.com). SPL max : 135 dB (tableau, 1 % THD) retenu ; la FAQ indique aussi 145 dB.",
  uaDlx: "Universal Audio – Sphere Mic Specifications (help.uaudio.com). SPL max 140 dB seulement avec pad −20 dB : non retenu.",
  focusrite: "Focusrite – Scarlett CM25 MkIII (focusrite.com). SPL max non publié.",
  sonovente: "Prix SonoVente.com relevé le " + DATE_RELEVE,
  orthographe: "Correction d'orthographe / uniformisation de la marque",
};

// Une ligne par modèle : la clé est le texte actuel de la colonne « Modèle »
// Colonnes : A Marque, B Modèle, C Capteur, D Membrane, E Directivité, F Sensibilité (dBV/Pa),
//            G Z (ohm), H F min, I F max, J Bruit, K SPL max, N Prix
const MAJ = [
  { modele: "ECM8000", src: SRC.behringerEcm, vals: { A: "Behringer", C: "electret", D: "petite", E: "omni", F: -50, G: 200, H: 20, I: 20000 }, prix: 35 },
  { modele: "XM8500", src: SRC.behringerXm, vals: { A: "Behringer", F: -50 } },
  { modele: "KM183", src: SRC.neumann, vals: { C: "statique", D: "petite", E: "omni", F: -38.4, G: 50, H: 20, I: 20000, J: 13, K: 140 }, prix: 819 },
  { modele: "KM184", src: SRC.neumann, vals: { C: "statique", D: "petite", E: "cardioide", F: -36.5, G: 50, H: 20, I: 20000, J: 13, K: 138 }, prix: 795 },
  { modele: "TT1 pro", src: SRC.prodipe, vals: { A: "Prodipe", B: "TT1 Pro", C: "dynamique", E: "cardioide", F: -53.2, G: 600, H: 50, I: 15000 }, prix: 21 },
  { modele: "SM7B", src: SRC.shure, vals: { C: "dynamique", E: "cardioide", F: -59, G: 150, H: 50, I: 20000 } },
  { modele: "ML-1", src: SRC.slate, vals: { C: "statique", D: "large", E: "cardioide", F: -34, G: 200, H: 20, I: 20000, J: 17 } },
  { modele: "MB7 beta", src: SRC.tbone, vals: { A: "the t.bone", B: "MB 7 Beta", C: "dynamique", E: "cardioide", F: -57, G: 320, H: 20, I: 20000 } },
  { modele: "SC-1", src: SRC.uaSc1, vals: { F: -32, G: 150, J: 12, K: 135 }, prix: 499 },
  { modele: "Sphere DLX", src: SRC.uaDlx, vals: { C: "statique", D: "large", F: -33, G: 200, J: 7 }, prix: 1419 },
  { modele: "EM9600", src: SRC.tboneEm, vals: { A: "the t.bone", F: -50, G: 400, J: 18.6, K: "" } },
  { modele: "CM25MK3", src: SRC.focusrite, vals: { A: "Focusrite" } },
  { modele: "BC500", src: SRC.orthographe, vals: { A: "the t.bone" } },
  { modele: "RB100", src: SRC.orthographe, vals: { A: "the t.bone" } },
];

// Fiches PDF constructeur à ranger dans le dossier Microphones
const PDF = [
  { nom: "Neumann_KM183_KM184_Series180.pdf", url: "https://tmppro.com/documents/35197.pdf" },
  { nom: "Shure_SM7B_specsheet.pdf", url: "https://media.sweetwater.com/store/media/us_pro_sm7b_specsheet.pdf" },
  { nom: "Behringer_ECM8000_specs.pdf", url: "https://r2.gear4music.com/media/21/215587/download_215587.pdf" },
  { nom: "AEA_R88MK2_specs.pdf", url: "https://aearibbonmics.com/wp-content/uploads/2018/01/AEA-R88-Specifications-2-3-18.pdf" },
];

function majMicros() {
  const f = SpreadsheetApp.getActive().getSheetByName("MICRO");
  const nbLignes = f.getLastRow();
  const modeles = f.getRange(2, 2, nbLignes - 1, 1).getValues().map((l) => String(l[0]).trim().toLowerCase());
  const rapport = [];

  MAJ.forEach((m) => {
    const i = modeles.indexOf(m.modele.toLowerCase());
    if (i < 0) { rapport.push("INTROUVABLE : " + m.modele); return; }
    const ligne = i + 2;
    Object.entries(m.vals).forEach(([col, v]) => ecrire(f, col + ligne, v, m.src));
    if (m.prix != null) ecrire(f, "N" + ligne, m.prix, SRC.sonovente);
    rapport.push("OK : " + m.modele + " (ligne " + ligne + ")");
  });

  // SNR et dynamique : formules qui restent vides si une donnée manque
  // (avant : 94 et 0 affichés quand le bruit était vide)
  for (let l = 2; l <= nbLignes; l++) {
    f.getRange("L" + l).setFormula('=IF(J' + l + '="","",94-J' + l + ')');
    f.getRange("M" + l).setFormula('=IF(OR(J' + l + '="",K' + l + '=""),"",K' + l + '-J' + l + ')');
  }
  rapport.push("Formules SNR / dynamique corrigées (lignes 2 à " + nbLignes + ")");
  Logger.log(rapport.join("\n"));
}

function ecrire(feuille, a1, valeur, source) {
  const c = feuille.getRange(a1);
  c.setValue(valeur);
  c.setBackground(JAUNE);
  c.setNote("Mis à jour le " + DATE_RELEVE + "\nSource : " + source);
}

function enregistrerPdfMicros() {
  const dossier = DriveApp.getFolderById(DOSSIER_MICROS);
  PDF.forEach((p) => {
    if (dossier.getFilesByName(p.nom).hasNext()) { Logger.log("Déjà présent : " + p.nom); return; }
    try {
      const r = UrlFetchApp.fetch(p.url, { muteHttpExceptions: true, followRedirects: true });
      if (r.getResponseCode() !== 200) { Logger.log("ÉCHEC " + r.getResponseCode() + " : " + p.url); return; }
      dossier.createFile(r.getBlob().setName(p.nom));
      Logger.log("Enregistré : " + p.nom);
    } catch (e) {
      Logger.log("ÉCHEC : " + p.nom + " — " + e);
    }
  });
}
