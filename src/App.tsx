import './App.css';
import React from 'react';
import { Counter } from './components/Counter';
import { Logo } from './components/logo/Logo';
import { ExternalLink } from './components/ExternalLink';
import { Link } from './components/Link';

function App() {
  return <div className="App">
    <header className="App-header">
      <Logo />
      <p> Edit <code>src/App.tsx</code> and save to reload. </p>
      <ExternalLink url="https://reactjs.org">Learn React</ExternalLink>
      <Link url="home">Home</Link>
      <Counter />
    </header>
  </div>;
}

export default App;
