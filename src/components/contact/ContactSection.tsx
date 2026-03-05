import React from "react";
import styles from "./ContactSection.module.css";

const ContactSection: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.smallTitle}>CONTACT US</span>
        <h2>Let’s Start a Conversation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className={styles.contactCard}>
        <div>
          <span className={styles.label}>Working Hours</span>
          <h4>Monday To Friday</h4>
          <p>9:00 AM to 8:00 PM</p>
          <small>Our Support Team is available 24/7</small>
        </div>

        <div>
          <span className={styles.label}>Contact Us</span>
          <h4>020 7993 2905</h4>
          <p>hello@company.com</p>
        </div>
      </div>

      <form className={styles.form}>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Your Email" />
        <select>
          <option>Query Related</option>
          <option>General Inquiry</option>
          <option>Support</option>
        </select>
        <textarea placeholder="Message" rows={4}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;