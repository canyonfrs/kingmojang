import Gradation from "../../components/Gradation/Gradation";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import { Userform } from "../../components/UserForm/Userform";
import * as style from "./UserSignupPage.css";

export function UserSignupPage() {
  return (
    <div className={style.container}>
      <Gradation />
      <LogoHeader />
      <div className={style.contentWrapper}>
        <Userform />
      </div>
    </div>
  );
}
