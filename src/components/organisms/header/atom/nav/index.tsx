import Link from "next/link";
import styles from "./nav.module.scss";
import { style } from "framer-motion/client";

export const NavLink = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.underline}>
        <div className={styles.navLink}>Home</div>
      </Link>
      <Link href="/about" className={styles.underline}>
        <div className={styles.navLink}>About</div>
      </Link>
      <Link href="/product" className={styles.underline}>
        <div className={styles.navLink}>Product</div>
      </Link>
      <Link href="/skill" className={styles.underline}>
        <div className={styles.navLink}>Skill</div>
      </Link>
    </nav>
  );
};
