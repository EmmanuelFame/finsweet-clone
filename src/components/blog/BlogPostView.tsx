import type { Post } from "../../types/blog";
import styles from "./BlogPostView.module.css";

type Props = {
  post: Post;
};

export function BlogPostView({ post }: Props) {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>

        {/* Author */}
        <div className={styles.authorRow}>
          {post.authorAvatar && (
            <img
              className={styles.avatar}
              src={post.authorAvatar}
              alt={post.author}
            />
          )}
          <div>
            <div className={styles.author}>{post.author}</div>
            <div className={styles.date}>
              Posted on {post.date}
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className={styles.title}>{post.title}</h1>

        {/* Category */}
        <div className={styles.category}>{post.category}</div>

        {/* Image */}
        <img
          className={styles.image}
          src={post.coverUrl}
          alt={post.title}
        />

        {/* Article Content */}
        <div className={styles.content}>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Non blandit massa enim nec scelerisque</li>
            <li>Neque egestas congue quisque egestas</li>
          </ul>

          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

      </div>
    </section>
  );
}