import { useBearStore } from "../../../utils/src/store";
import { wrapperStyle } from "./HomePage.css";

function HomePage() {
  const bears = useBearStore((state: any) => state.bears);
  const increse = useBearStore((state) => state.increase);

  return (
    <div className={wrapperStyle}>
      홈페이지
      <button onClick={() => increse(1)}>+</button>
      <div>{bears}</div>
    </div>
  );
}

export default HomePage;
