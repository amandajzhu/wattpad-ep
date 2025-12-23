import React from "react";
import "./App.css";
import Artifacts from "./artifacts/Artifacts";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <div className="mobile-warning">
        <h2>For the best experience, view on a desktop browser</h2>
      </div>
      <header className="App-header">
        <div className="header-bubble">
          <h4>
            Fall 2025
            <br />
            Professional ePortfolio
          </h4>
          <h2>Wattpad</h2>
          <h1>Engineering Intern (Web)</h1>
          <h4>Amanda Zhu</h4>
          <h6>
            Last Updated
            <br />
            2025-12-22
          </h6>
        </div>
      </header>
      <Artifacts />
    </div>
  );
}

export default App;
