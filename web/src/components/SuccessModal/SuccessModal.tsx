import { IconCheckVerified } from "@kingmojang/icon";
import { IconCheck } from "@kingmojang/icon";

import useModal from "../../hooks/useModal";
import Success from "../Success/Success";
import * as Style from "./SuccessModal.css";

export default function SuccessModal() {
  const { Modal, close } = useModal("success");
  return (
    <Modal hasBackground={true} onClose={close} id="success">
      <div className={Style.wrapper}>
        <div className={Style.iconWrapper}>
          <IconCheckVerified className={Style.checkWrapper} />
          <IconCheck className={Style.check} />
        </div>
        <div className={Style.container}>
          <h1 className={Style.title}>야호! 회원가입을 완료했어요!</h1>
          <p className={Style.description}>
            이제 크리에이터의 메모장을 둘러봐요
          </p>
        </div>
        <button className={Style.homeButton}>홈으로 돌아가기</button>
        <Success />
      </div>
    </Modal>
  );
}
