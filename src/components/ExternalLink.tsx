import React, { FC } from 'react';

interface ExternalLinkProps {
  url: string;
}

export const ExternalLink: FC<ExternalLinkProps> = ({ url, children }) => {
  return <a className="App-link" href={url} target="_blank" rel="noopener noreferrer">
    <span aria-label="External link" role="img">👋 </span>
    {children}
  </a>;
};
