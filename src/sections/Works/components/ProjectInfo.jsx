import styles from "./ProjectInfo.module.scss";

export default function ProjectInfo({
  category,
  title,
  desc,
  titleLevel = "h3",
}) {
  const TitleTag = titleLevel;

  return (
    <div className={styles.infoBox}>
      {category?.length > 0 && (
        <span className={`badge-primary ${styles.cate}`}>{category}</span>
      )}
      <TitleTag className={styles.title}>{title}</TitleTag>
      {desc && <p className={styles.desc}>{desc}</p>}
    </div>
  );
}
