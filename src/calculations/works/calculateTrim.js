export function calculateTrim(card, base) {
  const sides = Number(card.trimSides);
  return base * 0.1 * sides;
}
