import React from "react";
import styles from "./PostCard.module.css";

interface PostCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
}

const PostCard: React.FC<PostCardProps> = ({
  category,
  title,
  description,
  image,
}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />

      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
