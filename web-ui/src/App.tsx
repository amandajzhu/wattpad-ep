import React from 'react';
import logo from './assets/wattpad-logo.png';
import './App.css';
import Artifacts from './artifacts/Artifacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Wattpad<br/>Engineering Intern (Web)</h1>
        <h2>Fall 2025 ePortfolio</h2>
        <h3>Amanda Zhu</h3>
      </header>
      <Artifacts />
    </div>
  );
}

export default App;
