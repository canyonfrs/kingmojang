import type { ISocialSignup } from "@kingmojang/types";
import { useMutation } from "@tanstack/react-query";

import { post } from "../axios";
import { useBaseURL } from "../provider";

// TODO(@ALL): Response type 추가해야함
export function useSocialSignup(props: ISocialSignup) {
  const baseURL = useBaseURL();
  const query = useMutation(["social_signup"], () => {
    return post("members", baseURL, {
      headers: { "Content-Type": "application/json" },
      data: props,
    });
  });
  return query;
}
