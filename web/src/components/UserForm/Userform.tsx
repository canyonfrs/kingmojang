import {
  IconGoogleLogo,
  IconKakaoLogo,
  IconNaverLogo,
  IconTwitchLogo,
} from "@kingmojang/icon";
import { Form, TextField } from "@kingmojang/ui";

import { COLOR } from "../../styles/theme.css";
import { Tab } from "../Tab/Tab";
import * as Style from "./Userform.css";

const API_END_POINT = "http://localhost:8080";
const REDIRECT_URI = "http://localhost:3000/oauth2/redirect/signup";

const socials = [
  {
    icon: {
      render: () => (
        <IconTwitchLogo
          style={{
            cursor: "pointer",
            border: `1px solid ${COLOR.Gray_4}`,
            borderRadius: "50%",
          }}
          width={60}
          height={60}
        />
      ),
    },
    href: `${API_END_POINT}/oauth2/authorize/twitch?redirect_uri=${REDIRECT_URI}`,
    alt: "Twitch 로그인",
  },
  {
    icon: {
      render: () => (
        <IconGoogleLogo
          style={{
            cursor: "pointer",
            border: "1px solid #CED4DA",
            borderRadius: "50%",
          }}
          width={60}
          height={60}
        />
      ),
    },
    href: `${API_END_POINT}/oauth2/authorize/google?redirect_uri=${REDIRECT_URI}`,
    alt: "Google 로그인",
  },
  {
    icon: {
      render: () => (
        <IconNaverLogo style={{ cursor: "pointer" }} width={60} height={60} />
      ),
    },
    href: `${API_END_POINT}/oauth2/authorize/naver?redirect_uri=${REDIRECT_URI}`,
    alt: "Naver 로그인",
  },
  {
    icon: {
      render: () => (
        <IconKakaoLogo style={{ cursor: "pointer" }} width={60} height={60} />
      ),
    },
    href: `${API_END_POINT}/oauth2/authorize/kakao?redirect_uri=${REDIRECT_URI}`,
    alt: "KaKao 로그인",
  },
];

export const Userform = () => {
  return (
    <div className={Style.tabWrapper}>
      <Tab />
      <div className={Style.contentWrapper}>
        <Form className={Style.form}>
          <TextField placeholder="이메일" className={Style.input} />
          <TextField placeholder="비밀번호" className={Style.input} />
          <button className={Style.nextBtn}>다음 단계</button>
          <span className={Style.desciption}>또는 소셜 회원가입</span>
          <div className={Style.socialLogin}>
            {socials.map((social) => (
              <a href={social.href} key={social.alt}>
                {social.icon.render()}
              </a>
            ))}
          </div>
        </Form>
      </div>
    </div>
  );
};
