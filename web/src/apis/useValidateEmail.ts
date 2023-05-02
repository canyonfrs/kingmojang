import { get } from "@kingmojang/utils";
import { useQuery } from "@tanstack/react-query";

export function useValidateEmail(email: string) {
  const query = useQuery([email], () => {
    return get(`members/email?email=${email}`);
  });
  return query;
}
