import React, { useContext } from "react";
import ModalContext from "./ModalContext";

const SectionStatus = () => {
    const { modalSheet } = useContext(ModalContext);
    
    if (modalSheet === 1) {
        return (
            <>
            <div className="flex justify-center p-5">
                <span>Status</span>
            </div>
            </>
        )
    } else {
        return null
    }
}

export default SectionStatus;