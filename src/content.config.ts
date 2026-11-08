// =====================================================================
//  COLLECTION DE CONTENU : LES LEÇONS
//  Chaque leçon est un fichier .mdx dans src/content/lecons/<matiere>/<chapitre>/<slug>.mdx
//  avec un en-tête (frontmatter) titre/ordre/références, et le texte en Markdown
//  en dessous — c'est CE fichier qu'on modifie pour changer un texte de cours.
// =====================================================================
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const lecons = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/lecons" }),
  schema: z.object({
    // Titre affiché en haut de la page (doit correspondre à l'intitulé dans data/cours.js
    // pour que le sommaire /cours puisse créer le lien automatiquement).
    titre: z.string(),
    // Ordre d'affichage dans le chapitre (1, 2, 3…) → sert aux flèches précédent/suivant.
    ordre: z.number(),
    // Liens affichés dans l'encart "Références" en bas de page (facultatif).
    references: z
      .array(
        z.object({
          titre: z.string(),
          url: z.string(),
          description: z.string().optional(),
        })
      )
      .optional(),
  }),
});

export const collections = { lecons };
