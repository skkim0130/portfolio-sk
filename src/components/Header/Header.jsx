import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { SiNotion } from "react-icons/si";
import styles from "./Header.module.scss";

export default function Header() {
  const [theme, setTheme] = useState("dark");
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const sectionIds = ["skills", "history", "works"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* 텍스트 메뉴 */}
        {["skills", "history", "works"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeId === id ? styles.active : ""}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}

        <div className={styles.iconWrap}>
          <a
            href="https://www.notion.so/2026-2ee1a88239c380de94d1ed9d1f2bf461?source=copy_link"
            target="_blank"
            rel="noreferrer"
            className={styles.iconBtn}
            title="노션 경력증명서"
          >
            <SiNotion />
          </a>

          <button
            type="button"
            className={styles.iconBtn}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiMoon /> : <FiSun />}
          </button>
        </div>
      </nav>
    </header>
  );
}
