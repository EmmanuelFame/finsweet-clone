import styles from "./HomeCTA.module.css";

export function HomeCTA() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Join our team to be a part of our story
        </h2>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt.
        </p>

        <a href="#" className={styles.button}>
          Join Now
        </a>
      </div>
    </section>
  );
}