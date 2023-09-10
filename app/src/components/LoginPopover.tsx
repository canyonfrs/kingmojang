// import { useBaseURL } from "@kingmojang/api";
import { useBaseURL } from "@kingmojang/api";
import { useAuthDispatch, useAuthState } from "@kingmojang/auth";
import {
  IconGoogleLogo,
  IconKakaoLogo,
  IconKingmojangLogo,
  IconNaverLogo,
  IconTwitchLogo,
} from "@kingmojang/icon";
import { Button, Form, Popover, TextField } from "@kingmojang/ui";

// TODO: POPUP 구현
// import { open } from "@tauri-apps/api/shell";
import * as Style from "./LoginPopover.css";

const REDIRECT_URI = "http://localhost:1420";

export const LoginPopover = () => {
  const { currentUser } = useAuthState();
  const authDispatch = useAuthDispatch();
  const baseUrl = useBaseURL();
  const googleHref = `${baseUrl}/oauth2/authorize/google?redirect_uri=${REDIRECT_URI}`;

  const logout = () => authDispatch({ type: "로그아웃" });

  return (
    <Popover.Root>
      {currentUser ? (
        <>
          <Popover.Trigger className={Style.trigger}>
            {currentUser.nickname}님 안녕하세요!
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className={Style.content}>
              <IconKingmojangLogo width={24} />
              <Button
                onClick={logout}
                touchEffect={false}
                className={Style.loginButton}
              >
                로그아웃
              </Button>
            </Popover.Content>
          </Popover.Portal>
        </>
      ) : (
        <>
          <Popover.Trigger className={Style.trigger}>
            로그인하기
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className={Style.content}>
              <IconKingmojangLogo width={24} />
              <p>저장을 위해 로그인을 해주세요.</p>
              <p>
                현재 인증 코드를 받은 크리에이터만 킹모장 기능을 사용할 수
                있어요.
              </p>
              <Form className={Style.form}>
                <TextField className={Style.textfield} placeholder="아이디" />
                <TextField
                  className={Style.textfield}
                  type="password"
                  placeholder="비밀번호"
                />
              </Form>
              <Button touchEffect={false} className={Style.loginButton}>
                크리에이터 로그인
              </Button>

              <a
                className={Style.findIdLink}
                target="_blank"
                href="https://kmj.app/signup/usertype"
              >
                계정 찾기
              </a>

              <div className={Style.socialLoginSection}>
                <p>소셜 로그인</p>

                <div className={Style.socialLoginButtonContainer}>
                  <IconTwitchLogo className={Style.socialLoginButton} />
                  <a href={googleHref}>
                    <IconGoogleLogo className={Style.socialLoginButton} />
                  </a>
                  <IconNaverLogo className={Style.socialLoginButton} />
                  <IconKakaoLogo className={Style.socialLoginButton} />
                </div>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </>
      )}
    </Popover.Root>
  );
};
