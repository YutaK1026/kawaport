import React from "react";
import styles from "./card.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  useGSAP(() => {
    gsap.to(".container", {
      // TODO: ここに、フェードイン、フェードアウトのアニメーションを実装する
      // ex: rotation: "+360",
    });
  });

  return (
    <div className="container">
      <div className={styles.card}>{children}</div>
    </div>
  );
};

Card.Title = ({ children }: { children: React.ReactNode }) => {
  return <h2 className={styles.card__title}>{children}</h2>;
};

Card.Content = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.card__content}>{children}</div>;
};

Card.Footer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.card__footer}>{children}</div>;
};

export default Card;
