import { useNavigate } from "react-router-dom";

import { ReactComponent as CreatorIcon } from "../../images/Creator.svg";
import { ReactComponent as UserIcon } from "../../images/User.svg";
import * as style from "./SignupPage.css";

export function SignupPage() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.buttonWrapper}>
        <button
          className={style.SignupButton["user"]}
          onClick={() => navigate("usertype?usertype=user")}
        >
          일반 유저로 가입
          <UserIcon className={style.creatorButtonImage} fill="red" />
        </button>
        <button
          className={style.SignupButton["creator"]}
          onClick={() => navigate("usertype?usertype=creator")}
        >
          크리에이터로 가입
          <CreatorIcon className={style.creatorButtonImage} fill="red" />
        </button>
      </div>
    </div>
  );
}
