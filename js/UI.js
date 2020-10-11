export class UI{
   UISelectors = {
      board: '[data-board]',
      cell: '[data-cell]',
      counter: '[data-counter]',
      timer: '[data-timer]',
      resetButton: '[data-button-reset]',
      easyButton: '[data-button-easy]',
      normalButton: '[data-button-normal]',
      expertButton: '[data-button-expert]',
      customButton: '[data-button-custom]',
      modal: '[data-modal]',
      modalHeader: '[data-modal-header]',
      modalButton: '[data-modal-button]',
      modalCustom: '[data-custom-modal]',
      modalCustomButtonAgree: '[data-custom-modal-button-agree]',
      modalCustomButtonCancel: '[data-custom-modal-button-cancel]',
      modalCustomInputRows: '[data-custom-modal-input-rows]',
      modalCustomInputCols: '[data-custom-modal-input-cols]',
      modalCustomInputMines: '[data-custom-modal-input-mines]',
      paragrafError: '[data-custom-modal-paragraf]',
   };
   getElement(selector) {
      return document.querySelector(selector);
   };
   getElements(selector) {
      return document.querySelectorAll(selector);
   };
};