import styles from "./RadioGroup.module.css";

export function RadioGroup({ label, name, value, options, onChange }) {
  return (
    <div className={styles.group}>
      <div className={styles.label}>{label}</div>

      <div className={styles.options}>
        {options.map((option) => (
          <label key={option.value} className={styles.option}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={String(value) === String(option.value)}
              onChange={(event) => onChange(event.target.value)}
            />

            <span className={styles.radio}></span>

            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
