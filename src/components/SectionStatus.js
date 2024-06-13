import React, { useContext } from "react";
import ModalContext from "./ModalContext";

import Progress from "./Progress";

const SectionStatus = () => {
    const { modalSheet } = useContext(ModalContext);
    
    if (modalSheet === 1) {
        return (
            <>
            <h2 className="mb-2 bg-white-100 text-center text-xl">STATUS</h2>

            <div className="">
                <Progress name="Pontos de Vida"/>
                <Progress name="Pontos de Sanidade"/>
                <Progress name="Pontos de Esforço"/>
            </div>
            </>
        )
    } else {
        return null
    }
}

export default SectionStatus;