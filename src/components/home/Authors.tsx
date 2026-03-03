import styles from "./Authors.module.css";

import auth1 from "../../assets/auth1.png";
import auth2 from "../../assets/auth2.png";
import auth3 from "../../assets/auth3.png";
import auth4 from "../../assets/auth4.png";

import {
  IconFacebook,
  IconTwitter,
  IconInstagram,
  IconLinkedIn,
} from "../icons/Icons";

type AuthorCard = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  highlighted?: boolean;
};

const AUTHORS: AuthorCard[] = [
  { id: "a1", name: "Floyd Miles", role: "Content Writer @Company", avatar: auth1 },
  { id: "a2", name: "Dianne Russell", role: "Content Writer @Company", avatar: auth2, highlighted: true },
  { id: "a3", name: "Jenny Wilson", role: "Content Writer @Company", avatar: auth3 },
  { id: "a4", name: "Leslie Alexander", role: "Content Writer @Company", avatar: auth4 },

  // extra 4 (reuse avatars for now)
  { id: "a5", name: "Guy Hawkins", role: "Content Writer @Company", avatar: auth1 },
  { id: "a6", name: "Eleanor Pena", role: "Content Writer @Company", avatar: auth2 },
  { id: "a7", name: "Robert Fox", role: "Content Writer @Company", avatar: auth3 },
  { id: "a8", name: "Jacob Jones", role: "Content Writer @Company", avatar: auth4 },
];

export function Authors() {
  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.heading}>List of Authors</h2>

        <div className={styles.grid}>
          {AUTHORS.map((a) => (
            <article
              key={a.id}
              className={`${styles.card} ${a.highlighted ? styles.highlight : ""}`}
            >
              <div className={styles.avatarWrap}>
                <img className={styles.avatar} src={a.avatar} alt={a.name} />
              </div>

              <h3 className={styles.name}>{a.name}</h3>
              <p className={styles.role}>{a.role}</p>

              <div className={styles.social}>
                <a href="#" aria-label={`${a.name} Facebook`}><IconFacebook /></a>
                <a href="#" aria-label={`${a.name} Twitter`}><IconTwitter /></a>
                <a href="#" aria-label={`${a.name} Instagram`}><IconInstagram /></a>
                <a href="#" aria-label={`${a.name} LinkedIn`}><IconLinkedIn /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}