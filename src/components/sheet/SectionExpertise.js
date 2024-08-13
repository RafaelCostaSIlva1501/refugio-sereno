import React, { useContext, useState } from "react";
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
        attribute: "",
        training: 0,
        bonus: 0,
        dice: [],
        largerDie: 0,
        result: 0,
    });

    const randomNumber = (attribute) => {
        const randomNums = [];

        for (let i = 0; i < attribute; i++) {
            const randomNum = Math.floor(Math.random() * 20) + 1;
            randomNums.push(randomNum);
        }

        return randomNums;
    };

    const rollDiceExpertise = (index) => {
        let expertise =
            listNewCharacter[sheetIndex].expertises[index].expertise[0];

        let attribute =
            listNewCharacter[sheetIndex].expertises[index].expertise[1];

        let training =
            listNewCharacter[sheetIndex].expertises[index].expertise[2];

        let bonus = listNewCharacter[sheetIndex].expertises[index].expertise[3];

        let attributeValue = listNewCharacter[sheetIndex].attributes[attribute];

        let diceNumbers = randomNumber(attributeValue).sort((a, b) => a - b);

        setDiceModalInfos({
            expertise: expertise,
            attribute: `(${attribute.toUpperCase()})`,
            training: training,
            bonus: bonus,
            dice: diceNumbers.join(", "),
            largerDie: diceNumbers[diceNumbers.length - 1],
            result:
                Number(diceNumbers[diceNumbers.length - 1]) +
                Number(training) +
                Number(bonus),
        });

        setRollDiceModal(true);
    };

    const rollDiceAttribute = (attribute, atr) => {
        let attributeValue = listNewCharacter[sheetIndex].attributes[atr];

        let diceNumbers = randomNumber(attributeValue).sort((a, b) => a - b);

        setDiceModalInfos({
            expertise: attribute,
            attribute: "",
            training: 0,
            bonus: 0,
            dice: diceNumbers.join(", "),
            largerDie: diceNumbers[diceNumbers.length - 1],
            result: 0,
        });

        setRollDiceModal(true);
    };

    if (modalSheet === 2) {
        return (
            <>
                {/*Título da sessão*/}
                <h2 className="mb-2 bg-white-100 text-center text-xl">
                    PERÍCIAS E ATRIBUTOS
                </h2>

                {/*Dados de atributos*/}
                <section className="flex flex-row justify-evenly">
                    {/*AGILIDADE*/}
                    <div className="flex flex-col justify-center w-24 items-center">
                        <div className="flex flex-row justify-between items-center">
                            <button
                                onClick={() =>
                                    rollDiceAttribute("Agilidade", "agi")
                                }
                            >
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

                    {/*INTELECTO*/}
                    <div className="flex flex-col justify-center w-24 items-center">
                        <div className="flex flex-row justify-between items-center">
                            <button
                                onClick={() =>
                                    rollDiceAttribute("Intelecto", "int")
                                }
                            >
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

                    {/*VIGOR*/}
                    <div className="flex flex-col justify-center w-24 items-center">
                        <div className="flex flex-row justify-between items-center">
                            <button
                                onClick={() =>
                                    rollDiceAttribute("Vigor", "vig")
                                }
                            >
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

                    {/*PRESENÇA*/}
                    <div className="flex flex-col justify-center w-24 items-center">
                        <div className="flex flex-row justify-between items-center">
                            <button
                                onClick={() =>
                                    rollDiceAttribute("Presença", "pre")
                                }
                            >
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

                    {/*FORÇA*/}
                    <div className="flex flex-col justify-center w-24 items-center">
                        <div className="flex flex-row justify-between items-center">
                            <button onClick={() =>
                                        rollDiceAttribute("Força", "for")
                                    }>
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
                                <div
                                    className="flex flex-col w-24 items-center"
                                    key={i}
                                >
                                    <div className="flex flex-row items-center">
                                        <button className="btn-dice">
                                            <img
                                                src="./img/d20.png"
                                                alt=""
                                                className="w-7"
                                                onClick={() =>
                                                    rollDiceExpertise(i)
                                                }
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

                {/*Modal de rolagem de dados*/}
                {rollDiceModal === true && (
                    <RollDiceModal
                        expertise={diceModalInfos.expertise}
                        attributeName={`${diceModalInfos.attribute}`}
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
