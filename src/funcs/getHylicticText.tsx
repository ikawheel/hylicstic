import { meishi, meishiData } from "../japanese/meishi";
import { joshi, joshiData } from "../japanese/joshi";
import { keiyoshi, keiyoshiData } from "../japanese/keiyoshi";
import { doshi, doshiData } from "../japanese/doshi";
import { keiyodoshi } from "../japanese/keiyodoshi";
import { da_katsuyo } from "../japanese/da_katsuyo";
import { da_katsuyo_terminationA } from "../japanese/da_katsuyo_terminationA";
import { da_katsuyo_terminationB } from "../japanese/da_katsuyo_terminationB";
import { getWordFollowedBy, getFirstWord } from "./getWord";

export function getHylicsText(): string {
  let str: string;
  let beforeRole: string;
  let tmpStr: string;
  let isTerminatable: boolean = false;
  let loopNum: number = 0;
  [beforeRole, str] = getFirstWord();

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
      [beforeRole, tmpStr, isTerminatable] = getWordFollowedBy(beforeRole);
      str += tmpStr;
      continue;
    }
  }

  return str;
}

function isContenue(): boolean {
  return Math.random() > 0.999;
}
