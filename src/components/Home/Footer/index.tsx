import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconContainer}>
        <a
          href="https://github.com/YutaK1026"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/yutakawamura-2551b930a"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
        <a
          href="https://x.com/kawachann1026"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
