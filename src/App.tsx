import React from 'react';
import { Counter } from './components/Counter';
import { Logo } from './components/logo/Logo';
import { ExternalLink } from './components/ExternalLink';
import { Link } from './components/Link';
import { Header } from './components/Header';
import styled from '@emotion/styled';

const Container = styled.div`
  text-align: center;
`;

function App() {
  return <Container>
    <Header>
      <Logo />
      <p> Edit <code>src/App.tsx</code> and save to reload. </p>
      <ExternalLink url="https://reactjs.org">Learn React</ExternalLink>
      <Link url="home">Home</Link>
      <Counter />
    </Header>
  </Container>;
}

export default App;
