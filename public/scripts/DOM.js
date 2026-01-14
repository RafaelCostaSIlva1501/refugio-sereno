export const DOM = {
  /* ================ CONFIGURAÇÕES ================ */

  theme: document.getElementById("change-theme"),

  /* ================ TOGGLE - NAVIGATION - PAGINATION ================ */

  // TOGGLE
  menu: document.querySelector(".menu"),
  toggleMenu: document.querySelectorAll(".toggle-menu"),

  togglePlayerForm: document.querySelectorAll(".toggle-player-form"),

  toggleSheetPlayerItem: document.querySelectorAll(".toggle-sheet-player-item"),

  toggleSheetPlayerWeapon: document.querySelectorAll(
    ".toggle-sheet-player-weapon"
  ),

  modalAddItem: document.getElementById("modal-add-item"),

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

  equipmentSections: document.querySelectorAll(".equipment-sections"),
  navEquipmentSections: document.querySelectorAll(".nav-equipment-sections"),

  // PAGINATION
  playerFormContent: document.querySelectorAll(".player-form-content"),
  paginationPlayerForm: document.querySelectorAll(".pagination-player-form"),

  /* ================ FORMULÁRIO DE CRIAÇÃO DE FICHA DE PLAYER ================ */

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
  SPinventory: document.getElementById("sheet-inventory"),

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
  sheetPlayerPerception: document.getElementById("sheet-player-perception"),
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

  barStatusBtn: document.querySelectorAll(".bar-status-btn"),

  SPstatsWeaponsName: document.getElementById(""),
  SPstatsWeaponsWeight: document.getElementById(""),
  SPstatsWeaponsImg: document.getElementById(""),
  SPstatsWeaponsCategory: document.getElementById(""),
  SPstatsWeaponsDamage: document.getElementById(""),
  SPstatsWeaponsCritical: document.getElementById(""),
  SPstatsWeaponsMargin: document.getElementById(""),
  SPstatsWeaponsRange: document.getElementById(""),
  SPstatsWeaponsType: document.getElementById(""),

  sheetPlayerAttributes: document.getElementById("sheet-attributes"),
  sheetPlayerExpertises: document.getElementById("sheet-expertises"),

  SPinventorySlots: document.getElementById("SP-inventory-slots"),
  SPinventoryCurrent: document.getElementById("SP-inventory-current-items"),
  SPinventoryTotal: document.getElementById("SP-inventory-total-items"),

  SPlistItemsInput: document.getElementById("SP-list-items-input"),
  SPitemImageInput: document.getElementById("SP-image-item-input"),
  SPitemImagePreview: document.getElementById("SP-image-item-preview"),
  SPitemNameInput: document.getElementById("SP-name-item-input"),
  SPitemWeightInput: document.getElementById("SP-weight-item-input"),
  SPitemDescInput: document.getElementById("SP-desc-item-input"),
  SPaddItemBtn: document.getElementById("SP-add-item-btn"),

  SPlistWeaponsInput: document.getElementById("SP-list-weapons-input"),
  SPweaponImageInput: document.getElementById("SP-image-weapon-input"),
  SPweaponImagePreview: document.getElementById("SP-image-weapon-preview"),
  SPweaponNameInput: document.getElementById("SP-name-weapon-input"),
  SPweaponWeightInput: document.getElementById("SP-weight-weapon-input"),
  SPweaponCategoryInput: document.getElementById("SP-category-weapon-input"),
  SPweaponDamageQtyInput: document.getElementById("SP-damage-qty-weapon-input"),
  SPweaponDamageDiceInput: document.getElementById(
    "SP-damage-dice-weapon-input"
  ),
  SPweaponTypeInput: document.getElementById("SP-type-weapon-input"),
  SPweaponRangeInput: document.getElementById("SP-range-weapon-input"),
  SPweaponMarginInput: document.getElementById("SP-margin-weapon-input"),
  SPweaponMultiplierInput: document.getElementById(
    "SP-multiplier-weapon-input"
  ),
  SPaddWeaponBtn: document.getElementById("SP-add-weapon-btn"),

  toast: document.querySelector(".toast"),
  toastDice: document.getElementById("toast-dice"),

  /* ================ RENDER ================ */
  equipmentWeapons: document.getElementById("equipment-weapons"),
  equipmentKit: document.getElementById("equipment-kits"),
};
