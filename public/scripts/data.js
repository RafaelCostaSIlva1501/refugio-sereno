export const levels = [
  {
    level: "I",
    pv: 8,
    pd: 8,
    expertise: 1,
    power: 2,
    attributes: 4,
    requirements: ["Nenhum", 0],
  },

  {
    level: "II",
    pv: 10,
    pd: 9,
    expertise: 2,
    power: 2,
    attributes: 4,
    requirements: ["Ter 17 anos ou mais.", 17],
  },

  {
    level: "III",
    pv: 10,
    pd: 10,
    expertise: 2,
    power: 2,
    attributes: 5,
    requirements: ["Ter 24 anos ou mais.", 24],
  },

  {
    level: "IV",
    pv: 11,
    pd: 11,
    expertise: 3,
    power: 3,
    attributes: 6,
    requirements: ["Ter 30 anos ou mais.", 30],
  },
];

export const origins = [
  {
    origin: [
      "Acadêmico",
      "Você era um pesquisador ou professor universitário. De forma proposital ou não, seus estudos tocaram em assuntos misteriosos e chamaram a atenção da Ordo Realitas.",
    ],

    expertises: ["Ciências", "Investigação"],

    power: [
      "Saber é Poder",
      "Quando faz um teste usando Intelecto, você pode gastar 2 PE para receber +5 nesse teste.",
    ],
  },

  {
    origin: [
      "Agente de Saúde",
      "Você era um profissional da saúde como um enfermeiro, farmacêutico, médico, psicólogo ou socorrista, treinado no atendimento e cuidado de pessoas. Você pode ter sido surpreendido por um evento paranormal durante o trabalho ou mesmo cuidado de um agente da Ordem em uma emergência, que ficou surpreso com o quão bem você lidou com a situação.",
    ],
    expertises: ["Intuição", "Medicina"],
    power: [
      "Técnica Medicinal",
      "Sempre que cura um personagem, você adiciona seu Intelecto no total de PV curados.",
    ],
  },

  {
    origin: [
      "Amnésico",
      "Você perdeu a maior parte da memória. Sabe apenas o próprio nome, ou nem isso. Sua amnésia pode ser resultado de um trauma paranormal ou mesmo de um ritual. Talvez você tenha sido vítima de cultistas? Talvez você tenha sido um cultista? Seja como for, hoje a Ordem é a única família que conhece. Quem sabe, cumprindo missões, você descubra algo sobre seu passado.",
    ],
    expertises: ["Duas à escolha do mestre"],
    power: [
      "Vislumbres do Passado",
      "Uma vez por missão, você pode fazer um teste de Intelecto (DT 10) para reconhecer pessoas ou lugares familiares, que tenha encontrado antes de perder a memória. Se passar, recebe 1d4 PE temporários e, a critério do mestre, uma informação útil.",
    ],
  },

  {
    origin: [
      "Artista",
      "Você era um ator, músico, escritor, dançarino, influenciador... Seu trabalho pode ter sido inspirado por uma experiência paranormal do passado e o que o público acha que é pura criatividade, a Ordem sabe que tem um lado mais sombrio.",
    ],
    expertises: ["Artes", "Enganação"],
    power: [
      "Magnum Opus",
      "Você é famoso por uma de suas obras. Uma vez por missão, pode determinar que um personagem envolvido em uma cena de interação o reconheça. Você recebe +5 em testes de Presença e de perícias baseadas em Presença contra aquele personagem. A critério do mestre, pode receber esses bônus em outras situações nas quais seria reconhecido.",
    ],
  },

  {
    origin: [
      "Atleta",
      "Você competia em um esporte individual ou por equipe, como natação ou futebol. Seu alto desempenho pode ser fruto de alguma influência paranormal que nem mesmo você conhecia ou você pode ter se envolvido em algum evento paranormal em uma de suas competições.",
    ],
    expertises: ["Acrobacia", "Atletismo"],
    power: [
      "110%",
      "Quando faz um teste de perícia usando Força ou Agilidade (exceto Luta e Pontaria) você pode gastar 2 PE para receber +5 nesse teste.",
    ],
  },

  {
    origin: [
      "Chef",
      "Você é um cozinheiro amador ou profissional. Talvez trabalhasse em um restaurante, talvez simplesmente gostasse de cozinhar para a família e amigos. Como sua comida fez com que você se envolvesse com o paranormal? Ninguém sabe. Mas os outros agentes adoram quando você vai para a missão!",
    ],
    expertises: ["Fortitude", "Profissão (cozinheiro)"],
    power: [
      "Ingrediente Secreto",
      "Em cenas de interlúdio, você pode gastar uma ação para cozinhar um prato gostoso. Cada membro do grupo (incluindo você) que gastar uma ação para se alimentar recebe o benefício de dois pratos (caso o mesmo benefício seja escolhido duas vezes, seus efeitos se acumulam).",
    ],
  },

  {
    origin: [
      "Criminoso",
      "Você vivia uma vida fora da lei, seja como mero batedor de carteiras, seja como membro de uma facção criminosa. Em algum momento, você se envolveu em um assunto da Ordem — talvez tenha roubado um item amaldiçoado? A organização, por sua vez, achou melhor recrutar seus talentos do que ter você como um estorvo.",
    ],
    expertises: ["Crime", "Furtividade"],
    power: [
      "O Crime Compensa",
      "No final de uma missão, escolha um item encontrado na missão. Em sua próxima missão, você pode incluir esse item em seu inventário sem que ele conte em seu limite de itens por patente.",
    ],
  },

  {
    origin: [
      "Cultista Arrependido",
      "Você fez parte de um culto paranormal. Talvez fossem ignorantes iludidos, que acreditavam estar contatando entidades benevolentes. Talvez soubessem exatamente o que estavam fazendo. Seja como for, algo abriu seus olhos e agora você luta pelo lado certo — embora carregue para sempre traços de sua vida pregressa. Outros membros da Ordem podem desconfiar de sua conversão e você sabe que precisará se esforçar para conquistar a confiança de todos.",
    ],
    expertises: ["Ocultismo", "Religião"],
    power: [
      "Traços do Outro Lado",
      "Você possui um poder paranormal à sua escolha. Porém, começa o jogo com metade da Sanidade normal para sua classe.",
    ],
  },

  {
    origin: [
      "Desgarrado",
      "Você não vivia de acordo com as normas da sociedade. Podia ser um eremita, uma pessoa em situação de rua ou simplesmente alguém que descobriu o Paranormal e abandonou sua rotina — sabendo o quão frágil era a existência humana, não conseguia simplesmente continuar indo para o trabalho todo o dia. De qualquer forma, a vida sem os confortos modernos o deixou mais forte.",
    ],
    expertises: ["Fortitude", "Sobrevivência"],
    power: ["Calejado", "Você recebe +1 PV para cada 5% de NEX."],
  },

  {
    origin: [
      "Engenheiro",
      "Enquanto os acadêmicos estão preocupados com teorias, você coloca a mão na massa, seja como engenheiro profissional, seja como inventor de garagem. Provavelmente você criou algum dispositivo paranormal que chamou a atenção da Ordem.",
    ],
    expertises: ["Profissão", "Tecnologia"],
    power: [
      "Ferramentas Favoritas",
      "Um item a sua escolha (exceto armas) conta como uma categoria abaixo (por exemplo, um item de categoria II conta como categoria I para você).",
    ],
  },

  {
    origin: [
      "Executivo",
      "Você possuía um trabalho de escritório em uma grande empresa, banco ou corporação. Era um administrador, advogado, contador ou de qualquer outra profissão que lida com papelada e burocracia. Sua vida era bastante normal, até que você descobriu algo que não devia. Talvez o sucesso da empresa residisse em um ritual? Talvez toda a corporação fosse fachada para um culto e o presidente, um líder cultista envolvido com entidades paranormais? Após essa descoberta, você foi recrutado pela Ordem e trocou seu trabalho de escritório por missões de campo — hoje, sua vida é tudo, menos normal.",
    ],
    expertises: ["Diplomacia", "Profissão"],
    power: [
      "Processo Otimizado",
      "Sempre que faz um teste de perícia durante um teste estendido, pode pagar 2 PE para receber +5 nesse teste.",
    ],
  },

  {
    origin: [
      "Investigador",
      "Você era um investigador do governo, como um perito forense ou policial federal, ou privado, como um detetive particular. Pode ter tido contato com o Paranormal em algum caso ou ter sido recrutado pela Ordem por suas habilidades de resolução de mistérios.",
    ],
    expertises: ["Investigação", "Percepção"],
    power: [
      "Faro para Pistas",
      "Uma vez por cena, quando fizer um teste para procurar pistas, você pode gastar 1 PE para receber +5 nesse teste.",
    ],
  },

  {
    origin: [
      "Lutador",
      "Você pratica uma arte marcial ou esporte de luta, ou cresceu em um bairro perigoso onde aprendeu briga de rua. Já quebrou muitos ossos, tanto seus quanto dos outros. Pode ter conhecido a Ordem após um torneio secreto envolvendo entidades do Outro Lado ou ter sido recrutado pela sua capacidade de luta.",
    ],
    expertises: ["Luta", "Reflexos"],
    power: [
      "Mão Pesada",
      "Você recebe +2 em rolagens de dano com ataques corpo a corpo.",
    ],
  },

  {
    origin: [
      "Magnata",
      "Você possui muito dinheiro ou patrimônio. Pode ser o herdeiro de uma família antiga ligada ao oculto, ter criado e vendido uma empresa e decidido usar sua riqueza para uma causa maior, ou ter ganho uma loteria após inadvertidamente escolher números amaldiçoados que formavam um ritual.",
    ],
    expertises: ["Diplomacia", "Pilotagem"],
    power: [
      "Patrocinador da Ordem",
      "Seu limite de crédito é sempre considerado um acima do atual.",
    ],
  },

  {
    origin: [
      "Mercenário",
      "Você é um soldado de aluguel, que trabalha sozinho ou como parte de alguma organização que vende serviços militares. Escoltas e assassinatos fizeram parte de sua rotina por tempo o suficiente para você se envolver em alguma situação com o Paranormal.",
    ],
    expertises: ["Iniciativa", "Intimidação"],
    power: [
      "Posição de Combate",
      "No primeiro turno de cada cena de ação, você pode gastar 2 PE para receber uma ação de movimento adicional.",
    ],
  },

  {
    origin: [
      "Militar",
      "Você serviu em uma força militar, como o exército ou a marinha. Passou muito tempo treinando com armas de fogo, até se tornar um perito no uso delas. Acostumado a obedecer ordens e partir em missões, está em casa na Ordo Realitas. O inimigo é diferente, mas um tiro bem dado continua resolvendo o problema.",
    ],
    expertises: ["Pontaria", "Tática"],
    power: [
      "Para Bellum",
      "Você recebe +2 em rolagens de dano com armas de fogo.",
    ],
  },

  {
    origin: [
      "Operário",
      "Pedreiro, industriário, operador de máquinas em uma fábrica… Você passou uma parte de sua vida em um emprego braçal, desempenhando atividades práticas que lhe deram uma visão pragmática do mundo. Sua rotina mundana, entretanto, foi confrontada de alguma forma pelo paranormal, e você não consegue mais esquecer tudo que viu sobre os mistérios do mundo.",
    ],
    expertises: ["Fortitude", "Profissão"],
    power: [
      "Ferramenta de Trabalho",
      "Escolha uma arma simples ou tática que, a critério do mestre, poderia ser usada como ferramenta em sua profissão (como uma marreta para um pedreiro). Você sabe usar a arma escolhida e recebe +1 em testes de ataque, rolagens de dano e margem de ameaça com ela.",
    ],
  },

  {
    origin: [
      "Policial",
      "Você fez parte de uma força de segurança pública, civil ou militar. Em alguma patrulha ou chamado se deparou com um caso paranormal e sobreviveu para contar a história.",
    ],
    expertises: ["Percepção", "Pontaria"],
    power: ["Patrulha", "Você recebe +2 em Defesa."],
  },

  {
    origin: [
      "Religioso",
      "Você é devoto ou sacerdote de uma fé. Independentemente da religião que pratica, se dedica a auxiliar as pessoas com problemas espirituais. A partir disso, teve contato com o paranormal, o que fez com que fosse convocado pela Ordem.",
    ],
    expertises: ["Religião", "Vontade"],
    power: [
      "Acalentar",
      "Você recebe +5 em testes de Religião para acalmar. Além disso, quando acalma uma pessoa, ela recebe um número de pontos de Sanidade igual a 1d6 + a sua Presença.",
    ],
  },

  {
    origin: [
      "Servidor Público",
      "Você possuía carreira em um órgão do governo, lidando com burocracia e atendendo pessoas. Sua rotina foi quebrada quando você viu que o prefeito era um cultista ou que a câmara de vereadores se reunia à noite para realizar rituais. Quando os próprios representantes do povo estão dispostos a sacrificá-lo para entidades malignas, onde reside nossa esperança? Hoje, você sabe a resposta para essa pergunta: na Ordo Realitas.",
    ],
    expertises: ["Intuição", "Vontade"],
    power: [
      "Espírito Cívico",
      "Sempre que faz um teste para ajudar, você pode gastar 1 PE para aumentar o bônus concedido em +2.",
    ],
  },

  {
    origin: [
      "Teórico da Conspiração",
      "A humanidade nunca pisou na lua. Reptilianos ocupam importantes cargos públicos. A Terra é plana... E secretamente governada pelos Illuminati. Você sabe isso tudo, pois investigou a fundo esses importantes assuntos. Quando sua pesquisa esbarrou no Paranormal, você foi recrutado. Na Ordem, sua loucura determinação será usada para um bom propósito.",
    ],
    expertises: ["Investigação", "Ocultismo"],
    power: [
      "Eu Já Sabia",
      "Você não se abala com entidades ou anomalias. Afinal, sempre soube que isso tudo existia. Você recebe resistência a dano mental igual ao seu Intelecto.",
    ],
  },

  {
    origin: [
      "T.I.",
      "Programador, engenheiro de software ou simplesmente “o cara da T.I.”, você tem treinamento e experiência para lidar com sistemas informatizados. Seu talento (ou curiosidade exagerada) chamou a atenção da Ordem.",
    ],
    expertises: ["Investigação", "Tecnologia"],
    power: [
      "Motor de Busca",
      "A critério do Mestre, sempre que tiver acesso à internet, você pode gastar 2 PE para substituir um teste de perícia qualquer por um teste de Tecnologia.",
    ],
  },

  {
    origin: [
      "Trabalhador Rural",
      "Você trabalhava no campo ou em áreas isoladas, como fazendeiro, pescador, biólogo, veterinário... Você se acostumou com o convívio com a natureza e os animais e talvez tenha ouvido uma ou outra história de fantasmas ao redor da fogueira. Em algum momento da sua vida, porém, descobriu que muitas dessas histórias são verdadeiras.",
    ],
    expertises: ["Adestramento", "Sobrevivência"],
    power: [
      "Desbravador",
      "Quando faz um teste de Adestramento ou Sobrevivência, você pode gastar 2 PE para receber +5 nesse teste. Além disso, você não sofre penalidade em deslocamento por terreno difícil.",
    ],
  },

  {
    origin: [
      "Trambiqueiro",
      "Uma vida digna exige muito trabalho, então é melhor nem tentar. Você vivia de pequenos golpes, jogatina ilegal e falcatruas. Certo dia, enganou a pessoa errada; no dia seguinte, se viu servindo à Ordem. Pelo menos agora tem a chance de usar sua lábia para o bem.",
    ],
    expertises: ["Crime", "Enganação"],
    power: [
      "Impostor",
      "Uma vez por cena, você pode gastar 2 PE para substituir um teste de perícia qualquer por um teste de Enganação.",
    ],
  },

  {
    origin: [
      "Universitário",
      "Você era aluno de uma faculdade. Em sua rotina de estudos, provas e festas, acabou descobrindo algo — talvez um livro amaldiçoado na antiga biblioteca do campus? Por seu achado, foi convocado pela Ordem. Agora, estuda com mais afinco: nesse novo curso, ouviu dizer que as provas podem ser mortais.",
    ],
    expertises: ["Atualidades", "Investigação"],
    power: [
      "Dedicação",
      "Você recebe +1 PE, e mais 1 PE adicional a cada NEX ímpar (15%, 25%...). Além disso, seu limite de PE por turno aumenta em 1 (em NEX 5% seu limite é 2, em NEX 10% é 3 e assim por diante).",
    ],
  },

  {
    origin: [
      "Vítima",
      "Em algum momento de sua vida — infância, juventude ou início da vida adulta — você encontrou o Paranormal... E a experiência não foi nada boa. Você viu os espíritos dos mortos, foi atacado por uma entidade ou mesmo foi sequestrado para ser sacrificado em um ritual impedido no último momento. A experiência foi traumática, mas você não se abateu; em vez disso, decidiu lutar para impedir que outros inocentes passem pelo mesmo. E, já tendo sendo vítima do Paranormal, se tornou habilidoso em evitar perigos.",
    ],
    expertises: ["Reflexos", "Vontade"],
    power: [
      "Cicatrizes Psicológicas",
      "Você recebe +1 de Sanidade para cada 5% de NEX.",
    ],
  },

  {
    origin: [
      "Amigo dos Animais",
      "Você desenvolveu uma conexão muito forte com outros seres: os animais. Seja por nunca ter se dado muito bem com humanos ou por preferir a companhia de um melhor amigo de quatro patas, você leva sua vida ao lado de um bichano e até mesmo aprende com a natureza perceptiva deles.",
    ],
    expertises: ["Adestramento", "Percepção"],
    power: [
      "Companheiro Animal",
      "Você consegue entender as intenções e sentimentos de qualquer animal com facilidade, podendo usar Adestramento para mudar a atitude de animais ou ter pressentimentos de como eles estão se sentindo. Além disso, você possui um melhor amigo, um animal que cresceu com você e pelo qual tem profundo apego. Ele conta como um aliado que fornece +2 em uma perícia a sua escolha. Quando você alcança NEX 35%, ele também passa a ser um aliado de um tipo a sua escolha. Por fim, quando você alcança NEX 70%, ele fornece o bônus básico de um aliado de outro tipo. Perder seu parceiro pode ser muito doloroso. Se ele morrer, você perde 10 pontos de Sanidade permanentemente, além de ficar perturbado até o fim da cena.",
    ],
  },

  {
    origin: [
      "Astronauta",
      "Outrora limitada a membros de algumas agências espaciais estatais, a profissão de explorador espacial se tornou mais acessível conforme mais países, e até mesmo empresas privadas, se envolveram com viagens na fronteira final. Como um astronauta, você se acostumou à pressão de ser responsável pela vida de seus colegas e por experimentos de milhões de reais. E foi na escuridão do espaço que você descobriu que não estamos sozinhos.",
    ],
    expertises: ["Ciências", "Fortitude"],
    power: [
      "Acostumado ao Extremo",
      "Você recebe resistência a dano mental igual a 1 + seu Intelecto. A cada vez que você usa essa resistência, ela é reduzida em 1 até o fim da cena.",
    ],
  },

  {
    origin: [
      "Chef do Outro Lado",
      "Você nunca foi muito bom na culinária convencional. Depois de sobreviver ao paranormal, entretanto, descobriu um talento que é considerado um grande tabu até mesmo pelos ocultistas mais experientes: cozinhar e ingerir entidades do Outro Lado. Acreditando estar realizando algum tipo de arte gastronômica esotérica, ou simplesmente por se render a impulsos incontroláveis, você elabora pratos nunca vistos antes misturando ingredientes comuns da Realidade com aquilo que não deveria existir. Você é a prova viva do ditado popular: 'tem gosto pra tudo'.",
    ],
    expertises: ["Ocultismo", "Profissão (cozinheiro)"],
    power: [
      "Fome do Outro Lado",
      "Você pode usar partes de criaturas do Outro Lado como ingredientes culinários. No início de cada missão você pode solicitar essas partes como itens de Categoria I que ocupam 0,5 espaço, e pode obtê-las de criaturas derrotadas (cada criatura Pequena ou maior fornece 1 parte “útil”). Você pode gastar uma ação de interlúdio e 1 parte para preparar um prato especial; faça um teste de Profissão (cozinheiro) com DT 20 + 1O (o mestre oculta o resultado do teste até alguém comer o prato). Se você passar no teste, o prato fornece RD 10 contra o tipo de dano do elemento da criatura cuja parte foi usada. Caso contrário, o prato causa vulnerabilidade a esse tipo de dano. Os efeitos duram até o fim da próxima cena. Independentemente do resultado, se alimentar do paranormal, por menor que seja a porção, gera consequências brutais e permanentes em seu organismo, sendo uma das formas mais rápidas de destruir sua mente. A cada refeição consumida, você perde 1 ponto permanente de Sanidade. Além disso, se estiver usando a regra opcional Nível de Experiência e Nível de Exposição (p. XX), o NEX do personagem aumenta em 3% para cada parte de criatura diferente que ingerir.",
    ],
  },

  {
    origin: [
      "Colegial",
      "Você era um aluno do colegial e tinha uma rotina baseada nos estudos, nas amizades e nos dramas típicos de alguém da sua idade. Até que um encontro com o paranormal mudou sua vida. Tendo se unido à Ordem com uma mentalidade juvenil e pouca experiência de vida, você descobriu que sua verdadeira força está nos amigos que fizer pelo caminho.",
    ],
    expertises: ["Atualidades", "Tecnologia"],
    power: [
      "Poder da Amizade",
      "Escolha um personagem para ser seu amigo. Sempre que subir de patente, você pode escolher um amigo adicional. Se estiver em alcance médio de um de seus amigos e vocês puderem, pelo menos, trocar olhares, você recebe +2 em todos os testes de perícia (não cumulativo). Entretanto, se um de seus amigos morrer, seu total de PE é reduzido em –1 para cada 5% de NEX até o fim da missão. Se perder um de seus amigos, você pode escolher outro no início da próxima missão.",
    ],
  },

  {
    origin: [
      "Cosplayer",
      "Você é apaixonado pela arte do cosplay e dedicou sua vida a criar a melhor fantasia possível. Constantemente questionado por pessoas que confundem seus gostos e preferências artísticas com acusações ignorantes, você se acostumou a seguir em frente. Confrontado com o paranormal, você colocou sua arte, e sua resiliência, a serviço da Ordem.",
    ],
    expertises: ["Artes", "Vontade"],
    power: [
      "Não É Fantasia, É Cosplay!",
      "Você pode fazer testes de disfarce usando Artes em vez de Enganação. Além disso, ao fazer um teste de perícia, se estiver usando um cosplay que tem relação com ele, você recebe +2. Por exemplo, se estiver vestido de James Bones, o gato agente secreto do famoso videogame arcade dos anos 90, você recebe +2 em testes para ser furtivo, se equilibrar e outras coisas em que um gato seria considerado eficiente.",
    ],
  },

  {
    origin: [
      "Diplomata",
      "Você atuava em uma área onde as habilidades sociais e políticas eram ferramentas indispensáveis. Talvez fosse representante comercial de uma empresa, membro de um partido político ou embaixador do governo. Em algum momento, entretanto, você teve uma experiência paranormal que revelou entidades com as quais não se é possível negociar. Agora, você usa os contatos que adquiriu para combater o Outro Lado.",
    ],
    expertises: ["Atualidades", "Diplomacia"],
    power: [
      "Conexões",
      "Você recebe +5 em Diplomacia. Além disso, se puder contatar um NPC capaz de lhe auxiliar, você pode gastar 10 minutos e 2 PE para substituir um teste de uma perícia relacionada ao conhecimento desse NPC, feito até o fim da cena, por um teste de Diplomacia.",
    ],
  },

  {
    origin: [
      "Explorador",
      "Você é uma pessoa que se interessa muito por história ou geografia, frequentemente embarcando em trilhas e explorações para enriquecer seus estudos. Suas aventuras tornaram seu corpo mais resistente e capaz de se manter firme mesmo nas situações mais adversas. No entanto, um encontro trágico com o paranormal marcou sua jornada.",
    ],
    expertises: ["Fortitude", "Sobrevivência"],
    power: [
      "Manual do Sobrevivente",
      "Ao fazer um teste para resistir a armadilhas, clima, doenças, fome, sede, fumaça, sono, sufocamento ou veneno, incluindo de fontes paranormais, você pode gastar 2 PE para receber +5 nesse teste. Além disso, em cenas de interlúdio, você considera condições de sono precárias como normais.",
    ],
  },

  {
    origin: [
      "Experimento",
      "Você foi uma cobaia em um experimento físico. Pode ter sido um voluntário em um procedimento experimental legítimo, ou submetido a experimentos científicos ou paranormais contra sua vontade. Qualquer que seja a natureza desse evento, causou alterações permanentes em seu corpo... que concedem capacidades extraordinárias, mas trazem um estigma que provoca reações negativas em outras pessoas.",
    ],
    expertises: ["Atletismo", "Fortitude"],
    power: [
      "Mutação",
      "Você recebe resistência a dano 2 e +2 em uma perícia à sua escolha que seja originalmente baseada em Força, Agilidade ou Vigor. Entretanto, sofre −2 em Diplomacia e Enganação.",
    ],
  },

  {
    origin: [
      "Fanático por Criaturas",
      "Você sempre foi obcecado pelo sobrenatural. Desde que pode se lembrar, a ideia de encontrar uma criatura o fascina tanto quanto o assusta. Essa faísca fez você se tornar um 'caçador de monstros', dedicando-se a localizar as feras citadas em documentários sensacionalistas. Para você, todo rumor e crendice pode esconder um fundo de verdade. Talvez uma de suas pesquisas tenha o levado diretamente a uma criatura paranormal, ou talvez elas tenham encontrado você primeiro. Afinal, você nunca esteve se escondendo.",
    ],
    expertises: ["Investigação", "Ocultismo"],
    power: [
      "Conhecimento Oculto",
      "Você pode fazer testes de Ocultismo para identificar criaturas a partir de informações como uma imagem, rastros, indícios de sua presença ou outras pistas que o mestre considere suficientes. Se passar, você descobre as características da criatura (conforme descrito na perícia), mas não sua identidade ou tipo específico. Além disso, quando passa em um teste de Ocultismo para identificar criatura, você recebe também +2 em todos os testes contra a criatura até o fim da missão.",
    ],
  },

  {
    origin: [
      "Fotógrafo",
      "Você é um artista visual que usa câmeras para capturar momentos e transmitir histórias através de imagens estáticas. Costumeiramente movido pela paixão de observar o mundo ao seu redor, buscando ângulos únicos e perspectivas singulares para documentar a vida e a sociedade, você não fazia ideia de que encontraria elementos paranormais através de sua lente.",
    ],
    expertises: ["Artes", "Percepção"],
    power: [
      "Através da Lente",
      "Quando faz um teste de Investigação ou de Percepção ou para adquirir pistas olhando através de uma câmera ou analisando fotos, você pode gastar 2 PE para receber +5 nesse teste (um personagem que se move olhando através de uma lente anda à metade de seu deslocamento).",
    ],
  },

  {
    origin: [
      "Inventor Paranormal",
      "A curiosidade e a criatividade fizeram de você uma pessoa que busca constantemente desafiar limites e criar soluções inovadoras, sendo mais de uma vez intitulado como um 'cientista louco'. Você teve contato com o paranormal por meio de seus experimentos ou foi procurado pela Ordem porque suas pesquisas chamaram atenção demais. De qualquer forma, o Outro Lado inspira você a utilizar o desconhecido em suas invenções.",
    ],
    expertises: ["Profissão (engenheiro)", "Vontade"],
    power: [
      "Invenção Paranormal",
      "Escolha um ritual de 1º círculo. Você possui um invento paranormal, um item de Categoria I que ocupa 1 espaço e que permite que você execute o efeito do ritual escolhido. Para ativar o invento, você gasta uma ação padrão (ou a ação necessária para lançar o ritual, o que for maior) e faz um teste de Profissão (inventor) com DT 15 +5 para cada ativação na mesma missão. Se passar, o item faz o equivalente a conjurar o ritual em sua forma básica sem pagar seu custo em PE. Se falhar, o invento enguiça e só pode ser consertado com uma ação de interlúdio. Você pode trocar o ritual contido em seu invento no início de cada missão.",
    ],
  },

  {
    origin: [
      "Jovem Mistíco",
      "Você possui uma profunda conexão com sua espiritualidade, suas crenças ou o próprio universo. Essa conexão faz com que você veja o mundo e viva sua vida de forma diferente e peculiar, características que o tornaram mais suscetível a um encontro com o paranormal.",
    ],
    expertises: ["Ocultismo", "Religião"],
    power: [
      "A Culpa é Das Estrelas",
      ". Escolha um número da sorte entre 1 e 6. No início de cada cena, você pode gastar 1 PE e rolar 1d6. Se o resultado for seu número da sorte, você recebe +2 em testes de perícia até o fim da cena. Caso contrário, na próxima vez que usar esta habilidade, escolha mais um número como número da sorte. Quando rolar um de seus números da sorte, a quantidade de números volta a 1.",
    ],
  },

  {
    origin: [
      "Legista do Turno da Noite",
      "Em um ambiente sombrio e peculiar como o necrotério, você descobriu que a morte não é o fim de tudo. Seus conhecimentos em ciências e medicina são essenciais para lidar com os mistérios que se revelam além do véu.",
    ],
    expertises: ["Ciências", "Medicina"],
    power: [
      "Luto Habitual",
      "Você sofre apenas metade do dano mental ao lidar com situações relacionadas à morte. Além disso, ao fazer um teste de Medicina para primeiros socorros ou necropsia, você pode gastar 2 PE para receber +5 nesse teste.",
    ],
  },

  {
    origin: [
      "Mateiro",
      "Você possui um profundo conhecimento das áreas rurais e selvagens. Seja como guia florestal, biólogo de campo ou entusiasta da vida selvagem, sua conexão com a natureza o levou ao encontro com o Outro Lado.",
    ],
    expertises: ["Percepção", "Sobrevivência"],
    power: [
      "Mapa Celeste",
      "Desde que possa ver o céu, você sempre sabe as direções dos pontos cardeais e pode chegar sem se perder em qualquer lugar que já tenha visitado ao menos uma vez. Ao fazer um teste de Sobrevivência, você pode gastar 2 PE para rolar o teste novamente e escolher o melhor resultado. Além disso, em cenas de interlúdio, considera condições de sono precárias como normais.",
    ],
  },

  {
    origin: [
      "Mergulhador",
      "Seja por profissão ou hobby, você é um aventureiro subaquático que explora os mistérios do mundo submerso. Equipado com seu equipamento de mergulho, você se aventura a grandes profundidades para descobrir um mundo completamente diferente.",
    ],
    expertises: ["Atletismo", "Fortitude"],
    power: [
      "Fôlego de Nadador",
      "Você recebe +3 PV e pode prender a respiração por um número de rodadas igual ao dobro do seu Vigor. Além disso, quando passa em um teste de Atletismo para natação, avança seu deslocamento normal (em vez da metade).",
    ],
  },

  {
    origin: [
      "Motorista",
      "Como caminhoneiro, motorista de aplicativo, motoboy, piloto de corrida, ou qualquer outro tipo de condutor profissional, suas viagens cruzaram o caminho do Outro Lado.",
    ],
    expertises: ["Pilotagem", "Reflexos"],
    power: [
      "Mãos no Volante",
      "Você não sofre penalidades em testes de ataque por estar em um veículo em movimento. Sempre que estiver pilotando e precisar fazer um teste de Pilotagem ou resistência, pode gastar 2 PE para receber +5 nesse teste.",
    ],
  },

  {
    origin: [
      "Nerd Entusiasta",
      "Você dedicou muito do seu tempo aprendendo sobre videogames, RPGs de mesa, ficção científica ou qualquer outro assunto considerado 'nerd'. Sua obsessão em pesquisar fundo seus interesses e sua capacidade em lidar com os mais variados temas chamou a atenção de organizações paranormais.",
    ],
    expertises: ["Ciências", "Tecnologia"],
    power: [
      "O Inteligentão",
      "Você pode gastar uma ação de interlúdio para se dedicar às suas pesquisas. Se fizer isso, recebe um bônus de +1d10 em um teste baseado em Intelecto ou Presença realizado até o fim da missão. Você pode acumular um número máximo de dados de bônus por pesquisa igual ao seu Intelecto, mas só pode usar um desses dados por teste. Dados não usados ao final da missão são perdidos.",
    ],
  },

  {
    origin: [
      "Psicólogo",
      "Especializado no estudo e tratamento das questões mentais do ser humano, você teve contato com o paranormal em sua prática profissional. Agora, utiliza seus conhecimentos para enfrentar o Outro Lado.",
    ],
    expertises: ["Intuição", "Profissão (psicólogo)"],
    power: [
      "Terapia",
      "Você pode usar Profissão (psicólogo) como Diplomacia. Uma vez por rodada, quando você ou um aliado em alcance curto falha em um teste de resistência contra um efeito que causa dano mental, você pode gastar 2 PE para fazer um teste de Profissão (psicólogo) e usar o resultado desse teste no lugar do teste de resistência falho.",
    ],
  },

  {
    origin: [
      "Profetizado",
      "Você sabe como vai morrer, seja por pesadelos, pensamentos intrusivos ou visões. Esta premonição clara ou enigmática sobre seus últimos momentos chamou a atenção para o seu destino inevitável.",
    ],
    expertises: [
      "Vontade",
      "Mais uma à sua escolha, relacionada à sua premonição",
    ],
    power: [
      "Luta ou Fuga",
      "Conhecer os sinais de sua morte te deixa mais confiante, especialmente quando eles não estão presentes. Você recebe +2 em Vontade. Quando surge uma referência à sua premonição (como um objeto semelhante ao gancho para alguém cuja morte está ligada a um gancho de carne), você recebe +2 PE temporários que duram até o fim da cena.",
    ],
  },

  {
    origin: [
      "Repórter Investigativo",
      "Sempre em busca de histórias significativas, você investiga eventos, entrevista fontes e analisa dados para descobrir a verdade por trás dos acontecimentos. Sua curiosidade e persistência o levaram ao encontro do indescritível.",
    ],
    expertises: ["Atualidades", "Investigação"],
    power: [
      "Encontrar a Verdade",
      "Você pode usar Investigação no lugar de Diplomacia ao fazer testes para persuadir e mudar atitude. Quando faz um teste de Investigação para interrogar, pode gastar 2 PE para receber +5 nesse teste.",
    ],
  },

  {
    origin: [
      "Cientista Forense",
      "Você trabalhava coletando provas para a resolução de crimes, seja para a polícia, seja para uma empresa privada de investigação. Usava metódos e técnicas adquiridos através de uma graduação em uma área científica ou médica, além de cursos específicos. Recrutado para a Ordem pelos seus conhecimentos técnicos, seu trabalho não mudou muito - mas o tipo de crime que você investiga sim.",
    ],
    expertises: ["Ciências", "Investigação"],
    power: [
      "Investigação Científica",
      "Uma vez por cena de investigação, você pode gastar uma ação livre para procurar pistas, usando Ciências no lugar da perícia que seria usada para tentar encontrar a pista em questão.",
    ],
  },

  {
    origin: [
      "Dublê",
      "Você sempre combinou um gosto por alta velocidade, manobras ousadas e esportes radicais com uma total falta de noção do perigo. Sua busca incessante por adrenalina o fez seguir carreira de dublê, uma profissão que lhe permitiu enfrentar o risco das mais diversas formas. Agora à serviço da Ordem, você enfim enfrentará o Medo verdadeiro e poderá colocar sua coragem - e suas peripécias - à prova como nunca.",
    ],
    expertises: ["Pilotagem", "Reflexos"],
    power: [
      "Destemido",
      "Quando faz um teste de perícia para o qual uma falha terá como consequência direta dano ou uma condição negativa, você recebe +5 nesse teste.",
    ],
  },

  {
    origin: [
      "Escritor",
      "Você ganhava a vida inventando mundos, pessoas e histórias - em outras palavras, escrevendo ficção. Em certo momento, seu trabalho tocou ou foi tocado pelo paranormal. Talvez suas histórias tenham gerado Medo, talvez a inspiração para elas viesse do Outro Lado desde o início. Recrutado pela Ordem, você agora luta para que a vida real tenha o final feliz que seus livros não tiveram.",
    ],
    expertises: ["Artes", "Atualidades"],
    power: [
      "Bagagem de Leitura",
      "Por seu trabalho, você já leu - e aprendeu - de tudo um pouco. Uma vez por cena, pode gastar 2 PE para se tornar treinado em uma perícia qualquer até o fim da cena.",
    ],
  },

  {
    origin: [
      "Ginasta",
      "Desde muito jovem, você passou a maior parte de sua vida em ginásios (ou talvez em antigos templos monásticos) praticando as mais difíceis acrobacias. Sua preparação foi árdua e dolorosa, mas aprimorou seu corpo, sua técnica e sua disciplina. Recrutado pela Ordo Realitas, essas se tornaram suas principais ferramentas para enfrentar o Outro Lado. E com elas, você planeja fazer as criaturas paranormais sofrerem muito mais do que você sofreu em seus treinos.",
    ],
    expertises: ["Acrobacia", "Reflexos"],
    power: [
      "Mobilidade Acrobática",
      "Você recebe +2 na desfesa e seu deslocamento aumenta em +3m.",
    ],
  },

  {
    origin: [
      "Gaudério Abutre",
      "Você fez parte dos valorosos Gaudérios Abutres. Mesmo longe do motoclube, ainda segue o lema “A gente morre por quem a gente ama”.",
    ],
    expertises: ["Luta", "Pilotagem"],
    power: [
      "Fraternidade Gaudéria",
      "Uma vez por rodada, quando um aliado adjacente é alvo de um ataque ou efeito, você pode gastar 1 PE para trocar de lugar com este aliado e se tornar o alvo deste ataque ou efeito. Se fizer isso, em seu próximo turno você recebe +2 em testes de ataque contra o agressor.",
    ],
  },

  {
    origin: [
      "Jornalista",
      "Uma espécie ameaçada de extinção, você atuava investigando notícias para um jornal, rede de televisão, blog, canal de YouTube... Você se juntou à Ordem porque descobriu algo relacionado ao paranormal, ou foi recrutado para investigar um caso específico. Seja como for, continua buscando a verdade — não mais para informar as pessoas, mas sim para protegê-las.",
    ],
    expertises: ["Atualidades", "Investigação"],
    power: [
      "Fontes Confiáveis",
      "Uma vez por sessão de jogo, você pode gastar 1 PE para contatar suas fontes — pessoas com acesso a informações, nas quais você confia. Isso permite que você role novamente um teste já realizado para encontrar uma pista, com +5 de bônus, ou receba outra informação relevante (a critério do mestre).",
    ],
  },

  {
    origin: [
      "Professor",
      "Você leciona em uma escola ou universidade, ensinando ciências, artes ou outro campo do saber. Sua profissão é uma das mais nobres de todas e o colocou em contato com muitas pessoas e conhecimentos. Em algum momento, o colocou em contato também com o paranormal.Agora trabalhando na Ordem seus alunos são criaturas do Outro Lado, e você planeja reprovar todos de ano.",
    ],
    expertises: ["Ciências", "Intuição"],
    power: [
      "Aula de Campo",
      "Você sabe extrair o melhor das pessoas. Uma vez por cena, pode gastar uma ação padrão e 2 PE para fornecer +1 em um atributo de outro personagem em alcance curto até o fim da cena.",
    ],
  },

  {
    origin: [
      "Revoltado",
      "Alguma coisa aconteceu em sua juventude que fez com que você se rebelasse contra o mundo ao seu redor. Talvez seus parentes tenham sido ausentes, por escolha ou por algum evento trágico, talvez outra perda tenha marcado seu coração. Qualquer que seja a razão, você possui iguais doses de rebeldia e independência e, acima de tudo, aprendeu a se virar sozinho. Recrutado pela Ordem, você luta por vingança — ou para que outros não passem pelo que você passou.",
    ],
    expertises: ["Furtividade", "Vontade"],
    power: [
      "Antes só",
      "Você recebe +1 na Defesa, em testes de perícias e em seu limite de PE por turno se estiver sem nenhum aliado em alcance curto.",
    ],
  },
];

