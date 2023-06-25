import type { ModalType } from "@kingmojang/types";
import React, { createContext, useState } from "react";

interface ModalProviderInterface {
  currentModal: ModalType;
  setCurrentModal: (modal: ModalType) => void;
}
export const ModalStateContext = createContext<
  ModalProviderInterface | undefined
>(undefined);

function ModalProvider({ children }: { children: React.ReactNode }) {
  const [currentModal, setCurrentModal] = useState<ModalType>("closed");

  const contextValue: ModalProviderInterface = {
    currentModal,
    setCurrentModal,
  };

  return (
    <ModalStateContext.Provider value={contextValue}>
      {children}
    </ModalStateContext.Provider>
  );
}

export default ModalProvider;
