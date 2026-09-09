export function calculateBolt(card, base) {
  const quantity = Number(card.bolt);

  return base * 0.2 * quantity;
}
