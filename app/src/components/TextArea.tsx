import { useCreateMemo } from "@kingmojang/api";
import { useAuthState } from "@kingmojang/auth";
import { TextArea } from "@kingmojang/ui";
import { useEffect, useState } from "react";

import * as Styled from "./TextArea.css";

const _TextArea = () => {
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");

  const { accessToken } = useAuthState();
  const { mutate: createMemo, data } = useCreateMemo();

  console.log("[useMemoCreate data]", data);

  useEffect(() => {
    if (content && !isEditing && accessToken) {
      setIsEditing(true);

      const title = new Date().toLocaleString();
      setTitle(title);
      createMemo({
        accessToken,
        memo: {
          title,
          content,
        },
      });

      console.log("[새로운 메모가 생성되었어요]:", title, content);
    }

    if (isEditing) {
      console.log(`["현재 ${title} 메모를 수정 중이에요"]: ${content}`);
    }
  }, [content]);

  const handleChangeMemo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <TextArea
      value={content}
      onChange={handleChangeMemo}
      className={Styled.textarea}
    />
  );
};

export { _TextArea as TextArea };
