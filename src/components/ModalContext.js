import React, { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalON, setModalOn] = useState(0);

    const openModal = (num) => setModalOn(num);

    const [deletePopUp, setPopUpDelete] = useState(false);

    const openPopUpDelete = (value) => setPopUpDelete(value);
    
    const [deleteIndex, setDeleteIndex] = useState(null)

    const [modalSheet, setModalSheet] = useState(1)

    const replaceModalSheet = (value) => setModalSheet(value)

    return (
        <ModalContext.Provider
            value={{
                modalON,
                openModal,
                deletePopUp,
                openPopUpDelete,
                deleteIndex,
                setDeleteIndex,
                modalSheet,
                replaceModalSheet,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContext;
