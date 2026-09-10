import { Field } from "./Field";
import { RadioGroup } from "./RadioGroup";

export function PortalFields({ card, onUpdate }) {
  return (
    <>
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
        name={`trimSides-${card.id}`}
        value={card.trimSides}
        options={[
          { value: "0", label: "0" },
          { value: "1", label: "1" },
          { value: "2", label: "2" },
        ]}
        onChange={(value) => onUpdate(card.id, "trimSides", value)}
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
    </>
  );
}
