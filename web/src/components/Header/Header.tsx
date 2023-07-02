import { Button } from "@kingmojang/ui";
import { Link } from "react-router-dom";

import { SearchBox } from "../SearchBox";
import * as Style from "./Header.css";

export function Header() {
  return (
    <header className={Style.HeaderStyle}>
      <div className={Style.LogoStyle}>킹모장</div>
      <div className={Style.SearchBoxWraper}>
        <SearchBox />
      </div>
      <div className={Style.ButtonWrapper}>
        <Button className={Style.SigninButtonStyle}>
          <Link to="/signup/usertype?">로그인</Link>
        </Button>
        <Button className={Style.SignupButtonStyle}>
          <Link to="/signup">회원가입</Link>
        </Button>
      </div>
    </header>
  );
}
