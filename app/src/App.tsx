import { useGetMemoList, useHealthCheck } from "@kingmojang/api";
import { useAuthDispatch, useAuthState } from "@kingmojang/auth";
import { useEffect } from "react";

import * as Styled from "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TextArea } from "./components/TextArea";

function App() {
  const authDispatch = useAuthDispatch();
  const { accessToken } = useAuthState();

  const { data } = useGetMemoList({
    accessToken: accessToken as string,
  });

  console.log("[useGetMemoList data]", data);

  const health = useHealthCheck();
  if (health.data?.data) {
    console.log("[useHealthCheck]: 현재 서버가 정상 작동 중입니다.");
  } else {
    console.error("[useHealthCheck]: 현재 서버가 정상 작동 중이 아닙니다.");
  }

  useEffect(() => {
    authDispatch({ type: "페이지 진입 시 세션에서 현재 유저 확인하기" });
    authDispatch({ type: "소셜 로그인 시 URL 파싱 후 세션 저장 및 로그인" });
  }, []);

  return (
    <div className={Styled.container}>
      <Header />
      <TextArea />
      <Footer />
    </div>
  );
}

export default App;
