"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./header.module.scss";
import { NavLink } from "./atom/nav";
import { Title } from "./atom/title";
import Image from "next/image";

const Header = () => {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationRef.current) {
      gsap.fromTo(
        animationRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>KawaPort</div>
      <div className={styles.header__content} ref={animationRef}>
        <Title />
        <NavLink />
      </div>
      <div className={styles.header__background}>
        <Image
          src="/header-bg-light.svg"
          alt="bg-image"
          fill
          objectFit="cover"
          className={styles.header__image}
        />
      </div>
    </header>
  );
};

export default Header;
