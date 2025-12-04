import React from "react";
import styles from "../Styles/Customer.module.css";
import c1 from "../Images/d1.png";
import c2 from "../Images/d2.png";
import c3 from "../Images/d3.png";
import c4 from "../Images/d4.png";
import c5 from "../Images/d5.png";
import c6 from "../Images/d6.png";
const customers = [
  {
    name: "John Doe",
    role: "CO Founder",
    rating: "4.9",
    image: c1,
    text: "I am text block. Click edit button to change this text. Lorem, consectetur adipiscing elit."
  },
  {
    name: "Mark Shoo",
    role: "CO Founder",
    rating: "4.9",
    image: c2,
    text: "I am text block. Click edit button to change this text. Lorem, consectetur adipiscing elit."
  },
  {
    name: "Donald",
    role: "CO Founder",
    rating: "4.9",
    image: c3,
    text: "I am text block. Click edit button to change this text. Lorem, consectetur adipiscing elit."
  },
  {
    name: "William",
    role: "CO Founder",
    rating: "4.9",
    image: c4,
    text: "I am text block. Click edit button to change this text. Lorem, consectetur adipiscing elit."
  },
  {
    name: "David lee",
    role: "CO Founder",
    rating: "4.9",
    image: c5,
    text: "I am text block. Click edit button to change this text. Lorem, consectetur adipiscing elit."
  },
  {
    name: "Jonathan",
    role: "CO Founder",
    rating: "4.9",
    image: c6,
    text: "I am text block. Click edit button to change this text. Lorem, consectetur adipiscing elit."
  }
];

export default function CustomersExperiences() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Customers Experiences</h2>

      <div className={styles.grid}>
        {customers.map((c, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.headerRow}>
              <div className={styles.userInfo}>
                <img src={c.image} alt={c.name} className={styles.avatar} />
                <div>
                  <h3 className={styles.name}>{c.name}</h3>
                  <p className={styles.role}>{c.role}</p>
                </div>
              </div>

              <div className={styles.rating}>
                <span>{c.rating}</span>
                <span className={styles.star}>⭐</span>
              </div>
            </div>

            <p className={styles.text}>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

