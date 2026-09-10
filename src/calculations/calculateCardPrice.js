import { calculateDoorCard } from "./cards/calculateDoorCard";
import { calculateSwingCard } from "./cards/calculateSwingCard";
import { calculatePortalCard } from "./cards/calculatePortalCard";
import { calculateSlideCard } from "./cards/calculateSlideCard";
import { calculateDoubleSlideCard } from "./cards/calculateDoubleSlideCard";
import { calculateEntranceCard } from "./cards/calculateEntranceCard";
import { calculateAdditionalCard } from "./cards/calculateAdditionalCard";

export function calculateCardPrice(card, base) {
  if (card.type === "door") {
    return calculateDoorCard(card, base);
  }

  if (card.type === "swing") {
    return calculateSwingCard(card, base);
  }

  if (card.type === "slide") {
    return calculateSlideCard(card, base);
  }

  if (card.type === "doubleSlide") {
    return calculateDoubleSlideCard(card, base);
  }

  if (card.type === "portal") {
    return calculatePortalCard(card, base);
  }
  if (card.type === "entrance") {
    return calculateEntranceCard(card, base);
  }
  if (card.type === "additional") {
    return calculateAdditionalCard(card, base);
  }

  return 0;
}
