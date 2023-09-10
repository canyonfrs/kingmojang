import type { AxiosRequestConfig } from "axios";
import axios from "axios";

export type RequestMethod = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
export interface RequestAPIType extends AxiosRequestConfig {
  method: RequestMethod;
  url: string;
  baseURL: string;
  responseParser?: <T>(response: { data: unknown }) => T;
  errorHandler?: (error: unknown) => never;
}

export type RequestConfigType = Omit<
  RequestAPIType,
  "url" | "method" | "baseURL"
>;

export async function requestAPI<T>({
  url,
  params,
  method,
  baseURL,
  responseParser,
  errorHandler,
  ...restProps
}: RequestAPIType) {
  const response = await axios
    .request<T>({
      method,
      url,
      baseURL,
      params,
      ...restProps,
    })
    .catch(errorHandler);

  if (responseParser) {
    return responseParser<T>(response);
  }
  return response;
}

/**
 *
 * @description react-query와 함께 아래와 같이 사용
 * const query = useQuery(['key'], async function getData() {
 *   return get('https://test.com/url', {});
 * });
 */
export async function get<T>(
  url: string,
  baseURL: string,
  config?: RequestConfigType,
) {
  return requestAPI<T>({ url, baseURL, method: "GET", ...config });
}

export async function post<T>(
  url: string,
  baseURL: string,
  config?: RequestConfigType,
) {
  return requestAPI<T>({ url, baseURL, method: "POST", ...config });
}

export async function del<T>(
  url: string,
  baseURL: string,
  config?: RequestConfigType,
) {
  return requestAPI<T>({ url, baseURL, method: "DELETE", ...config });
}

export async function put<T>(
  url: string,
  baseURL: string,
  config?: RequestConfigType,
) {
  return requestAPI<T>({ url, baseURL, method: "PUT", ...config });
}

export async function patch<T>(
  url: string,
  baseURL: string,
  config?: RequestConfigType,
) {
  return requestAPI<T>({ url, baseURL, method: "PATCH", ...config });
}
