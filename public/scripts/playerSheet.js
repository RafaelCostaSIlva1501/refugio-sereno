/* ========== IMPORTAÇÕES ========== */
import { DOM } from "./DOM.js";

import { levels, origins, attributes, expertises } from "./data.js";

import {
  display,
  createElement,
  rollDiceAttribute,
  rollDiceExpertise,
} from "./utilities.js";

/* ========== INICIALIZAÇÃO DE VARIÁVEIS ========== */

const characters = JSON.parse(localStorage.getItem("characters"));

let tempCharacter = {
  photo: "",
  name: "",
  nationality: "",
  age: "",
  campaign: "",
  history: "",
  personality: "",
  appearance: "",
  pv: [0, 0],
  pd: [0, 0],
  level: "",
  origin: "",
  attributes: {
    agi: 1,
    int: 1,
    vig: 1,
    pre: 1,
    for: 1,
  },

  expertises: [],
};

let newCharacter = {
  photo: "",

  name: "",
  nationality: "",
  age: "",
  campaign: "",

  level: "",

  origin: "",

  history: "",
  personality: "",
  appearance: "",
  notes: "",

  currentPV: "",
  totalPV: "",

  currentPD: "",
  totalPD: "",

  agi: "",
  int: "",
  vig: "",
  pre: "",
  for: "",

  expertises: "",

  defense: "",
  displacement: "",
  blocking: "",
  counterattack: "",
  dodging: "",
};

/* ========== RENDERIZAÇÃO DE ELEMENTOS NO FORMULÁRIO ========== */

// Renderiza os níveis no formulário
levels.forEach((e, i) => {
  const label = createElement("label");
  label.htmlFor = `csp-level${i}`;

  const radio = createElement("input");
  radio.type = "radio";
  radio.name = "level";
  radio.value = i;
  radio.id = `csp-level${i}`;
  radio.classList.add("csp-inputs", "csp-levels");

  if (document.getElementById("csp-age").value < e.requirements[1]) {
    label.classList.add("disabled-level");
  }

  document.getElementById("csp-age").addEventListener("input", () => {
    if (document.getElementById("csp-age").value < e.requirements[1]) {
      label.classList.add("disabled-level");
    } else {
      label.classList.remove("disabled-level");
    }
  });

  const h3 = createElement("h3");
  h3.textContent = `Nível ${e.level}`;

  const pv = createElement("p");
  const pvSpan = createElement("span");
  pv.textContent = `PV Iniciais: `;
  pvSpan.textContent = `${e.pv} + Vigor`;

  const pd = createElement("p");
  const pdSpan = createElement("span");
  pd.textContent = `PD Iniciais: `;
  pdSpan.textContent = `${e.pd} + Presença`;

  const expertise = createElement("p");
  const expertiseSpan = createElement("span");
  expertise.textContent = `Perícias: `;
  expertiseSpan.textContent = `${e.expertise} + Inteligência`;

  const power = createElement("p");
  const powerSpan = createElement("span");
  power.textContent = `Poder: `;
  powerSpan.textContent = `${e.power}`;

  const attributes = createElement("p");
  const attributesSpan = createElement("span");
  attributes.textContent = `Atributos: `;
  attributesSpan.textContent = `${e.attributes}`;

  const requirements = createElement("p");
  const requirementsSpan = createElement("span");
  requirements.textContent = `Requisitos: `;
  requirementsSpan.textContent = `${e.requirements[0]}`;

  document.querySelector(".create-sheet-level").appendChild(label);

  label.appendChild(radio);
  label.appendChild(h3);
  label.appendChild(pv);
  pv.appendChild(pvSpan);
  label.appendChild(pd);
  pd.appendChild(pdSpan);
  label.appendChild(expertise);
  expertise.appendChild(expertiseSpan);
  label.appendChild(power);
  power.appendChild(powerSpan);
  label.appendChild(attributes);
  attributes.appendChild(attributesSpan);
  label.appendChild(requirements);
  requirements.appendChild(requirementsSpan);
});

