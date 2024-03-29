import { IconCreator, IconUser } from "@kingmojang/icon";
import { useState } from "react";

import type { UserType } from "../../stores/userStore";
import useUserStore from "../../stores/userStore";
import * as Style from "./Tab.css";

export const Tab = () => {
  const { userInfo, setUserInfo } = useUserStore();
  const [currentTab, setCurrentTab] = useState<UserType>(
    userInfo.memberType as UserType,
  );

  const menuArr = [
    { type: "USER", name: "일반유저" },
    { type: "CREATOR", name: "크리에이터" },
  ];

  const selectMenuHandler = (type: UserType) => {
    const newData = { ...userInfo };
    setCurrentTab(type);
    newData.memberType = type;
    setUserInfo(newData);
  };

  return (
    <div className={Style.tabMenu}>
      {menuArr.map((el) => (
        <span
          key={el.name}
          className={
            el.type === currentTab
              ? `${Style.selectedUserTab[el.type]}`
              : `${Style.base}`
          }
          onClick={() => selectMenuHandler(el.type as UserType)}
        >
          {el.type === "USER" ? (
            <IconUser width={32} height={32} />
          ) : (
            <IconCreator width={32} height={32} />
          )}
          {el.name}
        </span>
      ))}
    </div>
  );
};
