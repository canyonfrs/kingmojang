import { useSocialSignup } from "@kingmojang/api";
import type { ISignUp, ProviderType } from "@kingmojang/types";
import { TextField } from "@kingmojang/ui";
import type { ChangeEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Gradation from "../../components/Gradation/Gradation";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import SuccessModal from "../../components/SuccessModal/SuccessModal";
import useModal from "../../hooks/useModal";
import useUserStore from "../../stores/userStore";
import * as Style from "./NicknamePage.css";

export function NicknamePage() {
  const { open } = useModal("success");
  const location = useLocation();
  const [nickname, setNickname] = useState("");
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  const provider = searchParams.get("provider");
  const error = searchParams.get("error");
  const navigator = useNavigate();
  const { userInfo } = useUserStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<ISignUp>({
    email: email || userInfo.email,
    memberType: userInfo.memberType,
    nickname: nickname,
    provider:
      (provider?.toUpperCase() as ProviderType) ||
      userInfo.provider.toUpperCase(),
  });
  useEffect(() => {
    if (error) {
      navigator("/signup/usertype", { state: error });
    }
    if (userInfo.memberType === "CREATOR") {
      setForm({
        ...form,
        code: userInfo.code,
      });
    }
  }, []);

  const handleInput = (ev: ChangeEvent<HTMLInputElement>) => {
    setNickname(ev.currentTarget.value);
  };

  const { mutate } = useSocialSignup({
    data: {
      email: email || userInfo.email, //여기도
      memberType: userInfo.memberType,
      nickname: nickname,
      provider:
        (provider?.toUpperCase() as ProviderType) ||
        userInfo.provider.toUpperCase(),
      code: userInfo.code || undefined,
      password: userInfo.password || undefined,
    },
    options: {
      onSuccess: () => open(),
      onError: () => alert("error"),
    },
  });
  const submit = () => {
    mutate();
  };

  return (
    <div className={Style.container}>
      <LogoHeader />
      <Gradation />
      <div className={Style.wrapper}>
        <h1 className={Style.title}>사용할 닉네임을 입력해주세요!</h1>
        <h6 className={Style.info}>한글 2~10자까지 가능해요.</h6>
        <TextField
          ref={inputRef}
          onChange={handleInput}
          placeholder="닉네임"
          className={Style.input}
        />
        <button className={Style.finishButton} onClick={submit}>
          회원가입 완료
        </button>
        <SuccessModal />
      </div>
    </div>
  );
}
