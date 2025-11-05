export const DOM = {
  /* ================ CONFIGURAÇÕES ================ */
  theme: document.getElementById("change-theme"),

  /* ================ TOGGLE - NAVIGATION - PAGINATION ================ */

  // TOGGLE
  menu: document.querySelector(".menu"),
  toggleMenu: document.querySelectorAll(".toggle-menu"),

  togglePlayerForm: document.querySelectorAll(".toggle-player-form"),

  modalAddItem: document.getElementById("modal-add-item"),
  toggleModalAddItem: document.querySelectorAll(".toggle-modal-add-item"),

  // NAVIGATION
  globalSections: document.querySelectorAll(".global-sections"),
  navGlobalSections: document.querySelectorAll(".nav-global-sections"),

  previewDetailsSections: document.querySelectorAll(
    ".preview-details-sections"
  ),
  navPreviewDetailsSections: document.querySelectorAll(
    ".nav-preview-details-sections"
  ),

  sheetSections: document.querySelectorAll(".sheet-sections"),
  navSheetSections: document.querySelectorAll(".nav-sheet-sections"),

  sheetDetailsSections: document.querySelectorAll(".sheet-details-sections"),
  navSheetDetailsSections: document.querySelectorAll(
    ".nav-sheet-details-sections"
  ),

  sheetFightSections: document.querySelectorAll(".sheet-fight-sections"),
  navSheetFightSections: document.querySelectorAll(".nav-sheet-fight-sections"),

  modalAddItemSections: document.querySelectorAll("modal-add-item-sections"),
  navAddItemSections: document.querySelectorAll(".nav-add-item-sections"),

  // PAGINATION
  playerFormContent: document.querySelectorAll(".player-form-content"),
  paginationPlayerForm: document.querySelectorAll(".pagination-player-form"),

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

  sheetPlayerDefense: document.getElementById("sheet-player-defense"),
  sheetPlayerDisplacement: document.getElementById("sheet-player-displacement"),
  sheetPlayerBlocking: document.getElementById("sheet-player-blocking"),
  sheetPlayerCounterattack: document.getElementById(
    "sheet-player-counterattack"
  ),
  sheetPlayerDodging: document.getElementById("sheet-player-dodging"),

  barPV: document.getElementById("barPV"),
  currentPV: document.getElementById("currentPV"),
  totalPV: document.getElementById("totalPV"),

  barPD: document.getElementById("barPD"),
  currentPD: document.getElementById("currentPD"),
  totalPD: document.getElementById("totalPD"),

  sheetPlayerAttributes: document.getElementById("sheet-attributes"),
  sheetPlayerExpertises: document.getElementById("sheet-expertises"),

  sheetInventorySlots: document.getElementById("sheet-inventory-slots"),

  toast: document.querySelector(".toast"),
  toastDice: document.getElementById("toast-dice"),
};
