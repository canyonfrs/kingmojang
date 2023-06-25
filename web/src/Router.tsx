/* 참고: https://reactrouter.com/en/main/start/tutorial (React Router Tutorial) */
import {
  createBrowserRouter,
  RouterProvider as Provider,
} from "react-router-dom";

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

export const PATHS = {
  home: "/",
  creator: "/creator",
  kingmojang: "/kingmojang",
  signup: "/signup",
  userSignup: "/signup/usertype",
  userRedirect: "/oauth2/redirect/signup",
  creatorRedirect: "/oauth2/redirect/signup/creator",
};

const withLayout = (element: React.ReactNode) => <Layout>{element}</Layout>;
const router = createBrowserRouter([
  {
    path: PATHS.signup,
    element: withLayout(<SignupPage />),
  },
  {
    path: PATHS.userSignup,
    element: withLayout(<UserSignupPage />),
  },
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
    path: PATHS.userRedirect,
    element: withLayout(<NicknamePage />),
  },
  {
    path: PATHS.creatorRedirect,
    element: withLayout(<CreatorCodePage />),
  },
]);

export const RouterProvider = () => <Provider router={router} />;
