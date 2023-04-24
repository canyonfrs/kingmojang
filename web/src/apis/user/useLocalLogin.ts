import { post } from "@kingmojang/utils";
import { useQuery } from "@tanstack/react-query";

import type { ILocalLogin, IToken } from "../../types/user";

export function useLocalLogin(props: ILocalLogin) {
  const query = useQuery<IToken>([props.username], async () => {
    return (await post("login", { params: props })) as IToken;
  });
  return query;
}
