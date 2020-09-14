import { CounterStore } from './CounterStore';

export class RootStore {
  counterStore: CounterStore;

  constructor() {
    this.counterStore = new CounterStore();
  }
}
