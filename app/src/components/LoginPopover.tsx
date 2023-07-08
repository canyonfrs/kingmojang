import { Button, Form, Popover, TextField } from "@kingmojang/ui";

import { GoogleIcon } from "../icons/GoogleIcon";
import { KakaoIcon } from "../icons/KaKaoIcon";
import { LogoIcon } from "../icons/LogoIcon";
import { NaverIcon } from "../icons/NaverIcon";
import { TwitchIcon } from "../icons/TwitchIcon";
import * as Style from "./LoginPopover.css";

export const LoginPopover = () => {
  return (
    <Popover.Root>
      <Popover.Trigger className={Style.trigger}>로그인하기</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={Style.content}>
          <LogoIcon width={24} />
          <p>저장을 위해 로그인을 해주세요.</p>
          <p>
            현재 인증 코드를 받은 크리에이터만 킹모장 기능을 사용할 수 있어요.
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
              <TwitchIcon className={Style.socialLoginButton} />
              <GoogleIcon className={Style.socialLoginButton} />
              <NaverIcon className={Style.socialLoginButton} />
              <KakaoIcon className={Style.socialLoginButton} />
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