export const attributes = ["Agi", "Int", "Vig", "Pre", "For"];

export const expertises = [
  // 0
  {
    name: "Acrobacias",
    attribute: "agi",
    info: "Você consegue fazer proezas acrobáticas.",
  },

  // 1
  {
    name: "Adestramento",
    attribute: "pre",
    info: "Você sabe lidar com animais.",
  },

  // 2
  {
    name: "Artes",
    attribute: "pre",
    info: "Você sabe se expressar com diversas formas de arte, como música, dança, escrita, pintura, atuação entre outras.",
  },

  // 3
  {
    name: "Atletismo",
    attribute: "for",
    info: "Você pode realizar façanhas atléticas.",
  },

  // 4
  {
    name: "Atualidades",
    attribute: "int",
    info: "Você é um conhecedor de assuntos gerais, como política, esporte e entretenimento, e pode responder dúvidas relativas a esses assuntos.",
  },

  // 5
  {
    name: "Ciências",
    attribute: "int",
    info: "Você estudou diversos campos científicos, como matemática, física, química e biologia, e pode responder dúvidas relativas a esses assuntos.",
  },

  // 6
  {
    name: "Crime",
    attribute: "agi",
    info: "Você sabe exercer atividades ilícitas",
  },

  // 7
  {
    name: "Diplomacia",
    attribute: "pre",
    info: "Você convence pessoas com lábia e argumentação.",
  },

  // 8
  {
    name: "Enganação",
    attribute: "pre",
    info: "Você manipula pessoas com blefes e trapaças.",
  },

  // 9
  {
    name: "Fortitude",
    attribute: "vig",
    info: "Você usa esta perícia para testes de resistência contra efeitos que exigem vitalidade, como doenças e venenos.",
  },

  // 10
  {
    name: "Furtividade",
    attribute: "agi",
    info: "Você sabe ser discreto e sorrateiro.",
  },

  // 11
  {
    name: "Iniciativa",
    attribute: "agi",
    info: "Esta perícia determina sua velocidade de reação.",
  },

  // 12
  {
    name: "Intimidação",
    attribute: "pre",
    info: "Você pode assustar ou coagir outras pessoas.",
  },

  // 13
  {
    name: "Intuição",
    attribute: "int",
    info: "Esta perícia mede sua empatia e “sexto sentido”.",
  },

  // 14
  {
    name: "Investigação",
    attribute: "int",
    info: "Você sabe como descobrir pistas e informações.",
  },

  // 15
  {
    name: "Luta",
    attribute: "for",
    info: "Você usa Luta para fazer ataques corpo a corpo.",
  },

  // 16
  {
    name: "Medicina",
    attribute: "int",
    info: "Você sabe tratar ferimentos, doenças e venenos.",
  },

  // 17
  {
    name: "Ocultismo",
    attribute: "int",
    info: "Você estudou o Paranormal.",
  },

  // 18
  {
    name: "Percepção",
    attribute: "pre",
    info: "Você nota coisas usando os sentidos.",
  },

  // 19
  {
    name: "Pilotagem",
    attribute: "agi",
    info: "Você sabe operar veículos terrestres e aquáticos, como motos, carros e lanchas.",
  },

  // 20
  {
    name: "Pontaria",
    attribute: "agi",
    info: "Você usa Pontaria para fazer ataques à distância.",
  },

  // 21
  {
    name: "Profissão",
    attribute: "int",
    info: "Você sabe exercer uma profissão específica, como advogado, engenheiro, jornalista ou publicitário.",
  },

  // 22
  {
    name: "Reflexos",
    attribute: "agi",
    info: "Você usa esta perícia para testes de resistência contra efeitos que exigem reação rápida, como armadilhas e explosões.",
  },

  // 23
  {
    name: "Religião",
    attribute: "pre",
    info: "Você possui conhecimento sobre teologia e as diversas religiões do mundo.",
  },

  // 24
  {
    name: "Sobrevivência",
    attribute: "int",
    info: "Você pode se guiar em regiões selvagens e evitar perigos da natureza.",
  },

  // 25
  {
    name: "Tática",
    attribute: "int",
    info: "Você recebeu educação militar.",
  },

  // 26
  {
    name: "Tecnologia",
    attribute: "int",
    info: "Você possui conhecimentos avançados de eletrônica e informática.",
  },

  // 27
  {
    name: "Vontade",
    attribute: "pre",
    info: "Você usa esta perícia para testes de resistência contra efeitos que exigem determinação, como intimidação e rituais que afetam a mente.",
  },
];

