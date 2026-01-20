/*========== IMPORTAÇÕES ==========*/
import { DOM } from "./DOM.js";
import { display, displayToggle } from "./utils.js";

/*========== UIstate ==========*/

export const toggle = {
  menu: false,
  playerForm: false,
  modalSheetItem: false,
  modalSheetWeapon: false,

  playerFormIndex: 0,

  theme: false,
};

/*========== TOGGLE ==========*/

DOM.toggleMenu.forEach((button) => {
  button.addEventListener("click", () => {
    toggle.menu = !toggle.menu;

    DOM.menu.style.width = toggle.menu ? "220px" : "0px";
    DOM.menu.style.padding = toggle.menu ? "20px 20px" : "20px 0px";
  });
});

DOM.togglePlayerForm.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggle.playerForm = displayToggle(toggle.playerForm, "player-form");
  });
});

DOM.toggleSheetPlayerItem.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggle.modalSheetItem = displayToggle(
      toggle.modalSheetItem,
      "modalSheetItem",
    );
  });
});

DOM.toggleSheetPlayerWeapon.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggle.modalSheetWeapon = displayToggle(
      toggle.modalSheetWeapon,
      "modalSheetWeapon",
    );
  });
});

/*========== NAVIGATION ==========*/

DOM.navGlobalSections.forEach((btn) => {
  btn.addEventListener("click", () => {
    display("global-sections", btn);
  });
});

DOM.navPreviewDetailsSections.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    display("preview-details-sections", btn);

    if (i === 0) {
      btn.innerHTML = "visibility_off";
    } else if (i > 0) {
      DOM.navPreviewDetailsSections[0].innerHTML = "visibility";
    }

    DOM.navPreviewDetailsSections.forEach((e) => {
      e.style.backgroundColor = "var(--cor02)";
      e.style.color = "var(--cor04)";
    });

    btn.style.backgroundColor = "var(--cor04)";
    btn.style.color = "var(--cor01)";
  });
});

/*btn.style.border = "1px solid red"

  btn.addEventListener("click", () => {
    display("preview-details-sections", btn);

    DOM.navPreviewDetailsSections.forEach((btn) => {
      btn.style.backgroundColor = "var(--cor02)";
      btn.style.color = "var(--cor04)";
    });

    btn.style.backgroundColor = "var(--cor04)";
    btn.style.color = "var(--cor01)";

    console.log("Foi!")
  });*/

DOM.navSheetDetailsSections.forEach((btn) => {
  btn.addEventListener("click", () => {
    DOM.navSheetDetailsSections.forEach((e) => {
      e.style.borderBottom = "4px solid var(--cor01)";
      e.style.backgroundColor = "var(--cor02)";
    });

    btn.style.borderBottom = "4px solid var(--cor04)";
    btn.style.backgroundColor = "var(--cor03)";

    display("sheet-details-sections", btn);
  });
});

DOM.navSheetSections.forEach((btn) => {
  btn.addEventListener("click", () => {
    DOM.navSheetSections.forEach((e) => {
      e.style.filter = "none";
      e.style.backgroundColor = "transparent";
    });

    btn.style.filter = "invert(100%)";
    btn.style.backgroundColor = "#000000ff";
    display("sheet-sections", btn);
  });
});

DOM.navSheetFightSections.forEach((btn) => {
  btn.addEventListener("click", () => {
    display("sheet-fight-sections", btn);
  });
});

DOM.navAddItemSections.forEach((btn) => {
  btn.addEventListener("click", () => {
    DOM.navAddItemSections.forEach((e) => {
      e.style.filter = "invert(0%)";
    });

    btn.style.filter = "invert(100%)";

    display("modal-add-item-sections", btn);
  });
});

DOM.navEquipmentSections.forEach((btn) => {
  btn.addEventListener("click", () => {
    DOM.navEquipmentSections.forEach((e) => {
      e.style.filter = "invert(0%)";
    });

    btn.style.filter = "invert(100%)";

    display("equipment-sections", btn);
  });
});

/*========== PAGINATION ==========*/

DOM.paginationPlayerForm.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    // Esconde todas as seções
    DOM.playerFormContent.forEach((e) => {
      e.style.display = "none";
    });

    // Botões de navegação: [0] = voltar, [1] = avançar
    const direction = i === 0 ? -1 : 1;

    toggle.playerFormIndex += direction;

    // Loop circular do índice
    if (toggle.playerFormIndex < 0) {
      toggle.playerFormIndex = DOM.playerFormContent.length - 1;
    } else if (toggle.playerFormIndex >= DOM.playerFormContent.length) {
      toggle.playerFormIndex = 0;
    }

    // Mostra o formulário atual
    DOM.playerFormContent[toggle.playerFormIndex].style.display = "flex";
  });
});

DOM.theme.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("light");
});
