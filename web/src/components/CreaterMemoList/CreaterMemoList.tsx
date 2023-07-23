import { SUMMARY_CARD_LIST } from "../../constants/dummyData";
import { Spacing } from "../Spacing/Spacing";
import { SummaryCardInCreater } from "../SummaryCardInCreater/SummaryCardInCreater";
import * as Style from "./CreaterMemoList.css";

export function CreaterMemoList() {
  return (
    <div className={Style.Container}>
      <button className={Style.DeleteButton}>삭제하기</button>
      <Spacing size={22} />
      <ul className={Style.MemoList}>
        {SUMMARY_CARD_LIST.map((card, index) => (
          <li>
            <SummaryCardInCreater key={index} {...card} />
          </li>
        ))}
      </ul>
    </div>
  );
}
