import LoginModal from "../components/LoginModal/LoginModal";
import useModal from "../hooks/useModal";
import { wrapperStyle } from "./HomePage.css";

function CreatorPage() {
  const { Portal, open, close } = useModal();

  return (
    <div className={wrapperStyle}>
      <div>
        <button onClick={open}>open modal</button>
        <Portal hasBackground>
          <LoginModal close={close} />
        </Portal>
      </div>
    </div>
  );
}

export default CreatorPage;
