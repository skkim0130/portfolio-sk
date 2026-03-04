import styles from "./SectionLayout.module.scss";

export default function SectionLayout({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.label}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
