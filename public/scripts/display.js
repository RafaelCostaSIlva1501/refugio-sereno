/*========== IMPORTAÇÕES ==========*/
import { DOM } from "./DOM.js";
import { display } from "./utils.js";

/*========== UIstate ==========*/

export const UIstate = {
  menu: false,
};

/*========== MENUS ==========*/

DOM.btnMenu.forEach((button) => {
  button.addEventListener("click", () => {
    UIstate.menu = !UIstate.menu;

    DOM.menu.style.width = UIstate.menu ? "220px" : "0px";
    DOM.menu.style.padding = UIstate.menu ? "20px 20px" : "20px 0px";
  });
});

/*========== IMPORTAÇÕES ==========*/

DOM.btnPages.forEach((e) => {
  e.addEventListener("click", () => {
    display("pages", e, "open");
  });
});

/*========== IMPORTAÇÕES ==========*/

/*========== IMPORTAÇÕES ==========*/

DOM.theme.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("light");
});

DOM.openModal.forEach((e) => {
  e.addEventListener("click", () => {
    display("modal", e, "open");
  });
});

DOM.closeModal.forEach((e) => {
  e.addEventListener("click", () => {
    display("modal", e);
  });
});

let currentForm = 0;

DOM.createSheetPersonContent[0].style.display = "flex";

DOM.changeSectionCreateSheetPerson[0].addEventListener("click", () => {
  DOM.createSheetPersonContent.forEach((e) => {
    e.style.display = "none";
  });

  currentForm = currentForm - 1;

  if (currentForm < 0) {
    currentForm = DOM.createSheetPersonContent.length - 1;
  }

  DOM.createSheetPersonContent[currentForm].style.display = "flex";
});

DOM.changeSectionCreateSheetPerson[1].addEventListener("click", () => {
  DOM.createSheetPersonContent.forEach((e) => {
    e.style.display = "none";
  });

  currentForm = currentForm + 1;

  if (currentForm > DOM.createSheetPersonContent.length - 1) {
    currentForm = 0;
  }

  DOM.createSheetPersonContent[currentForm].style.display = "flex";
});

DOM.btnCSPDetails.forEach((e, i) => {
  e.addEventListener("click", () => {
    display("preview-details", e, "open");

    DOM.btnCSPDetails.forEach((btn) => {
      btn.style.backgroundColor = "var(--cor02)";
      btn.style.color = "var(--cor04)";
    });

    if (i === 0) {
      e.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#121212"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>`;
    } else {
      DOM.btnCSPDetails[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e0e0e0"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>`;
    }

    e.style.backgroundColor = "var(--cor04)";
    e.style.color = "var(--cor01)";
  });
});

DOM.btnSheetSection.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    DOM.btnSheetSection.forEach((e) => {
      e.style.filter = "none";
      e.style.backgroundColor = "transparent";
    });

    btn.style.filter = "invert(100%)";
    btn.style.backgroundColor = "#000000ff";
    display("sheet-section", btn, "open");
  });
});

DOM.btnSheetTabDetails.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    DOM.btnSheetTabDetails.forEach((e) => {
      e.style.borderBottom = "4px solid var(--cor01)";
      e.style.backgroundColor = "var(--cor02)";
    });

    btn.style.borderBottom = "4px solid var(--cor04)";
    btn.style.backgroundColor = "var(--cor03)";

    display("sheet-tab-details", btn, "open");
  });
});
