import React from "react";
import styles from "./FeaturedPost.module.css";

const FeaturedPost: React.FC = () => {
  return (
    <section className={styles.featured}>
      <div className={styles.content}>
        <span className={styles.label}>FEATURED POST</span>
        <h1>Step-by-step guide to choosing great font pairs</h1>
        <p>By John Doe | May 23, 2022</p>
        <button className={styles.button}>Read More</button>
      </div>

      <img src="/images/featured.jpg" alt="Featured" className={styles.image} />
    </section>
  );
};

export default FeaturedPost;
