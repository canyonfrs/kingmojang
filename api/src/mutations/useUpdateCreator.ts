import type { ICreatorInfo } from "@kingmojang/types";
import { useMutation } from "@tanstack/react-query";

import { put } from "../axios";
import { useBaseURL } from "../provider";

// TODO(@ALL): Response type 추가해야함
export function useUpdateCreator(memberId: string, props: ICreatorInfo) {
  const baseURL = useBaseURL();
  const query = useMutation([memberId], () => {
    return put(`members/${memberId}/creator-infos`, baseURL, { params: props });
  });
  return query;
}
