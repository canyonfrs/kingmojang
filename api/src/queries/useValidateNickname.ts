import type { IValidateNickname } from "@kingmojang/types";
import { useQuery } from "@tanstack/react-query";

import { get } from "../axios";
import { useBaseURL } from "../provider";

export function useValidateNickname({ nickname, type }: IValidateNickname) {
  const baseURL = useBaseURL();
  const queryKey = ["nickname", { nickname }];

  const queryResult = useQuery(
    queryKey,
    () => {
      return get(`members/nickname?nickname=${nickname}&type=${type}`, baseURL);
    },
    {
      enabled: !!nickname,
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  const { status, data, error } = queryResult;

  return {
    ...queryResult,
    responseStatus: status,
    responseData: data,
    responseError: error,
  };
}
