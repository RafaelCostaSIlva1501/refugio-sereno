import React, { useContext } from "react";
import ModalContext from "../ModalContext";

const SectionInventory = () => {
    const { modalSheet } = useContext(ModalContext);
    
    if (modalSheet === 3) {
        return (
            <>
            <h2 className="mb-2 bg-white-100 text-center text-xl">INVENTÁRIO</h2>
            </>
        )
    } else {
        return null
    }
}

export default SectionInventory;