import { useSocialSignup } from "@kingmojang/api";
import type { ProviderType } from "@kingmojang/types";
import { TextField } from "@kingmojang/ui";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Gradation from "../../components/Gradation/Gradation";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import * as style from "./UserNickname.css";

export default function UserNickname() {
  const location = useLocation();
  const [nickname, setNickname] = useState("");
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  const provider = searchParams.get("provider");
  const navigator = useNavigate();

  const handleInput = (ev: ChangeEvent<HTMLInputElement>) => {
    setNickname(ev.currentTarget.value);
  };

  const { mutate, isSuccess } = useSocialSignup({
    email: email || "",
    memberType: "USER",
    nickname: nickname,
    provider: provider?.toUpperCase() as ProviderType,
  });

  const submit = () => {
    mutate();
    if (isSuccess) {
      navigator("/", { replace: true });
    }
  };

  return (
    <div className={style.container}>
      <LogoHeader />
      <Gradation />
      <div className={style.wrapper}>
        <h1 className={style.title}>사용할 닉네임을 입력해주세요!</h1>
        <h6 className={style.info}>한글 2~10자까지 가능해요.</h6>
        <TextField
          onChange={handleInput}
          placeholder="닉네임"
          className={style.input}
        />
        <button className={style.finishButton} onClick={submit}>
          회원가입 완료
        </button>
      </div>
    </div>
  );
}
