import * as style from "./Gradation.css";

export default function Gradation() {
  return (
    <div>
      <div className={style.gradationTop} />
      <div className={style.gradationBottom} />
    </div>
  );
}
