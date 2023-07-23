import { useState } from "react";

import { CreaterBanner } from "../../components/CreaterBanner/CreaterBanner";
import { CreaterInfo } from "../../components/CreaterInfo/CreaterInfo";
import { CreaterMemoList } from "../../components/CreaterMemoList/CreaterMemoList";
import { RadioTab } from "../../components/RadioTab/RadioTab";
import { Spacing } from "../../components/Spacing/Spacing";
import * as Style from "./CreaterPage.css";

type TAB = "내 정보" | "내 활동" | "구독 관리";

export function CreaterPage() {
  const [tabItem, setTabItem] = useState<TAB>("내 정보");

  return (
    <div className={Style.Container}>
      <CreaterBanner />
      <Spacing size={24} />
      <RadioTab
        options={["내 정보", "내 활동", "구독 관리"]}
        value={tabItem}
        onChange={(item) => setTabItem(item as TAB)}
      />
      <Spacing size={30} />
      {tabItem === "내 정보" && (
        <CreaterInfo currentNickname="" platformSrc={[]} />
      )}
      {tabItem === "내 활동" && <CreaterMemoList />}
      <Spacing size={100} />
    </div>
  );
}
