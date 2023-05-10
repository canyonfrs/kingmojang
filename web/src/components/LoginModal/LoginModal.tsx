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

export default function LoginModal() {
  const submit = () => {
    console.log("a");
  };
  return (
    <div className={modal}>
      <img src={Logo} alt="킹모장 로고" />
      <Form className={form}>
        <TextField placeholder="아이디" className={input} />
        <TextField placeholder="비밀번호" className={input} />
        <button className={loginBtn} onSubmit={submit}>
          로그인
        </button>
      </Form>
      <div className={info}>
        <p className={p}>아이디가 없나요?</p>
        <p className={p}>계정찾기</p>
      </div>
      <div className={p}>소셜 로그인</div>
      <div className={socialLogin}>
        <img src={Twitch} alt="트위치 로그인" />
        <img src={Google} alt="구글 로그인" />
        <img src={Naver} alt="네이버 로그인" />
        <img src={KaKao} alt="카카오 로그인" />
      </div>
    </div>
  );
}
