import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaLink } from "react-icons/fa6";
import styles from "./product-detail-template.module.scss";
import { NavLink } from "@/components/organisms/header/atom/nav";
import Image, { StaticImageData } from "next/image";

interface ProductDetailPageProps {
  children: React.ReactNode;
}

interface ProductDetailContentProps {
  skill_stack: string;
  member: string;
  period: string;
  github_url: string;
  url?: string;
}

const ProductDetailPage = ({ children }: ProductDetailPageProps) => {
  return <div className={styles.page}>{children}</div>;
};

const ProductImage = ({ img }: { img: StaticImageData }) => {
  return (
    <div className={styles.productImage}>
      <Image
        src={img}
        alt="Product Image"
        objectFit="cover" // 画像が親要素を覆うように調整
        objectPosition="top" // 画像の上部を表示する位置に設定
        style={{
          width: "60vw",
          height: "auto",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className={styles.page__title}>
      <div className={styles.title}>
        <div className={styles.title__content}>{children}</div>
      </div>
    </h1>
  );
};

const Content = ({
  leftContent,
  rightContent,
}: {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}) => {
  return (
    <div className={styles.page__content}>
      <div className={styles.page__contentLeft}>{leftContent}</div>
      <div className={styles.page__contentRight}>{rightContent}</div>
    </div>
  );
};

const LeftContent = ({
  skill_stack,
  member,
  period,
  github_url,
  url,
}: ProductDetailContentProps) => {
  return (
    <div>
      <h2>使用技術</h2>
      <p>{skill_stack}</p>

      <h2>開発メンバー</h2>
      <p>{member}</p>

      <h2>開発期間</h2>
      <p>{period}</p>

      <div className={styles.iconContainer}>
        <a
          href={github_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaLink className={styles.icon} />
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const RightContent = ({
  content,
  content__point,
}: {
  content: string;
  content__point: string;
}) => {
  return (
    <div>
      <h2>説明</h2>
      <div className={styles.content}>{content}</div>
      <br />
      <h2>実装時のポイント</h2>
      <div className={styles.content}>{content__point}</div>
    </div>
  );
};

ProductDetailPage.ProductImage = ProductImage;
ProductDetailPage.Title = Title;
ProductDetailPage.Content = Content;
ProductDetailPage.LeftContent = LeftContent;
ProductDetailPage.RightContent = RightContent;

export default ProductDetailPage;
