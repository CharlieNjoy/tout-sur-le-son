// =====================================================================
//  PROTOCOLE DE MESURE — audiométrie relative, façon Békésy simplifié,
//  présentation ENTRELACÉE des fréquences.
//
//  Logique pure (aucun DOM, aucun Web Audio) : testable et modifiable
//  indépendamment de l'affichage ou du moteur sonore.
//
//  - Le 1 kHz est toujours testé en premier (référence).
//  - On ne fait JAMAIS tous les allers-retours (AR) d'une fréquence
//    d'un coup : un seul AR est joué, puis on change de fréquence ; on
//    revient sur chaque fréquence plus tard pour son AR suivant. Ça
//    évite que l'auditeur anticipe la prochaine fréquence ou se fatigue
//    sur un seul son.
//  - Pour une fréquence donnée, le niveau N'EST PAS remis à DB_MIN à
//    chaque retour : il reprend exactement où il en était (direction et
//    niveau courant), seul le décompte des AR avance. Comme avant, un
//    AR = une montée (« entendu ») + une descente (« plus entendu »),
//    par paliers de PAS_DB toutes les PAS_INTERVALLE_S.
//  - Si le niveau atteint DB_MAX sans avoir été signalé, on censure la
//    fréquence tout de suite (valeur = DB_MAX, marquée « non perçue »)
//    et on ne la propose plus.
//  - Pas de calibration en dB SPL : le résultat est relatif au seuil
//    mesuré à 1 kHz (0 dB à 1 kHz par construction).
// =====================================================================

export const DB_MIN = -80;
export const DB_MAX = 0; // plafond de sécurité du site (= VOLUME_MAX du moteur audio)
export const PAS_DB = 3;
export const PAS_INTERVALLE_S = 0.5;
export const DB_CALIBRATION = -40; // niveau du son de référence (tout juste audible) pendant la calibration

// Séries normalisées ISO 266 (fréquences préférentielles), spectre audible complet.
export const FREQUENCES_OCTAVE = [125, 250, 500, 1000, 2000, 4000, 8000, 16000];
export const FREQUENCES_TIERS = [
  125, 160, 200, 250, 315, 400, 500, 630, 800, 1000, 1250, 1600, 2000, 2500, 3150, 4000, 5000, 6300,
  8000, 10000, 12500, 16000, 20000,
];

export const MODES = {
  simple: { frequences: FREQUENCES_OCTAVE, arParFreq: 2 },
  complete: { frequences: FREQUENCES_TIERS, arParFreq: 4 },
};

function melanger(tableau) {
  const t = [...tableau];
  for (let i = t.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [t[i], t[j]] = [t[j], t[i]];
  }
  return t;
}

// Le 1 kHz passe toujours en premier (référence) ; le reste est mélangé.
export function construireOrdre(liste) {
  const reste = melanger(liste.filter((f) => f !== 1000));
  return liste.includes(1000) ? [1000, ...reste] : reste;
}

/**
 * Déroule le protocole en présentant les fréquences de façon entrelacée :
 * chaque "tour" de la file ne joue qu'UN SEUL aller-retour pour une
 * fréquence, puis passe à la suivante. On lui fournit le temps écoulé
 * (avancerTemps) et les signaux de l'auditeur (signaler / passerFrequence),
 * elle expose l'état courant (niveauDb, progression) et les résultats finaux.
 */
export class ProtocoleAudiometrie {
  constructor(mode) {
    const cfg = MODES[mode];
    if (!cfg) throw new Error(`Mode de test inconnu : "${mode}"`);
    this.frequences = cfg.frequences;
    this.arParFreq = cfg.arParFreq;

    // État par fréquence, conservé entre deux passages (on y revient plusieurs fois) :
    // direction/niveauDb/accumulateur reprennent exactement où ils en étaient.
    this._etats = new Map(
      this.frequences.map((f) => [
        f,
        { direction: 1, niveauDb: DB_MIN, accumulateur: 0, inversions: [], termine: false },
      ])
    );

    // File des tours à jouer : un tour = une fréquence, pour un seul AR.
    // 1er passage : 1 kHz en premier puis le reste mélangé. Passages suivants : mélangés indépendamment.
    this._file = [];
    for (let passage = 0; passage < this.arParFreq; passage++) {
      this._file.push(...(passage === 0 ? construireOrdre(this.frequences) : melanger(this.frequences)));
    }
    this._posFile = 0;

    this.resultats = []; // rempli au fur et à mesure qu'une fréquence termine ses AR (ou est censurée)
    this.termine = false;
    this._freqCourante = null;
    this._avancerVersProchainTour();
  }

