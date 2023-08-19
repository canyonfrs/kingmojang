import { useAuthDispatch } from "@kingmojang/auth";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { SummaryCard } from "../../components";
import { SUMMARY_CARD } from "../../constants/dummyData";
import * as styles from "./HomePage.css";
import { SubscribedSection } from "./SubscribedSection/SubscribedSection";

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
  console.log("git");
  return (
    <div className={styles.container}>
      <SubscribedSection />
      <SummaryCard {...SUMMARY_CARD} />
    </div>
  );
}
