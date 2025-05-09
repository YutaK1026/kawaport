"use client";

import React from "react";
import Page from "@/components/PageTemplate";
import { NavLink } from "@/components/atom/nav";
import Footer from "@/components/Home/Footer";
import styles from "./product.module.scss";
import data from "@/products/products-list.json";
import ProductCard from "./ProductCard";
import type { Tag } from "@/types/tag";

const Product = () => {
  return (
    <Page>
      <Page.Title>Product</Page.Title>
      <Page.TitleNav>
        <NavLink />
      </Page.TitleNav>
      <Page.Content>
        <div className={styles.container}>
          {data.map((prop) => {
            return (
              <div className={styles.cards}>
                <ProductCard
                  tagList={prop.tagList as Tag[]}
                  title={prop.title}
                  imageSrc={`/project/${prop.key}.png`}
                  link={`/product/${prop.key}`}
                  imageAlt={prop.alt}
                />
              </div>
            );
          })}
        </div>
      </Page.Content>
      <Footer />
    </Page>
  );
};

export default Product;
