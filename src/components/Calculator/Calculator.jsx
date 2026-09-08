import { useState } from "react";
import { CalculatorForm } from "./CalculatorForm";
import { CalculatorList } from "./CalculatorList";
import { createCard } from "../../data/createCard";

export function Calculator() {
  const [cards, setCards] = useState([]);

function addCard(type) {
  const newCard = createCard(type);

  if (!newCard) return;

  setCards((prev) => [newCard, ...prev]);
}

  return (
    <section>
      <h2>Рассчитайте стоимость</h2>

      <CalculatorForm onAdd={addCard} />

      <CalculatorList cards={cards} />
    </section>
  );
}
