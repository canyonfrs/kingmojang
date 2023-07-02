import { Button } from "@kingmojang/ui";
import { useEffect } from "react";

import useModal from "../../hooks/useModal";
import { Spacing } from "../Spacing/Spacing";
import * as Style from "./ExitModal.css";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function ExitModal({ open: open, onClose }: Props) {
  const { Modal, open: openModal, close } = useModal("exit");

  useEffect(() => {
    if (open) {
      openModal();
    }
  }, [open]);

  const handleModalClose = () => {
    onClose();
    close();
  };

  return (
    <Modal id="exit" hasBackground={true} onClose={handleModalClose}>
      <div className={Style.Container}>
        <span className={Style.Description}>탈퇴하면 모든 정보가 사라져요</span>
        <Spacing size={7} />
        <h1 className={Style.Title}>정말로 탈퇴하시겠어요?</h1>
        <Spacing size={41} />
        <div className={Style.ButtonWrapper}>
          <Button className={Style.SecondButton} onClick={handleModalClose}>
            네, 탈퇴할게요
          </Button>
          <Button className={Style.PrimaryButton} onClick={handleModalClose}>
            아니오, 돌아갈래요
          </Button>
        </div>
      </div>
    </Modal>
  );
}
