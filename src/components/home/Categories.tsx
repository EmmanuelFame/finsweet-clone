import { useState } from "react";
import styles from "./Categories.module.css";
import { IconBusiness, IconRocket, IconChart, IconTech } from "../icons/Icons";

type Category = {
  id: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ size?: number }>;
};

const CATEGORIES: Category[] = [
  { id: "business", title: "Business", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Icon: IconBusiness },
  { id: "startup", title: "Startup", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Icon: IconRocket },
  { id: "economy", title: "Economy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Icon: IconChart },
  { id: "technology", title: "Technology", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Icon: IconTech },
];

export function Categories() {
  const [activeId, setActiveId] = useState("startup");

  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.heading}>Choose A Category</h2>

        <div className={styles.grid}>
          {CATEGORIES.map((c) => {
            const isActive = c.id === activeId;

            return (
              <button
                key={c.id}
                className={`${styles.card} ${isActive ? styles.active : ""}`}
                onClick={() => setActiveId(c.id)}
                type="button"
              >
                <div className={styles.iconBox}>
                  <c.Icon size={20} />
                </div>

                <div className={styles.cardTitle}>{c.title}</div>
                <div className={styles.cardText}>{c.description}</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}