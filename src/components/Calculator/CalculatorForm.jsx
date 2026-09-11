import { useState } from "react";
import styles from "./CalculatorForm.module.css";

export function CalculatorForm({ onAdd, onClear, totalPrice }) {
  const [selectedType, setSelectedType] = useState("door");

  function handleAdd() {
    onAdd(selectedType);
  }

  return (
    <div className={styles.form}>
      <select
        className={styles.select}
        value={selectedType}
        onChange={(event) => setSelectedType(event.target.value)}
      >
        <option value="door">Межкомнатная дверь</option>
        <option value="swing">Распашная дверь</option>
        <option value="slide">Раздвижная дверь</option>
        <option value="doubleSlide">Двойная раздвижная дверь</option>
        <option value="portal">Портал</option>
        <option value="entrance">Входная дверь</option>
        <option value="additional">Дополнительные работы</option>
      </select>

      <button type="button" className={styles.addButton} onClick={handleAdd}>
        Добавить
      </button>
      <div className={styles.total}>
        Итого: {totalPrice.toLocaleString("ru-RU")} ₽
      </div>

      <button type="button" className={styles.clearButton} onClick={onClear}>
        Очистить расчёт
      </button>
    </div>
  );
}
