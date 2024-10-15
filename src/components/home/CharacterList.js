import React, { useState, useEffect, useContext } from "react";
import ModalContext from "../ModalContext";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    const { openModal, setDeleteIndex, openPopUpDelete, setSheetIndex } =
        useContext(ModalContext);

    useEffect(() => {
        const storedCharacters =
            JSON.parse(localStorage.getItem("sheet")) || [];
        setCharacters(storedCharacters);
    }, []);

    useEffect(() => {
        const deleteSheetBtn = document.querySelectorAll(".deleteSheetBtn");

        deleteSheetBtn.forEach((element, index) => {
            element.addEventListener("click", () => {
                openPopUpDelete(true);
                setDeleteIndex(index);
            });
        });
    });

    useEffect(() => {
        const viewSheetBtn = document.querySelectorAll(".viewSheetBtn");

        viewSheetBtn.forEach((element, index) => {
            element.addEventListener("click", () => {
                openModal(2);
                setSheetIndex(index);
            });
        });
    });

    return (
        //Container com cards dos personagens
        <div className="flex flex-col gap-1.5">
            {/*Cria um card de seleção de personagem caso aja um personagem no local storage*/}
            {characters.length > 0 ? (
                characters.map((character, index) => (
                    //Card do personagem
                    <div
                        className="flex flex-row gap-1.5 p-5 bg-white-100 border-l-8 border-white-500 rounded-lg"
                        key={index}
                    >
                        {/*imagem do personagem*/}
                        <img
                            src={character.img}
                            alt="Foto do personagem"
                            className="w-28 h-28 border border-solid border-white-500"
                        ></img>

                        
                        <div className="flex flex-col gap-1">
                            {/*Nome do jogador*/}
                            <h2 className="text-xl text-white-500">
                                {character.player}
                            </h2>

                            {/*Nome do personagem*/}
                            <p className="text-lg text-white-400">
                                {character.character}
                            </p>

                            {/*Nome da campanha*/}
                            <p className="text-white-300">
                                {character.campaign}
                            </p>

                            <div className="flex flex-row gap-2">

                                {/*Botão para vizualizar a ficha do personagem*/}
                                <button className="flex w-min hover:scale-110 active:scale-95 viewSheetBtn">
                                    <span className="material-symbols-outlined text-blue-500">
                                        visibility
                                    </span>
                                </button>

                                {/*Botão para deletar ficha do personagem*/}
                                <button className="flex w-min hover:scale-110 active:scale-95 deleteSheetBtn">
                                    <span className="material-symbols-outlined text-red-500">
                                        delete
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                //Retorna caso não aja nenhum personagem criado 
                <p className="text-center"> - Nenhum Personagem criado - </p>
            )}
        </div>
    );
};

export default CharacterList;
