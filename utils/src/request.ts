import type { AxiosRequestConfig } from "axios";
import axios from "axios";

export type RequestMethod = "GET" | "POST" | "DELETE" | "PUT";
export interface RequestAPIType extends AxiosRequestConfig {
  method: RequestMethod;
  url: string;
  responseParser: <T>(response: { data: unknown }) => T;
  errorHandler: (error: unknown) => never;
}

export type RequestConfigType = Omit<RequestAPIType, "url" | "method">;

const BASE_URL = {
  dev: "",
  prod: "",
} as const;

export async function requestAPI<T>({
  url,
  params,
  responseParser,
  errorHandler,
}: RequestAPIType) {
  const response = await axios
    .request<T>({
      url,
      // TODO: 환경변수에 따른 구별 필요
      baseURL: BASE_URL["dev"],
      params,
    })
    .catch(errorHandler);

  return responseParser<T>(response);
}

/**
 *
 * @description react-query와 함께 아래와 같이 사용
 * const query = useQuery(['key'], async function getData() {
 *   return get('https://test.com/url', {});
 * });
 */
export async function get<T>(url: string, config: RequestConfigType) {
  return requestAPI<T>({ url, method: "GET", ...config });
}

export async function post<T>(url: string, config: RequestConfigType) {
  return requestAPI<T>({ url, method: "POST", ...config });
}

export async function del<T>(url: string, config: RequestConfigType) {
  return requestAPI<T>({ url, method: "DELETE", ...config });
}

export async function put<T>(url: string, config: RequestConfigType) {
  return requestAPI<T>({ url, method: "PUT", ...config });
}
