import React, { useContext } from "react";
import ModalContext from "./ModalContext";

const SectionInventory = () => {
    const { modalSheet } = useContext(ModalContext);
    
    if (modalSheet === 3) {
        return (
            <>
            <div className="flex justify-center p-5">
                <span>Inventário</span>
            </div>
            </>
        )
    } else {
        return null
    }
}

export default SectionInventory;