import React, { useContext } from "react";
import ModalContext from "./ModalContext";

const SectionUnlock = () => {
    const { modalSheet } = useContext(ModalContext);
    
    if (modalSheet === 4) {
        return (
            <>
            <div className="flex justify-center p-5">
                <span>?</span>
            </div>
            </>
        )
    } else {
        return null
    }
}

export default SectionUnlock;