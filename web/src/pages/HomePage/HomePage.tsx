import { useAuthDispatch } from "@kingmojang/auth";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { SummaryCard } from "../../components";
import * as styles from "./HomePage.css";
import { SubscribedSection } from "./SubscribedSection/SubscribedSection";

// FIXME(@박은식): 서버 api연결 후 지워야함
const SUMMARY_CARD = {
  createrName: "풍월량",
  createdDate: new Date("2023-04-17"),
  profileImageSrc:
    "https://static-cdn.jtvnw.net/jtv_user_pictures/7d354ef2-b2a8-4276-8c12-5be7f6301ae0-profile_image-300x300.png",
  like: 2111,
  comment: 555,
  memo: `침착맨 = 임포스터면 말이 많아지고 신남
  시민이면 확실히 목소리 톤 다운
 시민이면 활동력 저하

풍월량 = 개못함 고집 셈 시야 적음

김진배 = 쓰레기 살인마 잠수인지도 알면서 죽임
  수단 방법 안가림

주펄    = 아직 게임 잘 모름 안보이는 사람 찍음`,
} as const;

export function HomePage() {
  const authDispatch = useAuthDispatch();
  const location = useLocation();
  const history = useNavigate();

  useEffect(() => {
    if (location.search === "") return;
    authDispatch({ type: "소셜 로그인 시 URL 파싱 후 세션 저장 및 로그인" });
    history("/");
  }, []);

  useEffect(() => {
    authDispatch({ type: "페이지 진입 시 세션에서 현재 유저 확인하기" });
  }, []);

  return (
    <div className={styles.container}>
      <SubscribedSection />
      <SummaryCard {...SUMMARY_CARD} />
    </div>
  );
}
