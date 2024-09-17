import React from "react";
import Card from "@/components/atom/card";
import data from "./skill-card.json";
import styles from "./skill-card.module.scss";
import Button from "@/components/atom/button";

const AboutCard = () => {
  return (
    <Card>
      <Card.Title>{data.title}</Card.Title>
      <Card.Content>hoge</Card.Content>
      <Card.Footer>
        <div className={styles.footer}>
          <Button content="詳細はこちら" />
        </div>
      </Card.Footer>
    </Card>
  );
};

export default AboutCard;
