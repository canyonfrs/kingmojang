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
  const [result, setResult] = useState("");
  const navigator = useNavigate();
  const { refetch } = useCreatorCode(result);
  const { userInfo, setUserInfo } = useUserStore();

  // 83481747

  const submit = async () => {
    const response = await refetch(); //이게 맞아? refetch했을때 결과 값을 어디서 가져오는거야 data로 가져오면 한박자씩 늦음

    if (response.status === "success") {
      const newUserInfo = { ...userInfo };

      newUserInfo.code = result;
      setUserInfo(newUserInfo);

      newUserInfo.code = result;
      setUserInfo(newUserInfo);
      console.log("hereaaa");
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
        <PinInput count={8} nextRef={buttonRef} setResult={setResult} />
        <button className={Style.finishButton} onClick={submit} ref={buttonRef}>
          다음 단계
        </button>
      </div>
    </div>
  );
}
