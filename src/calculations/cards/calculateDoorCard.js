import { calculateHinges } from "../works/calculateHinges";
import { calculateLock } from "../works/calculateLock";
import { calculateDobor } from "../works/calculateDobor";
import { calculateTrim } from "../works/calculateTrim";
import { calculateTrimSaw } from "../works/calculateTrimSaw";

export function calculateDoorCard(card, base) {
  const hinges = calculateHinges(card, base);
  const lock = calculateLock(card, base);
  const dobor = calculateDobor(card, base);
  const trim = calculateTrim(card, base);
  const trimSaw = calculateTrimSaw(card, base);

  return base + hinges + lock + dobor + trim + trimSaw;
}
