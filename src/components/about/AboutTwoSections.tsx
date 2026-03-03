import styles from "./AboutTwoSections.module.css";

import handsImg from "../../assets/about-team.png"; // hands (green background)
import peopleImg from "../../assets/about-why.png"; // people on steps

export function AboutTwoSections() {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>

        {/* 1) TEXT LEFT, IMAGE RIGHT (hands), yellow block on left of image */}
        <div className={styles.row}>
          <div className={styles.text}>
            <h2 className={styles.h2}>Our team of creatives</h2>
            <p className={styles.bold}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>

          <div className={styles.media}>
            <div className={styles.yellowBlock} aria-hidden />
            <img className={styles.image} src={handsImg} alt="Team hands" />
          </div>
        </div>

        {/* 2) IMAGE LEFT (people), TEXT RIGHT, purple dot under image */}
        <div className={styles.row}>
          <div className={styles.media}>
            <img className={styles.image} src={peopleImg} alt="People working" />
            <div className={styles.purpleDot} aria-hidden />
          </div>

          <div className={styles.text}>
            <h2 className={styles.h2}>Why we started this Blog</h2>
            <p className={styles.bold}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}