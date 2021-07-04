import { keiyoshiData, keiyoshi } from "../japanese/keiyoshi";
import { meishiData, meishi } from "../japanese/meishi";
import { da_katsuyo_terminationAData } from "../japanese/da_katsuyo_terminationA";
import { da_katsuyo_terminationBData } from "../japanese/da_katsuyo_terminationB";
import { da_katsuyo_Data, da_katsuyo } from "../japanese/da_katsuyo";
import { doshiData, doshi } from "../japanese/doshi";
import { keiyodoshiData, keiyodoshi } from "../japanese/keiyodoshi";
import { wordDataType } from "../japanese/wordDataType";
import { joshiData, joshi } from "../japanese/joshi";
import { rentaishiData, rentaishi } from "../japanese/rentaishi";

// 文章の最初の単語を選ぶ
export function getFirstWord(): [string, string, boolean] {
  return getWord([keiyoshiData, meishiData, keiyodoshiData, doshiData]);
}

// 引数で与えられた語に続く語を得る
export function getWordFollowedBy(role: string): [string, string, boolean] {
  switch (role) {
    //動詞に続く単語を得る(動く、壊す、戦う.....)
    case doshi:
      return getWord([
        meishiData,
        keiyodoshiData,
        keiyodoshiData,
        rentaishiData,
      ]);

    //名詞に続く単語を得る
    case meishi:
      return getWord([
        joshiData,
        da_katsuyo_terminationAData,
        da_katsuyo_terminationBData,
      ]);

    //助詞に続く単語を得る
    case joshi:
      return getWord([keiyoshiData, meishiData, doshiData, rentaishiData]);

    //形容詞に続く単語を得る(美しい、騒々しい、華々しい.....)
    case keiyoshi:
      return getWord([
        keiyodoshiData,
        meishiData,
        da_katsuyo_terminationAData,
        rentaishiData,
      ]);

    //形容動詞に続く単語を得る(いびつ、ほのか、真っ黒....)
    case keiyodoshi:
      return getWord([
        da_katsuyo_terminationAData,
        da_katsuyo_terminationBData,
        da_katsuyo_Data,
      ]);

    //連体詞に続く単語を得る（あの、ひょんな、わが....)
    case rentaishi:
      return getWord([keiyoshiData, meishiData, doshiData, keiyodoshiData]);

    //終止形ではないダ活用に続く単語を得る
    case da_katsuyo:
      return getWord([keiyoshiData, meishiData, rentaishiData]);

    // 到達しないはず
    default:
      throw new Error("getWordFollowedBy: role value is " + role);
  }
}

// 引数で与えられた単語データ郡から、役割・単語文字列・終了可能を返す
// （単語タイプ定義してそれを返してもいいけど、タプルならそのまま代入できるのでここは好みか）
function getWord(arr: wordDataType[]): [string, string, boolean] {
  // 単語の種類を選択
  const selected: wordDataType = arr[Math.floor(Math.random() * arr.length)];

  // 単語の選択
  const str: string =
    selected.wordArr[
      Math.floor(Math.random() * (selected.wordArr.length - 1)) + 1
    ];

  return [str, selected.role, selected.isTerminatable];
}
