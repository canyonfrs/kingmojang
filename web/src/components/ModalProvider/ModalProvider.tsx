import React, { createContext, useEffect, useState } from "react";

interface Temp {
  currentModal: string;
  setCurrentModal: (modal: string) => void;
}
export const ModalStateContext = createContext<Temp | undefined>(undefined);

function ModalProvider({ children }: { children: React.ReactNode }) {
  const [currentModal, setCurrentModal] = useState<string>("");

  const contextValue: Temp = {
    currentModal,
    setCurrentModal,
  };
  useEffect(() => {
    console.log("modalList", currentModal);
  }, [currentModal]);
  return (
    <ModalStateContext.Provider value={contextValue}>
      {children}
    </ModalStateContext.Provider>
  );
}

export default ModalProvider;
