import { IconCreator, IconUser } from "@kingmojang/icon";
import { useNavigate } from "react-router-dom";

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
          <IconUser
            width={52}
            className={style.creatorButtonImage}
            fill="red"
          />
        </button>
        <button
          className={style.SignupButton["creator"]}
          onClick={() => handleClick("CREATOR")}
        >
          크리에이터로 가입
          <IconCreator
            width={52}
            className={style.creatorButtonImage}
            fill="red"
          />
        </button>
      </div>
    </div>
  );
}
