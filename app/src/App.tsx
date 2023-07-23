import { useAuthDispatch } from "@kingmojang/auth";
import { TextArea } from "@kingmojang/ui";
import { useEffect } from "react";

import * as Styled from "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const authDispatch = useAuthDispatch();

  useEffect(() => {
    authDispatch({ type: "페이지 진입 시 세션에서 현재 유저 확인하기" });
  }, []);

  useEffect(() => {
    if (window.location.search === "") return;
    authDispatch({ type: "소셜 로그인 시 URL 파싱 후 세션 저장 및 로그인" });
  }, []);

  return (
    <div className={Styled.container}>
      <Header />
      <TextArea
        style={{
          width: "100vw",
          height: "calc(100vh - 76px)",
          padding: "10px",
          fontSize: "16px",

          border: "none",
          outline: "none",
          resize: "none",
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
