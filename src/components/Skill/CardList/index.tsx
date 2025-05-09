import React from "react";
import LanguageSkillCard from "@/components/Skill/CardList/Card";
import { SkillCardProps } from "@/components/Skill/CardList/Card";
import styles from "./skill-card-list.module.scss";

interface SkillCardListProps<T extends string> {
  skills: Record<T, SkillCardProps["props"][]>;
}

const SkillCardList = <T extends string>({ skills }: SkillCardListProps<T>) => {
  return (
    <div>
      {Object.keys(skills).map((category) => (
        <div key={category} className={styles.container}>
          <h2 className={styles.title}>{category}</h2>
          <div className={styles.grid}>
            {skills[category as T].map((skill, index) => (
              <LanguageSkillCard key={index} props={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCardList;
