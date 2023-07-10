// import type { ChangeEvent } from "react";
import { useCreatorCode } from "@kingmojang/api";
// import type { MouseEvent } from "react";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Gradation from "../../components/Gradation/Gradation";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import PinInput from "../../components/PinInput/PinInput";
import useUserStore from "../../stores/userStore";
import * as Style from "./CreatorCodePage.css";

export function CreatorCodePage() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [code, setCode] = useState("");
  const navigator = useNavigate();
  const { refetch } = useCreatorCode(code);
  const { userInfo, setUserInfo } = useUserStore();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  const provider = searchParams.get("provider");
  // const error = searchParams.get("error"); // error 처리도 필요할 듯(이미 가입되어있는 경우)

  const checkCreatorCode = async () => {
    const response = await refetch();

    if (response.status === "success") {
      if (!email || !provider) {
        return;
      }
      const newUserInfo = { ...userInfo, code, email, provider };
      setUserInfo(newUserInfo);
      alert("인증 되었습니다.");
      navigator(`/oauth2/redirect/creator/nickname`, {
        replace: true,
      });
    } else {
      alert("코드가 일치하지 않습니다.");
    }
  };

  return (
    <div className={Style.container}>
      <LogoHeader />
      <Gradation />
      <div className={Style.wrapper}>
        <h1 className={Style.h1}>회원가입 코드를 입력해주세요!</h1>
        <PinInput count={8} nextRef={buttonRef} setResult={setCode} />
        <button
          className={Style.finishButton}
          onClick={checkCreatorCode}
          ref={buttonRef}
        >
          다음 단계
        </button>
      </div>
    </div>
  );
}
