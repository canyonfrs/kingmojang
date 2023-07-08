// import type { ChangeEvent } from "react";
import { useCreatorCode } from "@kingmojang/api";
// import type { MouseEvent } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const checkCreatorCode = async () => {
    // INFO(@정현수): refetch 했을 때 가져오는 값은 useQuery 날렸을 때와 똑같음
    const response = await refetch();

    if (response.status === "success") {
      const newUserInfo = { ...userInfo, code };
      setUserInfo(newUserInfo);
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
