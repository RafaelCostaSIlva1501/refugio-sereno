import React, { useState } from "react";
/*import ModalContext from "./ModalContext";*/
import InputForm from "./InputForm";
import TextareaForm from "./TextareaForm";
import InputAttributes from "./InputAttributes";
import Expertise from "./Expertise";

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

const expertises = [
    {
        expertiseName: "Acrobacias",
        attribute: "",
        training: "",
    },

    {
        expertiseName: "Adestramento",
        attribute: "",
        trining: "",
    },

    {
        expertiseName: "Artes",
        attribute: "",
        trining: "",
    },

    {
        expertiseName: "Atletismo",
        attribute: "",
        trining: "",
    },
];

const InputSection = () => {
    /*const { openModal } = useContext(ModalContext);*/

    const [sectionActive, setSectionActive] = useState(3);

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

            console.log(character);

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
        } else if (index === 2) {
            const AGI = document.getElementById("agi");
            const INT = document.getElementById("int");
            const VIG = document.getElementById("vig");
            const PRE = document.getElementById("pre");
            const FOR = document.getElementById("for");

            character.attributes.agi = AGI.value;
            character.attributes.int = INT.value;
            character.attributes.vig = VIG.value;
            character.attributes.pre = PRE.value;
            character.attributes.for = FOR.value;

            console.log(character);

            setSectionActive(3);
        }
    };

    if (sectionActive === 0) {
        return (
            <div className="flex flex-col justify-between gap-1.5 h-full">
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
            <div className="flex flex-col justify-between gap-1.5 h-full">
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
            <>
                <div className="flex flex-col justify-between items-center gap-1.5 h-full">
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

                    <button
                        class="w-full p-1.5 border-2 border-solid border-white-500 rounded text-center hover:bg-white-500 hover:text-black transition active:scale-95"
                        onClick={() => addCharacter(2)}
                    >
                        Próximo
                    </button>
                </div>
            </>
        );
    } else if (sectionActive === 3) {
        return (
            <div className="grid grid-cols-4 gap-1.5">
                {expertises.map((element, index) => (
                    <Expertise key={index} expertise={element.expertiseName} />
                ))}
            </div>
        );
    }
};

export default InputSection;
