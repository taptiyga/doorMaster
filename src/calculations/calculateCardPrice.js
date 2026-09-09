import { calculateDoorCard } from "./cards/calculateDoorCard";

export function calculateCardPrice(card, base) {
  if (card.type === "door") {
    return calculateDoorCard(card, base);
  }

  return 0;
}
