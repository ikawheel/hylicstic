import { keiyoshiArr } from "../japanese/keiyoshi";
import { meishiArr } from "../japanese/meishi";

export function getFirstWord(): [string, string] {
  // 単語配列のリスト
  const candidateArr: string[][] = [keiyoshiArr, meishiArr];

  // 単語を選ぶリストを決める
  const selectedArr: string[] =
    candidateArr[Math.floor(Math.random() * candidateArr.length)];

  // 単語の文法上の役割
  const grammar: string = selectedArr[0];

  // 単語の選択
  const str: string =
    selectedArr[Math.floor(Math.random() * (selectedArr.length - 1)) + 1];

  return [grammar, str];
}
