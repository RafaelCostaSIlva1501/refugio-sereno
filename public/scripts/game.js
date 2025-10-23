import { DOM } from "./DOM.js";
import { createElement } from "./utils.js";

// Gera os números do dado 
export const rollDice = (max, mod) => {
  const rolls = [];

  for (let i = 0; i < mod; i++) {
    rolls.push(Math.floor(Math.random() * max) + 1);
  }

  return rolls;
};


export const buildToastDice = () => {
  const h4 = createElement("h4");

  const div = createElement("div");
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
