import styles from "./Title.module.scss";

export default function Title({ title, desc, align = "center" }) {
  return (
    <div className={`${styles.titleWrap} ${styles[align]}`}>
      <h2 className={styles.title}>{title}</h2>
      {desc && <p className={styles.desc}>{desc}</p>}
    </div>
  );
}
