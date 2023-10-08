import { useQuery } from "@tanstack/react-query";

import { get } from "../axios";
import { useBaseURL } from "../provider";

interface HealthCheckResponse {
  data: "OK" | undefined;
}

export function useHealthCheck() {
  const baseURL = useBaseURL();
  return useQuery<unknown, unknown, HealthCheckResponse>(
    ["health_check"],
    async () => await get("api/v1/health", baseURL),
    {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );
}
