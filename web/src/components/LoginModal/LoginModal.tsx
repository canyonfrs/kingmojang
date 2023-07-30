import {
  IconGoogleLogo,
  IconKakaoLogo,
  IconKingmojangLogo,
  IconNaverLogo,
  IconTwitchLogo,
  IconWarning,
} from "@kingmojang/icon";
import { Form, TextField } from "@kingmojang/ui";
import { useEffect, useState } from "react";

import useModal from "../../hooks/useModal";
// TODO(@ALL): svg 관리 방법 고민
import {
  form,
  info,
  input,
  loginBtn,
  modal,
  p,
  socialLogin,
  warning,
} from "./LoginModal.css";

const REDIRECT_URI = "http://localhost:3000//oauth2/redirect/signin";
const API_END_POINT = "http://localhost:8080";

const socials = [
  {
    icon: {
      render: () => <IconTwitchLogo width={24} />,
    },
    href: `${API_END_POINT}/oauth2/authorize/twitch/${REDIRECT_URI}`,
    alt: "Twitch 로그인",
  },
  {
    icon: {
      render: () => <IconGoogleLogo width={24} />,
    },
    href: `${API_END_POINT}/oauth2/authorize/google?redirect_uri=${REDIRECT_URI}`,
    alt: "Google 로그인",
  },
  {
    icon: {
      render: () => <IconNaverLogo width={24} />,
    },
    href: `${API_END_POINT}/oauth2/authorize/naver/${REDIRECT_URI}`,
    alt: "Naver 로그인",
  },
  {
    icon: {
      render: () => <IconKakaoLogo width={24} />,
    },
    href: `${API_END_POINT}/oauth2/authorize/kakao/${REDIRECT_URI}`,
    alt: "KaKao 로그인",
  },
];

export default function LoginModal() {
  const { Modal, close } = useModal("login");
  const [capsLockOn, setCapsLockOn] = useState(false);

  const isError = true;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    close();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const capsLockIsOn = event.getModifierState("CapsLock");
      setCapsLockOn(capsLockIsOn);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Modal hasBackground={true} onClose={close} id="login">
      <div className={modal}>
        <IconKingmojangLogo width={24} />
        <Form className={form} onSubmit={submit}>
          <TextField placeholder="아이디" className={input} />
          <TextField placeholder="비밀번호" className={input} />
          {capsLockOn ? (
            <div className={warning}>
              <IconWarning width={24} />
              CapsLock이 켜져있습니다.
            </div>
          ) : isError ? (
            <div className={warning}>
              <IconWarning width={24} />
              아이디 혹은 비밀번호를 다시 확인해 주세요.
            </div>
          ) : null}
          <button className={loginBtn}>로그인</button>
        </Form>
        <div className={info}>
          <p className={p}>아이디가 없나요?</p>
          <p className={p}>계정찾기</p>
        </div>
        <div className={p}>소셜 로그인</div>
        <div className={socialLogin}>
          {socials.map((social) => (
            <a href={social.href} key={social.alt}>
              {social.icon.render()}
            </a>
          ))}
        </div>
      </div>
    </Modal>
  );
}
