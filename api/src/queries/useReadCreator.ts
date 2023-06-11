import type { ICreatorInfo } from "@kingmojang/types";
import { useQuery } from "@tanstack/react-query";

import { get } from "../axios";

export function useReadCreator(memberId: number) {
  const query = useQuery<ICreatorInfo>([memberId], async () => {
    return (await get(`members/${memberId}/creator-infos`, "")) as ICreatorInfo;
  });
  return query;
}
