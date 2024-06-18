import React, { useState } from "react";
/*import ModalContext from "./ModalContext";*/
import InputForm from "./InputForm";
import TextareaForm from "./TextareaForm";

let character = {
    player: "",
    character: "",
    nacionality: "",
    age: 0,
    campaign: "",
    history: "",
    personality: "",
    appearance: "",
    attributes: {
        agi: 0,
        int: 0,
        vig: 0,
        pre: 0,
        for: 0,
    },
    vd: [0, 0],
    dp: [0, 0],
    passive: "",
    block: "",
    dodge: "",
};

const InputSection = () => {
    /*const { openModal } = useContext(ModalContext);*/

    const [sectionActive, setSectionActive] = useState(0);

    const addCharacter = (index) => {
        if (index === 0) {
            const Iplayer = document.getElementById("Iplayer");
            const Icharacter = document.getElementById("Icharacter");
            const Inacionality = document.getElementById("Inacionality");
            const Iage = document.getElementById("Iage");
            const Icampaign = document.getElementById("Icampaign");

            character.player = Iplayer.value;
            character.character = Icharacter.value;
            character.nacionality = Inacionality.value;
            character.age = Iage.value;
            character.campaign = Icampaign.value;

            setSectionActive(1);
        } else if (index === 1) {
            const Ihistory = document.getElementById("Ihistory");
            const Ipersonality = document.getElementById("Ipersonality");
            const Iappearance = document.getElementById("Iappearance");

            character.history = Ihistory.value;
            character.personality = Ipersonality.value;
            character.appearance = Iappearance.value;

            console.log(character);

            setSectionActive(2);
        }
    };

    /*const addCharacter3 = () => {
        
    }*/

    if (sectionActive === 0) {
        return (
            <div className="flex flex-col justify-between gap-1.5 h-full sectionForm">
                <InputForm text="Jogador:" id="Iplayer" />
                <InputForm text="Personagem:" id="Icharacter" />
                <InputForm text="Nacionalidade:" id="Inacionality" />
                <InputForm text="Idade:" id="Iage" />
                <InputForm text="Campanha:" id="Icampaign" />

                <button
                    class="p-1.5 border-2 border-solid border-white-500 rounded text-center hover:bg-white-500 hover:text-black transition active:scale-95"
                    onClick={() => addCharacter(0)}
                >
                    Próximo
                </button>
            </div>
        );
    } else if (sectionActive === 1) {
        return (
            <div className="flex flex-col justify-between gap-1.5 h-full sectionForm">
                <TextareaForm text="História:" id="Ihistory" />

                <TextareaForm text="Personalidade:" id="Ipersonality" />

                <TextareaForm text="Aparência:" id="Iappearance" />

                <button
                    class="p-1.5 border-2 border-solid border-white-500 rounded text-center hover:bg-white-500 hover:text-black transition active:scale-95"
                    onClick={() => addCharacter(1)}
                >
                    Próximo
                </button>
            </div>
        );
    } else if (sectionActive === 2) {
        return (
            <div className="flex flex-col justify-center items-center gap-1.5 h-full sectionForm">
                <img src="./img/atributos-branco.png" alt="Atributos" className="w-96 h-96"></img>

                <input type="number" className="absolute w-9 h-9 border-b bg-transparent outline-none text-center agi"></input>

                <input className="absolute w-9 h-9 border-b  bg-transparent outline-none text-center int"></input>

                <input className="absolute w-9 h-9  border-b border-red-100 bg-transparent outline-none text-center vig"></input>

                <input className="absolute w-9 h-9 border-b  bg-transparent outline-none text-center pre"></input>

                <input className="absolute w-9 h-9 border-b  bg-transparent outline-none text-center for"></input>

            </div>
        );
    }
};

export default InputSection;

/*const addCharacter = () => {
        const Iplayer = document.getElementById("Iplayer").value;
        const Icharacter = document.getElementById("Icharacter").value;
        const Inacionality = document.getElementById("Inacionality").value;
        const Iage = document.getElementById("Iage").value;
        const Icampaign = document.getElementById("Icampaign").value;
        const Ihistory = document.getElementById("Ihistory").value;
        const Ipersonality = document.getElementById("Ipersonality").value;
        const Iappearance = document.getElementById("Iappearance").value;

        let newCharacter = {
            player: Iplayer,
            character: Icharacter,
            campaign: Icampaign,
            nacionality: Inacionality,
            age: Iage,
            history: Ihistory,
            personality: Ipersonality,
            appearance: Iappearance,
        };

        listNewCharacter.push(newCharacter);

        localStorage.setItem("sheet", JSON.stringify(listNewCharacter));

        openModal(0);
    };*/
