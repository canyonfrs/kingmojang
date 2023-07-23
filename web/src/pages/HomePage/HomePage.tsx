import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { SummaryCard } from "../../components";
import { SUMMARY_CARD } from "../../constants/dummyData";
import * as styles from "./HomePage.css";
import { SubscribedSection } from "./SubscribedSection/SubscribedSection";

export function HomePage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const accessToken = searchParams.get("accessToken");
  const refreshToken = searchParams.get("refreshToken");
  const history = useNavigate();

  useEffect(() => {
    if (accessToken || refreshToken) {
      sessionStorage.setItem(
        "token",
        JSON.stringify({
          at: accessToken,
          rt: refreshToken,
        }),
      );
      history("/", { replace: true });
    }
  }, []);

  return (
    <div className={styles.container}>
      <SubscribedSection />
      <SummaryCard {...SUMMARY_CARD} />
    </div>
  );
}
