import React from "react";
import Hero from "../components/author/Hero";
import PostCard from "../components/author/PostCard";
import styles from "../components/author/AuthorPage.module.css";

const AuthorPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Hero />

      <section className={styles.postsSection}>
        <h2 className={styles.heading}>My Posts</h2>

        <div className={styles.postsWrapper}>
          <PostCard
            category="BUSINESS"
            title="Font sizes in UI design: The complete guide to follow"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            image="/images/building.jpg"
          />

          <PostCard
            category="ECONOMY"
            title="How to build rapport with your web design clients"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            image="/images/team.jpg"
          />
        </div>
      </section>
    </div>
  );
};

export default AuthorPage;
