import * as Styled from "./Footer.css";

const Footer = () => {
  return (
    <div className={Styled.container}>
      {/* Line and Column */}
      <div className={Styled.lnCol}>Ln 3, Col 39</div>

      {/* Scale */}
      <div className={Styled.restItem}>100%</div>

      {/* OS */}
      <div className={Styled.restItem}>Windows (CRLF)</div>

      {/* Encoding */}
      <div className={Styled.restItem}>UTF-8</div>
    </div>
  );
};

export { Footer };
