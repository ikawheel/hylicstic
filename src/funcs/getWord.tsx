import { wordDataType } from "../japanese/wordDataType";

// 引数で与えられた単語データ郡から、役割・単語文字列・終了可能を返す
// （単語タイプ定義してそれを返してもいいけど、タプルならそのまま代入できるのでここは好みか）
export function getWord(arr: wordDataType[]): [string, string, boolean] {
  // 単語の種類を選択
  const selected: wordDataType = arr[Math.floor(Math.random() * arr.length)];

  // 単語の選択
  const str: string =
    selected.wordArr[
      Math.floor(Math.random() * (selected.wordArr.length - 1)) + 1
    ];

  return [selected.role, str, selected.isTerminatable];
}
