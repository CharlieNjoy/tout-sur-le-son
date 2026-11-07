// =====================================================================
//  Met à jour src/data/materiel-brut.json à partir du tableur Google
//  « SPEC équipement » (partagé en lecture par lien).
//  Utilisation : npm run maj-materiel
// =====================================================================
import { writeFile } from "node:fs/promises";

const ID = "1fhejyvh-JqYGXqi4wMpsgv0LvVu4C-mI2I62RD3OjX0";
const ONGLETS = ["CASQUES", "HP actif", "MICRO", "Préamp"];
const SORTIE = new URL("../src/data/materiel-brut.json", import.meta.url);

// Lecture d'un CSV (gère les guillemets et les virgules dans les cellules)
function lireCSV(csv) {
  const lignes = [];
  let ligne = [], cellule = "", entreGuillemets = false;
  for (let i = 0; i < csv.length; i++) {
    const c = csv[i];
    if (entreGuillemets) {
      if (c === '"' && csv[i + 1] === '"') { cellule += '"'; i++; }
      else if (c === '"') entreGuillemets = false;
      else cellule += c;
    } else if (c === '"') entreGuillemets = true;
    else if (c === ",") { ligne.push(cellule); cellule = ""; }
    else if (c === "\n") { ligne.push(cellule); lignes.push(ligne); ligne = []; cellule = ""; }
    else if (c !== "\r") cellule += c;
  }
  ligne.push(cellule);
  lignes.push(ligne);
  return lignes;
}

const resultat = {};
for (const onglet of ONGLETS) {
  const url = `https://docs.google.com/spreadsheets/d/${ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(onglet)}`;
  const reponse = await fetch(url);
  if (!reponse.ok) throw new Error(`Onglet « ${onglet} » : erreur ${reponse.status}`);
  const lignes = lireCSV(await reponse.text());
  // Nombre de colonnes = dernière colonne d'en-tête non vide ; on retire les lignes vides
  const nbCol = lignes[0].reduce((m, c, i) => (c.trim() ? i + 1 : m), 0);
  resultat[onglet] = lignes.map((l) => l.slice(0, nbCol)).filter((l) => l.some((c) => c.trim()));
  console.log(`${onglet} : ${resultat[onglet].length - 1} lignes`);
}

await writeFile(SORTIE, JSON.stringify(resultat));
console.log("Données mises à jour → src/data/materiel-brut.json");
