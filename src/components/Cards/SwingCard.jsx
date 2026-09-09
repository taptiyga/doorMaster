export function SwingCard({ card, onUpdate }) {
  return (
    <article>
      <h3>Распашная дверь</h3>
      <select
        value={card.hingeType}
        onChange={(event) => {
          onUpdate(card.id, "hingeType", event.target.value);
        }}
      >
        <option value="mortise">Врезные</option>
        <option value="overlay">Накладные</option>
      </select>
      <select
        value={card.hingeQuantity}
        onChange={(event) => {
          onUpdate(card.id, "hingeQuantity", event.target.value);
        }}
      >
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="8">8</option>
      </select>
    </article>
  );
}
