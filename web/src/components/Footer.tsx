import * as styles from "./Footer.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>{new Date().getFullYear()} © 협곡친구들</span>
    </footer>
  );
}

export default Footer;
