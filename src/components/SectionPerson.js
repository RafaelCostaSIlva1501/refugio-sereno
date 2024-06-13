import React, { useContext } from "react";
import ModalContext from "./ModalContext";

const SectionPerson = () => {
    const { modalSheet } = useContext(ModalContext);
    
    if (modalSheet === 0) {
        return (
            <>
            <div className="flex justify-center p-5">
                <span>Informações do personagem</span>
            </div>
            </>
        )
    } else {
        return null
    }
    
}

export default SectionPerson;