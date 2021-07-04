import { keiyoshiData } from "../japanese/keiyoshi";
import { meishiData } from "../japanese/meishi";
import { doshiData } from "../japanese/doshi";
import { getWord } from "./getWord";

export function getWordFollowedByJoshi(): [string, string, boolean] {
  return getWord([keiyoshiData, meishiData, doshiData]);
}
