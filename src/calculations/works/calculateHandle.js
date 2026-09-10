export function calculateHandle(card, base) {
  const quantity = Number(card.handleQuantity);

  return base * 0.2 * quantity;
}
