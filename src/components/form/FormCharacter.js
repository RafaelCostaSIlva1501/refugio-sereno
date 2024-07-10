import React, { useContext, useEffect } from "react";
import ModalContext from "../ModalContext";
import InputForm from "./InputForm";
import TextareaForm from "./TextareaForm";
import InputAttributes from "./InputAttributes";
import InputExpertises from "./InputExpertise";
import InputOrigins from "./InputOrigins";
import expertises from "../expertises";
import origins from "../origins";

const FormCharacter = () => {
    const {
        modalON,
        openModal,
        sectionActive,
        addCharacter1,
        addCharacter2,
        addCharacter3,
        addCharacter4,
        addCharacter5,
        setExpertises,
    } = useContext(ModalContext);

    useEffect(() => {
        if (sectionActive === 4) {
            setExpertises();
        }
    }, [sectionActive, setExpertises]);

    if (modalON === 1) {
        return (
            <section className="flex flex-col justify-between h-full px-1">
                <header className="flex flex-row justify-end items-center p-1 border-b border-white-200">
                    <button
                        className="w-max flex justify-center items-center"
                        onClick={() => openModal(0)}
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </header>

                <main className="flex flex-col gap-1 grow h-96 py-1 overflow-y-auto scrollbar">
                    {sectionActive === 0 && (
                        <div className="flex flex-col gap-1">
                            <div className=" w-full bg-white-100">
                                <h2 className="text-center text-xl">
                                    INFORMAÇÕES
                                </h2>
                            </div>

                            <InputForm text="Jogador:" id="Iplayer" />
                            <InputForm text="Personagem:" id="Icharacter" />
                            <InputForm
                                text="Nacionalidade:"
                                id="Inacionality"
                            />
                            <InputForm text="Idade:" id="Iage" />
                            <InputForm text="Campanha:" id="Icampaign" />

                            <input
                                type="file"
                                id="Iimg"
                                accept="image/*"
                                className=""
                            ></input>
                        </div>
                    )}

                    {sectionActive === 1 && (
                        <div className="flex flex-col gap-1">
                            <div className=" w-full bg-white-100">
                                <h2 className="text-center text-xl">
                                    CARACTERÍSTICAS
                                </h2>
                            </div>

                            <TextareaForm text="História:" id="Ihistory" />

                            <TextareaForm
                                text="Personalidade:"
                                id="Ipersonality"
                            />

                            <TextareaForm text="Aparência:" id="Iappearance" />
                        </div>
                    )}

                    {sectionActive === 2 && (
                        <div className="flex flex-col h-full gap-1">
                            <div className=" w-full bg-white-100">
                                <h2 className="text-center text-xl">ORIGENS</h2>
                            </div>

                            {origins.map((element, index) => (
                                <InputOrigins
                                    key={index}
                                    originTitle={element.origin[0]}
                                    originInfo={element.origin[1]}
                                    expertises0={element.expertises[0]}
                                    expertises1={element.expertises[1]}
                                    powerTitle={element.power[0]}
                                    powerInfo={element.power[1]}
                                />
                            ))}
                        </div>
                    )}

                    {sectionActive === 3 && (
                        <>
                            <div className=" w-full bg-white-100">
                                <h2 className="text-center text-xl">
                                    ATRIBUTOS
                                </h2>
                            </div>
                            <div className="flex flex-column justify-center items-center w-full h-full relative">
                                <div className="w-96 h-96">
                                    <img
                                        src="./img/atributos-branco.png"
                                        alt="Atributos"
                                        className="w-96 h-96"
                                    ></img>

                                    <InputAttributes id="agi" />

                                    <InputAttributes id="int" />

                                    <InputAttributes id="vig" />

                                    <InputAttributes id="pre" />

                                    <InputAttributes id="for" />
                                </div>
                            </div>
                        </>
                    )}

                    {sectionActive === 4 && (
                        <>
                            <div className=" w-full bg-white-100">
                                <h2 className="text-center text-xl">
                                    PERÍCIAS
                                </h2>
                            </div>

                            <div className="grid grid-cols-2 gap-2.5 p-1">
                                {expertises.map((element, index) => (
                                    <InputExpertises
                                        key={index}
                                        expertise={element.expertiseName}
                                        info={element.info}
                                        id={element.id}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </main>

                <footer className="flex p-1 border-t border-white-200">
                    {sectionActive === 0 && (
                        <button
                            className="w-full p-1 border-2 border-solid border-white-500 rounded text-center hover:bg-white-500 hover:text-black transition active:scale-95"
                            onClick={() => addCharacter1()}
                        >
                            Próximo 1/5
                        </button>
                    )}

                    {sectionActive === 1 && (
                        <button
                            className="w-full p-1 border-2 border-solid border-white-500 rounded text-center hover:bg-white-500 hover:text-black transition active:scale-95"
                            onClick={() => addCharacter2()}
                        >
                            Próximo 2/5
                        </button>
                    )}

                    {sectionActive === 2 && (
                        <button
                            className="w-full p-1 border-2 border-solid border-white-500 rounded text-center hover:bg-white-500 hover:text-black transition active:scale-95"
                            onClick={() => addCharacter3()}
                        >
                            Próximo 3/5
                        </button>
                    )}

                    {sectionActive === 3 && (
                        <button
                            className="w-full p-1 border-2 border-solid border-white-500 rounded text-center hover:bg-white-500 hover:text-black transition active:scale-95"
                            onClick={() => addCharacter4()}
                        >
                            Próximo 4/5
                        </button>
                    )}

                    {sectionActive === 4 && (
                        <button
                            className="w-full p-1 border-2 border-solid border-white-500 rounded text-center hover:bg-white-500 hover:text-black transition active:scale-95"
                            onClick={() => addCharacter5()}
                        >
                            Criar Ficha
                        </button>
                    )}
                </footer>
            </section>
        );
    } else {
        return null;
    }
};

export default FormCharacter;
