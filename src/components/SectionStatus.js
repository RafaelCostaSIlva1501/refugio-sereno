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
                <Progress 
                    name="Pontos de Vida" 
                    maxValue={12} 
                    value={7} 
                    color="red"
                />

                <Progress 
                    name="Pontos de Sanidade" 
                    maxValue={90}   
                    value={14}
                    color="blue"
                />

                <Progress
                     name="Pontos de Esforço"   
                     maxValue={75} 
                     value={17}
                     color="yellow"
                />
            </div>
            </>
        )
    } else {
        return null
    }
}

export default SectionStatus;