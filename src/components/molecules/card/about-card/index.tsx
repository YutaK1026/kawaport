import Card from "@/components/atom/card";
import data from "./about-card.json";
import styles from "./about-card.module.scss";
import profilePic from "@/public/kawachan.png";
import Image from "next/image";
import Button from "@/components/atom/button";

const AboutCard = () => {
  return (
    <Card>
      <Card.Title>{data.title}</Card.Title>
      <Card.Content>
        <div className={styles.container}>
          <div className={styles.container__left}>
            <Image
              src={profilePic}
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
          <Button content="詳細はこちら" path="/about" />
        </div>
      </Card.Footer>
    </Card>
  );
};

export default AboutCard;
