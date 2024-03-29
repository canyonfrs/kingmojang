import { useAuthState } from "@kingmojang/auth";
import {
  IconAlarm,
  IconKingmojangLogo,
  IconKingmojangWithTextLogo,
} from "@kingmojang/icon";
import { Button, Popover } from "@kingmojang/ui";
import { Link, useNavigate } from "react-router-dom";

import NoProfileImage from "../../images/noProfileUserImage.png";
import LoginModal from "../LoginModal/LoginModal";
import { SearchBox } from "../SearchBox";
import * as Style from "./Header.css";

export function Header() {
  const { currentUser } = useAuthState();
  const navigator = useNavigate();
  return (
    <header className={Style.HeaderStyle}>
      <IconKingmojangWithTextLogo
        height="28px"
        onClick={() => navigator("/", { replace: true })}
        style={{ cursor: "pointer" }}
      />
      <div className={Style.SearchBoxWraper}>
        <SearchBox />
      </div>
      <div className={Style.ButtonWrapper}>
        {currentUser ? (
          <>
            <IconAlarm width={24} />
            <Popover.Root>
              <Popover.Trigger className={Style.trigger}>
                <img width={24} src={NoProfileImage} alt="프로필" />
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className={Style.content}>
                  <IconKingmojangLogo width={24} />
                  {currentUser.nickname}님 안녕하세요
                  <Button touchEffect={false} className={Style.logoutButton}>
                    로그아웃
                  </Button>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </>
        ) : (
          <>
            <Button className={Style.SigninButtonStyle}>
              <LoginModal />
            </Button>
            <Button className={Style.SignupButtonStyle}>
              <Link to="/signup">회원가입</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
