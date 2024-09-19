"use client";

import Page from "@/components/template/page-template";
import { NavLink } from "@/components/organisms/header/atom/nav";
import styles from "./about.module.scss";
import Image from "next/image";
import profilePic from "@/public/kawachan.png";
import Footer from "@/components/organisms/footer";
import Experiences from "@/components/organisms/experience";
import data from "./experiences.json";

const About = () => {
  return (
    // <div className={styles.background}>
    <Page>
      <Page.Title>About</Page.Title>
      <Page.TitleNav>
        <NavLink />
      </Page.TitleNav>
      <Page.Content>
        <div className={styles.container}>
          <div className={styles.container__left}>
            <Image
              src={profilePic}
              alt="Picture of the author"
              layout="responsive"
              style={{
                width: "auto",
                height: "auto",
                maxHeight: "500px",
                maxWidth: "500px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className={styles.container__right}>
            <div className={styles.container__content}>
              <Page.SubTitle>自己紹介</Page.SubTitle>
              <Page.SubContent>
                初めまして、私の名前は河村悠太です。2002年10月26日生まれです。
                <br />
                名古屋大学情報学部コンピュータ科学科知能システム系4年に所属しており、名古屋大学情報学部森研究室にて医療画像*AIに関する研究をしています。
                <br />
                現在、`リンパ腫の画像と診断書の内容を基に、リンパ腫の悪性を診断するCADシステム`について研究しています。
                <br />
                <br />
                <br />
                Web技術に興味があり、フロント・バックエンド全て経験があります。特にフロントエンドが得意で、Next.js,
                TypeScript, Sass, storybookなどを使用し開発しています。
                バックエンドでは、Nest.js, FastAPIを使用することが多いです。
                <br />
                ML関係では、PyTorchを主に使用しています。研究ではTransformerなどを利用しています。
                <br />
                <br />
                <br />
                音楽を聴くことが好きで、J-POPからクラシックまで色々なジャンルの曲を聴きます。最近はOrangeStarをよく聴きます。
                また、ハリーポッターのファンです。一緒に語ってくれるととても喜びます。
              </Page.SubContent>
            </div>
          </div>
        </div>
        <Page.SubTitle>経歴</Page.SubTitle>
        <Page.SubContent>
          <Experiences experiences={data} />
        </Page.SubContent>
      </Page.Content>
      <Footer />
    </Page>
    // </div>
  );
};

export default About;
