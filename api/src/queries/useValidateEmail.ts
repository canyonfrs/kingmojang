import { useQuery } from "@tanstack/react-query";

import { get } from "../axios";
import { useBaseURL } from "../provider";

// TODO(@ALL): Response type 추가해야함
export function useValidateEmail(email: string) {
  const baseURL = useBaseURL();
  const query = useQuery([email], () => {
    return get(`members/email?email=${email}`, baseURL);
  });
  return query;
}
