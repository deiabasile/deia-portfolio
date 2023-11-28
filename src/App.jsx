import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This will be my portfolio.</p>
        <a
          className="App-link"
          href="https://github.com/deiabasile"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github Account
        </a>
      </header>
    </div>
  );
}

export default App;
