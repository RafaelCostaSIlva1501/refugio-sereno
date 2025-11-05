import { DOM } from "./DOM.js";
import { expertises, attributes } from "./data.js";

// Função que exibe uma seção específica com base no botão clicado
export const display = (sectionSelector, buttonSelector) => {
  // Seleciona todas as seções que correspondem à classe fornecida em sectionSelector
  const sections = document.querySelectorAll(`.${sectionSelector}`);

  // Esconde todas as seções selecionadas
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Obtém o valor do atributo 'data-target' do botão
  const buttonTarget = buttonSelector.getAttribute("data-target");

  // Seleciona a seção correspondente ao valor de 'data-target'
  const targetSection = document.getElementById(`${buttonTarget}`);

  targetSection.style.display = "flex";
};

export const displayToggle = (state, id) => {
  const newState = !state;

  const element = document.getElementById(id);

  element.style.display = newState ? "flex" : "none";

  return newState;
};

//Função para criar elementos no DOM
export const createElement = (tag) => {
  const element = document.createElement(tag);
  return element;
};
