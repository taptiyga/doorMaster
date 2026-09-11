import { CardLayout } from "./CardLayout";
import { PortalFields } from "./PortalFields";

export function PortalCard({ card, price, onUpdate, onRemove }) {
  return (
    <CardLayout
      title="Обшивка проема"
      price={price}
      onRemove={() => onRemove(card.id)}
    >
      <PortalFields card={card} onUpdate={onUpdate} />
    </CardLayout>
  );
}
