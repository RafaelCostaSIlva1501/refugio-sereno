import React, { useContext } from "react";
import ModalContext from "./ModalContext";

import InputSection from "./InputSection";

const FormCharacter = () => {
    const { modalON, openModal } = useContext(ModalContext);

    if (modalON === 1) {
        return (
            <section className="flex flex-col gap-2.5 h-screen">

                <header className="flex flex-row justify-end items-center flex-shrink-0 p-1 border-b border-white-200">
                    <button
                        className="w-max flex justify-center items-center"
                        onClick={() => openModal(0)}
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </header>

                <main className="flex flex-col flex-1 overflow-y-auto scrollbar">
                    <InputSection />
                </main>

                <footer className="flex-shrink-0 border-t p-1 border-white-200">
                    <button class="w-full p-1.5 border-2 border-solid border-white-500 rounded text-center hover:bg-white-500 hover:text-black transition active:scale-95">
                        Próximo
                    </button>
                </footer>
            </section>
        );
    } else {
        return null;
    }
};

export default FormCharacter;

/*

*/
