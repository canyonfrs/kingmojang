import CardGrid from "../../../components/CardGrid/CardGrid";
import { Spacing } from "../../../components/Spacing/Spacing";
import { SUMMARY_CARD_LIST } from "../../../constants/dummyData";
import * as Style from "./RecentSection.css";

export default function RecentSection() {
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <h2 className={Style.title}>최신 킹모장</h2>
        <Spacing size={20} />
        <CardGrid cards={SUMMARY_CARD_LIST} />
      </div>
    </div>
  );
}
