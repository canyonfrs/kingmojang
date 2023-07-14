import type { StateCreator } from "zustand";
import { create } from "zustand";
import type { PersistOptions } from "zustand/middleware";
import { createJSONStorage, persist } from "zustand/middleware";

export type UserType = "USER" | "CREATOR";

export type SignUpInfo = {
  email: string;
  memberType: UserType;
  code?: string;
  provider: string;
  nickname: string;
};

type UserState = {
  userInfo: SignUpInfo;
  setUserInfo: (data: SignUpInfo) => void;
};

type UserPersist = (
  config: StateCreator<UserState>,
  options: PersistOptions<UserState>,
) => StateCreator<UserState>;

const useUserStore = create<UserState>(
  (persist as UserPersist)(
    (set) => ({
      userInfo: {
        email: "",
        memberType: "USER",
        nickname: "",
        provider: "",
        code: "",
      },
      setUserInfo: (data: SignUpInfo) => set({ userInfo: data }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useUserStore;