// Renderiza as origens no formulário
origins.forEach((e, i) => {
  const label = createElement("label");
  label.htmlFor = `csp-origins${i}`;

  const radio = createElement("input");
  radio.type = "radio";
  radio.value = i;
  radio.name = "origin";
  radio.classList.add("csp-inputs", "csp-origins");
  radio.id = `csp-origins${i}`;

  const details = createElement("details");

  const summary = createElement("summary");
  summary.appendChild(document.createTextNode(` ${e.origin[0]}`));

  const p = createElement("p");
  p.textContent = e.origin[1];

  const p2 = createElement("p");
  p2.innerHTML = `<span>Perícias Treinadas:</span> ${e.expertises.join(" e ")}`;

  const p3 = createElement("p");
  p3.innerHTML = `<span>${e.power[0]}:</span> ${e.power[1]}`;

  document.querySelector(".create-sheet-origins").appendChild(label);
  label.appendChild(details);
  details.appendChild(summary);
  summary.appendChild(radio);
  details.appendChild(p);
  details.appendChild(p2);
  details.appendChild(p3);
});

// Renderiza as perícias no formulário
expertises.forEach((e, i) => {
  const abbr = createElement("abbr");
  abbr.title = e.info;

  const article = createElement("article");

  const span = createElement("span");
  span.textContent = e.name;

  const select = createElement("select");
  select.classList.add("csp-inputs", "csp-expertises");
  select.addEventListener("change", () => {
    const color = ["#333", "#1faa52", "#ef4444", "#362d85"];

    if (select.value === "0") {
      span.style.backgroundColor = color[0];
    } else if (select.value === "5") {
      span.style.backgroundColor = color[1];
    } else if (select.value === "10") {
      span.style.backgroundColor = color[2];
    } else if (select.value === "15") {
      span.style.backgroundColor = color[3];
    }
  });

  const opt1 = createElement("option");
  opt1.textContent = "Destreinado";
  opt1.value = 0;

  const opt2 = createElement("option");
  opt2.textContent = "Treinado";
  opt2.value = 5;

  const opt3 = createElement("option");
  opt3.textContent = "Veterano";
  opt3.value = 10;

  const opt4 = createElement("option");
  opt4.textContent = "Expert";
  opt4.value = 15;

  document.querySelector(".create-sheet-expertises").appendChild(abbr);
  abbr.appendChild(article);
  article.appendChild(span);
  article.appendChild(select);
  select.appendChild(opt1);
  select.appendChild(opt2);
  select.appendChild(opt3);
  select.appendChild(opt4);
});

/* ========== RECOLHIMENTO DAS INFORMAÇÕES + PREVIEW DA FICHA  ========== */

// Atualiza a imagem da ficha
const updateSheetImg = () => {
  tempCharacter.photo = DOM.cspPhoto.files[0];
  if (!tempCharacter.photo) return;

  DOM.previewPhoto.forEach((e) => {
    e.src = URL.createObjectURL(tempCharacter.photo);
    console.log("Foi!");
  });
};

// Atualiza a imagem da ficha
const updateSheetInfo = () => {
  tempCharacter.name = DOM.cspName.value;
  tempCharacter.nationality = DOM.cspNationality.value;
  tempCharacter.age = DOM.cspAge.value;
  tempCharacter.campaign = DOM.cspCampaign.value;

  DOM.previewName.textContent = tempCharacter.name;
  DOM.previewNationality.textContent = tempCharacter.nationality;
  DOM.previewAge.textContent = tempCharacter.age;
  DOM.previewCampaign.textContent = tempCharacter.campaign;
};

