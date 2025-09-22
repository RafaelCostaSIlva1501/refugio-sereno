export const DOM = {
  /* ================ LOGIN/REGISTER ================ */
  register: document.getElementById("register"),
  nameRegister: document.getElementById("name-register"),
  emailRegister: document.getElementById("email-register"),
  passwordRegister: document.getElementById("password-register"),
  btnRegister: document.getElementById("btn-register"),

  login: document.getElementById("login"),
  emailLogin: document.getElementById("email-login"),
  passwordLogin: document.getElementById("password-login"),
  btnLogin: document.getElementById("btn-login"),

  /* ================ CONFIGURAÇÕES ================ */
  theme: document.getElementById("change-theme"),

  /* ================ MENU ================ */
  menu: document.querySelector(".menu"),
  btnMenu: document.querySelectorAll(".button-menu"),

  /* ================ SEÇÕES/MODAIS ================ */
  pages: document.querySelectorAll(".pages"),
  btnPages: document.querySelectorAll(".button-page"),

  modal: document.querySelectorAll(".modal"),
  openModal: document.querySelectorAll(".open-modal"),
  closeModal: document.querySelectorAll(".close-modal"),

  createSheetPersonContent: document.querySelectorAll(
    ".create-sheet-person-content"
  ),
  changeSectionCreateSheetPerson: document.querySelectorAll(
    ".change-section-create-sheet-person"
  ),

  sheetSections: document.querySelectorAll(".sheet-section"),
  btnSheetSection: document.querySelectorAll(".btn-sheet-section"),

  sheetTabDetails: document.querySelectorAll(".sheet-tab-details"),
  btnSheetTabDetails: document.querySelectorAll(".btn-sheet-tab-details"),

  /* ================ INPUTS DE CRIAÇÃO DE PERSONAGEM ================ */

  cspInputs: document.querySelectorAll(".csp-inputs"),
  cspPhoto: document.getElementById("csp-photo"),
  cspName: document.getElementById("csp-name"),
  cspNationality: document.getElementById("csp-nationality"),
  cspAge: document.getElementById("csp-age"),
  cspCampaign: document.getElementById("csp-campaign"),
  cspHistory: document.getElementById("csp-history"),
  cspPersonality: document.getElementById("csp-personality"),
  cspAppearance: document.getElementById("csp-appearance"),
  cspAgi: document.getElementById("csp-agi"),
  cspInt: document.getElementById("csp-int"),
  cspVig: document.getElementById("csp-vig"),
  cspPre: document.getElementById("csp-pre"),
  cspFor: document.getElementById("csp-for"),
  cspExpertises: document.querySelectorAll(".csp-expertises"),

  /* ================ PREVIEW DO FORMULÁRIO DE CRIAÇÃO DE PERSONAGEM ================ */

  previewPhoto: document.querySelectorAll(".preview-photo"),
  previewName: document.getElementById("preview-name"),
  previewNationality: document.getElementById("preview-nationality"),
  previewAge: document.getElementById("preview-age"),
  previewCampaign: document.getElementById("preview-campaign"),
  previewHistory: document.getElementById("preview-history"),
  previewPersonality: document.getElementById("preview-personality"),
  previewAppearance: document.getElementById("preview-appearance"),
  previewLevel: document.getElementById("preview-level"),
  previewOrigin: document.getElementById("preview-origin"),
  previewAgi: document.getElementById("preview-agi"),
  previewInt: document.getElementById("preview-int"),
  previewVig: document.getElementById("preview-vig"),
  previewPre: document.getElementById("preview-pre"),
  previewFor: document.getElementById("preview-for"),
  previewExpertise: document.getElementById("preview-expertise"),
  previewPVbar: document.getElementById("preview-pv-bar"),
  previewPVvalue: document.getElementById("preview-pv-value"),
  previewPDbar: document.getElementById("preview-pd-bar"),
  previewPDvalue: document.getElementById("preview-pd-value"),

  btnCSPDetails: document.querySelectorAll(".btn-CSP-details"),

  btnCreateCharacter: document.getElementById("btn-create-character"),

  listCharacterPlayer: document.getElementById("list-characters-players"),

  /* ================ FICHA DE PLAYER ================ */
  sheetPlayerPhoto: document.getElementById("sheet-player-photo"),
  sheetPlayerName: document.getElementById("sheet-player-name"),
  sheetPlayerNationality: document.getElementById("sheet-player-nationality"),
  sheetPlayerAge: document.getElementById("sheet-player-age"),
  sheetPlayerCampaign: document.getElementById("sheet-player-campaign"),
  sheetPlayerLevel: document.getElementById("sheet-player-level"),
  sheetPlayerOrigin: document.getElementById("sheet-player-origin"),
  sheetPlayerHistory: document.getElementById("sheet-player-history"),
  sheetPlayerPersonality: document.getElementById("sheet-player-personality"),
  sheetPlayerAppearance: document.getElementById("sheet-player-appearance"),
  sheetPlayerNotes: document.getElementById("sheet-player-notes"),

  barPV: document.getElementById("barPV"),
  currentPV: document.getElementById("currentPV"),
  totalPV: document.getElementById("totalPV"),

  barPD: document.getElementById("barPD"),
  currentPD: document.getElementById("currentPD"),
  totalPD: document.getElementById("totalPD"),

  sheetPlayerExpertises: document.getElementById("sheet-expertises"),
};
