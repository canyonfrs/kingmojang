import { useCallback, useContext, useEffect, useState } from "react";

import { ModalStateContext } from "../components/ModalProvider/ModalProvider";
import type { PortalProps } from "../components/Portal/Portal";
import Portal from "../components/Portal/Portal";

const useModal = (title: string) => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(ModalStateContext);

  const open = useCallback((id: string) => {
    setIsOpen(() => true);
    context?.addModalToList(id);
    console.log(context);
  }, []);
  useEffect(() => {
    console.log("modalList1", context?.modalList);
  }, [context?.modalList]);

  const close = useCallback(() => {
    setIsOpen(() => false);
  }, []);

  return {
    Modal:
      title === context?.modalList[0]
        ? ({ children, hasBackground, id, onClose }: PortalProps) => (
            <Portal
              onClose={onClose}
              id={id}
              hasBackground={hasBackground}
              // variant={hasBackground ? "hasDimmer" : "noDimmer"}
            >
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
