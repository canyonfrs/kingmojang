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

export const PATHS = {
  home: "/",
  creator: "/creator",
  kingmojang: "/kingmojang",
  signup: "/signup",
  userSignup: "/signup/usertype",
  redirect: "/oauth2/redirect",
  creatorNickName: "/oauth2/redirect/creator/nickname",
  userRedirect: "/oauth2/redirect/signup",
};

const withLayout = (element: React.ReactNode) => <Layout>{element}</Layout>;

export default function Router() {
  const { userInfo } = useUserStore();

  return useRoutes([
    {
      path: PATHS.home,
      element: withLayout(<HomePage />),
    },
    {
      path: PATHS.creator,
      element: withLayout(<CreatorPage />),
    },
    {
      path: PATHS.kingmojang,
      element: withLayout(<KingmojangPage />),
    },
    {
      children: [
        {
          path: PATHS.signup,
          element: withLayout(<SignupPage />),
        },
        {
          path: PATHS.userSignup,
          element: withLayout(<UserSignupPage />),
        },
      ],
    },
    {
      path: PATHS.redirect,
      children: [
        userInfo.memberType === "USER"
          ? {
              path: PATHS.userRedirect,
              element: withLayout(<NicknamePage />),
            }
          : {
              path: PATHS.userRedirect,
              element: withLayout(<CreatorCodePage />),
            },
        {
          path: PATHS.creatorNickName,
          element: withLayout(<NicknamePage />),
        },
      ],
    },
  ]);
}
