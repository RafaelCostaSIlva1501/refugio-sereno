let character = {
    player: "",
    character: "",
    nacionality: "",
    age: 0,
    campaign: "",
    img: "",
    history: "",
    personality: "",
    appearance: "",
    origin: "",
    attributes: {
        agi: 0,
        int: 0,
        vig: 0,
        pre: 0,
        for: 0,
    },
    expertises: {
        acrobacias: 0,
        adestramento: 0,
        artes: 0,
        atletismo: 0,
        atualidades: 0,
        ciencias: 0,
        crime: 0,
        diplomacia: 0,
        enganacao: 0,
        fortitude: 0,
        furtividade: 0,
        iniciativa: 0,
        intimidacao: 0,
        intuicao: 0,
        investigacao: 0,
        luta: 0,
        medicina: 0,
        ocultismo: 0,
        percepcao: 0,
        pilotagem: 0,
        pontaria: 0,
        profissao: 0,
        reflexos: 0,
        religiao: 0,
        sobrevivencia: 0,
        tatica: 0,
        tecnologia: 0,
        vontade: 0,
    },
    pv: [0, 0],
    pd: [0, 0],
    defenses: [
        {
            defense: ["Defesa", 0],
        },

        {
            defense: ["Bloqueio", 0],
        },

        {
            defense: ["Esquiva", 0],
        },
    ],
    conditions: [
        {
            condition: [
                "Abalado",
                "O personagem sofre -D20 em testes. Se ficar abalado novamente, em vez disso fica apavorado. Condição de medo.",
            ],
        },

        {
            condition: [
                "Atordoado",
                "O personagem fica desprevenido e não pode fazer ações. Condição mental.",
            ],
        },
    ],
};

export default character;
