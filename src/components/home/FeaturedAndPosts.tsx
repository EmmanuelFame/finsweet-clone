import type { Post } from "../../types/blog";
import styles from "./FeaturedAndPosts.module.css";

type Props = {
  featured: Post;
  posts: Post[];
};

export function FeaturedAndPosts({ featured, posts }: Props) {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div>
          <h2 className="h2">Featured Post</h2>

          <div className={styles.card}>
            <img className={styles.cover} src={featured.coverUrl} alt="" />

            <div className={styles.body}>
                <div className={styles.meta}>
                By <span className={styles.author}>{featured.author}</span>
                &nbsp;|&nbsp; {featured.date}
                </div>

                <h3 className={styles.title}>{featured.title}</h3>
                <p className="p">{featured.excerpt}</p>

                <a className="btn" href="#">
                Read More <span aria-hidden>›</span>
                </a>
            </div>
            </div>
        </div>

        <div>
          <div className={styles.postsHeader}>
            <h2 className="h2" style={{ margin: 0 }}>All Posts</h2>
            <a className={styles.viewAll} href="#">View All</a>
          </div>

          <div className={styles.list}>
            {posts.map((p) => (
              <article key={p.id} className={styles.item}>
                <div className={styles.itemMeta}>
                  By <span className={styles.author}>{p.author}</span> &nbsp;|&nbsp; {p.date}
                </div>
                <div className={styles.itemTitle}>{p.title}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}