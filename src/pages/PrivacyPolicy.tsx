import React from "react";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Privacy Policy</h1>
        <span>Last Updated on 27th January 2022</span>
      </header>

      <main className={styles.content}>
        <section>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor.
            Arcu non odio euismod lacinia at quis risus sed vulputate.
          </p>
          <p>
            Vitae sapien pellentesque habitant morbi tristique senectus et
            netus. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Nibh
            nisl condimentum id venenatis a condimentum vitae sapien.
          </p>
        </section>

        <section>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Scelerisque viverra mauris in aliquam sem fringilla ut morbi
            tincidunt.
          </p>
          <p>
            Sagittis purus sit amet volutpat consequat mauris nunc congue nisi.
            Justo donec enim diam vulputate ut pharetra sit amet aliquam.
            Porttitor massa id neque aliquam vestibulum morbi blandit cursus.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
