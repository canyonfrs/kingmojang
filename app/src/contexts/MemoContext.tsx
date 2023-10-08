import type { ServerMemo } from "@kingmojang/types";
import type { Dispatch } from "react";
import { createContext, useContext, useReducer } from "react";

type State = {
  currentMemoId?: number;
  currentMemo?: Partial<ServerMemo>;
  memoList: ServerMemo[];
};

type Action =
  | { type: "change_memo_id"; payload: number }
  | { type: "change_memo_list"; payload: ServerMemo[] }
  | { type: "append_memo_list"; payload: Partial<ServerMemo> }
  | { type: "change_memo"; payload: Partial<ServerMemo> };

const MemoStateContext = createContext<State | null>({
  currentMemoId: undefined,
  memoList: [],
});

const MemoDispatchContext = createContext<Dispatch<Action> | null>(null);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "change_memo": {
      return {
        ...state,
        currentMemo: {
          ...state.currentMemo,
          ...action.payload,
        },
      };
    }

    case "change_memo_id": {
      return {
        ...state,
        currentMemoId: action.payload,
        currentMemo: state.memoList.find((memo) => memo.id === action.payload),
      };
    }

    case "change_memo_list": {
      return {
        ...state,
        memoList: action.payload,
      };
    }

    case "append_memo_list": {
      const memo: ServerMemo = {
        id: state.currentMemoId as number,
        title: action.payload.title as string,
        content: action.payload.content as string,
        writer: action.payload.writer as string,
        likeCount: 0,
        commentCount: 0,
        isLike: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      return {
        ...state,
        memoList: [memo, ...state.memoList],
      };
    }

    default:
      throw new Error(`Unhandled action type`);
  }
};

export const MemoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    currentMemoId: undefined,
    memoList: [],
  });

  return (
    <MemoDispatchContext.Provider value={dispatch}>
      <MemoStateContext.Provider value={state}>
        {children}
      </MemoStateContext.Provider>
    </MemoDispatchContext.Provider>
  );
};

export const useMemoState = () => {
  const state = useContext(MemoStateContext);
  if (!state) throw new Error("MemoProvider로 감싸주세요.");
  return state;
};

export const useMemoDispatch = () => {
  const dispatch = useContext(MemoDispatchContext);
  if (!dispatch) throw new Error("MemoProvider로 감싸주세요.");
  return dispatch;
};
