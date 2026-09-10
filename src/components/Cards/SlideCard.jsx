import { CardLayout } from "./CardLayout";
import { Field } from "./Field";
import { Checkbox } from "./Checkbox";
import { PortalFields } from "./PortalFields";

export function SlideCard({ card, price, onUpdate }) {
  return (
    <CardLayout title="Откатная дверь" price={price}>
      <Field label="Ширина полотна двери (мм)">
        <input
          type="number"
          min="200"
          step="50"
          value={card.corniceWidth}
          onChange={(event) =>
            onUpdate(card.id, "corniceWidth", event.target.value)
          }
        />
      </Field>

      <Checkbox
        label="Установка ручки"
        checked={card.handleQuantity > 0}
        onChange={(event) =>
          onUpdate(card.id, "handleQuantity", event.target.checked ? 1 : 0)
        }
      />

      <Checkbox
        label="Обшивка проема"
        checked={card.addPortal}
        onChange={(event) =>
          onUpdate(card.id, "addPortal", event.target.checked)
        }
      />

      {card.addPortal && <PortalFields card={card} onUpdate={onUpdate} />}
    </CardLayout>
  );
}
