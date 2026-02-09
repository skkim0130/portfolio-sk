import styles from "./BulletList.module.scss";

export default function BulletList({ items, className = "" }) {
  if (!items || items.length === 0) return null;

  return (
    <ul className={`${styles.bulletList} ${className}`}>
      {items.map((item, idx) => (
        <li key={idx} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
