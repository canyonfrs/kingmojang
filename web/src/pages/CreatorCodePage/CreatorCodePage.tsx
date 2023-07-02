// import type { ChangeEvent } from "react";
import { useCreatorCode } from "@kingmojang/api";
import type { MouseEvent } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Gradation from "../../components/Gradation/Gradation";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import PinInput from "../../components/PinInput/PinInput";
import * as Style from "./CreatorCodePage.css";

export function CreatorCodePage() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [result, setResult] = useState("");
  const navigator = useNavigate();
  const { data, isSuccess, isError } = useCreatorCode(result);

  console.log("data", data);
  const submit = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    // navigator("/oauth2/redirect/signup", { replace: true });
    console.log("submit", result);
    // console.log("aaa", useCreatorCode(result));
    if (isSuccess) {
      console.log("data", data);
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
