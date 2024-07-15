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

    const [statusModals, setStatusModals] = useState(0);

    const [characters, setCharacters] = useState(listNewCharacter);

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

        character.pv[0] = Number(VIG.value) + 8;
        character.pv[1] = Number(VIG.value) + 8;

        character.pd[0] = Number(PRE.value) + 2;
        character.pd[1] = Number(PRE.value) + 2;

        character.resistences.defense = Number(AGI.value) + 10;

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

        character.resistences.block = Ifortitude.value;

        character.resistences.dodge = Ireflexos.value;

        listNewCharacter.push(character);

        localStorage.setItem("sheet", JSON.stringify(listNewCharacter));

        openModal(0);

        setSectionActive(0);
    };

    //Benefícios da origem
    const setExpertises = () => {
        let origins = character.origin;

        switch (origins) {
            case "Acadêmico":
                document.getElementById("Iciencias").value = 5;
                document.getElementById("Iinvestigacao").value = 5;
                break;
            case "Agente de Saúde":
                document.getElementById("Iintuicao").value = 5;
                document.getElementById("Imedicina").value = 5;
                break;
            case "Amnésico":
                // Nenhuma perícia específica definida
                break;
            case "Artista":
                document.getElementById("Iartes").value = 5;
                document.getElementById("Ienganacao").value = 5;
                break;
            case "Atleta":
                document.getElementById("Iacrobacia").value = 5;
                document.getElementById("Iatletismo").value = 5;
                break;
            case "Chef":
                document.getElementById("Ifortitude").value = 5;
                document.getElementById("Iprofissao").value = 5;
                break;
            case "Criminoso":
                document.getElementById("Icrime").value = 5;
                document.getElementById("Ifurtividade").value = 5;
                break;
            case "Cultista Arrependido":
                document.getElementById("Iocultismo").value = 5;
                document.getElementById("Ireligiao").value = 5;
                break;
            case "Desgarrado":
                document.getElementById("Ifortitude").value = 5;
                document.getElementById("Isobrevivencia").value = 5;
                break;
            case "Engenheiro":
                document.getElementById("Iprofissao").value = 5;
                document.getElementById("Itecnologia").value = 5;
                break;
            case "Executivo":
                document.getElementById("Idiplomacia").value = 5;
                document.getElementById("Iprofissao").value = 5;
                break;
            case "Investigador":
                document.getElementById("Iinvestigacao").value = 5;
                document.getElementById("Ipercepcao").value = 5;
                break;
            case "Lutador":
                document.getElementById("Iluta").value = 5;
                document.getElementById("Ireflexos").value = 5;
                break;
            case "Magnata":
                document.getElementById("Idiplomacia").value = 5;
                document.getElementById("Ipilotagem").value = 5;
                break;
            case "Mercenário":
                document.getElementById("Iiniciativa").value = 5;
                document.getElementById("Iintimidacao").value = 5;
                break;
            case "Militar":
                document.getElementById("Ipontaria").value = 5;
                document.getElementById("Itatica").value = 5;
                break;
            case "Operário":
                document.getElementById("Ifortitude").value = 5;
                document.getElementById("Iprofissao").value = 5;
                break;
            case "Policial":
                document.getElementById("Ipercepcao").value = 5;
                document.getElementById("Ipontaria").value = 5;
                break;
            case "Religioso":
                document.getElementById("Ireligiao").value = 5;
                document.getElementById("Ivontade").value = 5;
                break;
            case "Servidor Público":
                document.getElementById("Iintuicao").value = 5;
                document.getElementById("Ivontade").value = 5;
                break;
            case "Teórico da Conspiração":
                document.getElementById("Iinvestigacao").value = 5;
                document.getElementById("Iocultismo").value = 5;
                break;
            case "T.I.":
                document.getElementById("Iinvestigacao").value = 5;
                document.getElementById("Itecnologia").value = 5;
                break;
            case "Trabalhador Rural":
                document.getElementById("Iadestramento").value = 5;
                document.getElementById("Isobrevivencia").value = 5;
                break;
            case "Trambiqueiro":
                document.getElementById("Icrime").value = 5;
                document.getElementById("Ienganacao").value = 5;
                break;
            case "Universitário":
                document.getElementById("Iatualidades").value = 5;
                document.getElementById("Iinvestigacao").value = 5;
                break;
            case "Vítima":
                document.getElementById("Ireflexos").value = 5;
                document.getElementById("Ivontade").value = 5;
                break;
            case "Amigo dos Animais":
                document.getElementById("Iadestramento").value = 5;
                document.getElementById("Ipercepcao").value = 5;
                break;
            case "Astronauta":
                document.getElementById("Iciencias").value = 5;
                document.getElementById("Ifortitude").value = 5;
                break;
            case "Chef do Outro Lado":
                document.getElementById("Iocultismo").value = 5;
                document.getElementById("Iprofissao").value = 5;
                break;
            case "Colegial":
                document.getElementById("Iatualidades").value = 5;
                document.getElementById("Itecnologia").value = 5;
                break;
            case "Cosplayer":
                document.getElementById("Iartes").value = 5;
                document.getElementById("Ivontade").value = 5;
                break;
            case "Diplomata":
                document.getElementById("Iatualidades").value = 5;
                document.getElementById("Idiplomacia").value = 5;
                break;
            case "Explorador":
                document.getElementById("Ifortitude").value = 5;
                document.getElementById("Isobrevivencia").value = 5;
                break;
            case "Experimento":
                document.getElementById("Iatletismo").value = 5;
                document.getElementById("Ifortitude").value = 5;
                break;
            case "Fanático por Criaturas":
                document.getElementById("Iinvestigacao").value = 5;
                document.getElementById("Iocultismo").value = 5;
                break;
            case "Fotógrafo":
                document.getElementById("Iartes").value = 5;
                document.getElementById("Ipercepcao").value = 5;
                break;
            case "Inventor Paranormal":
                document.getElementById("Iprofissao").value = 5;
                document.getElementById("Ivontade").value = 5;
                break;
            case "Jovem Mistíco":
                document.getElementById("Iocultismo").value = 5;
                document.getElementById("Ireligiao").value = 5;
                break;
            case "Legista do Turno da Noite":
                document.getElementById("Iciencias").value = 5;
                document.getElementById("Imedicina").value = 5;
                break;
            case "Mateiro":
                document.getElementById("Ipercepcao").value = 5;
                document.getElementById("Isobrevivencia").value = 5;
                break;
            case "Mergulhador":
                document.getElementById("Iatletismo").value = 5;
                document.getElementById("Ifortitude").value = 5;
                break;
            case "Motorista":
                document.getElementById("Ipilotagem").value = 5;
                document.getElementById("Ireflexos").value = 5;
                break;
            case "Nerd Entusiasta":
                document.getElementById("Iciencias").value = 5;
                document.getElementById("Itecnologia").value = 5;
                break;
            case "Psicólogo":
                document.getElementById("Iintuição").value = 5;
                document.getElementById("Iprofissao").value = 5;
                break;
            case "Profetizado":
                document.getElementById("Ivontade").value = 5;
                document.getElementById("IoutraPericia").value = 5;
                break;
            case "Repórter Investigativo":
                document.getElementById("Iatualidades").value = 5;
                document.getElementById("Iinvestigacao").value = 5;
                break;
            case "Cientista Forense":
                document.getElementById("Iciencias").value = 5;
                document.getElementById("Iinvestigacao").value = 5;
                break;
            case "Dublê":
                document.getElementById("Ipilotagem").value = 5;
                document.getElementById("Ireflexos").value = 5;
                break;
            default:
                // Caso a origem não seja reconhecida, pode ser tratado aqui
                break;
        }
    };

    //Adiciona resistências
    const changeResistence = (resistenceName, subOrAdd) => {
        const updatedCharacters = [...characters];

        if (subOrAdd === "sub") {
            updatedCharacters[sheetIndex].resistences[resistenceName] -= 1;
        } else if (subOrAdd === "add") {
            updatedCharacters[sheetIndex].resistences[resistenceName] += 1;
        }

        setCharacters(updatedCharacters);

        localStorage.setItem("sheet", JSON.stringify(updatedCharacters));
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
                setExpertises,
                statusModals,
                setStatusModals,
                changeResistence,
                characters,
                setCharacters,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContext;
