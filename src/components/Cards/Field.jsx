import styles from "./Field.module.css";

export function Field({ label, children }) {
  return (
    <div className={styles.field}>
      {label && <label className={styles.label}>{label}</label>}

      {children}
    </div>
  );
}
