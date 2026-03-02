import styles from "./AboutMission.module.css";

export function AboutMission() {
  return (
    <section className={`section ${styles.wrap}`}>
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.topBar}>
            <div className={styles.barWhite} />
            <div className={styles.barYellow} />
            <div className={styles.barPurple} />
            </div>

          <div className={styles.grid}>
            <div>
              <div className={styles.kicker}>ABOUT US</div>
              <h2 className={styles.title}>
                We are a community of content writers who share their learnings
              </h2>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <a className={styles.link} href="#">
                Read More &gt;
              </a>
            </div>

            <div>
              <div className={styles.kicker}>OUR MISSION</div>
              <h3 className={styles.subTitle}>
                Creating valuable content for creatives all around the world
              </h3>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}