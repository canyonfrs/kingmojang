import { useQuery } from "@tanstack/react-query";

import { get } from "../axios";
import { useBaseURL } from "../provider";

export function useHealthCheck() {
  const baseURL = useBaseURL();
  return useQuery(["health_check"], async () => await get("health", baseURL));
}
