import { DoorCard } from "../Cards/DoorCard";
import { SwingCard } from "../Cards/SwingCard";
import { SlideCard } from "../Cards/SlideCard";
import { DoubleSlideCard } from "../Cards/DoubleSlideCard";
import { PortalCard } from "../Cards/PortalCard";
import { EntranceCard } from "../Cards/EntranceCard";
import { AdditionalCard } from "../Cards/AdditionalCard";

export function CalculatorCard({ card, price, onUpdate, onRemove }) {
  if (card.type === "door") {
    return <DoorCard card={card} price={price} onUpdate={onUpdate} onRemove={onRemove}/>;
  }

  if (card.type === "swing") {
    return <SwingCard card={card} price={price} onUpdate={onUpdate} onRemove={onRemove}/>;
  }

  if (card.type === "slide") {
    return <SlideCard card={card} price={price} onUpdate={onUpdate} onRemove={onRemove}/>;
  }

  if (card.type === "doubleSlide") {
    return <DoubleSlideCard card={card} price={price} onUpdate={onUpdate} onRemove={onRemove}/>;
  }

  if (card.type === "portal") {
    return <PortalCard card={card} price={price} onUpdate={onUpdate} onRemove={onRemove}/>;
  }

  if (card.type === "entrance") {
    return <EntranceCard card={card} price={price} onUpdate={onUpdate} onRemove={onRemove}/>;
  }

  if (card.type === "additional") {
    return <AdditionalCard card={card} price={price} onUpdate={onUpdate} onRemove={onRemove}/>;
  }

  return null;
}
