import React from "react";
import styles from "./PostListItem.module.css";

interface Props {
  category: string;
  title: string;
  image: string;
}

const PostListItem: React.FC<Props> = ({ category, title, image }) => {
  return (
    <div className={styles.item}>
      <img src={image} alt={title} className={styles.image} />

      <div>
        <span className={styles.category}>{category}</span>
        <h3>{title}</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  );
};

export default PostListItem;
