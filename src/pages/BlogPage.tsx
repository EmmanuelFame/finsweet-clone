import React from "react";
import styles from "../components/blogpage/BlogPage.module.css";
import FeaturedPost from "../components/blogpage/FeaturedPost";
import PostListItem from "../components/blogpage/PostListItem";
import Categories from "../components/blogpage/Categories";
import JoinSection from "../components/blogpage/JoinSection";

const BlogPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <FeaturedPost />

      <section className={styles.allPosts}>
        <h2>All posts</h2>

        <div className={styles.list}>
          <PostListItem
            category="STARTUP"
            title="Design tips for designers that cover everything you need"
            image="/images/whiteboard.jpg"
          />

          <PostListItem
            category="BUSINESS"
            title="How to build rapport with your web design clients"
            image="/images/team-table.jpg"
          />

          <PostListItem
            category="STARTUP"
            title="Logo design trends to avoid in 2022"
            image="/images/team-laptop.jpg"
          />

          <PostListItem
            category="TECHNOLOGY"
            title="8 Figma design systems you can download for free today"
            image="/images/figma.jpg"
          />

          <PostListItem
            category="ECONOMY"
            title="Font sizes in UI design: The complete guide to follow"
            image="/images/whiteboard.jpg"
          />
        </div>

        <div className={styles.pagination}>
          <span>{"< Prev"}</span>
          <span>{"Next >"}</span>
        </div>
      </section>

      <Categories />
      <JoinSection />
    </div>
  );
};

export default BlogPage;
