export function calculateCornice(card, base) {
  const width = Number(card.corniceWidth);

  if (card.type === "slide") {
    return (base * 0.25 * width * 2) / 1000;
  }

  if (card.type === "doubleSlide") {
    return (base * 0.25 * width * 4) / 1000;
  }

  return 0;
}
