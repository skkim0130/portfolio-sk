import styles from "./Header.module.scss";
import { SiNotion, SiGithub } from "react-icons/si";
import { PROFILE_DATA } from "@/data/profile";

export default function Header() {
  const btnLinks = [
    {
      key: "notion",
      href: PROFILE_DATA.notionUrl,
      label: "경력기술서",
      ariaLabel: "노션 경력기술서 (새 창 열기)",
      Icon: SiNotion,
    },
    {
      key: "github",
      href: PROFILE_DATA.githubUrl,
      label: "GitHub",
      ariaLabel: "GitHub 코드 저장소 (새 창 열기)",
      Icon: SiGithub,
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <a href="./">SUNKYUNG.K</a>
        </h1>
        <div className={styles.btns}>
          {btnLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
              aria-label={link.ariaLabel}
            >
              <link.Icon aria-hidden="true" focusable="false" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
