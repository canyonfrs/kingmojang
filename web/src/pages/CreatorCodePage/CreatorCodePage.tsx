import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Gradation from "../../components/Gradation/Gradation";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import { Tab } from "../../components/Tab/Tab";
import useUserStore from "../../stores/userStore";
import * as Style from "./CreatorCodePage.css";

export function CreatorCodePage() {
  const navigator = useNavigate();
  const { userType } = useUserStore();

  useEffect(() => {
    if (userType === "creator") {
      navigator("/redirect/signup/creator", { replace: true });
    }
  }, []);

  const submit = () => {
    console.log("submit");
  };

  return (
    <div className={Style.container}>
      <LogoHeader />
      <Gradation />
      <div className={Style.wrapper}>
        <Tab />
        <button className={Style.finishButton} onClick={submit}>
          다음 단계
        </button>
      </div>
    </div>
  );
}
