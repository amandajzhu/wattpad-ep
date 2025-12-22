import React from "react";
// import logo from "./assets/wattpad-logo.png";
import "./App.css";
import Artifacts from "./artifacts/Artifacts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-bubble">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Wattpad</h2>
          <h1>Engineering Intern (Web)</h1>
          <h2>Fall 2025 ePortfolio</h2>
          <h3>Amanda Zhu</h3>
        </div>
      </header>
      <Artifacts />
    </div>
  );
}

export default App;
