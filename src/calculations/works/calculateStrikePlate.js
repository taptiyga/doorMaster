export function calculateStrikePlate(card, base) {
  const quantity = Number(card.strikePlate);

  return base * 0.1 * quantity;
}
