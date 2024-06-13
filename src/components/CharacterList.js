import React, { useState, useEffect, useContext } from "react";
import ModalContext from "./ModalContext";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    const { openModal, setDeleteIndex, openPopUpDelete } = useContext(ModalContext);

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

    return (
        <div className="flex flex-col gap-1.5">
            {characters.length > 0 ? (
                characters.map((character, index) => (
                    <div
                        className="flex flex-row gap-1.5 p-5 bg-white-100 border-l-8 border-white-500 rounded-lg"
                        key={index}
                    >
                        <img
                            src=""
                            alt=""
                            className="w-28 h-28 border border-solid border-white-500"
                        ></img>

                        <div className="flex flex-col gap-1">
                            <h2 className="text-xl text-white-500">
                                {character.player}
                            </h2>
                            <p className="text-lg text-white-400">
                                {character.character}
                            </p>
                            <p className="text-white-300">
                                {character.campaign}
                            </p>

                            <div className="flex flex-row gap-2">
                                <button className="flex w-min hover:scale-110 active:scale-95 viewSheetBtn" onClick={() => openModal(2)}>
                                    <span className="material-symbols-outlined text-blue-500">
                                        visibility
                                    </span>
                                </button>

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
                <p className="text-center"> - Nenhum Personagem criado - </p>
            )}
        </div>
    );
};

export default CharacterList;
