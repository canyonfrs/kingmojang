import Gradation from "../../components/Gradation/Gradation";
import { Tab } from "../../components/Tab/Tab";
import Logo from "../../images/LogoWithWord.svg";
import * as style from "./UserSignupPage.css";

export function UserSignupPage() {
  return (
    <div className={style.container}>
      <Gradation />
      <img src={Logo} />
      <div className={style.contentWrapper}>
        <h1 className={style.title}>다양한 크리에이터의 메모장을 한눈에!</h1>
        <Tab />
      </div>
    </div>
  );
}
