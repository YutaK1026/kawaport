import Link from "next/link";
import styles from "./nav.module.scss";

export const NavLink = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <div className={styles.navLink}>Home</div>
      </Link>
      <Link href="/">
        <div className={styles.navLink}>About</div>
      </Link>
    </nav>
  );
};
