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

      <div className={styles.grid}>
        {HISTORY_DATA.map((item, idx) => (
          <article key={idx} className={styles.card}>
            <header className={styles.cardHead}>
              <div className={styles.headTop}>
                <h3 className={styles.company}>{item.company}</h3>

                <div className={styles.periodBox}>
                  <span className={styles.period}>{item.period}</span>
                  <span className={styles.duration}>{item.duration}</span>
                </div>
              </div>

              <p className={styles.role}>{item.role}</p>
            </header>

            {item.desc && <p className={styles.summary}>{item.desc[0]}</p>}
          </article>
        ))}
      </div>
    </Section>
  );
}
