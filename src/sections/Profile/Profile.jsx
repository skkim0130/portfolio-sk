import { PROFILE_DATA } from "@/data";
import SectionLayout from "../SectionLayout";
import styles from "./Profile.module.scss";

export default function Profile() {
  const { nameKo, role, intro, avatar } = PROFILE_DATA;

  return (
    <SectionLayout title="profile">
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img
            src={avatar}
            alt={`${nameKo} 프로필`}
            loading="eager"
            decoding="async"
          />
        </div>

        <div className={styles.meta}>
          <div className={styles.nameGroup}>
            <span className={styles.name}>{nameKo}</span>
            <span className={styles.role}>{role}</span>
          </div>
          <p className={styles.intro}>{intro}</p>
        </div>
      </div>
    </SectionLayout>
  );
}
