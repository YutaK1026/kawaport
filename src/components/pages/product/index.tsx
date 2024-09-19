"use client";

import React, { useEffect, useState } from "react";
import Page from "@/components/template/page-template";
import { NavLink } from "@/components/organisms/header/atom/nav";
import Footer from "@/components/organisms/footer";
import styles from "./product.module.scss";
import Image, { StaticImageData } from "next/image";
import initImage from "@/public/project/code_duel.png";
import data from "./products.json";
import product_dict, { ProductDict } from "./hook";
import { useRouter } from "next/navigation";

const Product = () => {
  const { push } = useRouter();
  const [imageSrc, setImageSrc] = useState<StaticImageData>(initImage);
  const [currentImageSrc, setCurrentImageSrc] =
    useState<StaticImageData>(initImage);
  const [fade, setFade] = useState(false);

  const handleMouseEnter = (key: string) => {
    setImageSrc(product_dict[key as keyof ProductDict]);
  };

  const handleClick = (key: string) => {
    push(`/product/${key}`);
  };

  useEffect(() => {
    setFade(true); // フェードアウト
    const timeoutId = setTimeout(() => {
      setCurrentImageSrc(imageSrc); // 新しい画像に切り替え
      setFade(false); // フェードイン
    }, 300); // 500ms後に画像を切り替え
    return () => clearTimeout(timeoutId);
  }, [imageSrc]);

  return (
    <div className={styles.background}>
      <Page>
        <Page.Title>Product</Page.Title>
        <Page.TitleNav>
          <NavLink />
        </Page.TitleNav>
        <Page.Content>
          <div className={styles.container}>
            <div className={styles.container__left}>
              <Image
                src={currentImageSrc}
                alt="product"
                layout="responsive"
                placeholder="blur"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "3px",
                }}
                className={`${styles.imageWrapper} ${
                  fade ? styles.fadeOut : styles.fadeIn
                }`}
              />
            </div>
            <div className={styles.container__right}>
              <div className={styles.container__content}>
                {data.map((prop) => {
                  return (
                    <div
                      className={styles.product__item}
                      onMouseEnter={() => handleMouseEnter(prop.key)}
                      onClick={() => handleClick(prop.key)}
                    >
                      {prop.title}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Page.Content>
        <Footer />
      </Page>
    </div>
  );
};

export default Product;
