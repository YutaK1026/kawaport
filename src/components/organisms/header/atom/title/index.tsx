import styles from "./title.module.scss";

export const Title = () => {
  return (
    <h1 className={styles.header__title}>
      <div className={styles.header__title__contentAnimation}>Hello</div>
      <br />
      <div className={styles.header__title__contentAnimation}>
        I'm Yuta Kawamura
      </div>
    </h1>
  );
};
