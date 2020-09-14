import React, { FC } from 'react';
import { StoreContext, StoreContextProps } from '../contexts/StoreProvider';
import { CounterStore } from '../stores/CounterStore';

interface ProviderProps {
  counterStore?: Partial<CounterStore>;
}

const baseProviders: Partial<ProviderProps> = {};

export const WithProviders: FC<ProviderProps> = ({ counterStore, children }) => {
  const store: StoreContextProps = {
    ...baseProviders,
    counterStore: { ...baseProviders.counterStore, ...counterStore }
  } as StoreContextProps;

  return <StoreContext.Provider value={store}>
    {children}
  </StoreContext.Provider>;
};

