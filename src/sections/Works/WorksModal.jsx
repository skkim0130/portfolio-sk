import Modal from "@/components/common/Modal/Modal";
import { MdArrowOutward } from "react-icons/md";
import styles from "./WorksModal.module.scss";
import BulletList from "../../components/common/BulletList/BulletList";

export default function WorksModal({ project, onClose }) {
  if (!project) return null;

  const safeDateTime = project.year?.split("~")[0].trim().replace(/\//g, "-");

  return (
    <Modal isOpen={!!project} onClose={onClose}>
      <div className={styles.worksModal}>
        {/* Header */}
        <header className={styles.header}>
          <p className={styles.category}>{project.category}</p>
          <h2 className={styles.title}>{project.title}</h2>
        </header>

        {/* Meta */}
        <dl className={styles.metaList}>
          <div className={styles.metaItem}>
            <dt>수행기간</dt>
            <dd>
              <time dateTime={safeDateTime}>{project.year}</time>
            </dd>
          </div>

          <div className={styles.metaItem}>
            <dt>디바이스</dt>
            <dd>{project.device}</dd>
          </div>

          <div className={styles.metaItem}>
            <dt>역할</dt>
            <dd>{project.role}</dd>
          </div>

          {project.link && (
            <div className={styles.metaItem}>
              <dt>Link</dt>
              <dd>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  aria-label="사이트 새 창 열기"
                >
                  Visit <MdArrowOutward aria-hidden />
                </a>
              </dd>
            </div>
          )}
        </dl>

        {/* Content */}
        <div className={styles.content}>
          <section className={styles.section}>
            <h3 className="ui-section-title">프로젝트 개요</h3>
            <p className={styles.desc}>{project.desc}</p>
          </section>

          {project.keyFeatures?.length > 0 && (
            <section className={styles.section}>
              <h3 className="ui-section-title">주요 특징</h3>
              <BulletList items={project.keyFeatures} />
            </section>
          )}
        </div>

        {/* Gallery */}
        <div className={styles.imageGallery}>
          <figure className={styles.imgBox}>
            <img src={project.img} alt={`${project.title} 대표 이미지`} />
          </figure>

          {project.subImgCount > 0 && (
            <div className={styles.subImages}>
              {Array.from({ length: project.subImgCount }).map((_, i) => (
                <figure key={i} className={styles.imgBox}>
                  <img
                    src={`${project.modalBaseImg}_${i + 1}.png`}
                    alt=""
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
