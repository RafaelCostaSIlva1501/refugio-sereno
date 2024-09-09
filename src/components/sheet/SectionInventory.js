import React, { useContext } from "react";
import ModalContext from "../ModalContext";

const SectionInventory = () => {
    const { modalSheet } = useContext(ModalContext);

    const boxShadow = {
        boxShadow: "inset 0 0 20px #0000006e",
        padding: "1px",
        backgroundColor: "#333",
        borderRadius: "3px",
    };

    if (modalSheet === 3) {
        return (
            <div className="flex flex-col gap-1 h-full">
                <h2 className=" bg-white-100 text-center text-xl">
                    INVENTÁRIO
                </h2>

                <section className="flex-1 p-1 bg-white-50">
                    <header className="flex flex-row items-center gap-1.5 w-full p-1 bg-white-100">
                        <button className="flex flex-row justify-center gap-1 border hover:bg-white-500 hover:text-black-500 transition">
                            <span className="material-symbols-outlined">
                                add
                            </span>
                        </button>
                        <h2 className="text-sm">ADICIONAR ITEM</h2>
                    </header>
                    <main className="flex flex-row flex-wrap gap-1 py-1">
                        <div style={boxShadow} className="w-12 h-12 shadow-inner cursor-pointer hover:border-white-100">
                            <img
                                src="./img/items-icons/knife.png"
                                alt="sus"
                            ></img>
                        </div>
                    </main>
                </section>

                <section className="flex-1 p-1 bg-white-50"></section>
            </div>
        );
    } else {
        return null;
    }
};

export default SectionInventory;