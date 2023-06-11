import { useQuery } from "@tanstack/react-query";

import { get } from "../axios";

// TODO(@ALL): Response type 추가해야함
export function useValidateEmail(email: string) {
  const query = useQuery([email], () => {
    return get(`members/email?email=${email}`, "");
  });
  return query;
}
