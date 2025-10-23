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


