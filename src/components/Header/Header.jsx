import styles from "./Header.module.scss";
import { SiNotion } from "react-icons/si";
import { PROFILE_DATA } from "@/data/profile";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <a href="./">K.SUNKYUNG</a>
        </h1>
        <a
          href={PROFILE_DATA.notionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-link"
          aria-label="노션 경력기술서 (새 창 열기)"
        >
          <SiNotion aria-hidden="true" focusable="false" />
          <span>경력기술서</span>
        </a>
      </div>
    </header>
  );
}
