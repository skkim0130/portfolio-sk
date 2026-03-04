import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const EMAIL = "mimcom43@kakao.com";

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <address className={styles.contact}>
          <a
            href={`mailto:${EMAIL}`}
            className={styles.email}
            title="메일 보내기"
          >
            {EMAIL}
          </a>
        </address>
        <p className={styles.copyright}>
          &copy; {currentYear}. <strong>SunKyung Kim.</strong> All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