// Atualiza a imagem da ficha
const updateSheetDetails = () => {
  tempCharacter.history = DOM.cspHistory.value;
  tempCharacter.personality = DOM.cspPersonality.value;
  tempCharacter.appearance = DOM.cspAppearance.value;

  DOM.previewHistory.textContent = tempCharacter.history;
  DOM.previewPersonality.textContent = tempCharacter.personality;
  DOM.previewAppearance.textContent = tempCharacter.appearance;
};

// Atualiza a imagem da ficha
const updateSheetLevel = () => {
  DOM.previewLevel.innerHTML = "";
  const selected = document.querySelector(".csp-levels:checked");
  if (!selected) return; // nenhum selecionado
  const levelValue = selected.value;

  tempCharacter.level = levelValue;

  tempCharacter.pv[0] = levels[levelValue].pv;
  tempCharacter.pd[0] = levels[levelValue].pd;

  const pvValue = Number(tempCharacter.pv[0]) + Number(tempCharacter.pv[1]);
  const pdValue = Number(tempCharacter.pd[0]) + Number(tempCharacter.pd[1]);

  DOM.previewPVbar.max = pvValue;
  DOM.previewPVbar.value = pvValue;
  DOM.previewPVvalue.innerHTML = `${pvValue}/${pvValue}`;

  DOM.previewPDbar.max = pdValue;
  DOM.previewPDbar.value = pdValue;
  DOM.previewPDvalue.innerHTML = `${pdValue}/${pdValue}`;

  const level = createElement("p");
  level.innerHTML = `Nível: <span>${levels[levelValue].level}</span>`;

  const pv = createElement("p");
  pv.innerHTML = `PV Iniciais: <span>${levels[levelValue].pv} + Vigor</span>`;

  const pd = createElement("p");
  pd.innerHTML = `PD Iniciais: <span>${levels[levelValue].pd} + Presença</span>`;

  const expertise = createElement("p");
  expertise.innerHTML = `Perícias: <span>${levels[levelValue].expertise} + Inteligência</span>`;

  const power = createElement("p");
  power.innerHTML = `Poder: <span>${levels[levelValue].power}</span>`;

  const attributes = createElement("p");
  attributes.innerHTML = `Atributos: <span>${levels[levelValue].attributes}</span>`;

  const requirements = createElement("p");
  requirements.innerHTML = `Requisitos: <span>${levels[levelValue].requirements[0]}</span>`;

  DOM.previewLevel.appendChild(level);
  DOM.previewLevel.appendChild(pv);
  DOM.previewLevel.appendChild(pd);
  DOM.previewLevel.appendChild(expertise);
  DOM.previewLevel.appendChild(power);
  DOM.previewLevel.appendChild(attributes);
  DOM.previewLevel.appendChild(requirements);
};

// Atualiza a imagem da ficha
const updateSheetOrigin = () => {
  DOM.previewOrigin.innerHTML = "";
  const selected = document.querySelector(".csp-origins:checked");
  if (!selected) return;
  const originValue = selected.value;

  tempCharacter.origin = originValue;

  const h4 = createElement("h4");
  h4.textContent = origins[originValue].origin[0];

  const description = createElement("p");
  description.textContent = origins[originValue].origin[1];

  const expertise = createElement("p");
  expertise.innerHTML = `<span>Perícias Treinadas: </span>${origins[
    originValue
  ].expertises.join(" e ")}`;

  const power = createElement("p");
  power.innerHTML = `<span>${origins[originValue].power[0]}:</span> ${origins[originValue].power[1]}`;

  DOM.previewOrigin.appendChild(h4);
  DOM.previewOrigin.appendChild(description);
  DOM.previewOrigin.appendChild(expertise);
  DOM.previewOrigin.appendChild(power);
};

