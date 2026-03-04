import SectionLayout from "../SectionLayout";
import { MdArrowOutward } from "react-icons/md";
import ProjectInfo from "./components/ProjectInfo";
import styles from "./Works.module.scss";

import { PATH } from "@/constants/path";
import { preloadImage } from "@/utils/preloadImage";

export default function Works({ works, onOpen }) {
  const handlePreload = (id) => {
    preloadImage(PATH.WORK_MAIN(id));
  };

  return (
    <SectionLayout title="works">
      <ul className={styles.worksList}>
        {works.map((project) => (
          <li key={project.id} className={styles.worksItem}>
            <button
              type="button"
              className={styles.card}
              onMouseEnter={() => handlePreload(project.id)}
              onFocus={() => handlePreload(project.id)}
              onTouchStart={() => handlePreload(project.id)}
              onClick={() => onOpen(project.id)}
              aria-label={`${project.title} 상세 보기`}
            >
              <ProjectInfo
                titleLevel="h3"
                category={project.category}
                title={project.title}
                desc={project.desc}
              />

              <div className={styles.chev} aria-hidden="true">
                <MdArrowOutward focusable="false" />
              </div>
            </button>
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
}
