import { type JwtPayload } from "@kingmojang/types";
import jwtDecode from "jwt-decode";
import type { Dispatch } from "react";
import { createContext, useContext, useReducer } from "react";

type State = {
  currentUser?: JwtPayload;
  accessToken?: string;
  refreshToken?: string;
};

type Action =
  | { type: "소셜 로그인 시 URL 파싱 후 세션 저장 및 로그인" }
  | { type: "페이지 진입 시 세션에서 현재 유저 확인하기" }
  | {
      type: "로컬 로그인 토큰 저장";
      token: {
        accessToken?: string;
        refreshToken?: string;
      };
    }
  | { type: "로그아웃" };

const AuthStateContext = createContext<State | null>({
  currentUser: undefined,
  refreshToken: "",
  accessToken: "",
});

const AuthDispatchContext = createContext<Dispatch<Action> | null>(null);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "페이지 진입 시 세션에서 현재 유저 확인하기": {
      const token = sessionStorage.getItem("token");
      if (!token) return state;
      const json = JSON.parse(token);
      const parsed = jwtDecode(json.at) as JwtPayload;
      return {
        ...state,
        currentUser: parsed,
        accessToken: json.at,
        refreshToken: json.rt,
      };
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
      window.location.href = "/";
      return { ...state, currentUser: parsed, accessToken, refreshToken };
    }

    case "로그아웃": {
      sessionStorage.removeItem("token");
      return {
        ...state,
        currentUser: undefined,
        accessToken: undefined,
        refreshToken: undefined,
      };
    }
    case "로컬 로그인 토큰 저장": {
      const accessToken = action.token.accessToken;
      const refreshToken = action.token.refreshToken;
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
    accessToken: undefined,
    refreshToken: undefined,
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
