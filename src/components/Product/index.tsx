"use client";

import React, { useState } from "react";
import Page from "@/components/PageTemplate";
import { NavLink } from "@/components/atom/nav";
import Footer from "@/components/Home/Footer";
import styles from "./product.module.scss";
import Image from "next/image";
import data from "@/products/products-list.json";
import { useRouter } from "next/navigation";

const Product = () => {
  const initImageUrl = data[0].key;
  const { push } = useRouter();
  const [imageUrl, setImageUrl] = useState<string>(initImageUrl);

  const handleMouseEnter = (key: string) => {
    setImageUrl(key);
  };

  const handleClick = (key: string) => {
    push(`/product/${key}`);
  };

  return (
    <Page>
      <Page.Title>Product</Page.Title>
      <Page.TitleNav>
        <NavLink />
      </Page.TitleNav>
      <Page.Content>
        <div className={styles.container}>
          <div className={styles.container__left}>
            <Image
              src={`/project/${imageUrl}.png`}
              alt="product"
              layout="responsive"
              width={100}
              height={60}
              style={{
                borderRadius: "10px",
                boxShadow: "3px",
              }}
              className={styles.imageWrapper}
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
  );
};

export default Product;
