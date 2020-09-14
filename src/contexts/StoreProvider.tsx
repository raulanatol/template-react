import React, { createContext, FC, useContext } from 'react';
import { useLocalStore } from 'mobx-react';
import { RootStore } from '../stores/RootStore';
import { CounterStore } from '../stores/CounterStore';

interface StoreContextProps {
  counterStore: CounterStore;
}

const StoreContext = createContext<StoreContextProps | null>(null);

const createStores = () => (): StoreContextProps => {
  const rootStore = new RootStore();
  return {
    counterStore: rootStore.counterStore
  };
};

export const StoreProvider: FC = ({ children }) => {
  const store = useLocalStore(createStores());
  return <StoreContext.Provider value={store}>
    {children}
  </StoreContext.Provider>;
};

export const useStoreContext = (): StoreContextProps => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error(`useStoreContext must be used within a StoreProvider`);
  }
  return store;
};

export const useCounterStore = (): CounterStore => useStoreContext().counterStore;
