import { DOM } from "./DOM.js";

import { display, createElement } from "./utils.js";

import {
  levels,
  origins,
  attributes,
  expertises,
  weapons,
  items,
} from "./data.js";

weapons.forEach((weapon, i) => {
  const details = createElement("details");

  const summary = createElement("summary");

  const img = createElement("img");
  img.src = weapon.img;

  const span = createElement("span");
  span.textContent = weapon.name;

  const category = createElement("p");
  category.textContent = `Categoria: ${weapon.category}`;

  const critical = createElement("p");
  critical.textContent = `Crítico: ${weapon.critical}`;

  const margin = createElement("p");
  margin.textContent = `Margem: ${weapon.margin}`;

  const range = createElement("p");
  range.textContent = `Alcance: ${weapon.range}`;

  const type = createElement("p");
  type.textContent = `Alcance: ${weapon.type}`;

  DOM.equipmentWeapons.appendChild(details);
  details.appendChild(summary);
  summary.appendChild(img);
  summary.appendChild(span);
  details.appendChild(category);
  details.appendChild(critical);
  details.appendChild(margin);
  details.appendChild(range);
  details.appendChild(type);
});

/*
items.forEach((kit, i) => {
  const details = createElement("details");

  const summary = createElement("summary");

  const img = createElement("img");

  const span = createElement("span");
  span.textContent = kit.name;

  const p = createElement("p");
  p.innerHTML = kit.desc;

  DOM.equipmentKit.appendChild(details);
  details.appendChild(summary);
  summary.appendChild(img);
  summary.appendChild(span);
  details.appendChild(p);
});
*/