// import { useContext } from "react";

import useModal from "../../hooks/useModal";
// import type { ModalProps } from "../LoginModal/LoginModal";
// import { ModalContext } from "../ModalProvider/ModalProvider";

export default function TestModal() {
  const testModal = useModal("test");
  //   const { Portal } = useContext(ModalContext);
  return (
    <testModal.Modal hasBackground={false} id="test" onClose={testModal.close}>
      this is a test Modal
    </testModal.Modal>
  );
}
