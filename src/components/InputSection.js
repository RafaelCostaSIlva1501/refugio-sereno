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
        attribute: "agi",
        info: "Você consegue fazer proezas acrobáticas.",
    },
    {
        expertiseName: "Adestramento",
        attribute: "pre",
        info: "Você sabe lidar com animais.",
    },
    {
        expertiseName: "Artes",
        attribute: "pre",
        info: "Você sabe se expressar com diversas formas de arte, como música, dança, escrita, pintura, atuação entre outras.",
    },
    {
        expertiseName: "Atletismo",
        attribute: "for",
        info: "Você pode realizar façanhas atléticas.",
    },
    {
        expertiseName: "Atualidades",
        attribute: "int",
        info: "Você é um conhecedor de assuntos gerais, como política, esporte e entretenimento, e pode responder dúvidas relativas a esses assuntos.",
    },
    {
        expertiseName: "Ciências",
        attribute: "int",
        info: "Você estudou diversos campos científicos, como matemática, física, química e biologia, e pode responder dúvidas relativas a esses assuntos.",
    },
    {
        expertiseName: "Crime",
        attribute: "agi",
        info: "Você sabe exercer atividades ilícitas",
    },
    {
        expertiseName: "Diplomacia",
        attribute: "pre",
        info: "Você convence pessoas com lábia e argumentação.",
    },
    {
        expertiseName: "Enganação",
        attribute: "pre",
        info: "Você manipula pessoas com blefes e trapaças.",
    },
    {
        expertiseName: "Fortitude",
        attribute: "vig",
        info: "Você usa esta perícia para testes de resistência contra efeitos que exigem vitalidade, como doenças e venenos.",
    },
    {
        expertiseName: "Furtividade",
        attribute: "agi",
        info: "Você sabe ser discreto e sorrateiro.",
    },
    {
        expertiseName: "Iniciativa",
        attribute: "agi",
        info: "Esta perícia determina sua velocidade de reação. ",
    },
    {
        expertiseName: "Intimidação",
        attribute: "pre",
        info: "Você pode assustar ou coagir outras pessoas.",
    },
    {
        expertiseName: "Intuição",
        attribute: "int",
        info: "Esta perícia mede sua empatia e “sexto sentido”.",
    },
    {
        expertiseName: "Investigação",
        attribute: "int",
        info: "Você sabe como descobrir pistas e informações.",
    },
    {
        expertiseName: "Luta",
        attribute: "for",
        info: "Você usa Luta para fazer ataques corpo a corpo.",
    },
    {
        expertiseName: "Medicina",
        attribute: "int",
        info: "Você sabe tratar ferimentos, doenças e venenos.",
    },
    {
        expertiseName: "Ocultismo",
        attribute: "int",
        info: "Você estudou o Paranormal",
    },
    {
        expertiseName: "Percepção",
        attribute: "pre",
        info: "Você nota coisas usando os sentidos.",
    },
    {
        expertiseName: "Pilotagem",
        attribute: "agi",
        info: "Você sabe operar veículos terrestres e aquáticos, como motos, carros e lanchas.",
    },
    {
        expertiseName: "Pontaria",
        attribute: "agi",
        info: "Você usa Pontaria para fazer ataques à distância.",
    },
    {
        expertiseName: "Profissão",
        attribute: "int",
        info: "Você sabe exercer uma profissão específica, como advogado, engenheiro, jornalista ou publicitário.",
    },
    {
        expertiseName: "Reflexos",
        attribute: "agi",
        info: "Você usa esta perícia para testes de resistência contra efeitos que exigem reação rápida, como armadilhas e explosões.",
    },
    {
        expertiseName: "Religião",
        attribute: "pre",
        info: "Você possui conhecimento sobre teologia e as diversas religiões do mundo.",
    },
    {
        expertiseName: "Sobrevivência",
        attribute: "int",
        info: "Você pode se guiar em regiões selvagens e evitar perigos da natureza.",
    },
    {
        expertiseName: "Tática",
        attribute: "int",
        info: "Você recebeu educação militar",
    },
    {
        expertiseName: "Tecnologia",
        attribute: "int",
        info: "Você possui conhecimentos avançados de eletrônica e informática.",
    },
    {
        expertiseName: "Vontade",
        attribute: "pre",
        info: "Você usa esta perícia para testes de resistência contra efeitos que exigem determinação, como intimidação e rituais que afetam a mente",
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
            </div>
        );
    } else if (sectionActive === 1) {
        return (
            <div className="flex flex-col justify-between gap-1.5 h-full">
                <TextareaForm text="História:" id="Ihistory" />

                <TextareaForm text="Personalidade:" id="Ipersonality" />

                <TextareaForm text="Aparência:" id="Iappearance" />
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
                </div>
            </>
        );
    } else if (sectionActive === 3) {
        return (
            <div className="grid grid-cols-2 gap-2.5 p-1">
                {expertises.map((element, index) => (
                    <Expertise key={index} expertise={element.expertiseName} info={element.info} />
                ))}
            </div>
        );
    }
};

export default InputSection;
