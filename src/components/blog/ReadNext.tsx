import { Link } from "react-router-dom";
import type { Post } from "../../types/blog";
import styles from "./ReadNext.module.css";

type Props = {
  posts: Post[]; // expect 3
};

export function ReadNext({ posts }: Props) {
  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.heading}>What to read next</h2>

        <div className={styles.grid}>
          {posts.map((p) => (
            <Link key={p.id} to={`/blog/${p.id}`} className={styles.cardLink}>
              <article className={styles.card}>
                <img className={styles.image} src={p.coverUrl} alt={p.title} />

                <div className={styles.meta}>
                  By <span className={styles.author}>{p.author}</span>
                  <span className={styles.sep}>|</span>
                  {p.date}
                </div>

                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.text}>{p.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>

        <div className={styles.divider} />
      </div>
    </section>
  );
}