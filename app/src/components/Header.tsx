import * as Menubar from "@radix-ui/react-menubar";

import * as Styled from "./Header.css";
import { HelpPopover } from "./HelpPopover";
import { LoginPopover } from "./LoginPopover";
import { MemoMenuContent } from "./MemoMenuContent";

const Header = () => {
  return (
    <div className={Styled.container}>
      <div className={Styled.left}>
        <Menubar.Root>
          <Menubar.Menu>
            <Menubar.Trigger className={Styled.trigger}>
              히스토리(H)
            </Menubar.Trigger>
            <Menubar.Portal>
              <MemoMenuContent />
            </Menubar.Portal>
          </Menubar.Menu>
        </Menubar.Root>
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
