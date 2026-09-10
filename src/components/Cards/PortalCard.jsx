import { CardLayout } from "./CardLayout";
import { PortalFields } from "./PortalFields";

export function PortalCard({ card, price, onUpdate }) {
  return (
    <CardLayout title="Обшивка проема" price={price}>
      <PortalFields card={card} onUpdate={onUpdate} />
    </CardLayout>
  );
}
