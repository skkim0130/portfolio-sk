import Header from "@/components/Header/Header";
import Intro from "@/sections/Intro/Intro";
import Skills from "@/sections/Skills/Skills";
import History from "@/sections/History/History";
import Works from "@/sections/Works/Works";

import "@/assets/scss/index.scss";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <Intro />
        <Skills />
        <History />
        <Works />
      </main>
    </>
  );
}
