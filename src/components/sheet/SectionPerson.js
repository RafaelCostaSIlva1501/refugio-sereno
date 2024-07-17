import React, { useContext } from "react";
import ModalContext from "../ModalContext";
import TextareaForm from "../form/TextareaForm";
const SectionPerson = () => {
    const { modalSheet, listNewCharacter, sheetIndex, characters,
        setCharacters, } =
        useContext(ModalContext);

    const changeInfo = (outputId, elementArray) => {
        const textareaValue = document.getElementById(outputId).value;

        listNewCharacter[sheetIndex][elementArray] = textareaValue;

        localStorage.setItem("sheet", JSON.stringify(listNewCharacter));
    };

    const showImage = (event) => {
        const Iimg = document.getElementById("Iimg");
        const file = Iimg.files[0];
    
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                listNewCharacter[sheetIndex].img = e.target.result;
                
                // Atualiza o estado local
                setCharacters([...listNewCharacter]);
    
                // Atualiza o localStorage com o novo valor
                localStorage.setItem("sheet", JSON.stringify(listNewCharacter));
            };
            reader.readAsDataURL(file);
        }
    };
    

    if (modalSheet === 0) {
        return (
            <>
                <h2 className="mb-2 bg-white-100 text-center text-xl">
                    INFORMAÇÕES
                </h2>

                <div className="flex flex-row justify-center items-center gap-1.5 w-full text-sm">
                    <div className="flex flex-col items-center h-fit border">
                        <label htmlFor="Iimg" className="cursor-pointer">
                            <img
                                src={listNewCharacter[sheetIndex].img}
                                alt="Foto do Personagem"
                                className="min-w-36 h-36"
                            ></img>
                        </label>

                        <input
                            type="file"
                            id="Iimg"
                            accept="image/*"
                            className="hidden"
                            onChange={showImage}
                        ></input>
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
