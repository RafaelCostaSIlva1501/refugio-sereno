import React, { createContext, useState } from "react";
import character from "./character";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    let listNewCharacter = JSON.parse(localStorage.getItem("sheet")) || [];

    const [modalON, setModalOn] = useState(0);

    const openModal = (num) => setModalOn(num);

    const [deletePopUp, setPopUpDelete] = useState(false);

    const openPopUpDelete = (value) => setPopUpDelete(value);

    const [deleteIndex, setDeleteIndex] = useState(null);

    const [modalSheet, setModalSheet] = useState(0);

    const [sheetIndex, setSheetIndex] = useState(null);

    const replaceModalSheet = (value) => setModalSheet(value);

    const [sectionActive, setSectionActive] = useState(0);

    //Informações básicas
    const addCharacter1 = () => {
        const Iplayer = document.getElementById("Iplayer");
        const Icharacter = document.getElementById("Icharacter");
        const Inacionality = document.getElementById("Inacionality");
        const Iage = document.getElementById("Iage");
        const Icampaign = document.getElementById("Icampaign");
        const Iimg = document.getElementById("Iimg");

        character.player = Iplayer.value;
        character.character = Icharacter.value;
        character.nacionality = Inacionality.value;
        character.age = Number(Iage.value);
        character.campaign = Icampaign.value;

        const file = Iimg.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                character.img = e.target.result;
            };
            reader.readAsDataURL(file);
        }

        console.log(character);

        setSectionActive(1);
    };

    //Informações de história
    const addCharacter2 = () => {
        const Ihistory = document.getElementById("Ihistory");
        const Ipersonality = document.getElementById("Ipersonality");
        const Iappearance = document.getElementById("Iappearance");

        character.history = Ihistory.value;
        character.personality = Ipersonality.value;
        character.appearance = Iappearance.value;

        console.log(character);

        setSectionActive(2);
    };

    //Origens
    const addCharacter3 = () => {
        const origin = document.querySelector('input[name="origin"]:checked');

        const Iorigin = origin.value;

        character.origin = Iorigin;

        setSectionActive(3);
    };

    //Atributos
    const addCharacter4 = () => {
        const AGI = document.getElementById("agi");
        const INT = document.getElementById("int");
        const VIG = document.getElementById("vig");
        const PRE = document.getElementById("pre");
        const FOR = document.getElementById("for");

        character.attributes.agi = Number(AGI.value);
        character.attributes.int = Number(INT.value);
        character.attributes.vig = Number(VIG.value);
        character.attributes.pre = Number(PRE.value);
        character.attributes.for = Number(FOR.value);

        character.pv[0] = Number(VIG.value) + 8
        character.pv[1] = Number(VIG.value) + 8
        
        character.pd[0] = Number(PRE.value) + 2
        character.pd[1] = Number(PRE.value) + 2
        setSectionActive(4);
    };

    //Perícias
    const addCharacter5 = () => {
        const Iacrobacias = document.getElementById("Iacrobacias");
        const Iadestramento = document.getElementById("Iadestramento");
        const Iartes = document.getElementById("Iartes");
        const Iatletismo = document.getElementById("Iatletismo");
        const Iatualidades = document.getElementById("Iatualidades");
        const Iciencias = document.getElementById("Iciencias");
        const Icrime = document.getElementById("Icrime");
        const Idiplomacia = document.getElementById("Idiplomacia");
        const Ienganacao = document.getElementById("Ienganacao");
        const Ifortitude = document.getElementById("Ifortitude");
        const Ifurtividade = document.getElementById("Ifurtividade");
        const Iiniciativa = document.getElementById("Iiniciativa");
        const Iintimidacao = document.getElementById("Iintimidacao");
        const Iintuicao = document.getElementById("Iintuicao");
        const Iinvestigacao = document.getElementById("Iinvestigacao");
        const Iluta = document.getElementById("Iluta");
        const Imedicina = document.getElementById("Imedicina");
        const Iocultismo = document.getElementById("Iocultismo");
        const Ipercepcao = document.getElementById("Ipercepcao");
        const Ipilotagem = document.getElementById("Ipilotagem");
        const Ipontaria = document.getElementById("Ipontaria");
        const Iprofissao = document.getElementById("Iprofissao");
        const Ireflexos = document.getElementById("Ireflexos");
        const Ireligiao = document.getElementById("Ireligiao");
        const Isobrevivencia = document.getElementById("Isobrevivencia");
        const Itatica = document.getElementById("Itatica");
        const Itecnologia = document.getElementById("Itecnologia");
        const Ivontade = document.getElementById("Ivontade");

        character.expertises.acrobacias = Iacrobacias.value;
        character.expertises.adestramento = Iadestramento.value;
        character.expertises.artes = Iartes.value;
        character.expertises.atletismo = Iatletismo.value;
        character.expertises.atualidades = Iatualidades.value;
        character.expertises.ciencias = Iciencias.value;
        character.expertises.crime = Icrime.value;
        character.expertises.diplomacia = Idiplomacia.value;
        character.expertises.enganacao = Ienganacao.value;
        character.expertises.fortitude = Ifortitude.value;
        character.expertises.furtividade = Ifurtividade.value;
        character.expertises.iniciativa = Iiniciativa.value;
        character.expertises.intimidacao = Iintimidacao.value;
        character.expertises.intuicao = Iintuicao.value;
        character.expertises.investigacao = Iinvestigacao.value;
        character.expertises.luta = Iluta.value;
        character.expertises.medicina = Imedicina.value;
        character.expertises.ocultismo = Iocultismo.value;
        character.expertises.percepcao = Ipercepcao.value;
        character.expertises.pilotagem = Ipilotagem.value;
        character.expertises.pontaria = Ipontaria.value;
        character.expertises.profissao = Iprofissao.value;
        character.expertises.reflexos = Ireflexos.value;
        character.expertises.religiao = Ireligiao.value;
        character.expertises.sobrevivencia = Isobrevivencia.value;
        character.expertises.tatica = Itatica.value;
        character.expertises.tecnologia = Itecnologia.value;
        character.expertises.vontade = Ivontade.value;

        listNewCharacter.push(character);

        localStorage.setItem("sheet", JSON.stringify(listNewCharacter));

        openModal(0);

        setSectionActive(0);
    };

    return (
        <ModalContext.Provider
            value={{
                listNewCharacter,
                modalON,
                openModal,
                deletePopUp,
                openPopUpDelete,
                deleteIndex,
                setDeleteIndex,
                modalSheet,
                replaceModalSheet,
                sheetIndex,
                setSheetIndex,
                sectionActive,
                setSectionActive,
                addCharacter1,
                addCharacter2,
                addCharacter3,
                addCharacter4,
                addCharacter5,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContext;
