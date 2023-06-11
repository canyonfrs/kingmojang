import type { IValidateNickname } from "@kingmojang/types";
import { useQuery } from "@tanstack/react-query";

import { get } from "../axios";

// TODO(@ALL): Response type 추가해야함
export function useValidateNickname({ nickname, type }: IValidateNickname) {
  const query = useQuery([nickname], () => {
    return get(`members/nickname?nickname=${nickname}&type=${type}`, "");
  });
  return query;
}
