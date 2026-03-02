import { useState } from "react";
import styles from "./Testimonials.module.css";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  location: string;
  avatarText: string;  
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jonathan Vallem",
    location: "New york, USA",
    avatarText: "JV",
  },
  {
    id: "t2",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Mary Stone",
    location: "London, UK",
    avatarText: "MS",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  function prev() {
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }
  function next() {
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }

  return (
    <section className="section">
      <div className="container">
        <div className={styles.box}>
          <div className={styles.left}>
            <div className={styles.kicker}>TESTIMONIALS</div>
            <h2 className={styles.title}>What people say about our blog</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>

          <div className={styles.divider} />

          <div className={styles.right}>
            <p className={styles.quote}>{current.quote}</p>

            <div className={styles.bottomRow}>
              <div className={styles.person}>
                <div className={styles.avatar}>{current.avatarText}</div>
                <div>
                  <div className={styles.name}>{current.name}</div>
                  <div className={styles.location}>{current.location}</div>
                </div>
              </div>

              <div className={styles.controls}>
                <button className={styles.circleBtn} onClick={prev} aria-label="Previous">
                  ←
                </button>
                <button className={`${styles.circleBtn} ${styles.filled}`} onClick={next} aria-label="Next">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}