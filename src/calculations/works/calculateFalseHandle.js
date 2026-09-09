export function calculateFalseHandle(card, base) {
  if (card.falseHandle) {
    return base * 0.1;
  }

  return 0;
}
