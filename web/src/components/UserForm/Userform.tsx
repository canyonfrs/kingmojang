import { Form, TextField } from "@kingmojang/ui";

import Google from "../../images/Google.svg";
import KaKao from "../../images/KaKao.svg";
import Naver from "../../images/Naver.svg";
import Twitch from "../../images/Twitch.svg";
import { COLOR } from "../../styles/theme.css";
import { Tab } from "../Tab/Tab";
import * as Style from "./Userform.css";

const API_END_POINT = "http://localhost:8080";
const REDIRECT_URI = "http://localhost:3000/oauth2/redirect/signup";

export const Userform = () => {
  const SocialLoginLogo = [
    {
      src: Twitch,
      href: `${API_END_POINT}/oauth2/authorize/twitch?redirect_uri=${REDIRECT_URI}`,
      alt: "Twitch 로그인",
    },
    {
      src: Google,
      href: `${API_END_POINT}/oauth2/authorize/google?redirect_uri=${REDIRECT_URI}`,
      alt: "Google 로그인",
    },
    {
      src: Naver,
      href: `${API_END_POINT}/oauth2/authorize/naver?redirect_uri=${REDIRECT_URI}`,
      alt: "Naver 로그인",
    },
    {
      src: KaKao,
      href: `${API_END_POINT}/oauth2/authorize/kakao?redirect_uri=${REDIRECT_URI}`,
      alt: "KaKao 로그인",
    },
  ];

  const SignupForm = () => {
    return (
      <Form className={Style.form}>
        <TextField placeholder="이메일" className={Style.input} />
        <TextField placeholder="비밀번호" className={Style.input} />
        <button className={Style.nextBtn}>다음 단계</button>
        <span className={Style.desciption}>또는 소셜 회원가입</span>
        <div className={Style.socialLogin}>
          {SocialLoginLogo.map((e) => (
            <a href={e.href} key={e.alt}>
              {e.alt === "Google 로그인" ? (
                <img
                  src={e.src}
                  alt={e.alt}
                  style={{
                    cursor: "pointer",
                    border: `1px solid ${COLOR.Gray_4}`,
                    borderRadius: "50%",
                  }}
                  width={60}
                  height={60}
                />
              ) : (
                <img
                  src={e.src}
                  alt={e.alt}
                  style={{ cursor: "pointer" }}
                  width={60}
                  height={60}
                />
              )}
            </a>
          ))}
        </div>
      </Form>
    );
  };

  return (
    <div className={Style.tabWrapper}>
      <Tab />
      <div className={Style.contentWrapper}>
        <SignupForm />
      </div>
    </div>
  );
};
