"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./header.module.scss";
import { NavLink } from "@/components/atom/nav";
import { Title } from "./Title";

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
      <div className={styles.header__content} ref={animationRef}>
        <Title />
        <NavLink />
      </div>
      <div className={styles.header__background}>
        <div className={styles.header__gradient}></div>
        <div className={styles.header__gradient_cover}></div>
      </div>
      <div className={styles.header__arrow__bottom}></div>
    </header>
  );
};

export default Header;
