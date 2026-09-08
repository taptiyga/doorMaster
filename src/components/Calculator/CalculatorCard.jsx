export function CalculatorCard({ card }) {
  return (
    <article>
      <h3>{card.type}</h3>

      <pre>{JSON.stringify(card, null, 2)}</pre>
    </article>
  );
}
