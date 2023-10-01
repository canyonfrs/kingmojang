import { useCreateMemo, useUpdateMemo } from "@kingmojang/api";
import { useAuthState } from "@kingmojang/auth";
import { TextArea } from "@kingmojang/ui";
import { useDebounce } from "@kingmojang/utils";
import { useEffect, useState } from "react";

import { useMemoDispatch, useMemoState } from "../contexts/MemoContext";
import * as Styles from "./TextArea.css";

const MEMO_MUTATE_DEBOUNCE_TIME = 300;

const _TextArea = () => {
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");

  const memoDispatch = useMemoDispatch();
  const { currentMemoId, memoList } = useMemoState();

  const { accessToken, currentUser } = useAuthState();
  const { mutate: createMemo, data: createdMemo } = useCreateMemo();
  const { mutate: mutateMemo, isLoading: isSaving } = useUpdateMemo();

  // NOTE(@정현수): 첫 글자 입력 시 메모 생성
  useEffect(() => {
    if (content && !isEditing && accessToken) {
      const title = new Date().toLocaleString();
      setTitle(title);
      setIsEditing(true);
      createMemo({
        accessToken,
        memo: {
          title,
          content,
        },
      });
      memoDispatch({
        type: "append_memo_list",
        payload: {
          title,
          content,
          writer: currentUser?.nickname,
        },
      });
    }
  }, [
    content,
    isEditing,
    accessToken,
    createMemo,
    createdMemo,
    memoDispatch,
    currentUser?.nickname,
  ]);

  // NOTE(@정현수): 메모 생성 후 메모 아이디를 받아옴
  useEffect(() => {
    if (!createdMemo) return;
    memoDispatch({
      type: "change_memo_id",
      payload: createdMemo.data.data,
    });
  }, [createdMemo, memoDispatch]);

  const updateMemo = useDebounce(() => {
    if (isEditing && currentMemoId && accessToken) {
      mutateMemo({
        accessToken,
        memoId: currentMemoId,
        memo: {
          title,
          content,
        },
      });
    }
  }, MEMO_MUTATE_DEBOUNCE_TIME);

  // NOTE(@정현수): 메모 업데이트
  useEffect(() => {
    updateMemo();
  }, [content, updateMemo, currentMemoId]);

  // NOTE(@정현수): 메모 id 변경 시 메모 내용 변경
  useEffect(() => {
    if (!currentMemoId) return;
    const content = memoList.find((memo) => memo.id === currentMemoId)?.content;
    setContent(content || "");
  }, [currentMemoId, memoDispatch, memoList]);

  const handleChangeMemo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className={Styles.container}>
      <TextArea
        value={content}
        onChange={handleChangeMemo}
        className={Styles.textarea}
      />
      {isSaving && <p className={Styles.saving}>저장 중...</p>}
    </div>
  );
};

export { _TextArea as TextArea };
