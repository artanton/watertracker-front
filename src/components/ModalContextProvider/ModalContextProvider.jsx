import { createContext, useCallback, useContext, useState } from 'react';
import { Overlay } from '../Overlay/Overlay';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  const toggleModal = useCallback((modal = null) => {
    setModal(modal);
  }, []);

  return (
    <ModalContext.Provider value={toggleModal}>
      {children}
      {modal && <Overlay>{modal}</Overlay>}
    </ModalContext.Provider>
  );
};
