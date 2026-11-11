// =====================================================================
//  MOTEUR AUDIO — oscillateur sinus + bip pulsé, pour l'audiométrie
//
//  Isole tout le Web Audio (AudioContext, oscillateur, rampes de gain)
//  du protocole de mesure et de l'affichage : un seul rôle, utilisable
//  et testable indépendamment du reste.
// =====================================================================

import { VOLUME_MAX } from "../outils.js";

export const BIP_ON_S = 0.3, BIP_OFF_S = 0.25; // bip pulsé : 300 ms son / 250 ms silence
const RAMPE_S = 0.012; // constante de temps des rampes de gain (anti-clic)

export const dbVersLineaire = (db) => VOLUME_MAX * Math.pow(10, db / 20);

export class MoteurAudiometrie {
  #ac = null;
  #oscillateur = null;
  #gain = null;

  get actif() {
    return this.#ac !== null;
  }

  /** À appeler depuis un gestionnaire de clic (contrainte des navigateurs pour créer un AudioContext). */
  demarrer() {
    if (this.#ac) return;
    this.#ac = new AudioContext();
    this.#oscillateur = this.#ac.createOscillator();
    this.#oscillateur.type = "sine";
    this.#oscillateur.frequency.value = 1000;
    this.#gain = this.#ac.createGain();
    this.#gain.gain.value = 0;
    this.#oscillateur.connect(this.#gain).connect(this.#ac.destination);
    this.#oscillateur.start();
    if (this.#ac.state === "suspended") this.#ac.resume();
  }

  arreter() {
    if (!this.#ac) return;
    const fini = this.#ac;
    const gain = this.#gain;
    gain.gain.setTargetAtTime(0, fini.currentTime, 0.02);
    setTimeout(() => fini.close(), 150);
    this.#ac = null;
    this.#oscillateur = null;
    this.#gain = null;
  }

  definirFrequence(hz) {
    if (!this.#ac) return;
    this.#oscillateur.frequency.setTargetAtTime(hz, this.#ac.currentTime, RAMPE_S);
  }

  /** Son continu à un niveau fixe (calibration). */
  definirNiveauContinu(db) {
    if (!this.#ac) return;
    this.#gain.gain.setTargetAtTime(dbVersLineaire(db), this.#ac.currentTime, RAMPE_S);
  }

  silencer() {
    if (!this.#ac) return;
    this.#gain.gain.setTargetAtTime(0, this.#ac.currentTime, RAMPE_S);
  }

  /**
   * Bip pulsé au niveau `db`, à appeler à chaque frame avec le temps
   * absolu `maintenantMs` (performance.now()) : alterne son/silence sur
   * un cycle (BIP_ON_S + BIP_OFF_S), sans dépendre des appels précédents.
   */
  bipPulse(maintenantMs, db) {
    if (!this.#ac) return;
    const phase = (maintenantMs / 1000) % (BIP_ON_S + BIP_OFF_S);
    const cible = phase < BIP_ON_S ? dbVersLineaire(db) : 0;
    this.#gain.gain.setTargetAtTime(cible, this.#ac.currentTime, RAMPE_S);
  }
}
