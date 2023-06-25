import { useRoutes } from "react-router-dom";

import Layout from "./Layout";
import {
  CreatorCodePage,
  CreatorPage,
  HomePage,
  KingmojangPage,
  NicknamePage,
  SignupPage,
  UserSignupPage,
} from "./pages";
import useUserStore from "./stores/userStore";

const withLayout = (element: React.ReactNode) => <Layout>{element}</Layout>;

export default function Router() {
  const { userType } = useUserStore();

  return useRoutes([
    {
      id: "main",
      path: "/",
      element: withLayout(<HomePage />),
    },
    {
      id: "creator",
      path: "creator",
      element: withLayout(<CreatorPage />),
    },
    {
      id: "kingmojang",
      path: "kingmojang",
      element: withLayout(<KingmojangPage />),
    },
    {
      id: "signup",
      path: "signup",
      children: [
        {
          id: "signup_main",
          path: "",
          element: withLayout(<SignupPage />),
        },
        {
          id: "usertype",
          path: "usertype",
          element: withLayout(<UserSignupPage />),
        },
        { id: "image", path: "a", element: <SignupPage /> },
      ],
    },
    {
      id: "oauth2",
      path: "oauth2/redirect",
      children: [
        userType === "user"
          ? {
              id: "nickname",
              path: "signup",
              element: withLayout(<NicknamePage />),
            }
          : {
              id: "creator_code",
              path: "signup",
              element: withLayout(<CreatorCodePage />),
            },
      ],
    },
  ]);
}
