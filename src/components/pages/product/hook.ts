// COMMENT: 新しいprojectを追加したいときはここを編集する
// TODO: もっとより良い実装にする。

import code_duel from "@/public/project/code_duel.png";
import cyber_dorokei from "@/public/project/cyber_dorokei.png";
import hyoka from "@/public/project/hyoka.png";
import portfolio_old from "@/public/project/portfolio_old.png";
import { StaticImageData } from "next/image";

export interface ProductDict {
  code_duel: StaticImageData;
  cyber_dorokei: StaticImageData;
  hyoka: StaticImageData;
  portfolio_old: StaticImageData;
}

const product_dict: ProductDict = {
  code_duel: code_duel,
  cyber_dorokei: cyber_dorokei,
  hyoka: hyoka,
  portfolio_old: portfolio_old,
};

export default product_dict;
