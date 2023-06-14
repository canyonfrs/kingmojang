import { Form, TextField } from "@kingmojang/ui";
import { useEffect, useState } from "react";

import useModal from "../../hooks/useModal";
// TODO(@ALL): svg 관리 방법 고민
import Google from "../../images/Google.svg";
import KaKao from "../../images/KaKao.svg";
import Logo from "../../images/Logo.svg";
import Naver from "../../images/Naver.svg";
import Twitch from "../../images/Twitch.svg";
import Warn from "../../images/Warn.svg";
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

export default function LoginModal() {
  const { Modal, close } = useModal("login");
  const SocialLoginLogo = [
    { src: Twitch, href: "", alt: "Twitch 로그인" },
    { src: Google, href: "", alt: "Google 로그인" },
    { src: Naver, href: "", alt: "Naver 로그인" },
    { src: KaKao, href: "", alt: "KaKao 로그인" },
  ];

  const isError = true;

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    close();
  };

  const [capsLockOn, setCapsLockOn] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const capsLockIsOn = event.getModifierState("CapsLock");
      setCapsLockOn(capsLockIsOn);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <Modal hasBackground={true} onClose={close} id="login">
      <div className={modal}>
        <img src={Logo} alt="킹모장 로고" />
        <Form className={form} onSubmit={submit}>
          <TextField placeholder="아이디" className={input} />
          <TextField placeholder="비밀번호" className={input} />
          {capsLockOn ? (
            <div className={warning}>
              <img src={Warn} />
              CapsLock이 켜져있습니다.
            </div>
          ) : isError ? (
            <div className={warning}>
              <img src={Warn} alt="warning" />
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
          {SocialLoginLogo.map((e) => (
            <a href={e.href} key={e.alt}>
              <img src={e.src} alt={e.alt} style={{ cursor: "pointer" }} />
            </a>
          ))}
        </div>
      </div>
    </Modal>
  );
}
