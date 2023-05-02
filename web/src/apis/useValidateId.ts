import { get } from "@kingmojang/utils";
import { useQuery } from "@tanstack/react-query";

export function useValidateId(name: string) {
  const query = useQuery([name], () => {
    return get(`members/username?username=${name}`);
  });
  return query;
}
