import styles from "./button.module.scss";

interface ButtonProps {
  content: string;
}

export const Button = ({ content }: ButtonProps) => {
  return <button className={styles.button}>{content}</button>;
};

export default Button;
