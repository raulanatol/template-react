import React, { FC } from 'react';
import logo from './logo.svg';
import styled from '@emotion/styled';
import { keyframes } from 'emotion';

const LogoAnimation = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${LogoAnimation} infinite 20s linear;
  }
`;

export const Logo: FC = () => {
  return <Container src={logo} alt="logo" />;
};
