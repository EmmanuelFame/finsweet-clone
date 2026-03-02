import styles from "./FeaturedIn.module.css";

function LogoMark() {
  return (
    <div className={styles.logo}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l8 5v8l-8 5-8-5V8l8-5Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <span>logoipsum</span>
    </div>
  );
}

export function FeaturedIn() {
  return (
    <section className={styles.wrap}>
      <div className={`container ${styles.row}`}>
        <div className={styles.left}>
          <div className={styles.small}>We are</div>
          <div className={styles.big}>Featured in</div>
        </div>

        <div className={styles.logos}>
          <LogoMark />
          <LogoMark />
          <LogoMark />
          <LogoMark />
          <LogoMark />
        </div>
      </div>
    </section>
  );
}