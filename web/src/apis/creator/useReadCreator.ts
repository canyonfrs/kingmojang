import { get } from "@kingmojang/utils";
import { useQuery } from "@tanstack/react-query";

import type { ICreatorInfo } from "../../types/creator";

export function useReadCreator(memberId: number) {
  const query = useQuery<ICreatorInfo>([memberId], async () => {
    return (await get(`members/${memberId}/creator-infos`)) as ICreatorInfo;
  });
  return query;
}
