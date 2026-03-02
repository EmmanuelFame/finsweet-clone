import type { Post } from "../../types/blog";
import styles from "./Hero.module.css";

type Props = { post: Post };

export function Hero({ post }: Props) {
  return (
    <section
      className={styles.hero}
      style={{ ["--hero-bg" as any]: `url(${post.coverUrl})` }}
    >
      <div className="container">
        <div className={styles.content}>
          <div className="smallMeta">
            Posted on <b>{post.category}</b>
          </div>

          <h1 className="h1">{post.title}</h1>

          <div className={styles.byline}>
            By <span>{post.author}</span> &nbsp;|&nbsp; {post.date}
          </div>

          <p className={`${styles.text} p`}>{post.excerpt}</p>

          <a className="btn" href="#">
            Read More <span aria-hidden>›</span>
          </a>
        </div>
      </div>
    </section>
  );
}