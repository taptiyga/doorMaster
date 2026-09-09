export function calculateLock(card, base) {
  if (card.lockType === "bathroom" || card.lockType === "latchBolt") {
    return base * 0.4;
  }

  if (card.lockType === "latch") {
    return base * 0.2;
  }

  return 0;
}
