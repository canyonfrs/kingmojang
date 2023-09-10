import type { CreateMemoRequest } from "@kingmojang/types";
import { useMutation } from "@tanstack/react-query";

import { post } from "../axios";
import { useBaseURL } from "../provider";

export const useMemoCreate = (props: CreateMemoRequest) => {
  const { accessToken, memo } = props;
  const baseURL = useBaseURL();
  const path = "/api/v1/memos";
  const data = {
    ...memo,
    // TODO(@정현수): 기본폰트 설정해야 함
    fontSize: memo.fontSize || 16,
    fontName: memo.fontName || "Noto Sans KR",
    fontStyle: memo.fontStyle || "normal",
  };

  const query = useMutation([accessToken, memo.content], () => {
    return post(path, baseURL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data,
    });
  });
  return query;
};
