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

  return (
    <section className={styles.calculator}>
      <h2 className={styles.title}>Калькулятор стоимости</h2>

      <CalculatorForm onAdd={addCard} />

      <div className={styles.cards}>
        {cards.map((card) => {
          const price = calculateCardPrice(card, BASE_PRICE);

          return (
            <CalculatorCard
              key={card.id}
              card={card}
              price={price}
              onUpdate={updateCard}
            />
          );
        })}
      </div>
      <div className={styles.total}>
        Итого: {totalPrice.toLocaleString("ru-RU")} ₽
      </div>
    </section>
  );
}
