import { Link } from "react-router-dom";
import type { Post } from "../../types/blog";
import styles from "./BlogAllPosts.module.css";

type Props = {
  posts: Post[];
};

export function BlogAllPosts({ posts }: Props) {
  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.heading}>All posts</h2>
        <div className={styles.divider} />

        <div className={styles.list}>
          {posts.map((p) => (
            <Link
              key={p.id}
              to={`/blog/${p.id}`}
              className={styles.itemLink}
            >
              <article className={styles.item}>
                <img
                  className={styles.image}
                  src={p.coverUrl}
                  alt={p.title}
                />

                <div className={styles.content}>
                  <div className={styles.category}>{p.category}</div>
                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.text}>{p.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className={styles.pager}>
          <button className={styles.pagerBtn} type="button">
            &lt; Prev
          </button>
          <button className={styles.pagerBtn} type="button">
            Next &gt;
          </button>
        </div>
      </div>
    </section>
  );
}