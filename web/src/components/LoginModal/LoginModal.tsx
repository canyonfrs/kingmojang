import { useLocalLogin } from "@kingmojang/api";
import { useAuthDispatch } from "@kingmojang/auth";
import {
  IconGoogleLogo,
  IconKakaoLogo,
  IconKingmojangLogo,
  IconNaverLogo,
  IconTwitchLogo,
} from "@kingmojang/icon";
import { Form, TextField } from "@kingmojang/ui";
import type { ChangeEvent, KeyboardEventHandler } from "react";
import { useEffect, useRef, useState } from "react";

import useModal from "../../hooks/useModal";
// TODO(@ALL): svg 관리 방법 고민
import * as Style from "./LoginModal.css";

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
  // const idRef = useRef<HTMLInputElement>(null);
  // const passwordRef = useRef<HTMLInputElement>(null);
  const authDispatch = useAuthDispatch();
  const { mutate, data } = useLocalLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorInfo, setErrorInfo] = useState<{
    hasError: boolean;
    infoText: string;
  }>({
    hasError: false,
    infoText: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      {
        email: email,
        password: password,
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
  const [a, setA] = useState(false);

  // useEffect(() => {
  //   const handleKeyUp = (event: KeyboardEvent) => {
  //     const capsLockIsOn = event.getModifierState("CapsLock");
  //     if (capsLockIsOn) {
  //       setErrorInfo({
  //         hasError: true,
  //         infoText: "CapsLock이 켜져있습니다.",
  //       });
  //     } else {
  //       setErrorInfo({
  //         hasError: false,
  //         infoText: "",
  //       });
  //     }
  //   };
  //   document.addEventListener("keyup", handleKeyUp);
  //   return () => {
  //     document.removeEventListener("keyup", handleKeyUp);
  //   };
  // }, []);

  // const handleKeyDown = (event: KeyboardEvent) => {
  //   if (event.getModifierState("CapsLock")) {
  //     setA(true);
  //   } else {
  //     setA(false);
  //   }
  // };

  // useEffect(() => {
  //   if (a) {
  //     setErrorInfo({
  //       hasError: true,
  //       infoText: "CapsLock이 켜져있습니다.",
  //     });
  //   } else {
  //     setErrorInfo({
  //       hasError: false,
  //       infoText: "",
  //     });
  //   }
  // }, [a]);
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    console.log("value", value);
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const checkCapsLock = (event: any) => {
    if (event.getModifierState("CapsLock")) {
      setA(true);
    } else {
      setA(false);
    }
  };
  useEffect(() => {
    console.log("email", email);
  }, [email]);
  return (
    <div>
      <div onClick={openLoginModal}>로그인</div>
      {isOpen && (
        <Modal hasBackground={true} onClose={close} id="login">
          <div className={Style.modal}>
            <IconKingmojangLogo width={42} height={42} />
            <button onClick={() => setA((prev) => !prev)}>+</button>
            <Form className={Style.form} onSubmit={submit}>
              <input
                placeholder="아이디"
                name="email"
                className={Style.input}
                onKeyUp={checkCapsLock}
                onChange={handleChange}
              />
              <TextField
                placeholder="비밀번호"
                name="password"
                className={Style.input}
                iconSize={16}
                hasError={errorInfo.hasError}
                infoText={errorInfo.infoText}
                textStyle={{ fontSize: "12px" }}
              />
              <button className={Style.loginBtn}>로그인</button>
            </Form>
            <div className={Style.info}>
              <p className={Style.styledP}>아이디가 없나요?</p>
              <p className={Style.styledP}>계정찾기</p>
            </div>
            <div className={Style.styledP}>소셜 로그인</div>
            <div className={Style.socialLogin}>
              {socials.map((social) => (
                <a href={social.href} key={social.alt}>
                  {social.icon.render()}
                </a>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
