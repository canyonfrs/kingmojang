import { useGetMemoList } from "@kingmojang/api";
import { useAuthState } from "@kingmojang/auth";
import * as Menubar from "@radix-ui/react-menubar";
import { useEffect } from "react";

import { useMemoDispatch } from "../contexts/MemoContext";
import * as Styled from "./Header.css";
import { HelpPopover } from "./HelpPopover";
import { LoginPopover } from "./LoginPopover";
import { MemoMenuContent } from "./MemoMenuContent";

const Header = () => {
  const memoDispatch = useMemoDispatch();
  const { accessToken } = useAuthState();

  const {
    data: getMemoResult,
    isSuccess,
    refetch: refetchMemoList,
  } = useGetMemoList({
    accessToken: accessToken as string,
  });

  useEffect(() => {
    if (isSuccess) {
      memoDispatch({
        type: "change_memo_list",
        payload: getMemoResult.data.data.memos,
      });
    }
  }, [getMemoResult, isSuccess, memoDispatch]);

  const handleTriggerClick = () => {
    refetchMemoList();
  };

  return (
    <div className={Styled.container}>
      <div className={Styled.left}>
        <Menubar.Root>
          <Menubar.Menu>
            <Menubar.Trigger
              onClick={handleTriggerClick}
              className={Styled.trigger}
            >
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
