import { useState } from "react";
import { CalculatorForm } from "./CalculatorForm";
import { CalculatorCard } from "./CalculatorCard";
import { calculateCardPrice } from "../../calculations/calculateCardPrice";
import { BASE_PRICE } from "../../constants/calculator";
import { createCard } from "../../utils/createCard";
import styles from "./Calculator.module.css";

export function Calculator() {
  const [cards, setCards] = useState([]);

  const totalPrice = cards.reduce((total, card) => {
    return total + calculateCardPrice(card, BASE_PRICE);
  }, 0);

  function addCard(type) {
    const newCard = createCard(type);

    if (!newCard) {
      return;
    }

    setCards((prev) => [newCard, ...prev]);
  }

  function updateCard(id, field, value) {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id
          ? {
              ...card,
              [field]: value,
            }
          : card,
      ),
    );
  }
  function removeCard(id) {
    setCards((prev) => prev.filter((card) => card.id !== id));
  }
function clearCards() {
  if (cards.length === 0) {
    return;
  }

  const confirmed = window.confirm(
    "Вы уверены, что хотите очистить весь расчёт?",
  );

  if (!confirmed) {
    return;
  }

  setCards([]);
}
  return (
    <section className={styles.calculator}>
      <h2 className={styles.title}>Калькулятор стоимости</h2>

      <CalculatorForm
        onAdd={addCard}
        onClear={clearCards}
        onTotal={totalPrice}
      />

      <div className={styles.cards}>
        {cards.map((card) => {
          const price = calculateCardPrice(card, BASE_PRICE);

          return (
            <CalculatorCard
              key={card.id}
              card={card}
              price={price}
              onUpdate={updateCard}
              onRemove={removeCard}
            />
          );
        })}
      </div>
    </section>
  );
}
