import { useNavigate } from "react-router-dom";

import { ReactComponent as CreatorIcon } from "../../images/Creator.svg";
import { ReactComponent as UserIcon } from "../../images/User.svg";
import type { UserType } from "../../stores/userStore";
import useUserStore from "../../stores/userStore";
import * as style from "./SignupPage.css";

export function SignupPage() {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useUserStore();

  const handleClick = (userType: UserType) => {
    const data = { ...userInfo };
    data.memberType = userType;
    setUserInfo(data);
    navigate("usertype");
  };

  return (
    <div className={style.container}>
      <div className={style.buttonWrapper}>
        <button
          className={style.SignupButton["user"]}
          onClick={() => handleClick("USER")}
        >
          일반 유저로 가입
          <UserIcon className={style.creatorButtonImage} fill="red" />
        </button>
        <button
          className={style.SignupButton["creator"]}
          onClick={() => handleClick("CREATOR")}
        >
          크리에이터로 가입
          <CreatorIcon className={style.creatorButtonImage} fill="red" />
        </button>
      </div>
    </div>
  );
}
