import { calculateHinges } from "../works/calculateHinges";
import { calculateLock } from "../works/calculateLock";
import { calculateDobor } from "../works/calculateDobor";
import { calculateTrim } from "../works/calculateTrim";
import { calculateBolt } from "../works/calculateBolt";
import { calculateStrikePlate } from "../works/calculateStrikePlate";
import { calculateFalseHandle } from "../works/calculateFalseHandle";
import { calculateTrimSaw } from "../works/calculateTrimSaw";

export function calculateSwingCard(card, base) {
  const hinges = calculateHinges(card, base);
  const lock = calculateLock(card, base);
  const dobor = calculateDobor(card, base);
  const trim = calculateTrim(card, base);
  const trimSaw = calculateTrimSaw(card, base);
  const bolt = calculateBolt(card, base);
  const strikePlate = calculateStrikePlate(card, base);
  const falseHandle = calculateFalseHandle(card, base);

  return (
    1.5 * base +
    hinges +
    lock +
    dobor +
    trim +
    trimSaw +
    bolt +
    strikePlate +
    falseHandle
  );
}
