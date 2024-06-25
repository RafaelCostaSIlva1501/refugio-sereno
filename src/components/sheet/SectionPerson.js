import React, { useContext } from "react";
import ModalContext from "../ModalContext";
import TextareaForm from "../form/TextareaForm";
const SectionPerson = () => {
    const { modalSheet, listNewCharacter, sheetIndex } =
        useContext(ModalContext);

    const storedCharacters = JSON.parse(localStorage.getItem("sheet"));

    const changeInfo = (outputId, elementArray) => {
        const textareaValue = document.getElementById(outputId).value;

        storedCharacters[sheetIndex][elementArray] = textareaValue;

        localStorage.setItem("sheet", JSON.stringify(storedCharacters));
    };

    if (modalSheet === 0) {
        return (
            <>
                <h2 className="mb-2 bg-white-100 text-center text-xl">
                    INFORMAÇÕES
                </h2>

                <div className="flex flex-row justify-center items-center gap-1.5 w-full text-sm">
                    <div className="h-fit border">
                        <img
                            className="min-w-36 h-36"
                            src={listNewCharacter[sheetIndex].img}
                            alt="Foto do Personagem"
                        ></img>
                    </div>

                    <div className="flex flex-col justify-between w-full h-36">
                        <span className="border-b border-white-300">
                            Jogador: {listNewCharacter[sheetIndex].player}
                        </span>

                        <span className="border-b border-white-300">
                            Personagem: {listNewCharacter[sheetIndex].character}
                        </span>

                        <span className="border-b border-white-300">
                            Idade: {listNewCharacter[sheetIndex].age}
                        </span>

                        <span className="border-b border-white-300">
                            Nacionalidade:{" "}
                            {listNewCharacter[sheetIndex].nacionality}
                        </span>

                        <span className="border-b border-white-300">
                            Origem: {listNewCharacter[sheetIndex].origin}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <TextareaForm
                        characterText={listNewCharacter[sheetIndex].history}
                        text="História:"
                        id="Ohistory"
                        onInput={() => changeInfo("Ohistory", "history")}
                    />

                    <TextareaForm
                        characterText={listNewCharacter[sheetIndex].personality}
                        text="Personalidade:"
                        id="Opersonality"
                        onInput={() =>
                            changeInfo("Opersonality", "personality")
                        }
                    />

                    <TextareaForm
                        characterText={listNewCharacter[sheetIndex].appearance}
                        text="Aparência:"
                        id="Oappearance"
                        onInput={() => changeInfo("Oappearance", "appearance")}
                    />
                </div>
            </>
        );
    } else {
        return null;
    }
};

export default SectionPerson;
