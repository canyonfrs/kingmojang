import { format, isEqual } from "date-fns";
import { useLayoutEffect, useRef, useState } from "react";

import * as Style from "./SummaryCardInCreater.css";

export interface SummaryCardInCreaterProps {
  createdDate: Date;
  modifiedDate: Date;
  memo: string;
  like: number;
  comment: number;
}

export function SummaryCardInCreater({
  memo,
  like,
  comment,
  modifiedDate,
  createdDate,
}: SummaryCardInCreaterProps) {
  const memoRef = useRef<HTMLDivElement>(null);
  const [showGradient, setShowGradient] = useState(false);

  const date = isEqual(createdDate, modifiedDate)
    ? format(createdDate, "yyyy년 MM월 dd일")
    : format(modifiedDate, "yyyy년 MM월 dd일") + " 변경됨";

  useLayoutEffect(() => {
    if (memoRef.current && memoRef.current.clientHeight > 250) {
      setShowGradient(true);
    }
  }, []);

  return (
    <div className={Style.WrapperStyle}>
      <div className={Style.MainStyle} ref={memoRef}>
        {memo}
      </div>
      <div className={Style.FooterStyle}>
        {showGradient && <div className={Style.FooterGradient} />}
        <div className={Style.DateStyle}>{date}</div>
        <div className={Style.FooterLeft}>
          <div className={Style.FooterItemStyle}>{like}</div>
          <div className={Style.FooterItemStyle}>{comment}</div>
        </div>
      </div>
    </div>
  );
}
