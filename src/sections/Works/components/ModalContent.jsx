import { MdArrowOutward } from "react-icons/md";
import styles from "./ModalContent.module.scss";

export default function ModalContent({
  title,
  role,
  year,
  device,
  link,
  keyFeatures = [],
  mainImg,
  subImgs = [],
}) {
  const metaItems = [
    { label: "Year", value: year },
    { label: "Role", value: role },
    { label: "Device", value: device },
  ].filter((item) => item.value);

  return (
    <>
      <ul className={styles.meta}>
        {metaItems.map(({ label, value }) => (
          <li key={label} className={styles.metaItem}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
          </li>
        ))}
        {link && (
          <li className={`${styles.metaItem} ${styles.linkItem}`}>
            <span className={styles.label}>Link</span>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-link ${styles.linkBtn}`}
              aria-label="사이트 보기 (새 창)"
            >
              <span>사이트 보기</span>
              <MdArrowOutward aria-hidden="true" focusable="false" />
            </a>
          </li>
        )}
      </ul>

      <div className={styles.detail}>
        {keyFeatures.length > 0 && (
          <section className={styles.detailSection}>
            <h3 className={styles.detailTitle}>Key Tasks</h3>
            <ul className={styles.taskList}>
              {keyFeatures.map((task, i) => (
                <li key={`task-${i}`}>{task}</li>
              ))}
            </ul>
          </section>
        )}

        <section className={styles.detailSection}>
          <h3 className={styles.detailTitle}>Project Preview</h3>
          <div className={styles.preview}>
            {mainImg && (
              <figure className={styles.previewImg}>
                <img
                  src={mainImg}
                  alt={`${title} 대표 화면`}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            )}
            {subImgs.map((src, i) => (
              <figure key={i} className={styles.previewImg}>
                <img
                  src={src}
                  alt={`${title} 상세 화면 ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
