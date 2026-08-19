import React from "react";
import { useState } from "react";
import "./App.css";
import Artifacts from "./artifacts/Artifacts";
import "normalize.css";
import { LightModeIcon } from "./icons/LightModeIcon";
import { DarkModeIcon } from "./icons/DarkModeIcon";

enum DisplayMode {
  LIGHT = "light",
  DARK = "dark",
}

function App() {
  const [activeTerm, setActiveTerm] = useState(3);
  const [displayMode, setDisplayMode] = useState<DisplayMode>(
    DisplayMode.LIGHT,
  );

  const onClickTerm = (term: number) => {
    setActiveTerm(term);
  };

  const handleDisplayModeToggle = () => {
    setDisplayMode((prevMode) =>
      prevMode === DisplayMode.LIGHT ? DisplayMode.DARK : DisplayMode.LIGHT,
    );
  };

  return (
    <div
      className={`App ${displayMode === DisplayMode.DARK ? "dark-mode" : "light-mode"}`}
    >
      <div className="mobile-warning">
        <h2>For the best experience, view on a desktop browser</h2>
      </div>
      <header className="App-header">
        <button
          className="display-mode-button"
          onClick={handleDisplayModeToggle}
        >
          {displayMode === DisplayMode.LIGHT ? (
            <DarkModeIcon />
          ) : (
            <LightModeIcon />
          )}
        </button>
        <div className="header-bubble">
          <h2>Wattpad</h2>
          <h1>Engineering Intern (Web)</h1>
          <h3>ePortfolio by Amanda Zhu</h3>
          <div className="term-buttons-section">
            Select a term to view its artifacts
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
              <button
                className={
                  activeTerm === 3
                    ? "term-button term-button-active"
                    : "term-button"
                }
                disabled={activeTerm === 3}
                onClick={() => onClickTerm(3)}
              >
                Summer 2026
              </button>
            </div>
          </div>
          <h6>
            Last Updated
            <br />
            2026-08-19
          </h6>
        </div>
      </header>
      <Artifacts term={activeTerm} />
    </div>
  );
}

export default App;
