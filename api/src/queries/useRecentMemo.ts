import type { ServerMemo } from "@kingmojang/types";
import { useQuery } from "@tanstack/react-query";

import { get } from "../axios";
import { useBaseURL } from "../provider";

interface RecentMemoInterface {
  data: {
    status: "SUCCESS";
    data: {
      memos: ServerMemo[];
      hasNext: false;
      nextPage: number;
    };
  };
}

export function useRecentMemo({ size }: { size: number }) {
  const baseURL = useBaseURL();
  const queryKey = ["recent", { size }];

  const queryResult = useQuery<unknown, unknown, RecentMemoInterface>(
    queryKey,
    () => {
      return get(`memos`, baseURL);
    },
    // {
    //   enabled: !!nickname,
    //   refetchOnWindowFocus: false,
    //   retry: false,
    // },
  );

  const { status, data, error } = queryResult;

  return {
    ...queryResult,
    responseStatus: status,
    responseData: data,
    responseError: error,
  };
}
