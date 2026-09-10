import { calculateCornice } from "../works/calculateCornice";
import { calculateHandle } from "../works/calculateHandle";
import { calculatePortalCard } from "./calculatePortalCard";

export function calculateDoubleSlideCard(card, base) {
  const cornice = calculateCornice(card, base);
  const handle = calculateHandle(card, base);

  const portal = card.addPortal ? calculatePortalCard(card, base) : 0;

  return 1.5 * base + cornice + handle + portal;
}
