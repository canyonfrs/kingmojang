import { wrapperStyle } from "./HomePage.css";

function HomePage() {
  return (
    <div className={wrapperStyle}>
      홈페이지
      <a download="kingmojang.dmg" href="/kingmojang-app_0.0.0-dev_aarch64.dmg">
        kingmojang MAC 다운로드
      </a>
    </div>
  );
}

export default HomePage;
