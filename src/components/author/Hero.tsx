import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className={styles.profileImage}
        />

        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Hey there, I’m Andrew Johnson and welcome to my Blog
          </h1>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className={styles.socials}>
            <span>FB</span>
            <span>TW</span>
            <span>IG</span>
            <span>LN</span>
          </div>
        </div>
      </div>

      <div className={styles.progressBar}>
        <div className={styles.yellow}></div>
        <div className={styles.purple}></div>
      </div>
    </section>
  );
};

export default Hero;
