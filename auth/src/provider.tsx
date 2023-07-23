import type { JwtPayload } from "@kingmojang/types";
import jwtDecode from "jwt-decode";
import type { Dispatch } from "react";
import { createContext, useContext, useReducer } from "react";

type State = {
  currentUser?: JwtPayload;
};

type Action =
  | { type: "소셜 로그인 시 URL 파싱 후 세션 저장 및 로그인" }
  | { type: "페이지 진입 시 세션에서 현재 유저 확인하기" };

const AuthStateContext = createContext<State | null>({
  currentUser: undefined,
});

const AuthDispatchContext = createContext<Dispatch<Action> | null>(null);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "페이지 진입 시 세션에서 현재 유저 확인하기": {
      const token = sessionStorage.getItem("token");
      if (!token) {
        return { ...state, currentUser: undefined };
      }
      const parsed = jwtDecode(JSON.parse(token).at) as JwtPayload;
      return { ...state, currentUser: parsed };
    }

    case "소셜 로그인 시 URL 파싱 후 세션 저장 및 로그인": {
      const searchParams = new URLSearchParams(window.location.search);
      const accessToken = searchParams.get("accessToken");
      const refreshToken = searchParams.get("refreshToken");
      if (!accessToken || !refreshToken) {
        return { ...state, currentUser: undefined };
      }
      sessionStorage.setItem(
        "token",
        JSON.stringify({
          at: accessToken,
          rt: refreshToken,
        }),
      );
      const parsed = jwtDecode(accessToken) as JwtPayload;
      return { ...state, currentUser: parsed };
    }

    default:
      throw new Error(`Unhandled action type`);
  }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    currentUser: undefined,
  });

  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={state}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

export const useAuthState = () => {
  const state = useContext(AuthStateContext);
  if (!state) throw new Error("AuthProvider로 감싸주세요.");
  return state;
};

export const useAuthDispatch = () => {
  const dispatch = useContext(AuthDispatchContext);
  if (!dispatch) throw new Error("AuthProvider로 감싸주세요.");
  return dispatch;
};
