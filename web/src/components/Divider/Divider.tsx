import { forwardRef } from "react";

import * as Style from "./Divider.css";

export const Divider = forwardRef(function Divider({
  width,
}: {
  width: string;
}) {
  return (
    <div className={Style.divideWrap}>
      <hr className={Style.divideLine} style={{ width: width }} />
    </div>
  );
});
