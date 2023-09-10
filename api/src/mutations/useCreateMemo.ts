import type { Memo } from "@kingmojang/types";
import { useMutation } from "@tanstack/react-query";

import { post } from "../axios";
import { useBaseURL } from "../provider";

interface CreateMemoRequest {
  accessToken: string;
  memo: Memo;
}

export const useCreateMemo = () => {
  const baseURL = useBaseURL();
  const path = "/api/v1/memos";

  const query = useMutation<unknown, unknown, CreateMemoRequest>(
    ["memo_create"],
    (data) => {
      const { accessToken, memo } = data;

      const requestData = {
        ...memo,
        // TODO(@정현수): 기본폰트 설정해야 함
        fontSize: memo.fontSize || 16,
        fontName: memo.fontName || "Noto Sans KR",
        fontStyle: memo.fontStyle || "normal",
      };

      return post(path, baseURL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: requestData,
      });
    },
  );
  return query;
};
