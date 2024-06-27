import React, { useContext, useState, useEffect } from "react";
import ModalContext from "../ModalContext";

import Progress from "./Progress";
import Tag from "./Tag";
import conditions from "../conditions";

const SectionStatus = () => {
    const { modalSheet, listNewCharacter, sheetIndex } =
        useContext(ModalContext);

    const [effect, setEffect] = useState(false);

    const openEffects = () => {
        setEffect(true);
        console.log("Foi!");
    };

    const [characters, setCharacters] = useState(listNewCharacter);

    useEffect(() => {
        const storedCharacters = JSON.parse(localStorage.getItem("sheet"));
        if (storedCharacters) {
            setCharacters(storedCharacters);
        }
    }, []);

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

    if (modalSheet === 1) {
        return (
            <div className="flex flex-col">
                <div className="w-full bg-white-100">
                    <h2 className=" text-center text-xl">STATUS</h2>
                </div>

                <section className="">
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

                <hr className="my-1"></hr>

                <section className="flex flex-col">
                    <div className="flex flex-row justify-center items-center gap-1.5 flex-wrap p-1">
                        <Tag
                            title="Defesa:"
                            value={listNewCharacter[sheetIndex].defense}
                        />
                        <Tag
                            title="Bloqueio:"
                            value={listNewCharacter[sheetIndex].block}
                        />
                        <Tag
                            title="Esquiva:"
                            value={listNewCharacter[sheetIndex].dodge}
                        />
                    </div>
                </section>

                <hr className="my-1"></hr>

                <section>
                    <button
                        className="flex flex-row gap-1 p-1 border hover:bg-white-500 hover:text-black transition"
                        onClick={() => openEffects()}
                    >
                        <span className="material-symbols-outlined">add</span>

                        <span>Adicionar Efeito</span>
                    </button>

                    {effect === true && (
                        <div className="flex justify-center items-center centralize px-5 backdrop-blur-sm">
                            <div className="border rounded">
                                <header className="flex justify-between w-full p-1 border-b">
                                    <button
                                        className="flex"
                                       
                                    >
                                        <span className="material-symbols-outlined">
                                            info
                                        </span>
                                    </button>

                                    <h2>Condições</h2>
                                    <button
                                        className="flex"
                                        onClick={() => setEffect(false)}
                                    >
                                        <span className="material-symbols-outlined">
                                            close
                                        </span>
                                    </button>
                                </header>

                                <section className="flex flex-row justify-center flex-wrap gap-1.5 p-2">
                                    {conditions.map((element, index) => (
                                        <button
                                            className="p-0.5 bg-white-200 border border-dashed rounded"
                                            key={index}
                                        >
                                            {element.condition[0]}
                                        </button>
                                    ))}
                                </section>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        );
    } else {
        return null;
    }
};

export default SectionStatus;
