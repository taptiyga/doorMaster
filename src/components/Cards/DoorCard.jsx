import { CardLayout } from "./CardLayout";
import { Field } from "./Field";
import { RadioGroup } from "./RadioGroup";

export function DoorCard({ card, price, onUpdate }) {
  return (
    <CardLayout title="Межкомнатная дверь" price={price}>
      <RadioGroup
        label="Тип петель"
        name={`hingeType-${card.id}`}
        value={card.hingeType}
        options={[
          {
            value: "mortise",
            label: "Врезные",
          },
          {
            value: "overlay",
            label: "Накладные",
          },
        ]}
        onChange={(value) => onUpdate(card.id, "hingeType", value)}
      />

      <RadioGroup
        label="Количество петель"
        name={`hingeQuantity-${card.id}`}
        value={card.hingeQuantity}
        options={[
          {
            value: "2",
            label: "2",
          },
          {
            value: "3",
            label: "3",
          },
          {
            value: "4",
            label: "4",
          },
        ]}
        onChange={(value) => onUpdate(card.id, "hingeQuantity", value)}
      />

      <Field label="Тип замка">
        <select
          value={card.lockType}
          onChange={(event) =>
            onUpdate(card.id, "lockType", event.target.value)
          }
        >
          <option value="bathroom">Сантехнический</option>

          <option value="latch">Защелка</option>

          <option value="latchBolt">Защелка и задвижка</option>
        </select>
      </Field>

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
          {
            value: "0",
            label: "0",
          },
          {
            value: "1",
            label: "1",
          },
          {
            value: "2",
            label: "2",
          },
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
    </CardLayout>
  );
}
