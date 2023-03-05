import { useState } from "react";
import { Hello } from "@kingmojang/ui";
import { wrapperStyle } from "./style.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={wrapperStyle}>
      <Hello />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
