// =====================================================================
//  CHAPITRES DE COURS (métadonnées, PAS le contenu)
//  Le contenu texte de chaque leçon vit dans src/content/lecons/ (fichiers .mdx).
//  Ici on déclare juste, pour chaque chapitre déjà présent dans data/cours.js,
//  le slug utilisé dans l'URL.
//
//  Pour ajouter un chapitre : créer son dossier de pages
//  src/pages/cours/<matiere>/<slug-chapitre>/[lecon].astro (copier celui de
//  "generalites"), son dossier de contenu src/content/lecons/<matiere>/<slug-chapitre>/,
//  et déclarer son entrée ci-dessous.
// =====================================================================

export const chapitres = {
  acoustique: {
    // numero : position de ce chapitre dans data/cours.js (sert aux préfixes "1.1", "1.2"…)
    generalites: { matiere: "acoustique", chapitreSlug: "generalites", titre: "Généralités", numero: 1 },
  },
};

// Compare deux titres en ignorant les espaces insécables (évite qu'une différence
// de typographie invisible entre data/cours.js et le frontmatter d'un .mdx casse le lien).
const normaliser = (s) => s.replace(/ /g, " ");

// Donne l'URL + le numéro ("1.1") de la leçon correspondant à un sous-chapitre du
// sommaire, si son fichier .mdx existe dans la collection "lecons".
// `entrees` = await getCollection("lecons").
export function infosLecon(entrees, matiereId, chapitreTitre, titreSousChapitre) {
  const chapitresMatiere = chapitres[matiereId];
  if (!chapitresMatiere) return null;
  const chapitre = Object.values(chapitresMatiere).find((c) => c.titre === chapitreTitre);
  if (!chapitre) return null;

  const prefixe = `${matiereId}/${chapitre.chapitreSlug}/`;
  const entree = entrees.find(
    (e) => e.id.startsWith(prefixe) && normaliser(e.data.titre) === normaliser(titreSousChapitre)
  );
  if (!entree) return null;

  return {
    url: `/cours/${matiereId}/${chapitre.chapitreSlug}/${entree.id.slice(prefixe.length)}`,
    numero: `${chapitre.numero}.${entree.data.ordre}`,
  };
}
