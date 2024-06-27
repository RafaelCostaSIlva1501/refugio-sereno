const conditions = [
    {
        condition: [
            "Abalado",
            "O personagem sofre -D20 em testes. Se ficar abalado novamente, em vez disso fica apavorado. Condição de medo.",
        ],
    },
    {
        condition: [
            "Agarrado",
            "O personagem fica desprevenido e imóvel, sofre -D20 em testes de ataque e só pode atacar com armas leves. Um personagem fazendo um ataque à distância contra um alvo envolvido na manobra agarrar tem 50% de chance de acertar o alvo errado. Condição de paralisia.",
        ],
    },
    {
        condition: [
            "Alquebrado",
            "O custo em pontos de esforço das habilidades e dos rituais do personagem aumenta em +1. Condição mental.",
        ],
    },
    {
        condition: [
            "Apavorado",
            "O personagem sofre -D20 em testes de perícia e deve fugir da fonte do medo da maneira mais eficiente possível (mas pode parar de fazê-lo assim que a perder de vista ou se afastar mais do que alcance médio). Se não puder, poderá agir, mas não poderá se aproximar voluntariamente da fonte do medo. Condição de medo.",
        ],
    },
    {
        condition: [
            "Asfixiado",
            "O personagem não pode respirar. Um personagem asfixiado pode prender seu fôlego por um total de rodadas igual ao seu valor de Vigor +1 e, a cada vez que sofre dano enquanto está nesta condição, reduz este valor em 1. Ao final de seu turno na última dessas rodadas, o personagem fica morrendo.",
        ],
    },
    {
        condition: [
            "Atordoado",
            "O personagem fica desprevenido e não pode fazer ações. Condição mental.",
        ],
    },
    {
        condition: [
            "Caído",
            "Deitado no chão. O personagem sofre -D20 em ataques corpo a corpo e seu deslocamento é reduzido a 1,5m. Além disso, sofre -5 na Defesa contra ataques corpo a corpo, mas recebe +5 na Defesa contra ataques à distância.",
        ],
    },
    {
        condition: [
            "Cego",
            "O personagem fica desprevenido e lento, não pode fazer testes de Percepção para observar e sofre -D20 em testes de perícias baseadas em Agilidade ou Força. Todos os alvos de seus ataques recebem camuflagem total. Você é considerado cego enquanto estiver em uma área de escuridão total, a menos que algo lhe permita perceber no escuro. Condição de sentidos.",
        ],
    },
    {
        condition: [
            "Confuso",
            "O personagem comporta-se de modo aleatório. Role 1d6 no início de seus turnos: 1) Movimenta-se em uma direção escolhida por uma rolagem de 1d8; 2-3) Não pode fazer ações e fica balbuciando incoerentemente; 4-5) Usa a arma que estiver empunhando para atacar o ser mais próximo, ou a si mesmo se estiver sozinho (nesse caso, apenas role o dano); 6) A condição termina e pode agir normalmente. Condição mental.",
        ],
    },
    {
        condition: [
            "Debilitado",
            "O personagem sofre -D20 em testes de Agilidade, Força e Vigor. Se o personagem ficar debilitado novamente, em vez disso fica inconsciente.",
        ],
    },
    {
        condition: [
            "Desprevenido",
            "Despreparado para reagir. O personagem sofre -5 na Defesa e -D20 Reflexos. Você fica desprevenido contra inimigos que não possa perceber.",
        ],
    },
    {
        condition: ["Doente", "Sob efeito de uma doença."],
    },
    {
        condition: [
            "Em Chamas",
            "O personagem está pegando fogo. No início de seus turnos, sofre 1d6 pontos de dano de fogo. O personagem pode gastar uma ação padrão para apagar o fogo com as mãos. Imersão em água também apaga as chamas.",
        ],
    },
    {
        condition: [
            "Enjoado",
            "O personagem só pode realizar uma ação padrão ou de movimento (não ambas) por rodada.",
        ],
    },
    {
        condition: [
            "Enredado",
            "O personagem fica lento, vulnerável e sofre -D20 em testes de ataque. Condição de paralisia.",
        ],
    },
    {
        condition: [
            "Envenenado",
            "O efeito desta condição varia de acordo com o veneno. Pode ser outra condição (por exemplo, fraco ou enjoado) ou dano recorrente (por exemplo, 1d12 pontos de dano de veneno por rodada). A descrição do veneno determina a duração dele (caso nada seja dito, a condição dura pela cena). Dano recorrente de condições envenenado sempre se acumula (mesmo se as condições ou fontes que as causam forem iguais).",
        ],
    },
    {
        condition: [
            "Esmorecido",
            "O personagem sofre -D20 em testes de Intelecto e Presença. Condição mental.",
        ],
    },
    {
        condition: [
            "Exausto",
            "O personagem fica debilitado, lento e vulnerável. Se ficar exausto novamente, em vez disso fica inconsciente. Condição de fadiga.",
        ],
    },
    {
        condition: [
            "Fascinado",
            "Com a atenção presa em alguma coisa. O personagem sofre -D20 em Percepção e não pode fazer ações, exceto observar aquilo que o fascinou. Qualquer ação hostil contra o personagem anula esta condição. Balançar um ser fascinado para tirá-lo desse estado gasta uma ação padrão. Condição mental.",
        ],
    },
    {
        condition: [
            "Fatigado",
            "O personagem fica fraco e vulnerável. Se o personagem ficar fatigado novamente, em vez disso fica exausto. Condição de fadiga.",
        ],
    },
    {
        condition: [
            "Fraco",
            "O personagem sofre -D20 em testes de Agilidade, Físico e Vigor. Se ficar fraco novamente, em vez disso fica debilitado.",
        ],
    },
    {
        condition: [
            "Frustrado",
            "O personagem sofre -D20 em testes de Intelecto e Presença. Se ficar frustrado novamente, em vez disso fica esmorecido. Condição mental.",
        ],
    },
    {
        condition: [
            "Imóvel",
            "Todas as formas de deslocamento do personagem são reduzidas a 0m. Condição de paralisia.",
        ],
    },
    {
        condition: [
            "Inconsciente",
            "O personagem fica indefeso e não pode fazer ações, incluindo reações. Balançar um ser para acordá-lo gasta uma ação padrão.",
        ],
    },
    {
        condition: [
            "Indefeso",
            "O personagem é considerado desprevenido, mas sofre -10 na Defesa, falha automaticamente em testes de Reflexos e pode sofrer golpes de misericórdia.",
        ],
    },
    {
        condition: [
            "Lento",
            "Todas as formas de deslocamento do personagem são reduzidas à metade (arredonde para baixo para o primeiro incremento de 1,5m) e ele não pode correr ou fazer investidas. Condição de paralisia.",
        ],
    },
    {
        condition: [
            "Machucado",
            "O personagem tem menos da metade de seus pontos de vida totais.",
        ],
    },
    {
        condition: [
            "Morrendo",
            "Com 0 pontos de vida. Um personagem morrendo fica inconsciente e, se terminar mais de três rodadas (não necessariamente consecutivas) morrendo na mesma cena, morre. Esta condição se encerra se o personagem voltar a ter pelo menos 1 PV.",
        ],
    },
    {
        condition: [
            "Ofuscado",
            "O personagem sofre -D20 em testes de ataque e de Percepção. Condição de sentidos.",
        ],
    },
    {
        condition: [
            "Paralisado",
            "O personagem fica imóvel e indefeso e só pode realizar ações puramente mentais. Condição de paralisia.",
        ],
    },
    {
        condition: [
            "Pasmo",
            "O personagem não pode fazer ações. Condição mental.",
        ],
    },
    {
        condition: [
            "Petrificado",
            "O personagem fica inconsciente e recebe resistência a dano 10.",
        ],
    },
    {
        condition: [
            "Sangrando",
            "Com um ferimento aberto. No início de seus turnos, o personagem deve fazer um teste de Vigor (DT 20). Se passar, estabiliza e remove essa condição. Se falhar, perde 1d6 pontos de vida e continua sangrando.",
        ],
    },
    {
        condition: [
            "Surdo",
            "O personagem não pode fazer testes de Percepção para ouvir e sofre -D20 em testes de Iniciativa. Além disso, é considerado em condição ruim para lançar rituais. Condição de sentidos.",
        ],
    },
    {
        condition: [
            "Surpreendido",
            "Não ciente de seus inimigos. O personagem fica desprevenido e não pode fazer ações.",
        ],
    },
    {
        condition: ["Vulnerável", "O personagem sofre -5 na Defesa."],
    },
];

export default conditions;
