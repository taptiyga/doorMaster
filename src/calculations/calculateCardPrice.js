import { calculateDoorCard } from "./cards/calculateDoorCard";
import { calculateSwingCard } from "./cards/calculateSwingCard";

export function calculateCardPrice(card, base) {
  if (card.type === "door") {
    return calculateDoorCard(card, base);
  }

  if (card.type === "swing") {
    return calculateSwingCard(card, base);
  }

  return 0;
}
