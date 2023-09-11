import { CardList } from "../../../components/CardList/CardList";
import { Spacing } from "../../../components/Spacing/Spacing";
import { SUMMARY_CARD_LIST } from "../../../constants/dummyData";
import * as Style from "./WeeklySection.css";

export function WeeklySection() {
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <h2 className={Style.title}>주간 킹모장 TOP3</h2>
        <Spacing size={20} />
        <CardList cardList={SUMMARY_CARD_LIST} />
      </div>
    </div>
  );
}
