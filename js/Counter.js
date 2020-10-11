import { UI } from './UI.js';

export class Counter extends UI{
   value = null;
   #element = null;

   init() {
      this.#element = this.getElement(this.UISelectors.counter);
   };

   setValue(value) {
      this.value = value;
      this.#updataValue();
   };

   increment() {
      this.value++;
      this.#updataValue();
   };

   decrement() {
      this.value--;
      this.#updataValue();
   };

   #updataValue() {
      this.#element.textContent = this.value;
   };
};