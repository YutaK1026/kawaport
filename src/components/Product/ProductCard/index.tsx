"use client";

import Image from "next/image";
import styles from "./card.module.scss";
import Link from "next/link";
import type { Tag } from "@/types/tag";
import TagContent from "./Tag";

interface ProductCardProps {
  catchphraseList?: string[]; // 改行させたいため，listの要素ごとに改行させるようにする．
  tagList: Tag[];
  title: string;
  imageSrc: string;
  link: string;
  imageAlt?: string;
}

// キャッチフレーズの文字列長と改行数を設定．
const MAX_CATCHPHRASES = 3;
const MAX_CHAR_PER_PHRASE = 15;

// キャッチフレーズの長さが規定を超えた場合の処理を行う
const formatCatchphrases = (list: string[]): string[] => {
  return list
    .slice(0, MAX_CATCHPHRASES)
    .map((phrase) =>
      phrase.length > MAX_CHAR_PER_PHRASE
        ? phrase.slice(0, MAX_CHAR_PER_PHRASE) + "..."
        : phrase
    );
};

const ProductCard = ({
  catchphraseList,
  tagList,
  title,
  imageSrc,
  link,
  imageAlt = "product image",
}: ProductCardProps) => {
  // const formattedCatchphraseList = formatCatchphrases(catchphraseList);
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        {/* キャッチフレーズを入れようとしたが，現状不必要なためコメントアウト */}
        {/* <div className={styles.left__block}>
          {formattedCatchphraseList.map((catchphrase) => {
            return (
              <div className={styles.left__catchphrase}>{catchphrase}</div>
            );
          })}
        </div> */}
        <div className={styles.left__bottom}>
          {tagList.map((tag) => {
            return <TagContent tagTitle={tag} />;
          })}
          <p className={styles.left__title}>{title}</p>
          <Link href={link} className={styles.left__link}>
            詳しく見る →
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.right__gradient}></div>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={200}
          className={styles.right__image}
        />
      </div>
    </div>
  );
};

export default ProductCard;
