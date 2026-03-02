import styles from "./Footer.module.css";
import { IconFacebook, IconTwitter, IconInstagram, IconLinkedIn } from "../icons/Icons";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>{"{Finsweet"}</div>

          <div className={styles.links}>
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

         
        <div className={styles.newsletter}>
          <h3 className={styles.newsTitle}>
            Subscribe to our news letter to get latest updates and news
          </h3>

          <div className={styles.formRow}>
            <input className={styles.input} placeholder="Enter Your Email" />
            <button className={styles.btn}>Subscribe</button>
          </div>
        </div>

        <div className={styles.bottom}>
          <div>
            <div>Finstreet 118 2561 Fintown</div>
            <div>Hello@finsweet.com &nbsp; 020 7993 2905</div>
          </div>

          <div className={styles.social}>
            <a href="#" aria-label="Facebook"><IconFacebook /></a>
            <a href="#" aria-label="Twitter"><IconTwitter /></a>
            <a href="#" aria-label="Instagram"><IconInstagram /></a>
            <a href="#" aria-label="LinkedIn"><IconLinkedIn /></a>
            </div>
        </div>
      </div>
    </footer>
  );
}