// Atualiza a imagem da ficha
const updateSheetAttributes = () => {
  tempCharacter.attributes.agi = DOM.cspAgi.value;
  tempCharacter.attributes.int = DOM.cspInt.value;
  tempCharacter.attributes.vig = DOM.cspVig.value;
  tempCharacter.attributes.pre = DOM.cspPre.value;
  tempCharacter.attributes.for = DOM.cspFor.value;

  tempCharacter.pv[1] = DOM.cspVig.value;
  tempCharacter.pd[1] = DOM.cspPre.value;

  const pvValue = Number(tempCharacter.pv[0]) + Number(tempCharacter.pv[1]);
  const pdValue = Number(tempCharacter.pd[0]) + Number(tempCharacter.pd[1]);

  DOM.previewPVbar.max = pvValue;
  DOM.previewPVbar.value = pvValue;
  DOM.previewPVvalue.innerHTML = `${pvValue}/${pvValue}`;

  DOM.previewPDbar.max = pdValue;
  DOM.previewPDbar.value = pdValue;
  DOM.previewPDvalue.innerHTML = `${pdValue}/${pdValue}`;

  DOM.previewAgi.innerHTML = tempCharacter.attributes.agi;
  DOM.previewInt.innerHTML = tempCharacter.attributes.int;
  DOM.previewVig.innerHTML = tempCharacter.attributes.vig;
  DOM.previewPre.innerHTML = tempCharacter.attributes.pre;
  DOM.previewFor.innerHTML = tempCharacter.attributes.for;
};

// Atualiza a imagem da ficha
const updatewSheetExpertises = () => {
  const cspExpertises = document.querySelectorAll(".csp-expertises");

  DOM.previewExpertise.innerHTML = "";

  cspExpertises.forEach((e, i) => {
    const span = createElement("span");
    span.innerHTML = expertises[i].name;

    const value = Number(e.value);

    // atualiza o sheet.expertises na posição correta
    tempCharacter.expertises[i] = value;

    if (value === 0) {
      span.style.color = "var(--cor04)";
    } else if (value === 5) {
      span.style.color = "var(--cor08)";
    } else if (value === 10) {
      span.style.color = "var(--cor06)";
    } else if (value === 15) {
      span.style.color = "var(--cor05)";
    }

    DOM.previewExpertise.appendChild(span);
  });
};

// Atualiza todo o preview e a ficha
document.addEventListener("input", (inputs) => {
  if (inputs.target.matches(".csp-inputs")) {
    updateSheetImg();
    updateSheetInfo();
    updateSheetDetails();
    updateSheetLevel();
    updateSheetOrigin();
    updateSheetAttributes();
    updatewSheetExpertises();
  }
});

/* ========== RECOLHIMENTO DAS INFORMAÇÕES + PREVIEW DA FICHA  ========== */

const photoCharacter = () => {
  return new Promise((resolve, reject) => {
    if (!tempCharacter.photo) {
      newCharacter.photo = "";
      return resolve(); // se não houver foto, apenas resolve
    }

    const reader = new FileReader();

    reader.onload = () => {
      newCharacter.photo = reader.result;
      resolve();
    };

    reader.onerror = () => reject("Erro ao ler a foto");

    reader.readAsDataURL(tempCharacter.photo);
  });
};

const infosCharacter = () => {
  newCharacter.name = tempCharacter.name;
  newCharacter.nationality = tempCharacter.nationality;
  newCharacter.age = tempCharacter.age;
  newCharacter.campaign = tempCharacter.campaign;
  newCharacter.level = levels[tempCharacter.level].level;
  newCharacter.origin = origins[tempCharacter.origin].origin[0];
};

const detailsCharacter = () => {
  newCharacter.history = tempCharacter.history;
  newCharacter.personality = tempCharacter.personality;
  newCharacter.appearance = tempCharacter.appearance;
};

const statsBarCharacter = () => {
  newCharacter.currentPV =
    Number(tempCharacter.pv[0]) + Number(tempCharacter.pv[1]);

  newCharacter.totalPV =
    Number(tempCharacter.pv[0]) + Number(tempCharacter.pv[1]);

  newCharacter.currentPD =
    Number(tempCharacter.pd[0]) + Number(tempCharacter.pd[1]);

  newCharacter.totalPD =
    Number(tempCharacter.pd[0]) + Number(tempCharacter.pd[1]);
};

