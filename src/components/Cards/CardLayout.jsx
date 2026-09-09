import styles from "./CardLayout.module.css";

export function CardLayout({ title, price, children }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.content}>{children}</div>

      <div className={styles.price}>
        Стоимость: {price.toLocaleString("ru-RU")} ₽
      </div>
    </article>
  );
}
