import React from "react";
import { useState } from "react";
import "./App.css";
import Artifacts from "./artifacts/Artifacts";
import "normalize.css";

function App() {
  const [activeTerm, setActiveTerm] = useState(2);

  const onClickTerm = (term: number) => {
    setActiveTerm(term);
  };

  return (
    <div className="App">
      <div className="mobile-warning">
        <h2>For the best experience, view on a desktop browser</h2>
      </div>
      <header className="App-header">
        <div className="header-bubble">
          <h2>Wattpad</h2>
          <h1>Engineering Intern (Web)</h1>
          <h3>ePortfolio by Amanda Zhu</h3>
          <div className="term-buttons-section">
            Select term to view:
            <div className="term-buttons-wrapper">
              <button
                className={
                  activeTerm === 1
                    ? "term-button term-button-active"
                    : "term-button"
                }
                disabled={activeTerm === 1}
                onClick={() => onClickTerm(1)}
              >
                Fall 2025
              </button>
              <button
                className={
                  activeTerm === 2
                    ? "term-button term-button-active"
                    : "term-button"
                }
                disabled={activeTerm === 2}
                onClick={() => onClickTerm(2)}
              >
                Winter 2026
              </button>
            </div>
          </div>
          <h6>
            Last Updated
            <br />
            2025-12-22
          </h6>
        </div>
      </header>
      <Artifacts term={activeTerm} />
    </div>
  );
}

export default App;
