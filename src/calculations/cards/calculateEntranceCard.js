import { calculatePortalDepth } from "../works/calculatePortalDepth";
import { calculateTrim } from "../works/calculateTrim";
import { calculateTrimSaw } from "../works/calculateTrimSaw";

export function calculateEntranceCard(card, base) {
  const depth = calculatePortalDepth(card, base);

  const trim = calculateTrim(
    {
      ...card,
      trimSides: card.addTrim,
    },
    base,
  );

  const trimSaw = calculateTrimSaw(card, base);

  return base + depth + trim + trimSaw;
}
