// =====================================================================
//  OUTILS COMMUNS AUX APPLICATIONS
// =====================================================================

export const C_AIR = 343;      // célérité du son dans l'air à 20 °C (m/s)
export const VOLUME_MAX = 0.2; // plafond de volume (protection auditive)

// Nombre au format français : 1 234,5
export const fmt = (x, d = 0) => x.toLocaleString("fr-FR", { maximumFractionDigits: d });

// Couleurs du site, lues dans les variables CSS
export function couleurs() {
  const css = getComputedStyle(document.documentElement);
  const lire = (v) => css.getPropertyValue(v).trim();
  return { accent: lire("--accent"), ligne: lire("--line"), gris: lire("--muted"), texte: lire("--fg") };
}

// Curseur 0–1000 → valeur sur échelle logarithmique (et inverse)
export const logVers = (v, min, max) => min * Math.pow(max / min, v / 1000);
export const versLog = (x, min, max) => Math.round((1000 * Math.log(x / min)) / Math.log(max / min));

// Canvas net sur tous les écrans : adapte la résolution à la taille affichée
// rappel() est appelé à chaque redimensionnement
export function preparerCanvas(canvas, rappel = () => {}) {
  const ctx = canvas.getContext("2d");
  new ResizeObserver(() => {
    const r = canvas.getBoundingClientRect();
    canvas.width = r.width * devicePixelRatio;
    canvas.height = r.height * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    rappel();
  }).observe(canvas);
  return ctx;
}

// Abscisse logarithmique pour un spectre de f1 à f2
export const xLog = (f, w, f1 = 20, f2 = 20000) => (Math.log10(f / f1) / Math.log10(f2 / f1)) * w;

// Grille de spectre : verticales aux fréquences repères, horizontales tous les pasDB
export function grilleSpectre(ctx, { w, h, haut, bas, dBmax, dBmin, pasDB = 20, unite = "dB", coul }) {
  const yDB = (db) => haut + ((dBmax - Math.max(dBmin, Math.min(dBmax, db))) / (dBmax - dBmin)) * (bas - haut);
  ctx.strokeStyle = coul.ligne; ctx.lineWidth = 1;
  ctx.fillStyle = coul.gris; ctx.font = "11px system-ui";
  for (const f of [20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000]) {
    const x = xLog(f, w);
    ctx.beginPath(); ctx.moveTo(x, haut); ctx.lineTo(x, bas); ctx.stroke();
    ctx.textAlign = f === 20 ? "left" : f === 20000 ? "right" : "center";
    ctx.fillText(f >= 1000 ? `${f / 1000}k` : `${f}`, x + (f === 20 ? 4 : f === 20000 ? -4 : 0), h - 6);
  }
  ctx.textAlign = "left";
  for (let db = dBmax; db >= dBmin; db -= pasDB) {
    const y = yDB(db);
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    ctx.fillText(`${db > 0 ? "+" : ""}${db} ${unite}`, 6, y - 4);
  }
  return yDB;
}

// Bouton Écouter / Arrêter : crée un AudioContext au clic, le ferme à l'arrêt
// demarrer(ac, sortie) branche les sources sur « sortie » (gain général)
export function boutonSon(bouton, { demarrer, arreter = () => {}, volume = () => 1 }) {
  let son = null;
  bouton.addEventListener("click", () => {
    if (son) {
      const fini = son;
      fini.sortie.gain.setTargetAtTime(0, fini.ac.currentTime, 0.02);
      setTimeout(() => fini.ac.close(), 150);
      son = null;
      arreter();
      bouton.textContent = "▶ Écouter";
      bouton.classList.remove("actif");
      return;
    }
    const ac = new AudioContext();
    const sortie = ac.createGain();
    sortie.gain.value = 0;
    sortie.connect(ac.destination);
    son = { ac, sortie, ...demarrer(ac, sortie) };
    sortie.gain.setTargetAtTime(volume() * VOLUME_MAX, ac.currentTime, 0.02);
    bouton.textContent = "■ Arrêter";
    bouton.classList.add("actif");
  });
  return {
    actif: () => son,
    volume: (v) => son && son.sortie.gain.setTargetAtTime(v * VOLUME_MAX, son.ac.currentTime, 0.02),
  };
}
