import React from "react";
import styles from "./Categories.module.css";

const Categories: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <h3>All Categories</h3>

      <div className={styles.grid}>
        <div>Business</div>
        <div className={styles.active}>Startup</div>
        <div>Economy</div>
        <div>Technology</div>
      </div>
    </section>
  );
};

export default Categories;