export const conditions = [
  {
    title: "Abalado",
    description:
      "O personagem sofre -1d20 O em testes. Se ficar abalado novamente, em vez disso fica apavorado. Condição de medo.",
  },

  {
    title: "Agarrado",
    description:
      "O personagem fica desprevenido e imóvel, sofre -1d20 em testes de ataque e só pode atacar com armas leves. Um personagem fazendo um ataque à distância contra um alvo envolvido na manobra agarrar tem 50% de chance de acertar o alvo errado. Condição de paralisia.",
  },

  {
    title: "Alquebrado",
    description:
      "O custo em pontos de esforço das habilidades e dos rituais do personagem aumenta em +1. Condição mental.",
  },

  {
    title: "Apavorado",
    description:
      "O personagem sofre –2d20 em testes de perícia e deve fugir da fonte do medo da maneira mais eficiente possível (mas pode parar de fazê-lo assim que a perder de vista ou se afastar mais do que alcance médio). Se não puder, poderá agir, mas não poderá se aproximar voluntariamente da fonte do medo. Condição de medo.",
  },

  {
    title: "Asfixiado",
    description:
      "O personagem não pode respirar. Um personagem asfixiado pode prender seu fôlego por um total de rodadas igual ao seu valor de Vigor +1 e, a cada vez que sofre dano enquanto está nesta condição, reduz este valor em 1. Ao final de seu turno na última dessas rodadas, o personagem fica morrendo.",
  },

  {
    title: "Atordoado",
    description:
      "O personagem fica desprevenido e não pode fazer ações. Condição mental.",
  },

  {
    title: "Caído",
    description:
      "Deitado no chão. O personagem sofre –2d20 em ataques corpo a corpo e seu deslocamento é reduzido a 1,5m. Além disso, sofre –5 na Defesa contra ataques corpo a corpo, mas recebe +5 na Defesa contra ataques à distância.",
  },

  {
    title: "Cego",
    description:
      "O personagem fica desprevenido e lento, não pode fazer testes de Percepção para observar e sofre –2d20 em testes de perícias baseadas em Agilidade ou Força. Todos os alvos de seus ataques recebem camuflagem total. Considerado cego enquanto estiver em escuridão total, a menos que algo permita perceber no escuro. Condição de sentidos.",
  },

  {
    title: "Confuso",
    description:
      "O personagem comporta-se de modo aleatório. Role 1d6 no início de seus turnos: 1) Movimenta-se em uma direção escolhida por uma rolagem de 1d8; 2-3) Não pode fazer ações e fica balbuciando incoerentemente; 4-5) Usa a arma que estiver empunhando para atacar o ser mais próximo, ou a si mesmo se estiver sozinho (role apenas o dano); 6) A condição termina e pode agir normalmente. Condição mental.",
  },

  {
    title: "Debilitado",
    description:
      "O personagem sofre –2d20 em testes de Agilidade, Força e Vigor. Se ficar debilitado novamente, em vez disso fica inconsciente.",
  },

  {
    title: "Desprevenido",
    description:
      "Despreparado para reagir. O personagem sofre –5 na Defesa e –1d20 em Reflexos. Fica desprevenido contra inimigos que não possa perceber.",
  },

  {
    title: "Doente",
    description: "Sob efeito de uma doença.",
  },

  {
    title: "Em Chamas",
    description:
      "O personagem está pegando fogo. No início de seus turnos, sofre 1d6 pontos de dano de fogo. Pode gastar uma ação padrão para apagar o fogo com as mãos. Imersão em água também apaga as chamas.",
  },

  {
    title: "Enjoado",
    description:
      "O personagem só pode realizar uma ação padrão ou de movimento (não ambas) por rodada.",
  },

  {
    title: "Enredado",
    description:
      "O personagem fica lento, vulnerável e sofre –1d20 em testes de ataque. Condição de paralisia.",
  },

  {
    title: "Envenenado",
    description:
      "O efeito varia de acordo com o veneno. Pode ser outra condição (ex: fraco ou enjoado) ou dano recorrente (ex: 1d12 por rodada). A descrição do veneno determina a duração. Dano recorrente se acumula.",
  },

  {
    title: "Esmorecido",
    description:
      "O personagem sofre –2d20 em testes de Intelecto e Presença. Condição mental.",
  },

  {
    title: "Exausto",
    description:
      "O personagem fica debilitado, lento e vulnerável. Se ficar exausto novamente, em vez disso fica inconsciente. Condição de fadiga.",
  },

  {
    title: "Fascinado",
    description:
      "Com a atenção presa em algo. Sofre –2d20 em Percepção e não pode agir, exceto observar aquilo que o fascinou. Qualquer ação hostil anula esta condição. Balançar o personagem para tirá-lo do estado gasta uma ação padrão. Condição mental.",
  },

  {
    title: "Fatigado",
    description:
      "O personagem fica fraco e vulnerável. Se ficar fatigado novamente, em vez disso fica exausto. Condição de fadiga.",
  },

  {
    title: "Fraco",
    description:
      "O personagem sofre –1d20 em testes de Agilidade, Físico e Vigor. Se ficar fraco novamente, em vez disso fica debilitado.",
  },

  {
    title: "Frustrado",
    description:
      "O personagem sofre –1d20 em testes de Intelecto e Presença. Se ficar frustrado novamente, em vez disso fica esmorecido. Condição mental.",
  },

  {
    title: "Imóvel",
    description:
      "Todas as formas de deslocamento do personagem são reduzidas a 0m. Condição de paralisia.",
  },

  {
    title: "Inconsciente",
    description:
      "O personagem fica indefeso e não pode fazer ações, incluindo reações. Balançar o personagem para acordá-lo gasta uma ação padrão.",
  },

  {
    title: "Indefeso",
    description:
      "O personagem é considerado desprevenido, sofre –10 na Defesa, falha automaticamente em testes de Reflexos e pode sofrer golpes de misericórdia.",
  },

  {
    title: "Lento",
    description:
      "Todas as formas de deslocamento do personagem são reduzidas à metade (arredonde para baixo para o primeiro incremento de 1,5m) e não pode correr ou fazer investidas. Condição de paralisia.",
  },

  {
    title: "Machucado",
    description:
      "O personagem tem menos da metade de seus pontos de vida totais.",
  },

  {
    title: "Morrendo",
    description:
      "Com 0 pontos de vida. Um personagem morrendo fica inconsciente e, se terminar mais de três rodadas na mesma cena, morre. Esta condição se encerra se voltar a ter pelo menos 1 PV.",
  },

  {
    title: "Ofuscado",
    description:
      "O personagem sofre –1d20 em testes de ataque e de Percepção. Condição de sentidos.",
  },

  {
    title: "Paralisado",
    description:
      "O personagem fica imóvel e indefeso e só pode realizar ações puramente mentais. Condição de paralisia.",
  },

  {
    title: "Pasmo",
    description: "O personagem não pode fazer ações. Condição mental.",
  },

  {
    title: "Petrificado",
    description:
      "O personagem fica inconsciente e recebe resistência a dano 10.",
  },

  {
    title: "Sangrando",
    description:
      "Com um ferimento aberto. No início de seus turnos, deve fazer um teste de Vigor (DT 20). Se passar, estabiliza e remove a condição. Se falhar, perde 1d6 PV e continua sangrando.",
  },

  {
    title: "Surdo",
    description:
      "O personagem não pode fazer testes de Percepção para ouvir e sofre –2d20 em testes de Iniciativa. Considerado em condição ruim para lançar rituais. Condição de sentidos.",
  },

  {
    title: "Surpreendido",
    description:
      "Não ciente de seus inimigos. O personagem fica desprevenido e não pode fazer ações.",
  },

  {
    title: "Vulnerável",
    description: "O personagem sofre –5 na Defesa.",
  },
];
