// =====================================================================
//  LEÇONS — correspondance entre le plan de cours (data/cours.js) et les
//  fichiers de contenu (src/content/lecons/<matiere>/<chapitreSlug>/<slug>.mdx).
//
//  Le chapitreSlug est calculé automatiquement à partir du TITRE du chapitre
//  (voir slugify ci-dessous) : plus besoin de déclarer les chapitres à la
//  main, ni de créer une route par chapitre — une seule route générique
//  (src/pages/cours/[matiere]/[chapitre]/[lecon].astro) dessert tout.
//  Pour ajouter un chapitre : créer son dossier de contenu
//  src/content/lecons/<matiere>/<slugify(titre du chapitre)>/ et y mettre
//  des fichiers .mdx — c'est tout.
// =====================================================================
import { matieres } from "./cours.js";

// Slug stable, insensible aux accents/majuscules/apostrophes/espaces.
export function slugify(s) {
  return s
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Compare deux titres en ignorant les espaces insécables (évite qu'une différence
// de typographie invisible entre data/cours.js et le frontmatter d'un .mdx casse le lien).
const normaliser = (s) => s.replace(/\s/g, " ");

// Donne l'URL + le numéro ("1.1") de la leçon correspondant à un sous-chapitre du
// sommaire, si son fichier .mdx existe dans la collection "lecons".
// `entrees` = await getCollection("lecons").
export function infosLecon(entrees, matiereId, chapitreTitre, titreSousChapitre) {
  const matiere = matieres.find((m) => m.id === matiereId);
  if (!matiere) return null;
  const numero = matiere.chapitres.findIndex((c) => c.titre === chapitreTitre) + 1;
  if (numero === 0) return null;
  const chapitreSlug = slugify(chapitreTitre);

  const prefixe = `${matiereId}/${chapitreSlug}/`;
  const entree = entrees.find(
    (e) => e.id.startsWith(prefixe) && normaliser(e.data.titre) === normaliser(titreSousChapitre)
  );
  if (!entree) return null;

  return {
    url: `/cours/${matiereId}/${chapitreSlug}/${entree.id.slice(prefixe.length)}`,
    numero: `${numero}.${entree.data.ordre}`,
  };
}
