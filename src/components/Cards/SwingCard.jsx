import { CardLayout } from "./CardLayout";
import { Field } from "./Field";
import { RadioGroup } from "./RadioGroup";
import { Checkbox } from "./Checkbox";

export function SwingCard({ card, price, onUpdate, onRemove }) {
  return (
    <CardLayout
      title="Распашная дверь"
      price={price}
      onRemove={() => onRemove(card.id)}
    >
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
          { value: "4", label: "4" },
          { value: "6", label: "6" },
          { value: "8", label: "8" },
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
      <RadioGroup
        label="Ригель"
        name={`bolt-${card.id}`}
        value={card.bolt}
        options={[
          { value: "0", label: "0" },
          { value: "1", label: "1" },
          { value: "2", label: "2" },
        ]}
        onChange={(value) => onUpdate(card.id, "bolt", value)}
      />

      <RadioGroup
        label="Ответная планка"
        name={`strikePlate-${card.id}`}
        value={card.strikePlate}
        options={[
          { value: "0", label: "0" },
          { value: "1", label: "1" },
          { value: "2", label: "2" },
        ]}
        onChange={(value) => onUpdate(card.id, "strikePlate", value)}
      />
      <Checkbox
        label="Фальш-ручка"
        checked={card.falseHandle}
        onChange={(event) =>
          onUpdate(card.id, "falseHandle", event.target.checked)
        }
      />
    </CardLayout>
  );
}
