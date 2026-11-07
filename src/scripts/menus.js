// =====================================================================
//  MENUS DÉROULANTS PERSONNALISÉS
//  habiller(select) remplace l'apparence d'un <select> natif par un menu
//  au style du site. Le <select> reste en place (caché) : sa valeur et son
//  événement « change » fonctionnent comme avant.
//  Rappeler habiller(select) après avoir changé ses options.
// =====================================================================

let ouvert = null;   // menu actuellement ouvert

function fermer() {
  if (!ouvert) return;
  ouvert.liste.hidden = true;
  ouvert.bouton.setAttribute("aria-expanded", "false");
  ouvert = null;
}

document.addEventListener("click", (e) => {
  if (ouvert && !ouvert.racine.contains(e.target)) fermer();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && ouvert) { const b = ouvert.bouton; fermer(); b.focus(); }
});

export function habiller(select) {
  let m = select._menu;
  if (!m) {
    const racine = document.createElement("div");
    racine.className = "menu";
    const bouton = document.createElement("button");
    bouton.type = "button";
    bouton.className = "menu-bouton";
    bouton.setAttribute("aria-haspopup", "listbox");
    bouton.setAttribute("aria-expanded", "false");
    bouton.innerHTML = `<span class="menu-texte"></span><span class="menu-chevron" aria-hidden="true"></span>`;
    const liste = document.createElement("ul");
    liste.className = "menu-liste";
    liste.setAttribute("role", "listbox");
    liste.hidden = true;

    select.classList.add("menu-natif");
    select.tabIndex = -1;
    select.setAttribute("aria-hidden", "true");
    select.after(racine);
    racine.append(bouton, liste);
    m = select._menu = { racine, bouton, liste };

    bouton.addEventListener("click", () => {
      if (ouvert === m) return fermer();
      fermer();
      liste.hidden = false;
      bouton.setAttribute("aria-expanded", "true");
      ouvert = m;
      (liste.querySelector('[aria-selected="true"]') || liste.firstElementChild)?.focus();
    });

    // Navigation au clavier dans la liste
    liste.addEventListener("keydown", (e) => {
      const items = [...liste.children];
      const i = items.indexOf(document.activeElement);
      if (e.key === "ArrowDown") { e.preventDefault(); items[Math.min(i + 1, items.length - 1)]?.focus(); }
      if (e.key === "ArrowUp") { e.preventDefault(); items[Math.max(i - 1, 0)]?.focus(); }
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); document.activeElement.click(); }
      if (e.key === "Tab") fermer();
    });

    // Si la valeur change par le code, on met à jour l'affichage
    select.addEventListener("change", () => majTexte(select));
  }

  // (Re)construction des options
  m.liste.innerHTML = "";
  [...select.options].forEach((o) => {
    const li = document.createElement("li");
    li.setAttribute("role", "option");
    li.tabIndex = -1;
    li.textContent = o.textContent;
    li.dataset.valeur = o.value;
    li.addEventListener("click", () => {
      select.value = o.value;
      select.dispatchEvent(new Event("change"));
      const b = m.bouton;
      fermer();
      b.focus();
    });
    m.liste.append(li);
  });
  majTexte(select);
}

function majTexte(select) {
  const m = select._menu;
  if (!m) return;
  m.bouton.querySelector(".menu-texte").textContent = select.selectedOptions[0]?.textContent ?? "";
  m.racine.classList.toggle("filtre-actif", select.value !== "" && select.dataset.neutre !== "non");
  [...m.liste.children].forEach((li) => li.setAttribute("aria-selected", String(li.dataset.valeur === select.value)));
}
