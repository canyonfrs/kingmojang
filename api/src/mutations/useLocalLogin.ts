import type { ILocalLoginSuccess } from "@kingmojang/types";
import { type ILocalLogin } from "@kingmojang/types";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError, AxiosResponse } from "axios";

import { post } from "../axios";
import { useBaseURL } from "../provider";

export const useLocalLogin = () => {
  const baseURL = useBaseURL();
  return useMutation<
    AxiosResponse<ILocalLoginSuccess>,
    AxiosError,
    ILocalLogin
  >(
    (data: ILocalLogin) =>
      post("/api/v1/login", baseURL, {
        data,
      }) as any,
  );
};
