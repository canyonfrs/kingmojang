import { create } from "zustand";

interface SubscribedProfile {
  selectedId?: number;
  selectProfile: (id: number) => void;
}

const useSubscribedProfileStore = create<SubscribedProfile>()((set) => ({
  selectedId: undefined,
  selectProfile: (id) => set(() => ({ selectedId: id })),
}));

export { useSubscribedProfileStore };
