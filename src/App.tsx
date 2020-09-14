import './App.css';
import logo from './logo.svg';
import React from 'react';
import { AppProviders } from './contexts/AppProviders';
import { Counter } from './components/Counter';

function App() {
  return <AppProviders>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter />
      </header>
    </div>
  </AppProviders>;
}

export default App;
