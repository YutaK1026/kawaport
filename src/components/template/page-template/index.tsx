import React from "react";
import styles from "./page-template.module.scss";

interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return <div className={styles.page}>{children}</div>;
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

const TitleNav = ({ children }: { children: React.ReactNode }) => {
  return <nav className={styles.page__titleNav}>{children}</nav>;
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.page__content}>{children}</main>;
};

const SubTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className={styles.page__subTitle}>{children}</h2>;
};

const SubContent = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.page__subContent}>{children}</div>;
};

Page.Title = Title;
Page.TitleNav = TitleNav;
Page.Content = Content;
Page.SubTitle = SubTitle;
Page.SubContent = SubContent;

export default Page;
