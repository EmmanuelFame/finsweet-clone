import styles from "./SpecialPost.module.css";
import specialImg from "../../assets/special.png";

export function SpecialPost() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.wrapper}>
          {/* Left big image */}
          <img className={styles.image} src={specialImg} alt="People sitting together" />

          {/* Right white card (overlapping) */}
          <div className={styles.card}>
            <div className={styles.kicker}>WHY WE STARTED</div>

            <h2 className={styles.title}>
              It started out as a simple idea and evolved into our passion
            </h2>

            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>

            <a className={styles.button} href="#">
              Discover our story <span aria-hidden>›</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}