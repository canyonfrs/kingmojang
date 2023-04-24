import { get } from "@kingmojang/utils";
import { useQuery } from "@tanstack/react-query";

import type { IValidateNickname } from "../../types/user";

export function useValidateNickname({ nickname, type }: IValidateNickname) {
  const query = useQuery([nickname], () => {
    return get(`members/nickname?nickname=${nickname}&type=${type}`);
  });
  return query;
}
