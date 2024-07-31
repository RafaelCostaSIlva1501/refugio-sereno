import React, { useContext, useEffect, useState } from "react";
import ModalContext from "../ModalContext";

import RollDiceModal from "./RollDiceModal";

const SectionExpertise = () => {
    const {
        modalSheet,
        listNewCharacter,
        sheetIndex,
        rollDiceModal,
        setRollDiceModal,
    } = useContext(ModalContext);

    const [diceModalInfos, setDiceModalInfos] = useState({
        expertise: "",
        attribute: ["", 0],
        training: 0,
        bonus: 0,
        dice: [],
        largerDie: 0,
        result: 0,
    });

    /*
    const randomNums = [];

    const randomNumber = (attribute) => {
        for (let i = 0; i < attribute; i++) {
            const randomNum = Math.floor(Math.random() * 20) + 1;
            randomNums.push(randomNum);
        }

        return randomNums;
    };
    */

    const rollDice = (expertise, attribute, training, bonus) => {
        diceModalInfos.expertise = expertise;
        diceModalInfos.attribute = attribute.toUpperCase();
        diceModalInfos.training = training;
        diceModalInfos.bonus = bonus;

        console.log(
            `${diceModalInfos.expertise} - ${diceModalInfos.attribute} - ${diceModalInfos.training} - ${diceModalInfos.bonus}`
        );
    };

    useEffect(() => {
        const btnDice = document.querySelectorAll(".btn-dice");

        const handleDiceClick = (index) => {
            let expertise =
                listNewCharacter[sheetIndex].expertises[index].expertise[0];
            let attribute =
                listNewCharacter[sheetIndex].expertises[index].expertise[1];
            let training =
                listNewCharacter[sheetIndex].expertises[index].expertise[2];
            let bonus =
                listNewCharacter[sheetIndex].expertises[index].expertise[3];

            rollDice(expertise, attribute, training, bonus);
            setRollDiceModal(true);
        };

        btnDice.forEach((element, index) => {
            element.addEventListener("click", () => handleDiceClick(index));
        });

        return () => {
            btnDice.forEach((element, index) => {
                element.removeEventListener("click", () =>
                    handleDiceClick(index)
                );
            });
        };
    });

    if (modalSheet === 2) {
        return (
            <>
                {/*Título da sessão*/}
                <h2 className="mb-2 bg-white-100 text-center text-xl">
                    PERÍCIAS E ATRIBUTOS
                </h2>

                {/*Dados de atributos*/}
                <section className="flex flex-row justify-evenly">
                    <div className="flex flex-col justify-center w-24 items-center">
                        <div className="flex flex-row justify-between items-center">
                            <button>
                                <img
                                    src="./img/d20-attribute.png"
                                    alt=""
                                    className="w-7"
                                ></img>
                            </button>

                            <span>
                                {listNewCharacter[sheetIndex].attributes.agi}
                            </span>
                        </div>

                        <span className="text-xs">Agilidade</span>
                    </div>

                    <div className="flex flex-col justify-center w-24 items-center">
                        <div className="flex flex-row justify-between items-center">
                            <button>
                                <img
                                    src="./img/d20-attribute.png"
                                    alt=""
                                    className="w-7"
                                ></img>
                            </button>
                            <span>
                                {listNewCharacter[sheetIndex].attributes.int}
                            </span>
                        </div>

                        <span className="text-xs">Intelecto</span>
                    </div>

                    <div className="flex flex-col justify-center w-24 items-center">
                        <div className="flex flex-row justify-between items-center">
                            <button>
                                <img
                                    src="./img/d20-attribute.png"
                                    alt=""
                                    className="w-7"
                                ></img>
                            </button>
                            <span>
                                {listNewCharacter[sheetIndex].attributes.vig}
                            </span>
                        </div>

                        <span className="text-xs">Vigor</span>
                    </div>

                    <div className="flex flex-col justify-center w-24 items-center">
                        <div className="flex flex-row justify-between items-center">
                            <button>
                                <img
                                    src="./img/d20-attribute.png"
                                    alt=""
                                    className="w-7"
                                ></img>
                            </button>
                            <span>
                                {listNewCharacter[sheetIndex].attributes.pre}
                            </span>
                        </div>

                        <span className="text-xs">Presença</span>
                    </div>

                    <div className="flex flex-col justify-center w-24 items-center">
                        <div className="flex flex-row justify-between items-center">
                            <button>
                                <img
                                    src="./img/d20-attribute.png"
                                    alt=""
                                    className="w-7"
                                ></img>
                            </button>
                            <span>
                                {listNewCharacter[sheetIndex].attributes.for}
                            </span>
                        </div>

                        <span className="text-xs">Força</span>
                    </div>
                </section>

                {/*Dados de perícias*/}
                <section className="flex justify-center items-center h-full">
                    <div className="flex flex-row flex-wrap gap-1 justify-center items-center h-full">
                        {listNewCharacter[sheetIndex].expertises.map(
                            (element, i) => (
                                <div className="flex flex-col w-24 items-center">
                                    <div className="flex flex-row items-center">
                                        <button className="btn-dice">
                                            <img
                                                src="./img/d20.png"
                                                alt=""
                                                className="w-7"
                                            ></img>
                                        </button>

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

                {rollDiceModal === true && (
                    <RollDiceModal
                        expertise={diceModalInfos.expertise}
                        attributeName={diceModalInfos.attribute}
                        training={diceModalInfos.training}
                        bonus={diceModalInfos.bonus}
                        largerDie={diceModalInfos.largerDie}
                        dice={diceModalInfos.dice}
                        result={diceModalInfos.result}
                    />
                )}
            </>
        );
    } else {
        return null;
    }
};

export default SectionExpertise;
