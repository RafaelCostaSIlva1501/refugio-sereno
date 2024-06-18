import React, { useContext } from "react";
import ModalContext from "./ModalContext";

import InputSection from "./InputSection";

const FormCharacter = () => {
    const { modalON, openModal } = useContext(ModalContext);

    if (modalON === 1) {
        return (
            <section className="centralize flex flex-col justify-between gap-2 p-1.5 bg-black">
                <button
                    className="w-max flex justify-center items-center self-end"
                    onClick={() => openModal(0)}
                >
                    <span className="material-symbols-outlined"> close </span>
                </button>

                <hr className="border-white-200"></hr>

                <div className="h-full">
                    <InputSection />
                </div>
            </section>
        );
    } else {
        return null;
    }
};

export default FormCharacter;
