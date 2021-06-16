import React from "react";
import logo from "./logo.svg";
import "./App.css";

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
  let str: string = getStrFrom(syugoArr);
  let justBefore: string = syugoArr[0];

  while (true) {
    // 終了判定、今はとりあえず直前が主語なら終了可能。
    if (justBefore === syugo && isContenue()) {
      break;
    }

    if (justBefore === syugo) {
      justBefore = joshiArr[0];
      str += getStrFrom(joshiArr);
      continue;
    }

    if (justBefore === joshi) {
      justBefore = syugoArr[0];
      str += getStrFrom(syugoArr);
      continue;
    }
  }

  return str + "。";
}

// 与えられた配列から文字を取り出す。先頭は文法上の意味が格納されてるので1番目以降からとる。
// 参考： https://lab.syncer.jp/Web/JavaScript/Snippet/15/
function getStrFrom(arr: string[]): string {
  return arr[Math.floor(Math.random() * (arr.length - 1)) + 1];
}

function isContenue(): boolean {
  return Math.random() > 0.5;
}

const syugo: string = "syugo";
const joshi: string = "joshi";
const syugoArr: string[] = [syugo, "あなた", "わたし", "ボディービル"]; // 主語というか名詞？
const joshiArr: string[] = [
  joshi,
  "が",
  "を",
  "に",
  "へ",
  "と",
  "より",
  "から",
  "で",
  "や",
  "の",
];

export default App;
