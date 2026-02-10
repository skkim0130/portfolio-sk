import Section from "@/components/common/Section";
import styles from "./Intro.module.scss";

export default function Intro() {
  return (
    <Section id="intro">
      <div className={styles.inner}>
        <span className={styles.tag}>Web Publisher · UI Developer</span>
        <h2 className={styles.title}>
          구조를 설계하는
          <strong>웹 퍼블리셔 김선경</strong>
        </h2>
        <p className={styles.desc}>
          유지보수를 고려한 UI 구조와
          <br />
          실무 중심의 퍼블리싱을 지향합니다.
        </p>
      </div>
    </Section>
  );
}
