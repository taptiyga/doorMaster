import { useState } from "react";

export function CalculatorForm({ onAdd }) {
  const [selectedType, setSelectedType] = useState("door");

  function handleAdd() {
    onAdd(selectedType);
  }

  return (
    <div>
      <select
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

      <button onClick={handleAdd}>Добавить</button>
    </div>
  );
}
