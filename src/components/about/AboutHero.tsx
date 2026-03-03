import aboutHomeImg from "../../assets/abouthome.png";
import styles from "./AboutHero.module.css";

export function AboutHero() {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        {/* Top text row */}
        <div className={styles.top}>
          <div>
            <div className={styles.kicker}>ABOUT US</div>
            <h1 className={styles.title}>
              We are a team of content writers who share their learnings
            </h1>
          </div>

          <p className={styles.lead}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Image + stats overlay */}
        <div className={styles.imageWrap}>
          <img className={styles.image} src={aboutHomeImg} alt="Team" />

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>12+</div>
              <div className={styles.statLabel}>Blogs Published</div>
            </div>

            <div className={styles.stat}>
              <div className={styles.statValue}>18K</div>
              <div className={styles.statLabel}>Views on Finsweet</div>
            </div>

            <div className={styles.stat}>
              <div className={styles.statValue}>30K</div>
              <div className={styles.statLabel}>Total active Users</div>
            </div>
          </div>
        </div>

        {/* Mission / Vision row */}
        <div className={styles.bottom}>
          <div className={styles.block}>
            <div className={styles.smallKicker}>OUR MISSION</div>
            <h3 className={styles.h3}>
              Creating valuable content for creatives all around the world
            </h3>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className={styles.block}>
            <div className={styles.smallKicker}>OUR VISION</div>
            <h3 className={styles.h3}>
              A platform that empowers individuals to improve
            </h3>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}