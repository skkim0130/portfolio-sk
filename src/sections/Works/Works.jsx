import { useState } from "react";
import Title from "@/components/common/Title/Title";
import Section from "@/components/common/Section";
import { WORKS_DATA } from "@/constants";
import WorksModal from "./WorksModal";
import styles from "./Works.module.scss";

export default function Work() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <Section id="works">
      <div className={styles.inner}>
        <Title
          title="Works"
          desc="실무에서 수행한 주요 프로젝트입니다."
          align="center"
        />

        <ul className={styles.grid}>
          {WORKS_DATA.map((project) => (
            <li key={project.id}>
              <article className={styles.card}>
                <button
                  type="button"
                  className={styles.cardButton}
                  onClick={() => setActiveProject(project)}
                  aria-haspopup="dialog"
                >
                  <div className={styles.thumb}>
                    <img
                      src={project.img}
                      alt={`${project.title} 미리보기`}
                      loading="lazy"
                    />
                    {project.role && (
                      <span className={styles.badge}>{project.role}</span>
                    )}
                  </div>

                  <div className={styles.txtbox}>
                    <div className={styles.info}>
                      <span className={styles.category}>
                        {project.category}
                      </span>
                      <time
                        className={styles.year}
                        dateTime={project.year
                          .split("~")[0]
                          .replace(/\//g, "-")}
                      >
                        {project.year}
                      </time>
                    </div>

                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.desc}>{project.desc}</p>
                  </div>
                </button>
              </article>
            </li>
          ))}
        </ul>
      </div>

      {activeProject && (
        <WorksModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </Section>
  );
}
