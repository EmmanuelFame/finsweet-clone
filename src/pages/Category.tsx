import React from "react";
import styles from "../components/category/Category.module.css";
import Header from "../components/category/Header";
import BlogCard from "../components/category/BlogCard";
import Sidebar from "../components/category/Sidebar";
import category  from "../assets/category.png";

const Category: React.FC = () => {
  const blogData = [
    {
      title: "Top 66 free website mockup tools 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: category,
    },
    {
      title: "Step-by-step guide to choosing great font pairs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: category,
    },
    {
      title: "Ten free google fonts that you should use",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: category,
    },
    {
      title: "What did I learn from doing 50+ design sprints?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: category,
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.blogSection}>
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              image={blog.image}
            />
          ))}
        </div>

        <Sidebar />
      </div>
    </div>
  );
};

export default Category;
