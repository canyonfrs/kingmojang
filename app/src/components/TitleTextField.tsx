import { useUpdateMemo } from "@kingmojang/api";
import { useAuthState } from "@kingmojang/auth";
import { useDebounce } from "@kingmojang/utils";
import * as React from "react";

import { useMemoDispatch, useMemoState } from "../contexts/MemoContext";
import * as styles from "./TitleTextField.css";

const MEMO_MUTATE_DEBOUNCE_TIME = 300;

export const TitleTextField = () => {
  const id = React.useId();
  const { currentMemo, currentMemoId } = useMemoState();
  const memoDispatch = useMemoDispatch();
  const { mutate: mutateMemo } = useUpdateMemo();
  const { accessToken } = useAuthState();

  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      memoDispatch({
        type: "change_memo",
        payload: {
          ...currentMemo,
          title: e.target.value,
        },
      });
    },
    [currentMemo, memoDispatch],
  );

  const updateMemo = useDebounce(() => {
    if (currentMemoId && accessToken) {
      mutateMemo({
        accessToken,
        memoId: currentMemoId,
        memo: {
          title: currentMemo?.title as string,
          content: currentMemo?.content as string,
        },
      });
    }
  }, MEMO_MUTATE_DEBOUNCE_TIME);

  React.useEffect(() => {
    updateMemo();
  }, [updateMemo, currentMemo?.title]);

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        메모 이름 (id: {currentMemoId})
      </label>
      <input
        id={id}
        className={styles.input}
        type="text"
        value={currentMemo?.title}
        onChange={handleInputChange}
      />
    </div>
  );
};
