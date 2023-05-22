import { useCallback, useContext } from "react";

import { ModalStateContext } from "../components/ModalProvider/ModalProvider";
import type { PortalProps } from "../components/Portal/Portal";
import Portal from "../components/Portal/Portal";

const useModal = (id: string) => {
  const context = useContext(ModalStateContext);

  const open = useCallback(() => {
    context?.setCurrentModal(id);
    console.log(context);
  }, []);

  const close = useCallback(() => {
    context?.setCurrentModal("");
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
