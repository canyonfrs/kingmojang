import { format } from "date-fns";

import * as Style from "./SummaryCard.css";

// NOT(@박은식): 받는 prop구조는 서버에서 내려오는 데이터에 따라 변경 가능
export interface SummaryCardProps {
  createrName: string;
  createdDate: Date;
  profileImageSrc: string;
  memo: string;
  like: number;
  comment: number;
}

export function SummaryCard({
  profileImageSrc,
  createrName,
  createdDate,
  like,
  memo,
  comment,
}: SummaryCardProps) {
  return (
    <div className={Style.wrapperStyle}>
      <div className={Style.headerStyle}>
        <img
          className={Style.profileImageStyle}
          src={profileImageSrc}
          alt={createrName}
        />
        <div className={Style.headerInfoStyle}>
          <span className={Style.createrNameStyle}>{createrName}</span>
          <span className={Style.createdDateStyle}>
            {format(createdDate, "yyyy년 MM월 dd일")}
          </span>
        </div>
      </div>
      <div className={Style.mainStyle}>{memo}</div>
      <div className={Style.footerStyle}>
        <div className={Style.footerItemStyle}>{like}</div>
        <div className={Style.footerItemStyle}>{comment}</div>
      </div>
    </div>
  );
}
