import Title from "@/components/common/Title/Title";
import Section from "@/components/common/Section";
import { SKILLS_DATA } from "@/constants";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <Section id="skills">
      <Title
        title="Skills"
        desc="실무에서 사용해온 UI 구현과 퍼블리싱 작업 기준입니다."
        align="center"
      />

      <div className={styles.grid}>
        {SKILLS_DATA.map((group, idx) => (
          <div key={idx} className={styles.card}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <div className={styles.stackGroup}>
              {group.items.map((tech, i) => (
                <span key={i} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
