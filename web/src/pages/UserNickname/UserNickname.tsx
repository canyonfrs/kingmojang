import { TextField } from "@kingmojang/ui";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Gradation from "../../components/Gradation/Gradation";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import * as style from "./UserNickname.css";

export default function UserNickname() {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get("email");
    const provider = searchParams.get("provider");

    console.log("Email:", email);
    console.log("Provider:", provider);

    // Do something with the email and provider values
  }, [location]);

  return (
    <div className={style.container}>
      <LogoHeader />
      <Gradation />
      <div className={style.wrapper}>
        <h1 className={style.title}>사용할 닉네임을 입력해주세요!</h1>
        <h6 className={style.info}>한글 2~10자까지 가능해요.</h6>
        <TextField placeholder="닉네임" className={style.input} />
        <button className={style.finishButton}>회원가입 완료</button>
      </div>
    </div>
  );
}
