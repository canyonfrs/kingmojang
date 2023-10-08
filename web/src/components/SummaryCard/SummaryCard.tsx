import type { ServerMemo } from "@kingmojang/types";
import { format } from "date-fns";

import * as Style from "./SummaryCard.css";

// NOT(@박은식): 받는 prop구조는 서버에서 내려오는 데이터에 따라 변경 가능
// export interface SummaryCardProps {
//   createrName: string;
//   createdDate: Date;
//   profileImageSrc: string;
//   memo: string;
//   like: number;
//   comment: number;
// }

export function SummaryCard({
  writer,
  title,
  createdAt,
  likeCount,
  commentCount,
  content,
}: ServerMemo) {
  const dateString = createdAt.replace("[GMT]", "");
  console.log("dateSt", dateString);
  const dateObject = new Date(dateString);
  console.log(
    '{format(dateObject, "yyyy년 MM월 dd일")}',
    format(dateObject, "yyyy년 MM월 dd일"),
  );
  return (
    <div className={Style.wrapperStyle}>
      <div className={Style.headerStyle}>
        <img className={Style.profileImageStyle} src={""} alt={writer} />
        <div className={Style.headerInfoStyle}>
          <span className={Style.createrNameStyle}>{writer}</span>
          <span className={Style.createrNameStyle}>{title}</span>
          <span className={Style.createdDateStyle}>
            {format(dateObject, "yyyy년 MM월 dd일")}
          </span>
        </div>
      </div>
      <div className={Style.mainStyle}>{content}</div>
      <div className={Style.footerStyle}>
        <div className={Style.footerItemStyle}>{likeCount}</div>
        <div className={Style.footerItemStyle}>{commentCount}</div>
      </div>
    </div>
  );
}
