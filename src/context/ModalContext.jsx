import { createContext, useState } from "react";

export const ModalContext = createContext();
ModalContext.displayName = "Modal";

export const ModalProvider = ({ children }) => {
  const [modalAberta, setModalAberta] = useState(false);
  const [videoId, setVideoId] = useState('');

  return (
    <ModalContext.Provider value={{ modalAberta, setModalAberta, videoId, setVideoId }}>
      {children}
    </ModalContext.Provider>
  );
};
