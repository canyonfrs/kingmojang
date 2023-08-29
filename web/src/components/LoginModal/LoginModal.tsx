import { useLocalLogin } from "@kingmojang/api";
import { useAuthDispatch } from "@kingmojang/auth";
import {
  IconGoogleLogo,
  IconKakaoLogo,
  IconKingmojangLogo,
  IconNaverLogo,
  IconTwitchLogo,
  IconWarning,
} from "@kingmojang/icon";
import { Form, TextField } from "@kingmojang/ui";
import { useEffect, useRef, useState } from "react";

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
      render: () => <IconTwitchLogo width={42} />,
    },
    href: `${API_END_POINT}/oauth2/authorize/twitch/${REDIRECT_URI}`,
    alt: "Twitch 로그인",
  },
  {
    icon: {
      render: () => <IconGoogleLogo width={42} />,
    },
    href: `${API_END_POINT}/oauth2/authorize/google?redirect_uri=${REDIRECT_URI}`,
    alt: "Google 로그인",
  },
  {
    icon: {
      render: () => <IconNaverLogo width={42} />,
    },
    href: `${API_END_POINT}/oauth2/authorize/naver/${REDIRECT_URI}`,
    alt: "Naver 로그인",
  },
  {
    icon: {
      render: () => <IconKakaoLogo width={42} />,
    },
    href: `${API_END_POINT}/oauth2/authorize/kakao/${REDIRECT_URI}`,
    alt: "KaKao 로그인",
  },
];

export default function LoginModal() {
  const { Modal, close, isOpen, open: openLoginModal } = useModal("login");
  const [capsLockOn, setCapsLockOn] = useState(false);
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isError] = useState(false);
  const authDispatch = useAuthDispatch();
  const { mutate, data } = useLocalLogin();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      {
        email: idRef.current?.value!,
        password: passwordRef.current?.value!,
      },
      {
        onSuccess(res) {
          authDispatch({
            type: "로컬 로그인 토큰 저장",
            token: {
              accessToken: res.data.data.accessToken,
              refreshToken: res.data.data.refreshToken,
            },
          });
        },
      },
    );
    console.log("temp", data);
    close();
  };

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      const capsLockIsOn = event.getModifierState("CapsLock");
      setCapsLockOn(capsLockIsOn);
    };
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <>
      <div onClick={openLoginModal}>로그인</div>
      {isOpen && (
        <Modal hasBackground={true} onClose={close} id="login">
          <div className={modal}>
            <IconKingmojangLogo width={42} height={42} />
            <Form className={form} onSubmit={submit}>
              <TextField placeholder="아이디" className={input} ref={idRef} />
              <TextField
                placeholder="비밀번호"
                className={input}
                ref={passwordRef}
              />
              {capsLockOn && (
                <div className={warning}>
                  <IconWarning width={16} />
                  CapsLock이 켜져있습니다.
                </div>
              )}
              {isError && (
                <div className={warning}>
                  <IconWarning width={16} />
                  아이디 혹은 비밀번호를 다시 확인해 주세요.
                </div>
              )}
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
      )}
    </>
  );
}
