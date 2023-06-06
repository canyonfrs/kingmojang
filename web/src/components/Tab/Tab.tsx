import { useState } from "react";

import { ReactComponent as CreatorIcon } from "../../images/Creator.svg";
import { ReactComponent as UserIcon } from "../../images/User.svg";
import * as style from "./Tab.css";

type UserType = "creator" | "user";

export const Tab = () => {
  const [currentTab, clickTab] = useState<UserType>("user");

  const menuArr = [
    { type: "user", name: "일반유저", content: "Tab menu ONE" },
    { type: "creator", name: "크리에이터", content: "Tab menu TWO" },
  ];

  const selectMenuHandler = (type: UserType) => {
    clickTab(type);
  };

  return (
    <div className={style.tabWrapper}>
      <div className={style.tabMenu}>
        {menuArr.map((el) => (
          <span
            className={
              el.type === currentTab
                ? `${style.selectedUserTab[el.type]}`
                : `${style.base}`
            }
            onClick={() => selectMenuHandler(el.type as UserType)}
          >
            {el.type === "user" ? (
              <UserIcon width={32} height={32} />
            ) : (
              <CreatorIcon width={32} height={32} />
            )}{" "}
            {el.name}
          </span>
        ))}
      </div>
      <div>
        <p>{menuArr.find((item) => item.name === currentTab)?.content}</p>
      </div>
    </div>
  );
};
