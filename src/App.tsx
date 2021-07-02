import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { meishi, meishiArr } from "./japanese/meishi";
import { joshi, joshiArr } from "./japanese/joshi";
import { keiyoshi } from "./japanese/keiyoshi";
import { getFirstWord } from "./funcs/getFirstWord";

function App() {
  return (
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
          {generateHylicsText()}
        </a>
      </header>
    </div>
  );
}

function generateHylicsText(): string {
  let str: string;
  let justBefore: string;

  [justBefore, str] = getFirstWord();
  while (true) {
    // 終了判定、今はとりあえず直前が主語なら終了可能。
    if (justBefore === meishi && isContenue()) {
      break;
    }

    if (justBefore === meishi) {
      justBefore = joshiArr[0];
      str += getStrFrom(joshiArr);
      continue;
    }

    if (justBefore === joshi || justBefore === keiyoshi) {
      justBefore = meishiArr[0];
      str += getStrFrom(meishiArr);
      continue;
    }
  }

  return str;
}

// 与えられた配列から文字を取り出す。先頭は文法上の意味が格納されてるので1番目以降からとる。
// 参考： https://lab.syncer.jp/Web/JavaScript/Snippet/15/
function getStrFrom(arr: string[]): string {
  return arr[Math.floor(Math.random() * (arr.length - 1)) + 1];
}

function isContenue(): boolean {
  return Math.random() > 0.7;
}

export default App;
