// import React, { createContext, useEffect, useState } from "react";

// interface Temp {
//   modalList: string[];
//   addModalToList: (modal: string) => void;
// }
// export const ModalStateContext = createContext<Temp | undefined>(undefined);

// function ModalProvider({ children }: { children: React.ReactNode }) {
//   const [modalList, setModalList] = useState<any[]>([]);

//   const addModalToList = (modal: any) => {
//     setModalList((prevModalList) => [...prevModalList, modal]);
//   };

//   const contextValue: Temp = {
//     modalList,
//     addModalToList,
//   };
//   useEffect(() => {
//     console.log("modalList", modalList);
//   }, [modalList]);
//   return (
//     <ModalStateContext.Provider value={contextValue}>
//       {children}
//     </ModalStateContext.Provider>
//   );
// }

// export default ModalProvider;

import React, { createContext, useEffect, useState } from "react";

interface Temp {
  modalList: string[];
  addModalToList: (modal: string) => void;
}
export const ModalStateContext = createContext<Temp | undefined>(undefined);

function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalList, setModalList] = useState<any[]>([]);

  const addModalToList = (modal: any) => {
    setModalList((prevModalList) => [...prevModalList, modal]);
  };

  const contextValue: Temp = {
    modalList,
    addModalToList,
  };
  useEffect(() => {
    console.log("modalList", modalList);
  }, [modalList]);
  return (
    <ModalStateContext.Provider value={contextValue}>
      {children}
    </ModalStateContext.Provider>
  );
}

export default ModalProvider;
