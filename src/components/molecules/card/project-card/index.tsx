import React from "react";
import Card from "@/components/atom/card";
import data from "./project-card.json";
import styles from "./project-card.module.scss";
import Button from "@/components/atom/button";
import Image from "next/image";
import projects from "@/public/project/project-list.png";

const ProjectCard = () => {
  return (
    <Card>
      <Card.Title>{data.title}</Card.Title>
      <Card.Content>
        <div className={styles.container}>
          <div className={styles.container__left}>
            <Image
              src={projects}
              alt="Picture of the author"
              layout="responsive"
              style={{
                width: "auto",
                height: "auto",
                maxHeight: "300px",
                maxWidth: "300px",
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
          <Button content="詳細はこちら" path="/product" />
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
