import { useQuery } from "@tanstack/react-query";

import { get } from "../axios";

// TODO(@ALL): Response type 추가해야함
export function useValidateId(name: string) {
  const query = useQuery([name], () => {
    return get(`members/username?username=${name}`, "");
  });
  return query;
}
