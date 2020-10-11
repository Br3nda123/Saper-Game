import { UI } from './UI.js';

export class Custom extends UI {
   element = this.getElement(this.UISelectors.modalCustom);
   buttonAgree = this.getElement(this.UISelectors.modalCustomButtonAgree);
   buttonCancel = this.getElement(this.UISelectors.modalCustomButtonCancel);
   inputRows = this.getElement(this.UISelectors.modalCustomInputRows);
   inputCols = this.getElement(this.UISelectors.modalCustomInputCols);
   inputMines = this.getElement(this.UISelectors.modalCustomInputMines);
   paragrafErrorModal = this.getElement(this.UISelectors.paragrafError);
   
   customRows;
   customCols;
   customMines;

   getCustomRows = () => this.customRows;
   getCustomCols = () => this.customCols;
   getCustomMines = () => this.customMines;
   setCustomRows = (value) => this.customRows = value;
   setCustomCols = (value) => this.customCols = value;
   setCustomMines = (value) => this.customMines = value;
   
   toggleModal = () => {
      this.element.classList.toggle('hide'); 
   };
   
   cancelCustomModal(startTime) {
      startTime;
      this.element.classList.toggle('hide'); 
      this.clearInputs();
   };
   
   clearInputs() {
      this.inputRows.value = '';
      this.inputCols.value = '';
      this.inputMines.value = '';
      this.paragrafErrorModal.style.visibility = 'hidden';
   };
   
   agreeModalCustomize (rows, cols, mines) {
      this.setCustomRows(rows);
      this.setCustomCols(cols);
      this.setCustomMines(mines);
      this.clearInputs();
      this.toggleModal();
   };
};