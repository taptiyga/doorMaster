
export function calculateHinges(card, base) {
  if (card.hingeType === "overlay") {
    return base * 0.1 * Number(card.hingeQuantity);
  }

  if (card.hingeType === "mortise") {
    return base * 0.2 * Number(card.hingeQuantity);
  }

  return 0;
}
