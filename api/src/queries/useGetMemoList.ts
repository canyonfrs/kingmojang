import type { ServerMemo } from "@kingmojang/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useBaseURL } from "../provider";

interface GetMemoListRequest {
  accessToken: string;

  /**
   * @default 20
   */
  size?: number;
}

interface GetMemoListResponse {
  data: {
    data: {
      memos: ServerMemo[];
      hasNext: boolean;
      nextPage: number;
    };
    status: string;
  };
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
    () =>
      axios.get(url.toString(), {
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
