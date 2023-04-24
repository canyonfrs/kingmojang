import { post } from "@kingmojang/utils";
import { useQuery } from "@tanstack/react-query";

import type { IRefreshToken, IToken } from "../../types/user";

export function useRefresh(props: IRefreshToken) {
  const query = useQuery<IToken>([props.memberId], async () => {
    return (await post("refresh", { params: props })) as IToken;
  });
  return query;
}
