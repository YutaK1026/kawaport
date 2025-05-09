import type { Tag } from "@/types/tag";
import styles from "./tag.module.scss";

interface TagProps {
  tagTitle: Tag;
}

const Tag = ({ tagTitle }: TagProps) => {
  return <div className={styles.tag}>{tagTitle}</div>;
};

export default Tag;
