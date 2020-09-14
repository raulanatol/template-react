import React, { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.a`
  color: #61dafb;
`;

interface LinkProps {
  url: string;
}

export const Link: FC<LinkProps> = ({ url, children }) => {
  return <Container className="App-link" href={url}>
    {children}
  </Container>;
};
