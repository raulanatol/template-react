import React, { FC } from 'react';

interface LinkProps {
  url: string;
}

export const Link: FC<LinkProps> = ({ url, children }) => {
  return <a className="App-link" href={url}>
    {children}
  </a>;
};
