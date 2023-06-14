import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { useContext } from "react";
import { createContext } from "react";

const UrlContext = createContext("");

const queryClient = new QueryClient({
  // NOTE(@정현수): 공통된 옵션을 여기에 추가 가능
});

export interface BaseURLContextType extends PropsWithChildren {
  baseURL: string;
}

// NOTE(@정현수): baseURL을 전역으로 관리하기 위한 컨텍스트
// 해당 패키지는 baseURL에 대한 관심이 없고, 사용하는 쪽에서 주입받아서 사용하도록 함
const UrlProvider = ({ children, baseURL }: BaseURLContextType) => {
  return <UrlContext.Provider value={baseURL}>{children}</UrlContext.Provider>;
};

const QueryProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export const APIProvider = ({ children, baseURL }: BaseURLContextType) => {
  return (
    <UrlProvider baseURL={baseURL}>
      <QueryProvider>{children}</QueryProvider>
    </UrlProvider>
  );
};

export const useBaseURL = () => {
  if (UrlContext === undefined) throw new Error("APIProvider로 감싸주세요.");
  return useContext(UrlContext);
};
