/* 참고: https://reactrouter.com/en/main/start/tutorial (React Router Tutorial) */
import {
  createBrowserRouter,
  RouterProvider as Provider,
} from "react-router-dom";

import Layout from "./Layout";
import {
  CreatorPage,
  HomePage,
  KingmojangPage,
  SignupPage,
  UserSignupPage,
} from "./pages";
import UserNickname from "./pages/UserNickname/UserNickname";

export const PATHS = {
  home: "/",
  creator: "/creator",
  kingmojang: "/kingmojang",
  signup: "/signup",
  userSignup: "/signup/usertype",
  redirect: "/oauth2/redirect/signup",
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
    path: PATHS.redirect,
    element: withLayout(<UserNickname />),
  },
]);

export const RouterProvider = () => <Provider router={router} />;
