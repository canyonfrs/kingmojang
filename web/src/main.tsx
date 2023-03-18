import "../src/styles/global.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "./Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>,
);
