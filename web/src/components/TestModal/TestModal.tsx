import useModal from "../../hooks/useModal";

export default function TestModal() {
  const { Modal, close } = useModal("test");

  return (
    <Modal hasBackground={false} id="test" onClose={close}>
      this is a test Modal
    </Modal>
  );
}
