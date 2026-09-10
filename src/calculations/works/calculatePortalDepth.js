export function calculatePortalDepth(card, base) {
  const depth = Number(card.openingDepth);

  if (depth <= 150) {
    return 0;
  }

  return base * 0.4 * (depth - 150) * 0.005;
}
