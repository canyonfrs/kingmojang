import { useState } from "react";
import { useLocation } from "react-router-dom";

import { ToastMessage } from "../../components";
import Gradation from "../../components/Gradation/Gradation";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import { Userform } from "../../components/UserForm/Userform";
import * as style from "./UserSignupPage.css";

export function UserSignupPage() {
  const location = useLocation();
  const [isToastOpen, setIsToastOpen] = useState(location.state);

  return (
    <div className={style.container}>
      <Gradation />
      <LogoHeader />
      <div className={style.contentWrapper}>
        <Userform />
      </div>
      <ToastMessage
        content="이미 가입된 이메일입니다. 로그인을 해주세요."
        time={3000}
        isOpen={isToastOpen}
        setIsOpen={setIsToastOpen}
      />
    </div>
  );
}
