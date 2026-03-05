import React from "react";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <span className={styles.category}>BUSINESS</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" className={styles.readMore}>
          Read more →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
