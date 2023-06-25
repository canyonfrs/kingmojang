import { useEffect, useState } from "react";

import { ReactComponent as CreatorIcon } from "../../images/Creator.svg";
import { ReactComponent as UserIcon } from "../../images/User.svg";
import useUserStore from "../../stores/userStore";
import * as Style from "./Tab.css";

type UserType = "creator" | "user";

export const Tab = () => {
  const { userType, setUserType } = useUserStore();
  const [currentTab, setCurrentTab] = useState<UserType>(userType as UserType);

  useEffect(() => {
    console.log("userType", userType);
  }, [userType]);

  const menuArr = [
    { type: "user", name: "일반유저" },
    { type: "creator", name: "크리에이터" },
  ];

  const selectMenuHandler = (type: UserType) => {
    setCurrentTab(type);
    setUserType(type);
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
          {el.type === "user" ? (
            <UserIcon width={32} height={32} />
          ) : (
            <CreatorIcon width={32} height={32} />
          )}
          {el.name}
        </span>
      ))}
    </div>
  );
};
