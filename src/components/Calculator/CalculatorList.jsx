import { CalculatorCard } from "./CalculatorCard";

export function CalculatorList({ cards }) {
  return (
    <div>
      {cards.map((card) => (
        <CalculatorCard key={card.id} card={card} />
      ))}
    </div>
  );
}
