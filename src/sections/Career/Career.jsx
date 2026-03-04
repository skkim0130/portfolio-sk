import { Fragment } from "react";
import SectionLayout from "../SectionLayout";
import { CAREER_DATA } from "@/data";
import styles from "./Career.module.scss";

export default function Career() {
  return (
    <SectionLayout title="career">
      <dl className={styles.timeline}>
        {CAREER_DATA.map((item, i) => (
          <Fragment key={`${item.company}-${i}`}>
            <dt className={styles.date}>
              {item.start} – {item.end}
              <span className={styles.period}>{item.period}</span>
            </dt>
            <dd className={styles.info}>
              <strong className={styles.title}>{item.company}</strong>
              <p className={styles.desc}>{item.role}</p>
            </dd>
          </Fragment>
        ))}
      </dl>
    </SectionLayout>
  );
}
