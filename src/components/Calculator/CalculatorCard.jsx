import { DoorCard } from "./DoorCard";
import { SwingCard } from "./SwingCard";
import { SlideCard } from "./SlideCard";
import { DoubleSlideCard } from "./DoubleSlideCard";
import { PortalCard } from "./PortalCard";
import { EntranceCard } from "./EntranceCard";
import { AdditionalCard } from "./AdditionalCard";

export function CalculatorCard({ card }) {
  if (card.type === "door") {
    return <DoorCard card={card} />;
  }

  if (card.type === "swing") {
    return <SwingCard card={card} />;
  }
  if (card.type === "slide") {
    return <SlideCard card={card} />;
  }
  if (card.type === "doubleSlide") {
    return <DoubleSlideCard card={card} />;
  }
  if (card.type === "portal") {
    return <PortalCard card={card} />;
  }
  if (card.type === "entrance") {
    return <EntranceCard card={card} />;
  }
  if (card.type === "additional") {
    return <AdditionalCard card={card} />;
  }

  return null;
}
