import Header from "../Header/Header";
import Side from "../Side/Side";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

import { WORKS_DATA } from "@/data";
import Works from "@/sections/Works/Works";

export default function Layout({ onSelectWork }) {
  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.container}>
        <Side />
        <main id="main-content" className={styles.mainContent}>
          <Works works={WORKS_DATA} onOpen={onSelectWork} />
          <Footer />
        </main>
      </div>
    </div>
  );
}
