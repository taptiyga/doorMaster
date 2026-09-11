import { CardLayout } from "./CardLayout";
import { Field } from "./Field";
import { RadioGroup } from "./RadioGroup";

export function EntranceCard({ card, price, onUpdate, onRemove }) {
  return (
    <CardLayout
      title="Обшивка входной двери"
      price={price}
      onRemove={() => onRemove(card.id)}
    >
      <Field label="Глубина проема (мм)">
        <input
          type="number"
          min="0"
          value={card.openingDepth}
          onChange={(event) =>
            onUpdate(card.id, "openingDepth", event.target.value)
          }
        />
      </Field>

      <RadioGroup
        label="Наличник"
        name={`addTrim-${card.id}`}
        value={card.addTrim}
        options={[
          { value: "0", label: "0" },
          { value: "1", label: "1" },
        ]}
        onChange={(value) => onUpdate(card.id, "addTrim", value)}
      />

      <Field label="Пил наличника вдоль (метры)">
        <input
          type="number"
          min="0"
          step="0.1"
          value={card.trimSawLength}
          onChange={(event) =>
            onUpdate(card.id, "trimSawLength", event.target.value)
          }
        />
      </Field>
    </CardLayout>
  );
}
