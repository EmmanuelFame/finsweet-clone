import React from "react";
import styles from "./JoinSection.module.css";

const JoinSection: React.FC = () => {
  return (
    <section className={styles.join}>
      <h3>Join our team to be a part of our story</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button>Join Now</button>
    </section>
  );
};

export default JoinSection;
