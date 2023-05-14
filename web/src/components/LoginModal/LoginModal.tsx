import { Form, TextField } from "@kingmojang/ui";

import Google from "../../images/Google.svg";
import KaKao from "../../images/KaKao.svg";
import Logo from "../../images/Logo.svg";
import Naver from "../../images/Naver.svg";
import Twitch from "../../images/Twitch.svg";
import {
  form,
  info,
  input,
  loginBtn,
  modal,
  p,
  socialLogin,
} from "./LoginModal.css";
interface LoginModalProps {
  close: () => void;
}

export default function LoginModal({ close }: LoginModalProps) {
  const SocialLoginLogo = [
    { src: Twitch, href: "", alt: "Twitch 로그인" },
    { src: Google, href: "", alt: "Google 로그인" },
    { src: Naver, href: "", alt: "Naver 로그인" },
    { src: KaKao, href: "", alt: "KaKao 로그인" },
  ];

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    console.log("a");
    close();
  };

  return (
    <div className={modal}>
      <img src={Logo} alt="킹모장 로고" />
      <Form className={form} onSubmit={submit}>
        <TextField placeholder="아이디" className={input} />
        <TextField placeholder="비밀번호" className={input} />
        <button className={loginBtn}>로그인</button>
      </Form>
      <div className={info}>
        <p className={p}>아이디가 없나요?</p>
        <p className={p}>계정찾기</p>
      </div>
      <div className={p}>소셜 로그인</div>
      <div className={socialLogin}>
        {SocialLoginLogo.map((e) => (
          <a href={e.href}>
            <img src={e.src} alt={e.alt} style={{ cursor: "pointer" }} />
          </a>
        ))}
      </div>
    </div>
  );
}
