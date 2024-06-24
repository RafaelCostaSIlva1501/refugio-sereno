import React, { useContext } from "react";
import ModalContext from "../ModalContext";
import TextareaForm from "../form/TextareaForm";
const SectionPerson = () => {
    const { modalSheet, listNewCharacter, sheetIndex } =
        useContext(ModalContext);

    if (modalSheet === 0) {
        const changeInfo = () => {
            
        }
        return (
            <>
                <h2 className="mb-2 bg-white-100 text-center text-xl">
                    INFORMAÇÕES
                </h2>

                <div className="flex flex-row justify-center items-center gap-1.5 w-full">

                    <div className="h-fit border">
                        <img
                            className="min-w-36 h-36"
                            src={listNewCharacter[sheetIndex].img}
                            alt="Foto do Personagem"
                        ></img>
                    </div>

                    <div className="flex flex-col gap-1.5 w-full ">
                        <span className="border-b">
                            Jogador: {listNewCharacter[sheetIndex].player}
                        </span>

                        <span className="border-b">
                            Personagem: {listNewCharacter[sheetIndex].character}
                        </span>

                        <span className="border-b">Idade: {listNewCharacter[sheetIndex].age}</span>

                        <span className="border-b">
                            Nacionalidade: {listNewCharacter[sheetIndex].nacionality}
                        </span>

                        <span className="border-b">
                            Origem: {listNewCharacter[sheetIndex].origin}
                        </span>
                    </div>
                </div>


                <div className="flex flex-col gap-1.5">
                    <TextareaForm
                        characterText={listNewCharacter[sheetIndex].history}
                        text="História:"
                    />

                    <TextareaForm
                        characterText={listNewCharacter[sheetIndex].personality}
                        text="Personalidade:"
                    />

                    <TextareaForm
                        characterText={listNewCharacter[sheetIndex].appearance}
                        text="Aparência:"
                    />
                </div>
            </>
        );
    } else {
        return null;
    }
};

export default SectionPerson;
