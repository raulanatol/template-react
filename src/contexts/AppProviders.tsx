import React, { FC } from 'react';
import { StoreProvider } from './StoreProvider';

export const AppProviders: FC = ({ children }) => {
  return <StoreProvider>
    {children}
  </StoreProvider>;
};
