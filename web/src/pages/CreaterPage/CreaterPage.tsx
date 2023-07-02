import { useState } from "react";

import { CreaterBanner } from "../../components/CreaterBanner/CreaterBanner";
import { CreaterInfo } from "../../components/CreaterInfo/CreaterInfo";
import { Spacing } from "../../components/Spacing/Spacing";
import { Tab } from "../../components/Tab/Tab";
import * as Style from "./CreaterPage.css";

type TAB = "내 정보" | "내 활동" | "구독 관리";

export function CreaterPage() {
  const [tabItem, setTabItem] = useState<TAB>("내 정보");

  return (
    <div className={Style.Container}>
      <CreaterBanner />
      <Spacing size={24} />
      <Tab
        options={["내 정보", "내 활동", "구독 관리"]}
        value={tabItem}
        onChange={(item) => setTabItem(item as TAB)}
      />
      <Spacing size={30} />
      {tabItem === "내 정보" && (
        <CreaterInfo currentNickname="" platformSrc={[]} />
      )}
      <Spacing size={100} />
    </div>
  );
}
