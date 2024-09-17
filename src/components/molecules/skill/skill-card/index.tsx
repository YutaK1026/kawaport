import React from "react";
import styles from "./skill-card.module.scss";
import Image, { StaticImageData } from "next/image";
import Card from "@/components/atom/card";

type Skills = {
  src: StaticImageData;
  description: string;
  exp: string;
};

interface SkillCardProps {
  skills: Skills[];
}

const SkillCard = ({ skills }: SkillCardProps) => {
  return (
    <>
      {skills.map((skill) => {
        return (
          <Card>
            <Card.Content>
              <div className={styles.container}>
                <div className={styles.container__left}>
                  <Image
                    src={skill.src}
                    alt="Picture of the author"
                    layout="responsive"
                    style={{
                      width: "auto",
                      height: "auto",
                      maxHeight: "50px",
                      maxWidth: "50px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className={styles.container__right}>
                  <div className={styles.container__content}>
                    {skill.description}
                    {skill.exp}
                  </div>
                </div>
              </div>
            </Card.Content>
          </Card>
        );
      })}
    </>
  );
};

export default SkillCard;
