import React, { useContext } from "react";
import ModalContext from "./ModalContext";

import InputSection from "./InputSection";

const FormCharacter = () => {
    const { modalON, openModal } = useContext(ModalContext);

    if (modalON === 1) {
        return (
            <section className="centralize flex flex-col justify-between gap-2 p-1.5 bg-black border border-blue-500">

                <div className="flex flex-row justify-end items-center h-11 border-b border-white-200">
                    <button
                        className="w-max flex justify-center items-center"
                        onClick={() => openModal(0)}
                    >
                        <span className="material-symbols-outlined">
                            {" "}
                            close{" "}
                        </span>
                    </button>
                </div>

                <div className="flex flex-col grow">
                    <InputSection />
                </div>

                <div className="flex justify-center items-center h-11 border-t border-white-200">

                    <button class="w-full p-1.5 border-2 border-solid border-white-500 rounded text-center hover:bg-white-500 hover:text-black transition active:scale-95">
                        Próximo
                    </button>
                </div>
            </section>
        );
    } else {
        return null;
    }
};

export default FormCharacter;
