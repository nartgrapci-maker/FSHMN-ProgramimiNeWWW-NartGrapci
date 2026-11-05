export function llogarit(cmimi, persona, buxheti) {
  if (!Number.isFinite(cmimi) || cmimi < 0) {
    return { ok: false, error: "Çmimi nuk është i vlefshëm." };
  }
  if (!Number.isInteger(persona) || persona < 1 || persona > 5) {
    return { ok: false, error: "Persona duhet të jetë nga 1 deri në 5." };
  }
  if (!Number.isFinite(buxheti) || buxheti < 0) {
    return { ok: false, error: "Buxheti nuk është i vlefshëm." };
  }

  const cmimiCent = Math.round(cmimi * 100);
  const buxhetiCent = Math.round(buxheti * 100);
  const totalCent = cmimiCent * persona;

  return {
    ok: true,
    total: totalCent / 100,
    mbetja: (buxhetiCent - totalCent) / 100,
    brenda: totalCent <= buxhetiCent,
  };
}
