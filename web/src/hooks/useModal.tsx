import { useCallback, useState } from "react";

import Portal from "../components/Portal/Portal";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(() => true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(() => false);
  }, []);

  return {
    Portal: isOpen
      ? ({ children }: { children: React.ReactNode }) => (
          <Portal onClose={close}>{children}</Portal>
        )
      : () => null,
    open,
    close,
    isOpen,
  };
};

export default useModal;
