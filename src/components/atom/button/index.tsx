"use client";

import styles from "./button.module.scss";
import { useRouter } from "next/navigation";

interface ButtonProps {
  content: string;
  path: string;
}

export const Button = ({ content, path }: ButtonProps) => {
  const { push } = useRouter();
  const handleClick = (key: string) => {
    push(`${key}`);
  };

  return (
    <button className={styles.button} onClick={() => handleClick(path)}>
      {content}
    </button>
  );
};

export default Button;
