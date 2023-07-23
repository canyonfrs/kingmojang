import { IconKingmojangWithTextLogo } from "@kingmojang/icon";

import * as style from "./LogoHeader.css";

export default function LogoHeader() {
  return (
    <div className={style.wrapper}>
      <IconKingmojangWithTextLogo width={200} height={58} />
      <h1 className={style.title}>다양한 크리에이터의 메모장을 한눈에!</h1>
    </div>
  );
}
