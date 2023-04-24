import { post } from "@kingmojang/utils";
import { useQuery } from "@tanstack/react-query";

import type { ISocialSignup } from "../../types/user";

export function useSocialSignup(props: ISocialSignup) {
  const query = useQuery(["local_signup"], () => {
    return post("members", { params: props });
  });
  return query;
}
