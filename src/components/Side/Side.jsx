import Profile from "@/sections/Profile/Profile";
import Stack from "@/sections/Stack/Stack";
import Career from "@/sections/Career/Career";
import styles from "./Side.module.scss";

export default function Side() {
  return (
    <aside className={styles.side} aria-label="사용자 상세 정보">
      <div className={styles.inner}>
        <Profile />
        <Stack />
        <Career />
      </div>
    </aside>
  );
}
