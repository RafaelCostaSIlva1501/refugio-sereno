import React, { useContext } from "react";
import ModalContext from "./ModalContext";

const SectionExpertise = () => {
    const { modalSheet } = useContext(ModalContext);
    
    if (modalSheet === 2) {
        return (
            <>
            <div className="flex justify-center p-5">
                <span>Perícias e Atributos</span>
            </div>
            </>
        )
    } else {
        return null
    }
}

export default SectionExpertise;