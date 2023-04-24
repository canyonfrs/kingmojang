import { get } from "@kingmojang/utils";
import { useQuery } from "@tanstack/react-query";

import type { ICreatorInfo } from "../../types/creator";

// export function useReadCreator(memberId: string) {
//   const { data } = useQuery<ICreatorInfo, Error>([memberId], async () => {
//     const response = (await get(
//       `members/${memberId}/creator-infos`,
//     )) as ICreatorInfo;
//     return response;
//   });
//   return data;
// }

export function useReadCreator(memberId: number) {
  // 이렇게 하는게 맞는지?
  const query = useQuery<ICreatorInfo>([memberId], async () => {
    const response = (await get(
      `members/${memberId}/creator-infos`,
    )) as ICreatorInfo;
    return response;
  });
  return query;
}
