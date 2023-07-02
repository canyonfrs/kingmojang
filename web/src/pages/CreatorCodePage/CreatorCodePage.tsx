import Gradation from "../../components/Gradation/Gradation";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import { Tab } from "../../components/Tab/Tab";
import * as Style from "./CreatorCodePage.css";

export function CreatorCodePage() {
  const submit = () => {
    console.log("submit");
  };

  return (
    <div className={Style.container}>
      <LogoHeader />
      <Gradation />
      <div className={Style.wrapper}>
        <Tab />
        asdgasdg
        <button className={Style.finishButton} onClick={submit}>
          다음 단계
        </button>
      </div>
    </div>
  );
}
