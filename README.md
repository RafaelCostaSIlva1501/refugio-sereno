# Sobre o Projeto

**Refúgio Sereno** é um sistema web desenvolvido para auxiliar na organização e gestão de fichas de personagens para mesa de RPG.

Criado com **Node.js** e **Express**, ele permite criar, armazenar e gerenciar fichas digitais, facilitando o acesso tanto para mestres quanto para jogadores durante sessões.

A estrutura foi planejada para uma expansão futura, incluindo bancos de dados, autenticação, e interações em tempo real entre jogadores e mestre, utilizando WebSockets

> O nome do sistema vem da campanha de RPG "Refúgio Sereno", para a qual o projeto foi originalmente desenvolvido.

---

## Guia de Instalação

Certifique-se de ter o Node.js instalado (versão **16** ou superior). As instalações serão feitas com o npm

Instale as dependências:

> npm install express express-session

Executando o projeto em modo de desenvolvimento:

> npm run dev

Você pode acessar o sistema localmente em: http://localhost:3000

Executando o projeto em modo de desenvolvimento em modo de produção:

> npm start

## Explicando a Arquitetura do código

O primeiro grande desafio no início do desenvolvimento desta aplicação foi perceber que o código crescia rápido demais e, com isso, eu constantemente precisava repensar sua estrutura. Muitas vezes era necessário refatorar trechos inteiros ou até mudar completamente a abordagem para determinadas funcionalidades.

Buscando otimizar o código e torná-lo mais legível, sustentável e preparado para futuras manutenções, especialmente considerando que novas funcionalidades são adicionadas com frequência, cheguei à conclusão de que a melhor solução seria modularizar o projeto por completo. Essa abordagem permite organizar melhor as responsabilidades, reduzir acoplamentos desnecessários e garantir que o sistema possa evoluir de forma mais estável e escalável ao longo do tempo.

[Colocar imagem dos módulos aqui]

Os módulos foram organizados em categorias de acordo com suas responsabilidades

### data.js

Esse módulo serve para guardar informações fixas do sistema, como nome de pericias, atributos, níveis além das descrições desses mesmos elementos

Os módulos são dividios entre controle de visibilidade de sessões, chamada de elementos do DOM, funções reutilizaveis (ultilitarios), dados do sistema e por fim as funcionalidades especificas de cada parte do código, como por exemplo a lógica da criação da ficha de um jogador, a criação de uma nova campanha, e até as lógicas de jogo mesmo como rolagem de dados, dentre outras coisas.

### DOM.js

Responsável por fazer as chamadas dos elementos DOM

### display.js

Esse módulo é responsável por fazer o controle de visibilidade das sessões, ele controla a navegação entre sessões, a páginação de modais.

### utils.js

### playerSheet.js
