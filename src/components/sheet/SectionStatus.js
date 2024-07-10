import React, { useContext, useEffect, useState } from "react";
import ModalContext from "../ModalContext";

import Progress from "./Progress";
import Tag from "../sheet/Tag";
import conditions from "../conditions";

const SectionStatus = () => {
    const { modalSheet, listNewCharacter, sheetIndex } =
        useContext(ModalContext);

    const [conditionsModal, setConditionsModal] = useState(false);

    const openConditions = () => {
        setConditionsModal(true);
    };

    const [characters, setCharacters] = useState(listNewCharacter);

    // Função para subtrair valor de uma barra (pv ou pd)
    const subBar = (bar, num) => {
        // Cria uma cópia do estado atual
        const updatedCharacters = [...characters];

        // Subtrai o valor da barra correta
        updatedCharacters[sheetIndex][bar][1] -= num;

        // Atualiza o estado local
        setCharacters(updatedCharacters);

        // Atualiza o localStorage com o novo valor
        localStorage.setItem("sheet", JSON.stringify(updatedCharacters));
    };

    // Função para adicionar valor a uma barra (pv ou pd)
    const addBar = (bar, num) => {
        // Cria uma cópia do estado atual
        const updatedCharacters = [...characters];

        // Adiciona o valor à barra correta
        updatedCharacters[sheetIndex][bar][1] += num;

        // Atualiza o estado local
        setCharacters(updatedCharacters);

        // Atualiza o localStorage com o novo valor
        localStorage.setItem("sheet", JSON.stringify(updatedCharacters));
    };

    useEffect(() => {
        const conditionsBtn = document.querySelectorAll(".conditions-btn");
        conditionsBtn.forEach((element, i) => {
            element.addEventListener("click", () => addCondition(i));
        });
    });

    const addCondition = (index) => {
        const conditionsIndex = conditions[index];
        console.log(conditionsIndex);

        // Cria uma cópia do estado atual
        const updatedCharacters = [...characters];

        // Adiciona a nova condição ao array de condições
        updatedCharacters[sheetIndex].conditions.push(conditionsIndex);

        // Atualiza o estado local com as novas condições
        setCharacters(updatedCharacters);

        // Atualiza o localStorage com o novo estado
        localStorage.setItem("sheet", JSON.stringify(updatedCharacters));

        // Fecha o modal de condições, se necessário
        setConditionsModal(false);
    };

    useEffect(() => {
        const removeConditionsBtn = document.querySelectorAll(
            ".remove-conditions-btn"
        );
        removeConditionsBtn.forEach((element, i) => {
            element.addEventListener("dblclick", () => removeCondition(i));
        });
    });

    const removeCondition = (index) => {
        const updatedCharacters = [...characters];

        updatedCharacters[sheetIndex].conditions.splice(index, 1);

        setCharacters(updatedCharacters);

        localStorage.setItem("sheet", JSON.stringify(updatedCharacters));
    };

    if (modalSheet === 1) {
        return (
            <div className="flex flex-col h-full gap-1">
                {/*Título da sessão */}
                <div className=" w-full bg-white-100">
                    <h2 className="text-center text-xl">STATUS</h2>
                </div>

                {/*PV e PD (Pontos de vida e determinação)*/}
                <section className="flex flex-col flex-1 bg-white-50">
                    <Progress
                        name="Pontos de Vida"
                        maxValue={characters[sheetIndex].pv[0]}
                        value={characters[sheetIndex].pv[1]}
                        currentValue={characters[sheetIndex].pv[1]}
                        amount={characters[sheetIndex].pv[0]}
                        color="red"
                        sub5={() => subBar("pv", 5)}
                        sub1={() => subBar("pv", 1)}
                        add1={() => addBar("pv", 1)}
                        add5={() => addBar("pv", 5)}
                    />

                    <Progress
                        name="Pontos de Determinação"
                        maxValue={characters[sheetIndex].pd[0]}
                        value={characters[sheetIndex].pd[1]}
                        currentValue={characters[sheetIndex].pd[1]}
                        amount={characters[sheetIndex].pd[0]}
                        color="blue"
                        sub5={() => subBar("pd", 5)}
                        sub1={() => subBar("pd", 1)}
                        add1={() => addBar("pd", 1)}
                        add5={() => addBar("pd", 5)}
                    />
                </section>

                {/*Condições e defesas*/}
                <section className="flex flex-row flex-1 gap-1 min-h-0">
                    {/*Condições*/}
                    <section className="flex flex-col flex-1 gap-1 p-1 bg-white-50">
                        <header className="flex flex-row items-center gap-1.5 w-full p-1 bg-white-100">
                            <button
                                className="flex flex-row justify-center gap-1 border hover:bg-white-500 hover:text-black-500 transition"
                                onClick={() => openConditions()}
                            >
                                <span className="material-symbols-outlined">
                                    add
                                </span>
                            </button>

                            <h2 className="text-sm">CONDIÇÕES</h2>
                        </header>

                        <div className="flex flex-col gap-1 overflow-y-auto scrollbar">
                            {listNewCharacter[sheetIndex].conditions.map(
                                (element, index) => (
                                    <div className="p-1 bg-black-100 cursor-pointer remove-conditions-btn">
                                        <p key={index}>
                                            <span className="text-red-500 font-semibold">
                                                {element.condition[0]}:
                                            </span>{" "}
                                            {element.condition[1]}
                                        </p>

                                        <button className="">Apagar</button>
                                    </div>
                                )
                            )}
                        </div>
                    </section>

                    {/*Defesas*/}
                    <section className="flex flex-col flex-1 gap-1 overflow-y-auto p-1 bg-white-50">
                        <header className="flex flex-row items-center gap-1.5 w-full p-1 bg-white-100">
                            <button className="flex flex-row justify-center gap-1 border hover:bg-white-500 hover:text-black-500 transition">
                                <span className="material-symbols-outlined">
                                    add
                                </span>
                            </button>

                            <h2 className="text-sm">DEFESAS</h2>
                        </header>
                        <div className="flex flex-row flex-wrap gap-1 overflow-y-auto scrollbar">
                            {listNewCharacter[sheetIndex].defenses.map(
                                (element, index) => (
                                    <>
                                        <Tag
                                            key={index}
                                            title={element.defense[0]}
                                            value={element.defense[1]}
                                        />
                                    </>
                                )
                            )}
                        </div>
                    </section>

                    {/*Modal para adicionar condições*/}
                    {conditionsModal === true && (
                        <div className="flex justify-center items-center centralize px-5 backdrop-blur-sm">
                            <div className="bg-black-400 border rounded">
                                <header className="flex justify-between w-full p-1 border-b">
                                    <button className="flex">
                                        <span className="material-symbols-outlined">
                                            info
                                        </span>
                                    </button>

                                    <h2>Condições</h2>
                                    <button
                                        className="flex"
                                        onClick={() =>
                                            setConditionsModal(false)
                                        }
                                    >
                                        <span className="material-symbols-outlined">
                                            close
                                        </span>
                                    </button>
                                </header>

                                <section className="flex flex-col gap-1.5 w-80 h-80 overflow-y-auto scrollbar p-2">
                                    {conditions.map((element, index) => (
                                        <details className="flex flex-col w-full p-4 border border-white-500 rounded">
                                            <summary className="text-sm font-bold cursor-pointer">
                                                {element.condition[0]}
                                            </summary>

                                            <p className="mt-2 text-gray-500">
                                                {element.condition[1]}
                                            </p>

                                            <button className="flex justify-center items-center w-full mt-1 border hover:bg-white-500 hover:text-black-500 transition conditions-btn">
                                                <span className="material-symbols-outlined">
                                                    Add
                                                </span>
                                                Adicionar
                                            </button>
                                        </details>
                                    ))}
                                </section>
                            </div>
                        </div>
                    )}
                </section>

                {/*Habilidades*/}
                <section className="flex flex-1 shrink-0 gap-1">
                    <div className="flex-1 gap-1 p-1 bg-white-50">
                        <header className="flex flex-row items-center gap-1.5 w-full p-1 bg-white-100">
                            <button className="flex flex-row justify-center gap-1 border hover:bg-white-500 hover:text-black-500 transition">
                                <span className="material-symbols-outlined">
                                    add
                                </span>
                            </button>

                            <h2 className="text-sm">HABILIDADES</h2>
                        </header>
                        <div className="overflow-y-auto scrollbar"></div>
                    </div>
                </section>
            </div>
        );
    } else {
        return null;
    }
};

export default SectionStatus;