const passivesCharacter = () => {
  newCharacter.defense = Number(tempCharacter.attributes.agi) + 10;

  newCharacter.displacement = 9;

  newCharacter.blocking = tempCharacter.expertises[9];

  newCharacter.counterattack = tempCharacter.expertises[15];

  newCharacter.dodging = tempCharacter.expertises[22];
};

const attributesCharacter = () => {
  newCharacter.agi = tempCharacter.attributes.agi;
  newCharacter.int = tempCharacter.attributes.int;
  newCharacter.vig = tempCharacter.attributes.vig;
  newCharacter.pre = tempCharacter.attributes.pre;
  newCharacter.for = tempCharacter.attributes.for;
};

const expertisesCharacter = () => {
  newCharacter.expertises = tempCharacter.expertises;
};

const createCharacter = async () => {
  // Verifica se já existe um localStorage chamado "characters"
  if (!localStorage.getItem("characters")) {
    // Se não existe, inicializa com um objeto básico
    const characters = [];

    localStorage.setItem("characters", JSON.stringify(characters));
  }

  const character = { ...newCharacter };

  await photoCharacter();
  infosCharacter();
  detailsCharacter();
  statsBarCharacter();
  passivesCharacter();
  attributesCharacter();
  expertisesCharacter();

  characters.push(newCharacter);

  localStorage.setItem("characters", JSON.stringify(characters));

  console.log("Personagem salvo!");

  document.querySelector(".create-sheet-player").style.display = "none";

  renderListPlayer();
};

DOM.btnCreateCharacter.addEventListener("click", () => {
  createCharacter();
});

/* ========== RENDERIZAR PERSONAGENS ========== */

const renderListPlayer = () => {
  DOM.listCharacterPlayer.innerHTML = "";

  characters.forEach((s, i) => {
    const article = createElement("article");
    article.setAttribute("data-target", "sheet");
    article.classList.add("button-page");
    article.addEventListener("click", () => {
      display("pages", article, "open");
      renderSheetPlayer(i);
    });

    const img = createElement("img");
    img.src = s.photo;
    img.alt = "Foto do personagem";

    const div = createElement("div");

    const h2 = createElement("h2");
    h2.textContent = s.name;

    const p = createElement("p");
    p.textContent = s.campaign;

    DOM.listCharacterPlayer.appendChild(article);
    article.appendChild(img);
    article.appendChild(div);
    div.appendChild(h2);
    div.appendChild(p);
  });
};

renderListPlayer();

/* ========== RENDERIZAR FICHA DO PERSONAGEM ========== */

const renderSheetInfos = (index) => {
  DOM.sheetPlayerPhoto.src = characters[index].photo;
  DOM.sheetPlayerName.textContent = characters[index].name;
  DOM.sheetPlayerNationality.textContent = characters[index].nationality;
  DOM.sheetPlayerAge.textContent = characters[index].age;
  DOM.sheetPlayerCampaign.textContent = characters[index].campaign;
  DOM.sheetPlayerLevel.textContent = characters[index].level;
  DOM.sheetPlayerOrigin.textContent = characters[index].origin;
  DOM.sheetPlayerHistory.value = characters[index].history;
  DOM.sheetPlayerPersonality.value = characters[index].personality;
  DOM.sheetPlayerAppearance.value = characters[index].appearance;
};

const renderSheetStats = (index) => {
  DOM.barPV.value = characters[index].currentPV;
  DOM.barPV.max = characters[index].currentPV;
  DOM.currentPV.textContent = characters[index].currentPV;
  DOM.totalPV.textContent = characters[index].totalPV;

  DOM.barPD.value = characters[index].currentPD;
  DOM.barPD.max = characters[index].currentPD;
  DOM.currentPD.textContent = characters[index].currentPD;
  DOM.totalPD.textContent = characters[index].totalPD;

  DOM.sheetPlayerDefense.textContent = characters[index].defense;
  DOM.sheetPlayerDisplacement.textContent = characters[index].displacement;
  DOM.sheetPlayerBlocking.textContent = characters[index].blocking;
  DOM.sheetPlayerCounterattack.textContent = characters[index].counterattack;
  DOM.sheetPlayerDodging.textContent = characters[index].dodging;
};