  get frequenceActuelle() {
    return this._freqCourante;
  }

  get niveauDb() {
    return this._etats.get(this._freqCourante).niveauDb;
  }

  get progression() {
    const etat = this._etats.get(this._freqCourante);
    return {
      indexFreq: this.frequences.indexOf(this._freqCourante), // position de la fréquence en cours dans la liste
      totalFreq: this.frequences.length,
      ar: Math.floor(etat.inversions.length / 2), // AR déjà faits pour CETTE fréquence (cumulés sur ses passages précédents)
      totalAr: this.arParFreq,
    };
  }

  /** Avance le niveau de la fréquence en cours de dt secondes ; peut la censurer si elle atteint le plafond. */
  avancerTemps(dt) {
    if (this.termine) return;
    const etat = this._etats.get(this._freqCourante);
    etat.accumulateur += dt;
    while (etat.accumulateur >= PAS_INTERVALLE_S) {
      etat.accumulateur -= PAS_INTERVALLE_S;
      etat.niveauDb = Math.max(DB_MIN, Math.min(DB_MAX, etat.niveauDb + etat.direction * PAS_DB));
      if (etat.direction === 1 && etat.niveauDb >= DB_MAX) {
        this._finaliserFrequence(this._freqCourante, true);
        this._avancerVersProchainTour();
        return; // le reste de l'accumulateur (< PAS_INTERVALLE_S) est sans incidence
      }
    }
  }

  /** L'auditeur signale un changement de perception (entendu / plus entendu). */
  signaler() {
    if (this.termine) return;
    const freq = this._freqCourante;
    const etat = this._etats.get(freq);
    etat.inversions.push(etat.niveauDb);
    etat.direction *= -1;

    if (etat.inversions.length % 2 !== 0) return; // AR pas encore complet (il faut une montée ET une descente)

    // Un AR vient de se terminer pour cette fréquence.
    if (etat.inversions.length / 2 >= this.arParFreq) {
      this._finaliserFrequence(freq, false);
    }
    this._avancerVersProchainTour(); // qu'elle soit finalisée ou pas : on change de fréquence après CHAQUE AR
  }

  /** L'auditeur n'entend jamais ce son à ce volume : on censure directement, sans attendre un AR complet. */
  passerFrequence() {
    if (this.termine) return;
    this._finaliserFrequence(this._freqCourante, true);
    this._avancerVersProchainTour();
  }

  _finaliserFrequence(freq, plafondAtteint) {
    const etat = this._etats.get(freq);
    if (etat.termine) return; // déjà finalisée (sécurité)
    etat.termine = true;
    if (plafondAtteint) {
      this.resultats.push({ freq, seuilDb: DB_MAX, censure: true, bruts: [...etat.inversions] });
    } else {
      const moyenne = etat.inversions.reduce((a, b) => a + b, 0) / etat.inversions.length;
      this.resultats.push({ freq, seuilDb: moyenne, censure: false, bruts: [...etat.inversions] });
    }
  }

  /**
   * Passe au prochain tour non terminé de la file ; termine le protocole si
   * elle est épuisée. Chaque fréquence REPART de DB_MIN à chaque tour (1er
   * ou suivant) : pas de reprise où elle en était, par sécurité auditive.
   */
  _avancerVersProchainTour() {
    while (this._posFile < this._file.length) {
      const freq = this._file[this._posFile];
      this._posFile++;
      const etat = this._etats.get(freq);
      if (!etat.termine) {
        etat.direction = 1;
        etat.niveauDb = DB_MIN;
        etat.accumulateur = 0;
        this._freqCourante = freq;
        return;
      }
      // sinon : fréquence déjà finalisée (censurée plus tôt) → on saute ce tour.
    }
    this.termine = true;
  }

  /**
   * Résultats triés par fréquence, exprimés relativement au MEILLEUR seuil
   * mesuré (la fréquence la mieux perçue = 0 dB), pas au 1 kHz : toutes les
   * autres fréquences ressortent donc avec un écart positif ou nul.
   */
  resultatsRelatifs() {
    const parFreq = [...this.resultats].sort((a, b) => a.freq - b.freq);
    const refDb = Math.min(...parFreq.map((r) => r.seuilDb));
    return parFreq.map((r) => ({ ...r, relatif: r.seuilDb - refDb }));
  }
}
