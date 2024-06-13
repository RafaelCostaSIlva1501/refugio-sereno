import React, { useContext } from "react";
import ModalContext from "./ModalContext";

import InputForm from "./InputForm";

const FormCharacter = () => {
    const { modalON, openModal } = useContext(ModalContext);

    const addCharacter = () => {
        const Iplayer = document.getElementById("Iplayer").value;
        const Icharacter = document.getElementById("Icharacter").value;
        const Icampaign = document.getElementById("Icampaign").value;

        let listNewCharacter = JSON.parse(localStorage.getItem("sheet")) || [];

        let newCharacter = {
            player: Iplayer,
            character: Icharacter,
            campaign: Icampaign,
        };

        listNewCharacter.push(newCharacter);

        localStorage.setItem("sheet", JSON.stringify(listNewCharacter));

        openModal(0);
    };

    if (modalON === 1) {
        return (
            <section className="centralize flex flex-col gap-2 p-1.5 bg-black">
                <button
                    className="w-max flex justify-center items-center self-end"
                    onClick={() => openModal(0)}
                >
                    <span className="material-symbols-outlined"> close </span>
                </button>

                <InputForm text="Jogador:" id="Iplayer" />

                <InputForm text="Personagem:" id="Icharacter" />

                <InputForm text="Campanha:" id="Icampaign" />

                <button
                    className="p-1.5 border-2 border-solid border-white-500 rounded text-center hover:bg-white-500 hover:text-black transition active:scale-95"
                    onClick={addCharacter}
                >
                    Adicionar Personagem
                </button>
            </section>
        );
    } else {
        return null;
    }
};

export default FormCharacter;
