// import { useContext } from "react";

import LoginModal from "../components/LoginModal/LoginModal";
import TestModal from "../components/TestModal/TestModal";
import useModal from "../hooks/useModal";
import { wrapperStyle } from "./HomePage.css";

function CreatorPage() {
  const { open: openLogin } = useModal("login");
  const { open: openTest } = useModal("test");

  return (
    <div className={wrapperStyle}>
      <div>
        <button onClick={() => openLogin()}>open modal</button>
        <LoginModal />
        <button onClick={() => openTest()}>open modal test</button>
        <TestModal />
      </div>
    </div>
  );
}

export default CreatorPage;
