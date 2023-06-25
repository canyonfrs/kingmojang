import type { StateCreator } from "zustand";
import { create } from "zustand";
import type { PersistOptions } from "zustand/middleware";
import { createJSONStorage, persist } from "zustand/middleware";

export type UserType = "user" | "creator";

type UserState = {
  userType: UserType;
  setUserType: (data: UserType) => void;
};

type UserPersis = (
  config: StateCreator<UserState>,
  options: PersistOptions<UserState>,
) => StateCreator<UserState>;

const useUserStore = create<UserState>(
  (persist as UserPersis)(
    (set) => ({
      userType: "user",
      setUserType: (type: "creator" | "user") => set({ userType: type }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useUserStore;
