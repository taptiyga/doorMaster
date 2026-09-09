import { CardLayout } from "./CardLayout";
import { Field } from "./Field";

export function DoorCard({ card, price, onUpdate }) {
  return (
    <CardLayout title="Межкомнатная дверь" price={price}>
      <Field label="Тип петель">
        <select
          value={card.hingeType}
          onChange={(event) =>
            onUpdate(card.id, "hingeType", event.target.value)
          }
        >
          <option value="mortise">Врезные</option>

          <option value="overlay">Накладные</option>
        </select>
      </Field>

      <Field label="Количество петель">
        <select
          value={card.hingeQuantity}
          onChange={(event) =>
            onUpdate(card.id, "hingeQuantity", event.target.value)
          }
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </Field>

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

      <Field label="Глубина проема">
        <input
          type="number"
          min="0"
          value={card.openingDepth}
          onChange={(event) =>
            onUpdate(card.id, "openingDepth", event.target.value)
          }
        />
      </Field>

      <Field label="Наличник">
        <select
          value={card.trimSides}
          onChange={(event) =>
            onUpdate(card.id, "trimSides", event.target.value)
          }
        >
          <option value="0">0 сторон</option>
          <option value="1">1 сторона</option>
          <option value="2">2 стороны</option>
        </select>
      </Field>

      <Field label="Запил наличника">
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
