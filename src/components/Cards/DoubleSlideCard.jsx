import { CardLayout } from "./CardLayout";
import { Field } from "./Field";
import { RadioGroup } from "./RadioGroup";
import { Checkbox } from "./Checkbox";
import { PortalFields } from "./PortalFields";

export function DoubleSlideCard({ card, price, onUpdate, onRemove }) {
  return (
    <CardLayout
      title="Двойная откатная дверь"
      price={price}
      onRemove={() => onRemove(card.id)}
    >
      <Field label="Ширина полотна двери (мм)">
        <input
          type="number"
          min="0"
          step="50"
          value={card.corniceWidth}
          onChange={(event) =>
            onUpdate(card.id, "corniceWidth", event.target.value)
          }
        />
      </Field>

      <RadioGroup
        label="Установка ручек"
        name={`handleQuantity-${card.id}`}
        value={card.handleQuantity}
        options={[
          { value: "0", label: "0" },
          { value: "1", label: "1" },
          { value: "2", label: "2" },
        ]}
        onChange={(value) => onUpdate(card.id, "handleQuantity", value)}
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
