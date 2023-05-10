import { Button } from "@kingmojang/ui";

import * as Style from "./Header.css";
import { SearchBox } from "./SearchBox";

function Header() {
  return (
    <header className={Style.HeaderStyle}>
      <div className={Style.LogoStyle}>킹모장</div>
      <div className={Style.SearchBoxWraper}>
        <SearchBox />
      </div>
      <div className={Style.ButtonWrapper}>
        <Button className={Style.SigninButtonStyle}>로그인</Button>
        <Button className={Style.SignupButtonStyle}>회원가입</Button>
      </div>
    </header>
  );
}

export default Header;
