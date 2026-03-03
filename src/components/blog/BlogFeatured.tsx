import styles from "./BlogFeatured.module.css";
import type { Post } from "../../types/blog";

type Props = {
  post: Post;
};

export function BlogFeatured({ post }: Props) {
  return (
    <section className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.kicker}>FEATURED POST</div>

          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.meta}>
            By <span className={styles.author}>{post.author}</span> &nbsp;|&nbsp; {post.date}
          </div>

          <p className={styles.text}>{post.excerpt}</p>

          <a className="btn" href="#">
            Read More <span aria-hidden>›</span>
          </a>
        </div>

        <div className={styles.right}>
          <img className={styles.image} src={post.coverUrl} alt={post.title} />
        </div>
      </div>
    </section>
  );
}