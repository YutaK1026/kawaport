"use client";

import { useTheme } from "next-themes";
import styles from "./top.module.scss";
import { FaMoon, FaSun } from "react-icons/fa";

const TopHeader = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <div className={styles.top__header}>
      <div className={styles.logo}>KawaPort</div>
      <button className={styles.toggleButton} onClick={() => changeTheme()}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
};

export default TopHeader;
