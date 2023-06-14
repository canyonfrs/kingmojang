import Gradation from "../../components/Gradation/Gradation";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import { Tab } from "../../components/Tab/Tab";
import * as style from "./UserSignupPage.css";

export function UserSignupPage() {
  return (
    <div className={style.container}>
      <Gradation />
      <LogoHeader />
      <div className={style.contentWrapper}>
        <Tab />
      </div>
    </div>
  );
}
