import { post } from "@kingmojang/utils";
import { useQuery } from "@tanstack/react-query";

import type { ICreatorInfo } from "../../types/creator";

export function useCreateCreator(memberId: string, props: ICreatorInfo) {
  const query = useQuery([memberId], () => {
    return post(`members/${memberId}/creator-infos`, { params: props });
  });
  return query;
}
