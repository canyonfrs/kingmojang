import { post } from "@kingmojang/utils";
import { useQuery } from "@tanstack/react-query";

import type { ILocalSignup } from "../types/user";

export function useLocalSignup(props: ILocalSignup) {
  const query = useQuery([props.email], () => {
    return post("members", { params: props });
  });
  return query;
}
