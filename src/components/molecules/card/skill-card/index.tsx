import React from "react";
import Card from "@/components/atom/card";
import data from "./skill-card.json";
import styles from "./skill-card.module.scss";
import Button from "@/components/atom/button";
import Image from "next/image";
import skills from "@/public/skill/skills.png";

const SkillCard = () => {
  return (
    <Card>
      <Card.Title>{data.title}</Card.Title>
      <Card.Content>
        <div className={styles.container}>
          <div className={styles.container__left}>
            <Image
              src={skills}
              alt="Picture of the author"
              layout="responsive"
              style={{
                width: "auto",
                height: "auto",
                maxHeight: "200px",
                maxWidth: "200px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className={styles.container__right}>
            <div className={styles.container__content}>{data.content}</div>
          </div>
        </div>
      </Card.Content>
      <Card.Footer>
        <div className={styles.footer}>
          <Button content="詳細はこちら" path="skill" />
        </div>
      </Card.Footer>
    </Card>
  );
};

export default SkillCard;
