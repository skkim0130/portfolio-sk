import { useEffect } from "react";

export const useEscKey = (onClose) => {
  useEffect(() => {
    if (!onClose) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);
};
