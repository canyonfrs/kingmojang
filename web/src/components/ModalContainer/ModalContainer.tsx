// import useModal from "../../hooks/useModal";
// import type { ModalState } from "../ModalProvider/ModalProvider";

// const MODAL_COMPONENTS = {};

// function ModalContainer() {
//   const { close } = useModal();

//   const renderModal = modalList.map(({ type, props }: ModalState) => {
//     const ModalComponent = MODAL_COMPONENTS[type];
//     return <ModalComponent key={type} {...props} onClose={close} />;
//   });
//   return createPortal(<>{renderModal}</>, document.getElementById("modal"));
// }

// export default ModalContainer;
