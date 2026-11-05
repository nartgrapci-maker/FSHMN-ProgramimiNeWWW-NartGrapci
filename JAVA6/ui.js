import { llogarit } from "./logjika.js";

const forma = document.querySelector("#forma");
const rezultati = document.querySelector("#rezultati");

forma.addEventListener("submit", (ngjarja) => {
  ngjarja.preventDefault();

  // valueAsNumber jep NaN për fushë bosh, ndërsa Number("") do të jepte 0.
  const r = llogarit(
    document.querySelector("#cmimi").valueAsNumber,
    document.querySelector("#persona").valueAsNumber,
    document.querySelector("#buxheti").valueAsNumber,
  );

  if (!r.ok) {
    rezultati.textContent = r.error;
    return;
  }

  // toFixed këtu përdoret vetëm për shfaqje, jo për llogaritje.
  const pergjigja = r.brenda ? "Futet në buxhet." : "Nuk futet në buxhet.";
  rezultati.textContent = `Totali: ${r.total.toFixed(2)} €. Mbetja: ${r.mbetja.toFixed(2)} €. ${pergjigja}`;
});
