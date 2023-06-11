import type { ICreatorInfo } from "@kingmojang/types";
import { useQuery } from "@tanstack/react-query";

import { get } from "../axios";
import { useBaseURL } from "../provider";

export function useReadCreator(memberId: number) {
  const baseURL = useBaseURL();
  const query = useQuery<ICreatorInfo>([memberId], async () => {
    return (await get(
      `members/${memberId}/creator-infos`,
      baseURL,
    )) as ICreatorInfo;
  });
  return query;
}
