import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.section}>
        <h4>Categories</h4>
        <ul className={styles.categories}>
          <li className={styles.active}>Startup</li>
          <li>Business</li>
          <li>Economy</li>
          <li>Technology</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4>All Tags</h4>
        <div className={styles.tags}>
          <span>Business</span>
          <span>Experience</span>
          <span>Screen</span>
          <span>Technology</span>
          <span>Marketing</span>
          <span>Life</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
