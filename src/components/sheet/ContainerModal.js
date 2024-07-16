import React, { useContext } from "react";
import ModalContext from "../ModalContext";

const ContainerModal = ({ children, title }) => {
    const { setStatusModals } = useContext(ModalContext);
    return (
        <div className="flex justify-center items-center centralize px-5 backdrop-blur-sm z-50">
            <div className="bg-black-400 border rounded">
                <header className="flex justify-between w-full p-1 border-b">
                    <button className="flex">
                        <span className="material-symbols-outlined">info</span>
                    </button>

                    <h2>{title}</h2>

                    <button className="flex" onClick={() => setStatusModals(0)}>
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </header>

                <section className="flex flex-col gap-1.5 w-80 h-80 overflow-y-auto scrollbar p-2">
                    {children}
                </section>
            </div>
        </div>
    );
};

export default ContainerModal;
