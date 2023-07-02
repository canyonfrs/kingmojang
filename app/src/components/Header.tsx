import * as Styled from "./Header.css";

const Header = () => {
  return (
    <div className={Styled.container}>
      <div className={Styled.item}>새 히스토리(H)</div>
      <div className={Styled.item}>새 킹모장(N)</div>
      <div className={Styled.item}>도움말</div>
    </div>
  );
};

export default Header;
