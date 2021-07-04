import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getHylicsText } from "./funcs/getHylicticText";
import { useState } from "react";

function App() {
  const [text, setText] = useState<string>("");

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onClick={() => setText("")}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => setText(getHylicsText())}>restart</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text ? text : getHylicsText()}
        </a>
      </header>
    </div>
  );
}

export default App;
