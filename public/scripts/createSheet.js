import { display, createElement } from "./utilities.js";
import { levels, origins, expertises } from "./data.js";
import { DOM } from "./DOM.js";

// Verifica se já existe um localStorage chamado "characters"
if (!localStorage.getItem("characters")) {
  // Se não existe, inicializa com um objeto básico

  const characters = [];

  localStorage.setItem("characters", JSON.stringify(characters));
}

const characters = JSON.parse(localStorage.getItem("characters"));

let sheet = {
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
  expertise: "",
};

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

const previewSheetImg = () => {
  sheet.photo = DOM.cspPhoto.files[0];
  if (!sheet.photo) return;

  DOM.previewPhoto.forEach((e) => {
    e.src = URL.createObjectURL(sheet.photo);
    console.log("Foi!");
  });
};

const previewSheetInfo = () => {
  sheet.name = DOM.cspName.value;
  sheet.nationality = DOM.cspNationality.value;
  sheet.age = DOM.cspAge.value;
  sheet.campaign = DOM.cspCampaign.value;

  DOM.previewName.textContent = sheet.name;
  DOM.previewNationality.textContent = sheet.nationality;
  DOM.previewAge.textContent = sheet.age;
  DOM.previewCampaign.textContent = sheet.campaign;
};

const previewSheetDetails = () => {
  sheet.history = DOM.cspHistory.value;
  sheet.personality = DOM.cspPersonality.value;
  sheet.appearance = DOM.cspAppearance.value;

  DOM.previewHistory.textContent = sheet.history;
  DOM.previewPersonality.textContent = sheet.personality;
  DOM.previewAppearance.textContent = sheet.appearance;
};

const previewSheetLevel = () => {
  DOM.previewLevel.innerHTML = "";
  const selected = document.querySelector(".csp-levels:checked");
  if (!selected) return; // nenhum selecionado
  const levelValue = selected.value;

  sheet.level = levelValue;

  sheet.pv[0] = levels[levelValue].pv;
  sheet.pd[0] = levels[levelValue].pd;

  const pvValue = Number(sheet.pv[0]) + Number(sheet.pv[1]);
  const pdValue = Number(sheet.pd[0]) + Number(sheet.pd[1]);

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

const previewSheetOrigin = () => {
  DOM.previewOrigin.innerHTML = "";
  const selected = document.querySelector(".csp-origins:checked");
  if (!selected) return;
  const originValue = selected.value;

  sheet.origin = originValue;

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

const previewSheetAttributes = () => {
  sheet.attributes.agi = DOM.cspAgi.value;
  sheet.attributes.int = DOM.cspInt.value;
  sheet.attributes.vig = DOM.cspVig.value;
  sheet.attributes.pre = DOM.cspPre.value;
  sheet.attributes.for = DOM.cspFor.value;

  sheet.pv[1] = DOM.cspVig.value;
  sheet.pd[1] = DOM.cspPre.value;

  const pvValue = Number(sheet.pv[0]) + Number(sheet.pv[1]);
  const pdValue = Number(sheet.pd[0]) + Number(sheet.pd[1]);

  DOM.previewPVbar.max = pvValue;
  DOM.previewPVbar.value = pvValue;
  DOM.previewPVvalue.innerHTML = `${pvValue}/${pvValue}`;

  DOM.previewPDbar.max = pdValue;
  DOM.previewPDbar.value = pdValue;
  DOM.previewPDvalue.innerHTML = `${pdValue}/${pdValue}`;

  DOM.previewAgi.innerHTML = sheet.attributes.agi;
  DOM.previewInt.innerHTML = sheet.attributes.int;
  DOM.previewVig.innerHTML = sheet.attributes.vig;
  DOM.previewPre.innerHTML = sheet.attributes.pre;
  DOM.previewFor.innerHTML = sheet.attributes.for;
};

const previewSheetExpertises = () => {
  const cspExpertises = document.querySelectorAll(".csp-expertises");

  DOM.previewExpertise.innerHTML = "";

  cspExpertises.forEach((e, i) => {
    const span = createElement("span");
    span.innerHTML = expertises[i].name;

    const value = Number(e.value);

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

document.addEventListener("input", (e) => {
  if (e.target.matches(".csp-inputs")) {
    previewSheetImg();
    previewSheetInfo();
    previewSheetDetails();
    previewSheetLevel();
    previewSheetOrigin();
    previewSheetAttributes();
    previewSheetExpertises();
    //console.log(sheet);
  }
});

DOM.btnCreateCharacter.addEventListener("click", () => {
  const reader = new FileReader();

  reader.onload = () => {
    const newCharacter = {
      photo: reader.result,
      name: sheet.name,
      nationality: sheet.nationality,
      age: sheet.age,
      campaign: sheet.campaign,
      level: levels[sheet.level].level,
      origin: origins[sheet.origin].origin[0],
      history: sheet.history,
      personality: sheet.personality,
      appearance: sheet.appearance,

      currentPV: Number(sheet.pv[0]) + Number(sheet.pv[1]),
      totalPV: Number(sheet.pv[0]) + Number(sheet.pv[1]),

      currentPD: Number(sheet.pd[0]) + Number(sheet.pd[1]),
      totalPD: Number(sheet.pd[0]) + Number(sheet.pd[1]),
    };

    characters.push(newCharacter); // adiciona ao array
    localStorage.setItem("characters", JSON.stringify(characters));

    console.log("Personagem salvo com foto, nome e campanha!");

    document.querySelector(".create-sheet-player").style.display = "none";
    renderListPlayer();
  };

  if (sheet.photo) {
    reader.readAsDataURL(sheet.photo);
  }
});

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

const renderSheetPlayer = (index) => {
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

  DOM.barPV.value = characters[index].currentPV;
  DOM.barPV.max = characters[index].currentPV;
  DOM.currentPV.textContent = characters[index].currentPV;
  DOM.totalPV.textContent = characters[index].totalPV;

  DOM.barPD.value = characters[index].currentPD;
  DOM.barPD.max = characters[index].currentPD;
  DOM.currentPD.textContent = characters[index].currentPD;
  DOM.totalPD.textContent = characters[index].totalPD;
};

renderListPlayer();
