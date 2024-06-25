import React, { useContext, useState, useEffect } from "react";
import ModalContext from "../ModalContext";

import Progress from "./Progress";
import Tag from "./Tag";

const SectionStatus = () => {
    const { modalSheet, listNewCharacter, sheetIndex } =
        useContext(ModalContext);

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

                <div className="">
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
                </div>

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
                    <button className="flex flex-row gap-1 p-1 border hover:bg-white-500 hover:text-black transition">
                        <span className="material-symbols-outlined">add</span>

                        <span>Adicionar Efeito</span>
                    </button>

                    <div className="hidden justify-center items-center centralize border">
                        <div className="border"></div>
                    </div>
                </section>
            </div>
        );
    } else {
        return null;
    }
};

export default SectionStatus;
