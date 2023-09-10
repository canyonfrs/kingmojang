import * as Styled from "./Header.css";
import { HelpPopover } from "./HelpPopover";
import { LoginPopover } from "./LoginPopover";

const Header = () => {
  return (
    <div className={Styled.container}>
      <div className={Styled.left}>
        <div className={Styled.item}>히스토리(H)</div>
        <div className={Styled.item}>새 킹모장(N)</div>
        <div className={Styled.item}>
          <HelpPopover />
        </div>
      </div>
      <div className={Styled.right}>
        <LoginPopover />
      </div>
    </div>
  );
};

export { Header };
