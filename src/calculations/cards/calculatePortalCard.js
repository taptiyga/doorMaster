import { calculatePortalDepth } from "../works/calculatePortalDepth";
import { calculateTrim } from "../works/calculateTrim";
import { calculateTrimSaw } from "../works/calculateTrimSaw";

export function calculatePortalCard(card, base) {
  const depth = calculatePortalDepth(card, base);
  const trim = calculateTrim(card, base);
  const trimSaw = calculateTrimSaw(card, base);

  return base + depth + trim + trimSaw;
}
