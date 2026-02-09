import { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./Modal.module.scss";

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <IoCloseOutline />
        </button>
        {children}
      </div>
    </div>
  );
}
