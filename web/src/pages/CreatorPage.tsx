// import { useContext } from "react";

import LoginModal from "../components/LoginModal/LoginModal";
import useModal from "../hooks/useModal";
// import LoginModal from "../components/LoginModal/LoginModal";
// import { ModalContext } from "../components/ModalProvider/ModalProvider";
// import TestModal from "../components/TestModal/TestModal";
// import useModal from "../hooks/useModal";
import { wrapperStyle } from "./HomePage.css";

function CreatorPage() {
  // const temp = useContext(ModalStateContext);
  const { open, close } = useModal("login");
  // const { close, open } = useContext(ModalContext);

  // const modal1 = useModal();
  // const { close: close2, open: open2 } = useContext(ModalContext);

  return (
    <div className={wrapperStyle}>
      <div>
        <button onClick={() => open("login")}>open modal</button>
        <LoginModal onClose={close} id="login" />
        {/* <button onClick={open2}>open modal2</button> */}
        {/* <TestModal onClose={close2} id="test" /> */}
      </div>
    </div>
  );
}

export default CreatorPage;
