import { useAuthDispatch } from "@kingmojang/auth";
import { rem } from "polished";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Divider } from "../../components";
import * as Styles from "./HomePage.css";
import RecentSection from "./RecentSection/RecentSection";
// import { SubscribedSection } from "./SubscribedSection/SubscribedSection";
// import { WeeklySection } from "./WeeklySection/WeeklySection";

// const isLogin = false; // 로그인 분기 처리 필요

export function HomePage() {
  const authDispatch = useAuthDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.search === "") return;
    authDispatch({ type: "소셜 로그인 시 URL 파싱 후 세션 저장 및 로그인" });
  }, []);

  useEffect(() => {
    authDispatch({ type: "페이지 진입 시 세션에서 현재 유저 확인하기" });
  }, []);

  return (
    <div className={Styles.container}>
      {/* <SubscribedSection /> */}
      {/* <WeeklySection /> api 연결 필요 */}
      <Divider width={rem(1200)} />
      <RecentSection />
    </div>
  );
}
