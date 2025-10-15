import { DOM } from "./DOM.js";
import { expertises, attributes } from "./data.js";

// Função que exibe uma seção específica com base no botão clicado
export const display = (sectionSelector, buttonSelector, state) => {
  // Seleciona todas as seções que correspondem à classe fornecida em sectionSelector
  const sections = document.querySelectorAll(`.${sectionSelector}`);

  // Esconde todas as seções selecionadas
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Obtém o valor do atributo 'data-target' do botão
  const buttonTarget = buttonSelector.getAttribute("data-target");

  // Seleciona a seção correspondente ao valor de 'data-target'
  const targetSection = document.querySelector(`.${buttonTarget}`);

  // Se a seção for encontrada, ela é exibida com display: flex
  if (targetSection && state === "open") {
    targetSection.style.display = "flex";
  }
};

export const displayToggle = (id, state) => {
  const element = document.getElementById(id);
  element.style.display = state;
};

//Função para criar elementos no DOM
export const createElement = (tag) => {
  const element = document.createElement(tag);
  return element;
};

export const rollDiceAttribute = (mod, attribute) => {
  DOM.toastDice.innerHTML = "";
  DOM.toastDice.style.display = "flex";

  const rolls = [];

  for (let i = 0; i < mod; i++) {
    rolls.push(Math.floor(Math.random() * 20) + 1);
  }

  const max = Math.max(...rolls);

  const h4 = createElement("h4");
  h4.innerHTML = `${attributes[attribute]}`;

  const div = createElement("div");
  div.innerHTML = "(";

  rolls.forEach((e, i) => {
    const span = createElement("span");

    span.innerHTML = +e + (i < rolls.length - 1 ? ",&nbsp" : ") =&nbsp");

    if (e === max) {
      span.style.fontWeight = "bold";
    }

    div.appendChild(span);
  });

  const totalSpan = createElement("span");
  totalSpan.textContent = max;
  div.appendChild(totalSpan);

  const span = createElement("span");
  span.textContent = "ATRIBUTO";

  DOM.toastDice.appendChild(h4);
  DOM.toastDice.appendChild(div);
  DOM.toastDice.appendChild(span);

  // Inicia o timer de 5 segundos
  setTimeout(() => {
    DOM.toastDice.style.display = "none";
  }, 5000);
};

export const rollDiceExpertise = (btn, mod, expertise) => {
  DOM.toastDice.innerHTML = "";
  DOM.toastDice.style.display = "flex";

  const modifier = Number(btn.dataset.mod);
  const bonus = Number(btn.dataset.bonus);

  const rolls = [];

  for (let i = 0; i < mod; i++) {
    rolls.push(Math.floor(Math.random() * 20) + 1);
  }

  const max = Math.max(...rolls);

  const h4 = createElement("h4");
  h4.innerHTML = `${expertise}`;

  const div = createElement("div");
  div.innerHTML = "(";

  rolls.forEach((e, i) => {
    const span = createElement("span");
    span.innerHTML = +e + (i < rolls.length - 1 ? ",&nbsp" : ")&nbsp");

    if (e === max) {
      span.style.fontWeight = "bold";
    }

    div.appendChild(span);
  });

  const totalSpan = createElement("span");
  totalSpan.textContent = `${bonus} = ${max + modifier + bonus}`;
  div.appendChild(totalSpan);

  const span = createElement("span");
  span.textContent = "PERÍCIA";

  DOM.toastDice.appendChild(h4);
  DOM.toastDice.appendChild(div);
  DOM.toastDice.appendChild(span);

  // Inicia o timer de 5 segundos
  setTimeout(() => {
    DOM.toastDice.style.display = "none";
  }, 5000);
};

export const rollDiceWeapons = () => {};
