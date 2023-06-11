import { put } from "@kingmojang/utils";
import { useQuery } from "@tanstack/react-query";

import type { ICreatorInfo } from "../types/creator";

export function useUpdateCreator(memberId: string, props: ICreatorInfo) {
  const query = useQuery([memberId], () => {
    return put(`members/${memberId}/creator-infos`, { params: props });
  });
  return query;
}