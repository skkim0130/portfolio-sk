import Modal from "@/components/common/Modal/Modal";
import { MdArrowOutward } from "react-icons/md";
import styles from "./WorksModal.module.scss";
import BulletList from "../../components/common/BulletList/BulletList";

export default function WorksModal({ project, onClose }) {
  if (!project) return null;

  return (
    <Modal isOpen={!!project} onClose={onClose}>
      <div className={styles.worksModal}>
        {/* modalHead */}
        <div className={styles.modalHead}>
          <span className={styles.category}>{project.category}</span>
          <h2 className={styles.title}>{project.title}</h2>
        </div>

        {/* Meta */}
        <ul className={styles.metaList}>
          <li className={styles.metaItem}>
            <span className={styles.label}>수행기간</span>
            <span className={styles.value}>{project.year}</span>
          </li>
          <li className={styles.metaItem}>
            <span className={styles.label}>디바이스</span>
            <span className={styles.value}>{project.device}</span>
          </li>
          <li className={styles.metaItem}>
            <span className={styles.label}>역할</span>
            <span className={styles.value}>{project.role}</span>
          </li>
          {project.link && (
            <li className={styles.metaItem}>
              <span className={styles.label}>Link</span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                바로가기 <MdArrowOutward />
              </a>
            </li>
          )}
        </ul>

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
            <img src={project.img} alt={`${project.title} 메인 이미지`} />
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
