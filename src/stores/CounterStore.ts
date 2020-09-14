import { action, observable } from 'mobx';

export class CounterStore {

  @observable
  counter: number;

  constructor() {
    this.counter = 0;
  }

  @action
  incrementCounter() {
    this.counter++;
  }

  @action
  decrementCounter() {
    this.counter--;
  }
}
