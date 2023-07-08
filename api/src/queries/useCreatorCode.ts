import { useQuery } from "@tanstack/react-query";

import { get } from "../axios";
import { useBaseURL } from "../provider";

export function useCreatorCode(code: string) {
  const baseURL = useBaseURL();
  return useQuery(
    [code],
    async () => await get(`auth-codes?code=${code}`, baseURL, {}),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      retry: false,
    },
  );
}
