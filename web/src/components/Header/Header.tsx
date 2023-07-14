import { Button } from "@kingmojang/ui";
import { Link } from "react-router-dom";

import useModal from "../../hooks/useModal";
import LoginModal from "../LoginModal/LoginModal";
import { SearchBox } from "../SearchBox";
import * as Style from "./Header.css";

export function Header() {
  const { open: openLogin } = useModal("login");
  return (
    <header className={Style.HeaderStyle}>
      <Link to="/">킹모장</Link>
      <div className={Style.SearchBoxWraper}>
        <SearchBox />
      </div>
      <div className={Style.ButtonWrapper}>
        <Button className={Style.SigninButtonStyle}>
          <div onClick={() => openLogin()}>로그인</div>
          <LoginModal />
        </Button>
        <Button className={Style.SignupButtonStyle}>
          <Link to="/signup">회원가입</Link>
        </Button>
      </div>
    </header>
  );
}
