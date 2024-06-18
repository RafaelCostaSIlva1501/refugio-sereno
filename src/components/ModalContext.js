import React, { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    let listNewCharacter = JSON.parse(localStorage.getItem("sheet")) || [];

    const [modalON, setModalOn] = useState(0);

    const openModal = (num) => setModalOn(num);

    const [deletePopUp, setPopUpDelete] = useState(false);

    const openPopUpDelete = (value) => setPopUpDelete(value);
    
    const [deleteIndex, setDeleteIndex] = useState(null)

    const [modalSheet, setModalSheet] = useState(0)

    const [sheetIndex, setSheetIndex] = useState(null)

    const replaceModalSheet = (value) => setModalSheet(value)

    return (
        <ModalContext.Provider
            value={{
                listNewCharacter,
                modalON,
                openModal,
                deletePopUp,
                openPopUpDelete,
                deleteIndex,
                setDeleteIndex,
                modalSheet,
                replaceModalSheet,
                sheetIndex,
                setSheetIndex,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContext;
