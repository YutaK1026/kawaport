import React from "react";
import Image from "next/image";
import styles from "./skill-card.module.scss";

export type SkillCard = {
  imgSrc: string;
  name: string;
  description: string;
  period: string;
};

export interface SkillCardProps {
  props: SkillCard;
}

const LanguageSkillCard: React.FC<SkillCardProps> = ({
  props,
}: SkillCardProps) => {
  const imgSrc = props.imgSrc;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={`/skill/${imgSrc}.png`}
          alt={props.name}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h2 className={styles.languageName}>{props.name}</h2>
      <p className={styles.description}>{props.description}</p>
      <p className={styles.duration}>{props.period}</p>
    </div>
  );
};

export default LanguageSkillCard;
