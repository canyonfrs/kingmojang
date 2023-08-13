import type { ISocialSignup } from "@kingmojang/types";
import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

import { post } from "../axios";
import { useBaseURL } from "../provider";

interface SocialSignupMutateProps {
  data: ISocialSignup;
  options?: UseMutationOptions;
}

// TODO(@ALL): Response type 추가해야함
export function useSocialSignup({ data, options }: SocialSignupMutateProps) {
  const baseURL = useBaseURL();
  const mutate = useMutation(
    ["social_signup"],
    () => {
      return post("members", baseURL, {
        headers: { "Content-Type": "application/json" },
        data,
      });
    },
    {
      ...options,
      // 추후에 필요할 수도
      //   retry: false,
      //   onSuccess: () => {
      //     alert("가입 완료");
      //     window.location.replace("/");
      //   },
      //   onError: (error) => {
      //     alert(error);
      //   },
    },
  );
  return mutate;
}
