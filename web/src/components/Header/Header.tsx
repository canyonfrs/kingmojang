import { Link } from "react-router-dom";

import { PATHS } from "../../Router";
import * as styles from "./Header.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link to={PATHS.home}>홈</Link>
      <Link to={PATHS.creator}>크리에이터</Link>
      <Link to={PATHS.kingmojang}>킹모장</Link>
    </header>
  );
}
