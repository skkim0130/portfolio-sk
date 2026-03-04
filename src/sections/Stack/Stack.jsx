import SectionLayout from "../SectionLayout";
import { STACK_TAGS } from "@/data";
import styles from "./Stack.module.scss";

export default function stack() {
  return (
    <SectionLayout title="tech stack">
      <ul className={styles.techRow} aria-label="보유 기술 및 도구 목록">
        {STACK_TAGS.map((tag) => (
          <li key={tag} className="badge-default">
            {tag}
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
}
