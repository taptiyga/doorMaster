export function calculateDobor(card, base) {
  const depth = Number(card.openingDepth);

  if (depth < 65) {
    return base * 0.04 * 5;
  }
  if (depth >= 65 && depth <= 85) {
    return 0;
  }
  if (depth > 85 && depth <= 100) {
    return base * 0.04 * 5 + base * 0.4;
  }
  if (depth > 100 && depth <= 150) {
    return base * 0.4;
  }

  return base * 0.4 + base * 0.4 * (depth - 150) * 0.005;
}
