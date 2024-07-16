import React, { useContext, useEffect } from "react";
import ModalContext from "../ModalContext";

import Progress from "./Progress";
import Tag from "../sheet/Tag";
import ContainerModal from "./ContainerModal";
import ResistencesInput from "./ResistenceInput";
import AddSectionStatus from "./AddSectionStatus";

import conditions from "../conditions";
import skills from "../skills";

const SectionStatus = () => {
    const {
        modalSheet,
        listNewCharacter,
        sheetIndex,
        characters,
        setCharacters,
        statusModals,
        setStatusModals,
    } = useContext(ModalContext);

    const { resistences } = listNewCharacter[sheetIndex];

    const changeBar = (bar, num, subOrAdd) => {
        // Cria uma cópia do estado atual
        const updatedCharacters = [...characters];
        
        //Adiciona ou subtrai o valor da barra
        if (subOrAdd === "sub") {
            updatedCharacters[sheetIndex][bar][1] -= num;
        } else if (subOrAdd === "add") {
            updatedCharacters[sheetIndex][bar][1] += num;
        }

        // Atualiza o estado local
        setCharacters(updatedCharacters);

        // Atualiza o localStorage com o novo valor
        localStorage.setItem("sheet", JSON.stringify(updatedCharacters));
    }

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
        setStatusModals(false);
    };

    useEffect(() => {
        const conditionsBtn = document.querySelectorAll(".conditions-btn");
        conditionsBtn.forEach((element, i) => {
            element.addEventListener("click", () => addCondition(i));
        });
    });

    const removeCondition = (index) => {
        const updatedCharacters = [...characters];

        updatedCharacters[sheetIndex].conditions.splice(index, 1);

        setCharacters(updatedCharacters);

        localStorage.setItem("sheet", JSON.stringify(updatedCharacters));
    };

    useEffect(() => {
        const removeConditionsBtn = document.querySelectorAll(
            ".remove-conditions-btn"
        );
        removeConditionsBtn.forEach((element, i) => {
            element.addEventListener("dblclick", () => removeCondition(i));
        });
    });

    if (modalSheet === 1) {
        return (
            <div className="flex flex-col h-full gap-1">
                {/*Título da sessão */}
                <div className=" w-full bg-white-100">
                    <h2 className="text-center text-xl">STATUS</h2>
                </div>

                <section className="grid grid-rows-3 grid-cols-4 gap-1 h-full">
                    {/*PV e PD (Pontos de vida e determinação)*/}
                    <section className="flex flex-col col-span-4 bg-white-50">
                        <Progress
                            name="Pontos de Vida"
                            maxValue={characters[sheetIndex].pv[0]}
                            value={characters[sheetIndex].pv[1]}
                            currentValue={characters[sheetIndex].pv[1]}
                            amount={characters[sheetIndex].pv[0]}
                            color="red"
                            sub5={() => changeBar("pv", 5, "sub")}
                            sub1={() => changeBar("pv", 1, "sub")}
                            add1={() => changeBar("pv", 1, "add")}
                            add5={() => changeBar("pv", 5, "add")}
                        />

                        <Progress
                            name="Pontos de Determinação"
                            maxValue={characters[sheetIndex].pd[0]}
                            value={characters[sheetIndex].pd[1]}
                            currentValue={characters[sheetIndex].pd[1]}
                            amount={characters[sheetIndex].pd[0]}
                            color="blue"
                            sub5={() => changeBar("pd", 5, "sub")}
                            sub1={() => changeBar("pd", 1, "sub")}
                            add1={() => changeBar("pd", 1, "add")}
                            add5={() => changeBar("pd", 5, "add")}
                        />
                    </section>

                    {/*Condições*/}
                    <section className="flex flex-col gap-1 col-span-2 overflow-y-auto p-1 bg-white-50">
                        {/*Condições*/}
                        <AddSectionStatus
                            title="CONDIÇÕES"
                            OnClick={() => setStatusModals(1)}
                        >
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
                        </AddSectionStatus>

                        {/*Modal para adicionar condições*/}
                        {statusModals === 1 && (
                            <ContainerModal title="Condições">
                                {conditions.map((element, index) => (
                                    <details className="flex flex-col w-full p-4 border border-white-500 rounded">
                                        <summary className="text-red-500 text-sm font-bold cursor-pointer">
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
                            </ContainerModal>
                        )}
                    </section>

                    {/*Resistências*/}
                    <section className="flex flex-col gap-1 col-span-2 overflow-y-auto p-1 bg-white-50">
                        {/*Resistências*/}
                        <AddSectionStatus
                            title="RESISTÊNCIAS"
                            OnClick={() => setStatusModals(2)}
                        >
                            {resistences.defense > 0 && (
                                <Tag
                                    title={"Defesa"}
                                    value={resistences.defense}
                                />
                            )}

                            {resistences.dodge > 0 && (
                                <Tag
                                    title={"Esquiva"}
                                    value={resistences.dodge}
                                />
                            )}

                            {resistences.block > 0 && (
                                <Tag
                                    title={"Bloqueio"}
                                    value={resistences.block}
                                />
                            )}

                            {resistences.physical > 0 && (
                                <Tag
                                    title={"Física"}
                                    value={resistences.physical}
                                />
                            )}

                            {resistences.ballistics > 0 && (
                                <Tag
                                    title={"Balística"}
                                    value={resistences.ballistics}
                                />
                            )}

                            {resistences.cut > 0 && (
                                <Tag title={"Corte"} value={resistences.cut} />
                            )}

                            {resistences.impact > 0 && (
                                <Tag
                                    title={"Impacto"}
                                    value={resistences.impact}
                                />
                            )}

                            {resistences.drilling > 0 && (
                                <Tag
                                    title={"Perfuração"}
                                    value={resistences.drilling}
                                />
                            )}

                            {resistences.electricity > 0 && (
                                <Tag
                                    title={"Eletrecidade"}
                                    value={resistences.electricity}
                                />
                            )}

                            {resistences.fire > 0 && (
                                <Tag title={"Fogo"} value={resistences.fire} />
                            )}

                            {resistences.cold > 0 && (
                                <Tag title={"Frio"} value={resistences.cold} />
                            )}

                            {resistences.chemical > 0 && (
                                <Tag
                                    title={"Química"}
                                    value={resistences.chemical}
                                />
                            )}
                        </AddSectionStatus>

                        {/*Modal para adicionar resistências*/}
                        {statusModals === 2 && (
                            <ContainerModal title="Resistências">
                                <ResistencesInput title="Defesa" id="defense" />
                                <ResistencesInput title="Esquiva" id="dodge" />
                                <ResistencesInput title="Bloqueio" id="block" />
                                <ResistencesInput title="Mental" id="mental" />
                                <ResistencesInput
                                    title="Física"
                                    id="physical"
                                />
                                <ResistencesInput
                                    title="Balística"
                                    id="ballistics"
                                />
                                <ResistencesInput title="Corte" id="cut" />
                                <ResistencesInput title="Impacto" id="impact" />
                                <ResistencesInput
                                    title="Perfuração"
                                    id="drilling"
                                />
                                <ResistencesInput
                                    title="Eletrecidade"
                                    id="electricity"
                                />
                                <ResistencesInput title="Fogo" id="fire" />
                                <ResistencesInput title="Frio" id="cold" />
                                <ResistencesInput
                                    title="Química"
                                    id="chemical"
                                />
                            </ContainerModal>
                        )}
                    </section>

                    {/*Habilidades*/}
                    <section className="flex flex-col gap-1 col-span-4 overflow-y-auto p-1 bg-white-50">
                        {/*Habilidades*/}
                        <AddSectionStatus
                            title="HABILIDADES"
                            OnClick={() => setStatusModals(3)}
                        ></AddSectionStatus>

                        {/*Modal para adicionar habilidades*/}
                        {statusModals === 3 && (
                            <ContainerModal title="Habilidades">
                                {statusModals === 3 && (
                                    <ContainerModal title="Habilidades">
                                        {skills.map((element, index) => (
                                            <details className="flex flex-col w-full p-4 border border-white-500 rounded">
                                                <summary className="text-blue-600 text-sm font-bold cursor-pointer">
                                                    {element.skill[0]}
                                                </summary>

                                                <p className="mt-2 text-gray-500">
                                                    {element.skill[1]}
                                                </p>

                                                <p className="mt-2 text-gray-500">
                                                    Pré-requisitos: {element.skill[2]}
                                                </p>

                                                <button className="flex justify-center items-center w-full mt-1 border hover:bg-white-500 hover:text-black-500 transition">
                                                    <span className="material-symbols-outlined">
                                                        Add
                                                    </span>
                                                    Adicionar
                                                </button>
                                            </details>
                                        ))}
                                    </ContainerModal>
                                )}
                            </ContainerModal>
                        )}
                    </section>
                </section>
            </div>
        );
    } else {
        return null;
    }
};

export default SectionStatus;
