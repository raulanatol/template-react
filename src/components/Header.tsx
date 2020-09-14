import React, { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Header: FC = ({ children }) => {
  return <Container>{children}</Container>;
};
