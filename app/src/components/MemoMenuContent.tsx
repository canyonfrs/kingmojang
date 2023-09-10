import * as Menubar from "@radix-ui/react-menubar";

import { useMemoState } from "../contexts/MemoContext";
import * as Styled from "./MemoMenuContent.css";

const MemoMenuContent = () => {
  const { memoList } = useMemoState();

  return (
    <Menubar.Content
      className={Styled.content}
      align="start"
      sideOffset={16}
      alignOffset={-3}
    >
      {memoList.map((memo) => (
        <Menubar.Item className={Styled.menubarItem}>
          <h2>
            {memo.title} - {memo.id}
          </h2>
          <p className={Styled.menubarContent}>{memo.content}</p>
        </Menubar.Item>
      ))}
    </Menubar.Content>
  );
};

export { MemoMenuContent };
