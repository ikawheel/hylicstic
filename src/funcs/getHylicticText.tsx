import { da_katsuyo_terminationA } from "../japanese/da_katsuyo_terminationA";
import { da_katsuyo_terminationB } from "../japanese/da_katsuyo_terminationB";
import { getWordFollowedBy, getFirstWord } from "./getWord";

export function getHylicsText(): string {
  let str: string;
  let debugStr: string;
  let beforeRole: string;
  let tmpStr: string;
  let isTerminatable: boolean = false;
  let loopNum: number = 0;
  [str, beforeRole] = getFirstWord();
  debugStr = beforeRole;

  while (true) {
    // 終了可能なら文章作成を終了する
    if (isTerminatable && (isContenue() || loopNum > 5)) {
      break;
    }
    loopNum++;

    if (
      beforeRole === da_katsuyo_terminationA ||
      beforeRole === da_katsuyo_terminationB
    ) {
      break;
    } else {
      [tmpStr, beforeRole, isTerminatable] = getWordFollowedBy(beforeRole);
      debugStr += ", " + beforeRole;
      str += tmpStr;
      continue;
    }
  }

  return str + "  " + debugStr;
}

function isContenue(): boolean {
  return Math.random() > 0.999;
}
