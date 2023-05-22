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
      ? ({
          children,
          hasBackground,
        }: {
          children: React.ReactNode;
          hasBackground: boolean;
        }) => (
          <Portal
            onClose={close}
            variant={hasBackground ? "hasDimmer" : "noDimmer"}
          >
            {children}
          </Portal>
        )
      : () => null,
    open,
    close,
    isOpen,
  };
};

export default useModal;
