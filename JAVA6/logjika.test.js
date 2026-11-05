import { llogarit } from "./logjika.js";

function testo(emri, kushti) {
  const rreshti = document.createElement("li");
  rreshti.textContent = (kushti ? "OK: " : "DËSHTOI: ") + emri;
  document.querySelector("#rastet").append(rreshti);
}

// Normal
const normal = llogarit(4, 5, 20);
testo("normal: total 20", normal.total === 20);
testo("kufi: mbetja 0", normal.mbetja === 0);
testo("kufi: brenda true kur total === buxheti", normal.brenda === true);

// Tejkalim
const tejkalim = llogarit(4.5, 5, 20);
testo("tejkalim: total 22.5", tejkalim.total === 22.5);
testo("tejkalim: mbetja -2.5", tejkalim.mbetja === -2.5);
testo("tejkalim: brenda false", tejkalim.brenda === false);

// Kufi me presje
const presje = llogarit(0.1, 3, 0.3);
testo("presje: total 0.3", presje.total === 0.3);
testo("presje: mbetja 0", presje.mbetja === 0);

// Hyrje të pavlefshme
testo("çmim negativ", llogarit(-1, 2, 20).ok === false);
testo("buxhet negativ", llogarit(1, 2, -1).ok === false);
testo("persona 0", llogarit(4, 0, 20).ok === false);
testo("persona 6", llogarit(4, 6, 20).ok === false);
testo("persona NaN", llogarit(4, NaN, 20).ok === false);
testo("çmim NaN", llogarit(NaN, 2, 20).ok === false);
