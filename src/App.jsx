import { useState } from "react";
import { WORKS_DATA } from "@/data";
import Layout from "@/components/Layout/Layout";
import Modal from "./sections/Works/components/Modal";
import "@/assets/scss/index.scss";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const currentWork = WORKS_DATA.find((item) => item.id === selectedId);

  return (
    <>
      <Layout onSelectWork={setSelectedId} />

      {currentWork && (
        <Modal work={currentWork} onClose={() => setSelectedId(null)} />
      )}
    </>
  );
}
