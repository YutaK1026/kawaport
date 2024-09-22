// COMMENT: 新しいprojectを追加したいときはここを編集する
// TODO: もっとより良い実装にする。

import code_duel from "@/public/project/code_duel.png";
import portfolio from "@/public/project/portfolio.png";
import latex_index from "@/public/project/latex_index.png";
import hyoka from "@/public/project/hyoka.png";
import jackFesOP from "@/public/project/jackFesOP.png";
import portfolio_old from "@/public/project/portfolio_old.png";
import { StaticImageData } from "next/image";

export interface ProductDict {
  code_duel: StaticImageData;
  portfolio: StaticImageData;
  latex_index: StaticImageData;
  hyoka: StaticImageData;
  jackFesOP: StaticImageData;
  portfolio_old: StaticImageData;
}

const product_dict: ProductDict = {
  code_duel: code_duel,
  portfolio: portfolio,
  latex_index: latex_index,
  hyoka: hyoka,
  jackFesOP: jackFesOP,
  portfolio_old: portfolio_old,
};

export default product_dict;
