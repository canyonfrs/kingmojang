import "./styles/global.css";

import { APIProvider } from "@kingmojang/api";
import { AuthProvider } from "@kingmojang/auth";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { MemoProvider } from "./contexts/MemoContext";

// INFO(@정현수): https://ko.vitejs.dev/guide/env-and-mode.html
const SERVER_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_SERVER_BASE_URL_DEV
    : import.meta.env.VITE_SERVER_BASE_URL_PROD;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MemoProvider>
      <AuthProvider>
        <APIProvider baseURL={SERVER_URL}>
          <App />
        </APIProvider>
      </AuthProvider>
    </MemoProvider>
  </React.StrictMode>,
);
