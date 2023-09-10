import type { Memo } from "@kingmojang/types";
import { useMutation } from "@tanstack/react-query";

import { patch } from "../axios";
import { useBaseURL } from "../provider";

interface UpdateMemoRequest {
  accessToken: string;
  memo: Memo;
  memoId: string;
}

export const useUpdateMemo = () => {
  const baseURL = useBaseURL();

  const query = useMutation<unknown, unknown, UpdateMemoRequest>(
    ["memo_update"],
    (data) => {
      const { accessToken, memo, memoId } = data;

      const requestData = {
        ...memo,
        // TODO(@정현수): 기본폰트 설정해야 함
        fontSize: memo.fontSize || 16,
        fontName: memo.fontName || "Noto Sans KR",
        fontStyle: memo.fontStyle || "normal",
      };

      return patch(`api/v1/memos/${memoId}`, baseURL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: requestData,
      });
    },
  );
  return query;
};
