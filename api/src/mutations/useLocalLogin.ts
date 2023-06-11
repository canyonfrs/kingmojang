import type { ILocalLogin, IToken } from "@kingmojang/types";
import { useMutation } from "@tanstack/react-query";

import { post } from "../axios";
import { useBaseURL } from "../provider";

export function useLocalLogin(props: ILocalLogin) {
  const baseURL = useBaseURL();
  const query = useMutation<IToken>([props.username], async () => {
    return (await post("login", baseURL, {
      params: props,
    })) as IToken;
  });
  return query;
}
