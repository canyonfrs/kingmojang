import { useQuery } from "@tanstack/react-query";

import { get } from "../axios";
import { useBaseURL } from "../provider";

// TODO(@ALL): Response type 추가해야함
export function useValidateId(name: string) {
  const baseURL = useBaseURL();
  const query = useQuery([name], () => {
    return get(`members/username?username=${name}`, baseURL);
  });
  return query;
}
