export function calculateAdditionalCard(card, base) {
  const dismantling = base * 0.15 * Number(card.dismantlingQuantity);

  const skirting = base * 0.02 * Number(card.skirtingQuantity);

  const narrowing = base * 0.2 * Number(card.narrowingQuantity);

  return dismantling + skirting + narrowing;
}
