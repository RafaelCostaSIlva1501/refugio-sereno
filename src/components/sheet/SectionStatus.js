import React, { useContext, useState, useEffect } from "react";
import ModalContext from "../ModalContext";

import Progress from "./Progress";
import conditions from "../conditions";

const SectionStatus = () => {
    const { modalSheet, listNewCharacter, sheetIndex } =
        useContext(ModalContext);

    const [conditionsModal, setConditionsModal] = useState(false);

    const openConditions = () => {
        setConditionsModal(true);
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
                                    <p
                                        className="p-1 bg-black-100 "
                                        key={index}
                                    >
                                        <span className="text-red-500 font-semibold">
                                            {element.condition[0]}: 
                                        </span> {element.condition[1]}
                                    </p>
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
                        <div className="scrollbar">{}</div>
                    </section>

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
                                    {conditions.map((element) => (
                                        <details className="flex flex-col w-full p-4 border border-white-500 rounded">
                                            <summary className="text-sm font-bold cursor-pointer">
                                                {element.condition[0]}
                                            </summary>

                                            <p className="mt-2 text-gray-500">
                                                {element.condition[1]}
                                            </p>

                                            <button className="flex justify-center items-center w-full mt-1 border hover:bg-white-500 hover:text-black-500 transition">
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

/*
{element.condition[0]}
<section className="flex flex-col bg-white-50">
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

{/*Título da sessão 
<section className="flex flex-col gap-1 bg-white-50">
<button
    className="flex flex-row justify-center gap-1 p-1 border hover:bg-white-500 hover:text-black transition"
    onClick={() => openEffects()}
>
    <span className="material-symbols-outlined">add</span>

    <span>Adicionar Efeito</span>
</button>

{effect === true && (
    <div className="flex justify-center items-center centralize px-5 backdrop-blur-sm">
        <div className="bg-black border rounded">
            <header className="flex justify-between w-full p-1 border-b">
                <button className="flex">
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

<div className="border border-white-500"></div>
</section>
*/
