import Title from "@/components/common/Title/Title";
import Section from "@/components/common/Section";
import { HISTORY_DATA } from "@/constants";
import styles from "./History.module.scss";

export default function History() {
  return (
    <Section id="history">
      <Title
        title="History"
        desc="실무를 통해 쌓아온 경력의 흐름입니다."
        align="center"
      />

      <ul className={styles.grid}>
        {HISTORY_DATA.map((item, idx) => (
          <li key={idx} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.compInfo}>
                <h3 className={styles.company}>{item.company}</h3>
                <p className={styles.period}>
                  {item.period} <span>{item.duration}</span>
                </p>
              </div>
              <p className={styles.role}>{item.role}</p>
            </div>

            {item.desc && <p className={styles.summary}>{item.desc[0]}</p>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
