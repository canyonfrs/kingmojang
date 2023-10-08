import { useRecentMemo } from "@kingmojang/api";

import CardGrid from "../../../components/CardGrid/CardGrid";
import { Spacing } from "../../../components/Spacing/Spacing";
// import { SUMMARY_CARD_LIST } from "../../../constants/dummyData";
import * as Style from "./RecentSection.css";

export default function RecentSection() {
  const { data } = useRecentMemo({ size: 10 });
  console.log("data", data?.data.data.memos);

  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <h2 className={Style.title}>최신 킹모장</h2>
        <Spacing size={20} />
        {data?.data.data.memos && <CardGrid cards={data?.data.data.memos} />}
      </div>
    </div>
  );
}
