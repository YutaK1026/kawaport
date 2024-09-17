import Link from "next/link";
import styles from "./nav.module.scss";

export const NavLink = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <div className={styles.navLink}>Home</div>
      </Link>
      <Link href="/about">
        <div className={styles.navLink}>About</div>
      </Link>
      <Link href="/product">
        <div className={styles.navLink}>Product</div>
      </Link>
      <Link href="/skill">
        <div className={styles.navLink}>Skill</div>
      </Link>
    </nav>
  );
};
