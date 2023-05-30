import LoginModal from "../../components/LoginModal/LoginModal";
import TestModal from "../../components/TestModal/TestModal";
import useModal from "../../hooks/useModal";
import * as styles from "./CreatorPage.css";

export function CreatorPage() {
  const { open: openLogin } = useModal("login");
  const { open: openTest } = useModal("test");

  return (
    <div className={styles.container}>
      <div>
        <button onClick={() => openLogin()}>open modal</button>
        <LoginModal />
        <button onClick={() => openTest()}>open modal test</button>
        <TestModal />
      </div>
    </div>
  );
}
