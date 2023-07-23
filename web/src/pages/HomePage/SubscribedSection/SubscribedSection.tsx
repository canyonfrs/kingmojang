import { CardList } from "../../../components/CardList/CardList";
import { ProfileList } from "../../../components/ProfileList/ProfileList";
import { Spacing } from "../../../components/Spacing/Spacing";
import { DUMMY_LIST, SUMMARY_CARD_LIST } from "../../../constants/dummyData";
import * as Style from "./SubscribedSection.css";

export function SubscribedSection() {
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <h2 className={Style.title}>구독중인 킹모장</h2>
        <ProfileList profileList={DUMMY_LIST} />
        <Spacing size={20} />
        <CardList cardList={SUMMARY_CARD_LIST} />
      </div>
    </div>
  );
}