const renderSheetRollDices = (index) => {
  DOM.sheetPlayerAttributes.innerHTML = "";
  DOM.sheetPlayerExpertises.innerHTML = "";

  attributes.forEach((e, i) => {
    const button = createElement("button");
    button.dataset.mod = characters[index][e.toLowerCase()];

    button.addEventListener("click", () => {
      rollDiceAttribute(characters[index][e.toLocaleLowerCase()], i);
    });

    const name = createElement("span");
    name.textContent = e.toLocaleUpperCase();

    const value = createElement("span");
    value.textContent = characters[index][e.toLocaleLowerCase()];

    button.appendChild(name);
    button.appendChild(value);
    DOM.sheetPlayerAttributes.appendChild(button);
  });

  characters[index].expertises.forEach((exper, i) => {
    const button = createElement("button");

    button.dataset.mod = characters[index][expertises[i].attribute];

    button.dataset.bonus = exper;

    button.addEventListener("click", () => {
      rollDiceExpertise(
        button,
        characters[index][expertises[i].attribute],
        expertises[i].name
      );
    });

    let colorDice = "#e0e0e0";

    if (exper === 5) {
      colorDice = "var(--cor08)";
    } else if (exper === 10) {
      colorDice = "var(--cor06)";
    } else if (exper === 15) {
      colorDice = "var(--cor05)";
    }

    const span = createElement("span");
    span.style.color = colorDice;
    span.innerHTML = ` 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            viewBox="0 0 640 640"
          >
            <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              fill="${colorDice}"
              d="M292.2 53.8C309.8 45.3 330.3 45.3 347.9 53.8L351.6 55.8L543.6 164.6C562.4 175.3 574.4 194.6 575.9 216L576.1 220.3L576.1 435.8C576.1 457.4 565.2 477.5 547.3 489.2L543.6 491.4L351.6 600.2C332 611.3 308 611.3 288.5 600.2L96.4 491.4C76.4 480.1 64 458.8 64 435.8L64 220.3L64.2 216C65.6 194.6 77.7 175.3 96.5 164.6L288.5 55.8L292.2 53.8zM296 549.4L296 493.7L161 472.9L296 549.4zM344 493.7L344 549.4L478.9 473L344 493.8zM141.4 421.3L276.4 442.1L214.1 324.6L141.4 421.3zM363.6 442.1L498.6 421.3L425.9 324.6L363.6 442.1zM320 421.8L382.5 304L257.5 304L320 421.8zM112 380.5L183.2 285.8L112 238.1L112 380.5zM456.8 285.8L528 380.5L528 238.2L456.8 285.9zM256.9 256L383.1 256L320 133.1L256.9 256zM136.7 196.9L208.6 245.1L272.9 119.7L136.7 196.9zM431.5 245L503.3 196.9L367.1 119.7L431.4 245z"
            />
          </svg> 
          + ${exper}`;

    const expertise = createElement("span");
    expertise.style.color = colorDice;
    expertise.textContent = expertises[i].name;

    button.appendChild(span);
    button.appendChild(expertise);
    DOM.sheetPlayerExpertises.appendChild(button);
  });
};

// const renderSheetInventory = (index) => {};

// const renderSheetMistery = (index) => {};

const renderSheetPlayer = (index) => {
  renderSheetInfos(index);
  renderSheetStats(index);
  renderSheetRollDices(index);
};

renderListPlayer();

/* ========== FUNCIONALIDADES DA FICHA ========== */


