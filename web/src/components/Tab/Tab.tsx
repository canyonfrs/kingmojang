import { Form, TextField } from "@kingmojang/ui";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { ReactComponent as CreatorIcon } from "../../images/Creator.svg";
import Google from "../../images/Google.svg";
import KaKao from "../../images/KaKao.svg";
import Naver from "../../images/Naver.svg";
import Twitch from "../../images/Twitch.svg";
import { ReactComponent as UserIcon } from "../../images/User.svg";
import { COLOR } from "../../styles/theme.css";
import * as style from "./Tab.css";

const API_BASE_URL = "http://3.37.238.195:8080";
const OAUTH2_REDIRECT_SIGNUP_URI = "http://localhost:3000/creator";
type UserType = "creator" | "user";
const SocialLoginLogo = [
  {
    src: Twitch,
    href: `${API_BASE_URL}/oauth2/authoirze/twitch`,
    alt: "Twitch 로그인",
  },
  {
    src: Google,
    href: `/oauth2/authoirze/google?redirect_url=${OAUTH2_REDIRECT_SIGNUP_URI}`,
    alt: "Google 로그인",
  },
  { src: Naver, href: "", alt: "Naver 로그인" },
  { src: KaKao, href: "", alt: "KaKao 로그인" },
];
export const Tab = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userType = params.get("usertype");
  console.log("user", userType);

  const API_END_POINT = "http://3.37.238.195:8080";
  // const temp =
  //   "http://ec2-3-37-238-195.ap-northeast-2.compute.amazonaws.com:8080";
  const REDIRECT_URI = "http://localhost:3000/oauth2/redirect/signup";
  const url = `${API_END_POINT}/oauth2/authorize/google?redirect_uri=${REDIRECT_URI}`;

  const [currentTab, clickTab] = useState<UserType>(userType as UserType);
  const UserForm = () => {
    return (
      <Form className={style.form}>
        <a className="btn btn-block social-btn naver" href={url}>
          테스트 용
        </a>
        <TextField placeholder="이메일" className={style.input} />
        <TextField placeholder="비밀번호" className={style.input} />
        <button className={style.nextBtn}>다음 단계</button>
        <span className={style.desciption}>또는 소셜 회원가입</span>
        <div className={style.socialLogin}>
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

  const menuArr = [
    { type: "user", name: "일반유저", content: <UserForm /> },
    { type: "creator", name: "크리에이터", content: <UserForm /> },
  ];

  const selectMenuHandler = (type: UserType) => {
    clickTab(type);
  };

  return (
    <div className={style.tabWrapper}>
      <div className={style.tabMenu}>
        {menuArr.map((el) => (
          <span
            key={el.name}
            className={
              el.type === currentTab
                ? `${style.selectedUserTab[el.type]}`
                : `${style.base}`
            }
            onClick={() => selectMenuHandler(el.type as UserType)}
          >
            {el.type === "user" ? (
              <UserIcon width={32} height={32} />
            ) : (
              <CreatorIcon width={32} height={32} />
            )}
            {el.name}
          </span>
        ))}
      </div>
      <div className={style.contentWrapper}>
        {menuArr.find((item) => item.type === currentTab)?.content}
      </div>
    </div>
  );
};
