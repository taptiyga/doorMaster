import { CardLayout } from "./CardLayout";
import { Field } from "./Field";

export function AdditionalCard({ card, price, onUpdate, onRemove }) {
  return (
    <CardLayout
      title="Дополнительные работы"
      price={price}
      onRemove={() => onRemove(card.id)}
    >
      <Field label="Демонтаж (количество полотен)">
        <input
          type="number"
          min="0"
          value={card.dismantlingQuantity}
          onChange={(event) =>
            onUpdate(card.id, "dismantlingQuantity", event.target.value)
          }
        />
      </Field>

      <Field label="Подпил плинтусов (штук)">
        <input
          type="number"
          min="0"
          value={card.skirtingQuantity}
          onChange={(event) =>
            onUpdate(card.id, "skirtingQuantity", event.target.value)
          }
        />
      </Field>

      <Field label="Сужение проёма до 5 см (сторона)">
        <input
          type="number"
          min="0"
          value={card.narrowingQuantity}
          onChange={(event) =>
            onUpdate(card.id, "narrowingQuantity", event.target.value)
          }
        />
      </Field>
    </CardLayout>
  );
}
