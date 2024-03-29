import "../src/styles/global.css";
import "@kingmojang/ui/dist/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { APIProvider } from "@kingmojang/api";
import { AuthProvider } from "@kingmojang/auth";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ModalProvider from "./contexts/ModalProvider";
import Router from "./Router";

// INFO(@정현수): https://ko.vitejs.dev/guide/env-and-mode.html
const SERVER_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_SERVER_BASE_URL_DEV
    : import.meta.env.VITE_SERVER_BASE_URL_PROD;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <APIProvider baseURL={SERVER_URL}>
        <ModalProvider>
          <RouterProvider
            router={createBrowserRouter([
              {
                id: "MainRouter",
                path: "*",
                element: <Router />,
              },
            ])}
          />
        </ModalProvider>
      </APIProvider>
    </AuthProvider>
  </React.StrictMode>,
);
