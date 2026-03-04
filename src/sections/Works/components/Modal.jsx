import { useEffect } from "react";
import { TfiClose } from "react-icons/tfi";
import { useEscKey } from "@/hooks/useKeydown";
import ProjectInfo from "./ProjectInfo";
import styles from "./Modal.module.scss";
import ModalContent from "./ModalContent";

export default function Modal({ work, onClose }) {
  useEscKey(work ? onClose : null);

  useEffect(() => {
    if (!work) return;
    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, [work]);

  if (!work) return null;

  return (
    <div
      className={styles.modal}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="모달 닫기"
        >
          <TfiClose aria-hidden="true" focusable="false" />
        </button>

        <div className={styles.scrollContent}>
          <ProjectInfo {...work} titleLevel="h2" />
          <ModalContent {...work} />
        </div>
      </div>
    </div>
  );
}
