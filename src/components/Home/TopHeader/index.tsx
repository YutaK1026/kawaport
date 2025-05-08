"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./top.module.scss";
import { FaMoon, FaSun } from "react-icons/fa";

const TopHeader = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const changeTheme = (theme: string | undefined) => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  // COMMENT: 公式ドキュメント通り，themeがundefinedにならないようにmount状態を管理
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.top__header}>
      <Link href="/" className={styles.logo}>
        KawaPort
      </Link>
      <button
        className={styles.toggleButton}
        onClick={() => changeTheme(theme)}
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
};

export default TopHeader;
