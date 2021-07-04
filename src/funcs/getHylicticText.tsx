import { meishi, meishiData } from "../japanese/meishi";
import { joshi, joshiData } from "../japanese/joshi";
import { keiyoshi, keiyoshiData } from "../japanese/keiyoshi";
import { doshi, doshiData } from "../japanese/doshi";
import { getFirstWord } from "./getFirstWord";
import { getWordFollowedByJoshi } from "./getWordFollowedByJoshi";

export function getHylicsText(): string {
  let str: string;
  let beforeRole: string;
  let tmpStr: string;
  let isTerminatable: boolean = false;
  // let loopNum: number = 0;
  [beforeRole, str] = getFirstWord();

  while (true) {
    // 終了可能なら文章作成を終了する
    if (isTerminatable && isContenue()) {
      break;
    }
    // loopNum++;

    if (beforeRole === meishi) {
      beforeRole = joshiData.role;
      isTerminatable = joshiData.isTerminatable;
      str += getStrFrom(joshiData.wordArr);
      continue;
    }

    if (beforeRole === joshi) {
      [beforeRole, tmpStr, isTerminatable] = getWordFollowedByJoshi();
      str += tmpStr;
      continue;
    }

    if (beforeRole === keiyoshi) {
      beforeRole = meishiData.role;
      isTerminatable = meishiData.isTerminatable;
      str += getStrFrom(meishiData.wordArr);
      continue;
    }

    if (beforeRole === doshi) {
      beforeRole = meishiData.role;
      isTerminatable = meishiData.isTerminatable;
      str += getStrFrom(meishiData.wordArr);
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
