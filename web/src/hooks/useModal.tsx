import { useCallback, useContext } from "react";

import { ModalStateContext } from "../components/contexts/ModalProvider";
import type { PortalProps } from "../components/Portal/Portal";
import Portal from "../components/Portal/Portal";
import type { ModalType } from "../types/modal";

const useModal = (id: ModalType) => {
  const context = useContext(ModalStateContext);

  const open = useCallback(() => {
    context?.setCurrentModal(id);
  }, []);

  const close = useCallback(() => {
    context?.setCurrentModal("closed");
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
  };
};

export default useModal;
