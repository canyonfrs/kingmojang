import { useAuthState } from "@kingmojang/auth";
import { Button, Popover } from "@kingmojang/ui";
import { Link } from "react-router-dom";

import useModal from "../../hooks/useModal";
import AlarmIcon from "../../images/alarm.svg";
import LogoIcon from "../../images/Logo.svg";
import NoProfileImage from "../../images/noProfileUserImage.png";
import LoginModal from "../LoginModal/LoginModal";
import { SearchBox } from "../SearchBox";
import * as Style from "./Header.css";

export function Header() {
  const { open: openLoginModal } = useModal("login");
  const { currentUser } = useAuthState();

  return (
    <header className={Style.HeaderStyle}>
      <Link to="/">킹모장</Link>
      <div className={Style.SearchBoxWraper}>
        <SearchBox />
      </div>
      <div className={Style.ButtonWrapper}>
        {currentUser ? (
          <>
            <img width={24} src={AlarmIcon} alt="알람" />
            <Popover.Root>
              <Popover.Trigger className={Style.trigger}>
                <img width={24} src={NoProfileImage} alt="프로필" />
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className={Style.content}>
                  <img width={24} src={LogoIcon} alt="로고" />
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
              <div onClick={openLoginModal}>로그인</div>
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
