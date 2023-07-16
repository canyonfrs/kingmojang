import { Popover } from "@kingmojang/ui";

import * as Style from "./HelpPopover.css";

export const HelpPopover = () => {
  return (
    <Popover.Root>
      <Popover.Trigger className={Style.trigger}>도움말</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={Style.content}>
          <p>
            킹모장은 크리에이터가 메모장에 흘러가듯 남기는 것들을 기록해
            웹사이트에서 보여주는 프로젝트입니다.
          </p>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
