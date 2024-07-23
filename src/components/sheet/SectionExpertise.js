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
                    <div className="flex flex-row items-center gap-1 border-b">
                        <img
                            src="./img/d20-attribute.png"
                            alt=""
                            className="w-6"
                        ></img>
                        <span className="">
                            AGI: {listNewCharacter[sheetIndex].attributes.agi}
                        </span>
                    </div>

                    <div className="flex flex-row items-center gap-1 border-b">
                        <img
                            src="./img/d20-attribute.png"
                            alt=""
                            className="w-6"
                        ></img>
                        <span className="">
                            INT: {listNewCharacter[sheetIndex].attributes.int}
                        </span>
                    </div>

                    <div className="flex flex-row items-center gap-1 border-b">
                        <img
                            src="./img/d20-attribute.png"
                            alt=""
                            className="w-6"
                        ></img>
                        <span className="">
                            VIG: {listNewCharacter[sheetIndex].attributes.vig}
                        </span>
                    </div>

                    <div className="flex flex-row items-center gap-1 border-b">
                        <img
                            src="./img/d20-attribute.png"
                            alt=""
                            className="w-6"
                        ></img>
                        <span className="">
                            PRE: {listNewCharacter[sheetIndex].attributes.pre}
                        </span>
                    </div>

                    <div className="flex flex-row items-center gap-1 border-b">
                        <img
                            src="./img/d20-attribute.png"
                            alt=""
                            className="w-6"
                        ></img>
                        <span className="">
                            FOR: {listNewCharacter[sheetIndex].attributes.for}
                        </span>
                    </div>
                </section>

                <section className="flex justify-center items-center h-full">
                    <div className="grid grid-cols-4 gap-1 justify-center items-center h-full">
                        {listNewCharacter[sheetIndex].expertises.map(
                            (element, i) => (
                                <div className="flex flex-col justify-center w-28 items-center ">
                                    <div className="flex flex-row justify-between items-center">
                                        <img
                                            src="./img/d20.png"
                                            alt=""
                                            className="w-7"
                                        ></img>
                                        <span>+{element.expertise[2]}</span>
                                    </div>

                                    <span className="text-xs">
                                        {element.expertise[0]}
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                </section>
            </>
        );
    } else {
        return null;
    }
};

export default SectionExpertise;
