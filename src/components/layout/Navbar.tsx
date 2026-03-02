import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>{"{Finsweet"}</div>

        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">About Us</a>
          <a href="#">Contact us</a>
        </nav>

        <button className={styles.subscribe}>Subscribe</button>
      </div>
    </header>
  );
}