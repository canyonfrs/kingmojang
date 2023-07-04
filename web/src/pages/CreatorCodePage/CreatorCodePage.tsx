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
  // useCreatorCode
  // const { data, refetch } = useCreatorCode(result);
  // useEffect(() => {
  //   refetch();
  //   console.log("");
  // }, [result]);
  const { userInfo, setUserInfo } = useUserStore();

  // const { data, refetch } = useCreatorCode(result);
  // const temp = sendCode();
  // console.log("data", data);

  // const send = async (result: string) => {
  //   await useCreatorCode(result);
  // };
  const submit = async () => {
    // ev.preventDefault();
    const temp = await useCreatorCode(result).then((res) =>
      console.log("res", res),
    );
    console.log("temp", temp);
    // .then((res) => {
    //   console.log("res", res);
    //   if (res.status === 202) {
    //     const newUserInfo = { ...userInfo };

    //     newUserInfo.code = result;
    //     setUserInfo(newUserInfo);

    //     newUserInfo.code = result;
    //     setUserInfo(newUserInfo);
    //     navigator(`/oauth2/redirect/creator/nickname`, {
    //       replace: true,
    //     });
    //   } else if (res.status === 404) {
    //     alert("코드가 일치하지 않습니다.");
    //   }
    // });
    const newUserInfo = { ...userInfo };

    newUserInfo.code = result;
    setUserInfo(newUserInfo);

    newUserInfo.code = result;
    setUserInfo(newUserInfo);
    navigator(`/oauth2/redirect/creator/nickname`, {
      replace: true,
    });
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
