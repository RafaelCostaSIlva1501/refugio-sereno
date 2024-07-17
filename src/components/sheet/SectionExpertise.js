import React, { useContext } from "react";
import ModalContext from "../ModalContext";

const SectionExpertise = () => {
    const { modalSheet, listNewCharacter, sheetIndex } =
        useContext(ModalContext);

    if (modalSheet === 2) {
        return (
            <>
                <h2 className="mb-2 bg-white-100 text-center text-xl">
                    PERÍCIAS E ATRIBUTOS
                </h2>

                <section className="flex flex-row justify-evenly">
                    <span className="px-1 border rounded hover:bg-white-500 hover:text-black-500 cursor-pointer transition">
                        AGI: {listNewCharacter[sheetIndex].attributes.agi}
                    </span>

                    <span className="px-1 border rounded hover:bg-white-500 hover:text-black-500 cursor-pointer transition">
                        INT: {listNewCharacter[sheetIndex].attributes.int}
                    </span>

                    <span className="px-1 border rounded hover:bg-white-500 hover:text-black-500 cursor-pointer transition">
                        VIG: {listNewCharacter[sheetIndex].attributes.vig}
                    </span>

                    <span className="px-1 border rounded hover:bg-white-500 hover:text-black-500 cursor-pointer transition">
                        PRE: {listNewCharacter[sheetIndex].attributes.pre}
                    </span>

                    <span className="px-1 border rounded hover:bg-white-500 hover:text-black-500 cursor-pointer transition">
                        FOR: {listNewCharacter[sheetIndex].attributes.for}
                    </span>
                </section>

                <section className="grid grid-cols-4 justify-center items-center h-full">
                    {listNewCharacter[sheetIndex].expertises.map(
                        (element, i) => (
                            <div className="flex flex-col justify-center w-28 items-center">
                                <div className="flex flex-row justify-between items-center">
                                    <img
                                        src="./img/d20.png"
                                        alt=""
                                        className="w-8"
                                    ></img>
                                    <span>+{element.expertise[2]}</span>
                                </div>

                                <span>{element.expertise[0]}</span>
                            </div>
                        )
                    )}
                </section>
            </>
        );
    } else {
        return null;
    }
};

export default SectionExpertise;
