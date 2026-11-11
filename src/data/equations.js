// =====================================================================
//  FICHES D'ÉQUATIONS — une liste de formules par matière, groupées par
//  chapitre (mêmes chapitres que data/cours.js).
//
//  niveau: "intermediaire" (équations simples : produit en croix, règles
//  de puissances, équations log au maximum) ou "confirme" (tout le
//  reste : racines, trigonométrie, nombres complexes, Fourier...).
//
//  formule : HTML de confiance (rendu avec set:html par FicheEquation.astro).
//  Utiliser <sup>/<sub> pour exposants/indices, et la classe .fraction
//  (voir styles/global.css) pour une barre de fraction :
//    <span class="fraction"><span class="num">a</span><span class="den">b</span></span>
// =====================================================================

const frac = (num, den) => `<span class="fraction"><span class="num">${num}</span><span class="den">${den}</span></span>`;

export const equations = {

  // ----------------------------------------------------------- ACOUSTIQUE
  acoustique: [
    {
      chapitre: "Signaux",
      formules: [
        {
          nom: "Période et fréquence", niveau: "intermediaire",
          formule: `T = ${frac("1", "f")}`,
          variables: [
            { symbole: "T", description: "période", unite: "s" },
            { symbole: "f", description: "fréquence", unite: "Hz" },
          ],
        },
        {
          nom: "Niveau en décibels (pression)", niveau: "intermediaire",
          formule: `L<sub>p</sub> = 20 · log(${frac("p", "p<sub>0</sub>")})`,
          variables: [
            { symbole: "L<sub>p</sub>", description: "niveau de pression sonore", unite: "dB SPL" },
            { symbole: "p", description: "pression acoustique mesurée", unite: "Pa" },
            { symbole: "p<sub>0</sub>", description: "pression de référence = 20 µPa" },
          ],
          note: "Doubler la pression → +6 dB. Multiplier la pression par 10 → +20 dB.",
        },
        {
          nom: "Déphasage ↔ retard temporel", niveau: "intermediaire",
          formule: `${frac("φ", "360°")} = ${frac("Δt", "T")}`,
          variables: [
            { symbole: "φ", description: "déphasage", unite: "°" },
            { symbole: "Δt", description: "retard entre les deux signaux", unite: "s" },
            { symbole: "T", description: "période du signal", unite: "s" },
          ],
          note: "Produit en croix : φ = 360 · Δt / T.",
        },
        {
          nom: "Taux de distorsion harmonique (THD)", niveau: "confirme",
          formule: `THD = ${frac("√(V<sub>2</sub>² + V<sub>3</sub>² + ...)", "V<sub>1</sub>")} × 100`,
          variables: [
            { symbole: "V<sub>1</sub>", description: "amplitude du fondamental" },
            { symbole: "V<sub>n</sub>", description: "amplitude de l'harmonique n" },
          ],
        },
      ],
    },
    {
      chapitre: "L'onde sonore",
      formules: [
        {
          nom: "Vitesse du son dans l'air (approximation)", niveau: "intermediaire",
          formule: "c ≈ 331 + 0,6 · θ",
          variables: [
            { symbole: "c", description: "célérité du son", unite: "m/s" },
            { symbole: "θ", description: "température de l'air", unite: "°C" },
          ],
        },
        {
          nom: "Vitesse du son (formule complète)", niveau: "confirme",
          formule: "c = 20,05 · √(T)",
          variables: [{ symbole: "T", description: "température absolue", unite: "K" }],
        },
        {
          nom: "Longueur d'onde", niveau: "intermediaire",
          formule: `λ = ${frac("c", "f")}`,
          variables: [
            { symbole: "λ", description: "longueur d'onde", unite: "m" },
            { symbole: "c", description: "célérité du son", unite: "m/s" },
            { symbole: "f", description: "fréquence", unite: "Hz" },
          ],
        },
        {
          nom: "Loi de l'inverse carré (champ libre)", niveau: "confirme",
          formule: `I = ${frac("P", "4π·r²")}`,
          variables: [
            { symbole: "I", description: "intensité acoustique", unite: "W/m²" },
            { symbole: "P", description: "puissance de la source", unite: "W" },
            { symbole: "r", description: "distance à la source", unite: "m" },
          ],
        },
        {
          nom: "Atténuation avec la distance", niveau: "confirme",
          formule: `ΔL = 20 · log(${frac("r<sub>2</sub>", "r<sub>1</sub>")})`,
          variables: [{ symbole: "ΔL", description: "variation de niveau entre r₁ et r₂", unite: "dB" }],
          note: "En champ libre : −6 dB chaque fois que la distance double.",
        },
        {
          nom: "Effet Doppler", niveau: "confirme",
          formule: `f' = f · ${frac("c ± v<sub>récepteur</sub>", "c ± v<sub>source</sub>")}`,
          variables: [
            { symbole: "f'", description: "fréquence perçue" },
            { symbole: "f", description: "fréquence émise" },
            { symbole: "c", description: "célérité du son", unite: "m/s" },
          ],
        },
      ],
    },
    {
      chapitre: "Psychoacoustique",
      formules: [
        {
          nom: "Somme de niveaux (sources incohérentes)", niveau: "confirme",
          formule: "L<sub>total</sub> = 10 · log(10^(L₁/10) + 10^(L₂/10) + ...)",
          variables: [{ symbole: "L<sub>n</sub>", description: "niveau de la source n", unite: "dB" }],
          note: "Deux sources de même niveau → +3 dB. Dix sources identiques → +10 dB.",
        },
      ],
    },
    {
      chapitre: "Champ libre",
      formules: [
        {
          nom: "Niveau de puissance acoustique", niveau: "confirme",
          formule: `L<sub>W</sub> = 10 · log(${frac("W", "W<sub>0</sub>")})`,
          variables: [
            { symbole: "L<sub>W</sub>", description: "niveau de puissance acoustique", unite: "dB" },
            { symbole: "W<sub>0</sub>", description: "puissance de référence = 1 pW" },
          ],
        },
        {
          nom: "Pression à partir de la puissance (source omnidirectionnelle)", niveau: "confirme",
          formule: "L<sub>p</sub> = L<sub>W</sub> − 20 · log(r) − 11",
          variables: [{ symbole: "r", description: "distance à la source", unite: "m" }],
        },
        {
          nom: "Indice de directivité", niveau: "confirme",
          formule: "DI = 10 · log(Q)",
          variables: [{ symbole: "Q", description: "facteur de directivité (1 = omnidirectionnel)" }],
        },
      ],
    },
    {
      chapitre: "Champ réverbéré",
      formules: [
        {
          nom: "Loi de Sabine", niveau: "intermediaire",
          formule: `TR = 0,16 · ${frac("V", "A")}`,
          variables: [
            { symbole: "TR", description: "temps de réverbération (RT60)", unite: "s" },
            { symbole: "V", description: "volume de la salle", unite: "m³" },
            { symbole: "A", description: "surface d'absorption équivalente = Σ Sᵢ·αᵢ", unite: "m²" },
          ],
        },
        {
          nom: "Niveau en champ réverbéré", niveau: "intermediaire",
          formule: `L<sub>p,rev</sub> = L<sub>W</sub> + 10 · log(${frac("4", "A")})`,
          variables: [{ symbole: "A", description: "surface d'absorption équivalente de la salle", unite: "m²" }],
        },
        {
          nom: "Loi d'Eyring", niveau: "confirme",
          formule: `TR = ${frac("0,16 · V", "−S · ln(1 − ᾱ)")}`,
          variables: [
            { symbole: "S", description: "surface totale des parois", unite: "m²" },
            { symbole: "ᾱ", description: "coefficient d'absorption moyen" },
          ],
          note: "Plus précise que Sabine quand ᾱ est élevé (salle très absorbante).",
        },
        {
          nom: "Fréquences propres d'une salle (mode axial)", niveau: "confirme",
          formule: `f = ${frac("n · c", "2L")}`,
          variables: [
            { symbole: "n", description: "numéro du mode (1, 2, 3…)" },
            { symbole: "L", description: "dimension de la salle sur l'axe considéré", unite: "m" },
          ],
        },
      ],
    },
    {
      chapitre: "Couplage",
      formules: [
        {
          nom: "Indice d'affaiblissement acoustique", niveau: "intermediaire",
          formule: `R = 10 · log(${frac("1", "τ")})`,
          variables: [
            { symbole: "R", description: "indice d'affaiblissement", unite: "dB" },
            { symbole: "τ", description: "facteur de transmission (puissance transmise / incidente)" },
          ],
        },
        {
          nom: "Loi de masse", niveau: "intermediaire",
          formule: "R ≈ 20 · log(m · f) − 47",
          variables: [
            { symbole: "m", description: "masse surfacique de la paroi", unite: "kg/m²" },
            { symbole: "f", description: "fréquence", unite: "Hz" },
          ],
          note: "+6 dB d'affaiblissement chaque fois que la masse (ou la fréquence) double.",
        },
      ],
    },
    {
      chapitre: "Correction acoustique",
      formules: [
        {
          nom: "Coefficient d'absorption moyen", niveau: "intermediaire",
          formule: `ᾱ = ${frac("Σ Sᵢ · αᵢ", "Σ Sᵢ")}`,
          variables: [{ symbole: "α<sub>i</sub>", description: "coefficient d'absorption de la surface i" }],
        },
        {
          nom: "Résonateur de Helmholtz", niveau: "confirme",
          formule: `f = ${frac("c", "2π")} · √(${frac("S", "V · L<sub>eff</sub>")})`,
          variables: [
            { symbole: "S", description: "section du col", unite: "m²" },
            { symbole: "V", description: "volume de la cavité", unite: "m³" },
            { symbole: "L<sub>eff</sub>", description: "longueur effective du col (corrigée)", unite: "m" },
          ],
        },
      ],
    },
  ],

  // ----------------------------------------------------------- TECHNOLOGIE
  technologie: [
    {
      chapitre: "Chaîne du son",
      formules: [
        {
          nom: "Gain en tension", niveau: "intermediaire",
          formule: `G = 20 · log(${frac("V<sub>sortie</sub>", "V<sub>entrée</sub>")})`,
          variables: [{ symbole: "G", description: "gain", unite: "dB" }],
        },
        {
          nom: "dBu et dBV (références de tension)", niveau: "intermediaire",
          formule: "dBu = 20 · log(V / 0,775) &nbsp;·&nbsp; dBV = 20 · log(V / 1)",
          variables: [{ symbole: "V", description: "tension efficace mesurée", unite: "V" }],
        },
      ],
    },
    {
      chapitre: "Préamplis",
      formules: [
        {
          nom: "Perte de charge (pont diviseur d'impédance)", niveau: "intermediaire",
          formule: `${frac("V<sub>reçue</sub>", "V<sub>source</sub>")} = ${frac("Z<sub>entrée</sub>", "Z<sub>entrée</sub> + Z<sub>sortie</sub>")}`,
          variables: [
            { symbole: "Z<sub>sortie</sub>", description: "impédance de sortie de la source" },
            { symbole: "Z<sub>entrée</sub>", description: "impédance d'entrée du préampli" },
          ],
          note: "Règle pratique : Z entrée ≥ 10 × Z sortie pour une perte négligeable.",
        },
      ],
    },
    {
      chapitre: "Effets",
      formules: [
        {
          nom: "Compresseur : niveau de sortie au-dessus du seuil", niveau: "confirme",
          formule: `S = T + ${frac("E − T", "ratio")}`,
          variables: [
            { symbole: "E", description: "niveau d'entrée", unite: "dB" },
            { symbole: "T", description: "seuil (threshold)", unite: "dB" },
            { symbole: "S", description: "niveau de sortie", unite: "dB" },
          ],
        },
        {
          nom: "Fréquence de coupure d'un filtre RC", niveau: "confirme",
          formule: `f<sub>c</sub> = ${frac("1", "2π · R · C")}`,
          variables: [
            { symbole: "R", description: "résistance", unite: "Ω" },
            { symbole: "C", description: "capacité", unite: "F" },
          ],
        },
      ],
    },
    {
      chapitre: "Amplification",
      formules: [
        {
          nom: "Puissance électrique (loi d'Ohm)", niveau: "intermediaire",
          formule: "P = U · I",
          variables: [
            { symbole: "P", description: "puissance", unite: "W" },
            { symbole: "U", description: "tension", unite: "V" },
            { symbole: "I", description: "courant", unite: "A" },
          ],
          note: `Formes équivalentes : P = U²/R = R·I².`,
        },
        {
          nom: "Marge de headroom (ampli / enceinte)", niveau: "intermediaire",
          formule: `H = 10 · log(${frac("P<sub>ampli</sub>", "P<sub>enceinte</sub>")})`,
          variables: [{ symbole: "H", description: "headroom disponible", unite: "dB" }],
        },
      ],
    },
    {
      chapitre: "Haut-parleurs",
      formules: [
        {
          nom: "SPL à partir de la sensibilité", niveau: "intermediaire",
          formule: "SPL = Sensibilité + 10 · log(P)",
          variables: [
            { symbole: "Sensibilité", description: "niveau produit par 1 W à 1 m", unite: "dB SPL" },
            { symbole: "P", description: "puissance électrique fournie", unite: "W" },
          ],
        },
        {
          nom: "Fréquence de résonance (Thiele & Small)", niveau: "confirme",
          formule: `F<sub>s</sub> = ${frac("1", "2π · √(C<sub>ms</sub> · M<sub>ms</sub>)")}`,
          variables: [
            { symbole: "C<sub>ms</sub>", description: "compliance mécanique de la suspension" },
            { symbole: "M<sub>ms</sub>", description: "masse mobile équivalente" },
          ],
        },
        {
          nom: "Accord d'un évent bass-reflex", niveau: "confirme",
          formule: `F<sub>b</sub> = ${frac("c", "2π")} · √(${frac("S", "V · L<sub>eff</sub>")})`,
          variables: [
            { symbole: "S", description: "section de l'évent", unite: "m²" },
            { symbole: "V", description: "volume du caisson", unite: "m³" },
          ],
          note: "Même principe que le résonateur de Helmholtz.",
        },
      ],
    },
    {
      chapitre: "Numérique",
      formules: [
        {
          nom: "Théorème de Nyquist-Shannon", niveau: "intermediaire",
          formule: "f<sub>e</sub> ≥ 2 · f<sub>max</sub>",
          variables: [
            { symbole: "f<sub>e</sub>", description: "fréquence d'échantillonnage", unite: "Hz" },
            { symbole: "f<sub>max</sub>", description: "fréquence la plus haute du signal", unite: "Hz" },
          ],
        },
        {
          nom: "Dynamique d'un convertisseur", niveau: "confirme",
          formule: "D ≈ 6,02 · n + 1,76",
          variables: [
            { symbole: "D", description: "dynamique théorique", unite: "dB" },
            { symbole: "n", description: "résolution", unite: "bits" },
          ],
        },
      ],
    },
  ],

  // ----------------------------------------------------------- ÉLECTRICITÉ
  electricite: [
    {
      chapitre: "L'électricité",
      formules: [
        {
          nom: "Loi d'Ohm", niveau: "intermediaire",
          formule: "U = R · I",
          variables: [
            { symbole: "U", description: "tension", unite: "V" },
            { symbole: "R", description: "résistance", unite: "Ω" },
            { symbole: "I", description: "intensité", unite: "A" },
          ],
        },
        {
          nom: "Puissance électrique", niveau: "intermediaire",
          formule: `P = U · I = ${frac("U²", "R")} = R · I²`,
          variables: [{ symbole: "P", description: "puissance", unite: "W" }],
        },
        {
          nom: "Résistances en série / en parallèle", niveau: "intermediaire",
          formule: `R<sub>série</sub> = ΣR<sub>i</sub> &nbsp;·&nbsp; ${frac("1", "R<sub>parallèle</sub>")} = Σ${frac("1", "R<sub>i</sub>")}`,
          variables: [],
          note: "Pour deux résistances en parallèle : R = R₁·R₂ / (R₁+R₂) (produit en croix).",
        },
        {
          nom: "Transformateur (rapport de transformation)", niveau: "intermediaire",
          formule: `${frac("U<sub>1</sub>", "U<sub>2</sub>")} = ${frac("N<sub>1</sub>", "N<sub>2</sub>")} = ${frac("I<sub>2</sub>", "I<sub>1</sub>")}`,
          variables: [{ symbole: "N", description: "nombre de spires de chaque bobinage" }],
        },
      ],
    },
    {
      chapitre: "Électrotechnique",
      formules: [
        {
          nom: "Puissance complexe", niveau: "confirme",
          formule: "S = P + j·Q &nbsp;·&nbsp; |S|² = P² + Q²",
          variables: [
            { symbole: "P", description: "puissance active", unite: "W" },
            { symbole: "Q", description: "puissance réactive", unite: "VAR" },
            { symbole: "S", description: "puissance apparente", unite: "VA" },
          ],
        },
      ],
    },
    {
      chapitre: "Électronique",
      formules: [
        {
          nom: "Réactance d'un condensateur", niveau: "confirme",
          formule: `X<sub>C</sub> = ${frac("1", "2π · f · C")}`,
          variables: [{ symbole: "C", description: "capacité", unite: "F" }],
        },
        {
          nom: "Réactance d'une bobine", niveau: "confirme",
          formule: "X<sub>L</sub> = 2π · f · L",
          variables: [{ symbole: "L", description: "inductance", unite: "H" }],
        },
        {
          nom: "Impédance complexe", niveau: "confirme",
          formule: "Z = R + j·X &nbsp;·&nbsp; |Z| = √(R² + X²)",
          variables: [{ symbole: "X", description: "réactance (capacitive ou inductive)", unite: "Ω" }],
        },
        {
          nom: "Fréquence de coupure d'un filtre RC", niveau: "confirme",
          formule: `f<sub>c</sub> = ${frac("1", "2π · R · C")}`,
          variables: [],
        },
      ],
    },
  ],

  // ----------------------------------------------------------- SCIENCES
  sciences: [
    {
      chapitre: "Mesures et unités",
      formules: [
        {
          nom: "Conversion d'unités (produit en croix)", niveau: "intermediaire",
          formule: `${frac("a", "b")} = ${frac("c", "d")} &nbsp;⟺&nbsp; a·d = b·c`,
          variables: [],
        },
      ],
    },
    {
      chapitre: "Équations",
      formules: [
        {
          nom: "Produit en croix", niveau: "intermediaire",
          formule: `${frac("a", "b")} = ${frac("c", "d")} &nbsp;⟺&nbsp; a·d = b·c`,
          variables: [],
        },
        {
          nom: "Règles des logarithmes", niveau: "intermediaire",
          formule: "log(a·b) = log(a) + log(b) &nbsp;·&nbsp; log(a/b) = log(a) − log(b) &nbsp;·&nbsp; log(aⁿ) = n·log(a)",
          variables: [],
        },
        {
          nom: "Règles des puissances", niveau: "intermediaire",
          formule: `aᵃ·a<sup>b</sup> = a<sup>a+b</sup> &nbsp;·&nbsp; (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup> &nbsp;·&nbsp; a<sup>-n</sup> = ${frac("1", "aⁿ")}`,
          variables: [],
        },
        {
          nom: "Équation du 2nd degré", niveau: "confirme",
          formule: `x = ${frac("−b ± √(b² − 4ac)", "2a")}`,
          variables: [{ symbole: "a, b, c", description: "coefficients de ax² + bx + c = 0" }],
        },
        {
          nom: "Dérivée d'une puissance", niveau: "confirme",
          formule: "f(x) = xⁿ &nbsp;⟹&nbsp; f'(x) = n·x<sup>n-1</sup>",
          variables: [],
        },
      ],
    },
    {
      chapitre: "Géométrie",
      formules: [
        {
          nom: "Théorème de Pythagore", niveau: "intermediaire",
          formule: "a² + b² = c²",
          variables: [{ symbole: "c", description: "hypoténuse d'un triangle rectangle" }],
        },
        {
          nom: "Relation fondamentale de la trigonométrie", niveau: "confirme",
          formule: "sin²θ + cos²θ = 1",
          variables: [],
        },
        {
          nom: "Nombre complexe (forme polaire)", niveau: "confirme",
          formule: "z = a + j·b = r·(cos θ + j·sin θ) &nbsp;·&nbsp; r = √(a² + b²)",
          variables: [],
        },
      ],
    },
  ],
};
