import React, { useContext } from "react";
import ModalContext from "./ModalContext";

const SectionPerson = () => {
    const { modalSheet } = useContext(ModalContext);
    
    if (modalSheet === 0) {
        return (
            <>
            <h2 className="mb-2 bg-white-100 text-center text-xl">INFORMAÇÕES</h2>

            <div className="flex flex-row gap-1.5 w-full">
                    <div className="border">
                        <img className="min-w-24 h-24" src="./img/senhoruaite.webp" alt=""></img>
                    </div>

                    <div className="flex flex-col gap-1.5 w-full ">
                        <span className="border-b">Jogador:</span>
                        <span className="border-b">Personagem:</span>
                        <span className="border-b">Ocupação:</span>
                    </div>
                </div>
            </>
        )
    } else {
        return null
    }
    
}

export default SectionPerson;