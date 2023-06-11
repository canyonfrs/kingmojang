import type { ILocalSignup } from "@kingmojang/types";
import { useMutation } from "@tanstack/react-query";

import { post } from "../axios";
import { useBaseURL } from "../provider";

// TODO(@ALL): Response type 추가해야함
export function useLocalSignup(props: ILocalSignup) {
  const baseURL = useBaseURL();
  const query = useMutation([props.email], () => {
    return post("members", baseURL, { params: props });
  });
  return query;
}
