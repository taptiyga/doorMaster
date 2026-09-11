import styles from "./CardLayout.module.css";

export function CardLayout({ title, price, onRemove, children }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>

        <button
          type="button"
          className={styles.remove}
          onClick={onRemove}
          aria-label="Удалить работу"
        >
          ×
        </button>
      </div>

      <div className={styles.content}>{children}</div>

      <div className={styles.price}>
        Стоимость: {price.toLocaleString("ru-RU")} ₽
      </div>
    </article>
  );
}
