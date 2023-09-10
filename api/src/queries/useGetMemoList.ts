import type { ServerMemo } from "@kingmojang/types";
import { useQuery } from "@tanstack/react-query";

import { get } from "../axios";
import { useBaseURL } from "../provider";

interface GetMemoListRequest {
  accessToken: string;

  /**
   * @default 20
   */
  size?: number;
}

interface GetMemoListResponse {
  memos: ServerMemo[];
}

export function useGetMemoList(props: GetMemoListRequest) {
  const baseURL = useBaseURL();
  const basePath = "/api/v1";
  const { accessToken, size = 20 } = props;

  const url = new URL(baseURL);
  url.pathname = `${basePath}/memos`;
  url.searchParams.append("size", size.toString());

  return useQuery<unknown, unknown, GetMemoListResponse>(
    ["memos_list", accessToken],
    async () =>
      await get(url.pathname, baseURL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );
}
