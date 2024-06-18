const pericias = [
    {
        pericia: "",
        atributo:  ""
    },
]

const origens = [
    {
        origin: [
            "Acadêmico",
            "Você é um pesquisador ou professor universitário",
        ],
        pericias: ["Ciências", "Investigação"],
        poder: [
            "Saber é poder",
            "Quando faz um teste usando Intelecto, você pode gastar 2 PD para receber +5 nesse teste",
        ],
    },

    {
        origin: [
            "Agente de Saúde",
            "Você é um profissional da saúde como um enfermeiro, farmacêutico, médico, treinado no atendimento e cuidado de pessoas.",
        ],
        pericias: ["Intuição", ""],
        poder: "",
    },
];

const sheet = {
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
    block:"",
    dodge: "",
}
