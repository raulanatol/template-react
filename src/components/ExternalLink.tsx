import React, { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.a`
  color: #61dafb;
`;

interface ExternalLinkProps {
  url: string;
}

export const ExternalLink: FC<ExternalLinkProps> = ({ url, children }) => {
  return <Container className="App-link" href={url} target="_blank" rel="noopener noreferrer">
    <span aria-label="External link" role="img">👋 </span>
    {children}
  </Container>;
};
