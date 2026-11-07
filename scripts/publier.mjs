// =====================================================================
//  PUBLIER LE SITE EN UNE COMMANDE : npm run publier
//  1. récupère les dernières données du tableur Google (matériel)
//  2. enregistre toutes les modifications dans Git
//  3. envoie sur GitHub → Cloudflare met le site en ligne (1 à 2 min)
//  Message personnalisé possible : npm run publier -- "mon message"
// =====================================================================
import { execSync } from "node:child_process";

const lancer = (cmd) => execSync(cmd, { stdio: "inherit" });
const message = process.argv[2] || `Mise à jour du ${new Date().toLocaleString("fr-FR")}`;

try {
  lancer("node scripts/maj-materiel.mjs");
} catch {
  console.warn("⚠ Données du tableur non récupérées (connexion ?) : on publie quand même le reste.");
}

lancer("git add -A");
const aEnvoyer = execSync("git status --porcelain").toString().trim();
if (aEnvoyer) lancer(`git commit -m ${JSON.stringify(message)}`);
else console.log("Aucune modification à enregistrer.");

lancer("git push");
console.log("✔ Envoyé. Le site en ligne sera à jour dans 1 à 2 minutes.");
