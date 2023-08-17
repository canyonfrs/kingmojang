import type { ModalType } from "@kingmojang/types";
import { useCallback, useContext, useState } from "react";

import type { PortalProps } from "../components/Portal/Portal";
import Portal from "../components/Portal/Portal";
import { ModalStateContext } from "../contexts/ModalProvider";

const useModal = (id: ModalType) => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(ModalStateContext);

  const open = useCallback(() => {
    context?.setCurrentModal(id);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    context?.setCurrentModal("closed");
    setIsOpen(false);
  }, []);

  return {
    Modal:
      id === context?.currentModal
        ? ({ children, hasBackground, id, onClose }: PortalProps) => (
            <Portal onClose={onClose} id={id} hasBackground={hasBackground}>
              {children}
            </Portal>
          )
        : () => <></>,
    open,
    close,
    isOpen,
  };
};

export default useModal;
