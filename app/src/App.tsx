import { TextArea } from "@kingmojang/ui";

import * as Styled from "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className={Styled.container}>
      <Header />
      <TextArea
        style={{
          width: "100vw",
          height: "calc(100vh - 76px)",
          padding: "10px",
          fontSize: "16px",

          border: "none",
          outline: "none",
          resize: "none",
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
