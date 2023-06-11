import type { IRefreshToken, IToken } from "@kingmojang/types";
import { useMutation } from "@tanstack/react-query";

import { post } from "../axios";
import { useBaseURL } from "../provider";

export function useRefresh(props: IRefreshToken) {
  const baseURL = useBaseURL();
  const query = useMutation<IToken>([props.memberId], async () => {
    return (await post("refresh", baseURL, { params: props })) as IToken;
  });
  return query;
}
