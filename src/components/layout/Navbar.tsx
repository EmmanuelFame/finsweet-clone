import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.brand}>
          {"{Finsweet"}
        </NavLink>

        <nav className={styles.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
        </nav>

        <button className={styles.subscribe}>Subscribe</button>
      </div>
    </header>
  );
}