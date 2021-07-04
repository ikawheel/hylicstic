import { keiyoshiData } from "../japanese/keiyoshi";
import { meishiData } from "../japanese/meishi";
import { getWord } from "./getWord";

// 文章の最初の単語を選ぶ
export function getFirstWord(): [string, string, boolean] {
  return getWord([keiyoshiData, meishiData]);
}
